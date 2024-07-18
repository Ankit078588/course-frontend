
import { useState , useEffect} from 'react';
import axios from "axios";
import { ROOT_URL } from "../Localhost";



function Home() {
  const [totalcourse, settotalcourse] = useState([]);
  useEffect(() => {
    const userId = sessionStorage.getItem('userid');
    // console.log(userId);
       axios
      .get(ROOT_URL + `/getenrolledcourse/${userId}`)
      .then((total_course) => {
        settotalcourse(total_course.data);
        console.log(total_course.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
   <>
   <h4 className='fw-bold'>Dashboard</h4>
            <div className="row">
              <div className="col-lg-4">
                <div className="card">
                  <div className='text-center mt-4'><i className="fa fa-book icon" ></i></div>
                  <div className="card-body">
                    <h5 className="card-title text-center">{totalcourse.length}</h5>
                    <h6 className="card-text text-center">Enrolled Courses</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
              <div className="card">
                  <div className='text-center mt-4'> <i className="fa fa-graduation-cap icon"  ></i></div>
                  <div className="card-body">
                    <h5 className="card-title text-center">{totalcourse.length}</h5>
                    <h6 className="card-text text-center">Active Courses</h6>
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-4">
              <div className="card">
                  <div className='text-center mt-4'><i className="fa fa-trophy icon" ></i></div>
                  <div className="card-body">
                    <h5 className="card-title text-center">0</h5>
                    <h6 className="card-text text-center">Completed Courses</h6>
                  </div>
                </div>
              </div> */}
            </div>
   </>
  )
}

export default Home