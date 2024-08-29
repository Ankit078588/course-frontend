
const Wishlist =() => {
    const courseInfo = [
        {
          image: ["https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F26d8c986-c9fd-468b-b4be-660691f4aa48.jpg?source=next-article&fit=scale-down&quality=highest&width=700&dpr=1"],
          coursename: "The Cryptocurrency Course",
          // coursedetails:"Learn  about Cryptocurrency: From the Blockchain and Bitcoin to Cryptocurrency investing techniques!",
          coursereview: "4",
          course_currentprice: "₹899",
          course_price: "₹1899",
          total_video:"20",
          teacher_image: ["https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"],
          teachername: "David Das",
          teacherdept: "Teacher"
    
        },
        {
            image: ["https://cdn.elearningindustry.com/wp-content/uploads/2020/08/how-online-course-are-changing-music-education.jpg"],
            coursename: "Music Course",
            // coursedetails:"Expand your music composition skills through learning universal music theory principles, mindset, and ear training.You will learn  basic essential techniques that will allow you to play any song in any style!",
            coursereview: "4",
            total_video:"25",
            teacher_image: ["https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"],
            teachername: "Kesto Das",
            teacherdept: "Teacher"
          },
         
    ]
    
      const redercourse = (card, index)=>{
        return(
          <div className='col-lg-5 mt-3'>
          <div className="card" key={index} >
            <img className="card-img-top"  src={card.image} alt="Sample photo" />
            <div className="card-body">
              <div className='row'>
                <div className='col-6'>
                <i className='fa fa-graduation-cap'></i>
                <span className='ms-2'>{card.total_video} videos</span>
                </div>
                <div className='col-6 text-end'>
                          <span className='fw-bold'>{card.coursereview}</span>
                          
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star"></span>
            </div>
              </div>
            <h5 className='mt-3'>{card.coursename}</h5>
            {/* <p>{card.coursedetails}</p> */}
            
            {/* <span className='fw-bold'>{card.course_currentprice}</span>
            <label className='text-decoration-line-through'>{card.course_price}</label> */}
            <hr/>
            <div className="row">
              <div className='col-2'><img className='rounded-circle w-75' src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" />
                </div>
              <div className='col-4'><span>{card.teachername}</span>
              <br/><span>{card.teacherdept}</span></div>
              <div className='col-6'><a className='' href=''><button className="btn btn-primary">Learn More</button></a></div>
              
    
            </div>
           
            </div>
          </div>
          </div>
        )
       }

  return (
    <>
    <h3 className="fw-bold">Wishlist</h3>
    
    <div className="row cardrow">

    {courseInfo.map(redercourse)}
  </div>
  </>
   
  )
}

export default Wishlist