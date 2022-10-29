import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import logoPlus from "../assets/image/Driven Plus.png"
import logoGold from "../assets/image/Driven Gold.png"
import logoPlat from "../assets/image/Driven Platinum.png"
import Container from "../Container"
import Card from "./Card";
import { useState, useEffect, useContext } from "react";
import AuthContext from "../contexts/AuthContext";




export default function Subscriptions() {
  const [planos, setPlanos] = useState([])
  const {auth} = useContext(AuthContext)

  const config = {
    headers: {
      "Authorization": `Bearer ${auth}`
    }
  }

  useEffect(() => {
    const solPlanos = axios.get(`https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships`, config);

    solPlanos.then(res => {
      console.log(res.data);
      setPlanos(res.data);
      console.log(auth);
    });

    solPlanos.catch(erro => {
      console.log(erro.response.data);
    }
      )
  }, [])

  return (
    <Container>
      <Titulo>
        Escolha seu Plano
      </Titulo>
      {planos.map((plano) =>
      (
        <Card 
        id={plano.id}
        key={plano.id}
        img={plano.image}
        price={plano.price} />
      ))}
    </Container>
  );
}

const Titulo = styled.div`
font-size: 32px;
font-weight: 700;
color: #FFFFFF;
`
