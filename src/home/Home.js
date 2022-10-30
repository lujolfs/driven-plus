import { useContext, useEffect } from "react";
import AuthContext from "../contexts/AuthContext";
import styled from "styled-components";
import Container from "../Container";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { Icon } from '@iconify/react';



export default function Home() {
    const { name, auth } = useContext(AuthContext);
    const navigate = useNavigate()
    const membershipPersistente = JSON.parse(localStorage.getItem('membership'));
    const imagemPlano = membershipPersistente.image;
    const config = {
        headers: {
            "Authorization": `Bearer ${auth}`
        }
    }

    function cancelaPlano() {
        const cancelamento = axios.delete('https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions', config);
        cancelamento.then(escolherOutro);
        cancelamento.catch(checkError)
    }

    function escolherOutro() {
        localStorage.removeItem('membership');
        navigate("/subscriptions");
    }

    function checkError(error) {
        console.log(error.response.data)
    }

    return (
        <Container>
            <Header>
                <ImgPlano src={imagemPlano} />
                <Icone><Icon icon="healthicons:ui-user-profile-outline" color="white" /></Icone>
            </Header>
            <Container>
                <Cumprimento>
                    Olá, {name}
                </Cumprimento>
                <Perks>
                    {membershipPersistente.perks.map((perk) =>
                        <Perk>
                            <a href={perk.link} target="_blank" key={perk.id}>{perk.title}</a>
                        </Perk>
                    )}
                </Perks>
                <Botoes>
                    <Link to={`/subscriptions/`} style={{ textDecoration: 'none' }} >
                        <MudaPlano>
                            Mudar plano
                        </MudaPlano>
                    </Link>
                    <CancelaPlano onClick={() => cancelaPlano()}>
                        Cancelar plano
                    </CancelaPlano>
                </Botoes>
            </Container>
        </Container>
    )
}

const Cumprimento = styled.div`
font-size: 24px;
font-weight: 700;
color: white;
`

const ImgPlano = styled.img`
height: 50px;
width: 75px;
padding-left: 20px;
`

const Botoes = styled.div`
display: flex;
flex-direction: column;
`

const Header = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items center;
margin-top: 10px;
`

const Perks = styled.div`

`

const Icone = styled.div`
padding-right: 20px;
`

const Perk = styled.div`
font-size: 14px;
font-weight: 700;
background-color: #FF4791;
color: white;
width: 299px;
height: 52px;
padding: 18px, 122px;
border-radius: 8px;
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 8px;
a {
    text-decoration: none;
    color: white;
}
`

const MudaPlano = styled.div`
font-size: 14px;
font-weight: 700;
background-color: #FF4791;
color: white;
width: 299px;
height: 52px;
padding: 18px, 122px;
border-radius: 8px;
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 8px;
`

const CancelaPlano = styled.div`
font-size: 14px;
font-weight: 700;
background-color: #FF4747;
color: white;
width: 299px;
height: 52px;
padding: 18px, 122px;
border-radius: 8px;
display: flex;
align-items: center;
justify-content: center;
`