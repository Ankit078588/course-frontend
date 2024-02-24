
import '../Css/Contactus.css'
import background from '../Images/contactbg.png';
import icon from '../Images/Icons.png';
import emailicon from '../Images/emailicon.png';
import phoneicon from '../Images/phoneicon.png';
import socialicon from '../Images/socialicon.png'
import face from '../Images/facebook.png';
import twitter from '../Images/twitter.png';


import link from '../Images/linkdln.png';
function Contact() {
  return (
    <>
      <div>
        <h2 className="heading display-4 text-center mt-3">Contact Us</h2>
        <div className="background mt-4" style={{ backgroundImage: `url(${background})` }}>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-8'>
              </div>
              <div className='col-lg-4' style={{ backgroundColor: "#5c0e47" }} >
                <div className='text-center'>
                  <img src={icon} alt='noicon' /><br />
                  <span className='touch text-white'>Get in touch</span>
                </div>

                <form>
                  <div className="form-group  mb-4">
                    <label className="text-white" htmlFor="exampleInputEmail1">Name</label>
                    <input type="text" className="form-control form-control-lg" id="name" name="name" placeholder="Enter your name" />
                    {/* <small id="emailHelp" className="form-text text-muted text-white">We will never share your email with anyone else.</small> */}
                  </div>
                  <div className="form-group  mb-4">
                    <label className="text-white" htmlFor="exampleInputEmail1">Email Address</label>
                    <input type="text" className="form-control form-control-lg" id="name" name="name" placeholder="Enter your email address" />
                    {/* <small id="emailHelp" className="form-text text-muted text-white">We will never share your email with anyone else.</small> */}
                  </div>
                  <div className="form-group  mb-4">
                    <label className="text-white" htmlFor="exampleInputEmail1">Message</label>
                    <input type="text" className="form-control form-control-lg" id="message" name="message" placeholder="Enter your message" />
                   
                    {/* <small id="emailHelp" className="form-text text-muted text-white">We will never share your email with anyone else.</small> */}
                  </div>
                  <div className="pt-1 mb-4 text-center">
                    <button className="btn btn-lg btn-success w-50 " type="button">Sign up</button>
                  </div>

                </form>
              </div>
            </div>

          </div>

        </div>

        {/* email phone */}
        <div className="container py-5">
          <div className="row" >

            <div className="col-lg-4">
              <div className="card contactcard">
                <div className='text-center'> <img className="img " src={emailicon} width="15%" alt="100%x280" /></div>

                <div className="card-body">
                  <h5 className="card-title text-center">Email</h5>
                  <h6 className="card-text text-center">Synthosphere@gmail.com</h6>

                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card contactcard">
                <div className='text-center'> <img className="img" src={phoneicon} width="15%" alt="100%x280" /></div>

                <div className="card-body">
                  <h5 className="card-title text-center">Phone</h5>
                  <h6 className="card-text text-center">123-456-7890</h6>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card contactcard">
                <div className='text-center'> <img className="img" src={socialicon} width="15%" alt="100%x280" /></div>

                <div className="card-body">
                  <h5 className="card-title text-center">Socials</h5>
                  <h6 className="card-text text-center">
                    <img src={face}/>
                    <img src={twitter}/>
                    <img src={link}/>
                  </h6>
                  
                </div>
              </div>
            </div>

          </div>
        </div>
        <div id='map' >
        <div className=" text-center ratio ratio-16x9 mx-auto" >
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.9433639894783!2d88.39068467513034!3d22.693152179406116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x65cb2733ae66dbb9%3A0x2fce9f618eb489f9!2sSynthosphere%20Technologies!5e0!3m2!1sen!2sin!4v1708589211376!5m2!1sen!2sin" width="1128" height="641" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </div>
       
      </div>
    </>
  )
}

export default Contact
