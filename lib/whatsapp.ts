import { CONTACT } from './constants';

export function getWhatsAppUrl(message?: string): string {
  const phone = CONTACT.whatsapp.replace(/\D/g, '');

  return `https://wa.me/${phone}${
    message ? `?text=${encodeURIComponent(message)}` : ''
  }`;
}