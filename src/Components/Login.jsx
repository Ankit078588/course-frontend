
import pic from '../Images/login1.jpg'
import '../Css/Login.css'
import { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

import { useNavigate } from 'react-router-dom';



function Login() {
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [emailerror, setemailerror] = useState(false)
  // const [passerror, setPasserror] = useState(false)

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  function emailHandler(e) {
    let item = e.target.value;
    if (!isValidEmail(item)) {
      setemailerror(true);
    } else {
      setemailerror(false);
    }
  }
  // function passwordHandler(e) {
  //   let item = e.target.value;
  //   if (item.length >= 8) {
  //     setPasserror(false);
  //   } else {
  //     setPasserror(true)
  //   }
  // }

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === "" || password === "") {
      swal("Opps!", "Please fill out all required fields!", "error");
    }
   
    else {
      
        //  alert("submit");
      axios.post(ROOT_URL+'/api/auth/login', { email, password })
        .then(res => {
          console.log(res);
          const { fullname: userfullname } = res.data;
          const {user_id : userid} = res.data;
          
          localStorage.setItem('token', res.data.token);
          sessionStorage.setItem('username', userfullname);
          sessionStorage.setItem('userid', userid);
          

          swal("Login Successful!!", "Happy learning! Explore new courses now.", "success");
            navigate('/');
          // navigate('/course');

        })
        .catch(err => {
          console.log(err);
          swal("Opps!", "Email or password icorrect!", "error");

        })
    }
  }


  return (
    <>
      <section >
        <div className="container py-5">
          <div className="row d-flex justify-content-center align-items-center ">
            <div className="col col-xl-10">
              <div className="card" >
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-md-block mt-5 loginimage">
                    <img src={pic}
                      alt="loginform" className="img-fluid" />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center" id="loginform">
                    <div className="card-body p-4 p-lg-5 text-black">

                      <form>

                        <div className="d-flex align-items-center mb-3 pb-1">
                          <span className="h1 fw-bold mb-0 text-white">Synthosphere Academy</span>
                        </div>

                        <h5 className="fw-normal mb-3 pb-3 text-white">Sign into your account</h5>

                        <div className="form-group  mb-4">
                          <label className="text-white" htmlFor="exampleInputEmail1">Email address</label>
                          <input type="email" className="form-control form-control-lg" name='email' onKeyUp={emailHandler} placeholder="Enter Your  email" onChange={e => setEmail(e.target.value)} />
                          {emailerror ? <span className='link-warning'>Email invalid</span> : ""}
                          {/* <small id="emailHelp" className="form-text text-muted text-white">We will never share your email with anyone else.</small> */}
                        </div>
                        <div className="form-group mb-4">
                          <label className="text-white" htmlFor="exampleInputEmail1">Password</label>
                          <input type="Password" className="form-control form-control-lg" id="password" name='password'  placeholder="Enter  Your Password" onChange={e => setPassword(e.target.value)} />
                          {/* {passerror ? <span className='link-warning'>Password invalid</span> : ""} */}
                        </div>

                        <div className="pt-1 mb-4 text-center">
                          <button className=" btn-lg  w-50 loginbutton " type="submit" onClick={handleSubmit}>Login</button>
                        </div>
                        <div className="d-flex">
                          <a className='text-success' href="/forgotpassword">Forgot password?</a>
                          <span className="mb-5 pb-lg-2 pb-sm-2 text-white register_text" >Do not have an account? <a className="reg text-success" href="/register"
                          >Register here</a></span>
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

    </>

  )
}

export default Login
