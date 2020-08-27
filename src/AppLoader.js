import React from 'react';

import { Router } from 'react-router-dom';

import { ThemeSwitcherProvider } from "react-css-theme-switcher";


import Routes from './routes/index';
import history from './services/history';

import 'antd/dist/antd.css'
// import 'antd/dist/antdantd.compact.css'

import GlobalStyle from './styles/GlobalStyles';

const themes = {
  dark: `/src/assets/antd/less/dark-theme.less`,
  light: `/src/assets/antd/less/light-theme.less`,
};

// Trazer do reducer com userSeletor o estado do tema escuro, por isso tem o APPLOADER pq por este componente ja conseguimos acessar o redux pelo useSelector, e persistir o tema dark ou light

const AppLoader = () =>{

  return (
    <ThemeSwitcherProvider themeMap={themes} defaultTheme="light" insertionPoint="styles-insertion-point">
        <Router history={history}>
          <GlobalStyle />
          <Routes />
        </Router> 
    </ThemeSwitcherProvider>
  );
  
}

export default AppLoader;
