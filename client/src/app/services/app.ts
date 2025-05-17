import { get } from "@/app/lib/https";

export const app = async (): Promise<Response> => {
  return get("", {}, {});
};
