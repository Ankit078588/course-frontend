
import { useState , useEffect} from 'react';
import axios from "axios";
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
function Home() {
  const navigate = useNavigate();
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
  const [totalcourse, settotalcourse] = useState([]);
  useEffect(() => {
    const userId = sessionStorage.getItem('userid');
    const token = localStorage.getItem('token');
    //  console.log(token);
       axios
      .get(ROOT_URL + `/api/v1/getenrolledcourse/${userId}`,{
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
      .then((total_course) => {
        settotalcourse(total_course.data);
        console.log(total_course.data);
      })
      .catch((err) =>{
        console.log(err);
        swal("Session Expired!", "Your session has expired. Please log in again to continue.", "warning");
        localStorage.removeItem('token');
        sessionStorage.removeItem('username');
    sessionStorage.removeItem('userid');
        navigate('/login');
      } );
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