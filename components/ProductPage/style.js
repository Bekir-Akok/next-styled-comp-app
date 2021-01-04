import styled from 'styled-components';

export const TextD =styled.div`
position:fixed;
top: 50%;
left: 2%;
transform: translate(-50% , -2%);
height: 400px;
width:400px;
z-index: -1;

@media screen and (max-width:1200px) {
    display: none;
}
`;

export const Text =styled.h1`
font-size: 24px;
color: #000;
font-weight: 900;
transform: rotate(-90deg);
`;