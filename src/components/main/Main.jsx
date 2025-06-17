import React from "react";
import "./Main.css";
import { assets } from "../../assets/assets";

const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        {/* <img id="phnx-logo" src={assets.phnx_logo} alt="" /> */}
        <img src={assets.user_icon} alt="user_icon" />
      </div>

      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello, Raj</span>
          </p>
          <p>What can I spark for you today?</p>
        </div>

        <div className="cards">
          <div className="card">
            <p>Take me on a tour, Phoenix</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>Inspire me with something cool</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>What can I build with AI?</p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p>Show me how Phoenix codes</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>

        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder="Enter your prompt..." />
            <div>
              <img src={assets.gallery_icon} alt="gallery" />
              <img src={assets.mic_icon} alt="mic" />
              <img src={assets.send_icon} alt="send" />
            </div>
          </div>

          <div className="bottom-info">
            <p>
              ⚠️ <strong>Phoenix</strong> might generate incorrect or biased responses.
              Always double-check critical information.
            </p>
            <p>
              🔐 Your data stays private. Phoenix doesn’t store your chats.
            </p>
            <p>
              💡 Use Phoenix responsibly — it's a creative assistant, not a human expert.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
