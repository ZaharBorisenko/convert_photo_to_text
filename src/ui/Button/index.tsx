import styled from "styled-components";

export const Button = ({text, handleClick}: { text: string, handleClick: () => void }) => {
    return (
        <Btn onClick={handleClick}>{text}</Btn>
    );
};

const Btn = styled.button`
  font-size: 20px;
  outline: none;
  border: none;
  font-weight: 600;
  cursor: pointer;
  border-radius: 5px;
  background-color: #f7a9dd;
  color: #3e273d;
  padding: 15px 20px 15px 40px;
`
