import { cookieName, headerName } from "@/app/i18n/settings";
import i18next from "@/app/i18n/i18next";

const BASE_URL: string = process.env.NEXT_PUBLIC_API_URL || "";

type Params = string | string[][] | Record<string, string> | URLSearchParams | undefined;
type Body = Record<string, string | number | boolean | null | undefined>;

const buildUrl = (url: string, params?: Params): string => {
  const fullUrl = new URL(url, BASE_URL);
  if (params) {
    const searchParams = new URLSearchParams(params);
    searchParams.forEach((value, key) => fullUrl.searchParams.append(key, value));
  }
  return fullUrl.toString();
};

const buildHeaders = (headers: HeadersInit = {}): HeadersInit => {
  return {
    ...headers,
    "Content-Type": "application/json; charset=utf-8",
    [cookieName]: i18next.language,
    [headerName]: i18next.language
  };
};

export const get = async (url: string, params?: Params, headers: HeadersInit = {}): Promise<Response> => {
  const fullUrl: string = buildUrl(url, params);
  const finalHeaders: HeadersInit = buildHeaders(headers);
  const response: Response = await fetch(fullUrl, {
    method: "GET",
    headers: finalHeaders,
    credentials: "include"
  });
  return response;
};

export const post = async (url: string, body: Body, headers: HeadersInit = {}): Promise<Response> => {
  const fullUrl: string = buildUrl(url);
  const finalHeaders: HeadersInit = buildHeaders(headers);
  const response: Response = await fetch(fullUrl, {
    method: "POST",
    headers: finalHeaders,
    body: JSON.stringify(body)
  });
  return response;
};

export const put = async (url: string, body: Body, headers: HeadersInit = {}): Promise<Response> => {
  const fullUrl: string = buildUrl(url);
  const finalHeaders: HeadersInit = buildHeaders(headers);
  const response: Response = await fetch(fullUrl, {
    method: "PUT",
    headers: finalHeaders,
    body: JSON.stringify(body)
  });
  return response;
};

export const del = async (url: string, headers: HeadersInit = {}): Promise<Response> => {
  const fullUrl: string = buildUrl(url);
  const finalHeaders: HeadersInit = buildHeaders(headers);
  const response: Response = await fetch(fullUrl, {
    method: "DELETE",
    headers: finalHeaders
  });
  return response;
};
