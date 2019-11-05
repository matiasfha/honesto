import React from "react";
import styled from "@emotion/styled/macro";
import DefaultPanel from "components/Panel";
import Dropdown from "components/Dropdown";
import PageLayout from "components/PageLayout";
import UsersItem from "components/UsersList";

import { getUsers } from "api/users";

const Panel = styled(DefaultPanel)`
  width: 100%;
`;

const ShareFeedback = () => {
  const users = getUsers();
  return (
    <PageLayout
      title="Share Feedback"
      header={<Dropdown placeholder="November 2019" title="Feedbkack Period" />}
    >
      <Panel>
        {users.map(user => {
          return <UsersItem key={user.id} user={user} />;
        })}
      </Panel>
    </PageLayout>
  );
};

export default ShareFeedback;
