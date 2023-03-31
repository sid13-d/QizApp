import React, {Component, Fragment} from "react";
import { Helmet } from "react-helmet";

class QuizSummary extends Component{

    constructor(props) {
        super(props);
    
        const queryParams = new URLSearchParams(window.location.search);
        const dataReceived = queryParams.get("data");
    
        this.state = {
          data: dataReceived,
        };
      }
    
      render() {
        const {state} = this;
        let stats, remark, score;
        if(score <= 30)
            remark = "You need more paractice!"
        else if(score > 30 && score <= 40)
            remark = "Better luck next time"
        else if(score <= 70 && score > 50)
            remark = "You can do better !"
        else if(score >= 71 && score <= 81)
            remark = "You did Great!"
        else 
            remark ="Noice!"
        return (
         <Fragment>
            <Helmet><title>QuizSummary</title></Helmet>
         </Fragment>
        );
      }
}

export default QuizSummary;