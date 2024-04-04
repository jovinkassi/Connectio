
import React from 'react';
import './DisplayGoods.css'; // Import CSS file for styling

const DisplayServices = ({ servicesinfo }) => {
  return (
    <div className="goods-container">
      <h1>Services Information</h1>
      {servicesinfo.map((good, index) => (
        <div className="good-card" key={index}>
          <h2>{good[1]}</h2>
          <p>Age: {good[2]}</p>
          <p>Gender: {good[3]}</p>
          <p>Phone no: {good[4]}</p>
          <p>Address: {good[5]}</p>
          <p>Email Address: {good[6]}</p>
          <p>Job Tile: {good[7]}</p>
          <p>Job Description: {good[8]}</p>
          <p>Salary: {good[9]}</p>
          <p>Additional Links: {good[10]}</p>
        </div>
      ))}
    </div>
  );
};

export default DisplayServices;
