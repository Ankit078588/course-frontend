import pic from '../Images/Kids.png'
import '../Css/Choose.css'

function Chooseus() {
  return (
    <>
    <div>
     <div className="container py-5"  >
     <h1 className="display-4  chooseheading">
     Why Students Choose Us
                    </h1>
                
                   <h1 className="display-4 chooseheading">
                  For Gain Their Knowledge</h1>
                <div className="row py-4">
                    <div className="col-lg-6">
                        <p className='paragraph'> 
Attracting students with expert mentorship, abundant resources, interactive learning and a supportive environment, we empower growth and ensure success in the academic journey</p>
                        <div className='row py-3'>
                            <div className='col-lg-1'>
                            <i className="fa fa-check-square-o" id='icon1'></i>
                            </div>
                            
                            <div className='col-lg-5'>
                                <span className='fw-bold point'>60k people joined</span>
                               
                            </div>
                        </div>
                        <div className='row py-3'>
                            <div className='col-lg-1'>
                            <i className="fa fa-check-square-o" id='icon2'></i>
                            </div>
                            
                            <div className='col-lg-5'>
                                <span className='fw-bold point'> 50+ upcoming courses</span><br/>
                              
                            </div>
                        </div>
                        <div className='row  py-3'>
                            <div className='col-lg-1'>
                            <i className="fa fa-check-square-o" id='icon3'></i>
                            </div>
                            
                            <div className='col-lg-5'>
                                <span className='fw-bold point'>10+ brand companies</span><br/>
                               
                            </div>
                        </div>
                        <div className='row  py-3'>
                            <div className='col-lg-1'>
                            <i className="fa fa-check-square-o" id='icon4'></i>
                            </div>
                            
                            <div className='col-lg-5'>
                                <span className='fw-bold point'>5+ experienced teachers</span><br/>
                               
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-lg-6">
                     <img src={pic} width="80%"/>
                    </div>
                </div>
            </div>
            </div>
    </>

  )
}

export default Chooseus