import React from "react";
import { Link } from "react-router-dom";
import {
  Containertopo,
  Containerwhite,
  Topo,
  Listtopo,
  Containerlogo,
  Title,
} from "./style";

//Images
import logo from "../../assets/img/logotopo.svg";
//Props
interface AppProps {
  icontitle: string;
  titletopo: string;
}

export const Header: React.FC<{}> = () => {
  return (
    <Containertopo>
      <img src={logo} alt="logo" />
    </Containertopo>
  );
};

export function Headerdashboard({ icontitle, titletopo }: AppProps) {
  return (
    <Topo>
      <Listtopo>
        <ul>
          <Link to={`/vitrine`}>Vitrines</Link>
          <Link to={`/crudshop`}>Gerenciar vitrines</Link>
        </ul>
      </Listtopo>
      <Containerlogo>
        <img src={logo} alt="logo" />
      </Containerlogo>
      <Containerwhite>
        <ul>
          <Link to={`/vitrine`}>houpa!</Link>
          <Link to={`/crudshop`}>Gerenciar vitrine</Link>
          <Link to={``}>Cadastrar Produtos</Link>
        </ul>
        <Title>
          <img src={icontitle} alt="icone-camisa" />
          <h2>{titletopo}</h2>
        </Title>
      </Containerwhite>
    </Topo>
  );
}
