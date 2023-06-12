import React from 'react'
import { Link } from 'react-router-dom'
import { Divider, List } from 'antd'
import { IProject } from '../../../../shared/types/IProject'
import './ProjectItem.scss'
import useProjectIcons from '../../hooks/useProjectIcons/useProjectIcons'

interface IProjectItem {
  project: IProject
}
export default function ProjectItem(props: IProjectItem) {
  const { project } = props
  const icons = useProjectIcons(project)

  return (
    <Link relative="path" to={`./${project.id}/invoices`} className="ProjectItem">
      <List.Item
        className="ProjectItem__item"
        actions={icons}
      >
        <List.Item.Meta
          title={project.name}
          description={project.description}
        />
      </List.Item>
      <Divider className="ProjectItem__divider" />
    </Link>
  )
}
