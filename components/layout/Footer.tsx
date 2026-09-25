import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { SITE, FOOTER_LINKS, NAV_LINKS } from "@/constants/site";

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1E112hMToW/",
    Icon: Facebook,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/kairoshomerealty?stkn=bHNudzk2amJudjVt",
    Icon: Instagram,
  },
  {
    label: "WhatsApp",
    href: `https://wa.me/${SITE.whatsapp}`,
    Icon: MessageCircle,
  },
];

export function Footer() {
  return (
    <footer className="bg-navy-gradient text-white/80">
      <div className="container-xl px-6 py-16 lg:px-12 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="relative h-32 w-28">
              <Image
                src="/logo-full-dark.png"
                alt="Kairos Home Realty"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              {SITE.description}
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit us on ${label}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-gold hover:text-gold"
                >
                  {label === "WhatsApp" ? (
                    <span className="relative flex h-[18px] w-[18px] items-center justify-center">
                      <MessageCircle size={18} />
                      <Phone size={8} className="absolute" />
                    </span>
                  ) : (
                    <Icon size={16} />
                  )}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold">Pages</h4>
            <ul className="space-y-3 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition-colors hover:text-gold">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold">Services</h4>
            <ul className="space-y-3 text-sm">
              {FOOTER_LINKS.services.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition-colors hover:text-gold">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 shrink-0 text-gold" />
                <span>{SITE.phone}</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 shrink-0 text-gold" />
                <span>{SITE.email}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
                <span>{SITE.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 md:flex-row">
          <p>© {new Date().getFullYear()} Kairos Home Realty. All rights reserved.</p>
          <div className="flex gap-6">
            {FOOTER_LINKS.legal.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-gold">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
