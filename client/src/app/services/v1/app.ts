import { get } from "@/app/lib/https";

export const getHello = async (): Promise<Response> => {
  const requestUrl: URL = new URL("api/v1/app/get-hello", process.env.NEXT_PUBLIC_CLIENT_URL);
  return get(requestUrl.toString());
};
