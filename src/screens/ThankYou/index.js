import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import styled from "@emotion/styled/macro";
import { StateContext } from "contexts/State";
import { WizardContext } from "contexts/Wizard";
import { PageHeader, PageTitle } from "components/PageLayout";
import FeedbackList from "components/FeedbackList";
import DefaultPanel from "components/Panel";

const Panel = styled(DefaultPanel)`
  width: 100%;
  margin-bottom: 270px;
`;

const SubTitle = styled.p`
  font-size: 16px;
  line-height: 19px;
  color: #59636e;
`;

/*
 * @TODO
 * Manage authorization to this page.
 * This page should not be loaded if the wizard was not complete
 */
const ThankYou = () => {
  const {
    sharedFeedback,
    fetchSharedFeedback,
    updateSharedFeedback
  } = React.useContext(StateContext);
  const match = useRouteMatch();
  const history = useHistory();
  const { userId } = match.params;

  const { answers } = React.useContext(WizardContext);
  React.useEffect(() => {
    if (answers.length === 0) {
      history.push(`/questions/${userId}`);
    }
  }, [answers.length, history, userId]);
  const isSubmitted = () =>
    sharedFeedback.find(item => item.user.id === userId).submitted;
  React.useEffect(() => {
    const getData = async () => {
      await updateSharedFeedback(userId, answers);
    };
    if (!isSubmitted()) {
      getData();
    }
  }, [updateSharedFeedback, userId, answers, sharedFeedback, isSubmitted]);
  return (
    <>
      <PageHeader>
        <PageTitle>
          Thank you for sharing your feedback
          <SubTitle>Continue to give feedback to other team members.</SubTitle>
        </PageTitle>
      </PageHeader>
      <Panel>
        {sharedFeedback?.length > 0 && (
          <FeedbackList
            feedback={sharedFeedback.filter(item => !item.submitted)}
          />
        )}
      </Panel>
    </>
  );
};
export default ThankYou;
