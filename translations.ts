export type LangOptions = 'pt-br' | 'en-us';

export const TRANSLATIONS: { [K in LangOptions]: { [key: string]: string } } = Object.create(null);

TRANSLATIONS['en-us'] = {
  "Current language": "Current language",
  "Current theme": "Current theme",
  "Switch language": "Switch language",
  "Switch theme": "Switch theme",
};

TRANSLATIONS['pt-br'] = {
  "Current language": "Linguagem atual",
  "Current theme": "Tema atual",
  "Switch language": "Mudar de idioma",
  "Switch theme": "Mudar de tema",
};