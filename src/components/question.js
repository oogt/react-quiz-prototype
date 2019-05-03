import React from 'react';

import Choice from './choice';
import './question.css';

const Question = ({ setQuestionValid, onSelect, data, config}) => {
  const { question, choices } = config;

  return (
    <div className="question">
      <h2>{question}</h2>

      {choices.map((choiceConfig, index) => (
        <Choice
          key={`choice-${index}`}
          config={choiceConfig}
          selectedChoice={data}
          onSelect={value => {
            let newValue = value === data ? null : value;
            onSelect(newValue);
            setQuestionValid(newValue !== null);
          }} />
      ))}
    </div>
  )
}

export default Question;
