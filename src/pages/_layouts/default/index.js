import React, {useState} from 'react';
import { Layout } from 'antd';

import SideMenu from '../../Components/Sidebar/index';
import Header from '../../Components/Header/index';

const { Content, Footer } = Layout;


export default function DefaultLayout({ children }) {

  return (
    <Layout style={{ minHeight: '100vh' }}>
        <SideMenu />
        <Layout className="site-layout">
          <Header />
          <Content style={{ margin: '0 16px', padding: 15 }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            {children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>©{new Date().getFullYear()} Created by Company</Footer>
        </Layout>
      </Layout>   
  );

}
