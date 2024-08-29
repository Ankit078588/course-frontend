import { useState } from "react"
import Sidenavbar from "./Userdashboard/Sidenavbar"
import '../Css/Userdashboard.css'


import Dashboard from './Userdashboard/Dashboard'
function Userdashboard() {
  const [currentContent, setCurrentContent] = useState('home');

  const changeDashboardContent = (content) => {
    setCurrentContent(content);
  };
  return (
    <>
      <div className="container">
        <div className="row py-4">

          <div className="col-lg-3">
            <Sidenavbar changeDashboardContent={changeDashboardContent} />


          </div>
          <div className="col-lg-9">
            <Dashboard currentContent={currentContent} />

          </div>

        </div>
      </div>



    </>

  )
}


export default Userdashboard
