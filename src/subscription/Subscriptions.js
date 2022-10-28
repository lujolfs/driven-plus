import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import logoPlus from "../assets/image/Driven Plus.png"
import logoGold from "../assets/image/Driven Gold.png"
import logoPlat from "../assets/image/Driven Platinum.png"
import Container from "../Container"
import Card from "./Card";
import { useState, useEffect } from "react";




export default function Subscriptions() {
  const [planos, setPlanos] = useState([])
  const config = {
    headers: {
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OTUyLCJpYXQiOjE2NjY5MzMzMjF9.cojJZQR23v1Ca-DkvyXSJL5xeWALYEVROf7cJs9TEyY"
    }
  }

  useEffect(() => {
    const solPlanos = axios.get(`https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships`, config);

    solPlanos.then(res => {
      console.log(res.data);
      setPlanos(res.data);
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
