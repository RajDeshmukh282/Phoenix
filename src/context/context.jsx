import { createContext } from "react";
import  runChat  from "../config/gemini.js";

export const context = createContext();
const ContextProvider = (props) => {
    const onsent = async (prompt) => {
        await runChat(prompt)
    }
    onsent("Hello, how are you?");
    
    const contextValue = {

    }
    return (
        <context.Provider value={contextValue}>
            {props.children}
        </context.Provider>
    ); 
}
export default ContextProvider; 