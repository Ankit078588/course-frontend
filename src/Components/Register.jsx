
import { useState, useEffect } from 'react'
import '../Css/Register.css'
import axios from 'axios';
import swal from 'sweetalert';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import '../Css/Datepicker_style.css';
import { useNavigate } from 'react-router-dom';

function Register() {
    const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;
    const [fullname, setName] = useState('')
    const [phoneno, setPhoneno] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [state, setDropdownValue_state] = useState([])
    const [city, setDropdownValue] = useState([])
    const [cities, setSelectedcities] = useState([])
    const [date, setDate] = useState(null);
    const [token, setToken] = useState(null);
    const [States, setSelectedState] = useState('');
    // const [error, setError] = useState(null);
    // const [selectedState, setSelectedState] = useState('');



    const [emailerror, setemailerror] = useState(false)
    const [mobilenoerror, setmobileerror] = useState(false)
    const [passwordError, setpasserror] = useState('')
    const [confirmpasserror, setconfirmpasserror] = useState(false)
    const navigate = useNavigate();
   
    //for state city api token
    const API_TOKEN = 'C2dy7lLSGxWm63T6Oem2N9jeUlaE5Y9M59MInjwjc-FksoqRsWk0pa-iKk1LzSfEFy0';
    
    
    
    //for authentication
    // const token_auth = 'H-iBBKtdo-9gr80UCAxoWI2oljM9yIuiAfejreeosPA';
    // const config = {
    //     headers: { Authorization: `Bearer ${token_auth}` }
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
    function passwordHandler(e) {
        let item = e.target.value;
        if (!/[A-Z]/.test(item)) {
            setpasserror("Password must contain one uppercase letter");
        }
        else if (!/[!@#$%^&*(),.?":{}|<>]/.test(item)) {
            setpasserror("Password must contain one Special character");
        }
        else if (!/\d/.test(item)) {
            setpasserror('Password must contain at least one number');
        }
        else if (item.length < 8) {
            setpasserror('Password must be at least 8 characters long');
        }
        else {
            setpasserror("")
        }
    }
    function confirmpasswordHandler(e) {
        let item = e.target.value;
        let password_value = document.getElementById('password').value;

        if (password_value !== item) {
            setconfirmpasserror(true);

        } else {
            setconfirmpasserror(false)
        }
    }
    const handleDropdownChange_city = (event) => {
        setSelectedcities(event.target.value);
    };
    const handleDropdownChange_state = (event) => {

        setSelectedState(event.target.value);
    };


    //hadlesubmit
    const handleSubmit = async (event) => {
        // alert("sumit")
        event.preventDefault();
        if (fullname === "" || phoneno === "" || date === "" || States === "" || cities === "" || email === "" || password === "") {
            swal("Opps!", "Please fill out all required fields!", "error");

        }
        else if (emailerror != "" || mobilenoerror != "" || passwordError != "") {
            swal("Opps!", "give valid inputs!", "error");
        }
        else if(!checkbox_terms.checked){
            swal("Opps!","You must agree to the terms and conditions before submitting!","error");
            return false;
        }
        else {

            await axios.post(ROOT_URL+'/api/auth/register', { fullname, phoneno, date, States, cities, email, password })
                .then(res => {
                    console.log(res);
                    swal("Thank You!", "Registration sucessfully completed!", "success");
                    navigate('/login');

                })
                .catch(err => {
                    console.log(err);
                    swal("Opps!", "Not inserted !", "error");

                })
        }

    }
    return (
        <>
            <section  >
                <div className="container formcontainer  mt-5 mb-5 ">
                    <div className='display-5 text-white text-center'>Register Here!</div>
                    <form className='row g-3 py-2'>
                        <div className="col-lg-6">
                            <label className='form-label text-white' htmlFor="name">Full Name  <sup><i className="fa fa-asterisk redstar"></i> </sup></label>
                            <input type="text" className="form-control form-control-lg inputform" id="name" name="fullname" placeholder="Enter Your Name" onChange={e => setName(e.target.value)} />

                        </div>
                        <div className="col-lg-6">
                            <label className='form-label text-white' htmlFor="exampleInputEmail1">Phone Number  <sup><i className="fa fa-asterisk redstar"></i> </sup></label>
                            <input type="text" className="form-control form-control-lg inputform" id="phoneno" onKeyUp={mobileHandler}
                                name="phoneno" placeholder="Enter Your Phone Number" onChange={e => setPhoneno(e.target.value)} />
                            {mobilenoerror ? <span className='link-danger'>phone no invalid</span> : ""}
                        </div>
                        <div className='col-lg-3'>
                            <label className='form-label text-white' htmlFor="exampleInputEmail1">Date of birth  <sup><i className="fa fa-asterisk redstar"></i> </sup> </label>
                            <span className='form-control h-50'><DatePicker value={date} className="" onChange={date => setDate(date)} dateFormat="dd/MM/yyyy" /></span>

                        </div>
                        <div className='col-lg-4'>
                            <label className="form-label text-white" htmlFor="exampleInputEmail1">State  <sup><i className="fa fa-asterisk redstar"></i> </sup></label>
                            <select className="form-select form-control-lg mb-3 h-50 inputform" aria-label=".form-select-lg example" onChange={handleDropdownChange_state}>
                                <option value="" label='Enter your State'></option>
                                {Array.isArray(state) && state.map(state => (
                                    <option key={state.state_name} value={state.state_name}>{state.state_name}</option>
                                ))}
                            </select>
                        </div>

                        <div className='col-lg-5'>
                            <label className="form-label text-white" htmlFor="exampleInputEmail1">City  <sup><i className="fa fa-asterisk redstar"></i> </sup></label>
                            <select className="form-select form-control-lg h-50 mb-3 inputform" aria-label=".form-select-lg example" onChange={handleDropdownChange_city}>
                                <option value="Choose city" label=' Enter your city'></option>
                                {Array.isArray(city) && city.map(city => (
                                    <option key={city.city_name} value={city.city_name}>{city.city_name}</option>
                                ))}

                               

                            </select>
                        </div>
                        {/* <div className='col-lg-8'>
                            <label className="form-label text-white" htmlFor="fileName">Student Image</label>
                            <div className="input-group custom-file-button  ">
                                <label className="input-group-text " htmlFor="fileName">Browse</label>
                                <input type="file" className=" form-control form-control-lg" name='image' accept=".png, .jpg, .jpeg" id="fileName" onChange={handleFileChange} />
                            </div>
                            {imagefileerror ? <span className='link-warning'>{imagefileerror}</span> : ""}
                        </div> */}


                        {/* <div className='col-lg-4'> {
                            imagefileerror ? "" : <img width={100} height={100} src={image} />
                        }
                        </div> */}
                        <div className='col-lg-4'>
                            <label className="form-label text-white" htmlFor="exampleInputEmail1">Email address  <sup><i className="fa fa-asterisk redstar"></i> </sup></label>
                            <input type="email" className="form-control form-control-lg inputform" id="email" name="email"
                                onKeyUp={emailHandler} placeholder="Enter Your email" onChange={e => setEmail(e.target.value)} />
                            {emailerror ? <span className='link-danger'>Email invalid</span> : ""}


                        </div>
                        <div className='col-lg-4'>
                            <label className="form-label text-white" htmlFor="exampleInputEmail1">Password  <sup><i className="fa fa-asterisk redstar"></i> </sup></label>
                            <input type="text" className="form-control form-control-lg inputform" id="password" name="password"
                                onKeyUp={passwordHandler} placeholder="Enter Your password" onChange={e => setPassword(e.target.value)} />
                            {passwordError && <span className='link-danger'>{passwordError}</span>}
                            {/* {passwordError ? <span className='link-danger'>Password must me 8 character, one Uppercase, one special character</span> : ""} */}

                        </div>
                        <div className='col-lg-4'>
                            <label className='form-label text-white' htmlFor='exampleInputEmail1'>Confirm Password  <sup><i className="fa fa-asterisk redstar"></i> </sup></label>
                            <input type="text" className="form-control form-control-lg inputform" id="confirmpassword" name="confirmpassword"
                                onKeyUp={confirmpasswordHandler} placeholder="Enter Your password" onChange={e => setPassword(e.target.value)} />
                            {confirmpasserror ? <span className='link-danger'>Password invalid</span> : ""}

                        </div>
                        <span className='text-white'><input type="checkbox" id='checkbox_terms'/> I agree all statements in <a href="/terms" target='_blank'>Terms and conditions</a></span>

                        <div className="pt-1  text-center">
                            <button className=" btn-lg signupbutton  w-50" type="submit" onClick={handleSubmit} >Sign up</button>
                        </div>



                        <span className="mb-5 pb-lg-2 text-center register_text text-white" >Have an account? <a className="reg text-success" href="/login"
                        >Login</a></span>
                    </form>


                </div>
            </section>

        </>
    )
}

export default Register
