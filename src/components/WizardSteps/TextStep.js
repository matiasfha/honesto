import * as React from "react";
import styled from "@emotion/styled/macro";

const TextArea = styled.textarea`
  background: #ffffff;
  border: 1px solid #d9dcde;
  box-sizing: border-box;
  border-radius: 3px;
  width: 100%;
  height: 231px;
  font-size: 1rem;
  line-height: 19px;
`;

const TextStep = question => {
  return <TextArea placeholder="Say something..." />;
};

export default TextStep;
