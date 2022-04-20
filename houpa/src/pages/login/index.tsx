import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../../components/topo";
import { Content } from "./style";

import "./style.css";

import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Redux/Actions/userActions";
import Message from "../../components/loadingError/Error";
import Loading from "../../components/loadingError/Loading";

export const Login: React.FC<{}> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state: any) => {
    return state.userLogin;
  });
  const { error, loading, userInfo } = userLogin;

  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      navigate("/vitrine");
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e: any) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <>
      <Header />
      <Content>
        {error && <Message variant="error">{error}</Message>}
        {loading && <Loading />}
        <form onSubmit={submitHandler}>
          <div className="title_login">
            <h2>Entrar no Houpa</h2>
          </div>
          <div className="container_input">
            <TextField
              id="filled-basic"
              label="Email"
              variant="filled"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="container_input">
            <TextField
              id="filled-basic"
              label="Senha"
              variant="filled"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="container_button">
            <button type="submit">Entrar</button>

            <p>Ainda não tem conta?</p>
            <Link to={`/registro`}>Cadastre-se</Link>
          </div>
        </form>
      </Content>
    </>
  );
};
