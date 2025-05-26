import { Geist, Geist_Mono } from "next/font/google";
import { cookies } from "next/headers";
import { Metadata } from "next";
import { NextFontWithVariable } from "next/dist/compiled/@next/font";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { getT } from "@/app/i18n/index";
import { COOKIE_KEYS } from "@/app/lib/cookies";
import Header from "./components/Header";
import CookieBanner from "./components/CookieBanner";
import "./globals.css";

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
  const cookieStore: ReadonlyRequestCookies = await cookies();
  const theme: string = cookieStore.get(COOKIE_KEYS.THEME)?.value || "";
  return (
    <html lang={i18n.language} className={theme}>
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
