import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import styled from "styled-components";
import Container from "../Container";
import axios from "axios";


export default function Planos(props) {
    
    const { planoId } = useParams()
    const promise = axios.get(`https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${planoId}`)

    useEffect(() => {
        promise.then(res => {
            console.log(res)
        });
    
        promise.catch(erro => {
            console.log(erro.response.data)
        });
    
    }, []);

    return (
        <Container>
            
        </Container>
    )
}