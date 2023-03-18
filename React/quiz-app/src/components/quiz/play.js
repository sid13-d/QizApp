import React, {Fragment} from "react";
import {Helmet} from 'react-helmet';
import Icon from '@mdi/react';

import {mdiTimerOutline, mdiChevronDoubleLeft, mdiChevronDoubleRight, mdiExitToApp, mdiSetCenter } from '@mdi/js';
import {MCQ} from '../../question';

class Play extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      numbers: [],
      questions: MCQ,
      currentQuestion: {},
      nextQuestion: {},
      previousQuestion: {},
      answer: '',
      currentQuestionIndex: 0,
      correctAnswer: 0,
      wrongAnswer: 0,  
    };
  }
  

  

  generateNumbers = () => {
    if (this.state.numbers.length > 0) {
      return;
    }
    let numArray = [];
    while (numArray.length < 30) {
      let randomNumber = Math.floor(Math.random() * 30) + 1; // generate a random number between 1 and 100
      if (!numArray.includes(randomNumber)) {
        numArray.push(randomNumber);
      }
    }
    this.setState({ numbers: numArray }, () => {
      setTimeout(() => {
        if (this.state.numbers == null) {
          console.log("Error: state not updated");
        }
      }, 1000);
    });

    console.log("hello world")
  };


  componentDidMount() {
    this.generateNumbers();
    const {questions, currentQuestion, nextQuestion, previousQuestion} = this.state;
    this.displayQuestions(questions, currentQuestion, nextQuestion, previousQuestion)
  }

  displayQuestions = (ques = this.state.questions, currentQuestion, nextQuestion, previousQuestion) =>{
   

     
    currentQuestion = ques[this.state.currentQuestionIndex]
    nextQuestion = ques[this.state.currentQuestionIndex + 1]
    previousQuestion = ques[this.state.currentQuestionIndex - 1]
    console.log("the numbers are", this.state.numbers)
   
    this.setState({
     
      currentQuestion,
      nextQuestion,
      previousQuestion
    
    }, () => {
     
      console.log("The state currentquestion are:", this.state.currentQuestion)
    });

    
}
      
  
      render() {
        let {currentQuestion} = this.state
        console.log("The current question",currentQuestion?.options)
        let arr = currentQuestion?.options
        console.log("The array is:", arr)
        return (
         
          <Fragment>
             
            <Helmet><title>Quiz</title></Helmet>
            <div className="questions">
            <div className="lifeline-container">
                <p>
                    <span className="lifeline-icon"><Icon path={mdiSetCenter} size={1} /></span><span className="lifeline">2</span>
                </p>
            </div>
            <div>
                <span>1/30</span>
                <span> 2:30 <Icon path={mdiTimerOutline} size={1} /></span>
            </div>
            <h5>{currentQuestion["question"]}</h5>
            <div className="options-container">
                <p className="options">{arr[0]}</p>
                <p className="options">1998</p>
            </div>
            <div className="options-container">
                <p className="options">1999</p>
                <p className="options">2000</p>
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