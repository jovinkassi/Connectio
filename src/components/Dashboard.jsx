import React , { useState }from 'react';
import "./Dashboard.css";
import { useNavigate} from 'react-router-dom';

function Dashboard() {

   
    const history = useNavigate();
    const handleProvide = () => {
      history('/service-form');
      
    };

    const handleProvide2 = () => {
      history('/goods-form');
      
    };
    const handleSeek = () => {
      history('/services-seek');
      
    };


    const handleSeek2 = () => {
      history('/goods-seek');
      
    };

  return (
    <div className="big-box">
    <div className='content-container'>
      <div className="full-box">
      <h2>Welcome to the Dashboard</h2>
      <div className="container">
        
        <div className="section">
          <h3>Services</h3>
          <div className="button-group">
            <button onClick={handleSeek} className="btn seek">Seek</button>
            <button onClick={handleProvide} className="btn provide">Provide</button>
          </div>
        </div>
        <div className="section">
          <h3>Goods</h3>
          <div className="button-group">
            <button onClick={handleSeek2} className="btn seek">Seek</button>
            <button onClick={handleProvide2} className="btn provide" >Provide</button>
          </div>
        </div>
        </div>
      </div>
      
    </div>
    </div>
  );
}

export default Dashboard;
