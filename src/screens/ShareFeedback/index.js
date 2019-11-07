import React from "react";
import styled from "@emotion/styled/macro";
import DefaultPanel from "components/Panel";
import Dropdown from "components/Dropdown";
import PageLayout from "components/PageLayout";
import FeedbackList from "components/FeedbackList";
import { StateContext } from "contexts/State";

const Panel = styled(DefaultPanel)`
  width: 100%;
  margin-bottom: 270px;
`;

const ShareFeedback = () => {
  const { sharedFeedback, fetchSharedFeedback } = React.useContext(
    StateContext
  );

  React.useEffect(() => {
    const getData = async () => {
      await fetchSharedFeedback();
    };
    if (sharedFeedback == null) {
      getData();
    }
  }, [fetchSharedFeedback, sharedFeedback]);

  return (
    <PageLayout
      title="Share Feedback"
      header={<Dropdown placeholder="November 2019" title="Feedbkack Period" />}
    >
      <Panel>
        {sharedFeedback?.length > 0 && (
          <FeedbackList feedback={sharedFeedback} />
        )}
      </Panel>
    </PageLayout>
  );
};

export default ShareFeedback;
