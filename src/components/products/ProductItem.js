import React from 'react';

const styles = {
  border: '1px solid #545454',
  margin: '10px',
  padding: '15px'
};

export default product => (
  <div style={{ ...styles }}>
    <h4>{product.name}</h4>
    <p>{product.description}</p>
    <div><em>{product.price}</em></div>
  </div>
);