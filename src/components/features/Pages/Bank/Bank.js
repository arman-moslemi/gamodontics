
import { Container ,Col, Button,Row} from "react-bootstrap";
import Header from "../layouts/Header";
import Img1 from "../../assets/img/back1.png";
import Img2 from "../../assets/img/back2.png";
import Cash from "../../assets/img/cash.png";
import Coin from "../../assets/img/coin.png";
import { Link } from "react-router-dom";

const Bank = () => {


  




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
          امتیازات شما : 123
        </p>
      </div>
      <div>
      <button className="startGame fl" style={{marginTop:0}}>
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
