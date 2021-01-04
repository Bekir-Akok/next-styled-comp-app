import styled from 'styled-components';
import Image from 'next/image';


export const ProductContainer = styled.div`
display:flex;
align-items:center;
margin: 0 20px 20px 20px;
flex-direction: ${({flex}) => (flex ? 'row-reverse' : 'row')};

@media screen and (max-width:960px) {
    flex-direction: column-reverse;
    justify-content:center;
    width:100%;
}
`;

export const ProductText = styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;
justify-content:flex-start;
`;

export const Productp =styled.p`
font-size:14px;
font-weight: 100;
color:red;


@media screen and (max-width:576px) {
    font-size: 10px;
}
`;

export const Producth1 = styled.h1`
font-size: 50px;
font-weight: 900;
color:#000; 


@media screen and (max-width:576px) {
    font-size: 30px;
}
`;

export const Productli =styled.li` 
list-style: circle;
color:#666;
font-size: 20px;
margin-bottom: 5px;


@media screen and (max-width:576px) {
    font-size: 16px;
}
`;

export const ProductPrice = styled.h2`
font-size:22px;
color:#666;
margin: 15px;


@media screen and (max-width:576px) {
    font-size: 18px;
}
`;

export const ProductButtons = styled.div`
display:flex;
align-items:center;

@media screen and (max-width:960px) {
    flex-wrap:wrap;
    width:100%;
}
`;

export const ProductBtn1 = styled.button`
background-color:#000;
border:1px solid #fff;
color:#fff;
padding: 5px;
border-radius: 50px;
box-sizing: border-box;
font-size: 15px; 
width:220px;
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

@media screen and (max-width:960px) {
    width:100%;
    margin-bottom: 10px;
}
`;

export const ProductBtn2 = styled.button`
background-color:transparent;
border:1px solid #000;
color:#000;
padding: 5px;
border-radius: 50px;
box-sizing: border-box;
font-size: 15px; 
width:220px;
height:40px;
margin-right: 10px;
display:flex;
align-items:center;
justify-content: center;
outline:none;

&:hover{
    background: #000;
    transition:all .6s ease-in; 
    color: #fff;
    border:1px solid #000;
}

@media screen and (max-width:960px) {
    width:100%;
}
`;

const StyledImg = styled(Image)`
`;

export const ProductImg = ({ src }) => {
    return (
      <StyledImg src={src} width={450} height={450} />
      
    );
 };

const StyledbarLink = styled.a`
`;

export const ProductLink = ({ href, children }) => {
    return (
       <NextLink passHref href={href}>
          <StyledbarLink>{children}</StyledbarLink>
       </NextLink>
    );
 };