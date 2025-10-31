<template>
  <div class="wrapper-4">
    <div class="game-banner-image">
      <el-carousel arrow="always" style="width: 100%; height: 100%">
        <el-carousel-item v-for="item in 4" :key="item">
          <div class="banneritem">
            <div class="text">
              {{ t('recommend.title') }}
              <div class="btn">{{ t('recommend.limited') }}</div>
            </div>
            <div class="text1">{{ t('recommend.desc') }}</div>
            <div class="mask"></div>
            <div class="canyu">{{ t('banner.joinNow') }}</div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="game-section-container">
      <div class="game-list-container">
        <div class="game-category-header">
          <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/RJ5tS7maHbMAAAAAQBAAAAgAejH3AQBr/original" class="category-icon" />
          <span class="category-title"> {{ t('games.hot') }} </span>
        </div>
        <div class="game-item-container">
          <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/oEOnRb1b6BkAAAAAQOAAAAgAejH3AQBr/original" class="game-thumbnail" />
          <div class="game-card-info">
            <div class="game-card-title">GREEDY</div>
            <span class="game-card-description"> {{ t('games.greedyDesc') }} </span>
          </div>
        </div>
        <div class="game-item-container">
          <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/cZ5NSIMYpL0AAAAAQNAAAAgAejH3AQBr/original" class="game-card-image" />
          <span class="game-card-info">
            <div class="game-card-title">CATOR DOG</div>
            <span class="game-card-description"> {{ t('games.catorDogDesc') }} </span>
            <div />
          </span>
        </div>
        <div class="game-item-container">
          <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/5tQaQYerlzwAAAAAQMAAAAgAejH3AQBr/original" class="game-thumbnail" />
          <span class="game-card-info">
            <div class="game-card-title">Ele-Family Games</div>
            <span class="game-card-description"> {{ t('games.eleFamilyDesc') }} </span>
            <div />
          </span>
        </div>
        <div class="download-section-container">
          <div class="game-category-header">
            <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/QLIoRbYUQQ8AAAAAPVAAAAgAejH3AQBr/original" class="download-icon" />
            <span class="category-title"> {{ t('download.links') }} </span>
          </div>
          <div class="platform-icons-container">
            <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/zhE_Q6H5JsEAAAAAQVAAAAgAejH3AQBr/original" class="platform-icon-first" />
            <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/_U4XSpiSiqoAAAAAQPAAAAgAejH3AQBr/original" class="platform-icon-second" />
            <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/UYXjRYkt0OQAAAAAQMAAAAgAejH3AQBr/original" class="platform-icon-second" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<style scoped lang="scss">
.wrapper-4 {
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1200px;
  background-color: #ffffff;
  margin: 0 auto;
  justify-content: space-between;
  padding-bottom: 60px;
}
:deep(.el-carousel__container) {
  height: 384px !important;
}

:deep(.el-carousel__button) {
  width: 8px !important;
  height: 8px !important;
  background-color: #fff !important;
  border-radius: 4px !important;
}
:deep(.is-active .el-carousel__button) {
  width: 16px !important;
  background-color: #ff5b2b !important;
}
.game-banner-image {
  border-radius: 6px;
  flex-shrink: 0;
  flex: 24;
  height: 384px;
  margin-right: 16px;
  .banneritem {
    position: relative;
    width: 100%;
    height: 100%;
    background: url('../../assets/images/banner.png') no-repeat center;
    background-size: cover;
    .text {
      position: absolute;
      bottom: 88px;
      left: 61px;
      z-index: 3;
      font-size: 30px;
      font-weight: 600;
      color: #ffffff;
      display: flex;
      align-items: flex-start;
      .btn {
        line-height: 20px;
        padding: 0 22px 0 6px;
        font-size: 12px;
        height: 20px;
        margin-top: 6px;
        margin-left: 12px;
        background: url('../../assets/images/huodong.png') no-repeat center;
        background-size: 100% 100%;
      }
    }
    .text1 {
      position: absolute;
      bottom: 51px;
      font-size: 16px;
      color: #ffffff;
      left: 61px;
      max-width: 70%;
      z-index: 3;
    }
    .mask {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 210px;
      background: url('../../assets/images/mask.png') no-repeat center;
      background-size: 100% 100%;
      z-index: 2;
    }
    .canyu {
      z-index: 3;
      position: absolute;
      right: 45px;
      bottom: 70px;
      width: 111px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      border-radius: 20px;
      background: #ff5b2b;
      font-weight: 600;
      font-size: 16px;
      color: #ffffff;
    }
  }
}

.game-section-container {
  border-radius: 11px;
  background-color: #f7f8f9;
  display: flex;
  flex: 7;
  flex-direction: column;
  padding: 16px;
}

.game-category-header {
  align-self: flex-start;
  margin-left: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
}

.category-icon {
  flex-shrink: 0;
  border-radius: 3px;
  width: 18px;
  height: 16px;
}

.category-title {
  color: #333333;
  font-size: 18px;
  margin-left: 6px;
  font-weight: 600;
  white-space: nowrap;
}

.game-item-container {
  width: 100%;
  border-radius: 13px;
  background-color: #ffffff;
  align-self: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px;
  margin-bottom: 10px;
}

.game-thumbnail {
  border-radius: 5px;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
}

.game-info-container {
  margin-left: 5px;
  display: flex;
  flex-direction: column;
}

.game-title {
  color: #333333;
  font-size: 14px;
  margin-left: 2px;
}

.game-description {
  color: #999999;
  font-size: 13px;
  margin-top: 2px;
  white-space: nowrap;
}

.game-list-container {
  align-self: center;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.game-card-container {
  border-radius: 14px;
  background-color: #ffffff;
  max-width: 220px;
  align-self: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 6px 54px 6px 8px;
}

.game-card-image {
  border-radius: 4px;
  flex-shrink: 0;
  width: 38px;
  height: 40px;
}

.game-card-info {
  font-size: 14px;
  font-weight: 700;
  margin-left: 2px;
}

.game-card-title {
  width: 100%;
  color: #333333;
}

.game-card-description {
  color: #999999;
}

.game-card-container-secondary {
  border-radius: 9px;
  background-color: #ffffff;
  max-width: 220px;
  align-self: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 6px 30px 6px 8px;
}

.game-card-info-secondary {
  font-weight: 700;
  max-width: 142px;
  margin-left: 2px;
}

.game-card-description-secondary {
  color: #999999;
  font-size: 13px;
}

.download-section-container {
  margin-top: 16px;
  display: flex;
  flex-direction: column;
}

.download-icon {
  border-radius: 10px;
  flex-shrink: 0;
  width: 18px;
  height: 20px;
}

.platform-icons-container {
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2px 5px 2px 6px;
}

.platform-icon-first {
  border-radius: 9px;
  flex-shrink: 0;
  width: 60px;
  height: 60px;
}

.platform-icon-second {
  flex-shrink: 0;
  border-radius: 3px;
  width: 60px;
  height: 60px;
}
</style>
