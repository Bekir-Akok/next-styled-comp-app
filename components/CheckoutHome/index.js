import React from 'react'
import CheckoutProduct from '../CheckoutProduct/index'
import {useStateValue} from '../ContextApi/StateProvider';
import {Checkouth1, CheckoutList} from './style'


const Checkout = () => {

    const [ {basket }, dispatch] = useStateValue();

    return (
        <>
            <Checkouth1>Your Basket</Checkouth1>
            <CheckoutList>
                {basket.map(product => (
                    <CheckoutProduct
                    id= {product.id}
                    price={product.price}
                    origin={product.origin}
                    img={product.img} />
                ) )}
                
            </CheckoutList>
        </>
    )
}

export default Checkout
