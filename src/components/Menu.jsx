import styled from "styled-components"
import logo from '../images/yt.png'

const Container=styled.div`
flex: 1;
background-color: #202020;
color: white;
height: 100vh;
font-size: 14px;
`
const Wrapper=styled.div`
padding:18px 26px;
`
const Logo=styled.div`
display: flex;
align-items: center;
font-weight: bold;
margin-bottom: 25px;
`
const Img=styled.img`
height: 50px;
`

const Menu = () => {
  return (
    <Container>
        <Wrapper>
            <Logo>
                <Img src={logo} />
                HediTube
            </Logo>
        </Wrapper>
    </Container>
  )
}

export default Menu