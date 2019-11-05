import React from "react";
import styled from "@emotion/styled/macro";
import logo from "./Theorem logotype.svg";

const FooterContainer = styled.footer`
  flex-shrink: 0;
  width: 100%;
  height: 54px;
  background: ${props => props.theme.colors.black};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  img {
    margin-left: 15%;
  }
  p {
    font-size: 12px;
    line-height: 18px;
    text-align: right;
    color: ${props => props.theme.colors.white};
  }
`;

const Footer = () => (
  <FooterContainer>
    <img src={logo} alt="Theorem logo" />
    <p>Copyright © 2018 Theorem, LLC. All Rrights Reserved</p>
  </FooterContainer>
);

export default Footer;
