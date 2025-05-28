export const COOKIE_KEYS = {
  CONSENT: "fides_consent",
  THEME: "theme"
} as const;

export const COOKIE_CATEGORY_MAP: Record<string, string[]> = {
  essential: [COOKIE_KEYS.THEME],
  marketing: [],
  analytics: [],
  functional: []
} as const;

export const COOKIE_ESSENTIAL_KEY: string = "essential" as const;

export const COOKIE_EXPIRATION_DAYS = 365 as const;

export const FALLBACK_THEME = "system" as const;
