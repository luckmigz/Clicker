import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer';
import Home from './routes/Home';
import Crafting from './routes/Crafting';
import Adventure from './routes/Adventure';
import Inventory from './routes/Inventory';
import Heros from './routes/Heros';
import Shop from './routes/Shop';
import Upgrades from './routes/Upgrades';




const GlobalStyle = createGlobalStyle`
  * {
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
  } 



  body {
    
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: black;
    min-width: 640px;
    ovewflow: hidden;
    
    

  }
  


  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
  li{
    list-style: none;
  }
  
`


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Header /> 
      
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/crafting" element = {<Crafting/>} /> 
        <Route path = "/explore" element = {<Adventure/>} /> 
        <Route path = "/inventory" element = {<Inventory/>} /> 
        <Route path = "/hero" element = {<Heros/>} /> 
        <Route path = "/shop" element = {<Shop/>} /> 
        <Route path = "/upgrades" element = {<Upgrades/>} /> 


      </Routes>
      <Footer />
    </BrowserRouter>
    
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();