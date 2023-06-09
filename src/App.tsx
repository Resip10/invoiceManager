import React from 'react'
import './App.scss'
import { ConfigProvider, Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import Header from './shared/components/Header/Header'

function App() {
  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            colorBgHeader: '#232328',
          },
        },
      }}
    >
      <div className="App">
        <Layout className="App__layout">
          <Header />
          <Layout.Content className="App__content">
            <Outlet />
          </Layout.Content>
        </Layout>
      </div>
    </ConfigProvider>
  )
}

export default App
