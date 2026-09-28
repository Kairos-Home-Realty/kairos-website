import type { Metadata } from "next";

export function createPageMetadata({
  title,
  description,
  pathname,
  image,
}: {
  title: string;
  description: string;
  pathname: string;
  image?: string;
}): Metadata {
  const socialImage = image ?? "/logo-full-dark.png";

  return {
    title,
    description,
    alternates: { canonical: pathname },
    openGraph: {
      type: "website",
      locale: "en_IN",
      siteName: "Kairos Home Realty",
      title,
      description,
      url: pathname,
      images: [{ url: socialImage }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
  };
}
