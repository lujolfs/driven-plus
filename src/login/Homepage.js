import logo from "../assets/image/Driven_white 1.png"
import {useContext, useEffect} from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Formulario from "./Formulario";
import Container from '../Container';
import AuthContext from "../contexts/AuthContext";

export default function Homepage() {
  const {setAuth, auth} = useContext(AuthContext)
  const logado = localStorage.getItem("token")
  const membership = localStorage.getItem("membership")
  const navigate = useNavigate();

  useEffect(() => {
  if (logado !== null) {
    setAuth(logado);
    if (membership == null) {
      navigate("/subscriptions");
  } else {
      alert("Home em construção.")
  }
  }})


  return (
        <Container>
            <Logo src={logo}/>
            <Formulario />
        </Container>
  );
}


const Logo = styled.img`

`