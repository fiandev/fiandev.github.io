import { translate } from "@vitalets/google-translate-api";

const DEFAULT_LANG = "id";

export function getClientLocale(): string {
    return navigator.language || DEFAULT_LANG;
}


export async function __(text: string): Promise<string> {
    const clientLanguage = getClientLocale();
    const { text: translatedText } = await translate(text, { to: clientLanguage });
    return translatedText;
}