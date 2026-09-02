import { CONTACT } from './constants';

/**
 * Builds a wa.me deep link with a pre-filled, context-specific message.
 * Using a relevant pre-filled message (instead of one generic message
 * everywhere) reduces typing friction for the visitor and gives the
 * Infolink Services team immediate context on what the lead is asking about.
 */
export function getWhatsAppUrl(message?: string): string {
  const text = message && message.trim().length > 0 ? message : CONTACT.whatsappMessage;
  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`;
}
