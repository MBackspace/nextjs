import { COOKIE_KEYS, COOKIE_ESSENTIAL_KEY, COOKIE_CATEGORY_MAP, COOKIE_EXPIRATION_DAYS } from "./constants";

type CookieKey = typeof COOKIE_KEYS[keyof typeof COOKIE_KEYS];

const getCookieCategory = (name: CookieKey): string | undefined => {
  return Object.entries(COOKIE_CATEGORY_MAP).find(([, keys]) =>
    keys.includes(name)
  )?.[0];
};

const parseConsent = (): Record<string, boolean> => {
  const consentRaw = getCookie(COOKIE_KEYS.CONSENT);
  try {
    return consentRaw ? JSON.parse(consentRaw) : {};
  } catch {
    return {};
  }
};

export const setCookie = (name: CookieKey, value: string, days: number = COOKIE_EXPIRATION_DAYS): void => {
  const type = getCookieCategory(name);
  const consent = parseConsent();
  if (name === COOKIE_KEYS.CONSENT || type === COOKIE_ESSENTIAL_KEY || (type && consent[type])) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${date.toUTCString()}; path=/`;
  }
};

export const getCookie = (name: CookieKey): string | undefined => {
  const cookieString = document.cookie;
  const cookies = cookieString.split("; ");
  for (const cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) {
      return decodeURIComponent(value);
    }
  }
  return undefined;
};

export const deleteCookie = (name: CookieKey): void => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
};
