import styled from "styled-components";
import Perk from "./Perk"
import { useState } from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";



export default function Beneficios(props) {
    const { perks } = props


    return (
        <>
        <Perks>
            {perks.map((perks, index) =>
          (
            <Perk
            perks={perks}
            index={index}
            key={index}
            />
          ))}
        </Perks>
        </>
    )
}

const Perks = styled.div`
font-size: 32px;
font-weight: 700;
color: #FFFFFF;
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
`

const Preco = styled.div`
font-size: 32px;
font-weight: 700;
color: #FFFFFF;
display: flex;
flex-direction: column;
`