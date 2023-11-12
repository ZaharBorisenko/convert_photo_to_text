import {NavLink} from "react-router-dom";
import styled from "styled-components";

export const Navigation = () => {
    return (
        <Wrapper>
            <LinkStyled to="/">Главная</LinkStyled>
            <LinkStyled to="/history">Мои запросы</LinkStyled>
            <LinkStyled to="/about">О проекте</LinkStyled>
        </Wrapper>
    );
};
const Wrapper = styled.div`
  display: flex;
  gap: 0 70px;
`
const LinkStyled = styled(NavLink)`
  text-decoration: none;
  color: #000;
  font-weight: 500;
  font-size: 18px;
  background-color: rgb(255, 255, 255);
  transition: color .4s ease-in-out;

  &.active {
    color: rgb(1, 16, 170);
  }

  &:hover {
    color: rgb(85, 86, 86);
  }
`
