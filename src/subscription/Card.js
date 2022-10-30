import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Card(props) {
    const { id, img, price, logo, config } = props
    const priceReplace = price.replace('.', ',');

    return (
        <Link to={`/subscriptions/memberships/${id}`} style={{ textDecoration: 'none' }} state={ {img , priceReplace, config}} >
            <CardContainer >
                <Logo src={img} onError={logo}/>
                <Price>R$ {priceReplace}</Price>
            </CardContainer>
        </Link>
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
a {
text-decoration: none;
}
`


const Logo = styled.img`
height: 95px;
width: 140px;
`

