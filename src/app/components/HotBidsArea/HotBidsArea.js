import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import './HotBidsArea.scss'

import HotBidsBox from '../HotBidsBox/HotBidsBox'

const HotBidsArea = () => {
    const max = 24;

    const [data, setData] = useState([]);
    const [limit, setLimit] = useState(8);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const api = "https://62ceb596826a88972d016070.mockapi.io/bids";

    useEffect(() => {
        fetch(api)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                return response.json();
            })
            .then((actualData) => {
                setData(actualData);
                setError(null);
            })
            .catch((err) => {
                setError(err.message);
                setData(null);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [limit]);

    const handleShowMoreBids = () => {
        if (limit <= max) {
            setLimit(limit + 8);
        }
    };

    return (
        <section className='hot-bids-area'>
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} md={12} xxl={10}>
                        <h2>Hot Bids</h2>
                    </Col>
                    <Col xs={12} md={12} xxl={10}>
                        {loading && <div className='text-center'><Spinner animation="border" variant="light" /></div>}
                        {error && (
                            <div>{`There is a problem fetching the post data - ${error}`}</div>
                        )}
                        <div className='hot-bids-area-inner'>
                            {data.slice(0, limit).map(bid => (
                                <HotBidsBox key={bid.id} name={bid.name} img={bid.image} price={bid.price} fav={bid.fav} />
                            ))}
                        </div>
                    </Col>
                    <Col xs={12} md={12} xxl={10} className="text-center">
                        <button
                            disabled={limit >= max}
                            onClick={handleShowMoreBids}
                            variant="contained"
                        >
                            Load More
                        </button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default HotBidsArea;