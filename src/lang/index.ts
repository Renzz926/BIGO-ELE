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
 * @returns zh-cn|en|it ...
 */
export const getLanguage = (): LanguageEnum => {
  const normalizeLanguage = (val?: string): LanguageEnum => {
    if (!val) return LanguageEnum['zh-cn'];
    const v = val.replace('_', '-').toLowerCase();
    if (v === 'zh-cn') return LanguageEnum['zh-cn'];
    if (v === 'zh-tw') return LanguageEnum['zh-tw'];
    if (v === 'en' || v === 'en-us') return LanguageEnum.en;
    if (v === 'en-my') return LanguageEnum['en-my'];
    if (v === 'vi') return LanguageEnum.vi;
    if (v === 'in-id' || v === 'id-id') return LanguageEnum['in-id'];
    if (v === 'th') return LanguageEnum.th;
    if (v === 'pt-br') return LanguageEnum['pt-br'];
    return LanguageEnum['zh-cn'];
  };

  const language = useStorage<string>('language', LanguageEnum['zh-cn']);
  return normalizeLanguage(language.value);
};

const i18n = createI18n({
  globalInjection: true,
  allowComposition: true,
  legacy: false,
  locale: getLanguage(),
  messages: {
    'zh-cn': zh_cn,
    'zh-tw': zh_tw,
    en: en,
    'en-my': en_my,
    vi: vi,
    'in-id': in_id,
    th: th,
    'pt-br': pt_br
  }
});

export default i18n;

export type LanguageType = typeof zh_cn;
