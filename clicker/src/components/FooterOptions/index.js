import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Opcao = styled.li`
    font-size: 16px;
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
   


`

const textoOpcoes = ['Inventario', 'Loja', 'Heróis','Melhorias']

function OpcoesFooter() {
    return (
        
            <Opcoes>
                
                { textoOpcoes.map( (texto) => (
                   <Caixa> <Link to ={`/${texto.toLowerCase()}`}><Opcao><p>{texto}</p></Opcao></Link></Caixa>
                ) ) }
            </Opcoes>
      
    )
}

export default OpcoesFooter