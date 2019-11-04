import styled from "@emotion/styled/macro";

const Panel = styled.div`
  background: ${props => props.theme.colors.white};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Panel;
