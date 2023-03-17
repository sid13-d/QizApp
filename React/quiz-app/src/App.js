import React from 'react';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from './components/Home';
import QuizInstruction from './components/quiz/QuizInstruction';
import Play from './components/quiz/play';

function App() {
  return (
    <>
   
    <Router>
      <Routes>
      <Route path='/' exact Component={Home} />
      <Route path='/play/Instructions' exact Component={QuizInstruction}/>
      <Route path='/play/quiz' exact Component={Play}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
