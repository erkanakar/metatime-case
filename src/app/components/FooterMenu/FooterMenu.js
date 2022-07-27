import React from 'react'
import './FooterMenu.scss'

const FooterMenu = () => {

    return (
        <nav className='footer-menu'>
            <ul>
                <li>
                    <span>CryptoKet</span>
                    <ul>
                        <li><a href='#crypto'>Explore</a></li>
                        <li><a href='#crypto'>How it Works</a></li>
                        <li><a href='#crypto'>Contact Us</a></li>
                    </ul>
                </li>
                <li>
                    <span>Support</span>
                    <ul>
                        <li><a href='#crypto'>Help center</a></li>
                        <li><a href='#crypto'>Terms of service</a></li>
                        <li><a href='#crypto'>Legal</a></li>
                        <li><a href='#crypto'>Privacy policy</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}

export default FooterMenu;