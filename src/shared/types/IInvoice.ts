export interface IInvoice {
  id: string
  items: number
  price: number
  dueDate: string
  discount?: number
}
