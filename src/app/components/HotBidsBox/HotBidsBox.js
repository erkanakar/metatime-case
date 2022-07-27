import React, { Component } from 'react'
import './HotBidsBox.scss'


class HotBidsBox extends Component {

    render() {
        return (
            <div className='hot-bids-box'>
                <div className='hot-bids-box-inner'>
                    <div className='hot-bids-box-img'>
                        <img src={this.props.img} alt={this.props.name} />
                    </div>
                    <div className='hot-bids-box-name'>
                        {this.props.name}
                    </div>
                    <div className='hot-bids-box-detail'>
                        <div className='hot-bids-box-detail-price'>
                            <span className='hot-bids-box-detail-price-total'>
                                {this.props.price}&nbsp;
                            </span>
                            <span className='hot-bids-box-detail-price-currency'>
                                ETH
                            </span>
                        </div>
                        <div className='hot-bids-box-detail-fav'>
                            <span></span>
                            {this.props.fav}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HotBidsBox;