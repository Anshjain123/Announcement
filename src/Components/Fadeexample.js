import React from "react";
import Fade from "react-reveal/Fade";
import { Carousel, ListGroup, Badge } from "react-bootstrap";
import "../Assests/Announcements.css";
import { Link, useHref } from "react-router-dom";

class FadeExample extends React.Component {
  render() {
    return (
      <div>
        <div className="color">
        <Fade right cascade>
          <div>
            
              <h2>Announcements</h2>
          </div>
        </Fade>
            <Fade left cascade>
              <ListGroup
                as="ol"
                numbered
                className="list"
                style={{ border: "100px" }}
              >
                
                <ListGroup.Item
                  as="ul"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Event 01</div>
                    Cras justo odio
                  </div>
                  <Badge classname="bad" variant="primary" pill>
                    NEW
                  </Badge>
                </ListGroup.Item>
                <ListGroup.Item
                  as="ul"
                  className="d-flex justify-content-between align-items-start"
                >
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
                  className="d-flex justify-content-between align-items-start"
                >
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
                  className="d-flex justify-content-between align-items-start"
                >
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
                  className="d-flex justify-content-between align-items-start"
                >
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
                  className="d-flex justify-content-between align-items-start"
                >
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
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Subheading</div>
                    Cras justo odio
                  </div>
                  {/* <Badge variant="primary" pill>
                            14
                        </Badge> */}
                </ListGroup.Item>
              </ListGroup>
              </Fade>
            </div>
      </div>
    );
  }
}

export default FadeExample;
