import React from 'react'
import ProductPageItem from '../ProductPageItem/index';
import {ProductWrapper} from './style';
import {ProductOne, ProductTwo, ProductFive, ProductFour, ProductTheree} from './_Data';

const ProductPageList = () => {
    return (
        <ProductWrapper>
            <ProductPageItem {...ProductOne} />
            <ProductPageItem {...ProductTwo} />
            <ProductPageItem {...ProductTheree} />
            <ProductPageItem {...ProductFour} />
            <ProductPageItem {...ProductFive} />
        </ProductWrapper>
    )
}

export default ProductPageList
