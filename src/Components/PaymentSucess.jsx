import React from 'react'
import LottieAnimation from './Lottieanimation'
import '../Css/paymentsuccess.css'
import { Link } from 'react-router-dom';

function PaymentSucess() {
  return (
    <>
        <div className='text-center'>
        {/* <div className='card'>
      <h1>Payment Successful!</h1>
      <p>Thank you for your purchase. Your order has been successfully processed.</p>
    </div> */}
    <div className='container  paymentcontainer my-5'>
    <div className="card successcard">
  <div className="card-body">
    <LottieAnimation speed={2}/>
    <h3 className="card-title mb-2">Payment Successful!</h3>
    <div className='card-text'>
    <div className="">Thank you for your purchase!</div>
  
    </div>
  
   
    <div className='row'>
    <div className='col-6 text-start'><Link to="/"><button className="btn  buttonstyle  card-link text-white" type="submit" >Go to Home</button></Link></div>
    <div className='col-6 text-end'><Link to="/userdashboard"><button className="btn  buttonstyle  card-link text-white text-end" type="submit" >Go to my courses </button></Link></div>
    </div>
  </div>
</div>
    </div>
    </div>
    </>
    
  )
}

export default PaymentSucess
