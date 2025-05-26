import { cookieName, headerName } from "@/app/i18n/settings";
import { getT } from "@/app/i18n/index";

export const HEADER_KEYS: Record<string, string> = {
  LANGUAGE: headerName,
  THEME: "theme"
};

const BASE_URL: string = process.env.NEXT_PUBLIC_API_URL || "";

type Params = string | string[][] | Record<string, string> | URLSearchParams | undefined;
type Body = Record<string, string | number | boolean | null | undefined>;

const buildUrl = (url: string, params?: Params): string => {
  const queryString: string = params ? `?${new URLSearchParams(params).toString()}` : "";
  return `${BASE_URL}${url}${queryString}`;
};

const buildHeaders = async (headers: HeadersInit = {}): Promise<HeadersInit> => {
  const { i18n } = await getT("", [null, ""]);
  return {
    ...headers,
    [cookieName]: i18n.language,
    [HEADER_KEYS.LANGUAGE]: i18n.language
  };
};

export const get = async (url: string, params?: Params, headers: HeadersInit = {}): Promise<Response> => {
  const fullUrl: string = buildUrl(url, params);
  const finalHeaders: HeadersInit = await buildHeaders(headers);

  const response: Response = await fetch(fullUrl, {
    method: "GET",
    headers: finalHeaders,
    credentials: "include"
  });
  return response;
};

export const post = async (url: string, body: Body, headers: HeadersInit = {}): Promise<Response> => {
  const fullUrl: string = buildUrl(url);
  const finalHeaders: HeadersInit = await buildHeaders(headers);

  const response: Response = await fetch(fullUrl, {
    method: "POST",
    headers: finalHeaders,
    body: JSON.stringify(body)
  });
  return response;
};

export const put = async (url: string, body: Body, headers: HeadersInit = {}): Promise<Response> => {
  const fullUrl: string = buildUrl(url);
  const finalHeaders: HeadersInit = await buildHeaders(headers);

  const response: Response = await fetch(fullUrl, {
    method: "PUT",
    headers: finalHeaders,
    body: JSON.stringify(body)
  });
  return response;
};

export const del = async (url: string, headers: HeadersInit = {}): Promise<Response> => {
  const fullUrl: string = buildUrl(url);
  const finalHeaders: HeadersInit = await buildHeaders(headers);

  const response: Response = await fetch(fullUrl, {
    method: "DELETE",
    headers: finalHeaders
  });
  return response;
};
