import { createContext } from "react";
import { useState } from "react";
import  runChat  from "../config/gemini.js";

export const context = createContext();
const ContextProvider = (props) => {
    const [input , setinput] = useState("");
    const [recentprompts, setrecentprompts] = useState("");
    const [previousprompts, setpreviousprompts] = useState([]);
    const[showresult, setshowresult] = useState(false);
    const [loading, setloading] = useState(false);
    const [resultdata, setresultdata] = useState("");
    const onsent = async (prompt) => {
        setresultdata("");
        setloading(true);
        setshowresult(true);
        const response = await runChat(input);
        setresultdata(response);
        setloading(false);
        setinput("");
        
    }
    
    
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
        onsent
    }
    return (
        <context.Provider value={contextValue}>
            {props.children}
        </context.Provider>
    ); 
}
export default ContextProvider; 