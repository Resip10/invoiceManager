import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { Table } from 'antd'
import { InvoicesLoader } from './loader'
import useColumnsConfig from './hooks/useColumnsConfig/useColumnsConfig'
import './Invoices.scss'

export default function Invoices() {
  const { invoices, project } = useLoaderData() as InvoicesLoader
  const columns = useColumnsConfig(project.id)

  return (
    <div className="Invoices">
      <Table className="Invoices__table" columns={columns} dataSource={invoices} />
    </div>
  )
}
