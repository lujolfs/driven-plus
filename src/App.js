import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import Homepage from "./login/Homepage";
import Cadastro from "./registration/Cadastro";
import Subscriptions from "./subscription/Subscriptions"


export default function App() {
  return (
    <BrowserRouter>
    <Container>
      <GlobalStyle/>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/cadastro" element={<Cadastro/>} />
        <Route path="/subscriptions" element={<Subscriptions/>} />
{/*         <Route path="/hoje" element={<Hoje/>} />
        <Route path="/historico" element={<Historico/>} /> */}
      </Routes>
    </Container>
</BrowserRouter>
  );
}

const Container = styled.div`
position: absolute;
width: 100%;
height:100%;
font-family: 'Roboto', sans-serif;
font-size: 35px;
background-color: #0f0e12;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
overflow: scroll;
`