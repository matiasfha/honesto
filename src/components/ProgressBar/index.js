import * as React from "react";
import styled from "@emotion/styled/macro";

type PropsT = {
  progress: number
};
const Progress: React.ComponentType<PropsT> = styled.div`
  position: relative;
  background: linear-gradient(
    to right,
    rgba(29, 222, 187, 0.8) ${props => props.progress},
    #f2f3f4 0
  );
  width: 100%;
  height: 5px;
  z-index: 3;
`;

export default Progress;
