import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Icon from "@mdi/react";
import { mdiSetCenter } from '@mdi/js';

// import answer from '../../assets/img/background.jpg'

const QuizInstruction = () => {
   
    return(
       <Fragment>
        <Helmet><title>Quiz Instructions</title></Helmet>
        <div className="instruction-container">
        <h1>How to give the quiz</h1>
        <p>Ensure you read this guid from start to end</p>
            <ol className="browser-default" id="main-list" style={{listStyleType: "disc"}}>
                 <li>The game has duration of 15min and ends as soon as your time elapses</li>
                 <li>Each game consist for 30 questions</li>

                 <li>
                    Every question contains 4 options
                    {/* <img style={{mystyle}} src={answer} alt="Quiz App options example"/> */}
                    </li>
                
                 <li>Select the option which best answers the question by clicking it</li>
                 <li>
                    Each game has a life line
                    <ul id="sublist">
                        <li>
                            50 - 50 chances
                        </li>
                    </ul>
                 </li>

                 <li>
                    selecting 50 - 50 lifeline by clicking the Icon <Icon path={mdiSetCenter} size={1} /> will remove 2 wrong answers
                 </li>
            </ol>
        </div>
        <div>
            <span><Link to="/">No take me back  <br></br></Link></span>
            <span><Link to="/play/quiz">Ok let's do this</Link></span>
        </div>
       </Fragment>
    );
};

export default QuizInstruction