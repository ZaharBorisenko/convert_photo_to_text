import React from "react";
import {Header, Footer} from "components";
import styled from "styled-components";

export const Layout = ({children} : {children: React.ReactNode}) => {
    return (
        <LayoutContainer>
            <Header/>
            <ContentContainer>{children}</ContentContainer>
            <Footer/>
        </LayoutContainer>
    );
};

const LayoutContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentContainer = styled.div`
  flex: 1;
`;
