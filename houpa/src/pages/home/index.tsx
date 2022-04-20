import React from "react";
import { Link } from "react-router-dom";
//Components
import { Headerdashboard } from "../../components/topo";
//Mui components
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { purple } from "@mui/material/colors";
import Paper from "@mui/material/Paper";
//Images
import { camisa1 } from "../../icons";
import { Container } from "@mui/material";


const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  "&:hover": {
    backgroundColor: purple[700],
  },
}));

const Item = styled(Paper)(({ theme }) => ({
  background: "transparent",
  boxShadow: "none",
  padding: theme.spacing(1),
  textAlign: "center",
}));

const Home: React.FC = () => (
  <>
    <Headerdashboard 
    icontitle={camisa1} 
    titletopo="Cadastrar Produto"
    />
    <Container>
      <Stack direction="row" spacing={2}>
        <Item>
          <h2>Cadastro de produtos</h2>
        </Item>
        <Item>
          <Link to={`/`}>
            <ColorButton variant="contained">Salvar produto</ColorButton>
          </Link>
        </Item>
      </Stack>
    </Container>
  </>
);

export { Home };
