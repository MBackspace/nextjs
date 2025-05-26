import { cookieName } from "@/app/i18n/settings";

export const COOKIE_KEYS: Record<string, string> = {
  LANGUAGE: cookieName,
  THEME: "theme",
  CONSENT: "fides_consent"
};

export const COOKIE_EXPIRATION_DAYS: number = 365;

export const setCookie = (name: string, value: string, days: number = COOKIE_EXPIRATION_DAYS): void => {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${date.toUTCString()}; path=/`;
};

export const getCookie = (name: string): string | null => {
  const cookieString = document.cookie;
  const cookies = cookieString.split("; ");
  for (const cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) {
      return decodeURIComponent(value);
    }
  }
  return null;
};

export const deleteCookie = (name: string): void => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
};
