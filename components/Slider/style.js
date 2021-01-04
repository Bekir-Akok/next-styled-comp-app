import styled from 'styled-components'
import Image from 'next/image';

const StyledImg = styled(Image)`
`;

export const ProductImg = ({ src }) => {
    return (
      <StyledImg src={src} layout="fill" objectFit="cover" objectPosition="center"/>
      
    );
 };


export const ProductSlider = styled.div`
position:relative;
height:80vh;
@media screen and (max-width:960px) {
      height:60vh;
 }
`;


 export const ProductContainer = styled.div`
 padding:100px 0;
 z-index:998;
 width:80%;
 position:absolute;
 top:50%;
 left:50%;
 transform: translate(-50% , -50%);
 @media screen and (max-width:568px) {
      width:100%;
 }
 `;

 export const ProductWrapper = styled.div`
 margin: 0 auto ;
 width: 100%;
 display:flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 `;

 export const Producth3 = styled.h3`
 font-size: 30px;
 color: #fff;
 font-weight:300;
 
 @media screen and (max-width:960px) {
       font-size: 25px;
 }
 @media screen and (max-width:568px) {
      font-size: 18px;
 }
 `;

 export const Producth1 = styled.h1`
 font-size: 50px;
 font-weight:900;
 color:#fff;
 margin-bottom: 30px;

 @media screen and (max-width:960px) {
       font-size: 40px;
       margin-bottom:10px;
 }
 @media screen and (max-width:768px) {
       font-size: 30px;
       margin-bottom:10px;
 }
 @media screen and (max-width:568px) {
      font-size: 20px;
 }
 `;

 export const ButtonContainer = styled.div`
 display:flex;
 @media screen and (max-width:568px) {
      flex-direction:column;
      align-items:center;
      justify-content:center;
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

&:hover{
    background: #fff;
    transition:all .6s ease-in; 
    color: #000;
    border:1px solid #000;
}

@media screen and (max-width:568px) {
      margin-bottom:15px;
      font-size: 12px;
      width: 180px;
 }
`;