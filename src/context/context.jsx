import { createContext, useState } from "react";
import runChat from "../config/gemini.js";

export const context = createContext();

const ContextProvider = (props) => {
  const [input, setinput] = useState("");
  const [recentprompts, setrecentprompts] = useState("");
  const [previousprompts, setpreviousprompts] = useState([]);
  const [showresult, setshowresult] = useState(false);
  const [loading, setloading] = useState(false);
  const [resultdata, setresultdata] = useState("");

  const delayWords = async (words) => {
    for (let i = 0; i < words.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setresultdata((prev) => prev + words[i] + " ");
    }
  };

  const newchat = () => {
    setinput("");
    setresultdata("");
    setshowresult(false);
    setloading(false);
  };

  const onsent = async (prompt) => {
    try {
      setloading(true);
      setshowresult(true);
      setresultdata("");

      const usedPrompt = prompt !== undefined ? prompt : input;
      setrecentprompts(usedPrompt);

      setpreviousprompts((prev) =>
        prev.includes(usedPrompt) ? prev : [...prev, usedPrompt]
      );

      const response = await runChat(usedPrompt);

      // Format bold and breaks
      const formatted = response
        .split("**")
        .map((seg, i) => (i % 2 === 1 ? `<b>${seg}</b>` : seg))
        .join("")
        .split("*").join("<br>");

      const sanitized = formatted.replace(/<script.*?>.*?<\/script>/gi, "");
      const wordArray = sanitized.split(" ");
      delayWords(wordArray);
    } catch (error) {
      setresultdata("❌ Failed to get response. Try again.");
      console.error("Error:", error);
    } finally {
      setloading(false);
      setinput("");
    }
  };

  return (
    <context.Provider
      value={{
        input,
        setinput,
        recentprompts,
        setrecentprompts,
        previousprompts,
        setpreviousprompts,
        showresult,
        setshowresult,
        loading,
        setloading,
        resultdata,
        setresultdata,
        newchat,
        onsent,
      }}
    >
      {props.children}
    </context.Provider>
  );
};

export default ContextProvider;