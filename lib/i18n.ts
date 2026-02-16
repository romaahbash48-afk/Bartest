import { dictionaries } from "@/content/i18n";

export type Lang = keyof typeof dictionaries;
export type TranslationKey = keyof (typeof dictionaries)["en"];

export type LocalizedString = Record<Lang, string>;

export function getPreferredLanguage(browserLanguage?: string): Lang {
  if (!browserLanguage) {
    return "en";
  }

  return browserLanguage.toLowerCase().startsWith("de") ? "de" : "en";
}

export function localize(lang: Lang, value: LocalizedString): string {
  return value[lang] ?? value.en;
}

export function translate(
  lang: Lang,
  key: TranslationKey,
  vars?: Record<string, string | number>
): string {
  const template = dictionaries[lang][key] ?? dictionaries.en[key] ?? key;

  if (!vars) {
    return template;
  }

  return template.replace(/\{(\w+)\}/g, (_, token: string) => {
    const replacement = vars[token];
    return replacement === undefined ? `{${token}}` : String(replacement);
  });
}
