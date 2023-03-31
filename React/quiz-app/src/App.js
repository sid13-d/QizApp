import React from 'react';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from './components/Home';
import QuizInstruction from './components/quiz/QuizInstruction';
import Play from './components/quiz/play';
import QuizSummary from './components/quiz/QuizSummary';

function App() {
  return (
    <>
   
    <Router>
      <Routes>
      <Route path='/' exact Component={Home} />
      <Route path='/play/Instructions' exact Component={QuizInstruction}/>
      <Route path='/play/quiz' exact Component={Play}/>
      <Route path='/play/quizSummary' exact Component={QuizSummary} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
