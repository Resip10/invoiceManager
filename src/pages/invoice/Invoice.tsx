import React from 'react'
import { Card, Table, Typography } from 'antd'
import { useLoaderData } from 'react-router-dom'
import { InvoiceLoader } from './loader'
import useColumnsConfig from './hooks/useColumnsConfig/useColumnsConfig'
import { getItemPrice, getItemTotalPrice } from './helpers'
import './Invoice.scss'

export default function Invoice() {
  const { items, invoice, project } = useLoaderData() as InvoiceLoader
  const columns = useColumnsConfig(invoice)
  const DueDate = React.useMemo(() => {
    const isExpired = new Date(invoice.dueDate) < new Date()

    return (
      <div
        className={`Invoice__dueDate${
          isExpired ? ' Invoice__dueDate-expired' : ''
        }`}
      >
        {invoice.dueDate}
        {isExpired ? ' (Expired)' : null}
      </div>
    )
  }, [invoice.dueDate])

  return (
    <Card title={project.name} className="Invoice" actions={[<div>Print</div>]}>
      <Card.Meta title={`#${invoice.id}`} description={DueDate} />
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

          return (
            <Table.Summary.Row>
              <Table.Summary.Cell colSpan={2} index={0} />
              <Table.Summary.Cell index={2}>
                <Typography.Text strong>Subtotal</Typography.Text>
              </Table.Summary.Cell>
              <Table.Summary.Cell index={3}>
                <Typography.Text type="success">{subtotal}</Typography.Text>
              </Table.Summary.Cell>
              <Table.Summary.Cell index={4} />
              <Table.Summary.Cell index={5}>
                <Typography.Text strong>Total</Typography.Text>
              </Table.Summary.Cell>
              <Table.Summary.Cell index={6}>
                <Typography.Text type="danger">{total}</Typography.Text>
              </Table.Summary.Cell>
            </Table.Summary.Row>
          )
        }}
      />
    </Card>
  )
}
