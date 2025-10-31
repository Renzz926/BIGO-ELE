<template>
  <div class="wrapper-2">
    <div class="logo-container">
      <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/RfR6RK5qOa0AAAAAQDAAAAgAejH3AQBr/original" class="logo-image" />
      <span class="logo-text"> BIGO& ELE </span>
    </div>
    <div class="tabs">
      <div @click="handleClick(item.name)" :class="`items ${item.name === active ? 'active' : ''}`" v-for="(item, index) in menus" :key="index">
        {{ item.name }}
      </div>
    </div>
    <el-dropdown trigger="click" @command="handleLanguageChange">
      <div class="lang-select--style">{{ langT }}</div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item v-for="(item, index) in langList" :key="index" :disabled="appStore.language === item.value" :command="item.value">{{
            item.name
          }}</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useAppStore } from '@/store/modules/app';
const langT = ref('中文简体');
const { t, locale } = useI18n();
const appStore = useAppStore();
const langList = [
  { name: '中文简体', value: 'zh-cn' },
  { name: '中文繁体', value: 'zh-tw' },
  { name: '英语', value: 'en' },
  { name: '马来语', value: 'en-my' },
  { name: '越南语', value: 'vi' },
  { name: '印尼语', value: 'in-id' },
  { name: '泰语', value: 'th' },
  { name: '葡萄牙语', value: 'pt-br' }
];
const menus = computed(() => [
  { name: t('nav.home') },
  { name: t('nav.news') },
  { name: t('nav.dataCenter') },
  { name: t('nav.sports') },
  { name: t('nav.about') },
  { name: t('nav.downloadApp') }
]);

const active = ref('');
watchEffect(() => {
  if (!active.value) {
    active.value = t('nav.home');
  }
});

const handleClick = (name: string) => {
  active.value = name;
};

const handleLanguageChange = (lang: string) => {
  langT.value = langList.find((item) => item.value === lang)?.name;
  locale.value = lang;
  appStore.changeLanguage(lang);
};
</script>

<style scoped lang="scss">
.wrapper-2 {
  background-color: #ffffff;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 6px;
}

.logo-container {
  display: flex;
  flex-direction: row;
  margin-right: 160px;
  align-items: center;
}
.tabs {
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: Alibaba PuHuiTi 3;
  font-weight: 400;
  font-size: 16px;
  justify-content: space-between;
  .items {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .active {
    position: relative;
    font-weight: 600;
    font-size: 16px;
    color: #ff5b2b;
    &::after {
      content: '';
      display: block;
      width: 14px;
      height: 6px;
      background: url('../../assets/images/icon1.png') no-repeat center;
      background-size: 100%;
      position: absolute;
      bottom: -10px;
      left: calc(50% - 7px);
    }
  }
}

.logo-image {
  flex-shrink: 0;
  border-radius: 3px;
  width: 36px;
  height: 34px;
}

.logo-text {
  color: #ff642c;
  font-size: 24px;
  font-weight: 700;
  margin-left: 15px;
  white-space: nowrap;
}

.navigation-tabs {
  background-color: #ffffff;
}

.dropdown-icon {
  color: #333333;
  font-size: 12px;
  margin-left: 6px;
}
.lang-select--style {
  font-size: 18px;
  line-height: 50px;
  cursor: pointer;
}
</style>
