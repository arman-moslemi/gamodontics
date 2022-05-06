
import { Container ,Col, Button,Row} from "react-bootstrap";
import Header from "../layouts/Header";
import Img1 from "../../assets/img/back1.png";
import Img2 from "../../assets/img/back2.png";
import Left from "../../assets/img/left.png"
import { Link } from "react-router-dom";

const TestStep2 = () => {


  




  return (
    <div className="homeBody">
    <img src={Img1} className="back1"/>
    <img src={Img2} className="back2"/>
     
    <Header/>
    <Container className="whiteBox pdc2">
    <p className="stepTitle">
      مسابقه ی امتیازی
    </p>
    <div className="grayBox">
      <p className="grayBoxText">
        مرحله اول
      </p>
      <p className="grayBoxText">
      کیفیت رادیوگرافی
      </p>
      <button className="startGame">
        شروع بازی
      </button>
    </div>
    <div className="grayBox">
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
    <div className="grayBox">
      <p className="grayBoxText">
        مرحله سوم
      </p>
      <p className="grayBoxText">
      cleaning & shaping
      </p>
      <button className="startGame btndeactive" disabled="true">
        شروع بازی
      </button>
    </div>
    <div className="grayBox">
      <p className="grayBoxText">
       مرحله چهارم
      </p>
      <p className="grayBoxText">
      obturation
      </p>
      <button className="startGame btndeactive" disabled="true">
        شروع بازی
      </button>
    </div>
    </Container>

    </div>
  );
};
export default TestStep2;
