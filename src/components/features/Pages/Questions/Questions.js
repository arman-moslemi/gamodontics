
import { Container ,Col, Button,Row} from "react-bootstrap";
import Header from "../layouts/Header";
import Img1 from "../../assets/img/back1.png";
import Img2 from "../../assets/img/back2.png";
import Left from "../../assets/img/left.png";
import Clock from "../../assets/img/clock.png";
import { Link } from "react-router-dom";

const Questions = () => {


  




  return (
    <div className="homeBody" style={{height:'auto'}}>
    <img src={Img1} className="back1"/>
    <img src={Img2} className="back2"/>
     
    <Header/>
    <Container className="whiteBox wres100">
    <p className="stepTitle">
    کیفیت رادیوگرافی
    </p>
    <div className="correctBox">
      <p>
        1-متن سوال اول اینجا قرار می گیرد ؟
      </p>
      <p>
        +14 امتیاز
      </p>
    </div>
    <div className="wrongBox">
    <p>
        1-متن سوال اول اینجا قرار می گیرد ؟
      </p>
      <p>
        +14 امتیاز
      </p>
    </div>
    <div className="correctBox">
      <p>
        1-متن سوال اول اینجا قرار می گیرد ؟
      </p>
      <p>
        +14 امتیاز
      </p>
    </div>
    <div className="correctBox">
      <p>
        1-متن سوال اول اینجا قرار می گیرد ؟
      </p>
      <p>
        +14 امتیاز
      </p>
    </div>
    <div className="QuestionBox">
      <p>
        1-متن سوال اول اینجا قرار می گیرد ؟
      </p>
     <div className="d-flex align-items-center">
      <img src={Clock} className="clock"/>
      <p>00:08:01</p>
     </div>
    </div>
    <div className="QuestionDiv">
    <input type="radio" id="q1" name="question" value="q1"/>
<label for="q1"  className="question">گزینه اول</label><br/>
<input type="radio" id="q2" name="question" value="q2"/>
<label for="q2"  className="question">گزینه دوم</label><br/>
<input type="radio" id="q1" name="question" value="q1"/>
<label for="q1"  className="question">گزینه سوم</label><br/>
<input type="radio" id="q2" name="question" value="q2"/>
<label for="q2"  className="question">گزینه چهارم</label><br/>
<div className="d-flex justify-content-between mt-4">
  <p className="question">توضیحات</p>
  <textarea className="textArea"/>
</div>
    </div>
    <div className="bottomBox">
      <p className="bottomText">
        اتمام آزمون
      </p>
      <p className="bottomText">
        امتیاز دریافتی : 97
      </p>
     
      
    </div>
   <div className="bottomBox">
   <p className="loginLight ta-right">
      برای رفتن به مرحله ی بعدی و استفاده از امتیازات کسب شده باید امتیاز کسب شده را به سکه تبدیل کنید.برای این کار به بانک مراجعه کنید.
      </p>
   </div>
   <div className="bottomBox mt-1">
   <button className="startGame mt-1">
        رفتن به بانک
      </button>
   </div>
    </Container>

    </div>
  );
};
export default Questions;
