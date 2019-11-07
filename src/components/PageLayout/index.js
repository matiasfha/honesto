import React from "react";
import styled from "@emotion/styled/macro";

export const PageTitle = styled.h2`
  font-size: 31px;
  line-height: 36px;
  color: ${props => props.theme.colors.black};
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 47%;
`;

export const PageHeader = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  align-self: stretch;
  margin-bottom: 30px;
`;

const PageLayout = ({ title, header, children }) => (
  <PageContainer>
    <PageHeader>
      <PageTitle>{title}</PageTitle>
      {header}
    </PageHeader>
    {children}
  </PageContainer>
);

export default PageLayout;
