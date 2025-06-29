import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Next Auth Dashboard",
  description: "Simple Auth Flow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
