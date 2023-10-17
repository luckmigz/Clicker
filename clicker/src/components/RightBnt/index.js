import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useState} from 'react'


const px2vw = (size, width = 1440) => `${((size/width)*100)/2}%`;


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

    top: ${px2vw(1440)};

    @media (min-width: 640px) {
        top: ${px2vw(640)};
        
      }
    
      @media (min-width: 1024px) {
        top: ${px2vw(1416)};
        
      }

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