import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const urbanist = Urbanist({
  subsets: ["latin"],
});

// Esto es para temas de SEO (cambiar luego)
export const metadata: Metadata = {
  title: "Scrunchies VR",
  description: "Bienvenido a la tierra mágica de los scrunchies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={urbanist.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
