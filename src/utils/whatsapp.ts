import { CartItem } from '../types';
import { formatCurrency } from './formatCurrency';

export const generateWhatsAppMessage = (
  items: CartItem[],
  subtotal: number,
  deliveryFee: number,
  total: number
): string => {
  const orderDetails = items
    .map((item) => `${item.quantity}x ${item.name} - ${formatCurrency(item.price * item.quantity)}`)
    .join('\n');

  const message = `New Order:\n\n${orderDetails}\n\nSubtotal: ${formatCurrency(subtotal)}\nDelivery: ${formatCurrency(deliveryFee)}\nTotal: ${formatCurrency(total)}`;

  return `https://wa.me/?text=${encodeURIComponent(message)}`;
}