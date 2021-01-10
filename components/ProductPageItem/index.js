import React from 'react'
import {useStateValue} from '../ContextApi/StateProvider'
import {
    ProductContainer,
    ProductText,
    Productp,
    Producth1,
    Productli,
    ProductPrice,
    ProductButtons,
    ProductBtn1,
    ProductBtn2,
    ProductImg
} from './style';



const ProductItem = ({id, origin, li1, li2, li3,li4,price,img, flex }) => {

    const [ {basket}, dispatch] = useStateValue();
    
    
    const addToBasket = () => {
         dispatch({
             type:'ADD_TOO_BASKET',
             item: {
                 id:id,
                 price:price,
                 origin:origin,
                 img:img,
             },
         })
    }

    return (
        <>
            <ProductContainer flex={flex}>
                <ProductText>
                    <Productp>NEW</Productp>
                    <Producth1>{origin}</Producth1>
                    <Productli>{li1}</Productli>
                    <Productli>{li2}</Productli>
                    <Productli>{li3}</Productli>
                    <Productli>{li4}</Productli>
                    <ProductPrice>{price}</ProductPrice>
                    <ProductButtons>
                        <ProductBtn1 onClick={addToBasket} >Buy Now</ProductBtn1>
                        <ProductBtn2>View</ProductBtn2>
                    </ProductButtons>
                </ProductText>
                <ProductImg src={img}></ProductImg>
            </ProductContainer>
        </>
    )
}

export default ProductItem
