import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

export default function AuthLayout({ children }) {
  
  return (
    <Layout className="site-layout" style={{ minHeight: '100vh' }}>
       <Content style={{ margin: '0 auto', padding: 15 }}>
       {children}
       </Content>
      </Layout>   
  );

}
