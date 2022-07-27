import React, { Component } from 'react'
import './Menu.scss'

class Menu extends Component {
    render() {
        return (
            <nav>
                <ul className='desktop-menu'>
                    <li><a href='#explore'>Explore</a></li>
                    <li><a href='#myitems'>My Items</a></li>
                    <li><a href='#following'>Following</a></li>
                </ul>
            </nav>
        )
    }
}

export default Menu;