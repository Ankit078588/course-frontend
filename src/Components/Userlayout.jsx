
import Nav from "./Nav"
import Footer from "./Footer"
// eslint-disable-next-line react/prop-types
export const Userlayout = ({ children }) => {
  return (
    <div>
    <Nav/>
    <main>{children}</main>
    <Footer/>
  </div>
  )
}

