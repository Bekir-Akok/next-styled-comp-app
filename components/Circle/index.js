import React from 'react'
import styles from './scroll.module.css'
import {
    CircleContainer,
    CircleWrapper,
    CircleImg,
    CircleImg1,
    CircleText
} from './style';


const Circle = () => {
    return (
        <>
        <div className={styles.scroll}>
            <CircleContainer>
                <CircleWrapper>
                    <CircleImg src='/ICON_PANTS-01a1_120x.png' />
                    <CircleText>ORIGIN PANTS '21</CircleText>
                </CircleWrapper>
                <CircleWrapper>
                    <CircleImg1 src='/ICON_JERSEY-01a1_120x.png' />
                    <CircleText>ORIGIN JERSEY '21</CircleText>
                </CircleWrapper>
                <CircleWrapper>
                    <CircleImg1 src='/ICON_GLOVES-01a1_120x.png' />
                    <CircleText>ORIGIN GLOVES '21</CircleText>
                </CircleWrapper>
                <CircleWrapper>
                    <CircleImg src='/190813_RIPIN_Socks_DesignRD03-03a1_120x.png' />
                    <CircleText>PERFORMANCE SOCKS '21</CircleText>
                </CircleWrapper>
                <CircleWrapper>
                    <CircleImg src='/190813_RIPIN_Socks_DesignRD03_black-031_120x.png' />
                    <CircleText>PERFORMANCE SOCKS '21</CircleText>
                </CircleWrapper>
            </CircleContainer>
            </div>
        </>
    )
}

export default Circle
