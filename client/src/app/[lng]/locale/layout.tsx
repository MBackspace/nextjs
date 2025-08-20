import { Metadata } from "next";
import { TFunction } from "i18next";
import { getT } from "@/app/i18n/index";

export async function generateMetadata(): Promise<Metadata> {
  const { t }: { t: TFunction } = await getT("locale", [null, "locale"]);

  return {
    title: t("layout.title")
  };
};

export default async function Layout({
  children
}: Readonly<{
  children: React.ReactNode;
}>): Promise<React.ReactNode> {
  return children;
}
