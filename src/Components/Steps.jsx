import pic from '../Images/Classroom.png'
import icon1 from '../Images/IconsStep.png'
import icon2 from '../Images/IconsStep2.png'
import icon3 from '../Images/IconsStep4.png'
function Steps() {
    return (
        <>
            <div className="container py-1"  style={{ backgroundColor: "rgb(255,255,255)" }}>
                <h1 className="display-4 fw-bold mt-5 heading">
                    Learning Steps For You</h1>
                <div className="row py-4">
                    <div className="col-lg-6">
                        <div className='row py-3'>
                            <div className='col-lg-2'>
                            <img src={icon1}/>
                            </div>
                            
                            <div className='col-lg-4'>
                                <span className='font-text'>Create Account</span><br/>
                                <span className='font-text'>Have to create an account</span>
                            </div>
                        </div>
                        <div className='row py-3'>
                            <div className='col-lg-2'>
                            <img src={icon2}/>
                            </div>
                            
                            <div className='col-lg-4'>
                                <span className='font-text'>Choose Course</span><br/>
                                <span className='font-text'>Choose any course</span>
                            </div>
                        </div>
                        <div className='row  py-3'>
                            <div className='col-lg-2'>
                            <img src={icon3}/>
                            </div>
                            
                            <div className='col-lg-4'>
                                <span className='font-text'>Enjoy Learning</span><br/>
                                <span className='font-text'>Buy and enjoy learning</span>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-lg-6">
                     <img src={pic} width="95%"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Steps