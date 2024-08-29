import '../Css/Mostpopularcourse.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import lessonicon from '../Images/lesson.svg'

import teacherpic from "../Images/academy.png";


function Mostpopularcourse() {
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;

  const [productdata, setproduct] = useState([])

  useEffect(() => {
    
    axios.get(ROOT_URL+'/api/v1/get_course')
      .then(productdata =>  
        setproduct(productdata.data.data))
      .catch(err => console.log(err))

  }, []);

  const redercoursecard = (productdata) => {
    return (
      <div className='col' key={productdata._id} >
        <div className="card h-100">
          <img className="card-img-top cardimage " src={productdata.image} alt="Sample photo" />
          <div className="card-body">
            <div className='row'>
              <div className='col-6'>
                <img src={lessonicon} width={20} height={20} />
                <span className='ms-2'>{productdata.total_video} videos</span>
              </div>
              <div className='col-6 text-end'>
                <span className=' h5'>{productdata.course_price}/-</span> 
              </div>
             
            </div>
            <h5 className='mt-3'>{productdata.course_name}</h5>
            {/* <p>{card.coursedetails}</p> */}

            {/* <span className='fw-bold'>{card.course_currentprice}</span>
        <label className='text-decoration-line-through'>{card.course_price}</label> */}
            <hr />
            <div className="row">
              
              <div className='col-2'><img className='rounded-circle' width={40} height={40} src={teacherpic} />
              </div>
              <div className='col-5 mt-2'><span>{productdata.teacher_name}</span>
              <br/><span className='text-muted'>{productdata.teacher_dept}</span></div>
              <div className='col-5 text-end'><a className='buttonlearnmore' href={`/coursedetails/${productdata._id}`}><button className=" btn-sm learnmore ">Learn More</button></a></div>
            </div>

          </div>
        </div>
      </div>
    )}
      
  return (
    <>
      <div className='mostpopular' >
        <div className="container py-5">
          <h1 className="display-4 text-center fw-bold heading" id='mostcourse'>
            Most Popular Courses
          </h1>

          <div className="container py-5 cardcontainer">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 ">

              {productdata.map(redercoursecard)}
              {/* {CourseInfo.map(rendercourse)} */}

            </div>
          </div>
        </div>
      </div>


    </>
  )
}
export default Mostpopularcourse

