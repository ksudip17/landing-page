import Image, { type StaticImageData } from "next/image";

import acmeLogo from "@/assets/logo-acme.png";
import apexLogo from "@/assets/logo-apex.png";
import celestialLogo from "@/assets/logo-celestial.png";
import echoLogo from "@/assets/logo-echo.png";
import pulseLogo from "@/assets/logo-pulse.png";
import quantumLogo from "@/assets/logo-quantum.png";

const logos: Array<{ name: string; image: StaticImageData }> = [
  { name: "Acme", image: acmeLogo },
  { name: "Quantum", image: quantumLogo },
  { name: "Echo", image: echoLogo },
  { name: "Celestial", image: celestialLogo },
  { name: "Pulse", image: pulseLogo },
  { name: "Apex", image: apexLogo },
];

const LogoSet = ({ hidden = false }: { hidden?: boolean }) => (
  <div className="flex flex-none items-center gap-12 pr-12 sm:gap-16 sm:pr-16" aria-hidden={hidden}>
    {logos.map((logo) => (
      <Image
        key={logo.name}
        src={logo.image}
        alt={hidden ? "" : `${logo.name} logo`}
        sizes="(max-width: 767px) 110px, 150px"
        className="h-7 w-auto max-w-[130px] object-contain opacity-65 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 sm:h-8 sm:max-w-[160px]"
      />
    ))}
  </div>
);

export const LogoTicker = () => {
  return (
    <section
      id="customers"
      aria-labelledby="customers-title"
      className="overflow-hidden border-b border-[#172047]/5 bg-white py-10 sm:py-12"
    >
      <div className="container">
        <h2
          id="customers-title"
          className="mb-7 text-center text-xs font-bold uppercase tracking-[0.16em] text-[#68739d]"
        >
          Trusted by thoughtful teams at
        </h2>
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="logo-track flex w-max items-center">
            <LogoSet />
            <LogoSet hidden />
          </div>
        </div>
      </div>
    </section>
  );
};
