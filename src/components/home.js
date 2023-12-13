// src/components/home.js
import React from 'react';

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>WELCOME TO MY LANDING PAGE!!</h1>
      <h2 style={styles.subHeading}>HELLO</h2>
      <img src="/computer.png" alt="Computer" style={styles.image} />
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    //maxWidth: '1200px',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  heading: {
    color: '#333',
    fontSize: '36px',
    marginBottom: '20px',
    display: 'flex',
  },
  subHeading: {
    color: '#666',
    fontSize: '24px',
    marginBottom: '40px',
  },
  image: {
    width: '100%',
    maxWidth: 'auto',
    height: 'auto',
    borderRadius: '5px',
    
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
  },
};


export default Home;

