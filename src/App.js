import React from 'react';

import './App.css';
import Quiz from './components/quiz';

const quizConfig = {
  steps: [{
    questions: [{
      question: "What kind of house do you own?",
      choices: [{
        label: "Free"
      }]
    }]
  }, {
    questions: [{
      question: "What kind of house do you own?",
      choices: [{
        label: "Free"
      }, {
        label: "Between"
      }, {
        label: "Corner"
      }]
    }]
  }]
}

function App() {
  return (
    <div className="App">
      <Quiz quizConfig={quizConfig} />
    </div>
  );
}

export default App;
