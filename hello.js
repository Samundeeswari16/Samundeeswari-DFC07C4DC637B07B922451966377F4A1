import React, { useState } from 'react';

function ToggleMessage() {
  const [message, setMessage] = useState('Hello');

  const handleToggle = () => {
    setMessage(prevMessage =>
      prevMessage === 'Hello' ? 'Welcome Back' : 'Hello'
    );
  };

  return (
    <div>
      <h2>{message}</h2>
      <button onClick={handleToggle}>Toggle Message</button>
    </div>
  );
}

export default ToggleMessage;
