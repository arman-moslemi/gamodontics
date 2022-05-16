
import { Container ,Col, Button,Row} from "react-bootstrap";
import React, {useState, useEffect} from 'react'
import Logo from "../../assets/img/logo.png"
import User from "../../assets/img/user.png"
import { Nav, Navbar, NavDropdown, NavItem } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useHistory ,useh} from "react-router-dom";

const Header = () => {
  const history = useHistory();

  return (
    <>
     


     <Container className="headerContainer desktopMenu">
    
     <nav>
  
      <ul className="list">
        <img src={Logo} className="menuLogo"/>
      <li onClick={()=>history.push("Test")} className="items">شروع بازی</li>
      <li onClick={()=>history.push("Guide")} className="items">راهنما</li>
      <li onClick={()=>history.push("AboutUs")} className="items">درباره ما</li>
      <li onClick={()=>history.push("Bank")} className="items">بانک امتیازات</li>
      <li onClick={()=>history.push("Home")} className="items d-flex align-items-center">
        <img src={User} className="user"/>
        خروج از حساب کاربری</li>
    </ul>
     

    
    </nav>
      </Container>
     <Container fluid className="responsiveMenu">
     
     <Navbar collapseOnSelect expand={false}  variant="light" className="w100">
     <img src={Logo}/>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="myPd">
  
   
  <Nav.Link href="#" className="responsiveLink mt-2">شروع بازی</Nav.Link>
  <Nav.Link href="#" className="responsiveLink">راهنما</Nav.Link>
  <Nav.Link href="#" className="responsiveLink">درباره ما</Nav.Link>
  <Nav.Link href="#" className="responsiveLink">بانک امتیازات</Nav.Link>
  <Nav.Link href="#" className="responsiveLink">خروج از حساب کاربری</Nav.Link>
 


   

  </Nav>

</Navbar.Collapse>
</Navbar>

     </Container>
    </>
  );
};
export default Header;
