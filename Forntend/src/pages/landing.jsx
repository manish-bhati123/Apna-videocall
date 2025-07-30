import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
export default function Landingpage() {
  const router = useNavigate();

  // Check if user is logged in 
  const isLoggedIn = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token"); // remove token or user data
    router("/auth"); // navigate to login/register page
  };

  return (
    <div className='landingPageContainer '>
      <nav>
        <div className='navHader'>
           <span><VideoCameraBackIcon fontSize='large' /></span>
           <h2>Apna Meet</h2>
        </div>

        <div className="navlist">
          <p onClick={() => {
  if (!localStorage.getItem("token")) {
    router("/auth"); // Redirect to login/register if not logged in
  } else {
    router("/aljk23"); // Proceed as guest if already logged in
  }
}}>
  Join As Guest
</p>

          {!isLoggedIn ? (
            <>
              <p onClick={() => router("/auth")}>Register</p>
              <div onClick={() => router("/auth")} role='button'>
                <p>Login</p>
              </div>
            </>
          ) : (
            <div onClick={handleLogout} role='button'>
              <p>Logout</p>
            </div>
          )}
        </div>
      </nav>

      <div className="landingMainContainer">
        <div className="contan">
          <h1><span style={{ color: "#FF9839" }}>Connect</span> with your Loved Ones </h1>
          <p>Cover a distance by video call</p>
          <div role='button'>
            <Link to={"/home"}>Get Started</Link>
          </div>
        </div>

        <div className="image">
          <img src="/mobile.png" alt="" height={550} />
        </div>
      </div>
    </div>
  );
}
