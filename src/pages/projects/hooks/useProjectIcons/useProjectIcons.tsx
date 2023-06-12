import React from 'react'
import { Space } from 'antd'
import { ClockCircleOutlined, FileTextOutlined } from '@ant-design/icons'
import { IProject } from '../../../../shared/types/IProject'

interface IUseProjectIconsProps {
  invoices: IProject['invoices']
  expired?: IProject['expired']
}

export default function useProjectIcons(props: IUseProjectIconsProps) {
  const { expired, invoices } = props

  return React.useMemo(
    () => [
      <Space
        key="invoices-data"
        className="ProjectItem__action"
        title="Invoices"
      >
        <FileTextOutlined />
        {invoices}
      </Space>,
    ].concat(
      expired ? (
        <Space
          key="expired-data"
          className="ProjectItem__action ProjectItem__action-alert"
          title="Expired invoices"
        >
          <ClockCircleOutlined />
          {expired}
        </Space>
      ) : (
        []
      ),
    ),
    [expired, invoices],
  )
}
