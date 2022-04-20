import React from "react";
import { Container, Layout } from "./components/containers/style";

//React Router Dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import { Login } from "./pages/login";
import { Registro } from "./pages/register";
import { Home } from "./pages/home";
import { Crudshop } from "./pages/crudshop/index.";
import { Vitrine } from "./pages/vitrine";

function App() {
  return (
    <Layout>
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/crudshop" element={<Crudshop />} />
            <Route path="/vitrine" element={<Vitrine />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </Layout>
  );
}

export default App;
