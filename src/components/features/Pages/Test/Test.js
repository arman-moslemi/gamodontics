
import { Container ,Col, Button,Row} from "react-bootstrap";
import Header from "../layouts/Header";
import Img1 from "../../assets/img/back1.png";
import Img2 from "../../assets/img/back2.png";
import Left from "../../assets/img/left.png"
import { apiUrl ,apiAsset} from "../../../../commons/inFormTypes";
import React,{useState,useEffect} from 'react'
import { Link, useHistory } from "react-router-dom";
const Test = () => {

  const history = useHistory();

  const [data,setData]=useState(0)

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
    setData(response.data.Data.MyScore)

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
      <img src={Left} className="homeLeftImg"/>
      </Col>
      <Col md={6}>
      <p className="rightTitle">
        مسابقه سنجش فلان
      </p>
      <br/>
      <p className="loginLight ta-right">
      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است 
      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است 
     
      </p>
      <div className="d-flex justify-content-between" style={{direction:'rtl',flexWrap:'wrap'}}>
      <button onClick={()=>history.push("/TestStep1")} className="startGame wb100">
امتیازی    
  </button>
  {
    data>100?
<button onClick={()=>history.push("/Resistance")} className="startGame  wb100">
       مقاومتی
      </button>
    :

      <button onClick={()=>history.push("/TestStep1")} className="startGame btndeactive wb100" disabled="true">
       مقاومتی
      </button>
  }
      <button onClick={()=>history.push("/Bank")} className="startGame wb100">
        بانک
      </button>
        </div>
      </Col>
    </div>
    </Container>

    </div>
  );
};
export default Test;
