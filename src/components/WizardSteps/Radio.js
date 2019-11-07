import * as React from "react";
import styled from "@emotion/styled/macro";
import { WizardContext } from "contexts/Wizard";

const RadioOption = styled.div`
  background: ${props => props.theme.colors.alabastro};
  border-radius: 3px;
  padding: 15px 20px;
  width: 95%;
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
  const context = React.useContext(WizardContext);
  const onClick = option => {
    setSelected(option.id);
    context.addAnswer({
      questionId: id,
      answer: option,
      type
    });
  };
  return (
    <>
      {options.map(option => (
        <RadioOption key={option.id} selected={selected === option.id}>
          <input type="radio" name={option.title} />
          <label
            onClick={() => {
              onClick(option);
            }}
          >
            <strong>{option.title}</strong>
            <p>{option.content}</p>
          </label>
        </RadioOption>
      ))}
    </>
  );
};

export default RadioStep;
