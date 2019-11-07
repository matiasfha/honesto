// @flow
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "emotion-theming";
import styled from "@emotion/styled/macro";
import { Global, css } from "@emotion/core";
import emotionNormalize from "emotion-normalize";
import Footer from "components/Footer";
import StateProvider from "contexts/State";

import Login from "screens/Login";
const Home = React.lazy(() => import("screens/Home"));
const Questions = React.lazy(() => import("screens/Questions"));
const NoMatch = React.lazy(() => import("screens/NoMatch"));

const theme = {
  colors: {
    black: "#031323",
    white: "#fff",
    purple: "#AB61E5",
    alabastro: "#F2F3F4",
    blackPearl: "#D9DCDE"
  }
};

const MainContainer = styled.main`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

// This container is used as fallback to avoid flickering
const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <>
      <Global
        styles={css`
          ${emotionNormalize}
          html, body {
            width: 100%;
            height: 100%;
            position: relative;
            min-height: 100vh;
            font-family: "Average Sans", sans-serif;
          }
        `}
      />
      <ThemeProvider theme={theme}>
        <StateProvider>
          <MainContainer>
            <React.Suspense fallback={<Container />}>
              <Router>
                <Switch>
                  <Route exact path="/" component={Login} />
                  <Route path="/home" render={() => <Home />} />
                  <Route
                    path="/questions/:userId"
                    render={() => <Questions />}
                  />
                  <Route path="*" render={() => <NoMatch />} />
                </Switch>
              </Router>
            </React.Suspense>
            <Footer />
          </MainContainer>
        </StateProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
