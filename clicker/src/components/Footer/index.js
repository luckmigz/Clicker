import OpcoesFooter from '../FooterOptions'
import styled from 'styled-components'





const HeaderContainer = styled.footer`
    background-color: #282c34;
    display: flex;
    width: auto;
    height: 100%;
    padding: 10px;
    position: sticky;
    

`

function Footer() {
    return (
        <HeaderContainer>
           <OpcoesFooter/>
        </HeaderContainer>
    )
}

export default Footer