import * as React from "react";
import styled from "@emotion/styled/macro";
import DefaultPanel from "components/Panel";
import RadioStep from "components/WizardSteps/Radio";
import ScaleStep from "components/WizardSteps/Scale";
import TextStep from "components/WizardSteps/TextStep";
import DefaultProgressBar from "components/ProgressBar";
import Button from "components/Button";
import Footer from "./Footer";

const Panel = styled(DefaultPanel)`
  width: 710px;
  min-width: 710px;
  min-height: 444px;
  padding: 15px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
`;

const reducer = (state, action) => {
  switch (action.type) {
    case "NAVIGATE_PREV":
      return {
        ...state,
        count: state.count - 1,
        currentStep: state.steps[state.count - 1]
      };
    case "NAVIGATE_NEXT":
      return {
        ...state,
        count: state.count + 1,
        currentStep: state.steps[state.count + 1]
      };
    default:
      return state;
  }
};

const setStepComponent = type => {
  switch (type) {
    case "radio":
      return RadioStep;
    case "scale":
      return ScaleStep;
    default:
      return TextStep;
  }
};

const ProgressBar = styled(DefaultProgressBar)`
  margin-top: 2rem;
`;

type WizardPropsT = {
  steps: [],
  header: (currentQuestion: Object) => React.Node,
  onEnd: () => void
};
const Wizard = ({ steps, header, onEnd }: WizardPropsT) => {
  const [state, dispatch] = React.useReducer(reducer, {
    currentStep: steps[0],
    count: 0,
    total: steps.length,
    steps
  });
  const { type } = state.currentStep;
  let Component = setStepComponent(type);

  const prevStep = () => {
    dispatch({ type: "NAVIGATE_PREV" });
  };

  const nextStep = () => {
    if (state.count >= state.total - 1) {
      onEnd();
    } else {
      dispatch({ type: "NAVIGATE_NEXT" });
    }
  };

  const disablePrev = () => {
    return state.count === 0;
  };

  const getProgress = () => {
    return ((state.count + 1) * 100) / state.total;
  };
  return (
    <>
      {header(state.currentStep)}
      <Panel>
        <Component {...state.currentStep} />
        <ButtonsContainer>
          <Button onClick={prevStep} type="clear" disabled={disablePrev()}>
            Prev
          </Button>
          <Button onClick={nextStep} type="clear">
            Next
          </Button>
        </ButtonsContainer>
        <ProgressBar progress={`${getProgress()}%`} />
        <Footer count={state.count + 1} total={state.total} />
      </Panel>
    </>
  );
};

export default Wizard;
