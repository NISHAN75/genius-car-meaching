import Button from "react-bootstrap/Button";
import React from "react";
import { Card, CardGroup, Col, Row } from "react-bootstrap";

const Expart = ({ expert }) => {
  const { name, img } = expert;
  return (
    <Col lg={4}>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </Col>
  );
};

export default Expart;
