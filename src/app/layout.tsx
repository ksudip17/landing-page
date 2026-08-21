import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Pathway — Make meaningful progress every day",
    template: "%s | Pathway",
  },
  description:
    "Pathway gives focused teams a calm, shared place to plan work, build momentum, and celebrate progress.",
  applicationName: "Pathway",
  keywords: ["productivity", "project management", "team collaboration"],
  openGraph: {
    title: "Pathway — Make meaningful progress every day",
    description:
      "Plan with clarity, stay in flow, and turn everyday work into momentum.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pathway — Make meaningful progress every day",
    description:
      "Plan with clarity, stay in flow, and turn everyday work into momentum.",
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f6f8ff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
