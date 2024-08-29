import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import '../Css/Register.css'
import axios from 'axios';
import swal from 'sweetalert';
import DatePicker from 'react-date-picker';
import { Auth_URL } from './Localhost';
import pic1 from '../Images/icon1.png';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import '../Css/Datepicker_style.css';
// import nailart from '../Images/nailartpayment.jpg'
// import guitar from '../Images/guitercourse.jpg'
// import vio from '../Images/violinclasses.jpg'

const Offlineregister = () => {
    const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
    const navigate = useNavigate();
 
    const [fullname, setName] = useState('')
    const [phoneno, setPhoneno] = useState('')
    const [email, setEmail] = useState('')
    const [state, setDropdownValue_state] = useState([])

    const [city, setDropdownValue] = useState([])
    const [cities, setSelectedcities] = useState([])
    const [course, setcourse] = useState([])
    const [date, setDate] = useState(null);
    const [token, setToken] = useState(null);
    const [States, setSelectedState] = useState('');
    const[amount ,setamount] = useState('');
    // const [image, setImage] = useState(null);

    const [emailerror, setemailerror] = useState(false)
    const [mobilenoerror, setmobileerror] = useState(false)
    
    // const [passwordError, setpasserror] = useState('')
    // const [confirmpasserror, setconfirmpasserror] = useState(false)
    //for state city api token
    const API_TOKEN = 'C2dy7lLSGxWm63T6Oem2N9jeUlaE5Y9M59MInjwjc-FksoqRsWk0pa-iKk1LzSfEFy0';
    //for authentication
    // const token_auth = 'H-iBBKtdo-9gr80UCAxoWI2oljM9yIuiAfejreeosPA';
    // const config = {
    //     headers: { Authorization: `Bearer ${token_auth}` }
    // };



    const pay = {
        nailart: "6500/-",
        GuitarClass: "999/-",
        ViolinClass: "1199/-"
      };
    //image
    // const convertToBase64 = (file) => {
    //     console.log(file);
    //     const reader = new FileReader();
    //     reader.readAsDataURL(file);
    //     const data = new Promise((resolve, reject) => {
    //         reader.onload = () => resolve(reader.result)
    //         reader.onerror = (err) => {
    //             reject(err)
    //         }
    //     })
    //     return data;
    // }

    // const handleFileChange = async (e) => {
    //     const file = e.target.files[0];
    //     const image = await convertToBase64(file)
    //     setImage(image);
    //      console.log(image);
    // };


    //for state dropdow
    useEffect(() => {
        const getAuthToken = async () => {
            try {
                const response = await axios.get("https://www.universal-tutorial.com/api/getaccesstoken", {
                    headers: {
                        'api-token': API_TOKEN,
                        'user-email': 'srijani.banerjee2000@gmail.com',
                    }
                });
                setToken(response.data.auth_token);
            } catch (error) {
                console.log(error);

                // setError(error);
            }
        };

        getAuthToken();
    }, []);

    useEffect(() => {
        if (token) {
            const getStates = async () => {
                try {

                    const response = await axios.get('https://www.universal-tutorial.com/api/states/India', {
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Accept': 'application/json'
                        }
                    });
                    console.log(response.data);
                    setDropdownValue_state(response.data);

                } catch (error) {
                    // setError(error);
                    console.log(error);

                }
            };

            getStates();
        }
    }, [token]);
    //city
    useEffect(() => {
        if (States) {
            const getCities = async () => {

                try {
                    const response = await axios.get(`https://www.universal-tutorial.com/api/cities/${States}`, {
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Accept': 'application/json'
                        }
                    });
                    console.log('Cities response:', response.data);
                    setDropdownValue(response.data);

                } catch (error) {
                    console.error('Error fetching cities:', error);


                }
            };

            getCities();
        }
    }, [States, token]);

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
    function mobileHandler(e) {
        let item = e.target.value;
        if (item.length != 10) {
            setmobileerror(true)
        } else {
            setmobileerror(false)
        }
    }

    const handleDropdownChange_city = (event) => {
        setSelectedcities(event.target.value);
    };
    const handleDropdownChange_state = (event) => {

        setSelectedState(event.target.value);
    };
    const handlecoursechange = (event) => {

        setcourse(event.target.value);
    };
    //hadlesubmit
    const handleSubmit = async (event) => {
       
        event.preventDefault();
        const amount =document.getElementById('amount').value;
        // console.log(amount);
       
        let checkbox = document.getElementById('checkbox');
        
        if (fullname === "" || phoneno === "" || date === "" || States === "" || cities === "" || email === "" || course === "" || amount ==="") {
            swal("Opps!", "Please fill out all required fields!", "error");
        }
        else if (emailerror != "" || mobilenoerror != "") {
            swal("Opps!", "Please give valid inputs!", "error");
        }
        // else if(image === ""){
        //     setimageerror(true);
        //     return false;
        // }
        else if(!checkbox.checked){
            swal("Opps!","You must agree to the terms and conditions before submitting!","error");
            return false;
        }
       
        else {
           
            await axios.post(ROOT_URL+'/api/auth/offlineregister', { fullname, phoneno, date, States, cities, email, course,amount })
                .then(res => {
                    console.log(res);
                    //console.log(res.data.order.amount);


                    const options = {
                        // key: "rzp_live_xh5zAIy7sL0nMK", // Enter the Key ID generated from the Dashboard
                        key:"rzp_test_FEdsKrhgE2fdCF",
                        amount: res.data.order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                        currency: "INR",
                        name: "Srijani banerjee",
                        description: "Test Transaction",
                        image: pic1,
                        order_id: res.data.order.id, 
                        handler: function (response) {
                            // Call your backend to verify the payment and store data
                            axios.post(Auth_URL+'/paymentverification', {
                              razorpay_order_id: response.razorpay_order_id,
                              razorpay_payment_id: response.razorpay_payment_id,
                              razorpay_signature: response.razorpay_signature,
                              fullname,phoneno,course,amount
                              // Pass the user ID for backend processing
                            }).then(() => {
                             console.log(response);
                             swal({
                                title: "Thank You!",
                                text: "Registration completed sucessfully!",
                                icon: "success",
                                // buttons: true,
                              }).then((willregister) => {
                                if (willregister) {
                                  
                                   window.location.reload();
                                  
                                } 
                              });
                            //  swal("Payment successful and data saved.");
                            
                            //  window.location.reload();
                            }).catch(() => {
                              swal('Payment verification failed.');
                            });
                          },
                        // callback_url: Auth_URL+'/paymentverification',
           
               
                        prefill: {
                            name: fullname,
                            email: email,
                            contact: phoneno
                        },
                        notes: {
                           
                            address: "Razorpay Corporate Office"
                        },
                        theme: {
                            color: "#3399cc"
                        }
                    };
                    const razor = new window.Razorpay(options);
                    razor.open();
                    
                    // swal("Thank You!", "Registration completed sucessfully!", "success");
                    //  window.location.reload();
                    
                })
                .catch(error=> {
                    console.log(error);
                    swal("Opps!",  "registration is not completed successfully","error" );
                    

                })
        }

    }

    return (
        <>
            <section  >
                <div className="container formcontainer  mt-5 mb-5 ">
                    <div className='display-5 text-white text-center'> Offline Register Here!</div>
                    <form className='row g-3 py-2'>
                        <div className="col-lg-6">
                            <label className='form-label text-white' htmlFor="name"> Full Name <sup><i className="fa fa-asterisk redstar"></i> </sup></label>
                            <input type="text" className="form-control form-control-lg inputform" id="name" name="fullname" placeholder="Enter Your Name" onChange={e => setName(e.target.value)} />

                        </div>
                        <div className="col-lg-6">
                            <label className='form-label text-white' htmlFor="exampleInputEmail1">Phone Number <sup><i className="fa fa-asterisk redstar"></i> </sup></label>
                            <input type="text" className="form-control form-control-lg inputform" id="phoneno" onKeyUp={mobileHandler}
                                name="phoneno" placeholder="Enter Your Phone Number" onChange={e => setPhoneno(e.target.value)} />
                            {mobilenoerror ? <span className='link-danger'>phone no invalid</span> : ""}
                        </div>
                        <div className='col-lg-3'>
                            <label className='form-label text-white' htmlFor="exampleInputEmail1">Date of birth <sup><i className="fa fa-asterisk redstar"></i> </sup></label>
                            <span className='form-control'><DatePicker value={date} className="" onChange={date => setDate(date)} dateFormat="dd/MM/yyyy" /></span>

                        </div>
                        <div className='col-lg-4'>
                            <label className="form-label text-white" htmlFor="exampleInputEmail1">State <sup><i className="fa fa-asterisk redstar"></i> </sup></label>
                            <select className="form-select form-control-lg mb-3 h-50 inputform" aria-label=".form-select-lg example" onChange={handleDropdownChange_state}>
                                <option value="" label='Enter your State'></option>
                                {Array.isArray(state) && state.map(state => (
                                    <option key={state.state_name} value={state.state_name}>{state.state_name}</option>
                                ))}
                            </select>
                        </div>

                        <div className='col-lg-5'>
                            <label className="form-label text-white" htmlFor="exampleInputEmail1">City <sup><i className="fa fa-asterisk redstar"></i> </sup></label>
                            <select className="form-select form-control-lg h-50 mb-3 inputform" aria-label=".form-select-lg example" onChange={handleDropdownChange_city}>
                                <option value="Choose city" label=' Enter your city'></option>
                                {Array.isArray(city) && city.map(city => (
                                    <option key={city.city_name} value={city.city_name}>{city.city_name}</option>
                                ))}



                            </select>
                        </div>

                        <div className='col-lg-4'>
                            <label className="form-label text-white" htmlFor="exampleInputEmail1">Email address <sup><i className="fa fa-asterisk redstar"></i> </sup></label>
                            <input type="email" className="form-control form-control-lg inputform " id="email" name="email"
                                onKeyUp={emailHandler} placeholder="Enter Your email" onChange={e => setEmail(e.target.value)} />
                            {emailerror ? <span className='link-danger'>Email invalid</span> : ""}


                        </div>


                        <div className='col-lg-4'>
                            <label className="form-label text-white" htmlFor="exampleInputEmail1">Select any course <sup><i className="fa fa-asterisk redstar"></i> </sup></label>
                            <select className="form-select form-control mb-3  inputform " id='courseselect' aria-label=".form-select-lg example" onChange={handlecoursechange}>
                                <option value="" label='Enter your course'></option>
                                <option value="nailart" label='Nail Art'></option>
                                <option value="GuitarClass" label='Guitar Class'></option>
                                <option value="ViolinClass" label='Violin Class'></option>
                                {/* <option value="TablaClass" label='Tabla Class'></option> */}

                            </select>
                        </div>
                        <div className='col-lg-4'>
                            <label className="form-label text-white" >Pay For the course <sup><i className="fa fa-asterisk redstar"></i> </sup></label>
                            {course && <input type='text'className="form-control form-control-lg" readOnly name='amount'  id="amount"
                            value={pay[course]} />}
                            

                            {/* <div className="modal" id="myModal">
                                <div className="modal-dialog modal-lg">
                                    <div className="modal-content">

                                        <div className="modal-body text-center">
                                        {course && <img src={images[course]} alt="Select any course" width="50%" height="80%" />}
                                            <img src={nailart} alt='img' width="50%" height="80%" />
                                        </div>

                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-success" data-bs-dismiss="modal">Done</button>
                                        </div>

                                    </div>
                                </div>
                                </div> */}
                        
                        </div>
                        
                        {/* <div className='col-lg-4'>
                            <label className="form-label text-white" htmlFor="fileName">Upload payment received screenshot</label>
                            <div className="input-group custom-file-button  ">
                                <label className="input-group-text " htmlFor="fileName">Browse</label>
                                <input type="file" className=" form-control form-control-lg" name='image' accept=".png, .jpg, .jpeg" id="fileName" onChange={handleFileChange} />
                            </div>
                             {imageerror ? <span className='link-warning'>"Please upload the screenshot of payment "</span> : ""}
                        </div> */}
                        <span className='text-white'><input type="checkbox" id='checkbox'  /> I agree all statements in <a href="/terms" target='_blank' >Terms and conditions</a></span>

                        <div className="pt-1  text-center">
                            <button className=" btn-lg signupbutton  w-50" type="submit" onClick={handleSubmit} >Submit</button>
                        </div>
                    </form>


                </div>
            </section>

        </>
    )
}

export default Offlineregister
