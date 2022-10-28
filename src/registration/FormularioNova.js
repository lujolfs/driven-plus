import styled from "styled-components";
import { useState } from "react";
import axios from 'axios';
import PossuiCadastro from "./PossuiCadastro";

export default function FormularioNova() {
    const [form, setForm] = useState({
        email: '',
        name: '',
        cpf: '',
        password: ''
    });
    const [disabled, setDisabled] = useState(false)

    function fazerCadastro (event) {
        console.log(form);
        const envio = axios.post('https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up', form);
        event.preventDefault();
        setDisabled(true);
        envio.then(checkPost);
        envio.catch(checkError);
        };

    return (
        <Formu onSubmit={fazerCadastro}>
                <Campo type="text" name="name" placeholder="Nome" value={form.name} onChange={handleForm} disabled={disabled}/>
                <Campo type="text" name="cpf" placeholder="CPF" value={form.cpf} onChange={handleForm} disabled={disabled}/>
                <Campo type="text" name="email" placeholder="E-mail" value={form.email} onChange={handleForm} disabled={disabled}/>
                <Campo type="password" name="password" placeholder="Senha" value={form.password} onChange={handleForm} disabled={disabled}/>
                <Entrar>Cadastrar</Entrar>
                <PossuiCadastro/>
        </Formu>
    )

    function handleForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    function checkPost() {
        setDisabled(false);
    }

    function checkError() {
        setDisabled(false);
        setForm({
            name: '',
            cpf: '',
            email: '',
            password: ''
        })
    }

}

const Formu = styled.form`
display: flex;
flex-direction: column;
align-items: center;
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