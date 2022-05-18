
import { Container ,Col, Button,Row} from "react-bootstrap";
import React, {useState, useEffect} from 'react'
import Logo from "../../assets/img/logo.png"
import User from "../../assets/img/user.png"
import { Nav, Navbar, NavDropdown, NavItem } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useHistory ,useh} from "react-router-dom";

const Header = () => {
  const history = useHistory();
  const [data,setData]=useState()

  const About=()=>{
   const user= localStorage.getItem("user");
setData(user)
  }
  const exit=()=>{
   const user= localStorage.setItem("user","");
  history.push("/")
  }
  useEffect(() => {
    About();
// alert(val)
  }, []);
  return (
    <>
     


     <Container className="headerContainer desktopMenu">
    
     <nav>
  
      <ul className="list">
        <img src={Logo} className="menuLogo"/>
      {/* <li onClick={()=>history.push("Test")} className="items">شروع بازی</li> */}
      <li onClick={()=>history.push("Guide")} className="items">راهنما</li>
      <li onClick={()=>history.push("AboutUs")} className="items">درباره ما</li>
      <li onClick={()=>history.push("Rank")} className="items">جدول امتیازات</li>
        {
          data?
      <li onClick={()=>exit()}className="items d-flex align-items-center">

          <img src={User}  className="user"/>
          خروج از حساب کاربری</li>
          :
          <li onClick={()=>history.push("Login")} className="items">ورود</li>


        }
    </ul>
     

    
    </nav>
      </Container>
     <Container fluid className="responsiveMenu">
     
     <Navbar collapseOnSelect expand={false}  variant="light" className="w100">
     <img src={Logo}/>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="myPd">
  
   
  {/* <Nav.Link href="#" className="responsiveLink mt-2">شروع بازی</Nav.Link> */}
  <Nav.Link  onClick={()=>history.push("Guide")} className="responsiveLink">راهنما</Nav.Link>
  <Nav.Link onClick={()=>history.push("AboutUs")} className="responsiveLink">درباره ما</Nav.Link>
  <Nav.Link onClick={()=>history.push("Rank")} className="responsiveLink">بانک امتیازات</Nav.Link>
  {
          data?
  <Nav.Link onClick={()=>exit()} className="responsiveLink">خروج از حساب کاربری</Nav.Link>
 
:
<Nav.Link onClick={()=>history.push("Login")} className="responsiveLink">ورود</Nav.Link>

  }

   

  </Nav>

</Navbar.Collapse>
</Navbar>

     </Container>
    </>
  );
};
export default Header;
