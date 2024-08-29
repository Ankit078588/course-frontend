import pic from '../Images/forgot.png';
import '../Css/Forgotpage.css'

function Forgotpage() {
  return (
    
    <section >
  <div className="container py-5">
    <div className="row d-flex justify-content-center align-items-center ">
      <div className="col col-xl-10">
        <div className="card" >
          <div className="row g-0">
            <div className="col-md-6 col-lg-5 d-md-block">
              <img src={pic}
                alt="loginform" className="img-fluid"  />
            </div>
            <div className="col-md-6 col-lg-7 d-flex align-items-center" id="loginform">
              <div className="card-body p-4 p-lg-5 text-black">

                <form>

                  <div className="d-flex align-items-center mb-3 pb-1">
                    <span className="h1 fw-bold mb-0 text-white">Synthosphere Academy</span>
                  </div>

                  <h5 className="fw-normal mb-3 pb-3 text-white">Enter your account details below</h5>
                
          <div className="form-group  mb-4">
    <label className="text-white"htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your  email"/>
    {/* <small id="emailHelp" className="form-text text-muted text-white">We will never share your email with anyone else.</small> */}
  </div>
  

                  <div className="pt-1 mb-4 text-center">
                    <button className=" btn-lg  w-50 loginbutton " type="button">Submit</button>
                  </div>
                  <div className="d-flex">
                  
                  <span className="mb-5 pb-lg-2 text-white register_text text-center" >Remember password? <a className="text-success" href="/login"
                      >Sign in</a></span>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Forgotpage