// @flow
import * as React from "react";
import { useRouteMatch, Switch, Route } from "react-router-dom";
import styled from "@emotion/styled/macro";
import ShareFeedback from "screens/ShareFeedback";
import NavHeader from "components/NavHeader";

const FeedbackReport = React.lazy(() => import("screens/FeedbackReport"));

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  const { path } = useRouteMatch();
  return (
    <>
      <NavHeader />
      <React.Suspense fallback={<Container />}>
        <Container>
          <Switch>
            <Route exact path={path} render={() => <ShareFeedback />} />
            <Route
              exact
              path="/home/my-feedback"
              render={() => <FeedbackReport type="my" />}
            />
            <Route
              exact
              path="/home/team-feedback/"
              render={() => <FeedbackReport type="team" />}
            />
          </Switch>
        </Container>
      </React.Suspense>
    </>
  );
};

export default Home;
