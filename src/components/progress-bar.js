import React, { Fragment } from "react";

import './progress-bar.css';

const renderSteps = (activeStep, numberOfSteps) => {
  let steps = [];

  for (let i = 1; i <= numberOfSteps; i++) {
    const isActive = activeStep === i;
    steps.push(
      <Fragment key={`progress-step-${i}`}>
        <div className={`progress-step ${isActive ? "active" : ""}`}>
          {isActive && i}
        </div>
        {i < numberOfSteps && (
          <div className="progress-line" />
        )}
      </Fragment>
    );
  }

  return steps;
};

const ProgressBar = ({ activeStep, numberOfSteps }) => (
  <div className="progress-bar">{renderSteps(activeStep, numberOfSteps)}</div>
);

export default ProgressBar;
