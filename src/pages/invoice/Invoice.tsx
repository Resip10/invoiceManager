import React from 'react'
import { Card, Table } from 'antd'
import { useLoaderData } from 'react-router-dom'
import { useReactToPrint } from 'react-to-print'
import { PrinterOutlined } from '@ant-design/icons'
import { InvoiceLoader } from './loader'
import useColumnsConfig from './hooks/useColumnsConfig/useColumnsConfig'
import { getItemPrice, getItemTotalPrice } from './helpers'
import TableSummary from './components/TableSummary/TableSummary'
import DueDate from './components/DueDate/DueDate'
import './Invoice.scss'

export default function Invoice() {
  const { items, invoice, project } = useLoaderData() as InvoiceLoader
  const columns = useColumnsConfig(invoice)
  const invoiceRef = React.useRef(null)
  const handlePrint = useReactToPrint({
    content: () => invoiceRef.current,
  })

  return (
    <Card
      ref={invoiceRef}
      title={project.name}
      className="Invoice"
      actions={[
        <PrinterOutlined className="Invoice__print" onClick={handlePrint} />,
      ]}
    >
      <Card.Meta
        title={`#${invoice.id}`}
        description={<DueDate dueDate={invoice.dueDate} />}
      />
      <Table
        className="Invoice__items"
        columns={columns}
        dataSource={items}
        pagination={false}
        summary={(itemsData) => {
          let subtotal = 0
          let total = 0

          itemsData.forEach((item) => {
            subtotal += getItemPrice(item)
            total += getItemTotalPrice(item, invoice.discount)
          })

          return <TableSummary total={total} subtotal={subtotal} />
        }}
      />
    </Card>
  )
}
