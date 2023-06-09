import React from 'react'
import { List, Space } from 'antd'
import { ClockCircleOutlined, FileTextOutlined } from '@ant-design/icons'
import { IProject } from '../../../../shared/types/IProject'
import './ProjectItem.scss'

interface IProjectItem {
  project: IProject
}
export default function ProjectItem(props: IProjectItem) {
  const { project } = props
  const actions = React.useMemo(() => [
    <Space key="invoices-data" className="ProjectItem__action" title="Invoices">
      <FileTextOutlined />
      {project.invoices}
    </Space>,
  ].concat(project.expired ? (
    <Space key="expired-data" className="ProjectItem__action ProjectItem__action-alert" title="Expired invoices">
      <ClockCircleOutlined />
      {project.expired}
    </Space>
  ) : []), [project.expired, project.invoices])

  return (
    <List.Item
      className="ProjectItem"
      actions={actions}
    >
      <List.Item.Meta
        title={project.name}
        description={project.description}
      />
    </List.Item>
  )
}
