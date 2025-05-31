export const COOKIE_KEYS = {
  CONSENT: "fides_consent",
  THEME: "theme"
} as const;

export const COOKIE_ESSENTIAL_KEY: string = "essential" as const;

export const COOKIE_CATEGORY_MAP: Record<string, string[]> = {
  [COOKIE_ESSENTIAL_KEY]: [COOKIE_KEYS.THEME],
  marketing: [],
  analytics: [],
  functional: []
} as const;

export const COOKIE_EXPIRATION_DAYS = 365 as const;

export const FALLBACK_COOKIE_CONSENT = {
  [COOKIE_ESSENTIAL_KEY]: true,
  marketing: false,
  analytics: false,
  functional: false
} as const;

export const FALLBACK_THEME = "system" as const;
