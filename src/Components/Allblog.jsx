import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../Css/blog.css';
export const Allblog = () => {
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
  const [allblogdata, setallblogdata] = useState([])
  useEffect(() => {
    axios.get(ROOT_URL+'/api/v1/get_blog')
      .then(blogdata => setallblogdata(blogdata.data.data))
      
      .catch(err => console.log(err))
      // console.log(blogdata)
  }, []);
  const redercoursecard = (blogdata) => {
    return (
      <a className='blogcontent' href={`/blog/${blogdata.slug}`} key={blogdata._id} >
        <div className="card h-100" >
        <div className='container mt-3 '>
  <img src={blogdata.image} className="card-img-top d-block cardimage " alt="noimage"/>
  <div className="card-body">
  <h5 className="card-title">{blogdata.blogtitle}</h5>
            <p className="card-text" dangerouslySetInnerHTML={{
                    __html: blogdata.shortdescription}}></p>
  </div>
  </div>
</div>
</a>    
    )}
  return (
    <>
     <h5 className="heading text-center mt-5 fw-bold">News and Blog</h5> 
      <p className='text-center fw-bold'>
Explore an array of captivating blogs on technology, science, arts, and more, offering valuable insights and knowledge for curious minds to delve into.
</p>
<div className="container py-5">
<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 ">
{allblogdata.map(redercoursecard)}

</div>
</div>
    </>

   
  )
}
