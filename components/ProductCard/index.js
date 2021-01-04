import React from 'react'
import {
    CardItem,
    CardImg,
    CardText,
    CardName,
    CardPrice,
    CardYear,
    CardImgOverlay,
    CardImgItem,
    CardOverlay
} from './style';

const ProductCard = ({ name, price, img }) => {
    return (
        <CardItem>
            <CardImgItem href="/Product-Page">
                <CardOverlay>
                    <CardImg src={img} ></CardImg>
                    <CardImgOverlay></CardImgOverlay>
                </CardOverlay>
            </CardImgItem>
            <CardText>
                <CardName href="/Product-Page">{name}</CardName>
                <CardPrice href="/Product-Page">{price}</CardPrice>
            </CardText>
            <CardYear>2021</CardYear>
        </CardItem>
    )
}

export default ProductCard
