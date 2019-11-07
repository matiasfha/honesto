import React from "react";

export const WizardContext = React.createContext(null);

const WizardProvider = ({ children }) => {
  const [answers, setAnswers] = React.useState([]);

  const addAnswer = ({ questionId, answer, type }) => {
    setAnswers(state => {
      const index = state.findIndex(item => item.questionId === questionId);
      const item = {
        questionId: questionId,
        answer,
        type
      };
      if (index === 0) {
        return [...state, item];
      } else {
        return [...state.slice(0, index), item, ...state.slice(index + 1)];
      }
    });
  };

  return (
    <WizardContext.Provider
      value={{
        addAnswer,
        answers
      }}
    >
      {children}
    </WizardContext.Provider>
  );
};

export default WizardProvider;
