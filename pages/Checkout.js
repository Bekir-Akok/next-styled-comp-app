import Head from 'next/head'
import React from 'react'
import Layout from '../components/Layout/Layout'
import CheckoutHome from '../components/CheckoutHome/index'

const Checkout = () => {
    return (
        <>
            <Head>
                <title>BeRide-CheckoutPage</title>
            </Head>
            <Layout>
               <CheckoutHome/>
            </Layout>
        </>
    )
}

export default Checkout
