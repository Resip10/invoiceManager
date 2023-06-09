import { List } from 'antd'
import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { ProjectsLoader } from './loader'
import ProjectItem from './components/ProjectItem/ProjectItem'

export default function Projects() {
  const { projects } = useLoaderData() as ProjectsLoader

  return (
    <List
      itemLayout="horizontal"
      dataSource={projects}
      renderItem={(project) => <ProjectItem project={project} />}
    />
  )
}
