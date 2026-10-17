import { SITE } from "@/constants/site";

const DEFAULT_WHATSAPP_MESSAGE =
  "Hi Kairos Home Realty Team, I’d like help finding the right property.";

export function getWhatsAppUrl(message = DEFAULT_WHATSAPP_MESSAGE) {
  return `https://api.whatsapp.com/send?phone=${SITE.whatsapp}&text=${encodeURIComponent(message)}`;
}
