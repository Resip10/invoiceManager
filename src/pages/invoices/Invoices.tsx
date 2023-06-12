import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { Table } from 'antd'
import { InvoicesLoader } from './loader'
import './Invoices.scss'
import { getColumnsConfig } from './helpers'

export default function Invoices() {
  const { invoices } = useLoaderData() as InvoicesLoader
  const columns = getColumnsConfig()

  return (
    <div className="Invoices">
      <Table className="Invoices__table" columns={columns} dataSource={invoices} />
    </div>
  )
}
