import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useState, useEffect, useContext } from 'react';
import styled from "styled-components";
import axios from "axios";
import Perks from "./Perks";
import FormularioCartao from "./FormularioCartao";


export default function Planos() {

    const { planoId, priceReplace } = useParams()
    const auth = localStorage.getItem("token")
    const [img, setImg] = useState()
    const [name, setName] = useState()
    const [perks, setPerks] = useState()
    const [price, setPrice] = useState()
    const [recebido, setRecebido] = useState(false)
    const config = {
        headers: {
            "Authorization": `Bearer ${auth}`
        }
    }
    const promise = axios.get(`https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${planoId}`, config)

    useEffect(() => {
        promise.then(res => {
            console.log(res);
            setImg(res.data.image);
            setPerks(res.data.perks);
            setName(res.data.name);
            setPrice(res.data.price);
            setRecebido(true);
        });

        promise.catch(erro => {
            console.log(config);
            console.log(erro.response.data)
        });

    }, []);

    return (
        <>
        <Link to={`/subscriptions/`}>
        <ArrowBack>
            <Icon icon="fa-solid:arrow-left" color="white" />
        </ArrowBack>
        </Link>
        <Container>
            <Titulo>
                <Logo src={img} />
                {name}
            </Titulo>
            <ListaBeneficios>
                <Icon icon="fluent:clipboard-task-list-rtl-20-regular" color="#ff4791" /> Benefícios:
            </ListaBeneficios>
            {recebido ? <Perks perks={perks} /> : ""}
            <ListaBeneficios>
                <Icon icon="fa6-solid:money-bill-wave" color="#ff4791" /> Preço:
            </ListaBeneficios>
            <Preco>R$ {price} cobrados mensalmente</Preco>
            {recebido ? <FormularioCartao perks={perks} name={name} price={price}/> : "" }
        </Container>
        </>
    )


}

const Container = styled.div`
height: 100vh;
width: 100%;
overflow: hidden;
font-family: 'Roboto', sans-serif;
font-size: 35px;
background-color: #0f0e12;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
`

const Titulo = styled.div`
font-size: 32px;
font-weight: 700;
color: #FFFFFF;
display: flex;
flex-direction: column;
margin-top: 40px;
`

const ListaBeneficios = styled.div`
font-size: 16px;
font-weight: 400;
color: #FFFFFF;
display: flex;
width: 80%;
`

const ArrowBack = styled.div`
position: fixed;
top: 0;
width: 100%;
margin-left: 22px;
margin-top: 15px;
font-size: 32px;
`

const Preco = styled.div`
font-size: 14px;
font-weight: 400;
color: #FFFFFF;
display: flex;
width: 80%;
padding-left: 10px;
`

const Logo = styled.img`
height: 95px;
width: 140px;
`