import React,{ useState } from 'react';
import './GoodsSeek.css';
import sicon from './sicon.png';
import DisplayServices from './DisplayServices';

const GoodsSeek = () => {

    const [prompt, setPrompt] = useState('');
  const [servicesInfo, setServicesInfo] = useState(null);
  const [responseStatus, setResponseStatus] = useState(false);

  const handleSearch = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/analyze_jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt })
      });
      
      if (response.ok) {
        const data = await response.json();
        console.log(data.people_info); // Log the response from the backend
        setServicesInfo(data.people_info); 
        // Update state with goods info
        setResponseStatus(true);
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleClick = async () => {
    await fetch('http://127.0.0.1:5000/execute_command', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "command": "hbhj"
      })
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error");
        }
      })
      .catch((e) => {
        console.log(e.message);
      })

      console.log('success');
  };

  

  if (responseStatus) {
    return <DisplayServices servicesinfo = {servicesInfo}/>
  }
  else{
    
        <div>Sorry, we couldn't find any resources for you!</div>
    
  }
  return (
    <div className="prompt-container">
      
        <div className="prompt-header">
            <div className='prompt-text'>
          <h2>Prompt Window</h2>
          <button className='icon-button' onClick={handleSearch}>
          <img className = 'sicon' src={sicon} alt="Icon" />
          </button>
          </div>
          <textarea
          placeholder = "Enter your prompt" value={prompt}
          onChange={(e) => setPrompt(e.target.value)} >
            
          </textarea>
          
        </div>
        <button onClick={handleClick} className='chat-bot'>ChatBot</button>
        
    </div>
  );
};

export default GoodsSeek;