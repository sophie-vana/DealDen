import React, { useState } from "react";
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../images/Den.png';

const LoginForm = () => {
  // State to manage the user's name and login status
  const [name, setName] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Handle login button click
  const handleLogin = () => {
    if (name.trim() !== '') {
      setIsLoggedIn(true);
    }
  };

  // Handle logout button click
  const handleLogout = () => {
    setIsLoggedIn(false);
    setName('');
  };

  return (
    <div className="homeLogin">
      {isLoggedIn ? (
        // Display when user is logged in
        <div className="loggedIn">
          <h1 className="successMsg">Welcome, {name} 🎉</h1>
          <h4 className="successMsg">Navigate to our <a className='productLink' href="/products">Products</a> page to see the deals you've unlocked!</h4>
          <Button variant="primary" onClick={handleLogout}>Logout</Button>
        </div>
      ) : (
        // Display login form when user is not logged in
        <div className="test">
          <h1 className="homeHeading">DealDen</h1>
          <img className="homeLogo" src={Logo} alt="DealDen Logo"/>
          <h2 className="slogan">Home to the best Deals on Earth!</h2>
          <p className="leadingText">Want to browse some of our crazy savings? Log in below to get started</p>
          <Form className="nameForm">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="nameInput"
              />
              <Form.Text className="text-muted">
                We'll never share your information with anyone else
              </Form.Text>
            </Form.Group>
            <Button variant="primary" onClick={handleLogin} disabled={!name.trim()}>
              Login
            </Button>
          </Form>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
