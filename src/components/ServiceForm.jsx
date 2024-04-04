import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import './GoodsForm.css';


function ServiceForm() {
  const [name, setName] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [address, setAddress] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [job, setJob] = useState('');
  const [description, setDescription] = useState('');
  const [salary, setSalary] = useState('');
  const [add_links, setLinks] = useState('');
  const  history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle form submission, such as sending the data to a server or updating state

    fetch ('http://127.0.0.1:5000//add_service', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "name": name,

        "phone_no":phoneNo,
        "address":address,
        "email_address":emailAddress,
        "age":age,
        "gender":gender,
        "job":job,
        "description":description,
        "salary":salary,
        "add_links":add_links,
        
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

    console.log('Services Form Submitted:', { name,age,gender });
  };

  return (
    <div className="goods-form-container">
      <form onSubmit={handleSubmit} className="goods-form">
      <h3>Provide Service</h3>
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
          <label htmlFor="phoneNo">Phone No:</label>
          <input
            type="text"
            id="phoneNo"
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="emailAddress">Email Address:</label>
          <input
            type="email"
            id="emailAddress"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <input
            type="text"
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="job">Job Title:</label>
          <input
            type="text"
            id="job"
            value={job}
            onChange={(e) => setJob(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="salary">Salary:</label>
          <input
            type="text"
            id="salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="links">Links:</label>
          <textarea
            type="text"
            id="links"
            value={add_links}
            onChange={(e) => setLinks(e.target.value)}
          />
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
}

export default ServiceForm;
