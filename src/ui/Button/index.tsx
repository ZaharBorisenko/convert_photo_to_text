import styled from "styled-components";

export const Button = ({text}: { text: string }) => {
    return (
        <Btn>{text}</Btn>
    );
};

const Btn = styled.button`
  font-size: 18px;
  outline: none;
  border: none;
  font-weight: 600;
  cursor: pointer;

  background-color: #f7a9dd;
  color: #3e273d;
`
