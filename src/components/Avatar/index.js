import * as React from "react";
import styled from "@emotion/styled/macro";

type PropsT = {
  src: string,
  alt: string
};

const Avatar: React.ComponentType<PropsT> = styled.img`
  display: inline-block;
  width: 58px;
  height: 58px;
  border-radius: 50%;
  margin-right: 30px;
`;

export default Avatar;
