<template>
  <el-dropdown trigger="click" @command="handleLanguageChange">
    <div class="lang-select--style">
      <svg-icon icon-class="language" />
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item :disabled="appStore.language === 'zh_cn'" command="zh_cn"> 中文简体 </el-dropdown-item>
        <el-dropdown-item :disabled="appStore.language === 'zh_tw'" command="zh_tw"> 中文繁体 </el-dropdown-item>
        <el-dropdown-item :disabled="appStore.language === 'en'" command="en"> 英语 </el-dropdown-item>
        <el-dropdown-item :disabled="appStore.language === 'en_my'" command="en_my"> 马来语 </el-dropdown-item>
        <el-dropdown-item :disabled="appStore.language === 'vi'" command="vi"> 越南语 </el-dropdown-item>
        <el-dropdown-item :disabled="appStore.language === 'in_id'" command="in_id"> 印尼语 </el-dropdown-item>
        <el-dropdown-item :disabled="appStore.language === 'th'" command="th"> 泰语 </el-dropdown-item>
        <el-dropdown-item :disabled="appStore.language === 'pt_br'" command="pt_br"> 葡萄牙语 </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useAppStore } from '@/store/modules/app';
import SvgIcon from '@/components/SvgIcon/index.vue';

const appStore = useAppStore();
const { locale } = useI18n();

const message: any = {
  'zh_cn': '切换语言成功！',
  'zh_tw': '切換語言成功！',
  en: 'Switch Language Successful!',
  'en_my': 'Berjaya menukar bahasa!',
  vi: 'Chuyển ngôn ngữ thành công!',
  'in_id': 'Berhasil mengganti bahasa!',
  th: 'สลับภาษาเรียบร้อย!',
  'pt_br': 'Mudança de idioma bem-sucedida!'
};
const handleLanguageChange = (lang: any) => {
  locale.value = lang;
  appStore.changeLanguage(lang);
  ElMessage.success(message[lang] || '切换语言成功！');
  window.location.reload();
};
</script>

<style lang="scss" scoped>
.lang-select--style {
  font-size: 18px;
  line-height: 50px;
}
</style>
