import React, { Component } from 'react'
import './Searchbar.scss'

class Searchbar extends Component {
    render() {
        return (
            <input type='search' className='searchbar' placeholder='Search Item Here' />
        )
    }
}

export default Searchbar;