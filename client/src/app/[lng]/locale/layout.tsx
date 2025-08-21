import { Metadata } from "next";
import { getT } from "@/app/i18n/index";
import { OptionalI18n } from "@/app/lib/constants";

export async function generateMetadata(): Promise<Metadata> {
  const { t }: OptionalI18n = await getT("locale", [null, "locale"]);

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
