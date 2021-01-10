import styled from 'styled-components';
import Image from 'next/image'

export const ProductFlex = styled.div`
display:flex ;
align-items:center;
justify-content: flex-start;
`;

export const ProductInfo = styled.div`
display:flex;
flex-direction: column;
align-items:flex-start ; 
justify-content:flex-start ; 
`;

export const ProductTitle = styled.h1`
font-size: 26px;
font-weight: 900;
color: #000;
`;

export const ProductPrice = styled.h2`
font-size: 22px;
font-weight: 700;
color: #666;
`;


const StyledImg = styled(Image)`
`;

export const ProductImage = ({ img }) => {
    return (
      <StyledImg src={img} width={450} height={450} />
      
    );
 };