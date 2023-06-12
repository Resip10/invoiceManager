import React from 'react'
import { Tag, Typography } from 'antd'
import { IInvoice } from '../../../../shared/types/IInvoice'
import './DueDate.scss'

interface IDueDateProps {
  dueDate: IInvoice['dueDate']
}

export default React.memo((props: IDueDateProps) => {
  const isExpired = new Date(props.dueDate) < new Date()

  return (
    <div className="DueDate">
      <Typography.Text
        type={isExpired ? 'danger' : 'success'}
        className={`Invoice__dueDate${
          isExpired ? ' Invoice__dueDate-expired' : ''
        }`}
      >
        {props.dueDate}
      </Typography.Text>
      {isExpired ? <Tag color="red">Expired</Tag> : null}
    </div>
  )
})
