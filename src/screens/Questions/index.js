// @flow
import React from "react";
import styled from "@emotion/styled/macro";
import StepZilla from "react-stepzilla";
import Rating from "react-rating";
import NavHeader from "components/NavHeader";
import PageLayout, {
  PageTitle,
  PageContainer,
  PageHeader
} from "components/PageLayout";
import DefaultPanel from "components/Panel";
import UsersItem from "components/UsersList";
import { getQuestions } from "api/questions";

import { getUsers } from "api/users";

const Panel = styled(DefaultPanel)`
  width: 100%;
  min-width: 740px;
  min-height: 444px;
  padding: 20px;
`;

const RadioOption = styled.div`
  background: ${props => props.theme.colors.alabastro};
  border-radius: 3px;
  padding: 15px 20px;
  width: 100%;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 16px;
  line-height: 19px;
  ${props => {
    if (props.selected) {
      return `
        background: #59636E;
        color: white;
      `;
    }
    return `color: ${props.theme.colors.blackPearl}`;
  }}
  &:hover {
    background: #59636e;
    color: white;
  }
  [type="radio"]:checked,
  [type="radio"]:not(:checked) {
    position: absolute;
    left: -9999px;
  }
  label {
    cursor: pointer;
  }
`;

type OptionPropsT = {
  title: string,
  content: string,
  id: string
};

type RadioQuestionT = {
  id: string,
  title: string,
  type: "radio",
  options: Array<OptionPropsT>
};

const RadioStep = ({ id, title, type, options }: RadioQuestionT) => {
  const [selected, setSelected] = React.useState(null);
  return (
    <>
      <PageHeader>
        <div>
          <PageTitle>{title}</PageTitle>
          <p>share your feedback for christopher Johnson</p>
        </div>
        <div>
          <img src="https://randomuser.me/api/portraits/thumb/men/63.jpg" />
        </div>
      </PageHeader>
      <Panel>
        {options.map(option => (
          <RadioOption key={option.id} selected={selected === option.id}>
            <input type="radio" name={option.title} />
            <label
              onClick={() => {
                setSelected(option.id);
              }}
            >
              <strong>{option.title}</strong>
              <p>{option.content}</p>
            </label>
          </RadioOption>
        ))}
      </Panel>
    </>
  );
};

const EmptySquare = styled.div`
  background: #f2f3f4;
  border: 2px solid #fff;
  box-sizing: border-box;
  width: 74px;
  height: 74px;
`;

const FullSquare = styled(EmptySquare)`
  background: ${props => props.theme.colors.purple};
`;

const ScaleStep = question => {
  const [rating, setRating] = React.useState(0);
  return (
    <>
      <PageHeader>
        <div>
          <PageTitle>{question.title}</PageTitle>
          <p>share your feedback for christopher Johnson</p>
        </div>
        <div>
          <img src="https://randomuser.me/api/portraits/thumb/men/63.jpg" />
        </div>
      </PageHeader>
      <Panel>
        <p>{question.description}</p>
        <div>
          <Rating
            start={1}
            stop={10}
            placeholderRating={1}
            emptySymbol={<EmptySquare />}
            fullSymbol={<FullSquare />}
            placeholderSymbol={<FullSquare />}
            onClick={value => setRating(value)}
          />
          <span>{rating}/10</span>
        </div>
      </Panel>
    </>
  );
};

const TextArea = styled.textarea`
  background: #ffffff;
  border: 1px solid #d9dcde;
  box-sizing: border-box;
  border-radius: 3px;
  width: 100%;
  height: 231px;
  font-size: 1rem;
  line-height: 19px;
`;

const TextStep = question => {
  return (
    <>
      <PageHeader>
        <div>
          <PageTitle>{question.title}</PageTitle>
          <p>share your feedback for christopher Johnson</p>
        </div>
        <div>
          <img src="https://randomuser.me/api/portraits/thumb/men/63.jpg" />
        </div>
      </PageHeader>
      <Panel>
        <TextArea placeholder="Say something..." />
      </Panel>
    </>
  );
};

const ThankYou = () => {
  const users = getUsers();
  return (
    <PageLayout title="Thank you for sharing your feedback">
      <Panel>
        {users.map(user => {
          return <UsersItem key={user.id} user={user} />;
        })}
      </Panel>
    </PageLayout>
  );
};
const generateSteps = () => {
  const questions = getQuestions().map(question => {
    let component;
    switch (question.type) {
      case "radio":
        component = <RadioStep {...question} />;
        break;
      case "scale":
        component = <ScaleStep {...question} />;
        break;
      default:
        component = <TextStep {...question} />;
        break;
    }
    return {
      name: question.title,
      component
    };
  });
  return [...questions, { name: "Thank You", component: <ThankYou />, id: 4 }];
};

const Container = styled(PageContainer)`
  flex: 1;
  align-self: center;
  width: 740px !important;
  min-width: 740px;
  min-height: 370px;
  .multi-step {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .footer-buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 3rem;
    width: 100%;
  }
  .btn {
    outline: none;
    border-radius: 4px;
    width: 150px;
    min-height: 48px;
    color: ${props => props.theme.colors.black};
    cursor: pointer;
    &:hover,
    &:active {
      background: #acb1b6;
      color: #fff;
    }
  }
`;

const Questions = () => {
  const [answers, setAnswers] = React.useState([]);
  return (
    <>
      <NavHeader />
      <Container>
        <StepZilla steps={generateSteps()} showSteps={false} />
      </Container>
    </>
  );
};

export default Questions;
