
import { Container ,Col, Button,Row} from "react-bootstrap";
import Header from "../layouts/Header";
import Img1 from "../../assets/img/back1.png";
import Img2 from "../../assets/img/back2.png";
import Phone from "../../assets/img/phone.png";
import Telegram from "../../assets/img/telegram.png";
import Email from "../../assets/img/email.png";
import UserImg from "../../assets/img/userImg.png";
import { apiUrl ,apiAsset} from "../../../../commons/inFormTypes";
import React,{useState,useEffect} from 'react'
import { Link, useHistory ,useh} from "react-router-dom";
const AboutUs = () => {
  const [data,setData]=useState([])
  const [provider,setProvider]=useState([])

  useEffect(() => {
    About();
// alert(val)
  }, []);
  const About=()=>{
    const axios = require("axios");


    axios.get(apiUrl + "Aboutus")
    .then(function (response) {
      if (response.data.result == "true") {
        console.log(777)
        console.log(response.data.InfoData)
    setData(response.data.InfoData)
    setProvider(response.data.AdminData)

    }
    else{
    //  alert("نام کاربری یا رمز عبور نادرست میباشد")

    }})
    .catch(function (error) {
      console.log(777)

      console.log(error);
    });
  



  }





  return (
    <div className="homeBody" style={{direction:'rtl',height:'auto'}}>
    <img src={Img1} className="back1"/>
    <img src={Img2} className="back2"/>
     
    <Header/>
    <Container className="whiteBox">
    <p className="boxTitle">
      راه های ارتباطی با ادمین
    </p>
   <div className="resBlock">
     <div className="mt-4 resB">
       <div className="circleBox">
          <img src={Phone}/>
       </div>
       <p className="blueTitle">
         شماره تماس : 
       </p>
       <a href="#" className="navyTitle">
         {data?.Phone}
       </a>
     </div>
     <div className=" mt-4 resB">
       <div className="circleBox">
          <img src={Telegram}/>
       </div>
       <p className="blueTitle">
         تلگرام مجموعه : 
       </p>
       <a  href="#" className="navyTitle">
       {data?.Telegram}       </a>
     </div>
     <div className="resB mt-4">
       <div className="circleBox">
          <img src={Email}/>
       </div>
       <p className="blueTitle">
         ایمیل : 
       </p>
       <a  href="#" className="navyTitle">
       {data?.Email}       </a>
     </div>
   </div>
   <div className="heightC">

   </div>
   <p className="boxTitle mt-4">
      سازندگان بازی
    </p>
    <div className="infoBoxDiv">
      {
        provider.map((item)=>{
          return(

      <div className="infoBox">
        <img src={UserImg} />
        <p className="userName">
          {item.NameFamily}
        </p>
        <p className="userPosition">
         {item.Role}
        </p>
      </div>
          )
        })
      }
 
    </div>
    </Container>

    </div>
  );
};
export default AboutUs;
