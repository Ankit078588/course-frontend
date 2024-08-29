import PropTypes from 'prop-types';
import Home from './Home';
import Myprofile from './Myprofile'
// import Wishlist from './Wishlist'
import Entrolled from './Entrolled';
import Orderhistory from './Orderhistory';
const Dashboard = ({ currentContent }) => {
  return (
    <div className="dashboard">
      {currentContent === 'home' && <Home />}
      {currentContent === 'profile' && <Myprofile />}
      {/* {currentContent === 'wishlist' && <Wishlist />} */}
      {currentContent === 'entrolled' && <Entrolled />}
      {currentContent === 'orderhistory' && <Orderhistory />}
    </div>
  )
}
Dashboard.propTypes = {
  currentContent: PropTypes.string.isRequired
};

export default Dashboard
