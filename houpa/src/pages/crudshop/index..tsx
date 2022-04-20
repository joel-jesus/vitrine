import React from "react";
import { Link } from "react-router-dom";
//css
import './style.css';
//Components
import { Headerdashboard } from "../../components/topo";
//Mui components
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container } from "@mui/material";


//Styled components
import { Containercard } from "./style";
import {Input} from '../../components/inputs'
//Imnagens
import { camisa1 } from "../../icons";
import mulher1 from '../../assets/img/mulher1.svg'
import mulher2 from '../../assets/img/mulher2.svg'
import edit from '../../assets/img/edit.svg'
import close from '../../assets/img/close.svg'
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
}));

const Crudshop: React.FC = () => (
  <>
    <Headerdashboard 
        icontitle={camisa1} 
        titletopo="Gerenciar Vitrines"
    />
    <Container maxWidth="md" className="mt_3">
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Item className="no_background">
                    <Input />
                </Item>
            </Grid>
            <Grid item xs={12}>
                <Item>
                    <Containercard>
                        <div>
                            <img src={mulher1} alt="imagem-mulher" />
                        </div>
                        <div>
                            <h2>TOP CROPPED VISCOSE</h2>
                            <p>Marca: Unique</p>
                            <span>Chic Ref.: 0296845610</span>
                        </div>
                        <div>
                            <button>
                                <img src={edit} alt="icone-editar" />
                            </button>
                            <button>
                                <img src={close} alt="icone-close" />
                            </button>
                        </div>
                    </Containercard>
                </Item>
            </Grid>
            <Grid item xs={12}>
                <Item>
                    <Containercard>
                        <div>
                            <img src={mulher2} alt="imagem-mulher" />
                        </div>
                        <div>
                            <h2>TOP CROPPED VISCOSE</h2>
                            <p>Marca: Unique</p>
                            <span>Chic Ref.: 0296845610</span>
                        </div>
                        <div>
                            <button>
                                <img src={edit} alt="icone-editar" />
                            </button>
                            <button>
                                <img src={close} alt="icone-close" />
                            </button>
                        </div>
                    </Containercard>
                </Item>
            </Grid>
        </Grid>
    </Container>
  </>
);

export { Crudshop };
