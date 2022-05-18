
import { Container ,Col, Button,Row} from "react-bootstrap";
import Header from "../layouts/Header";
import Img1 from "../../assets/img/back1.png";
import Img2 from "../../assets/img/back2.png";
import Cash from "../../assets/img/cash.png";
import Coin from "../../assets/img/coin.png";
import { apiUrl ,apiAsset} from "../../../../commons/inFormTypes";
import React,{useState,useEffect} from 'react'
import { Link, useHistory } from "react-router-dom";
const Bank = () => {

  const history = useHistory();

  const [data,setData]=useState([])

  useEffect(() => {
    About();
// alert(val)
  }, []);
  const About=()=>{
    const axios = require("axios");
   const user= localStorage.getItem("user");

console.log(66)
console.log(user)
    axios.post(apiUrl + "Customer",{CustomerID:user})
    .then(function (response) {
      if (response.data.result == "true") {
        console.log(777)
        console.log(response.data)
    setData(response.data.Data)

    }
    else{
    //  alert("نام کاربری یا رمز عبور نادرست میباشد")

    }})
    .catch(function (error) {
      console.log(777)

      console.log(error);
    });
  



  }
  const change=()=>{
    const axios = require("axios");
   const user= localStorage.getItem("user");

console.log(66)
console.log(user)
    axios.post(apiUrl + "ScoreToCoin",{CustomerID:user})
    .then(function (response) {
      if (response.data.result == "true") {
        console.log(777)
        console.log(response.data)
About()
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
    <div className="homeBody" style={{height:'auto'}}>
    <img src={Img1} className="back1"/>
    <img src={Img2} className="back2"/>
     
    <Header/>
    <Container className="whiteBox">
    <div className="row align-items-center">
    <Col md={6}>
      <img src={Cash} className="homeLeftImg"/>
      </Col>
      <Col md={6}>
      <p className="rightTitle">
       بانک امتیازات
      </p>
      <br/>
      <p className="loginLight ta-right">
      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است 
      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است 
     
      </p>
      <div className="resD mt-4" style={{direction:'rtl'}}>
      <div className="d-flex align-items-center">
        <img src={Coin} className="coin"/>
        <p className="coinText">
          امتیازات شما : {data?.MyScore}
        </p>
      </div>
      <div className="d-flex align-items-center">
        <img src={Coin} className="coin"/>
        <p className="coinText">
          سکه های شما : {data?.MyCoin}
        </p>
      </div>
      <div>
      <button onClick={()=>change()} className="startGame fl" style={{marginTop:0}}>
       تبدیل به سکه
      </button>
      </div>
        </div>
      </Col>
    </div>
    </Container>

    </div>
  );
};
export default Bank;
