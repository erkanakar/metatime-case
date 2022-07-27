import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './Main.scss'

class Main extends Component {
    render() {
        return (
            <main>
                <Container>
                    <Row className="justify-content-center">
                        <Col xs={12} md={12} xxl={10}>
                            <div className='main-banner'>
                                <h1>
                                    Discover, collect, and sell <br />
                                    extraordinary NFTs
                                </h1>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </main>
        )
    }
}

export default Main;