import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { saveUsernameToAPI } from '../convex/Api_call'

const Login = () => {
  const [username, setUsername] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  }

  const saveUsername = () => {
    saveUsernameToAPI(username);  // Use the function from APIcall.ts instead of local storage
  }

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="text-center">
        <p className="mb-4">Hi, I am an AI trained to evaluate anime taste. To get started, I’ll need to see your MAL account. I’m just gonna look at what you watch and your ratings. I won’t post or change anything.</p>
        
        <input 
          type="text"
          placeholder="Enter MAL Username"
          className="form-control mb-2"
          value={username}
          onChange={handleInputChange}
        />
        
        <button className="btn btn-primary mt-2" onClick={saveUsername}>Save Username</button>
      </div>
    </div>
  );
}

const LoadingPage = () => {
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogin(true);
    }, 5000); 

    return () => clearTimeout(timer);
  }, []);

  if (showLogin) {
    return <Login />;
  }

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div>
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <p className="mt-2 text-center">Loading...</p>
      </div>
    </div>
  );
}

export default LoadingPage;
