import { LoaderFunctionArgs } from '@remix-run/router/utils'
import { IInvoice } from '../../shared/types/IInvoice'
import { IProject } from '../../shared/types/IProject'

export type InvoicesLoader = {
  invoices: IInvoice[]
  project: Pick<IProject, 'id' | 'name'>
}
export async function loader({ params }: LoaderFunctionArgs): Promise<InvoicesLoader> {
  const data = await fetch(`MOCK_PROJECT_${params.id}_INVOICES.json`)
  const { invoices, project_metadata: project } = await data.json()

  return { invoices, project }
}
