// @flow
import * as React from "react";
import { useRouteMatch, Switch, Route, Link } from "react-router-dom";
import styled from "@emotion/styled/macro";
import ShareFeedback from "screens/ShareFeedback";

const NoMatch = React.lazy(() => import("screens/NoMatch"));

const HeaderContainer = styled.nav`
  flex-shrink: 0;
  width: 100%;
  height: 75px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: ${props => props.theme.colors.alabastro};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  padding: 2rem 2rem 0;
`;

const AppTitle = styled.p`
  color: ${props => props.theme.colors.black};
  font-size: 24px;
  line-height: 28px;
`;

const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 45%;
`;

type ItemPropsT = {
  active?: number
};
const Item: React.ComponentType<ItemPropsT> = styled(Link)`
  flex: 1;
  height: 50px;
  text-align: center;
  ${props => {
    const purple = props.theme.colors.purple;
    const property = `border-bottom: 3px solid ${purple}`;
    return props.active && property;
  }}
`;

const Header = () => {
  const { url } = useRouteMatch();
  const pathname = window.location.pathname.replace(`${url}/`, "");
  const tabs = [
    {
      to: url,
      active: pathname === url ? 1 : 0, // @TODO looks like this is a bug. The active prop is being passed to the DOM
      title: "Share Feedback",
      key: url
    },
    {
      to: `${url}/my-feedback`,
      active: pathname === "my-feedback" ? 1 : 0,
      title: "My Feedback",
      key: "my-feedback"
    },
    {
      to: `${url}/team-feedback`,
      active: pathname === "team-feedback" ? 1 : 0,
      title: "Team Feedback",
      key: "team-feedback"
    },
    {
      to: `${url}/teams`,
      active: pathname === "teams" ? 1 : 0,
      title: "Teams",
      key: "teams"
    }
  ];
  return (
    <HeaderContainer>
      <AppTitle>Honesto</AppTitle>
      <Navigation>
        {tabs.map(item => (
          <Item {...item}>{item.title}</Item>
        ))}
      </Navigation>
      <p>Profile</p>
    </HeaderContainer>
  );
};

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
      <Header />
      <React.Suspense fallback={<Container />}>
        <Container>
          <Switch>
            <Route exact path={path} render={() => <ShareFeedback />} />
            <Route
              exact
              path="/home/my-feedback"
              render={() => <p>My Feedback</p>}
            />
            <Route
              exact
              path="/home/team-feedback"
              render={() => <p>Team Feedback</p>}
            />
            <Route path="*" render={() => <NoMatch />} />
          </Switch>
        </Container>
      </React.Suspense>
    </>
  );
};

export default Home;
