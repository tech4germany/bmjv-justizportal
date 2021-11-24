import { i18n } from '@lingui/core';
import { detect, fromCookie, fromNavigator, fromStorage, fromUrl } from '@lingui/detect-locale';

export function setCookie(name: string, val: string) {
  const date = new Date();
  const value = val;

  // Set it expire in 7 days
  date.setTime(date.getTime() + 7 * 24 * 60 * 60 * 1000);

  // Set it
  document.cookie = name + '=' + value + '; expires=' + date.toUTCString() + '; path=/; SameSite=Lax';
}

export const locales: { [id: string]: [string, string] } = {
  de: ['Deutsch', '🇩🇪'],
  //en: ['English (Test)', '🇬🇧'],
};

export const defaultLocale = 'de';
let userLocale = detect(fromUrl('lang'), fromCookie('lang'), fromStorage('lang'), fromNavigator()) || defaultLocale;

export const gerUserLocale = () => userLocale;

/**
 * We do a dynamic import of just the catalog that we need
 * @param locale any locale string
 */
export async function dynamicActivate(locale: string = userLocale) {
  userLocale = locale in locales ? locale : defaultLocale;

  const { messages } = await import(`./${userLocale}/messages`);
  i18n.load(userLocale, messages);
  i18n.activate(userLocale);
  setCookie('lang', userLocale);
}
