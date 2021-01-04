import React from 'react'
import { useState } from 'react'
import { GiFlamingTrident, GiWorld } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5'
import { RiMenu3Line } from 'react-icons/ri';
import { AiOutlineShopping } from 'react-icons/ai';
import {
    NavFlex,
    MenuLink,
    NavLogo,
    BeRide,
    NavMenu,
    MenuP,
    MenuIcon,
    NavIcons,
    DropMenu,
    DropDown,
    DropUp,
    BeRide1,
    DropUl,
    DropLi,
    Line
} from './style'


const NavBar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click)

    return (
        <NavFlex>
            <DropMenu onClick={handleClick}>
                <RiMenu3Line/>
                <>
                    <DropDown click={click}>
                        <DropUp>
                            <NavLogo>
                                <MenuLink href="/">
                                    <GiFlamingTrident />
                                </MenuLink>
                                <MenuLink href="/">
                                    <BeRide1>BeRide</BeRide1>
                                </MenuLink>
                            </NavLogo>
                            <IoClose onClick={handleClick} />
                        </DropUp>
                        <DropUl>
                            <MenuLink href="/">
                              <DropLi>NEW</DropLi>
                              <Line/>
                            </MenuLink>
                            <MenuLink href="/">
                              <DropLi>RACEWEAR</DropLi>
                              <Line/>
                            </MenuLink>
                            <MenuLink href="/">
                              <DropLi>STREETWEAR</DropLi>
                              <Line/> 
                            </MenuLink>
                            <MenuLink href="/">
                              <DropLi>INSIDE</DropLi>
                              <Line/> 
                            </MenuLink>
                            <MenuLink href="/">
                              <DropLi>GIFT CARD</DropLi>
                              <Line/>  
                            </MenuLink>
                        </DropUl>
                    </DropDown>
                </>
            </DropMenu>
            <NavLogo>
                <MenuLink href="/">
                    <GiFlamingTrident />
                </MenuLink>
                <MenuLink href="/">
                    <BeRide>BeRide</BeRide>
                </MenuLink>
            </NavLogo>
            <NavMenu>
                <MenuLink href="/"><MenuP>NEW</MenuP></MenuLink>
                <MenuLink href="/about"><MenuP>RACEWEAR</MenuP></MenuLink>
                <MenuLink href="/about"><MenuP>STREETWEAR</MenuP></MenuLink>
                <MenuLink href="/about"><MenuP>INSIDE</MenuP></MenuLink>
                <MenuLink href="/about"><MenuP>GIFTCARD</MenuP></MenuLink>
            </NavMenu>
            <NavIcons>
                <MenuLink href="/"><MenuIcon><GiWorld /></MenuIcon></MenuLink>
                <MenuLink href="/card"><MenuIcon><AiOutlineShopping /></MenuIcon></MenuLink>
            </NavIcons>
        </NavFlex>
    )
}

export default NavBar
