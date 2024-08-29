
import { useState , useEffect} from 'react';
import axios from "axios";
import "../../Css/Userdasboard/orderhistory.css";
const Orderhistory= () => {
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
    const [orderdata, setorderdata] = useState([]);
    useEffect(() => {
        const userId = sessionStorage.getItem('userid');
        console.log(userId);
           axios
          .get(ROOT_URL + `/api/auth/orderdetails/${userId}`)
          .then((orderdetail) => {
            setorderdata(orderdetail.data);
            console.log(orderdata);
          })
          .catch((err) => console.log(err));
      }, []);
    
    
  return (
    <>
    
    <div>
    <h4 className='fw-bold'>Order History</h4>
    <div className='container py-2'>
    <div className="row align-items-center">
              <div className="col-2 fw-bold text-center h5"> Order id   
              </div>
              <div className="col-5 fw-bold text-center h5">
              
                Course Name
                
              </div>
              <div className="col-2 fw-bold text-center h5">
                
                Course Amount
                
              </div>
              <div className="col-3 text-center fw-bold h5">Payment id</div>
            </div>
    {orderdata ? (
        orderdata.map((order) => (
          <div key={order.id} className="row align-items-center orderdesign">
            <div className="col-2 text-center ">
              <span>{order.razorpay_order_id}</span>
            </div>
            <div className="col-5 text-center">
              <span>{order.courses}</span>
            </div>
            <div className="col-2 text-center">
              {order.amount}
            </div>
            <div className="col-3 text-center">{order.razorpay_payment_id}</div>
          </div>
        ))
      ) : (<div> No orders available.</div>)}

    
    
     
      </div>
      </div>
    
    </>
  )
}

export default Orderhistory
