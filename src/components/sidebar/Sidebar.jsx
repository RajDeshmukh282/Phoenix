import React, { useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`Sidebar ${isOpen ? "" : "closed"}`}>
      <div className="top-section">
        <img
          className="menu-icon"
          src={assets.menu_icon}
          alt="menu"
          onClick={() => setIsOpen(!isOpen)}
        />

        {isOpen && (
          <div className="new-chat">
            <img src={assets.plus_icon} alt="new chat" />
            <span>New Chat</span>
          </div>
        )}

        {isOpen && (
          <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-entry">
              <img src={assets.message_icon} alt="msg" />
              <span>What is React...</span>
            </div>
            <div className="recent-entry">
              <img src={assets.message_icon} alt="msg" />
              <span>How to learn AI?</span>
            </div>
          </div>
        )}
      </div>

      {isOpen && (
        <div className="bottom">
          <div className="bottom-item recent-entry">
            <img src={assets.question_icon} alt="Help" />
            <span>Help</span>
          </div>
          <div className="bottom-item recent-entry">
            <img src={assets.history_icon} alt="Activity" />
            <span>Activity</span>
          </div>
          <div className="bottom-item recent-entry">
            <img src={assets.setting_icon} alt="Settings" />
            <span>Settings</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
