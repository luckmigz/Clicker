import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useState} from 'react'

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
    var [ buttontTxt , setBtnTxt] = useState('Click');
     
    var url = window.location.href;
    if(url.includes('/explore')){
        setBtnTxt = 'Home';
        buttontTxt = ' ';
    }else{
        setBtnTxt = 'Aventura';
        buttontTxt = 'explore';
    }
     

    return( 
        <SideNav>
           <Link to ={`/${buttontTxt.toLowerCase()}`}>{setBtnTxt}</Link>
            
        </SideNav>
    )
}

export default AdvBtn