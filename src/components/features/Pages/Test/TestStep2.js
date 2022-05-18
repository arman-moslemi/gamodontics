
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
  const [level,setlevel]=useState(1)
  const history = useHistory();

  useEffect(() => {
    About();
// alert(val)
  }, []);
  const About=()=>{
    const axios = require("axios");
   const user= localStorage.getItem("user");

console.log(66)
console.log(user)
    axios.post(apiUrl + "TypeShow",{CustomerID:user})
    .then(function (response) {
      if (response.data.result == "true") {
        console.log(777)
        console.log(response.data)
    setData(response.data.TypeData)
    setlevel(response.data.LevelData)

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
      data?.map((item,index)=>{
        return(
          <div className="grayBox">
      <p className="grayBoxText">
        مرحله {item.TypeID}
      </p>
      <p className="grayBoxText">
      {item.TypeName}
      </p>
     { index+1<=level?
     
      <button className="startGame" onClick={()=>history.push("/Questions/"+item.TypeID)}>
        شروع بازی
      </button>
    :
    <button className="startGame btndeactive" disabled="true">
    شروع بازی
  </button>
    }
    </div>
    
 

        )
      })
    }
    </Container>

    </div>
  );
};
export default TestStep2;
