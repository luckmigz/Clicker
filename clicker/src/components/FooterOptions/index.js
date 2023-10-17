import { Link } from 'react-router-dom'
import styled from 'styled-components'



const Opcao = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
    color: white;
    font-weight: bold;
`

const Opcoes = styled.ul`
    display: flex;
    
`
const Caixa = styled.div`
    width: 200px;
    height: 100px;
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    align-self: center;

`

const textoOpcoes = [{id: 1, name: "Invetario", link: "inventory"},{id: 2, name: "Loja", link: "shop"},{id: 3, name: "Heróis", link: "hero"},{id: 4, name: "Melhorias", link:"upgrades"}]


function OpcoesFooter() {

    return (
        
        <Opcoes>
            
            { textoOpcoes.map( ({id,name,link}) => (
                <Caixa> <Link to ={`/${link}`}><Opcao><p>{name}</p></Opcao></Link></Caixa>
            ) ) }
        </Opcoes>
      
    )
}

export default OpcoesFooter