
import { Container ,Col, Button,Row} from "react-bootstrap";
import { Link } from "react-router-dom";
import Img1 from "../../assets/img/back1.png";
import Img2 from "../../assets/img/back2.png";
import Logo from "../../assets/img/logo.png"
const Login = () => {


  




  return (
    <div className="loginBody">
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
        <input type="text" className="InputCustom mt-4" placeholder="نام کاربری"/>
        <input type="text" className="InputCustom mt-3" placeholder="رمز عبور"/>
        <button className="blueBtn mt-4">
            ورود
        </button>
    </div>


    </div>
  );
};
export default Login;
