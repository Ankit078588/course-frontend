import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Vimeo from "@u-wave/react-vimeo";
import "../Css/Coursedetails.css";
// import pic from '../Images/Classroom.png'

import teacherpic from "../Images/academy.png";
import axios from "axios";
import lessonicon from "../Images/lesson.svg";

function Coursedetails() {
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
  const [coursedetails, setcoursedetail] = useState([]);

  const [productdata, setproduct] = useState([]);
  const navigate = useNavigate();

  const { id } = useParams();
  const userId = sessionStorage.getItem("userid");
  // console.log(id);
  const [viewcourse, setviewcourse] = useState([]);
  const checkPurchaseStatus = async () => {
    axios
      .get(ROOT_URL + `/api/auth/orderdetails/${userId}`)
      .then((details_course) => {
        setviewcourse(details_course.data);
        console.log(viewcourse);
        console.log(details_course.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    console.log(userId);
    if (userId) {
      checkPurchaseStatus();
    }
  }, []);

  useEffect(() => {
    axios
      .get(ROOT_URL + `/api/v1/getcoursebyid/${id}`)
      .then((coursedetail) => {
        setcoursedetail(coursedetail.data);

        console.log(coursedetails);
      })
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    axios
      .get(ROOT_URL + "/api/v1/get_course")
      .then((productdata) => setproduct(productdata.data.data))
      .catch((err) => console.log(err));
  }, []);

  const handleButtonClick = () => {
    if (!userId) {
      navigate("/login");
    } else if (!hasPurchased) {
      navigate(`/checkout/${coursedetails._id}`);
    }
  };
  const hasPurchased = viewcourse && viewcourse.some((view) => view.id === id);

  const redercoursecard = (productdata) => {
    return (
      <div className="col" key={productdata.objectid}>
        <div className="card h-100">
          <img
            className="card-img-top cardimage "
            src={productdata.image}
            alt="Sample photo"
          />
          <div className="card-body">
            <div className="row">
              <div className="col-6">
                <img src={lessonicon} width={20} height={20} />
                <span className="ms-2">{productdata.total_video} videos</span>
              </div>
            </div>
            <h5 className="mt-3">{productdata.course_name}</h5>
            {/* <p>{card.coursedetails}</p> */}

            {/* <span className='fw-bold'>{card.course_currentprice}</span>
        <label className='text-decoration-line-through'>{card.course_price}</label> */}
            <hr />
            <div className="row">
              <div className="col-lg-2">
                <img
                  className="rounded-circle"
                  width={40}
                  height={40}
                  src={teacherpic}
                />
              </div>
              <div className="col-lg-6 mt-2">
                <span>{productdata.teacher_name}</span>
                <br />
                <span className="text-muted">{productdata.teacher_dept}</span>
              </div>

              <div className="col-lg-4 text-end">
                <a
                  className="buttonlearnmore"
                  href={`/coursedetails/${productdata._id}`}
                >
                  <button className=" btn-sm learnmore ">Learn More</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const formattedDate = new Date(coursedetails.createdAt).toLocaleDateString();
  return (
    <>
      {coursedetails ? (
        <div className="container mb-5">
          <div className="row" key={coursedetails._id}>
            <div className="col-lg-7  mt-3">
              <h3 className=" mb-4 fw-bold">{coursedetails.course_name}</h3>
              
              <div className="vimeo-container">
              <Vimeo
                video={coursedetails.introduction_video}
                controls
                autoplay={false}
                
              />
              </div>
              

              <div className="mt-2">
                <h4 className="fw-bold">Course Description</h4>
              </div>
              <hr className="w-100" />
              <div>
                <p
                  className="paratext"
                  dangerouslySetInnerHTML={{
                    __html: coursedetails.course_description,
                  }}
                ></p>
              </div>
              <div>
                <h5 className="fw-bold">What will you learn?</h5>

                <div
                  className=""
                  dangerouslySetInnerHTML={{
                    __html: coursedetails.wewilllearn,
                  }}
                ></div>
              </div>
              {/* course Content---------*/}
              <div>
                <h4 className="fw-bold">Course Content</h4>
                {coursedetails.sections && coursedetails.sections.length > 0 ? (
                  coursedetails.sections.map((section) => (
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
                          className="accordion-collapse collapse "
                          data-bs-parent="#accordionExample"
                        >
                          {section.chapters && section.chapters.length > 0 ? (
                            section.chapters.map((chapter) => (
                              <div
                                className="accordion-body"
                                key={chapter.chapter_id}
                              >
                                <div className="chapter_name">
                                  <div>{chapter.chapter_name}</div>
                                </div>
                              </div>
                            ))
                          ) : (
                            <div>noo chapters available</div>
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
            <div className="col-lg-4  mt-5">
              <div className="border" id="cartpart">
                <div className="ms-4 mt-4">
                  <span className="fw-bold h2 ">
                    ₹{coursedetails.course_price}
                  </span>
                </div>
                {/* {sessionStorage.getItem("userEmail") ? (
                  <>
                    <div className=" text-center mt-4">
                      <button
                        className="  w-75"
                        id="cartbutton"
                        onClick={() => dispatch(addItem({ price: "200" }))}
                      >
                        Add to cart
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className=" text-center mt-4">
                      <button
                        className="  w-75"
                        id="cartbutton"
                        onClick={addtocarthandler}
                      >
                        Add to cart
                      </button>
                    </div>
                  </>
                )} */}

                {hasPurchased ? (
                  <>
                    {" "}
                    <div className=" text-center mt-4">
                      <a href={`/courseview/${id}`}>
                        <button className="w-75 cartbutton" id="viewbutton">
                          view course
                        </button>
                      </a>
                    </div>
                  </>
                ) : (
                  <>
                    <div className=" text-center mt-4">
                      <button
                        className=" w-75 cartbutton"
                        id="buybutton"
                        onClick={handleButtonClick}
                      >
                        Buy Now
                      </button>
                    </div>
                  </>
                )}

                <div className="ms-4 text-center mt-4 mb-4">
                  30-Day Money-Back Guarantee
                </div>
              </div>
              <div className=" border rounded">
                <div className="ms-4 mt-2 mb-4">
                  <div>
                    <i className="fa fa-book"></i>
                    <span className="fw-bold ms-2 paratext">
                      Beginner Level
                    </span>
                  </div>

                  <div className="mt-2">
                    <i className="fa fa-clock-o"></i>
                    <span className="fw-bold ms-2 paratext">
                      Lifetime access
                    </span>
                  </div>
                  <div className="mt-2">
                    <i className="fa fa-book"></i>
                    <span className="fw-bold ms-2 paratext">
                      Requirements: Laptop/mobile & internet connection
                    </span>
                  </div>
                  {coursedetails ? (
                    <div className="mt-2">
                      <i className="fa fa-book"></i>
                      <span className="fw-bold ms-2 paratext ">
                        {formattedDate} last updated
                      </span>
                    </div>
                  ) : (
                    <div>no data</div>
                  )}

                  <div className="mt-2">
                    <i className="fa fa-certificate"></i>
                    <span className="fw-bold ms-2 paratext">
                      Certificate of completion{" "}
                    </span>
                  </div>
                </div>
              </div>
              <div className="border rounded mt-4">
                <div className="ms-4 mt-2 mb-2">
                  <h6 className="fw-bold">A course by</h6>
                  <div className="row">
                    <div className="col-lg-2">
                      <img
                        className="rounded-circle"
                        width={45}
                        height={45}
                        src={teacherpic}
                      />
                    </div>
                    <div className="col-lg-10">
                      <span className="fw-bold paratext ">
                        {coursedetails.teacher_name}
                      </span>
                      <br />
                      <span className="paratext text-muted">
                        ({coursedetails.teacher_dept})
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="border rounded mt-4">
                <div className="ms-4 mt-2 mb-4">
                  <h6 className="fw-bold mt-4">Apply Coupon</h6>
                  <div className="search couponbutton mt-4  ">
                    <input
                      type="text"
                      className="form-control couponinput "
                      placeholder="Enter coupon"
                    />
                    <button className="btn">Apply</button>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <hr />
        </div>
      ) : (
        <p>No courses available</p>
      )}

      
      {/* end course Content---------*/}
      {/* <div className='mt-4'>
              ---------------teacher description------------
              <h4 className='fw-bold'>Teacher Description </h4>
            <hr className="w-100" />
            <div>
            <p className='paratext'>Dipan Das, a crypto teacher at an academy, possesses a strong educational background in finance, economics, computer science, or related fields, 
            often complemented by certifications in blockchain technology and cryptocurrency. He has extensive industry knowledge, encompassing blockchain technology, various cryptocurrencies, 
            trading, investing strategies, and relevant regulatory and legal aspects. His teaching experience includes simplifying complex concepts for diverse student
             groups and proficiency in both in-person and online instructional methods. Technically adept, he uses digital tools for teaching and demonstrates the use of crypto wallets, exchanges, and other blockchain technologies. Passionate about cryptocurrencies, Dipan Das possesses excellent communication skills and remains analytical and detail-oriented. His role involves developing and delivering comprehensive curricula, conducting lectures and workshops, providing practical training, and continuously updating his knowledge to keep the curriculum relevant. 
            These attributes ensure that he can effectively educate and inspire students in the dynamic world of cryptocurrencies</p>
            </div>

            </div> */}
      {/* </div> */}

     

     
      <div>
        <div className="container  mb-3">
          <h4 className="fw-bold mb-4">Related Courses</h4>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 ">
            {productdata.map(redercoursecard)}
          </div>
        </div>
      </div>
    </>
  );
}
export default Coursedetails;
