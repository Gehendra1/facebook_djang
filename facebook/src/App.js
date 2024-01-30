import React, { useState, useEffect } from 'react';
import AppRoutes from './routes/AppRoutes';
import Login from './components/login/login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    // Additional logic you want to perform on login
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleLogin();
    }
  };

  useEffect(() => {
    document.addEventListener('keypress', handleKeyPress);
    return () => {
      document.removeEventListener('keypress', handleKeyPress);
    };
  }, []);

  return (
    <>
      {isLoggedIn ? (
        <AppRoutes />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </>
  );
}

export default App;
