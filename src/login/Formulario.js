import styled from "styled-components"
import { useState } from "react";
import {Link, NavLink, useNavigate} from 'react-router-dom'
import axios from 'axios';
import Cadastro from "./LinkCadastro";



export default function Formulario() {
    const [form, setForm] = useState({
        email: '',
        password: ''
    });
    const [link, setLink] = useState("");
    const [disabled, setDisabled] = useState(false);
    const navigate = useNavigate()

    function fazerLogin (event) {
        const login = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', form);
        event.preventDefault();
        setDisabled(true);
        login.then(completeLogin);
        login.catch(checkError);
        };

    return (
        <Formu onSubmit={fazerLogin}>
                <Campo type="text" name="email" placeholder="E-mail" value={form.email} onChange={handleForm} disabled={disabled}/>
                <Campo type="password" name="password" placeholder="Senha" value={form.password} onChange={handleForm} disabled={disabled}/>
                <Entrar disabled={disabled}>ENTRAR</Entrar>
                <Cadastro/>
        </Formu>
    )

    function handleForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    function completeLogin(response) {
        setDisabled(false);
        navigate("/hoje");
        console.log(response);
    }

    function checkError(error) {
        alert("O usuário e/ou a senha está(ão) incorreto(s)");
        setDisabled(false);
    }

}

const Formu = styled.form`
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
width: 299px;
height: 52px;
margin-bottom: 16px;
padding-left: 10px;
::placeholder {
    color: #7E7E7E;
}

`

const Entrar = styled.button`
font-family: 'Roboto', sans-serif;
font-size: 14px;
background-color: #FF4791;
border: none;
border: 1px solid #FF4791;
border-radius: 5px;
width: 313px;
height: 45px;
color: #FFFFFF;
margin-top: 5px;
margin-bottom: 25px;
`