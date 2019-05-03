import React, { Component } from 'react';

import Choice from './choice';
import './question.css';

class Question extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedChoice: null
    }

    this._selectChoice = this._selectChoice.bind(this);
  }
  _selectChoice(value, setQuestionValid) {
    const selectedChoice = this.state.selectedChoice === value ? null : value;
    this.setState({
      selectedChoice
    })
    setQuestionValid(selectedChoice !== null);
  }
  render() {
    const { question, choices } = this.props.config;
    const { setQuestionValid } = this.props;

    return (
      <div className="question">
        <h2>{question}</h2>

        {choices.map((choiceConfig, index) => (
          <Choice
            key={`choice-${index}`}
            config={choiceConfig}
            selectedChoice={this.state.selectedChoice}
            onSelect={value => this._selectChoice(value, setQuestionValid)} />
        ))}
      </div>
    )
  }
}

export default Question;
