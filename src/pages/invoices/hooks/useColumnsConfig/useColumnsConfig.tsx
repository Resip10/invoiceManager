import React from 'react'
import { ColumnsType } from 'antd/es/table'
import { IInvoice } from '../../../../shared/types/IInvoice'

export default function useColumnsConfig(projectId: string): ColumnsType<IInvoice> {
  return React.useMemo(() => [
    {
      title: 'Invoice #',
      dataIndex: 'id',
      key: 'id',
      render: (id) => `#${id}`,
    },
    {
      title: 'Number of items',
      dataIndex: 'items',
      key: 'items',
    },
    {
      title: 'Due date',
      dataIndex: 'dueDate',
      key: 'dueDate',
      render: (dueDate) => <span key={dueDate} className={new Date(dueDate) < new Date() ? 'expired' : ''}>{dueDate}</span>,
    },
    {
      title: 'Discount, %',
      dataIndex: 'discount',
      key: 'discount',
    },
    {
      title: 'Total price, EUR',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <a href={`/projects/${projectId}/invoices/${record.id}`}>
          Open invoice
        </a>
      ),
    },
  ], [projectId])
}
