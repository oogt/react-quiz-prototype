import React from 'react';

import Choice from './choice';
import './question.css';

const Question = ({ setQuestionValid, onSelect, data, config }) => {
  const { question, choices, type } = config;

  return (
    <div className="question">
      <h1>{question}</h1>

      <div className="choices">
        {choices.map((choiceConfig, index) => (
          <Choice
            key={`choice-${index}`}
            config={choiceConfig}
            selectedChoice={data}
            type={type || ''}
            onSelect={value => {
              let newValue = value === data ? null : value;
              onSelect(newValue);
              setQuestionValid(newValue !== null);
            }} />
        ))}
      </div>
    </div>
  )
}

export default Question;
