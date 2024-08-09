import { useState, useEffect, useRef} from "react";
import axios from "axios";
// import ReactPlayer from "react-player";
import Vimeo from "@u-wave/react-vimeo";
import { useParams } from "react-router-dom";
import "../Css/courseview.css";
const Courseview = () => {
  const { id } = useParams();
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
  // const [data, setData] = useState(null);
  const [coursedata, setcoursedata] = useState([]);
  const [videoSource, setVideoSource] = useState(
    "https://vimeo.com/988855316"
  );
  ///
  const [videoLinks , setvideolinks]= useState([])
  const playerRef = useRef(null);
  const [completedVideos, setCompletedVideos] = useState([]);
  const [allVideosCompleted, setAllVideosCompleted] = useState(false);
///
const handleVideoCompletion = (videoId) => {
  setCompletedVideos((prevCompletedVideos) => {
    const newCompletedVideos = [...new Set([...prevCompletedVideos, videoId])];
    
    if (newCompletedVideos.length === videoLinks.length) {
      setAllVideosCompleted(true);
      generateCertificate();
    }
    
    return newCompletedVideos;
  });
};
const generateCertificate = () => {
  console.log('All videos watched. Generating certificate...');
  // Add your certificate generation logic here
};
const handleVideoEnd = () => {
  alert('Video ended')
  // handleVideoCompletion(videoSource); // Mark the video as completed when it ends
};
 


//video complete event

///////////



  const handleChapterClick = (event, newVideoSource) => {
    event.preventDefault();
    console.log(newVideoSource);
    setVideoSource(newVideoSource);

  };
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(
          ROOT_URL + `/api/v1/getcoursebyid/${id}`
        );
        setcoursedata(response.data);
        
        console.log(response.data);
        const sections = coursedata.sections || [];

        // Safely map over the sections and chapters
        const videos = sections
          .map(section => 
            section.chapters?.map(chapter => chapter.Video_link) || []
          )
          .flat();
        setvideolinks(videos)
        console.log(videoLinks);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCourses();
  }, [id]);


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
                          <h3 className="mt-3 mb-1 fw-bold">
                            {coursedata.course_name}
                          </h3>
                          <div className="vimeo-container">
                          <Vimeo key={videoSource} video={videoSource} autoplay className="vimeo-player" onEnd={() => handleVideoEnd()}  loop={false} controls />
                                        </div>
                          
                          {/* <ReactPlayer
                                        controls
                                        width="100%"
                                        height="450px"
                                        url={videoSource}
                                      /> */}
                        </div>
                      ) : (
                        <div>No data</div>
                      )}
                      
                    </div>
                    <div className="content-wrapper">
                      <div className="about_course mt-2">
                        <h3 className="fw-bold">About Course</h3>
                        {coursedata ? (
                          <div
                            dangerouslySetInnerHTML={{
                              __html: coursedata.course_description,
                            }}
                          ></div>
                        ) : (
                          <div>No data</div>
                        )}
                        {/* {coursedata.map((course) => (
                          <div
                            dangerouslySetInnerHTML={{
                              __html: course.course_description,
                            }}
                          ></div>
                        ))} */}
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
                      {/* <div>
                        <h5 className="fw-bold">Who this course is for:</h5>
                        <ul>
                          <li>
                            Any students in college who want to start a career
                            in Blockchain & Cryptos
                          </li>
                          <li>Any Blockchain, Bitcoin & Cryptos enthusiast</li>
                          <li>
                            Anyone interested in building their own Blockchain
                          </li>
                          <li>
                            Anyone interested in Blockchain and its applications
                          </li>
                        </ul>
                      </div> */}
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
                                        <div className="chapter">
                                          <div
                                            onClick={(event) =>
                                              handleChapterClick(event, String(chapter.Video_link)   
                                              )
                                            }
                                          >
                                            {" "}
                                            {chapter.chapter_name}
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

                        {/* {coursedata.map((course) => (
                              <div key={course._id}>
                                {course.sections.map((section) => (
                                     <div className="accordion" id="accordionExample" key={section.section_id}>
                                     <div className="accordion-item accordionitem">
                                      <h2 className="accordion-header"></h2>
                                      <button
                                        className="accordion-button collapsed accordionitem fw-bold"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne">{section.section_name}
                                        
                                      </button>

                                      <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample" >

                                      {section.chapters.map(
                                  (chapter) => (  
                                     <div>
                                     <div className="accordion-body">
                                <div className="chapter" key={chapter.chapter_id}>
                                <div onClick={(event) =>
                                      handleChapterClick(
                                        event,[chapter.Video_link]
                                      )} > {chapter.chapter_name}</div>
                                </div>
                                </div>
                                     </div>
                                     
                                  )
                                )}
                                </div>
                                </div>
                                    </div>
                                ))}  
                              </div>
                                ))} */}
                      </div>

                      {/* <button
                                className="accordion-button collapsed accordionitem fw-bold"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                              >
                                Section-1: Introduction
                              </button> */}

                      {/* <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button
                                className="accordion-button collapsed accordionitem fw-bold"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                              >
                                Section-2: How to Start
                              </button>
                            </h2>
                            <div
                              id="collapseTwo"
                              className="accordion-collapse collapse"
                              data-bs-parent="#accordionExample" >
                              <div className="accordion-body">
                                <div className="chapter">
                                  <div
                                    className="row"
                                    onClick={(e) =>
                                      handleChapterClick(
                                        e,
                                        "https://youtu.be/ny7ZWVt3ymo?si=6onEl2HZhn59CN2o"
                                      )
                                    }
                                  >
                                    <div className="col">
                                      <i className="fa fa-play-circle iconplay"></i>
                                      <span className="ms-3">Introduction</span>
                                    </div>
                                    <div className="col text-end">10:05</div>
                                  </div>
                                </div>
                                <div className="chapter">
                                  <div
                                    className="row mt"
                                    onClick={(e) =>
                                      handleChapterClick(
                                        e,
                                        "https://youtu.be/0awA5Uw6SJE?si=rLQPbwbM5L0cnnUA"
                                      )
                                    }
                                  >
                                    <div className="col">
                                      <i className="fa fa-play-circle iconplay"></i>
                                      <span className="ms-3">Introduction</span>
                                    </div>
                                    <div className="col text-end">15:05</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div> */}
                      {/* <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button
                                className="accordion-button collapsed accordionitem fw-bold"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                              >
                                Section-3: Discuss
                              </button>
                            </h2>
                            <div
                              id="collapseThree"
                              className="accordion-collapse collapse"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                <div className="chapter">
                                  <div
                                    className="row"
                                    onClick={(e) =>
                                      handleChapterClick(
                                        e,
                                        "https://youtu.be/0awA5Uw6SJE?si=rLQPbwbM5L0cnnUA"
                                      )
                                    }
                                  >
                                    <div className="col">
                                      <i className="fa fa-play-circle iconplay"></i>
                                      <span className="ms-3">Introduction</span>
                                    </div>
                                    <div className="col text-end">10:05</div>
                                  </div>
                                </div>
                                <div className="chapter">
                                  <div
                                    className="row mt"
                                    onClick={(e) =>
                                      handleChapterClick(
                                        e,
                                        "https://www.youtube.com/live/4diUcRCwbt8?si=FaC31waKtZN2bzYN"
                                      )
                                    }
                                  >
                                    <div className="col">
                                      <i className="fa fa-play-circle iconplay"></i>
                                      <span className="ms-3">Introduction</span>
                                    </div>
                                    <div className="col text-end">15:05</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div> */}
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
