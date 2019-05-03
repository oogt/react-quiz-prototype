import React, { Component } from "react";

import Step from "./step";
import ProgressBar from "./progress-bar";

class Quiz extends Component {
  constructor(props) {
    super(props);

    this.numberOfSteps = props.quizConfig.steps.length;
    const initialData = props.quizConfig.steps.map(step =>
      step.questions.map(() => null)
    );

    this.state = {
      currentStep: 1,
      data: initialData
    };

    this._nextStep = this._nextStep.bind(this);
    this._prevStep = this._prevStep.bind(this);
    this._setDataForStep = this._setDataForStep.bind(this);
  }

  _nextStep() {
    this.setState({
      currentStep: this.state.currentStep + 1
    });
  }

  _prevStep() {
    this.setState({
      currentStep: this.state.currentStep - 1
    });
  }

  _setDataForStep(index, stepData) {
    const data = [...this.state.data];
    data[index] = stepData;

    this.setState({
      data
    });
  }

  render() {
    const { quizConfig } = this.props;

    return (
      <div>
        <ProgressBar
          activeStep={this.state.currentStep}
          numberOfSteps={this.numberOfSteps}
        />
        {quizConfig.steps.map((stepConfig, index) => (
          <Step
            config={stepConfig}
            stepNumber={index + 1}
            activeStep={this.state.currentStep}
            onConfirm={stepData => {
              this._nextStep();
            }}
            data={this.state.data[index]}
            setData={data => this._setDataForStep(index, data)}
            goBack={this._prevStep}
            key={`step-${index + 1}`}
          />
        ))}
      </div>
    );
  }
}

export default Quiz;
