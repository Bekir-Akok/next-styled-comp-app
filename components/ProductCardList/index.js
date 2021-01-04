import React from 'react'
import { ProductOne, ProductFour, ProductTheree,  ProductTwo } from './_Data';
import ProductCard from '../ProductCard/index'
import {
    CardContainer,
    Cardh1,
    CardItems,
} from './style'


const ProductCardList = () => {
    return (
        <CardContainer>
            <Cardh1>XMAS DEAL</Cardh1>
            <CardItems>
                <ProductCard {...ProductOne} />
                <ProductCard {...ProductTwo} />
                <ProductCard {...ProductTheree} />
                <ProductCard {...ProductFour} />
            </CardItems>
        </CardContainer>
    )
}

export default ProductCardList
