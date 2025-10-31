// 自定义国际化配置
import { createI18n } from 'vue-i18n';
import { useStorage } from '@vueuse/core';

import { LanguageEnum } from '@/enums/LanguageEnum';
import zh_cn from '@/lang/zh-cn';
import zh_tw from '@/lang/zh-tw';
import en from '@/lang/en';
import en_my from '@/lang/en-my';
import vi from '@/lang/vi';
import in_id from '@/lang/in-id';
import th from '@/lang/th';
import pt_br from '@/lang/pt-br';

/**
 * 获取当前语言
 * @returns
 */
export const getLanguage = (): LanguageEnum => {
  const normalizeLanguage = (val?: string): LanguageEnum => {
    if (!val) return LanguageEnum['zh_cn'];
    if (val === 'zh_cn') return LanguageEnum['zh_cn'];
    if (val === 'zh_tw') return LanguageEnum['zh_tw'];
    if (val === 'en' || val === 'en-us') return LanguageEnum.en;
    if (val === 'en_my') return LanguageEnum['en_my'];
    if (val === 'vi') return LanguageEnum.vi;
    if (val === 'in_id') return LanguageEnum['in_id'];
    if (val === 'th') return LanguageEnum.th;
    if (val === 'pt_br') return LanguageEnum['pt_br'];
    return LanguageEnum['zh_cn'];
  };

  const language = useStorage<string>('language', LanguageEnum['zh_cn']);
  return normalizeLanguage(language.value);
};

const i18n = createI18n({
  globalInjection: true,
  allowComposition: true,
  legacy: false,
  locale: getLanguage(),
  messages: {
    'zh_cn': zh_cn,
    'zh_tw': zh_tw,
    en: en,
    'en_my': en_my,
    vi: vi,
    'in_id': in_id,
    th: th,
    'pt_br': pt_br
  }
});

export default i18n;

export type LanguageType = typeof zh_cn;
