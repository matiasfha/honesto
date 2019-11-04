import React from "react";
import styled from "@emotion/styled/macro";
import Avatar from "components/Avatar";
import DefaultPanel from "components/Panel";
import Button from "components/Button";
import Dropdown from "components/Dropdown";

import { getUsers } from "api";

const FeedbackRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 16px;
  border-bottom: 1px solid rgba(172, 177, 182, 0.33);
  cursor: pointer;
  &:hover {
    background: rgba(213, 176, 242, 0.1);
  }
`;

const UserData = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const UserName = styled.span`
  font-size: 22px;
  line-height: 26px;
  color: #59636e;
`;

const PageTitle = styled.h2`
  font-size: 31px;
  line-height: 36px;
  color: ${props => props.theme.colors.black};
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 47%;
`;

const PageHeader = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  align-self: stretch;
  margin-bottom: 30px;
`;

const Panel = styled(DefaultPanel)`
  width: 100%;
`;

const ShareFeedback = () => {
  const users = getUsers();
  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Share Feedback</PageTitle>
        <Dropdown placeholder="November 2019" title="Feedbkack Period" />
      </PageHeader>
      <Panel>
        {users.map(user => {
          return (
            <FeedbackRow key={user.id}>
              <UserData>
                <Avatar src={user.picture.thumbnail} alt="avatar" />
                <UserName>{user.name}</UserName>
              </UserData>
              <Button type="clear" to="/questions">Fill Out</Button>
            </FeedbackRow>
          );
        })}
      </Panel>
    </PageContainer>
  );
};

export default ShareFeedback;
