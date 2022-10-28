import logo from "../assets/image/Driven_white 1.png"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Formulario from "./Formulario";
import Container from '../Container';

export default function Homepage() {
  return (
        <Container>
            <Logo src={logo}/>
            <Formulario />
        </Container>
  );
}


const Logo = styled.img`

`