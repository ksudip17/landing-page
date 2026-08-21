import type { ComponentType, SVGProps } from "react";
import Image from "next/image";

import logo from "@/assets/logosaas.png";
import {
  InstagramIcon,
  LinkedInIcon,
  PinterestIcon,
  XIcon,
  YouTubeIcon,
} from "@/components/Icons";

const footerLinks = [
  { label: "Product", href: "#features" },
  { label: "Customers", href: "#customers" },
  { label: "Pricing", href: "#pricing" },
  { label: "Stories", href: "#testimonials" },
];

const socialLinks: Array<{
  label: string;
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}> = [
  { label: "Follow Pathway on X", href: "https://x.com/", icon: XIcon },
  {
    label: "Follow Pathway on Instagram",
    href: "https://www.instagram.com/",
    icon: InstagramIcon,
  },
  {
    label: "Follow Pathway on LinkedIn",
    href: "https://www.linkedin.com/",
    icon: LinkedInIcon,
  },
  {
    label: "Follow Pathway on Pinterest",
    href: "https://www.pinterest.com/",
    icon: PinterestIcon,
  },
  {
    label: "Watch Pathway on YouTube",
    href: "https://www.youtube.com/",
    icon: YouTubeIcon,
  },
];

export const Footer = () => {
  return (
    <footer className="bg-[#090d20] py-12 text-sm text-[#b8bfd9] sm:py-14">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <a
            href="#top"
            className="group inline-flex items-center gap-2 rounded-lg font-bold tracking-[-0.04em] text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Back to Pathway home"
          >
            <span className="relative inline-flex h-10 w-10 items-center justify-center">
              <span className="absolute inset-1 rounded-full bg-[linear-gradient(135deg,#fa91e7,#d5e29d,#54d9ff)] blur-md transition duration-300 group-hover:blur-lg" />
              <Image
                src={logo}
                alt=""
                width={40}
                height={40}
                className="relative h-10 w-10"
              />
            </span>
            <span>Pathway</span>
          </a>

          <nav aria-label="Footer navigation" className="mt-7">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="rounded-md font-medium transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-7 flex items-center justify-center gap-2">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                  aria-label={social.label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>

          <p className="mt-8 text-xs text-[#7f88ae]">
            © 2026 Pathway, Inc. Built for meaningful momentum.
          </p>
        </div>
      </div>
    </footer>
  );
};
