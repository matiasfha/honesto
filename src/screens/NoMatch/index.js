import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled/macro";
import Button from "components/Button";
import DefaultPanel from "components/Panel";

const Panel = styled(DefaultPanel)`
  width: 780px;
  height: 273px;

  padding: 30px;
`;

const Content = styled.p`
  line-height: 14px;
  font-size: 24px;
`;

const NoMatch = () => (
  <Panel>
    <h4>404</h4>
    <Content>
      Sorry! The page you are looking for cannot be found.{" "}
      <span role="img" aria-label="sad">
        😢
      </span>
    </Content>
    <Link to="/">
      <Button>Back to home</Button>
    </Link>
  </Panel>
);

export default NoMatch;
