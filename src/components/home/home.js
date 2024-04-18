import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="App-content">
      <h1>Welcome to the <strong>BEST DATA FETCH APP</strong></h1>
      <div className="App-Log">
        <Link to="/login">
            <button className="button-86" role="button">
                Login
            </button>
        </Link>
        <Link to="/register">
            <button className="button-86" role="button">
                Register
            </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
