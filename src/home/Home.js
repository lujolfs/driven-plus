import {useContext} from "react";
import AuthContext from "../contexts/AuthContext";
import styled from "styled-components";
import Container from "../Container"
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';



export default function Home() {
    const {name, membership, chegado} = useContext(AuthContext);
    const imagemPlano = membership.image;

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
                    {membership.perks.map((perk) => 
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
                <CancelaPlano>
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

const Icone=styled.div`
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