import styled from "styled-components"
import {Link} from 'react-router-dom'

export default function PossuiCadastro() {
    return (
        <Link to={`/`}>
        <LinkCadastro>
            Já possui uma conta? Entre
        </LinkCadastro>
        </Link>
    )

}

const LinkCadastro = styled.div`
color: #FFFFFF;
font-size: 14px;
font-weight: 400;
text-decoration-line: underline;
`