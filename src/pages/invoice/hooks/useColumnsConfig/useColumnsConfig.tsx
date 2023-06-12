import React from 'react'
import { ColumnsType } from 'antd/es/table'
import { Typography } from 'antd'
import { IInvoice } from '../../../../shared/types/IInvoice'
import { IInvoiceItem } from '../../../../shared/types/IInvoiceItem'
import { getItemPrice, getItemTotalPrice } from '../../helpers'

export default function useColumnsConfig(invoice: Partial<IInvoice>): ColumnsType<IInvoiceItem> {
  return React.useMemo(() => [
    {
      title: 'Title',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Rate per hour, EUR',
      dataIndex: 'rate',
      key: 'rate',
    },
    {
      title: 'Hours',
      dataIndex: 'hours',
      key: 'hours',
    },
    {
      title: 'Price, EUR',
      key: 'price',
      render: (_, record) => (
        <Typography.Text type="success">
          {getItemPrice(record)}
        </Typography.Text>
      ),
    },
    {
      title: 'Discount, %',
      key: 'discount',
      render: () => invoice.discount,
    },
    {
      title: 'Taxes, %',
      dataIndex: 'taxes',
      key: 'taxes',
    },
    {
      title: 'Total price, EUR',
      dataIndex: 'total',
      key: 'total',
      render: (_, record) => (
        <Typography.Text type="danger">
          {getItemTotalPrice(record, invoice.discount)}
        </Typography.Text>
      ),
    },
  ], [invoice.discount])
}
