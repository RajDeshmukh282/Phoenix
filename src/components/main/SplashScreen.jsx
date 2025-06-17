import React from "react";
import "./SplashScreen.css"; // optional, for animation styles
import { assets } from "../../assets/assets"; // if using assets

const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <img
        src={assets.phnx_logo} // or your splash image
        alt="Phoenix AI"
        className="splash-logo"
      />
      <h1>Welcome to Phoenix AI</h1>
    </div>
  );
};

export default SplashScreen;