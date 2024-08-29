import "../../Css/Entrolled.css"
import { useState , useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import teacherpic from "../../Images/academy.png";

import lessonicon from "../../Images/lesson.svg"
import swal from 'sweetalert';

const Entrolled =() => {
  const navigate = useNavigate();

  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
  const token = localStorage.getItem('token');
    const [enrollcourse, setenrollcourse] = useState([]);
    useEffect(() => {
        const userId = sessionStorage.getItem('userid');
        // console.log(userId);
           axios
          .get(ROOT_URL + `/api/v1/getenrolledcourse/${userId}`,{
            headers: {
              Authorization: `Bearer ${token}`,
            }
     
          }

          )
          .then((enrollcoursedetail) => {
            setenrollcourse(enrollcoursedetail.data);
            console.log(enrollcoursedetail.data);
          })
          .catch((err) =>{ 
            console.log(err);
            swal("Opps!", "Please login again!", "warning")
            localStorage.removeItem('token');
            navigate('/login');

          });
      }, []);

    
  
  return (
   <>
    
    <div className="container" >
    <h3 className="fw-bold">Enrolled Courses</h3>
    <div className="container py-2">
    <div className="row row-cols-lg-2  row-cols-1 row-cols-md-2">
    {enrollcourse ? (
      enrollcourse.map((course) => (
    <div className='col'key={course._id} >
        <div className="card h-100">
          <img className=" image-fuild card-img-top cardimage " src={course.image} alt="Sample photo" />
          <div className="card-body">
            <div className='row'>
              <div className='col-6'>
                <img src={lessonicon} width={15} height={15} />
                <span className='ms-2'>{course.total_video} videos</span>
              </div>
              <div className='col-6 text-end'>
                <span className=' h5'>{course.course_price}/-</span> 
              </div>  
            </div>
            <h5 className='mt-3'>{course.course_name}</h5>
            <hr />
            <div className="row">
              
              <div className='col-2'><img className='rounded-circle' width={40} height={40} src={teacherpic} />
              </div>
              <div className='col-5 mt-2'><span>{course.teacher_name}</span> <br/><span className="text-muted">{course.teacher_dept}</span>
              </div>
              <div className='col-5 text-end'><a className='buttonlearnmore' href={`/courseview/${course._id}`}><button className="btn-lg learnmore viewcourse">View Course</button></a></div>
            </div>

          </div>
        </div>
      </div>
      
      ))
      ) :(<div></div>)}
      </div>
      </div>
      </div>
    
    </>
  )
}

export default Entrolled