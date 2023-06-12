import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { Table, Typography } from 'antd'
import { InvoicesLoader } from './loader'
import useColumnsConfig from './hooks/useColumnsConfig/useColumnsConfig'
import './Invoices.scss'

export default function Invoices() {
  const { invoices, project } = useLoaderData() as InvoicesLoader
  const columns = useColumnsConfig(project.id)

  return (
    <div className="Invoices">
      <Typography.Title level={3}>{project.name}</Typography.Title>
      <Table className="Invoices__table" columns={columns} dataSource={invoices} />
    </div>
  )
}
