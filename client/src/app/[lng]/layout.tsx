import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextFontWithVariable } from "next/dist/compiled/@next/font";
import { getT } from "@/app/i18n/index";
import "./globals.css";
import Header from "./components/Header";
import CookieBanner from "./components/CookieBanner";

const geistSans: NextFontWithVariable = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono: NextFontWithVariable = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getT("app", [null, "app"]);
  return {
    title: t("layout.title"),
    description: t("layout.description")
  };
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { i18n } = await getT("", [null, ""]);
  return (
    <html lang={i18n.language}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
