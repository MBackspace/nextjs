import { Suspense } from "react";
import { app } from "@/app/services/app";
import { getT } from "@/app/i18n/index";

const Fallback = async (): Promise<React.ReactNode> => {
  const { t } = await getT("app", [null, "app"]);
  return (
    <div className="p-4">
      <p className="text-sm font-medium mb-2">{t("app.dataFromApi")}</p>
      <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
    </div>
  );
}

const Text = async (): Promise<React.ReactNode> => {
  const response: Response = await app();
  return <p className="text-sm">{response.text()}</p>;
}

export default async function App(): Promise<React.ReactNode> {
  const { t } = await getT("app", [null, "app"]);
  return (
    <Suspense fallback={<Fallback />}>
      <div className="p-4">
        <p className="text-sm font-medium mb-2">{t("app.dataFromApi")}</p>
        <Text />
      </div>
    </Suspense>
  );
}
