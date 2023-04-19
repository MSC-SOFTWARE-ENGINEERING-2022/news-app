import { Loader, ScrollBackToTop } from "../components";
import { Row, Col, Card, CardImg, CardText, CardTitle, CardBody } from 'reactstrap';
import Carousel from 'react-bootstrap/Carousel';
import { useState } from "react";

const Home = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return <>
    {/* <h1>Home </h1>
    <Loader /> */}

        {/* <Col lg="6" md="8" className="colHome">
            <Row className="rowHome">
                <Col sm="8" className="colCarousel p-0">
                    <Carousel activeIndex={index} onSelect={handleSelect}>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://images.unsplash.com/photo-1678698611311-535d7d644c1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1438&q=80"
                                alt="First slide"
                                />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://images.unsplash.com/photo-1680937395922-7519e636ffe4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80"
                                alt="First slide"
                                />
                            <Carousel.Caption>
                                <h3>2 slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://images.unsplash.com/photo-1679362006023-248ad547b476?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2128&q=80"
                                alt="First slide"
                                />
                            <Carousel.Caption>
                                <h3>3 slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col sm="4" className="colUpdates p-0">
                    <Card>
                        <CardBody>
                            <CardText>Text for small card 1</CardText>
                        </CardBody>
                        <CardImg top width="100%" src="https://images.unsplash.com/photo-1679329614246-f099ba78c6aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDkyfGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Card image cap" />
                    </Card>
                    <Card>
                        <CardBody>
                            <CardText>Text for small card 2</CardText>
                        </CardBody>
                        <CardImg top width="100%" src="https://images.unsplash.com/photo-1495216875107-c6c043eb703f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="Card image cap" />
                    </Card>
                    <Card>
                        <CardBody>
                            <CardText>Text for small card 3</CardText>
                        </CardBody>
                        <CardImg top width="100%" src="https://images.unsplash.com/photo-1678625741288-217321d71b51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE4NXxibzhqUUtUYUUwWXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="Card image cap" />
                    </Card>
                </Col>
            </Row>
        </Col> */}

        <Row className="sectionMain">
            <Col md="3" className="colTrending">
                <p className="colPHeading">Trending</p>
            </Col>
            <Col md="6" className="colMain">
                <p>Main</p>
            </Col>
            <Col md="3" className="colOthers">
                <p className="colPHeading">Recent</p>
            </Col>
        </Row>
        <Row className="sectionSports">
            <p>Sports</p>
            <Col md="6" className="colMain">
                <p>Main</p>
            </Col>
            <Col md="3" className="colTrending">
                <p className="colPHeading">Trending</p>
            </Col>
            <Col md="3" className="colOthers">
                <p className="colPHeading">Recent</p>
            </Col>
        </Row>
        <Row className="sectionTech">
            <p>Tech</p>
            <Row>
                <Col sm="12" className="colMain">
                    <p>Main</p>
                </Col>
            </Row>
            <Row>
                <Col md="3" className="colTrending">
                    <p className="colPHeading">Trending</p>
                </Col>
                <Col md="3" className="colOthers">
                    <p className="colPHeading">Recent</p>
                </Col>
                <Col md="3" className="colTrending">
                    <p className="colPHeading">Trending</p>
                </Col>
                <Col md="3" className="colOthers">
                    <p className="colPHeading">Recent</p>
                </Col>
            </Row>
        </Row>
    </> 
}

export default Home;