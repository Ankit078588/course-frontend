import Homepage from './Components/Homepage'
import Login from './Components/Login'
import Nav from './Components/Nav';
import Register from './Components/Register'
import Contact from './Components/Contact'
import Blog from './Components/Blog';
import './App.css'


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {


  return (
    <>
      <Router>
      <Nav/>
        <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog/>} />
       
        
        </Routes>
      </Router>
      

      
    </>
  )
}

export default App
