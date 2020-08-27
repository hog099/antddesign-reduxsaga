import React from 'react';
import { useThemeSwitcher } from "react-css-theme-switcher";
import { Layout, Row, Col, Avatar, Menu } from 'antd';


const { Header } = Layout;


export default function DefaultLayout({ children }) {

  const { currentTheme } = useThemeSwitcher();

  return (
    <Header style={{padding: 0}}>
        <div className="logo" style={{float: 'right', marginRight: 30}} >
           <Avatar shape="square" src={'https://api.adorable.io/avatars/50/abott@adorable.png'} />
          </div>
      <Menu theme={currentTheme} mode="horizontal" defaultSelectedKeys={['1']}>
        {/* <Menu.Item key="1"></Menu.Item> */}
      </Menu>
    </Header>
  );
 


}

