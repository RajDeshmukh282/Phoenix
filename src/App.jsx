import React, { useEffect, useState } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main";
import SplashScreen from "./components/main/SplashScreen";

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {showSplash ? (
        <SplashScreen />
      ) : (
        <>
          <Sidebar />
          <Main />
        </>
      )}
    </>
  );
};

export default App;
