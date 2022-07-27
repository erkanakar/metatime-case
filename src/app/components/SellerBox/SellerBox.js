import React, { Component } from 'react'
import './SellerBox.scss'


class SellerBox extends Component {
    render() {        
        return (
            <div className='seller-box'>
                <div className='seller-box-number'>{this.props.number}</div>
                <div className='seller-box-img'>
                    <img src={this.props.avatar} alt={this.props.name} />
                </div>
                <div className='seller-box-name'>
                    {this.props.name}
                </div>
                <div className='seller-box-price'>
                    <span className='seller-box-price-total'>{this.props.price} </span>
                    <span className='seller-box-price-currency'>ETH</span>
                </div>
            </div>
        )
    }
}

export default SellerBox;