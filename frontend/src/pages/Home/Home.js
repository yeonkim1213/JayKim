import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('/api/hello')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error('Error fetching from backend:', error);
      });
  }, []);

  return (
    <div>
      <h2>Welcome to Jay's Portfolio</h2>
      <p>{message}</p>
    </div>
  );
}

export default Home;
