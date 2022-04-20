import { Checkbox, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Header } from "../../components/topo";
import { Content } from "./style";

//CSS
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../../Redux/Actions/userActions";
import Message from "../../components/loadingError/Error";
import Loading from "../../components/loadingError/Loading";

export const Registro: React.FC<{}> = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userRegister = useSelector((state: any) => {
    return state.userRegister;
  });
  const { error, loading, userInfo } = userRegister;

  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [error, navigate, userInfo]);

  const submitHandler = async (e: any) => {
    e.preventDefault();
    dispatch(register(name, email, password));
  };

  return (
    <>
      <Header />
      <Content>
        {error && <Message variant="error">{error}</Message>}
        {loading && <Loading />}
        <form onSubmit={submitHandler}>
          <div className="title_login">
            <h2>Crie sua conta</h2>
          </div>
          <div className="container_input">
            <label>Nome e sobrenome</label>
            <TextField
              id="filled-basic"
              label="Digite seu nome e sobrenome"
              variant="filled"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="container_input">
            <label>E-mail</label>
            <TextField
              id="filled-basic"
              label="Digite seu e-mail"
              variant="filled"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="container_input">
            <label>Senha</label>
            <TextField
              id="filled-basic"
              label="Crie sua senha"
              variant="filled"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="container_lgpd">
            <Checkbox />
            <p>
              Aceito os Termos e Condições e autorizo o uso de meus dados de
              acordo com a Declaração de Privacidade.
            </p>
          </div>
          <div className="container_button">
            <button type="submit">Criar Conta</button>
          </div>
        </form>
      </Content>
    </>
  );
};
