import { get } from "@/app/lib/https";

export const getHello = async (): Promise<Response> => {
  return get("v1/app/get-hello", {}, {});
};
