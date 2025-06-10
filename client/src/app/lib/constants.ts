export const COOKIE_KEYS: Record<string, string> = {
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

export const COOKIE_EXPIRATION_DAYS: number = 365 as const;

export const FALLBACK_COOKIE_CONSENT: Record<string, boolean> = {
  [COOKIE_ESSENTIAL_KEY]: true,
  marketing: false,
  analytics: false,
  functional: false
} as const;

export const FALLBACK_THEME: string = "system" as const;

export const FALLBACK_LAPTOP_SCREEN_WIDTH: number = 1152 as const;

export const FALLBACK_TABLET_SCREEN_WIDTH: number = 896 as const;

export const FALLBACK_MOBILE_SCREEN_WIDTH: number = 375 as const;
