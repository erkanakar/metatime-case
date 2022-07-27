import React, { Component } from 'react'
import './UserMenu.scss'

class UserMenu extends Component {
    render() {
        return (
            <ul className='user-menu'>
                <li>
                    <a href='#Create'>Create</a>
                </li>
                <li>
                    <a href='#Connect'>Connect</a>
                </li>
            </ul>
        )
    }
}

export default UserMenu;