import React from "react";

//css
import "./style.css";
//Components
import { Headerdashboard } from "../../components/topo";
//Mui components
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";

//Styled components
import { Card } from "./style";
import { Input } from "../../components/inputs";
//Imnagens

import produto1 from "../../assets/img/products/1.svg";
import produto2 from "../../assets/img/products/2.svg";
import produto3 from "../../assets/img/products/3.svg";
import produto4 from "../../assets/img/products/4.svg";
import produto5 from "../../assets/img/products/5.svg";
import produto6 from "../../assets/img/products/6.svg";
import vitrine from "../../assets/img/vitrine.svg";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

const Vitrine: React.FC = () => (
  <>
    <Headerdashboard icontitle={vitrine} titletopo="Vitrines" />
    <Container maxWidth="md" className="mt_3">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item className="no_background">
            <Input />
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item className="no_background">
            <Card>
              <img src={produto5} alt="imagem-produto" />
              <h2>Vestido de bolinha</h2>
              <h3>R$ 50,00</h3>
            </Card>
          </Item>
        </Grid>
      </Grid>
    </Container>
  </>
);

export { Vitrine };
