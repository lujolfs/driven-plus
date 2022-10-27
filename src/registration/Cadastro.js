import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import FormularioNova from "./FormularioNova";
import PossuiCadastro from "./PossuiCadastro";



export default function Cadastro() {


  return (
        <Container>
            <FormularioNova/>
        </Container>
  );
}

const Container = styled.div`
font-family: 'Roboto', sans-serif;
font-size: 35px;
background-color: #0f0e12;
margin: 150px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`