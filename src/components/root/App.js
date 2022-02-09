import React from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "reactstrap";
import CartDetail from "../cart/CartDetail";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";

function App() {
  return (
    <Container>
      <Navi />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/products" element={<Dashboard />} />
        <Route exact path="/cart" element={<CartDetail />} />
      </Routes>
    </Container>
  );
}

export default App;
