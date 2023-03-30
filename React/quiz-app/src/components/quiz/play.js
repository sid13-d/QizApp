import React, {Fragment} from "react";
import {Helmet} from 'react-helmet';
import Icon from '@mdi/react';
import {mdiTimerOutline, mdiChevronDoubleLeft, mdiChevronDoubleRight, mdiExitToApp, mdiSetCenter } from '@mdi/js';
import {MCQ} from '../../question';
import {useNavigate, useHistory} from 'react-router-dom'

class Play extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      questions: MCQ,
      random30: [],
      currQuestion: {},
      // nextQuestion: {},
      // previousQuestion: {},xxxxxx  
      answer: '',
      noOfAnsweredQuestions: 0,
      currentQuestionIndex: 0,
      correctAnswer: 0,
      wrongAnswer: 0,  
      lifeLine: 2,
      time: {}
    };

    this.interval = null;
  }
  componentDidMount() {
 
    this.generateRandomThrity();
    this.startTimer();
    
  }

 generateRandomThrity() {
    let arr = [];
    let temp = {};
    let i =0;
    while (i<30){
      let randomNumber = Math.floor(Math.random() * 58) + 1;

      temp = this.state.questions[randomNumber];
      temp.ID = randomNumber;

     if(!arr.some(value => value.ID === randomNumber)){
      arr.push(temp);
      i++
     }
     
    }
    //console.log(arr)

    this.setState({
      random30: arr,
    }, () => {
      console.log("The state hasbeen set", this.state.random30, "\n", this.state.currQuestion, "\n", this.state.nextQuestion);
      this.setter(0);
    });

    
  }

  setter(currIndex = this.state.currentQuestionIndex){
    let curQues = this.state.random30[currIndex];
    let nextQues = this.state.random30[currIndex + 1];
    let prevQues;
    if(currIndex === 0){
      prevQues = this.state.random30[currIndex];
    }else {
    prevQues = this.state.random30[currIndex - 1];
    }
    console.log("the current : ", curQues, "the next : ", nextQues, "the prev : ", prevQues);
    this.setState({
        currQuestion: curQues,
        nextQuestion: nextQues,
        previousQuestion: prevQues,
        
    });
  }


  optionHandler = (e) => {
    if(e.target.innerHTML.toLowerCase() === this.state.currQuestion["answer"].toLowerCase()){
      console.log("The correct answer is :", e.target.innerHTML.toLowerCase())
      this.correctAnswer();
      
    }else{
      console.log("The wrong answer is :", e.target.innerHTML.toLowerCase(), this.state.currQuestion["answer"].toLowerCase())
      this.wrongAnswer();
    }

    this.showOptions();

  }

  correctAnswer = () => {
    let i = this.state.correctAnswer + 1;
    let index = this.state.currentQuestionIndex + 1;
    let noOfQuestions = this.state.noOfAnsweredQuestions + 1;
    //let currQuestion = this.state.random30[index];
    this.setState({
      correctAnswer: i,
      currentQuestionIndex: index,
      //currQuestion: currQuestion,
      noOfAnsweredQuestions: noOfQuestions
  }, () => {
      this.setter(index);
  });
  console.log(this.state.correctAnswer)
  }

  wrongAnswer = () => {
    navigator.vibrate(1000)
    let i = this.state.wrongAnswer + 1;
    let index = this.state.currentQuestionIndex + 1;
    let noOfQuestions = this.state.noOfAnsweredQuestions + 1;
    //let currQuestion = this.state.random30[index];
    this.setState({
      wrongAnswer: i,
      currentQuestionIndex: index,
      //currQuestion: currQuestion,
      noOfAnsweredQuestions: noOfQuestions
  }, () => {
    this.setter(index);
  });
  
  }
    

  nextHandler = () => {
    
    let index = this.state.currentQuestionIndex + 1;
    console.log(index);
    this.setState({
        currentQuestionIndex: index
    }, () => {
      this.setter(index);
    })
    this.showOptions();

  }

  prevHandler = () => {
    let index = this.state.currentQuestionIndex - 1;
    if(index<0){
      index = 0;
    }
    this.setState({
      currentQuestionIndex: index
    }, () => {
      this.setter(index)
    })

    this.showOptions();
  }


  showOptions = () => {
    console.log("show options called")
    const options = Array.from(document.querySelectorAll('.options'))
    options.forEach(option => {
      option.style.display = 'block';
    })
  }

  hintsHandler = () => {
  

    const options = Array.from(document.querySelectorAll('.options'))
    let cnt=3, noOp=0;
    console.log("options arr: ", options[cnt].innerHTML, "type of it is : ", typeof(options[cnt].innerHTML))
    console.log("the object answer is arr: ", this.state.currQuestion['answer'], "type of it is : ", typeof(this.state.currQuestion['answer']))
    while( cnt >= 0){
      if(options[cnt].innerHTML !== this.state.currQuestion['answer'] && noOp !== 2){
        options[cnt].style.display = "none";
        noOp = noOp + 1;
      }
      cnt = cnt - 1;
    }
  }

  startTimer = () => {
    const countDownTime = Date.now() + 300000;
    this.interval = setInterval(() => {
      const now = new Date();
      const distance = countDownTime - now;

     
      const sec = Math.floor((distance % (1000 * 60 )) / 1000);
      if(distance < 0){
        clearInterval(this.interval);
        this.setState({
          time: {
            sec: 0
          },
          
        },() => {
          //alert("The quiz has ended");
         window.location.href = '/'
        });
      } else {
        this.setState({
          time: {
            sec
          }
        })
      }
    }, 1000)
  }

      render() {
        
        return (
          
          <Fragment>
             
            <Helmet><title>Quiz</title></Helmet>
            <div className="questions">
            <div className="lifeline-container">
                <p>
                    <span className="lifeline-icon" onClick={this.hintsHandler}><Icon style={{color: "green"}} path={mdiSetCenter} size={1} /></span><span className="lifeline">{this.state.lifeLine}</span>
                </p>
            </div>
            <div className="so-far">
                <span>{this.state.noOfAnsweredQuestions}/30</span>
                <span> :{this.state.time["sec"]} <Icon path={mdiTimerOutline} size={1} /></span>
            </div>
            <h5>{this.state.random30[this.state.currentQuestionIndex]?.["question"]}</h5>
            <div className="options-container">
                <p onClick={this.optionHandler} className="options">{this.state.random30[this.state.currentQuestionIndex]?.["options"][0]}</p>
                <p onClick={this.optionHandler} className="options">{this.state.random30[this.state.currentQuestionIndex]?.["options"][1]}</p>
            </div>
            <div className="options-container">
                <p onClick={this.optionHandler} className="options">{this.state.random30[this.state.currentQuestionIndex]?.["options"][2]}</p>
                <p onClick={this.optionHandler} className="options">{this.state.random30[this.state.currentQuestionIndex]?.["options"][3]}</p>
            </div>

            <div className="button-container">
                <button onClick={this.prevHandler}><Icon className="button-icon" path={mdiChevronDoubleLeft} size={0.8} /> Previous</button>
                <button id="next-button" onClick={this.nextHandler}>Next <Icon path={mdiChevronDoubleRight} size={0.8} /></button>
                <QuitButton></QuitButton>
            </div>
            </div>

          </Fragment>
        );
      }

}

function QuitButton (){
  const navigation = useNavigate();

  

  return(
    <button onClick={() =>{
      if(window.confirm("Are you sure you want to quit")){
        navigation('/')
      }
    }}><Icon path={mdiExitToApp} size={0.8} /> Quit</button>
  );
 }

export default Play;