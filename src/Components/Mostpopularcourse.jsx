import "../Css/Mostpopularcourse.css";
import { useState, useEffect } from "react";
import axios from "axios";
import lessonicon from "../Images/lesson.svg";
import karate from "../Images/karate.jpg";
import teacherpic from "../Images/academy.png";
import music from "../Images/music.jpg";
import music2 from "../Images/music_banner.jpg";

function Mostpopularcourse() {
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;

  const [productdata, setproduct] = useState([]);

  useEffect(() => {
    axios
      .get(ROOT_URL + "/api/v1/get_course")
      .then((productdata) => setproduct(productdata.data.data))
      .catch((err) => console.log(err));
  }, []);

  const redercoursecard = (productdata) => {
    return (
      <div className="col" key={productdata._id}>
        <div className="card h-100 d-flex flex-column">
          <img
            className="card-img-top cardimage "
            src={productdata.image}
            alt="Sample photo"
          />
          <div className="card-body flex-grow-1">
            <div className="row">
              <div className="col-6">
                <img src={lessonicon} width={20} height={20} />
                <span className="ms-2">{productdata.total_video} videos</span>
              </div>
              <div className="col-6 text-end">
                <span className=" h5">{productdata.course_price}/-</span>
              </div>
            </div>
            <h5 className="mt-3">{productdata.course_name}</h5>
            <hr />
            <div className="row">
              <div className="col-2">
                <img
                  className="rounded-circle"
                  width={40}
                  height={40}
                  src={teacherpic}
                />
              </div>
              <div className="col-10 mt-2">
                <span>{productdata.teacher_name}</span>
                <br />
                <span className="text-muted">{productdata.teacher_dept}</span>
              </div>
            </div>
            </div>
            <div className=" card-footer row mt-3">
              <div className="col-12 text-center">
                <a
                  className="buttonlearnmore"
                  href={`/coursedetails/${productdata._id}`}
                >
                  <button className=" learnmore w-75 ">Learn More</button>
                </a>
              </div>
            </div>
        
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="mostpopular">
        <div className="container py-5">
          <h1 className="display-4 text-center fw-bold heading" id="mostcourse">
            Most Popular Courses
          </h1>

          <div className="container py-5 cardcontainer">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 ">
              {productdata.map(redercoursecard)}
              <div>
                <div className="card h-100 d-flex flex-column comingcard">
                  <img
                    className="card-img-top cardimage "
                    src={karate}
                    alt="Sample photo"
                  />
                  <div className="card-body flex-grow-1">
                    <div className="row">
                      <div className="col-6">
                        <img src={lessonicon} width={20} height={20} />
                        <span className="ms-2">10 videos</span>
                      </div>
                      <div className="col-6 text-end">
                        <span className=" h5">999/-</span>
                      </div>
                    </div>
                    <h3 className="mt-5 text-center">The karate course</h3>
                    </div>
                    <div className="card-footer row">
                      <div className="col-12 text-center">
                        <a>
                          <button
                            type="button"
                            className="coming w-75">
                            Coming soon
                          </button>
                        </a>
                      </div>
                    </div>
                
                </div>
              </div>
              <div>
              <div className="card h-100 d-flex flex-column comingcard">
                  <img
                    className="card-img-top cardimage "
                    src={music}
                    alt="Sample photo"
                  />
                  <div className="card-body flex-grow-1">
                    <div className="row">
                      <div className="col-6">
                        <img src={lessonicon} width={20} height={20} />
                        <span className="ms-2">10 videos</span>
                      </div>
                      <div className="col-6 text-end">
                        <span className=" h5">999/-</span>
                      </div>
                    </div>
                    <h3 className="mt-5 text-center">Music production course</h3>
                    </div>
                    <div className="card-footer row">
                      <div className="col-12 text-center">
                        <a>
                          <button
                            type="button"
                            className="coming w-75">
                            Coming soon
                          </button>
                        </a>
                      </div>
                    </div>
                
                </div>
                </div>
                <div>
                <div className="card h-100 d-flex flex-column comingcard">
                  <img
                    className="card-img-top cardimage "
                    src={music2}
                    alt="Sample photo"
                  />
                  <div className="card-body flex-grow-1">
                    <div className="row">
                      <div className="col-6">
                        <img src={lessonicon} width={20} height={20} />
                        <span className="ms-2">10 videos</span>
                      </div>
                      <div className="col-6 text-end">
                        <span className=" h5">999/-</span>
                      </div>
                    </div>
                    <h3 className="mt-5 text-center">The music course</h3>
                    </div>
                    <div className="card-footer row">
                      <div className="col-12 text-center">
                        <a>
                          <button
                            type="button"
                            className="coming w-75">
                            Coming soon
                          </button>
                        </a>
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
}
export default Mostpopularcourse;
