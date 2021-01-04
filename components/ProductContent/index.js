import React from 'react'
import { Button } from '../globalStyles'
import {
    ProductContainer,
    ProductImg,
    Producth1,
    ProductPos,
    ProductLink,
    ProductOverlay
} from './style';


const ProductContent = ({ title, source, btndecs }) => {
    return (
        <>
            <ProductContainer>
                <ProductLink href='/Product-Page'>
                    <ProductImg src={source} ></ProductImg>
                    <ProductOverlay></ProductOverlay>
                </ProductLink>
                <ProductPos>
                    <Producth1>{title}</Producth1>
                    <ProductLink href='/Product-Page'><Button>{btndecs}</Button></ProductLink>
                </ProductPos>
            </ProductContainer>
        </>
    )
}

export default ProductContent
