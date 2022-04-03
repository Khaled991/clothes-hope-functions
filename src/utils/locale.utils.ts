export const getCurrentLanguage = (): string | null =>
  localStorage.getItem("i18nextLng");

export const isLanguageNotInitilaized = (): boolean =>
  getCurrentLanguage() == null;
export const isArabic = (): boolean => getCurrentLanguage() === "ar-EG";
export const isEnglish = (): boolean => getCurrentLanguage() === "en-US";

export const getDirectionBasedOnLanguage = (): "right" | "left" =>
  isArabic() ? "right" : "left";
