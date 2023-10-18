import { Link } from 'react-router-dom'
import styled from 'styled-components'

const px2vw = (size, width = 1440) => `${(size/width)*100}vw`;

const Opcao = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: ${px2vw(50)};
    margin: 0;
    padding: 0;
    cursor: pointer;
    min-width: 120px;
    color: white;
    font-weight: bold;

    font-size: ${px2vw(18)};

    @media (min-width: 640px){
        font-size: ${px2vw(20)};
      
    }

`

const Opcoes = styled.ul`
    display: flex;
    
`
const Caixa = styled.div`
    width: ${px2vw(200)};
    min-height: ${px2vw(50)};
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    align-self: center;
    positions: relative;
    

    @media (min-width: 640px){
        min-width: ${px2vw(10)};
      
    }
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