'use client';
import { useLanguage } from './use-language';
import { translations } from '@/lib/content/translations';

export const useTranslation = () => {
  const { language } = useLanguage();

  const t = translations[language];

  return { t, language };
};
