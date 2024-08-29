import React from 'react'
// import html2pdf from "html2pdf.js";
import html2pdf from 'html2pdf.js/dist/html2pdf.min';
import ReactDOMServer from 'react-dom/server';
import "../Css/generatecertificate.css";

 const Generatecertificate = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString();
 const coursename = localStorage.getItem("course_name");
 const teachername = localStorage.getItem("Teachername");
 const username= sessionStorage.getItem("username");
    const pdfJSX = () => {
        return (
          <>
          <div  className="background" >
          <div className='coursename'>
          <span>{coursename}</span>
          </div>
            <h1 className='username'>{username}</h1><br /><br/><br/><br/><br/><br/>
            <span className='date' >{formattedDate}</span> <span className='teachername'>{teachername}</span>
           
          
            </div>
          </>
        )
      }
      const printElement = ReactDOMServer.renderToString(pdfJSX());
        // const printElement = pdfJSX();
        console.log(printElement);
        const  opt = {
            margin: [0, 0, 0, 0], // No margins
            filename:     'Mycertificate.pdf',
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 2 },
            jsPDF:        { unit: 'in', format: 'a4', orientation: 'landscape' }
          };
    
        html2pdf().from(printElement).set(opt).save();
      
    
}
export default Generatecertificate;
