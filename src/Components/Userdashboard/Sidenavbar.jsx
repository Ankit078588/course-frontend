import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
// import Dashboard from './Dashboard';
// import { Link } from 'react-router-dom';
import swal from "sweetalert";
import pic from '../../Images/user.png';

const Sidenavbar =({ changeDashboardContent }) => {
  const navigate = useNavigate();
  const Handlelogout=(e) =>{
    e.preventDefault();
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('userid');
      swal("Yes!", "You have successfully logged out!!", "success");
      navigate('/');
  }
  return (
    <>
    <Sidebar>
  <Menu>
  <div className='py-3'>
  {
    sessionStorage.getItem("username") ?
    <h6 className="mt-2 ms-2"> <img src={pic} width="18%"/> {sessionStorage.getItem("username")}</h6> 
    
      : <h2 className="mt-2 ms-2"><img src={pic} width="25%"/> Userpanel</h2>
   
    }
    
    {/* <SubMenu label="Dashboard">
      <MenuItem> Pie charts </MenuItem>
      <MenuItem> Line charts </MenuItem>
    </SubMenu> */}
    
    <MenuItem  onClick={() => changeDashboardContent('home')}>
   
    <span><i className="fa fa-dashboard" style={{color:"rgb(92, 14, 71)"}}></i></span>
    <span className='ms-2'>Dashboard </span></MenuItem>
    <MenuItem onClick={() => changeDashboardContent('profile')}> <span ><i className="fa fa-user" style={{color:"rgb(92, 14, 71)"}}></i></span> <span className='ms-2'>My Profile </span> </MenuItem>
    <MenuItem  onClick={() => changeDashboardContent('entrolled')}> <span ><i className="fa fa-graduation-cap" style={{color:"rgb(92, 14, 71)"}}></i></span> <span className='ms-1'>Entrolled Courses</span> </MenuItem>
    {/* <MenuItem onClick={() => changeDashboardContent('wishlist')}> <span ><i className="fa fa-heart-o"style={{color:"rgb(92, 14, 71)"}}></i></span> <span className='ms-1'>Wishlist</span> </MenuItem> */}
    {/* <MenuItem> <span ><i className="fa fa-star-o" style={{color:"rgb(92, 14, 71)"}}></i></span> <span className='ms-1'>Review</span> </MenuItem> */}
    <MenuItem onClick={() => changeDashboardContent('orderhistory')}><span ><i className="fa fa-shopping-cart" style={{color:"rgb(92, 14, 71)"}}></i></span> <span className='ms-1'>Order History </span></MenuItem>
    <hr/>
    {/* <MenuItem> <span ><i className="fa fa-gear"style={{color:"rgb(92, 14, 71)"}}></i></span> <span className='ms-1'>Settings</span>  </MenuItem> */}
    <MenuItem onClick={Handlelogout}> <span ><i className="fa fa-sign-out"style={{color:"rgb(92, 14, 71)"}}></i></span> <span className='ms-1'>Logout</span> </MenuItem>
    </div>
  </Menu>
</Sidebar>


    </>
  )
}
Sidenavbar.propTypes = {
  changeDashboardContent: PropTypes.func.isRequired
};

export default Sidenavbar
