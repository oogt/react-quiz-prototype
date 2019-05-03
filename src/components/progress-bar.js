import React from 'react';

const ProgressBar = ({ activeStep, numberOfSteps }) => (
  <div>
    <h1>{activeStep}/{numberOfSteps}</h1>
  </div>
)

export default ProgressBar;
