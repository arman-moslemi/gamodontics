
import { Container ,Col, Button,Row} from "react-bootstrap";
import Header from "../layouts/Header";
import Img1 from "../../assets/img/back1.png";
import Img2 from "../../assets/img/back2.png";
import Left from "../../assets/img/left.png"
import { apiUrl ,apiAsset} from "../../../../commons/inFormTypes";
import React,{useState,useEffect} from 'react'
import { Link, useHistory ,useh} from "react-router-dom";
const TestStep2 = () => {

  const [data,setData]=useState([])
  const [provider,setProvider]=useState([])

  useEffect(() => {
    About();
// alert(val)
  }, []);
  const About=()=>{
    const axios = require("axios");


    axios.get(apiUrl + "TypeShow")
    .then(function (response) {
      if (response.data.result == "true") {
        console.log(777)
        console.log(response.data.Data)
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
  




  return (
    <div className="homeBody">
    <img src={Img1} className="back1"/>
    <img src={Img2} className="back2"/>
     
    <Header/>
    <Container className="whiteBox pdc2">
    <p className="stepTitle">
      مسابقه ی امتیازی
    </p>
    {
      data?.map((item)=>{
        return(
    <div className="grayBox">
      <p className="grayBoxText">
        مرحله {item.TypeID}
      </p>
      <p className="grayBoxText">
      {item.TypeName}
      </p>
      <button className="startGame">
        شروع بازی
      </button>
    </div>

        )
      })
    }
    {/* <div className="grayBox">
      <p className="grayBoxText">
        مرحله دوم
      </p>
      <p className="grayBoxText">
     تهیه حفره دسترسی
      </p>
      <button className="startGame btndeactive" disabled="true">
        شروع بازی
      </button>
    </div>
   */}
    </Container>

    </div>
  );
};
export default TestStep2;
