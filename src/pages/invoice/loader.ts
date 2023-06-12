import { LoaderFunctionArgs } from '@remix-run/router/utils'
import { IInvoiceItem } from '../../shared/types/IInvoiceItem'

export type InvoiceLoader = { items: IInvoiceItem[] }
export async function loader({ params }: LoaderFunctionArgs): Promise<InvoiceLoader> {
  const data = await fetch(`MOCK_PROJECT_${params.id}_INVOICES.json`)
  const items = await data.json()

  return { items }
}
