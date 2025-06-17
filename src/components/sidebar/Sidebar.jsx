import React, { useState, useContext } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { context } from "../../context/context";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { onsent, previousprompts, setrecentprompts, newchat } = useContext(context);

  const loadPrompt = async (prompt) => {
    setrecentprompts(prompt);
    await onsent(prompt);
  };

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
          <div onClick={() => newchat()} className="new-chat">
            <img src={assets.plus_icon} alt="new chat" />
            <span>New Chat</span>
          </div>
        )}

        {isOpen && (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {previousprompts.map((item, index) => (
              <div
                key={index}
                onClick={() => loadPrompt(item)}
                className="recent-entry"
              >
                <img src={assets.message_icon} alt="msg" />
                <span>{item.slice(0, 18)}...</span>
              </div>
            ))}
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
