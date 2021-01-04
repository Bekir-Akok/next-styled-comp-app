import styled from 'styled-components';

export const ModulesIcons = styled.div`
display:flex;
justify-content:space-around;
align-items:center;
height: 250px;

@media screen and (max-width:768px) {
    flex-direction:column;
    height: 300px;
}
`;

export const Module = styled.div`
display:flex;
flex-direction: column;
align-items: center;
`;

export const Moduleh1 = styled.h1`
font-size: 12px;
font-weight: 1000;
color: #000;
`;

export const ModuleIcon = styled.p`
font-size: 40px;
`;