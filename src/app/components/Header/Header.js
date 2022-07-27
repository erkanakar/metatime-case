import React, { useState } from 'react'

import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap'

import Logo from "../../assets/img/logo.svg";
import LogoMobile from "../../assets/img/logo-mobile.svg";

import Searchbar from "../Searchbar/Searchbar";
import Menu from "../Menu/Menu";
import UserMenu from "../UserMenu/UserMenu";

import './Header.scss'

const Header = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    return (
        <>
            <header>
                <Container>
                    <Row className="align-items-center">
                        <Col xs={2} md={2} lg={2} xl={2} xxl={2}>
                            <img src={Logo} alt="CryptoKet" className="d-none d-md-block" />
                            <img src={LogoMobile} alt="CryptoKet" className="d-block d-md-none" />
                        </Col>
                        <Col xs={8} md={3} lg={3} xl={3} xxl={5}>
                            <Searchbar />
                        </Col>
                        <Col xs={3} md={4} lg={3} xl={4} xxl={3} className="d-none d-md-block">
                            <Menu />
                        </Col>
                        <Col xs={2} md={3} lg={2} xl={3} xxl={2} className="d-none d-md-block">
                            <UserMenu />
                        </Col>
                        <Col xs={2} md={3} lg={3} xl={3} xxl={5} className="d-block d-md-none" >
                            <div className='mobile-menu-hamburger' onClick={() => {
                                setIsNavExpanded(!isNavExpanded)
                            }}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </header>
            <div className={
                isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
            }>
                <div className='mobile-menu-inner'>
                    <Menu />
                </div>
                <div className='mobile-menu-footer'>
                    <UserMenu />
                </div>
            </div>
        </>
    )
}

export default Header;