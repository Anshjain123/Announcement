import React from 'react'
import { Link, useHref } from 'react-router-dom';
import { Carousel, ListGroup, Badge } from 'react-bootstrap';
import "../Assests/Announcements.css";
const Announcement = () => {

    return (
        <div>
            {/* <div className='announcements-head'>
                Announcements
            </div> */}
            <div className="posture">


                <Carousel className="block">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://m.media-amazon.com/images/I/61peIdz-C2L._SL1024_.jpg"
                            alt="First slide" />
                        <Carousel.Caption>
                            <div className="class" >
                                <a href='https://www.google.com'>Read More...</a>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </div>

                        </Carousel.Caption>

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://m.media-amazon.com/images/I/61peIdz-C2L._SL1024_.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://m.media-amazon.com/images/I/61peIdz-C2L._SL1024_.jpg"
                            alt="Third slide" />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
            </div>

            {/* <div className='announce'>

                <h3>Announcements</h3>
            </div> */}
            <div className="color">
               
                    <h2>Announcements</h2>

                <ListGroup as="ol" numbered className="list" style={{border:'100px'}}>
                    <ListGroup.Item
                        as="ul"
                        className="d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Event 01</div>
                            Cras justo odio
                        </div>
                        <Badge classname="bad" variant="primary" pill >
                            NEW
                        </Badge>
                    </ListGroup.Item>
                    <ListGroup.Item
                        as="ul"
                        className="d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Subheading</div>
                            Cras justo odio
                        </div>
                        {/* <Badge variant="primary" pill>
                            14
                        </Badge> */}
                    </ListGroup.Item>
                    <ListGroup.Item
                        as="ul"
                        className="d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Subheading</div>
                            Cras justo odio
                        </div>
                        {/* <Badge variant="primary" pill>
                            14
                        </Badge> */}
                    </ListGroup.Item>
                    <ListGroup.Item
                        as="ul"
                        className="d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Subheading</div>
                            Cras justo odio
                        </div>
                        {/* <Badge variant="primary" pill>
                            14
                        </Badge> */}
                    </ListGroup.Item>
                    <ListGroup.Item
                        as="ul"
                        className="d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Subheading</div>
                            Cras justo odio
                        </div>
                        {/* <Badge variant="primary" pill>
                            14
                        </Badge> */}
                    </ListGroup.Item>
                    <ListGroup.Item
                        as="ul"
                        className="d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Subheading</div>
                            Cras justo odio
                        </div>
                        {/* <Badge variant="primary" pill>
                            14
                        </Badge> */}
                    </ListGroup.Item>
                    <ListGroup.Item
                        as="ul"
                        className="d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Subheading</div>
                            Cras justo odio
                        </div>
                        {/* <Badge variant="primary" pill>
                            14
                        </Badge> */}
                    </ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    )
}



export default Announcement