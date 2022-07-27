import React, { Component } from 'react'
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import './SellerArea.scss'
import 'swiper/css';

import SellerBox from '../SellerBox/SellerBox'

SwiperCore.use([Navigation]);

class SellerArea extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [],
            DataisLoaded: false
        };
    }

    componentDidMount() {
        fetch(
            "https://62ceb596826a88972d016070.mockapi.io/sellers")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }

    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div className='text-center'><Spinner animation="border" variant="light" /></div>
        return (
            <section className='seller-area'>
                <Container>
                    <Row className="justify-content-center">
                        <Col xs={12} md={12} xxl={10}>
                            <h2>Top Seller</h2>
                        </Col>
                        <Col xs={12} md={12} xxl={10} className="seller-area-slider">
                            <div className='seller-area-slide-button slide-left'>

                            </div>
                            <Swiper
                                spaceBetween={22}
                                slidesPerView={2.4}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                                navigation={{
                                    prevEl: ".slide-left",
                                    nextEl: ".slide-right"
                                }}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 2.3,
                                    },
                                    768: {
                                        slidesPerView: 3,
                                    },
                                    1200: {
                                        slidesPerView: 5,
                                    }
                                }}
                            >
                                {
                                    items.map((item) => (
                                        <SwiperSlide key={item.id} ><SellerBox name={item.name} avatar={item.avatar} price={item.price} number={item.id} /></SwiperSlide>
                                    ))
                                }
                            </Swiper>
                            <div className='seller-area-slide-button slide-right'>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default SellerArea;