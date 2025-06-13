import { Metadata } from "next";
import { getT } from "@/app/i18n/index";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getT("locale", [null, "locale"]);
  return {
    title: t("layout.title")
  };
};

export default async function Layout({
  children
}: Readonly<{
  children: React.ReactNode;
}>): Promise<React.ReactNode> {
  return (
    <>
      {children}
    </>
  );
}
