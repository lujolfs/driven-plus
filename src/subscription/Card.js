import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";

export default function Card(props) {
    const { id, img, price } = props
    const priceReplace = price.replace('.', ',');

    return (
        <CardContainer>
            <Logo src={img} />
            <Price>R$ {priceReplace}</Price>
        </CardContainer>
    )
}



const CardContainer = styled.div`
height: 180px;
width: 290px;
border: 3px solid #7E7E7E;
border-radius: 12px;
display: flex;
align-items: center;
justify-content: space-around;
color: #FFFFFF;
font-size: 24px;
`


const Price = styled.div`

`


const Logo = styled.img`
height: 95px;
width: 140px;
`

