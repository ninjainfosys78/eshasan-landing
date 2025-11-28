import { useLanguageStore } from '@/store/Language-store';
import { translations } from '@/i18n/translations';

export const useTranslation = () => {
  const { language } = useLanguageStore();
  const t = translations[language];
  
  return { t, language };
};