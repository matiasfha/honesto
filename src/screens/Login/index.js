import React from "react";
import { useHistory, Link } from "react-router-dom";
import styled from "@emotion/styled/macro";
import Button from "components/Button";
import DefaultPanel from "components/Panel";
import { StateContext } from "contexts/State";

import background from "./Background.png";
import appIcon from "./App Icon.svg";

const Panel = styled(DefaultPanel)`
  height: 382px;
  width: 380px;
  img {
    margin-top: 3rem;
    margin-bottom: 2rem;
  }
  button {
    margin-top: 2rem;
  }
`;

const Title = styled.p`
  font-size: 24px;
  line-height: 28px;
  color: ${props => props.theme.colors.black};
`;

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${props => props.background});
  background-size: 100%;
  background-repeat: no-repeat;
`;

const Divider = styled.div`
  border: 1px solid #d9dcde;
  height: 0px;
  width: 190px;
`;

const Login = () => {
  const { login } = React.useContext(StateContext);
  const history = useHistory();
  const handleLogin = async e => {
    e.preventDefault();
    await login();
    history.push("/home");
  };
  return (
    <Container background={background}>
      <Panel>
        <img src={appIcon} alt="App Icon" />
        <Title>Honesto</Title>
        <Divider />
        <Button onClick={handleLogin}>Login with Google</Button>
      </Panel>
    </Container>
  );
};
export default Login;
