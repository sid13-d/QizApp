import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
// import Icon from "@mdi/react";
// import { mdiSetCenter } from '@mdi/js';

import question from '../../assets/img/questions.png';
import answer from '../../assets/img/answer.png';

const QuizInstruction = () => {

   
    return(
       <Fragment>
        <Helmet><title>Quiz Instructions</title></Helmet>
        <div className="instruction contain">
        <h1>How to give the quiz</h1>
        <p>Ensure you read this guid from start to end</p>
            <ol className="browser-default" id="main-list" style={{listStyleType: "disc"}}>
                 <li>The game has duration of 15min and ends as soon as your time elapses</li>
                 <li>Each game consist for 30 questions</li>

                 <li>
                    Every question contains 4 options
                    <img className="imgs" style={{backgroundSize: 'cover',}} src={question} alt="Quiz App options example"/>
                    </li>
                
                 <li>
                    Select the option which best answers the question by clicking it
                    <img className="imgs" style={{backgroundSize: 'cover',}} src={answer} alt="Quiz App options example"/>
                    </li>
                 <li>
                    Try to complete it in time 
                    <ul id="sublist">
                        <li>
                            For each question you will be given 30 seconds to solve
                        </li>
                    </ul>
                 </li>

                 <li>
                    If you are unable to solve it you will be directed to next question and you'll get 0 points for that <br></br> particular question.
                 </li>
            </ol>
            <div className="directions">
            <span><Link to="/">No take me back  <br></br></Link></span>
            <span><Link to="/play/quiz">Ok let's do this</Link></span>
        </div>
        </div>
        
       </Fragment>
    );
};

export default QuizInstruction