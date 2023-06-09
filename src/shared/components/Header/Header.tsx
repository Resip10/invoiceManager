import React from 'react'
import { Layout, Typography } from 'antd'
import './Header.scss'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <Layout.Header className="Header">
      <Link to="/projects"><Typography.Title level={3}>Invoice manager</Typography.Title></Link>
    </Layout.Header>
  )
}
