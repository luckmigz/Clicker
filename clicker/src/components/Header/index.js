
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HeaderContainer = styled.header`
    background-color: #282c34;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 10px;
    

`
const Coins = styled.label`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    min-width: 120px;
    color: white;
    font-weight: bold;
`
const Home = styled.button`
    font-size: 16px;
    text-align: left;
    justify-content: flex-start;
    color: black;
    font-weight: bold;

`

function Header() {
    return (
        <HeaderContainer>
            <Link to="/">
              <Home >Home</Home>
            </Link>
           <Coins>Moedas: 0 </Coins>
            
        </HeaderContainer>
    )
}

export default Header