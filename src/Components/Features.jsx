
import '../Css/Features.css'
import icon1 from '../Images/Book.png';
import icon2 from '../Images/Frame.png';
import icon3 from '../Images/Frame1.png'
import icon4 from '../Images/Frame2.png'


function Features() {
    return (
        <>
            <div className='features'>
                <div className="container py-5">
                    <h1 className="display-4 text-center fw-bold heading">
                        Our Special Features For You
                    </h1>

                   <div className="row py-5 g-4" >

                        <div className="col-lg-3 ">
                            <div className="card  align-items-center carddesign1 cardshadow">
                                <div className='feature mt-3' id='feature1'> 

                                <img className="img mt-3 ms-3 " src={icon1} width={50}  alt="100%x280" />
                                </div>

                                <div className="card-body text-center">
                                    <h5 className="card-title  ">Pro Programs</h5>
                                    <h6 className="card-text">This Academy offers elite programs for professional skill enhancement and career advancement</h6>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3  ">
                            <div className="card align-items-center carddesign2 cardshadow">
                                <div className=' feature mt-3' id='feature2'> 
                                <img className="img mt-3 ms-3" src={icon2} width={50} alt="100%x280" />
                                </div>

                                <div className="card-body">
                                    <h5 className="card-title text-center fw-bold">24/7 Support</h5>
                                    <h6 className="card-text text-center">Around-the-clock support available to all academy students for timely assistance & guidance.</h6>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 ">
                            <div className="card align-items-center carddesign3 cardshadow">
                                <div className='feature mt-3' id='feature3'>
                                     <img className="img  mt-3 ms-3" src={icon3} width={50} alt="100%x280" /></div>

                                <div className="card-body">
                                    <h5 className="card-title text-center fw-bold">Career Planing</h5>
                                    <h6 className="card-text text-center">Expert guidance for crafting personalized career plans to achieve professional aspirations.</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 ">
                            <div className="card align-items-center carddesign4 cardshadow">
                                <div className='feature mt-3' id='feature4'> 
                                <img className="img  mt-3 ms-3" src={icon4} width={50} alt="100%x280" /></div>

                                <div className="card-body">
                                    <h5 className="card-title text-center fw-bold">Professional Learning</h5>
                                    <h6 className="card-text text-center">Discover advanced learning opportunities tailored for professional development</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Features