
import { Container ,Col, Button,Row} from "react-bootstrap";
import Header from "../layouts/Header";
import Img1 from "../../assets/img/back1.png";
import Img2 from "../../assets/img/back2.png";
import Left from "../../assets/img/left.png";
import Clock from "../../assets/img/clock.png";
import { apiUrl ,apiAsset} from "../../../../commons/inFormTypes";
import React,{useState,useEffect} from 'react'
import { Link, useHistory ,useParams} from "react-router-dom";
const Resistance = () => {

  const [data,setData]=useState([])
  const [ActiveQuestion,setActiveQuestion]=useState(0)
  const [answers,setAnswers]=useState([])
  const [ minutes, setMinutes ] = useState(0);
  const [seconds, setSeconds ] =  useState(10);
  const [numSec, setNumSec ] =  useState(0);
  const [rate, setRate ] =  useState(0);
  const [end, setEnd ] =  useState(false);
  const history = useHistory();

  useEffect(()=>{
  let myInterval = setInterval(() => {
          if (seconds > 0) {
              setSeconds(seconds - 1);
          }
          if (seconds === 0) {
              if (minutes === 0) {
                  Submit()
                
setEnd(true)
                  clearInterval(myInterval)
            
              } else {
                  setMinutes(minutes - 1);
                  setSeconds(10);
              }
          } 
      }, 1000)
      return ()=> {
          clearInterval(myInterval);
        };
  });
  useEffect(() => {
    About();
// alert(val)
  }, []);
  const About=()=>{
    const axios = require("axios");
   const user= localStorage.getItem("user");

console.log(66)
console.log(user)
    axios.get(apiUrl + "CreateTestRes")
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
  const Submit=()=>{
    const axios = require("axios");
   const user= localStorage.getItem("user");

console.log(66)
console.log(user)
    axios.post(apiUrl + "Final",{CustomerID:user,Score:rate})
    .then(function (response) {
      if (response.data.result == "true") {
        console.log(777)
        console.log(response.data.Data)
    alert("جواب شما نادرست می باشد.آزمون به اتمام رسید")
history.push("/Test")
    }
    else{
    //  alert("نام کاربری یا رمز عبور نادرست میباشد")

    }})
    .catch(function (error) {
      console.log(777)

      console.log(error);
    });
  



  }
  
  const answerQue=(id,ii)=>{
console.log(id)
setAnswers([...answers,id])
if(data[ii].Correct==id){
  console.log(4444)

setRate(rate+data[ii].ScoreTest+seconds)
if(ActiveQuestion<data.length)
{
setSeconds(10)
  setActiveQuestion(ActiveQuestion+1)
  
  
}

}
else
  {  
      setEnd(true);
Submit()
}

}


  return (
    <div className="homeBody" style={{height:'auto'}}>
    <img src={Img1} className="back1"/>
    <img src={Img2} className="back2"/>
     
    <Header/>
    <Container className="whiteBox wres100">
    <p className="stepTitle">
    {/* کیفیت رادیوگرافی */}
    </p>
    {
      data.map((item,index)=>{
        return(
ActiveQuestion==index?
<>
<div className="QuestionBox">
<p>
{index+1+"-"}{item.Text}
</p>
<div className="d-flex align-items-center">
<img src={Clock} className="clock"/>
<p>{minutes+":"+seconds}</p>
</div>
</div>
<div className="QuestionDiv">
<input type="radio" onChange={()=>answerQue(1,index)}  id="q1" name="question" value="q1"/>
<label for="q1"   className="question">{item.Answer1}</label><br/>
<input type="radio" onChange={()=>answerQue(2,index)}id="q2" name="question" value="q2"/>
<label for="q2"  className="question">{item.Answer2}</label><br/>
<input type="radio"onChange={()=>answerQue(3,index)} id="q1" name="question" value="q1"/>
<label for="q1"  className="question">{item.Answer3}</label><br/>
<input type="radio" onChange={()=>answerQue(4,index)} id="q2" name="question" value="q2"/>
<label for="q2"  className="question">{item.Answer4}</label><br/>
<div className="d-flex justify-content-between mt-4">
<p className="question">توضیحات</p>
<textarea value={item.Description} disabled={true} className="textArea"/>
</div>
</div>
</>
:
answers[index]==item.Correct?
    <div className="correctBox">
      <p>
        {index+1+"-"}{item.Text}
      </p>
      <p>
        {item.ScoreTest} امتیاز
      </p>
    </div>
    :
    answers[index]==0?
<div className="correctBox">
      <p>
        {index+1+"-"}{item.Text}
      </p>
      <p>
        0 امتیاز
      </p>
    </div>
    :
    <div className="wrongBox">
    <p>
    {index+1+"-"}{item.Text}
      </p>
      <p>
        -4 امتیاز
      </p>
    </div>
        )
      })
    }
    {/* <div className="wrongBox">
    <p>
        1-متن سوال اول اینجا قرار می گیرد ؟
      </p>
      <p>
        +14 امتیاز
      </p>
    </div> */}
  
   











{
  end?

    <div className="bottomBox">
      <p className="bottomText">
        اتمام آزمون
      </p>
      <p className="bottomText">
        امتیاز دریافتی : {rate}
      </p>
     
      
    </div>
  :
  null
}
   <div className="bottomBox">
   <p className="loginLight ta-right">
      برای رفتن به مرحله ی بعدی و استفاده از امتیازات کسب شده باید امتیاز کسب شده را به سکه تبدیل کنید.برای این کار به بانک مراجعه کنید.
      </p>
   </div>
   <div className="bottomBox mt-1">
   <button onClick={()=>history.push("/Bank")} className="startGame mt-1">
        رفتن به بانک
      </button>
   </div>
    </Container>

    </div>
  );
};
export default Resistance;
