import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import FormularioNova from "./FormularioNova";
import Container from "../Container";
import PossuiCadastro from "./PossuiCadastro";



export default function Cadastro() {


  return (
        <Container>
            <FormularioNova/>
        </Container>
  );
}