import { IInvoiceItem } from '../../shared/types/IInvoiceItem'

export const getItemPrice = (item: IInvoiceItem) => Math.round(item.rate * item.hours * 100) / 100

export const getItemTotalPrice = (item: IInvoiceItem, discount = 0) => {
  const price = getItemPrice(item)
  const discountAmount = (discount / 100) * price
  const priceWithDiscount = price - discountAmount
  const taxAmount = priceWithDiscount * (item.taxes / 100)

  return Math.round((priceWithDiscount + taxAmount) * 100) / 100
}
