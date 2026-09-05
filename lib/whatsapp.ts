import { CONTACT } from './constants';

export function getWhatsAppUrl(message?: string): string {
  const phone = CONTACT.whatsapp.replace(/\D/g, '');

  const text = message?.trim() || CONTACT.whatsappMessage;

  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}