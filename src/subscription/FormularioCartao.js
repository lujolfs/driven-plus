import styled from "styled-components"
import { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import Modal from 'react-modal'



export default function FormularioCartao(props) {
    const { perks, name, price } = props
    const  auth  = localStorage.getItem("token")
    const navigate = useNavigate()
    const [showModal, setShowModal] = useState(false)
    const [disabled, setDisabled] = useState(false);
    const [form, setForm] = useState({
        membershipId: perks[0].membershipId,
        cardName: '',
        cardNumber: '',
        securityNumber: '',
        expirationDate: '',
    });
    const config = {
        headers: {
            "Authorization": `Bearer ${auth}`
        }
    }

    function enviaCartao(event) {
        const cartao = axios.post('https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions', form, config);
        event.preventDefault();
        setDisabled(true);
        cartao.then(completeCartao);
        cartao.catch(checkError);
    };

    function ligaModal() {
        setShowModal(true);
        console.log("foi")
    }

    return (
        <>
{/*             <Modal isOpen={showModal} ariaHideApp={false}
                style={{
                    overlay: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.75)',
                    },
                    content: {
                        width: 248,
                        height: 210,
                        fontFamily: 'Roboto',
                        fontSize: 18,
                        fontWeight: 700,
                        borderRadius: 12,
                        position: 'absolute',
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                    },
                }}>
                <span>Tem certeza de que deseja assinar o plano {name} (R$ {price})? </span>
                <br />
                <button>Não</button>
                <button>SIM</button>
            </Modal> */}
            <Formu>
                <Campo type="text" name="cardName" placeholder="Nome impresso no cartão" value={form.cardName} onChange={handleForm} disabled={disabled} />
                <Campo type="text" name="cardNumber" placeholder="Dígitos do cartão" value={form.cardNumber} onChange={handleForm} disabled={disabled} />
                <Metade>
                    <Campo2 type="password" name="securityNumber" placeholder="Código de Segurança" value={form.securityNumber} onChange={handleForm} disabled={disabled} />
                    <Campo2 type="text" name="expirationDate" placeholder="Validade" value={form.expirationDate} onChange={handleForm} disabled={disabled} />
                </Metade>
                <Entrar disabled={disabled} onClick={() => ligaModal()}>ASSINAR</Entrar>
            </Formu>
        </>
    )

    function handleForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    function completeCartao(responde) {
        setDisabled(false);
        alert("Deu bom!");
        navigate("/home");
    }

    function checkError() {
        setDisabled(false)
        alert("Os dados inseridos são inválidos.");
        console.log(form);
        setForm({
            membershipId: perks[0].membershipId,
            cardName: '',
            cardNumber: '',
            securityNumber: '',
            expirationDate: '',
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