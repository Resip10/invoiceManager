import { IProject } from '../../shared/types/IProject'

export type ProjectsLoader = { projects: IProject[] }
export async function loader(): Promise<ProjectsLoader> {
  const data = await fetch('MOCK_PROJECTS.json')
  const projects = await data.json()

  return { projects }
}
