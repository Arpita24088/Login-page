import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import './App.css';

const App = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value.toLowerCase());
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;

    if (username.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
      alert('Please fill in all fields.');
    } else if (!password.match(passwordPattern)) {
      alert('Password must be at least 8 characters long and include at least one special character and one numeric value.');
    } else if (password !== confirmPassword) {
      alert('Passwords do not match.');
    } else {
      alert('Signup successful!');
      // Continue with the signup process
    }
  };


 /* // Get a reference to the image container
const imageContainer = document.querySelector('.image-container');

// Create an image element
const imageElement = document.createElement('img');

// Set the source (URL) of the image
imageElement.src = '—Pngtree—desktop computer one flat style_4754026.png'; // Replace with your image URL

// Set any additional attributes or styles for the image
imageElement.className = 'image-style'; // Apply the CSS class for styling
imageElement.alt = 'Login Image'; // Set alt text for accessibility

// Append the image element to the image container
imageContainer.appendChild(imageElement);


  // Create a new image element
  /*const img = document.createElement('img');

  // Set the source (URL) of the image
  /*img.src = '—Pngtree—desktop computer one flat style_4754026.png'; // Replace with the actual path to your image

  // Set alt text for the image (for accessibility)
  img.alt = 'computer';

  img.classList.add('image');

  // Append the image element to a container div (replace 'containerId' with the ID of your container element)
  document.getElementById('img').appendChild(img);*/

  return (
    <div className="login-container">
      <h2 className="login-title">Create Your Account</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          value={username}
          onChange={handleUsernameChange}
          required
          margin="normal"
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
          margin="normal"
        />
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={handlePasswordChange}
          required
          margin="normal"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleShowPasswordClick} edge="end">
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Confirm Password"
          variant="outlined"
          fullWidth
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          required
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
      {/* Add a container for the image */}
      <div id="containerId"></div>
    </div>
  );
};

export default App;
