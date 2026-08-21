"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import Logo from "@/assets/logosaas.png";
import { ArrowRightIcon, CloseIcon, MenuIcon } from "@/components/Icons";

const navigation = [
  { label: "Product", href: "#features" },
  { label: "Customers", href: "#customers" },
  { label: "Pricing", href: "#pricing" },
  { label: "Stories", href: "#testimonials" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const desktopMediaQuery = window.matchMedia("(min-width: 768px)");
    const closeMenuOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setIsMenuOpen(false);
      }
    };

    desktopMediaQuery.addEventListener("change", closeMenuOnDesktop);

    return () => {
      desktopMediaQuery.removeEventListener("change", closeMenuOnDesktop);
    };
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="sticky top-0 z-50">
        <div className="border-b border-white/10 bg-[#0a1028] px-5 py-2.5 text-center text-xs text-white sm:text-sm">
          <a
            href="#pricing"
            className="inline-flex items-center justify-center gap-2 rounded-sm font-medium text-white/80 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span className="hidden sm:inline">
              Build a calmer, more focused way of working.
            </span>
            <span className="font-semibold text-white">Explore plans</span>
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </div>

        <div className="relative border-b border-[#18224d]/10 bg-[#f6f8ff]/80 backdrop-blur-xl">
          <div className="container">
            <div className="flex h-[68px] items-center justify-between">
              <a
                href="#top"
                className="inline-flex items-center gap-2 rounded-lg font-bold tracking-[-0.04em] text-[#111936] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6366F1]"
                aria-label="Pathway home"
              >
                <Image
                  src={Logo}
                  alt=""
                  width={38}
                  height={38}
                  priority
                  className="h-9 w-9"
                />
                <span>Pathway</span>
              </a>

              <nav aria-label="Primary navigation" className="hidden items-center gap-6 md:flex">
                {navigation.map((item) => (
                  <a key={item.href} className="nav-link" href={item.href}>
                    {item.label}
                  </a>
                ))}
                <a className="btn btn-primary min-h-10 px-4 py-2" href="#pricing">
                  View plans
                </a>
              </nav>

              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-[#111936] transition hover:bg-[#172047]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6366F1] md:hidden"
                aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-navigation"
                onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
              >
                {isMenuOpen ? (
                  <CloseIcon className="h-5 w-5" />
                ) : (
                  <MenuIcon className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <nav
              id="mobile-navigation"
              aria-label="Mobile navigation"
              className="absolute inset-x-0 top-full border-b border-[#172047]/10 bg-white px-5 py-5 shadow-xl md:hidden"
            >
              <div className="container flex flex-col gap-1">
                {navigation.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-xl px-4 py-3 text-base font-semibold text-[#172047] transition hover:bg-[#eef1ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6366F1]"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  className="btn btn-primary mt-3 w-full"
                  href="#pricing"
                  onClick={closeMenu}
                >
                  View plans
                  <ArrowRightIcon className="h-4 w-4" />
                </a>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};
