import React from 'react'
import { Card, Typography } from 'antd'
import { IInvoice } from '../../../../shared/types/IInvoice'

interface IDueDateProps {
  dueDate: IInvoice['dueDate']
}

export default React.memo((props: IDueDateProps) => {
  const isExpired = new Date(props.dueDate) < new Date()

  return (
    <>
      <Typography.Text
        type={isExpired ? 'danger' : 'success'}
        className={`Invoice__dueDate${
          isExpired ? ' Invoice__dueDate-expired' : ''
        }`}
      >
        {props.dueDate}
      </Typography.Text>
      {isExpired ? <Card color="red">Expired</Card> : null}
    </>
  )
})
