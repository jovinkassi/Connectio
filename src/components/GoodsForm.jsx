import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import './GoodsForm.css';

function GoodsForm() {
  const [name, setName] = useState('');
  const [volume, setVolume] = useState('');
  const [quality, setQuality] = useState('');
  const [certification, setCertification] = useState('');
  const [pdt_desc, setPdtDesc] = useState('');
  const [pdt_price, setPdtPrice] = useState('');
  const [owner_name, setOwnerName] = useState('');
  const [owner_phone, setOwnerPhone] = useState('');
  const [owner_email,setOwnerEmail] = useState('');

  const history = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle form submission, such as sending the data to a server or updating state

    fetch ('http://127.0.0.1:5000/add_goods', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "name": name,
        "volume": volume,
        "quality":quality,
        "certification":certification,
        "pdt_desc":pdt_desc,
        "pdt_price":pdt_price,
        "owner_name":owner_name,
        "owner_phone":owner_phone,
        "owner_email":owner_email       
      })
  })
  .then ( (res) => {
      if (!res.ok) {
          throw new Error("Removal is failed");
      }

      console.log("Added successfully");
  })
  .catch( (e) => {
      console.log(e.message);
  })

  history("/dash");

    console.log('Goods Form Submitted:', { name, volume, quality, certification, pdt_desc, pdt_price });
  };

return (
  <div className="goods-form-container">
    <form onSubmit={handleSubmit} className="goods-form">
    <h3>Provide Goods</h3>
   
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="volume">Volume:</label>
        <input
          type="text"
          id="volume"
          value={volume}
          onChange={(e) => setVolume(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="quality">Quality:</label>
        <input
          type="text"
          id="quality"
          value={quality}
          onChange={(e) => setQuality(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="certification">Certification:</label>
        <input
          type="text"
          id="certification"
          value={certification}
          onChange={(e) => setCertification(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="pdt_desc">Product Details:</label>
        <textarea
          id="pdt_desc"
          value={pdt_desc}
          onChange={(e) => setPdtDesc(e.target.value)}
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="pdt_price">Product Price:</label>
        <input
          type="text"
          id="pdt_price"
          value={pdt_price}
          onChange={(e) => setPdtPrice(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="owner_name">Owner Name:</label>
        <input
          type="text"
          id="owner_name"
          value={owner_name}
          onChange={(e) => setOwnerName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="owner_phone">Owner Phone:</label>
        <input
          type="text"
          id="owner_phone"
          value={owner_phone}
          onChange={(e) => setOwnerPhone(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="owner_email">Owner Email:</label>
        <input
          type="email"
          id="owner_email"
          value={owner_email}
          onChange={(e) => setOwnerEmail(e.target.value)}
        />
      </div>
      
      <button type="submit" className="submit-btn">
        Submit
      </button>
    </form>
  </div>
);
}

export default GoodsForm;
