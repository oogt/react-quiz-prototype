import React from "react";

import "./App.css";
import Quiz from "./components/quiz";

const quizConfig = {
  steps: [
    {
      questions: [
        {
          question: "What kind of house do you own?",
          choices: [
            {
              label: "Free"
            },
            {
              label: "Between"
            },
            {
              label: "Corner"
            }
          ]
        },
        {
          question: "What kind of house do you own?",
          choices: [
            {
              label: "Free"
            },
            {
              label: "Between"
            },
            {
              label: "Corner"
            }
          ]
        }
      ]
    },
    {
      questions: [
        {
          question: "What kind of roof does your house have?",
          choices: [
            {
              label: "Crooked"
            },
            {
              label: "Flat"
            },
            {
              label: "Both"
            }
          ]
        }
      ]
    },
    {
      questions: [
        {
          question: "What kind of roof does your house have?",
          choices: [
            {
              label: "Crooked"
            },
            {
              label: "Flat"
            },
            {
              label: "Both"
            }
          ]
        }
      ]
    }
  ]
};

function App() {
  return (
    <div className="App">
      <Quiz quizConfig={quizConfig} />
    </div>
  );
}

export default App;
