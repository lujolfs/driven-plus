import styled from "styled-components";
import { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import AuthContext from "../contexts/AuthContext";


export default function Modal(props) {
    const navigate = useNavigate()
    const { perks, name, price, setModal} = props
    const [disabled, setDisabled] = useState(false);
    const { auth, setMembership, form, setForm } = useContext(AuthContext)

    const config = {
        headers: {
          "Authorization": `Bearer ${auth}`
        }
      }

    function enviaCartao(event) {
        const cartao = axios.post('https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions', form, config);
        setDisabled(true);
        cartao.then(completeCartao);
        cartao.catch(checkError);
    };

    return (
        <Container>
            <ModalCont> 
                <Texto>Tem certeza que deseja assinar o plano {name} (R$ {price})?</Texto>
                <Buttons>
                    <ButNao onClick={() => setModal(false)}>Não</ButNao>
                    <ButSim onClick={() => enviaCartao()}>SIM</ButSim>
                </Buttons>
            </ModalCont>
        </Container>
    )

    function completeCartao(response) {
        setDisabled(false);
        setMembership(response.data.membership);
        localStorage.setItem('membership', JSON.stringify(response.data.membership))
        alert("Compra finalizada!")
        navigate("/home")
    }

    function checkError() {
        setDisabled(false)
        alert("Os dados inseridos são inválidos.");
        setForm({
            membershipId: perks[0].membershipId,
            cardName: '',
            cardNumber: '',
            securityNumber: '',
            expirationDate: '',
        })
    }

}

const Container = styled.div`
width: 100%;
height: 100%;
position: absolute;
display: flex;
align-items: center;
justify-content: center;
background-color: rgba(0, 0, 0, 0.8);

`

const Texto = styled.span`
margin-bottom: 47px;
`

const ModalCont = styled.div`
background-color: #FFFFFF;
width: 248px;
height: 210px;
border-radius: 12px;
font-size: 18px;
font-weight: 700;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
margin-left: auto; 
margin-right: auto;
z-index: 10;
`

const Buttons = styled.div`
`

const ButNao = styled.button`
width: 95px;
height: 52px;
margin-right: 7px;
border-radius: 8px;
border: none;
background-color: #CECECE;
color: white;
`

const ButSim = styled.button`
width: 95px;
height: 52px;
margin-left: 7px;
border-radius: 8px;
border: none;
background-color: #FF4791;
color: white;
`