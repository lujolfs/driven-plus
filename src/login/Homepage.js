import logo from "../assets/image/Driven_white 1.png"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Formulario from "./Formulario";
import axios from 'axios';

export default function Homepage() {
  return (
        <Container>
            <Logo src={logo}/>
            <Formulario />
        </Container>
  );
}

const Container = styled.div`
padding: 38px;
width: 100%;
height: 100%;
font-family: 'Roboto', sans-serif;
font-size: 35px;
background-color: #0f0e12;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
`

const Logo = styled.img`

`