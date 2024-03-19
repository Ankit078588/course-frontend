import { useEffect , useState } from 'react';
import axios from 'axios';
import img1 from '../Images/Image.png';
// import img2 from '../Images/Image2.png';
// import img3 from '../Images/Image3.png';

import '../Css/blog.css'

function Blog() {
 

  const [ blogdata, setblogdata] = useState([])
  useEffect(() => {
    // const apiUrl = process.env.REACT_APP_API_URL;
    axios.get( 'http://localhost:8081/api/v1/blog')
    .then(blogdata => setblogdata(blogdata.data.data))
    .catch(err => console.log(err))
   
}, []);



const renderCard =(blogdata)=>{
 return( 
<div className="card" >
<img src={img1} className="card-img-top" alt="..." />
<div className="card-body">
  <h5 className="card-title">{blogdata.text}</h5>
  <p className="card-text">{blogdata.description}</p>
</div>
</div>
 )
}

  return (
    <>
      <h2 className="heading display-5 text-center mt-5 fw-bold">News and Blog</h2>
      <p className='text-center fw-bold'>synthosphere academy news and blog</p>
      <div className="container mt-5 mb-5">
        <div className="row row-cols-1 row-cols-md-3 ">
          {/* <div className="col"> */}
            {blogdata.map(renderCard)} 
        </div>
      </div>    
    </>
  )

 

  }



export default Blog
