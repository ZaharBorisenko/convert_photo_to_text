import {Logo} from "ui";
import {Navigation} from "components";
import styled from "styled-components";

export const Header = () => {
    return (
        <Wrapper>
            <Logo/>
            <Navigation/>
            <div>Русский</div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;
  padding: 16px 0;
  align-items: center;
  justify-content: space-between;
`
