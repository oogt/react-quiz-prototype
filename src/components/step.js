import React, { Component } from 'react';

import Button from './button';
import Question from './question';

class Step extends Component {
  constructor(props) {
    super(props);

    const questionValidity = props.config.questions.map(q => false);

    this.state = {
      isStepValid: false,
      questionValidity
    }

    this._setStepValid = this._setStepValid.bind(this);
    this._setQuestionValid = this._setQuestionValid.bind(this);
  }
  _setQuestionValid(valid, index) {
    let questionValidity = [...this.state.questionValidity];
    questionValidity[index] = valid;
    this.setState({
      questionValidity
    });

    const isStepValid = questionValidity.every(v => !!v);

    // Check if all questions in this step are valid
    this._setStepValid(isStepValid);
  }

  _setStepValid(valid) {
    this.setState({
      isStepValid: valid
    })
  }
  render() {
    const { config, stepNumber, activeStep } = this.props;

    if (activeStep !== stepNumber) {
      return null;
    }

    return (
      <div>
        <h1>Current step: {stepNumber}</h1>

        {config.questions.map((questionConfig, index) => (
          <Question
            key={`step-${index}`}
            config={questionConfig}
            setQuestionValid={valid => this._setQuestionValid(valid, index)} />
        ))}

        <Button
          disabled={!this.state.isStepValid}
          >Bevestig keuze</Button>
      </div>
    )
  }
}

export default Step;
