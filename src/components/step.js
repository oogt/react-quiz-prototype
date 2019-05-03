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
  _setDataForQuestion(setData, index, data, newValue) {
    const newData = [...data];
    newData[index] = newValue;
    setData(newData);
  }

  render() {
    const {
      data,
      setData,
      config,
      stepNumber,
      activeStep,
      onConfirm,
      goBack
    } = this.props;

    if (activeStep !== stepNumber) {
      return null;
    }

    return (
      <div>
        {config.questions.map((questionConfig, index) => (
          <Question
            key={`step-${index}`}
            config={questionConfig}
            onSelect={newValue => this._setDataForQuestion(setData, index, data, newValue)}
            data={data[index]}
            setQuestionValid={valid => this._setQuestionValid(valid, index)} />
        ))}

        {stepNumber > 1 && (
          <Button subtle onClick={goBack}>Terug</Button>
        )}
        <Button
          disabled={!this.state.isStepValid}
          onClick={() => onConfirm()}
          >Bevestig keuze</Button>
      </div>
    )
  }
}

export default Step;
