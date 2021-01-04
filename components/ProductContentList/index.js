import React from 'react'
import ProductContent from '../ProductContent/index'
import {ProductOne, ProductTwo, ProductTheree, ProductFour} from './_Data';
import {ProductFlex} from './style';

const ProductContentList = () => {
    return (
        <ProductFlex>
            <ProductContent {...ProductOne} />
            <ProductContent {...ProductTwo} />
            <ProductContent {...ProductTheree} />
            <ProductContent {...ProductFour} />
        </ProductFlex>
    )
}

export default ProductContentList
