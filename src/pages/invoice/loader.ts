import { LoaderFunctionArgs } from '@remix-run/router/utils'
import { IInvoiceItem } from '../../shared/types/IInvoiceItem'
import { IInvoice } from '../../shared/types/IInvoice'
import { IProject } from '../../shared/types/IProject'

export type InvoiceLoader = {
  items: IInvoiceItem[],
  invoice: Omit<IInvoice, 'items'>,
  project: Pick<IProject, 'id' | 'name'>,
}

export async function loader({ params }: LoaderFunctionArgs): Promise<InvoiceLoader> {
  const data = await fetch(`/MOCK_PROJECT_${params.id}_INVOICES_${params.invoiceId}.json`)
  const { items, invoice_metadata: invoice, project_metadata: project } = await data.json()

  return { items, invoice, project }
}
