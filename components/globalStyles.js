import styled, { createGlobalStyle } from 'styled-components' 

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin:0;
    padding:0;
    font-family: 'Source Sans Pro', sans-serif ;
    overflow-x:hidden;
}
`;

export const Container = styled.div`
padding: 0 5%;

@media screen and (max-width:960px ){
    padding:0;
}
`;

export const Button = styled.button`
background-color:transparent;
border:1px solid #fff;
color:#fff;
padding: 5px;
border-radius: 50px;
box-sizing: border-box;
font-size: 15px; 
width:240px;
height:40px;
margin-right: 10px;
display:flex;
align-items:center;
justify-content: center;
outline:none;

&:hover{
    background: #fff;
    transition:all .6s ease-in; 
    color: #000;
    border:1px solid #000;
}
`;

export default GlobalStyle