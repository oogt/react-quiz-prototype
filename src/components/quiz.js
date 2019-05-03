import React, { Component, Fragment } from 'react';

import Step from './step';

class Quiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStep: 1
    }
  }

  render() {
    const { quizConfig } = this.props;

    return (
      <Fragment>
        {quizConfig.steps.map((stepConfig, index) => (
          <Step
            config={stepConfig}
            stepNumber={index}
            activeStep={this.state.currentStep}
            key={`step-${index}`}
            />
        ))}
      </Fragment>
    )
  }
}

export default Quiz;
