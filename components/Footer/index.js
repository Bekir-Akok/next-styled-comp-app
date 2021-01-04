import React from 'react';
import {FaCcPaypal,FaCcVisa,FaCcMastercard,FaCcApplePay,FaCreditCard } from 'react-icons/fa';
import { 
    FooterContainer, 
    FooterWrapper, 
    FooterNews,
    Footerh1,
    FooterSubs,
    FooterInp,
    FooterBtn,
    FooterP,
    FooterNav,
    FooterTitle,
    MenuLink,
    FooterPay,
    FooterIcon,
    FooterCopy
} from './style';


const Footer = () => {
    return (
        <>
        <FooterContainer>
            <FooterWrapper>
                <FooterNews>
                    <Footerh1>Newsletter</Footerh1>
                    <FooterSubs>
                        <FooterInp placeholder="Name"></FooterInp>
                        <FooterInp placeholder="E-mail address"></FooterInp>
                        <FooterBtn>Subscribe</FooterBtn>
                    </FooterSubs>
                    <FooterP>Be the first to know what's new at Ripin and get exclusive offers.</FooterP>
                </FooterNews>
                <FooterNav>
                    <FooterTitle>
                        <Footerh1>Support</Footerh1>
                        <MenuLink href="/">Size chart</MenuLink>
                        <MenuLink href="/">Return</MenuLink>
                        <MenuLink href="/">Shipping and delivery</MenuLink>
                        <MenuLink href="/">F&Q</MenuLink>
                    </FooterTitle>
                    <FooterTitle>
                        <Footerh1>About Ripin</Footerh1>
                        <MenuLink href="/">Imprint</MenuLink>
                        <MenuLink href="/">Data protection</MenuLink>
                        <MenuLink href="/">Press</MenuLink>
                    </FooterTitle>
                    <FooterTitle>
                        <Footerh1>Contact</Footerh1>
                        <MenuLink href="/">Your shopping card</MenuLink>
                        <MenuLink href="/">Contact</MenuLink>
                    </FooterTitle>
                </FooterNav>
                <Footerh1>Payment methods</Footerh1>
                <FooterPay>
                    <FooterIcon><FaCcPaypal/></FooterIcon>
                    <FooterIcon><FaCcVisa/></FooterIcon>
                    <FooterIcon><FaCcMastercard/></FooterIcon>
                    <FooterIcon><FaCcApplePay/></FooterIcon>
                    <FooterIcon><FaCreditCard/></FooterIcon>
                </FooterPay>
                <FooterCopy> No © 2021 BeRide All rights deserved.</FooterCopy>
            </FooterWrapper>
        </FooterContainer>
        </>
    )
}

export default Footer
