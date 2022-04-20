import styled from "styled-components";

interface ButtonProps {
  backgroundColor: string;
  hoverColor: string;
}

export const Container = styled.button<ButtonProps>`
  background-color: ${(props) => props.backgroundColor};
  border-style: none;
  border-radius: 10px;
  color: #fff;
  &:hover {
    background-color: ${(props) => props.hoverColor};
  }
`;
