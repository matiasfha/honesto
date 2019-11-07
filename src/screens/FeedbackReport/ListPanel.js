// @flow
import React from "react";
import styled from "@emotion/styled/macro";
import Panel from "components/Panel";
import DefaultAvatar from "components/Avatar";
const LeftPanel = styled(Panel)`
  box-shadow: none;
  border-right: 1px solid #d9dcde;
  width: 380px;
  min-width: 380px;
`;

type FeedbackT = {
  user: {
    id: string,
    picture: { thumbail: string },
    name: string
  },
  answers: Array<{
    answer: {
      id: number,
      title: string,
      content: string
    },
    questionId: number,
    type: "radio" | "scale" | "text"
  }>
};

type ListPanelPropsT = {
  feedback: Array<FeedbackT>,
  onSelect: FeedbackT => void,
  type: "my" | "team"
};

// @TODO This is duplicated code used by FeedbackList
const Avatar = styled(DefaultAvatar)`
  margin-right: 30px;
`;
const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px 0px;
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

const Data = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-left: 10px;
`;

const Name = styled.span`
  font-size: 22px;
  line-height: 26px;
  color: #59636e;
  font-weight: bold;
`;
const PanelTitle = styled.h3`
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #59636e;
  margin-left: 10px;
`;

const ListPanel = ({ feedback, onSelect, type }: ListPanelPropsT) => {
  const [selected, setSelected] = React.useState(null);

  const onSelected = item => {
    setSelected(item);
    onSelect(item);
  };
  const Title = () => (
    <PanelTitle>Feedback {type === "my" ? "Received" : "Shared"}</PanelTitle>
  );
  return (
    <LeftPanel>
      <Row>
        <Title />
      </Row>
      {/* $FlowIssue */}
      {feedback?.map(item => (
        <Row
          key={item.user.id}
          onClick={() => {
            onSelected(item);
          }}
          selected={item.user.id === selected?.user.id}
        >
          <Data>
            <Avatar src={item.user.picture.thumbnail} alt="avatar" />
            <Name>{item.user.name}</Name>
          </Data>
        </Row>
      ))}
    </LeftPanel>
  );
};

export default ListPanel;
