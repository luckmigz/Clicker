import styled from 'styled-components'
import { Link } from 'react-router-dom'
import craft from '../../images/craft.png'

const SideNav = styled.div`
    position: absolute;
    left: auto;
    top: 50%;
    padding: 15px;
    width: 100px;
    text-decoration: none;
    font-size: 20px;
    color: white;
    border-radius: 0 5px 5px 0;
    border: 1px solid black;
    margin: 10px;
    background-color: white;
    display: flex;
    font-weight: bold;
    justify-content: center;
    align-items: center;
    text-align: center;
`

function Side() {
    return (
        <SideNav>
            <Link to="/"><p>Criação</p></Link>
            
            
        </SideNav>
    )
}

export default Side