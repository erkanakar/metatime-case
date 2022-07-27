import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.scss'

import Logo from "../../assets/img/logo.svg";
import Instagram from "../../components/Footer/images/instagram.svg";
import Twitter from "../../components/Footer/images/twitter.svg";
import Telegram from "../../components/Footer/images/telegram.svg";
import Discord from "../../components/Footer/images/discord.svg";
import NewsletterForm from '../NewsletterForm/NewsletterForm';
import FooterMenu from '../FooterMenu/FooterMenu';

const Footer = () => {

    return (
        <footer>
            <Container>
                <Row className='justify-content-center'>
                    <Col xs={12} md={6} lg={5}>
                        <img src={Logo} alt="CryptoKet" />
                        <NewsletterForm />
                    </Col>
                    <Col xs={12} md={6} lg={5} className="d-flex justify-content-end">
                        <FooterMenu />
                    </Col>
                </Row>
            </Container>
            <div className='copyright'>
                <Container>
                    <Row className='justify-content-center'>
                        <Col xs={12} md={6} lg={5}>
                            CrpytoKet, Inc. All Rights Reserved
                        </Col>
                        <Col xs={12} md={6} lg={5}>
                            <ul className='social-media'>
                                <li><a href='#instagram'><img src={Instagram} alt='Instagram' /></a></li>
                                <li><a href='#twitter'><img src={Twitter} alt='Twitter' /></a></li>
                                <li><a href='#telegram'><img src={Telegram} alt='Telegram' /></a></li>
                                <li><a href='#discord'><img src={Discord} alt='Discord' /></a></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    )
}

export default Footer;