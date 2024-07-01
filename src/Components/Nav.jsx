import logo from '../Images/academy.png'
import '../Css/Nav.css'
import { Link } from 'react-router-dom';
import icon from '../Images/icon.svg'
import { useSelector } from 'react-redux';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import Blink from 'react-blink-text';
//  import pic from '../Images/user.png';

const Nav = () => {
  const items = useSelector(state => state);
  console.log('Items', items);

  const handleLogout =(e) =>{
    e.preventDefault();
    sessionStorage.removeItem('userEmail');
    window.location.assign("/")
  }
    return (
    <>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "rgba(14, 18, 85, 1)" }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/"><img src={logo} width={60} /></a>
          <a href='/' className="text-decoration-none"><span className='text-white logoname'>Sythosphere Academy</span></a>
          <button className="navbar-toggler togglebutton" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fa fa-navicon iconnav"></i>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent" >
            <ul className="navbar-nav mb-2 mb-lg-0 mx-auto text-center">
              <li className="nav-item pe-2 ">
                <a className="nav-link active text-white" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item pe-2 ">
                <a className="nav-link active text-white" aria-current="page" href="/course">Courses</a>
              </li>
              {/* <li className="nav-item dropdown ">
                {/* <a className="nav-link  text-white" href="/course" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Courses
                </a> */}
              {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/course">All</a></li>
                  <li><a className="dropdown-item" href="#">Blockchain</a></li>
                  <li><a className="dropdown-item" href="#">Python</a></li>
                  <li><a className="dropdown-item" href="#">Music</a></li>
                </ul> */}
              {/* </li> */}
              <li className="nav-item pe-2">
                <a className="nav-link text-white" href="/blog">
                  Article
                </a>
              </li>

              <li className="nav-item pe-2">
                <a className="nav-link text-white" href='/contact'>Contact</a>
              </li>
              <li className="nav-item pe-2">
                <a className="nav-link" href='/offlineregister'><span className="blink" >Offline register <i className="fa fa-bell"></i>
                </span> </a>
              </li>
            </ul>
            <div className='me-4 cartpart'>
              <div className="navbar-text  cartstyle text-center" >
                <a href='/addtocart' id='cartitem'>
                  <img src={icon} className='carticon' /><sup ><span className="badge bg-danger overflow-auto">{items.cart.length}</span></sup>
                </a>

              </div>

            </div>
            
            {
              sessionStorage.getItem("userEmail") ?

                <div className=" userdrop dropdown me-4">
                  <div className=" dropdown-toggle text-white" type='button'  data-bs-toggle="dropdown" aria-expanded="false">
                    Hi, {sessionStorage.getItem("userEmail")}
                    {/* <img src={pic} width="10%" height="20%"/> */}
                  </div>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/userdashboard">Dashboard</a></li>
                    <li><a className="dropdown-item" href="#" onClick={handleLogout}>Logout</a></li>
                   
                  </ul>
                </div>

                : <button className='buttonstyle btn btn-sm text-white'>
                  <Link to="/register"><button className=" childbutton text-white" id='loginbutton' type="submit" >Signup</button></Link>/
                  <Link to="/login"><button className="childbutton text-white" id='loginbutton' type="submit" >Login</button></Link>
                </button>
            }
            
            {/* <button className='buttonstyle btn btn-sm text-white'>
              <Link to="/register"><button className=" childbutton text-white" id='loginbutton' type="submit" >Signup</button></Link>/
              <Link to="/login"><button className="childbutton text-white" id='loginbutton' type="submit" >Login</button></Link>
            </button> */}

          </div>
        </div>
      </nav>
    </>
  )
}


export default Nav
