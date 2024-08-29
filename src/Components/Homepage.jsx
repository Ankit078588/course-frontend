// import Nav from "./Nav" 
import Banner from "./Banner"
import Features from './Features'
import Steps from './Steps'
// import Footer from "./Footer"
import Mostpopularcourse from "./Mostpopularcourse"
import Ourteam from './Ourteam';
import Chooseus from './Chooseus'
import Ourblog from './Ourblog';


function Homepage() {
  return (
    <>
    
      <Banner/>
      <Features/>
      <Steps/>
      <Mostpopularcourse/>
      <Chooseus/>
      <Ourblog/>
      <Ourteam/>
      {/* <Footer/> */}
    </>
  )
}

export default Homepage
