// @flow
import * as React from "react";
import styled from "@emotion/styled/macro";
import arrow from "./down-arrow.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const DropdownContainer = styled.div`
  background: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.blackPearl};
  box-sizing: border-box;
  border-radius: 3px;
  height: 50px;
  width: 342px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  cursor: pointer;
  p {
    color: ${props => props.theme.colors.black};
    font-size: 16px;
    line-height: 19px;
    margin-top: 10px;
  }
`;

const Title = styled.p`
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${props => props.theme.colors.black};
  margin-bottom: 0.5rem;
`;

type PropsT = {
  placeholder: string,
  title: string
};

const Dropdown = ({ placeholder, title }: PropsT) => (
  <Container>
    <Title>{title}</Title>
    <DropdownContainer>
      <p>{placeholder}</p>
      <img src={arrow} alt="arrow down" />
    </DropdownContainer>
  </Container>
);

export default Dropdown;
