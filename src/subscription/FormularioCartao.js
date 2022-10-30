import styled from "styled-components"
import { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import AuthContext from "../contexts/AuthContext";
import Modal from "./Modal";



export default function FormularioCartao(props) {
    const { perks, name, price, modal, setModal } = props
    const { auth, setMembership, form, setForm } = useContext(AuthContext)
    const [disabled] = useState(false);
    const config = {
        headers: {
          "Authorization": `Bearer ${auth}`
        }
      }
    
    
    

    
    return (
        <Formu >
            <Campo type="text" name="cardName" placeholder="Nome impresso no cartão" value={form.cardName} onChange={handleForm} disabled={disabled} />
            <Campo type="text" name="cardNumber" placeholder="Dígitos do cartão" value={form.cardNumber} onChange={handleForm} disabled={disabled} />
            <Metade>
                <Campo2 type="password" name="securityNumber" placeholder="Código de Segurança" value={form.securityNumber} onChange={handleForm} disabled={disabled} />
                <Campo2 type="text" name="expirationDate" placeholder="Validade" value={form.expirationDate} onChange={handleForm} disabled={disabled} />
            </Metade>
            <Entrar disabled={disabled} onClick={() => setModal(true)}>ASSINAR</Entrar>
        </Formu>
    )

    function handleForm(e) {
        setForm({
            ...form,
            membershipId: perks[0].membershipId,
            [e.target.name]: e.target.value
        })
    }




}

const Formu = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`

const Campo = styled.input`
border-sizing: border-box;
font-family: 'Roboto', sans-serif;
font-size: 14px;
border: 1px solid #D5D5D5;
border-radius: 5px;
width: 315px;
height: 52px;
margin-bottom: 16px;
padding-left: 10px;
::placeholder {
    color: #7E7E7E;
}
`

const Campo2 = styled.input`
border-sizing: border-box;
font-family: 'Roboto', sans-serif;
font-size: 14px;
border: 1px solid #D5D5D5;
border-radius: 5px;
max-width: 145px;
height: 52px;
padding-left: 10px;
::placeholder {
    color: #7E7E7E;
}
`

const Metade = styled.div`
display: flex;
margin-bottom: 16px;
gap: 10px
`

const Entrar = styled.button`
font-family: 'Roboto', sans-serif;
font-size: 14px;
background-color: #FF4791;
border: none;
border: 1px solid #FF4791;
border-radius: 5px;
width: 327px;
height: 45px;
color: #FFFFFF;
margin-top: 5px;
margin-bottom: 25px;
`