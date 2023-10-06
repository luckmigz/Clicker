import styled from 'styled-components'
import { Link } from 'react-router-dom'
//import craft from '../../images/craft.png'
import { useState } from 'react';

const SideNav = styled.button`
    position: absolute;  
    padding: 15px;
    width: 100px;
    left: 0; 
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


function LeftBnt() {
    var [ buttontTxt , setBtnTxt] = useState('Click');
    console.log(buttontTxt); 
    var url = window.location.href;
    if(url.includes('/crafting')){
        setBtnTxt = 'Home';
        buttontTxt = ' ';
    }else{
        setBtnTxt = 'Criação';
        buttontTxt = 'crafting';
    }
     

    return( 
        <SideNav>
           <Link to ={`/${buttontTxt.toLowerCase()}`}>{setBtnTxt}</Link>
            
        </SideNav>
    )
}

export default LeftBnt