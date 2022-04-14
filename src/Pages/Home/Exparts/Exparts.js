import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import expert1 from "../../../images/experts/expert-1.jpg";
import expert2 from "../../../images/experts/expert-2.jpg";
import expert3 from "../../../images/experts/expert-3.jpg";
import expert4 from "../../../images/experts/expert-4.jpg";
import expert5 from "../../../images/experts/expert-5.jpg";
import expert6 from "../../../images/experts/expert-6.png";
import Expart from "../Expart/Expart";

const Exparts = () => {
  const experts = [
    { id: 1, name: "will simth", img: expert1 },
    { id: 2, name: "will simth", img: expert2 },
    { id: 3, name: "will simth", img: expert3 },
    { id: 4, name: "will simth", img: expert4 },
    { id: 5, name: "will simth", img: expert5 },
    { id: 6, name: "will simth", img: expert6 },
  ];
  return (
    <div id="expert" >
      <h1 className="text-primary text-center mt-5 mb-5">Our Expert</h1>
      <Container>
        <Row>
          {experts.map((expert) => (
              <Expart key={expert.id} expert={expert}></Expart>
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default Exparts;
