import styled from 'styled-components';
import Image from 'next/image'; 

export const CircleContainer = styled.div`
background:#d2d2d229;
width:100%;
height: 120px;
margin-top: 60px;
display:flex;
justify-content:space-around;
overflow-x:visible;

@media screen and (max-width:960px) {
    
    justify-content:space-between;
}
`;

export const CircleWrapper = styled.div`
display: flex;
align-items:center;
justify-content:center;
flex-direction: column;

@media screen and (max-width:960px) {
    min-width: 33%;
    margin-right: 30px;
}
`;

export const CircleText = styled.p`
font-size: 14px;
font-weight: 100;
color:#666 ;

@media screen and (max-width:960px) {
    font-size: 12px;
}
`;

const StyledImg = styled(Image)`
`;

export const CircleImg = ({ src }) => {
    return (
      <StyledImg src={src} width={40} height={76} />
      
    );
 };

 export const CircleImg1 = ({ src }) => {
    return (
      <StyledImg src={src} width={100} height={76} />
      
    );
 };