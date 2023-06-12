import React from 'react'
import { Table, Typography } from 'antd'

interface ITableSummaryProps {
  subtotal: number
  total: number
}
export default React.memo((data: ITableSummaryProps) => (
  <Table.Summary.Row>
    <Table.Summary.Cell colSpan={2} index={0} />
    <Table.Summary.Cell index={2}>
      <Typography.Text strong>Subtotal</Typography.Text>
    </Table.Summary.Cell>
    <Table.Summary.Cell index={3}>
      <Typography.Text type="success">{data.subtotal}</Typography.Text>
    </Table.Summary.Cell>
    <Table.Summary.Cell index={4} />
    <Table.Summary.Cell index={5}>
      <Typography.Text strong>Total</Typography.Text>
    </Table.Summary.Cell>
    <Table.Summary.Cell index={6}>
      <Typography.Text type="danger">{data.total}</Typography.Text>
    </Table.Summary.Cell>
  </Table.Summary.Row>
))
