import { Taxes } from './Taxes'

export interface IInvoiceItem {
  id: string
  name: string
  hours: number
  rate: number
  price: number
  taxes: Taxes
  discount?: number
}
