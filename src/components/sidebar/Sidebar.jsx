import React, { useState, useContext } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { context } from "../../context/context";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [alertText, setAlertText] = useState("");
  const { onsent, previousprompts, setrecentprompts, newchat } = useContext(context);

  const loadPrompt = async (prompt) => {
    setrecentprompts(prompt);
    await onsent(prompt);
  };

  const showAlert = (text) => {
    setAlertText(text);
    setTimeout(() => setAlertText(""), 2500);
  };

  return (
    <>
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
              {previousprompts.length === 0 ? (
                <p className="empty-msg">No recent prompts yet</p>
              ) : (
                previousprompts.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => loadPrompt(item)}
                    className="recent-entry"
                  >
                    <img src={assets.message_icon} alt="msg" />
                    <span title={item}>{item.slice(0, 18)}...</span>
                  </div>
                ))
              )}
            </div>
          )}
        </div>

        {isOpen && (
          <div className="bottom">
            <div
              className="bottom-item recent-entry"
              onClick={() => showAlert("Help is coming soon!")}
            >
              <img src={assets.question_icon} alt="Help" />
              <span>Help</span>
            </div>
            <div
              className="bottom-item recent-entry"
              onClick={() => showAlert("Activity is coming soon!")}
            >
              <img src={assets.history_icon} alt="Activity" />
              <span>Activity</span>
            </div>
            <div
              className="bottom-item recent-entry"
              onClick={() => showAlert("Settings are coming soon!")}
            >
              <img src={assets.setting_icon} alt="Settings" />
              <span>Settings</span>
            </div>
          </div>
        )}
      </div>

      {alertText && (
        <div className="custom-alert">
          <span>{alertText}</span>
        </div>
      )}
    </>
  );
};

export default Sidebar;
