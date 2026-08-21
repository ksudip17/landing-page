import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const iconProps = {
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": true,
  focusable: false,
} as const;

export const ArrowRightIcon = (props: IconProps) => (
  <svg {...iconProps} {...props}>
    <path
      d="M5 12h14m-6-6 6 6-6 6"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const MenuIcon = (props: IconProps) => (
  <svg {...iconProps} {...props}>
    <path
      d="M4 7h16M4 12h16M4 17h16"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

export const CloseIcon = (props: IconProps) => (
  <svg {...iconProps} {...props}>
    <path
      d="m6 6 12 12M18 6 6 18"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

export const CheckIcon = (props: IconProps) => (
  <svg {...iconProps} {...props}>
    <path
      d="m5 12.5 4.25 4.25L19 7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const XIcon = (props: IconProps) => (
  <svg {...iconProps} {...props}>
    <path
      d="M18.72 4H21l-4.98 5.69L21.88 20h-4.59l-3.6-4.7L9.57 20H7.28l5.32-6.08L6.98 4h4.7l3.25 4.3L18.72 4Zm-.8 14.63h1.26L10.99 5.3H9.64l8.28 13.33Z"
      fill="currentColor"
    />
  </svg>
);

export const InstagramIcon = (props: IconProps) => (
  <svg {...iconProps} {...props}>
    <rect
      x="3.5"
      y="3.5"
      width="17"
      height="17"
      rx="4.5"
      stroke="currentColor"
      strokeWidth="1.75"
    />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.75" />
    <circle cx="17.35" cy="6.75" r="1" fill="currentColor" />
  </svg>
);

export const LinkedInIcon = (props: IconProps) => (
  <svg {...iconProps} {...props}>
    <path
      d="M6.8 9.25v8.1M6.8 6.55v.1M10.55 17.35v-4.5c0-2.25 1.2-3.6 3.1-3.6 1.75 0 3 1.25 3 3.75v4.35m-6.1-4.4c0-2.35 1.05-3.7 3.1-3.7 1.95 0 3 1.4 3 3.75"
      stroke="currentColor"
      strokeWidth="1.85"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="3.5"
      y="3.5"
      width="17"
      height="17"
      rx="2.5"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);

export const PinterestIcon = (props: IconProps) => (
  <svg {...iconProps} {...props}>
    <path
      d="M12.2 4.5a7.5 7.5 0 0 0-2.66 14.52c-.04-1.23 0-2.7.3-3.99l.91-3.86s-.23-.47-.23-1.17c0-1.1.64-1.92 1.43-1.92.67 0 1 .5 1 1.1 0 .68-.43 1.68-.65 2.62-.19.78.39 1.42 1.16 1.42 1.4 0 2.34-1.8 2.34-3.94 0-1.63-1.1-2.85-3.1-2.85-2.27 0-3.68 1.7-3.68 3.6 0 .66.2 1.13.52 1.5.14.16.16.23.1.42l-.16.66c-.06.27-.24.36-.45.26-1.25-.5-1.83-1.84-1.83-3.35 0-2.5 2.12-5.5 6.32-5.5 3.37 0 5.59 2.44 5.59 5.07 0 3.47-1.93 6.06-4.77 6.06-.96 0-1.86-.52-2.17-1.11l-.59 2.34c-.35 1.3-1.02 2.6-1.63 3.42A7.5 7.5 0 1 0 12.2 4.5Z"
      fill="currentColor"
    />
  </svg>
);

export const YouTubeIcon = (props: IconProps) => (
  <svg {...iconProps} {...props}>
    <path
      d="M20.2 7.1c-.2-.8-.82-1.42-1.62-1.63C17.13 5.1 12 5.1 12 5.1s-5.13 0-6.58.37c-.8.2-1.42.82-1.62 1.63C3.45 8.55 3.45 12 3.45 12s0 3.45.35 4.9c.2.8.82 1.42 1.62 1.63 1.45.37 6.58.37 6.58.37s5.13 0 6.58-.37c.8-.2 1.42-.82 1.62-1.63.35-1.45.35-4.9.35-4.9s0-3.45-.35-4.9Z"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinejoin="round"
    />
    <path d="m10.35 9.35 4.35 2.65-4.35 2.65V9.35Z" fill="currentColor" />
  </svg>
);
