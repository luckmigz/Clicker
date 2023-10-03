import styled from 'styled-components'
import { Link } from 'react-router-dom'


const SideNav = styled.button`
    position: absolute;  
    padding: 15px;
    width: 100px;
    right: 0;
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
 

function AdvBtn() {
    if(document.URL.includes("/")){
      var a = "Aventura";
    }else{
        a = "Home";
    }
    return( 
        <SideNav>
           <Link to ={`/${a.toLowerCase()}`}>{a}</Link>
            
            
        </SideNav>
    )
}

export default AdvBtn