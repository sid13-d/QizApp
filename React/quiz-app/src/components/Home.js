import React, { Fragment } from "react";
import {Helmet} from 'react-helmet';
import Icon from '@mdi/react';
import {mdiCubeOutline} from '@mdi/js';
import { Link } from "react-router-dom";



const Home = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Quiz App - Home</title>
            </Helmet>
            <div id="home">
                <section>
                    <div>
                    <Icon path={mdiCubeOutline} size={3} />
                        
                    </div>
                    <h1>Quiz App</h1>
                    <div className="play-button-container">
                        <ul>
                            <li>
                                <Link to="/play/instructions">play</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="auth-container">
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>
                </section>
            </div>
        </Fragment>
      
    );
}

export default Home;