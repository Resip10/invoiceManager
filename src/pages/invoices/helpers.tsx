import { ColumnsType } from 'antd/es/table'
import React from 'react'
import { IInvoice } from '../../shared/types/IInvoice'

export const getColumnsConfig = (): ColumnsType<IInvoice> => [
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
]
