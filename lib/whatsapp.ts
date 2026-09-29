import { SITE } from "@/constants/site";

export function getWhatsAppUrl(projectName?: string) {
  const message = projectName
    ? `Hi Kairos Home Realty Team, I’m interested in ${projectName}. Please share the latest available details.`
    : "Hi Kairos Home Realty Team, I’d like help finding the right property.";

  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function getProjectDetailsWhatsAppUrl(projectName: string) {
  const message = `Hi Kairos Home Realty Team, I’d like current details about ${projectName}.`;
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}
