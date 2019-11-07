import React from "react";
import styled from "@emotion/styled/macro";
import Panel from "components/Panel";
import { getQuestions } from "api/questions";

const Row = styled.div`
  width: 100%;
  min-height: 70px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(172, 177, 182, 0.33);
  cursor: pointer;
  &:hover {
    background: rgba(213, 176, 242, 0.1);
  }
  ${props => {
    if (props.selected) {
      return `
        background: #F2F3F4;
      `;
    }
  }}
`;

const QuestionText = styled.p`
  font-family: Untitled Sans;
  font-size: 16px;
  line-height: 19px;
  color: #031323;
  width: 370px;
  margin-left: 10px;
  margin-right: 10px;
  flex: 1;
`;

const ResultTitle = styled.h2`
  font-size: 22px;
  line-height: 26px;
  color: #031323;
  margin-left: 10px;
`;

const Bar = styled.div`
  width: 370px;
  height: 28px;
  background: #f2f3f4;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin-right: 18px;
  flex: 1;
  flex-wrap: wrap;
`;
const Square = styled.div`
  height: 100%;
  background: ${props => props.background};
  width: ${props => props.width}%;
`;
const ResultRadio = ({ question, answer }) => {
  const squareWidth = 100 / question.options.length - 1;

  const answerIndex = question.options.findIndex(
    item => item.id === answer.answer.option
  );
  let background = "#2BBF6A";
  let totalAnswered = answerIndex + 1;
  let totalOptions = question.options.length;
  if (answerIndex === 0) {
    background = "#DE521D";
  }
  return (
    <Bar>
      {Array.from(Array(totalAnswered).keys()).map(item => (
        <Square background={background} width={squareWidth} key={item} />
      ))}
      {Array.from(Array(totalOptions - totalAnswered).keys()).map(item => (
        <Square background="#F2F3F4" width={squareWidth} key={item} />
      ))}
    </Bar>
  );
};

const ResultScale = ({ question, answer }) => {
  const squareWidth = 100 / 10 - 1;
  const answerValue = answer.answer.scale;

  let background = "#2BBF6A";
  let totalAnswered = answerValue;
  let totalOptions = 10;
  switch (true) {
    case answerValue <= 2:
      background = "#DE521D";
      break;
    case answerValue <= 5:
      background = "#FF8C21";
      break;
    case answerValue <= 7:
      background = "#91D958";
      break;
    default:
      // greater than 7
      background = "#2BBF6A";
      break;
  }
  return (
    <Bar>
      {Array.from(Array(totalAnswered).keys()).map(item => (
        <Square background={background} width={squareWidth} key={item} />
      ))}
      {Array.from(Array(totalOptions - totalAnswered).keys()).map(item => (
        <Square background="#F2F3F4" width={squareWidth} key={item} />
      ))}
    </Bar>
  );
};
const ResultText = ({ answer }) => {
  return <QuestionText>{answer.answer}</QuestionText>;
};
const getResultComponent = type => {
  switch (type) {
    case "radio":
      return ResultRadio;
    case "scale":
      return ResultScale;
    default:
      return ResultText;
  }
};

const ResultsPanel = ({ feedback }: FeedbackT) => {
  if (feedback == null) {
    return null;
  }
  const questions = getQuestions();
  const { answers } = feedback;
  return (
    <Panel style={{ width: "100%" }}>
      <Row>
        <ResultTitle>{feedback.user.name}`s Feedback</ResultTitle>
      </Row>
      {answers.map(answer => {
        const question = questions.find(q => q.id === answer.questionId);
        const Component = getResultComponent(answer.type);
        return (
          <Row key={answer.questionId}>
            <QuestionText>{question.title}</QuestionText>
            <div>
              <Component question={question} answer={answer} />
            </div>
          </Row>
        );
      })}
    </Panel>
  );
};

export default ResultsPanel;
