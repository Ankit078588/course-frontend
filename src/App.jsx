
import Homepage from './Components/Homepage'
import Login from './Components/Login'
// import Nav from './Components/Nav';
import Register from './Components/Register'
import Contact from './Components/Contact'
import Blog from './Components/Blog';
// import Footer from "./Components/Footer"
import Forgotpage from "./Components/Forgotpage"
import Courses from './Components/Courses'
import Addtocart from './Components/Addtocart'
import Coursedetails from './Components/Coursedetails'
import Userdashboard from './Components/Userdashboard'
import Courseview from './Components/Courseview'
import Terms from './Components/Terms';
import Privatepolicy from './Components/Privatepolicy'
import Refundpolicy from './Components/Refundpolicy'
import Invoice from './Components/Invoice'
import { Userlayout } from './Components/Userlayout';
import Offlineregister from './Components/Offlineregister';
import Checkout from './Components/Checkout';
import { Allblog } from './Components/Allblog';
//  import Admin from './Components/admin/layout/DefaultLayout'
import PaymentSucess from './Components/PaymentSucess'
 
import './App.css'



import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

function App() {

  
  return (
    <>
      <Router>
     
      {/* <Nav /> */}
        <Routes>
        <Route path="/" element={<Userlayout><Homepage /></Userlayout>} />
        <Route path="/login" element={<Userlayout><Login /></Userlayout>} />
        <Route path="/register" element={<Userlayout><Register /></Userlayout>} />
        <Route path="/contact" element={<Userlayout><Contact /></Userlayout>} />
        <Route path="/blog/:slug" element={<Userlayout><Blog/></Userlayout>} />
        <Route path='/forgotpassword' element={<Userlayout><Forgotpage/></Userlayout>}/>
        <Route path='/course' element={<Userlayout><Courses/></Userlayout>}/>
        <Route path='/addtocart' element={<Userlayout><Addtocart/></Userlayout>}/>
        <Route path='/coursedetails/:id' element={<Userlayout><Coursedetails/></Userlayout>}/>
        <Route path='/userdashboard' element={<Userlayout><Userdashboard/></Userlayout>}/>
        <Route path='/courseview/:id' element={<Userlayout><Courseview/></Userlayout>}/>
        <Route path='/terms' element={<Userlayout><Terms/></Userlayout>}/>
        <Route path='/Privatepolicy' element={<Userlayout><Privatepolicy/></Userlayout>}/>
        <Route path='/Refundpolicy' element={<Userlayout><Refundpolicy/></Userlayout>}/>
        <Route path='/userinvoice' element={<Userlayout><Invoice/></Userlayout>}/>
        <Route path='/Refundpolicy' element={<Userlayout><Refundpolicy/></Userlayout>}/>
        <Route path='/Offlineregister' element={<Userlayout><Offlineregister/></Userlayout>}/>
        {/* <Route path='/checkout' element={<Userlayout><Checkout/></Userlayout>}/> */}
        <Route path='/checkout/:id' element={<Userlayout><Checkout/></Userlayout>}/>
        <Route path='/paymentSucess' element={<Userlayout><PaymentSucess/></Userlayout>}/>
        <Route path='/allblogs' element={<Userlayout><Allblog/></Userlayout>}/>

        {/* <Route path='/admin/*' element={<Admin/>}/> */}
       
        <Route path='*' element={<div className='text-center h1'>page not found</div>}/>
       </Routes>
        {/* <Footer /> */}
      
      </Router>
      

      
    </>
  )
}

export default App
