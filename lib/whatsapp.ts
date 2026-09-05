import { CONTACT } from './constants';

/**
 * Builds a wa.me deep link with a pre-filled, context-specific message.
 * Using a relevant pre-filled message (instead of one generic message
 * everywhere) reduces typing friction for the visitor and gives the
 * Infolink Services team immediate context on what the lead is asking about.
 */
export function getWhatsAppUrl(message?: string): string {
  const text =
    message?.trim() || CONTACT.whatsappMessage;

  const phone = CONTACT.whatsapp.replace(/\D/g, '');

  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}