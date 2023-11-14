import github from 'assets/github.png'
import telegram from 'assets/telegram.png'
import discord from 'assets/discord.png'
import styled from "styled-components";

export const Footer = () => {
    return (
        <div>
            <Wrapper>
                <a target="_blank" href="https://t.me/ZaharWeb007"><img src={telegram} alt="tele"/></a>
                <a target="_blank" href="https://github.com/ZaharBorisenko"><img src={github} alt="github"/></a>
                <a target="_blank" href="https://discord.com/users/6781"><img src={discord} alt="discord"/></a>
            </Wrapper>
            <Copyright>© Авторские права 2023 Zahar Borisenko Все права НЕ защищены..</Copyright>
        </div>
    );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 0 50px;
`
const Copyright = styled.p`
  text-align: center;
`
