

import React from 'react';
import './DisplayGoods.css'; // Import CSS file for styling

const DisplayGoods = ({ goodsinfo }) => {
  return (
    <div className="goods-container">
      <h1>Goods Information</h1>
      {goodsinfo.map((good, index) => (
        <div className="good-card" key={index}>
          <h2>{good[1]}</h2>
          <p>Volume: {good[2]}</p>
          <p>Quality: {good[3]}</p>
          <p>Certification: {good[4]}</p>
          <p>Description: {good[5]}</p>
          <p>Price: {good[6]}</p>
          <p>Owner Name: {good[7]}</p>
          <p>Owner Phone: {good[8]}</p>
          <p>Owner Email ID: {good[9]}</p>
        </div>
      ))}
    </div>
  );
};

export default DisplayGoods;
