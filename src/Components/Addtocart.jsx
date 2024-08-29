import "../Css/addtocart.css";
import paypal from "../Images/PayPal.svg";
import visa from "../Images/Visa.svg";

import { Link } from "react-router-dom";
function Addtocart() {
  return (
    <>
      <div>
        <div className="d-flex ms-5 mt-3">
          <a href="/">
            <i className="fa fa-hand-o-left iconstyle mt-1"></i>
          </a>
          <h5 className="heading display-6 ms-3">Shopping Cart</h5>
        </div>
        <div className="container mt-5 mb-4 shoppingcart p-3">
          {/* <div className='row'>
                    <div className='col-lg-8'> */}

          <div className="row">
            <div className="row main align-items-center itemcart">
              <div className="col-3 imgitem">
                <img
                  className="img-fluid imgitem"
                  src="https://www.shutterstock.com/image-photo/golden-coins-bitcoin-logo-rise-600nw-2052110753.jpg"
                />
              </div>
              <div className="col-3 ms-2">
                <div className="row ">
                  The Full Cryptocurrency Education Course
                </div>
                <div className="row">16 videoes</div>
              </div>
              

              <div className="col">₹899</div>
            </div>
          </div>
          <div className="row  mt-2 ">
            <div className="row main align-items-center itemcart ">
              <div className="col-3  imgitem">
                <img
                  className="img-fluid imgitem"
                  src="https://cdn.eduonix.com/assets/images/header_img/2020091906114212289.jpg"
                />
              </div>
              <div className="col-3 ms-2">
                <div className="row ">The Complete Stock market course</div>
                <div className="row">16 videoes</div>
              </div>
              <div className="col"></div>

              <div className="col">₹899 </div>
            </div>
            {/* <hr className="mt-4" /> */}
          </div>
          <div className="row mt-2 ">
            <div className="row main align-items-center itemcart ">
              <div className="col-3 imgitem">
                <img
                  className="img-fluid imgitem"
                  src="https://cdn.elearningindustry.com/wp-content/uploads/2020/08/how-online-course-are-changing-music-education.jpg"
                />
              </div>
              <div className="col-3 ms-2">
                <div className="row ">Music Course</div>
                <div className="row">16 videoes</div>
              </div>
              <div className="col"></div>
              <div className="col">₹899</div>
            </div>
            <hr className="mt-4" />
            <div class="d-flex justify-content-end">
            <div className="fw-bold mt-2">
            TOTAL: <span>98999 </span>
            </div>
            <div className="ms-2">
              <Link to="/checkout">
                <button className=" paynow">Checkout</button>
              </Link>
              </div>
            </div>
          </div>
          {/* <div className='float-end fw-bold'>
                            total:98999 
                        </div> */}
        </div>
        {/* <div className='col-lg-4 '>
                        <p className='fw-bold'>Payment method</p>
                        <div className='container payment p-4'>
                            <div>
                                <h5><span>Price:</span><span className='fw-bold ms-1'>₹3990.0</span></h5>
                            </div>
                            <div className='fw-bold chooseupi ms-2 mt-4'>
                                <div className='ms-4 p-3 '>
                                    Select a Payment Type

                                    <div className="form-check mt-2">

                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                                          
                                            <img src={paypal}/>
                                        </label>
                                    </div>
                                    <div className="form-check mt-2">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                                        <img src={visa}/>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-white  ms-2 mt-4 p-4'>
                                <form>
                                    <div className="search inputfield" >
                                        <i className="fa fa-envelope position-absolute mt-3 ms-3 "></i>
                                        <input type="text" className="form-control form-control-lg  inputstyle" placeholder="Email" />
                                    </div>
                                    <div className="search mt-3 inputfield">
                                        <i className="fa fa-lock position-absolute mt-3 ms-3 "></i>
                                        <input type="text" className="form-control form-control-lg inputstyle" placeholder="Password" />
                                    </div>
                                    <div className="search mt-3 inputfield">
                                        <i className="fa fa-credit-card position-absolute mt-3 ms-3 "></i>
                                        <input type="text"  id="cardinput"className=" inputmm form-control form-control-lg" placeholder="Card Number" />
                                    </div>
                                    <div className="d-flex">
                                        <div className="search inputfield" >
                                        <i className="fa fa-calendar position-absolute mt-3 ms-3 "></i>
                                            <input type="text" id='monthinput'  className="form-control form-control-lg inputmm" placeholder="MM/YY"/>
                                        </div>
                                        <div className="search inputfield">
                                        <i className="fa fa-lock position-absolute mt-3 ms-3 "></i>
                                            <input type="text" id='cvcinput' className="form-control form-control-lg inputmm" placeholder="CVC" />
                                        </div>
                                    </div>

                                </form>
                                <div className='text-center mt-3'>
                                    Your card will be charged <span className='fw-bold'> ₹899 </span>
                                </div>
                                <div className='text-center mt-3'>
                                  <Link to='/userinvoice'> <button className='btn paynow w-75' >Pay Now</button></Link>  
                                </div>
                            </div>
                        </div>
                        </div> */}

        {/* </div>
            </div> */}
      </div>
    </>
  );
}

export default Addtocart;
