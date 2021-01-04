import styled from 'styled-components';
import Image from 'next/image';
import NextLink from 'next/link'


export const CardItem = styled.div`
width:25%;
margin-right: 5px;
margin-bottom: 20px;


@media screen and (max-width:960px ){
   width:49%;
}
@media screen and (max-width:576px ){
   width:100%;
   margin:0 5px;
}
`;

const StyledImg = styled(Image)`
`;

export const CardImg = ({ src }) => {
    return (
          <StyledImg src={src} width={600} height={713}>
                
          </StyledImg>
    );
 };


 export const CardOverlay = styled.div`
 position: relative;
 `;

const CardLink = styled.a`
 `;

 export const CardImgItem = ({ href, children }) => {
   return (
      <NextLink passHref href={href}>
         <CardLink>{children}</CardLink>
      </NextLink>
   );
};

 export const CardImgOverlay = styled.div`
 position:absolute;
 width:100%;
 height: 100%;
 top: 0;
 &:hover{
    background-color: rgba(255,255,255, 0.2);
 }
 `;

 export const CardText = styled.div`
 display:flex;
 justify-content: space-between;
 align-items:center;
 `;

const StyledbarLink = styled.a`
text-decoration:none;
font-size:15px;
font-weight: 700;
color:#000;
margin-bottom: 5px;
`;

export const CardName = ({ href, children }) => {
    return (
       <NextLink passHref href={href}>
          <StyledbarLink>{children}</StyledbarLink>
       </NextLink>
    );
 };

 export const CardPrice = ({ href, children }) => {
    return (
       <NextLink passHref href={href}>
          <StyledbarLink>{children}</StyledbarLink>
       </NextLink>
    );
 };

 export const CardYear = styled.p`
 font-size: 14px;
 color:#666;
 `;