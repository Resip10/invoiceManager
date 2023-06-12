import { LoaderFunctionArgs } from '@remix-run/router/utils'
import { IInvoice } from '../../shared/types/IInvoice'

export type InvoicesLoader = { invoices: IInvoice[] }
export async function loader({ params }: LoaderFunctionArgs): Promise<InvoicesLoader> {
  const data = await fetch(`MOCK_PROJECT_${params.id}_INVOICES.json`)
  const invoices = await data.json()

  return { invoices }
}
