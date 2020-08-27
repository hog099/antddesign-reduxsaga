import React, { useState } from 'react';
import { useThemeSwitcher } from "react-css-theme-switcher";
import { Layout, Menu, Avatar } from 'antd';
import {
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

import logo from '../../../assets/img/logo.png';


const { SubMenu } = Menu;
const { Sider } = Layout;


export default function SiderMenu() {

  const [collapsed, setcollapsed] = useState(false);
  const { currentTheme } = useThemeSwitcher();
  

  return (
    <Sider 
    theme={currentTheme}
    collapsible 
    collapsed={collapsed} 
    onCollapse={() => setcollapsed(!collapsed)} 
    breakpoint="lg"
    collapsedWidth="0"
    // onBreakpoint={broken => {}}
    >

      <div className="logo" style={{ display: 'flex', padding: 24, minHeight: 30, flexDirection: 'row', justifyContent: 'center' }}>
        <Avatar shape="square" src={logo} style={{width: 60, height: 60}} />
      </div>

      <Menu theme={currentTheme} defaultSelectedKeys={['1']} mode="inline">
        {/* <Menu.Item key="1" icon={<PieChartOutlined />}>
          Menu 1
      </Menu.Item> */}
        <SubMenu key="sub1" icon={<UserOutlined />} title="Menu 01">
          <Menu.Item key="3">Item 01</Menu.Item>
          <Menu.Item key="4">Item 02</Menu.Item>
          <Menu.Item key="5">Item 03</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<TeamOutlined />} title="Menu 02">
          <Menu.Item key="6">Item 01</Menu.Item>
          <Menu.Item key="8">Item 02</Menu.Item>
        </SubMenu>
      </Menu>
      {/* <Menu.Item key="3" icon={<DesktopOutlined />}>
          Menu 3
      </Menu.Item> */}
    </Sider>
  );

}
