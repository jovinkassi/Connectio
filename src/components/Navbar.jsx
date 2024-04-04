import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const history = useNavigate();

  const handleLogout = () => {
    // Perform logout actions
    // For now, just set isLoggedIn to false and redirect to home
    setIsLoggedIn(false);
    history('/');
  };

  return (
    <nav className="navbar">
        <Link to="/" className="navbar-link">Home</Link>

      
      <div className="navbar-flex">
        {!isLoggedIn && (
          <>
            <Link to="/login" className="navbar-link">Login</Link>
          </>
        )}
        {isLoggedIn && (
          <button onClick={handleLogout} className="navbar-button">Logout</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
