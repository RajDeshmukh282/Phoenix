import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { context } from "../../context/context";

const Main = () => {
  const {
    input,
    setinput,
    recentprompts,
    showresult,
    loading,  
    resultdata,
    onsent,
  } = useContext(context);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && input.trim()) {
      onsent();
    }
  };

  return (
    <div className="main">
      <div className="nav">
        <img src={assets.user_icon} alt="user_icon" />
      </div>

      <div className="main-container">
        {!showresult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Raj</span>
              </p>
              <p>What can I spark for you today?</p>
            </div>

            <div className="cards">
              {[
                ["Take me on a tour, Phoenix", assets.compass_icon],
                ["Inspire me with something cool", assets.bulb_icon],
                ["What can I build with AI?", assets.message_icon],
                ["Show me how Phoenix codes", assets.code_icon],
              ].map(([text, icon], i) => (
                <div className="card" key={i}>
                  <p>{text}</p>
                  <img src={icon} alt="icon" />
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentprompts}</p>
            </div>
            <div className="result-data">
  <img src={assets.gemini_icon} alt="gemini" />
  {loading ? (
    <div className="loader-pulse">
      <span></span>
      <span></span>
      <span></span>
    </div>
  ) : (
    <p dangerouslySetInnerHTML={{ __html: resultdata }}></p>
  )}
</div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              placeholder="Enter your prompt..."
              value={input}
              onChange={(e) => setinput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <div>
              <img src={assets.gallery_icon} alt="gallery" />
              <img src={assets.mic_icon} alt="mic" />
              <img src={assets.send_icon} alt="send" onClick={() => input.trim() && onsent()} />
            </div>
          </div>

          <div className="bottom-info">
            <p>⚠️ <strong>Phoenix</strong> may generate inaccurate or biased info. Verify critical facts.</p>
            <p>🔐 Your data stays private. Phoenix doesn’t store your chats.</p>
            <p>💡 Use Phoenix responsibly — it's your assistant, not a human expert.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;