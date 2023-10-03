import OpcoesFooter from '../FooterOptions'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HeaderContainer = styled.header`
    background-color: #282c34;
    display: flex;
    justify-content: center;
    width: 100%;
    
`

function Footer() {
    return (
        <HeaderContainer>
            <Link to="/">
              
            </Link>
            <OpcoesFooter/>
            
        </HeaderContainer>
    )
}

export default Footer