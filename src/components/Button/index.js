// @flow
import * as React from "react";
import styled from "@emotion/styled/macro";
import { Link } from "react-router-dom";

type PropsT = {
  type: "default" | "clear"
};

const BaseButton: React.ComponentType<PropsT> = styled.button`
  width: 192px;
  height: 48px;
  background: transparent;
  outline: none;
  cursor: pointer;
  ${props => {
    switch (props.type) {
      case "clear":
        return `
          border: 1px solid ${props.theme.colors.blackPearl};
          color: ${props.theme.colors.black};
        `;
      default:
        return `
        background: ${props.theme.colors.purple}; 
        color: ${props.theme.colors.white};
      `;
    }
  }};
  border-radius: 4px;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  &:disabled {
    pointer-events: none;
    background: #acb1b6;
    color: ${props => props.theme.colors.white};
  }
`;

const Button = (props: PropsT & { to?: string }) => {
  if (props.to != null) {
    return (
      <Link to={props.to}>
        <BaseButton {...props} />
      </Link>
    );
  }
  return <BaseButton {...props} />;
};

export default Button;
