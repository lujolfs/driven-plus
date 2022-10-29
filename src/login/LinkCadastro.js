import styled from "styled-components"
import {Link} from 'react-router-dom'

export default function LinkCadastro() {
    return (
        <Link to={`/sign-up`}>
        <UrlCadastro>
            Não possui uma conta? Cadastre-se
        </UrlCadastro>
        </Link>
    )

}

const UrlCadastro = styled.div`
color: #FFFFFF;
font-size: 14px;
font-weight: 400;
text-decoration-line: underline;
`