import React from "react";
//CSS
import { Container } from "./style";

//Props
interface PropsBt {
  backgroundColor: string;
  hoverColor: string;
  text: string;
}

const Button: React.FC<PropsBt> = ({ backgroundColor, hoverColor, text }) => (
  <Container backgroundColor={backgroundColor} hoverColor={hoverColor}>
    {text}
  </Container>
);

export { Button };
