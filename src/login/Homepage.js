import logo from "../assets/image/Driven_white 1.png"
import {useContext} from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Formulario from "./Formulario";
import Container from '../Container';
import AuthContext from "../contexts/AuthContext";

export default function Homepage() {
  const {setAuth, auth} = useContext(AuthContext)
  console.log(auth)
  const logado = localStorage.getItem("token")
  console.log(logado);
  const navigate = useNavigate();

  if (logado !== null) {
    setAuth(logado);
    navigate("/subscriptions");
  }


  return (
        <Container>
            <Logo src={logo}/>
            <Formulario />
        </Container>
  );
}


const Logo = styled.img`

`