import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
  return (
    <div style={{height:'500px',width:'500px'}} className="d-flex align-items-center justify-content-center w-100">
      <Spinner animation="border" variant="primary" />
    </div>
  );
};

export default Loading;