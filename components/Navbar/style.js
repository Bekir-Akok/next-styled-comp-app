import styled from 'styled-components';
import NextLink from 'next/link'

export const NavFlex = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
background: rgba(7,7,7, .9);
width:100%;
height: 60px;
padding: 10px 30px;
box-sizing:border-box;
position:fixed;
top:0;
z-index:999;
overflow:hidden;
`;

export const NavLogo= styled.div`
display:flex;
align-items:center;
`;

export const BeRide= styled.h1`
font-size: 20px;
color:#fff;

@media screen and (max-width:960px) {
   display:none;
}
`;

export const BeRide1= styled.h1`
font-size: 20px;
color:#fff;
`;

export const NavMenu = styled.div`
display:flex;

@media screen and (max-width:960px) {
   display:none;
}
`;

export const MenuP = styled.p`
font-size:16px;
margin-left:30px;
color:#fff;

&:hover{
   color: #e7e7e7;
   border-bottom: 1px solid #e7e7e7;
   transition: all .5s ease;
}
`;

export const NavIcons = styled.div`
display:flex;
align-items:center;
justify-content:flex-start;
`;


export const MenuIcon = styled.p`
font-size:25px;
color:#fff;
margin-right:30px;
display: flex;
align-items: center;

@media screen and (max-width:578px) {
   margin-right:5px;
}
`;

const StyledbarLink = styled.a`
text-decoration:none;
font-size:40px;
color:red;

@media screen and (max-width:578px) {
   font-size: 35px;
}
`;

export const MenuLink = ({ href, children }) => {
    return (
       <NextLink passHref href={href}>
          <StyledbarLink>{children}</StyledbarLink>
       </NextLink>
    );
 };

 export const DropMenu = styled.div`
 color: #fff;
 font-size: 30px;
 display:none;

 &:hover{
    color: rgba(255,255,255, 0.7);
 }

@media screen and (max-width:960px) {
   display:block;
}
 `;

export const DropDown = styled.div`
display:none;

@media screen and (max-width:960px) {
position:fixed;
top:0;
left: ${({click}) => (click ? 0 : '-100%')};
width:100%;
height: 120vh;
background: #000;
padding: 15px 20px;
box-sizing:border-box;
display:block;
transition:all .5s ease-in-out;
}
`;

export const DropUp =styled.div`
display:flex;
justify-content: space-between;
align-items:center;
`;

export const DropUl =styled.ul`
display:flex;
align-items:center;
justify-content:center;
text-align:center;
flex-direction:column;
margin-top:60px;
`;

export const DropLi =styled.li`
font-size:22px;
font-weight:100;
color:#fff;
list-style:none;
margin: 30px 0;

&:hover{
transform: scale(1.2);
transition:all .2s;
color: red;
}

@media screen and (max-width:576px){
   margin: 10px 0; 
}
`;

export const Line = styled.div`
border-bottom:1px solid red;
margin: 20px 0;
width:100%;
`;