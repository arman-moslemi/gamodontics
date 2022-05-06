
import { Container ,Col, Button,Row} from "react-bootstrap";
import Header from "../layouts/Header";
import Img1 from "../../assets/img/back1.png";
import Img2 from "../../assets/img/back2.png";
import Left from "../../assets/img/left.png"
import { Link } from "react-router-dom";

const Rank = () => {


  




  return (
    <div className="homeBody" style={{height:'auto'}}>
    <img src={Img1} className="back1"/>
    <img src={Img2} className="back2"/>
     
    <Header/>
    <Container className="whiteBox pdc">
    <p className="stepTitle">
     جدول امتیازات
    </p>
    <div className="rankTable">
      <div className="rankHeader">
        <div className="w5">
          <p>
            رتبه
          </p>
        </div>
        <div className="w80">
          <p>
            نام مستعار
          </p>
        </div>
        <div className="w15">
          <p>
            سکه دریافتی
          </p>
        </div>
      </div>
      <div className="tableBody">
        <div className="w5">
          <p>
            1
          </p>
        </div>
        <div className="w80">
          <p>
            yts12007d
          </p>
        </div>
        <div className="w15">
          <p>
            120
          </p>
        </div>
      </div>
      <div className="tableBody">
        <div className="w5">
          <p>
            2
          </p>
        </div>
        <div className="w80">
          <p>
            yts12007d
          </p>
        </div>
        <div className="w15">
          <p>
            12
          </p>
        </div>
      </div>
    </div>
    </Container>

    </div>
  );
};
export default Rank;
