import localFont from "next/font/local";
import { Metadata } from "next";
import { cookies } from "next/headers";
import { NextFontWithVariable } from "next/dist/compiled/@next/font";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import i18next from "@/app/i18n/i18next";
import { getT } from "@/app/i18n/index";
import { COOKIE_KEYS, FALLBACK_THEME } from "@/app/lib/constants";
import ResponsiveProvider from "./components/ResponsiveContext";
import "./globals.css";

const geistSans: NextFontWithVariable = localFont({
  src: "../fonts/Geist/Geist-VariableFont_wght.ttf",
  variable: "--font-geist-sans"
});

const geistMono: NextFontWithVariable = localFont({
  src: "../fonts/Geist_Mono/GeistMono-VariableFont_wght.ttf",
  variable: "--font-geist-mono"
});

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getT("app", [null, "app"]);
  return {
    title: t("layout.title")
  };
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>): Promise<React.ReactNode> {
  const cookieStore: ReadonlyRequestCookies = await cookies();
  const theme: string = cookieStore.get(COOKIE_KEYS.THEME)?.value || FALLBACK_THEME;

  return (
    <html lang={i18next.language} className={theme}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ResponsiveProvider>
          {children}
        </ResponsiveProvider>
      </body>
    </html>
  );
}
