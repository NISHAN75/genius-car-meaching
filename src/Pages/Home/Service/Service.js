import React from "react";
import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const {id, name, img, description, price } = service;
  const navigate =useNavigate();

  const handleToServiceDetails = id =>{
    navigate(`/service/${id}`)

  }

  return (
    <Col lg={4}>
      <img src={img} alt="" />
      <h1>This is service {name} </h1>
      <p>Price:{price}</p>
      <p>
        <small>{description}</small>
      </p>
      <button onClick={()=>handleToServiceDetails(id)} className="bg-primary">Book:{name}</button>
    </Col>
  );
};

export default Service;
