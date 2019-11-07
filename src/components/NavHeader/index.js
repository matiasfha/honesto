// @flow
import * as React from "react";
import { useRouteMatch, Link } from "react-router-dom";
import styled from "@emotion/styled/macro";

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
`;

const AppTitle = styled(Link)`
  color: ${props => props.theme.colors.black};
  font-size: 24px;
  line-height: 28px;
  text-decoration: none;
  font-weight: bold;
`;

const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 45%;
  align-self: flex-end;
`;

type ItemPropsT = {
  active?: number
};
const Item: React.ComponentType<ItemPropsT> = styled(Link)`
  flex: 1;
  height: 40px;
  text-align: center;
  text-decoration: none;
  ${props => {
    const purple = props.theme.colors.purple;
    const property = `border-bottom: 3px solid ${purple}`;
    return props.active && property;
  }}
`;

const NavHeader = () => {
  const url = "/home";
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
      <AppTitle to="/home">Honesto</AppTitle>
      <Navigation>
        {tabs.map(item => (
          <Item {...item}>{item.title}</Item>
        ))}
      </Navigation>
      <p>Profile</p>
    </HeaderContainer>
  );
};

export default NavHeader;
