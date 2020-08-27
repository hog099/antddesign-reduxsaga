import React, { useState } from 'react';
import { Switch } from "antd";
import { useThemeSwitcher } from "react-css-theme-switcher";


// import { Container } from './styles';


export default function Home() {

  const [isDarkMode, setIsDarkMode] = useState();
  const { switcher, currentTheme, status, themes } = useThemeSwitcher();

  const toggleTheme = (isChecked) => {
    setIsDarkMode(isChecked);
    switcher({ theme: isChecked ? themes.dark : themes.light });
  };


  return (
    <>
      <p style={{fontFamily: 'Montserrat-Regular'}}>Dashboard</p>

      <Switch checked={isDarkMode} onChange={toggleTheme} />


    </>
  );
}
