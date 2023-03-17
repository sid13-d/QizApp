import React, {Fragment} from "react";
import {Helmet} from 'react-helmet';
import Icon from '@mdi/react';
import {mdiTimerOutline, mdiChevronDoubleLeft, mdiChevronDoubleRight, mdiExitToApp, mdiSetCenter } from '@mdi/js';

class Play extends React.Component{
  
    // constructor(props) {
    //     super(props);
        
    //   }
    
      render() {
        return (
          <Fragment>
            <Helmet><title>Quiz</title></Helmet>
            <div className="questions">
            <div className="lifeline-container">
                <p>
                    <span className="lifeline-icon"><Icon path={mdiSetCenter} size={1} /></span>2
                </p>
            </div>
            <div>
                <span>1/30</span>
                <span> 2:30 <Icon path={mdiTimerOutline} size={1} /></span>
            </div>
            <h5>Google was founded in what year</h5>
            <div className="options-container">
                <p className="options">1997</p>
                <p className="options">1998</p>
            </div>
            <div className="options-container">
                <p className="options">1997</p>
                <p className="options">1998</p>
            </div>

            <div className="button-container">
                <button><Icon path={mdiChevronDoubleLeft} size={0.8} /> Previous</button>
                <button>Next <Icon path={mdiChevronDoubleRight} size={0.8} /></button>
                <button>
<Icon path={mdiExitToApp} size={0.8} /> Quit</button>
            </div>
            </div>

          </Fragment>
        );
      }

}

export default Play;