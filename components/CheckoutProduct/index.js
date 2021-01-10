import React from 'react'
import {
    ProductFlex, 
    ProductImage, 
    ProductInfo, 
    ProductTitle,
    ProductPrice,
} from './style';

const CheckoutProduct = ({img, origin, price,}) => {
    return (
        <>
            <ProductFlex>
                <ProductImage src={img} />
                <ProductInfo>
                    <ProductTitle>{origin}</ProductTitle>
                    <ProductPrice> {price}</ProductPrice>
                </ProductInfo>
            </ProductFlex>
        </>
    )
}

export default CheckoutProduct
