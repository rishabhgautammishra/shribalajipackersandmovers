import { BUSINESS_INFO } from '../data/businessInfo';

/**
 * Generates a pre-formatted WhatsApp chat link for a moving quote or quick inquiry.
 */
export const createWhatsAppQuoteUrl = (formData = {}) => {
  const {
    name,
    phone,
    pickup,
    drop,
    moveDate,
    serviceType,
    homeSize,
    message
  } = formData;

  let text = `*New Relocation Enquiry - ${BUSINESS_INFO.name}*\n\n`;

  if (name) text += `👤 *Customer Name:* ${name}\n`;
  if (phone) text += `📞 *Contact Phone:* ${phone}\n`;
  if (serviceType) text += `📦 *Service:* ${serviceType}\n`;
  if (homeSize) text += `🏠 *Move Size:* ${homeSize}\n`;
  if (pickup) text += `📍 *Pickup Location:* ${pickup}\n`;
  if (drop) text += `🏁 *Drop Location:* ${drop}\n`;
  if (moveDate) text += `📅 *Planned Move Date:* ${moveDate}\n`;
  if (message) text += `💬 *Additional Note:* ${message}\n`;

  text += `\n_Sent via ${BUSINESS_INFO.name} Website Quote Form_`;

  const encodedText = encodeURIComponent(text);
  return `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodedText}`;
};

/**
 * Generates simple direct WhatsApp chat link with default message
 */
export const getDirectWhatsAppUrl = (customMsg) => {
  const msg = customMsg || BUSINESS_INFO.whatsappDefaultMsg;
  return `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(msg)}`;
};
