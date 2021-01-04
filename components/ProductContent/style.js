import styled from 'styled-components';
import Image from 'next/image';
import NextLink from 'next/link'

export const ProductContainer = styled.div`
width:49%;
margin-right: 5px;
position: relative;

@media screen and (max-width:960px ){
   width:100%;
   margin:0;
}
`;


const StyledImg = styled(Image)`
position: relative;
`;

export const ProductImg = ({ src }) => {
    return (
          <StyledImg src={src} width={1249} height={820}>
                
          </StyledImg>
    );
 };

 export const Producth1 = styled.h1`
 font-size: 45px;
 font-weight: 900;
 color: #fff;
 margin-bottom: 10px;
 `;

 export const ProductPos = styled.div`
 position: absolute;
 width:100%;
 top:50%;
 left: 50%;
 transform: translate(-50% , -50%);
 display:flex;
 flex-direction: column;
 align-items: center;
 justify-content:center;
 `;


const StyledbarLink = styled.a`
text-decoration:none;

`;

export const ProductLink = ({ href, children }) => {
    return (
       <NextLink passHref href={href}>
          <StyledbarLink>{children}</StyledbarLink>
       </NextLink>
    );
 };

 export const ProductOverlay = styled.div`
 width: 100%;
 height: 100%;
 position: absolute;
 top: 0;
 left:0;

 &:hover{
    background: rgba(255,255,255 , 0.2);
    transition: all .5s ease;
 }
 `;
