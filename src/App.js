import React from "react";

import "./App.css";
import Quiz from "./components/quiz";
import quizConfig from './quiz-config';

function App() {
  return (
    <div className="App">
      <Quiz quizConfig={quizConfig} />
    </div>
  );
}

export default App;
