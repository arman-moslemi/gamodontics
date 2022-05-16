
import Img1 from "../../assets/img/back1.png";
import Img2 from "../../assets/img/back2.png";
import Logo from "../../assets/img/logo.png";
import { apiUrl ,apiAsset} from "../../../../commons/inFormTypes";
import React,{useState,useContext} from 'react'
import { Link, useHistory ,useh} from "react-router-dom";
// import CustomizedDialogs from './layouts/AlertModal';
const Login = () => {
  const history = useHistory();

  const [open,setOpen]=useState(false)
  const [title,setTitle]=useState("")
  const [user,setUser]=useState()
  const [pass,setPass]=useState()
  const login=()=>{
    const axios = require("axios");
    console.log(user)
    console.log(pass)

if(!user || !pass)
{

  alert("همه مقادیر را وارد نمائید")
}
else{

    axios.post(apiUrl + "Login",{Username:user,Password:pass})
    .then(function (response) {
      if (response.data.result == "true") {
        console.log(777)
        console.log(response.data.Data)
       
        localStorage.setItem("user",response.data.Data?.CustomerID);
        // history.push("/Rank/"+response.data.Data.CustomerID)
        // history.search("/Rank")
        history.push('/Test')

    }
    else{
     alert("نام کاربری یا رمز عبور نادرست میباشد")

    }})
    .catch(function (error) {
      console.log(777)

      console.log(error);
    });
  }



  }

  




  return (
    <div className="loginBody">
             {/* <CustomizedDialogs Title={title} open={open} setOpen={setOpen}/> */}

    <img src={Img1} className="back1"/>
    <img src={Img2} className="back2"/>
   <img src={Logo} className="loginLogo"/>
    <div className="loginBox">
        <p className="loginBold">
            ! سلام
        </p>
        <p className="loginLight">
       ! به رقابت ما خوش اومدی ، وارد سامانه شو
        </p>
        <input type="text" className="InputCustom mt-4" onChange={(e)=>setUser(e.target.value)} placeholder="نام کاربری"/>
        <input  className="InputCustom mt-3" type={"password"} onChange={(e)=>setPass(e.target.value)} placeholder="رمز عبور"/>
        <button  onClick={()=>login()} className="blueBtn mt-4">
            ورود
        </button>
    </div>


    </div>
  );
};
export default Login;
