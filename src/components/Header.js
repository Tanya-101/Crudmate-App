import logo from "../assets/logo.webp";
import { useEffect, useState } from "react";

export const Header = () => {

  // Check if the theme in local storage is valid JSON
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    try {
      return JSON.parse(savedTheme) || "medium";
    } catch (error) {
      return "medium"; // default theme if parsing fails
    }
  };

  const [theme, setTheme] = useState(getInitialTheme);


  // useEffect for adding the theme class to the document element
  useEffect(() => {
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.add(theme);
  }, [theme]);

  // useEffect for setting the theme to local storage
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  //useEffect for setting theme to local Storage
  

  function themeHandler(selectedTheme){
    setTheme(selectedTheme);
  }


  return (
    <header >
        <div className="logo">
            <img src={logo} alt="logo"/>
            <span>CRUDE APP</span>
        </div>
        <div className="themeSelector">
            <span onClick={()=>{themeHandler("light")}} className={theme === "light" ? "light activeTheme":"light"}></span>
            <span onClick={()=>{themeHandler("medium")}} className={theme === "medium" ? "medium activeTheme":"medium"}></span>
            <span onClick={()=>{themeHandler("dark")}} className={theme === "dark" ? "dark activeTheme":"dark"}></span>
            <span onClick={()=>{themeHandler("gTwo")}} className={theme === "gTwo" ? "gTwo activeTheme":"gTwo"}></span>
            <span onClick={()=>{themeHandler("gOne")}} className={theme === "gOne" ? "gOne activeTheme":"gOne"}></span>
        </div>
    </header>
  )
}
