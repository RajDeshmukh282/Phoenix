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

  const delayPara = (index, nextWord) => {
    setTimeout(() => {
      setresultdata((prev) => prev + nextWord);
    }, 75 * index);
  };
  const newchat =() => {
    setloading(false);
    setshowresult(false);
  }

  const onsent = async (prompt) => {
    setresultdata("");
    setloading(true);
    setshowresult(true);

    let usedPrompt = prompt !== undefined ? prompt : input;

    // Save to previous prompts only if it's a new input
    setrecentprompts(usedPrompt);
    setpreviousprompts((prev) => [...prev, usedPrompt]);

    const response = await runChat(usedPrompt);

    // Format response
    let responseArray = response.split("**");
    let newResponse = "";
    for (let i = 0; i < responseArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newResponse += responseArray[i];
      } else {
        newResponse += "<b>" + responseArray[i] + "</b>";
      }
    }

    let newResponse2 = newResponse.split("*").join("</br>");
    let newResponseArray = newResponse2.split(" ");

    for (let i = 0; i < newResponseArray.length; i++) {
      const nextWord = newResponseArray[i];
      delayPara(i, nextWord + " ");
    }

    setloading(false);
    setinput("");
  };

  const contextValue = {
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
  };

  return (
    <context.Provider value={contextValue}>
      {props.children}
    </context.Provider>
  );
};

export default ContextProvider;
