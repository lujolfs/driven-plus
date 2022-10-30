import styled from "styled-components";


export default function Perk(props) {
    const { perks, index } = props


    return (
        <Container>
            {index+1}. {perks.title}
        </Container>
    )
}

const Container = styled.div`
font-size: 14px;
font-weight: 400;
color: #FFFFFF;
display: flex;
width: 80%;
padding-left: 10px;
`