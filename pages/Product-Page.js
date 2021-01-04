import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout/Layout'
import ProductPageList from '../components/ProductPageList/index';
import ProductCircle from '../components/Circle/index'
import ProductText from '../components/ProductPage/index';



const ProductPage = () => {
    return (
        <>
            <Head>
                <title>BeRide-ProductPage</title>
            </Head>
            <Layout>
                <ProductCircle/>
                <ProductPageList/>
                <ProductText/>
            </Layout>
        </>
    )
}

export default ProductPage
