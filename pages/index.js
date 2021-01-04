import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout/Layout'
import Slider from '../components/Slider/index';
import { Container } from '../components/globalStyles'
import ProductCardList from '../components/ProductCardList';
import ProductContentList from '../components/ProductContentList/index';
import Modules from '../components/Modules/index';
import InfoBar from '../components/InfoBar/index';

const HomePage = () => {
    return (
        <>
            <Head>
                <title>BeRide-HomePage</title>
            </Head>
            <Layout>
                <Slider/>
                <Container>
                    <ProductCardList/>
                    <ProductContentList/>
                    <Modules/>
                </Container>
                <InfoBar/>
            </Layout>
        </>
    )
}

export default HomePage
