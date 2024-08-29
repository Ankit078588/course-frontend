import bg from '../Images/Studying.png';
import axios from 'axios';
import '../Css/Banner.css'
import icon from '../Images/Search.svg';
import { useState, useEffect } from 'react';
function Banner() { 
    const [query, setQuery] = useState('');
    const [courses, setCourses] = useState([]);
    const handleInputfieldChange = (e) => {
        setQuery(e.target.value);
    };
    const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
    useEffect(() => {
        const fetchCourses = async () => {
      
        if (query.length > 0) {
            document.getElementById('inputresult').style.display = 'block';
                axios.get( ROOT_URL+`/api/v1/searchcourse?q=${query}`)
                .then((response) => {
                    if(response.data.length === 0){
                        setCourses(['No_course_found']);      
                    }  else{
                    setCourses(response.data);
                    console.log(response.data);
                    }
                    
                  })
                  .catch((error) => {
                    console.log(error);
                 })
                }
                

                else {
                    document.getElementById('inputresult').style.display = 'none';
                    setCourses([]);
                    
                }
            }
            const debounceFetch = setTimeout(fetchCourses, 300);
                return () => clearTimeout(debounceFetch);
                }, [query]);
   
            
    return (
        <>
            <div className="banner"style={{ backgroundColor: "rgba(14, 18, 85, 1)" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mt-5">
                            <h1 className='display-2 text fw-bold'>Find your course</h1>
                            <h1 className='display-2 text fw-bold'>Change your life</h1><br />
                            <span className='para'>Discover Synthosphere Academy:  Elevate Your Knowledge. Offering Expert-Led Programs, Innovative Resources and a Vibrant Community, Empowering You to Thrive in the World of Synthesis and Beyond.</span><br /><br />
                            <div className="search mt-5">
                            <img className='searchicon' src={icon} width={20}/>
                               
                                <input type="text" className="form-control" id='searchinput' 
                                 placeholder="Find a course ?"
                                 value={query}
                                 onChange={handleInputfieldChange} />
                                <button  >Search Course</button>
                                <ul className="inputresult list-unstyled" id='inputresult'>
                {courses.map(course => ( 
                    <a href={`/coursedetails/${course._id}`}><li  className="p-2" key={course._id}>{course === "No_course_found" ? 'No course found': course.course_name}</li></a>
                ))
               
                }
            </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img src={bg} width="95%" />
                        </div>

                    </div>
                </div>


            </div>
         
        </>
    )
}

export default Banner