import styled from 'styled-components';

export const CardContainer = styled.div`
width:100%;
`;

export const Cardh1 = styled.h1`
font-size: 22px;
color: #000;
margin: 30px 0 ;
`;

export const CardItems = styled.div`
display:flex;
align-items:center;

@media screen and (max-width:960px ){
    flex-wrap: wrap;
}
`;