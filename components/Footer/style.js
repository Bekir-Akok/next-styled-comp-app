import styled from 'styled-components';
import NextLink from 'next/link';


export const FooterContainer = styled.div`
padding: 80px 0 10px 0;
background: #ececec;
z-index:998;
`;

export const FooterWrapper = styled.div`
margin:0 auto;
width: 80%;
max-width:1200px;
@media screen and (max-width:960px ){
   width:100%;
   margin:0;
}
`;

export const FooterNews = styled.div`
border-bottom:1px solid rgba(7,7,7, 0.2);
@media screen and (max-width:768px) {
   padding: 0px;
}
`;

export const Footerh1 = styled.h1`
font-size:26px;
font-weight:700;
color:#000;
margin-bottom:10px;
`;

export const FooterSubs = styled.div`
display:flex;
margin-bottom: 20px;

@media screen and (max-width:768px) {
   flex-wrap:wrap;
   justify-content:center;
   align-items:center;
}
`;

export const FooterInp = styled.input`
width:240px;
height:44px;
background-color:#000;
color:#fff;
padding: 5px;
margin-left:1px;

@media screen and (max-width:768px){
   width:100%;
   background: transparent;
   color: #000;
   margin-bottom: 20px;
   border: 1px solid #000;
}
`;

export const FooterBtn = styled.button`
color:#000;
width:240px;
background-color:#fff;
border-radius:50px;
outline:none;
border:1px solid #000;
position:relative;
left:-20px;

&:hover{
    background-color:#000;
    transition:all .5s ease;
    color:#fff;
    border:1.5px solid grey;
}

@media screen and (max-width:768px){
   width:100%;
   left: 0;
   height: 40px;
}
`;

export const FooterP = styled.p`
font-size:14px;
margin-bottom:40px;
color:#070707;
`;

export const FooterNav = styled.div`
display:flex;
margin-top: 50px;
margin-bottom: 30px;
@media screen and (max-width:576px) {
   flex-direction: column;
   align-items:flex-start;
   justify-content:flex-start;
}
`;

export const FooterTitle = styled.div`
display:flex;
flex-direction:column;
margin-right:200px;


@media screen and (max-width:768px) {
   margin-right:50px;
}
`;

export const FooterPay = styled.div`
display:flex;
`;

export const FooterIcon = styled.a`
color:#2b2b2b;
font-size: 45px;
margin-right: 20px;
`;

export const FooterCopy = styled.h3`
font-size:18px;
color: #2b2b2b;
font-weight: 100;
margin-top: 50px;
`;

const StyledbarLink = styled.a`
text-decoration:none;
font-size:14px;
margin-bottom: 15px;
color:#666;

&:hover{
   text-decoration:underline;
}
`;

export const MenuLink = ({ href, children }) => {
    return (
       <NextLink passHref href={href}>
          <StyledbarLink>{children}</StyledbarLink>
       </NextLink>
    );
 };