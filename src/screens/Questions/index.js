// @flow
import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import styled from "@emotion/styled/macro";
import { PageContainer, PageTitle, PageHeader } from "components/PageLayout";
import NavHeader from "components/NavHeader";
import Wizard from "components/Wizard";
import WizardProvider from "contexts/Wizard";
import Avatar from "components/Avatar";
import { getQuestions } from "api/questions";
import { getUser } from "api/users";

const ThankYou = React.lazy(() => import("screens/ThankYou"));

const SubTitle = styled.p`
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #acb1b6;
`;

const Container = styled(PageContainer)`
  flex: 1;
  align-self: center;
  width: 740px !important;
  min-width: 740px;
  min-height: 370px;
  margin-top: 40px;
`;

const BackLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  color: ${props => props.theme.colors.black};
  letter-spacing: 0.15em;
  line-height: 14px;
  font-size: 12px;
  align-self: flex-start;
`;

const Questions = () => {
  const questions = getQuestions();
  return (
    <WizardProvider>
      <NavHeader />
      <Container>
        <Switch>
          <Route
            exact
            path="/questions/:userId/thank-you"
            render={() => <ThankYou />}
          />
          <Route
            exact
            path="/questions/:userId"
            render={({ match, history }) => {
              const { userId } = match.params;
              const user = getUser(userId);
              const onEnd = () => {
                history.push(`/questions/${userId}/thank-you`);
              };
              return (
                <>
                  <BackLink to="/home">&lt; Back</BackLink>
                  <Wizard
                    onEnd={onEnd}
                    steps={questions}
                    header={currentQuestion => {
                      return (
                        <PageHeader>
                          <div>
                            <PageTitle>{currentQuestion.title}</PageTitle>
                            <SubTitle>
                              share your feedback for {user.name}
                            </SubTitle>
                          </div>
                          <Avatar src={user.picture.thumbnail} />
                        </PageHeader>
                      );
                    }}
                  />
                </>
              );
            }}
          />
        </Switch>
      </Container>
    </WizardProvider>
  );
};

export default Questions;
