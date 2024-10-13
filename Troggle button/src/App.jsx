import React, { useState, useEffect } from "react";
import ThemeBtn from "./Component/Theme";
import Card from "./Component/Card";
import { ThemeProvider } from "./contaxt/theme";

const App = () => {
  const [theme, setThemeMode] = useState('light')
  const darkMode =()=>{
    setThemeMode('dark')
  }
  const lightMode =()=>{
    setThemeMode('light')
  }

  useEffect(() => {
    document.querySelector("html").classList.remove("light","dark")
    document.querySelector("html").classList.add(theme)
  }, [theme])
  
  return (
    <ThemeProvider value={{theme , darkMode, lightMode}}>
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <ThemeBtn />
        </div>
        <div className="w-full max-w-sm mx-auto">
          <Card />
        </div>
      </div>
    </div>   
    </ThemeProvider>
  );
};

export default App;
