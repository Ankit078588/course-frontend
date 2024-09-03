import  React,{ useState, useEffect,useRef } from "react";
import axios from "axios";
import VimeoPlayer from "./Vimeoplayer";

import Generatecertificate from "./Generatecertificate";
//  import Player from '@vimeo/player';
import { useParams } from "react-router-dom";
import "../Css/courseview.css";
const Courseview = () => {
  const { id } = useParams();
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
  // const [data, setData] = useState(null);
  const [coursedata, setcoursedata] = useState([]);
  const [videoSource, setVideoSource] = useState("988855316");
  const [completedChapters, setCompletedChapters] = useState([]);
  const [currentChapterId, setCurrentChapterId] = useState(null);
  const [allChapters, setAllChapters] = useState([]);
  const userId= sessionStorage.getItem("userid");

  const handleChapterClick = (event, newVideoSource,chapterId) => {
   
    console.log(newVideoSource);
    event.preventDefault();
    if (videoSource !== newVideoSource) {
      setVideoSource(newVideoSource);
    }
    setCurrentChapterId(chapterId);
  };
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(
          ROOT_URL + `/api/v1/getcoursebyid/${id}`
        );
        setcoursedata(response.data);

        console.log(response.data);
        if (response.data && response.data.sections) {
          const allChaptersList = response.data.sections.flatMap(section => section.chapters.map(chapter => chapter.chapter_id));
          setAllChapters(allChaptersList);
        }
        if(response.data) {
          const course_name = response.data.course_name;
          const teacher_name = response.data.teacher_name;
          // alert(course_name );
          // alert(teacher_name);
          localStorage.setItem('course_name', course_name);
          localStorage.setItem('Teachername', teacher_name);
        }
        
      } catch (err) {
        console.log(err);
      }
    };

    fetchCourses();
  }, [id]);

  useEffect(() => {
    const isCourseCompleted = allChapters.length > 0 && allChapters.every(chapterId => completedChapters.includes(chapterId));
    if (isCourseCompleted) {
      console.log('All chapters completed');
      // You can trigger any additional actions here if needed
    }
  }, [completedChapters, allChapters]);

  useEffect(() => {
    const fetchCompletedChapters = async () => {
      try {
        const response = await axios.get(ROOT_URL + `/api/v1/getcompletedchapter/${userId}/${id}`);
        setCompletedChapters(response.data.chapters);
        console.log(response.data.chapters);
      } catch (err) {
        console.log(err);
      }
    };
  
    fetchCompletedChapters();
  }, [id, userId]);
  const handleGenerateCertificate = () => {
    Generatecertificate(); 
  };
  const handleEnd = async() => {
    if (currentChapterId && !completedChapters.includes(currentChapterId)) {
      setCompletedChapters((prev) => [...prev, currentChapterId]);
      try {
        await axios.post(ROOT_URL + '/api/v1/completedchapter', {
          userId: userId,  // Assume you have userId stored somewhere
          courseId: id,
          chapterId: currentChapterId
        });
        console.log('Chapter completion saved to the database');
      } catch (err) {
        console.error('Error saving chapter completion', err);
      }
    // alert('Video has ended');

  }

  }
  const isCourseCompleted = allChapters.length > 0 && allChapters.every(chapterId => completedChapters.includes(chapterId));
  
 
  
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="courseview">
              <div className="row justify-content-center">
                <div className="col-lg-8 col-12 col-sm-8">
                  <div className="video-part">
                    {coursedata ? (
                      <div key={coursedata._id}>
                        <h3 className="mt-3 mb-2 fw-bold">
                          {coursedata.course_name}
                        </h3>
                        <div className="vimeo-container">
                        <VimeoPlayer
        videoId={videoSource}  // Replace with your Vimeo video ID
       className="vimeo-player"
       width={800}
       height={500}
       autoplay={true} 
        onEnd={handleEnd}
      />
                          

                   </div>
                      </div>
                    ) : (
                      <div>No data</div>
                    )}
                  </div>
                  <div className="content-wrapper">
                    <div className="about_course mt-2">
                     
                      {coursedata ? (
                        <>
                        <h3 className="fw-bold mt-2">About Course</h3>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: coursedata.course_description,
                          }}
                        ></div>
                        </>
                      ) : (
                        <div>No data</div>
                      )}
                    </div>
                    <div className="course_imp">
                      <h5 className="fw-bold">What will you learn?</h5>
                      {coursedata ? (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: coursedata.wewilllearn,
                          }}
                        ></div>
                      ) : (
                        <div>No data</div>
                      )}
                    </div>
                    <div className=" mb-3 fw-bold"> Download your certificate of completion :
                      <button
                        onClick={handleGenerateCertificate}
                        className="buttoncerificate ms-2"
                        disabled={!isCourseCompleted}
                        style={{ cursor: !isCourseCompleted ? 'not-allowed' : 'pointer' }}
                        data-bs-toggle="tooltip" data-bs-placement="top" title="Please complete all the videos to download the certificate."
                      >
                        Download Certificate
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-8 col-12">
                  <div className="videolist-area ms-2 mb-3">
                    <div className="course-select-area border-radius-12">
                      <div className="course-title mb-4 mt-5 ">
                        <h5 className="fw-bold">Course Requirement</h5>
                      </div>

                      <div className="course-body">
                        {coursedata.sections &&
                        coursedata.sections.length > 0 ? (
                          coursedata.sections.map((section) => (
                            <div
                              className="accordion"
                              id="accordionExample"
                              key={section.section_id}
                            >
                              <div className="accordion-item accordionitem">
                                <h2 className="accordion-header">
                                  <button
                                    className="accordion-button collapsed accordionitem fw-bold"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#${section.section_id}`}
                                    aria-expanded="true"
                                    aria-controls={section.section_id}
                                  >
                                    {section.section_name}
                                  </button>
                                </h2>
                                <div
                                  id={`${section.section_id}`}
                                  className="accordion-collapse collapse"
                                  data-bs-parent="#accordionExample"
                                >
                                  {section.chapters &&
                                  section.chapters.length > 0 ? (
                                    section.chapters.map((chapter) => (
                                      <div
                                        className="accordion-body"
                                        key={chapter.chapter_id}
                                      >
                                        <div className="chapter"  onClick={(event) =>
                                              handleChapterClick(
                                                event,
                                                String(chapter.Video_link), chapter.chapter_id
                                              )
                                            }>
                                          <div className="ms-2 mt-1">
                                          {completedChapters ? (<>
                                            {completedChapters.includes(chapter.chapter_id) && ' ✅'}{chapter.chapter_name}
                                          </>)
                                          :(<>
                                            {chapter.chapter_name}
                                          </>)}
{/*                                             
                                            {completedChapters.includes(chapter.chapter_id) && ' ✅'} {chapter.chapter_name} */}
                                          </div>
                                        </div>
                                      </div>
                                    ))
                                  ) : (
                                    <div>noo</div>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))
                        ) : (
                          <p>No sections available.</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Courseview;
