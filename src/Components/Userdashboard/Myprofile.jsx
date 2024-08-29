import { useState , useEffect} from 'react';
import axios from "axios";
<<<<<<< HEAD
import { Auth_URL } from "../Localhost";
=======

>>>>>>> upstream/master

function Myprofile() {
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
  
  const [userdata, setuserdata] = useState([]);
  useEffect(() => {
    const userId = sessionStorage.getItem('userid');
    console.log(userId);
       axios
      .get(ROOT_URL + `/api/auth/getuser/${userId}`)
      .then((userdetail) => {
        setuserdata(userdetail.data);
        console.log(userdata);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
   
    <div>
     {userdata ? (
      <div>
      <h3 className="fw-bold">My Profile</h3>
      <div className="row mt-4">
        <div className="col-lg-3">
          <span>Registration Date</span>
        </div>
        <div className="col-lg-9 fw-bold">
          <span>{userdata.createdAt}</span>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-lg-3">
          <span>Full Name</span>
        </div>
        <div className="col-lg-9 fw-bold">
          <span>{userdata.fullname}</span>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-lg-3">
          <span>Phone no</span>
        </div>
        <div className="col-lg-9 fw-bold">
          <span>{userdata.phoneno}</span>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-lg-3">
          <span>Date of birth</span>
        </div>
        <div className="col-lg-9 fw-bold">
          <span>{userdata. date}</span>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-lg-3">
          <span>state</span>
        </div>
        <div className="col-lg-9 fw-bold">
          <span>{userdata.States}</span>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-lg-3">
          <span>City</span>
        </div>
        <div className="col-lg-9 fw-bold">
          <span>{userdata.cities}</span>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-lg-3">
          <span>Email</span>
        </div>
        <div className="col-lg-9 fw-bold">
          <span>{userdata.email}</span>
        </div>
      </div>
      </div>
     ) : (
      <div>No User Details Available </div>
      
     )}
      {/* <div className="row mt-4">
        <div className="col-lg-3">
          <span>Password</span>
        </div>
        <div className="col-lg-9 fw-bold">
          <span>De@12345</span>
        </div>
      </div> */}



    </div>
  )
}

export default Myprofile
