import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RackWise — Sistem Manajemen Gudang",
  description:
    "RackWise adalah sistem manajemen gudang (WMS) berbasis web untuk kebutuhan cold storage dan distribusi modern.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}