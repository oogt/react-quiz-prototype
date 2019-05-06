import React from "react";
import { CSSTransition } from "react-transition-group";

import Button from "./button";

const Result = ({ numberOfSteps, activeStep, data, goBack }) => (
  <div>
    <CSSTransition
      in={activeStep === numberOfSteps}
      timeout={{
        enter: 500,
        exit: 500
      }}
      classNames="fade"
      unmountOnExit
    >
      <div>
        <h1>This data would be used to calculate your result</h1>

        <pre>{JSON.stringify(data, null, 2)}</pre>

        <Button subtle onClick={goBack}>
          Terug
        </Button>
      </div>
    </CSSTransition>
  </div>
);

export default Result;
