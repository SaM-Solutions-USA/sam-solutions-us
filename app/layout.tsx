import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SAM Solutions — Software Development Company",
  description:
    "Enterprise software, cloud migration, Sitecore, Magento, IoT and embedded development.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased text-[#1a1a1a] bg-white">{children}</body>
    </html>
  );
}
