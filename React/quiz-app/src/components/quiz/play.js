import React, {Fragment} from "react";
import {Helmet} from 'react-helmet';
import Icon from '@mdi/react';
import M from 'materialize-css';
import {mdiTimerOutline, mdiChevronDoubleLeft, mdiChevronDoubleRight, mdiExitToApp, mdiSetCenter } from '@mdi/js';
import {MCQ} from '../../question';

class Play extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      questions: MCQ,
      random30: [],
      currQuestion: {},
      nextQuestion: {},
      previousQuestion: {},
      answer: '',
      noOfAnsweredQuestions: 0,
      currentQuestionIndex: 0,
      correctAnswer: 0,
      wrongAnswer: 0,  
    };
  }
  componentDidMount() {
 
    this.generateRandomThrity();
    
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
      currQuestion: arr[0],
      nextQuestion: arr[1],
      previousQuestion: arr[0],
    }, () => {
      console.log("The state hasbeen set", this.state.random30, "\n", this.state.currQuestion, "\n", this.state.nextQuestion);
    
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
  }

  correctAnswer = () => {
    let i = this.state.correctAnswer + 1;
    let index = this.state.currentQuestionIndex + 1;
    let noOfQuestions = this.state.noOfAnsweredQuestions + 1;
    let currQuestion = this.state.random30[index];
    this.setState({
      correctAnswer: i,
      currentQuestionIndex: index,
      currQuestion: currQuestion,
      noOfAnsweredQuestions: noOfQuestions
  });
  console.log(this.state.correctAnswer)
  }

  wrongAnswer = () => {
    navigator.vibrate(1000)
    let i = this.state.wrongAnswer + 1;
    let index = this.state.currentQuestionIndex + 1;
    let noOfQuestions = this.state.noOfAnsweredQuestions + 1;
    let currQuestion = this.state.random30[index];
    this.setState({
      wrongAnswer: i,
      currentQuestionIndex: index,
      currQuestion: currQuestion,
      noOfAnsweredQuestions: noOfQuestions
  });
  }
      
  
      render() {
        return (
         
          <Fragment>
             
            <Helmet><title>Quiz</title></Helmet>
            <div className="questions">
            <div className="lifeline-container">
                <p>
                    <span className="lifeline-icon"><Icon path={mdiSetCenter} size={1} /></span><span className="lifeline">2</span>
                </p>
            </div>
            <div className="so-far">
                <span>{this.state.noOfAnsweredQuestions}/30</span>
                <span> 2:30 <Icon path={mdiTimerOutline} size={1} /></span>
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
                <button><Icon className="button-icon" path={mdiChevronDoubleLeft} size={0.8} /> Previous</button>
                <button>Next <Icon path={mdiChevronDoubleRight} size={0.8} /></button>
                <button><Icon path={mdiExitToApp} size={0.8} /> Quit</button>
            </div>
            </div>

          </Fragment>
        );
      }

}

export default Play;