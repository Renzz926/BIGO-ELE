<template>
  <div class="wrapper-6">
    <div class="data-analysis-section">
      <div class="game-trend-header">
        <div class="trend-content-wrapper">
          <div class="header-title-group">
            <div class="title-and-icon-row">
              <div class="icon-and-text-group">
                <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/CgeeSrHpKhQAAAAAO9AAAAgAejH3AQBr/original" class="header-icon" />
                <div class="text-group-vertical">
                  <span class="section-title"> {{ t('analytics.title') }} </span>
                  <span class="section-subtitle"> {{ t('analytics.subtitle') }} </span>
                </div>
              </div>
              <div class="icon-and-text-group">
                <span class="link-text"> {{ t('analytics.viewFull') }} </span>
                <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/nQcdQb7liHEAAAAAG2AAAAgAejH3AQBr/original" class="arrow-icon" />
              </div>
            </div>
          </div>
          <div class="list">
            <div class="column-headers-row">
              <span class="item-header"> {{ t('analytics.time') }} </span>
              <span class="item-header"> {{ t('analytics.game') }} </span>
              <span class="item-header"> {{ t('analytics.choice') }} </span>
              <span class="item-header"> {{ t('common.multiplier') }} </span>
              <span class="item-header"> {{ t('common.result') }} </span>
            </div>
            <div class="column-headers-row co" style="margin-top: 12px">
              <div class="item time">15:30</div>
              <div class="item" style="display: flex; align-items: center; justify-content: center">
                <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/YIztQZvCEzgAAAAAJVAAAAgAejH3AQBr/original" class="game-icon-small" />
                <span class="game-name"> GREEDY </span>
              </div>
              <div class="item" style="display: flex; align-items: center; justify-content: center">
                <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/canET4LhJUsAAAAAQEAAAAgAejH3AQBr/original" class="choice-icon" />{{
                  t('food.skewer')
                }}
              </div>
              <div class="item">2.45X</div>
              <div class="item">
                <a class="result-status-win"> {{ t('common.win') }} </a>
              </div>
            </div>
            <div class="column-headers-row" style="margin-top: 0px">
              <div class="item time">15:30</div>
              <div class="item" style="display: flex; align-items: center; justify-content: center">
                <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/L2wQRa0KZrAAAAAAIsAAAAgAejH3AQBr/original" class="game-icon-small" />
                <span class="game-name"> CAT OR DOG </span>
              </div>
              <div class="item" style="display: flex; align-items: center; justify-content: center">
                <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/D2uuQa_7ZHUAAAAAQFAAAAgAejH3AQBr/original" class="choice-icon" />{{
                  t('common.cat')
                }}
              </div>
              <div class="item">3.20X</div>
              <div class="item">
                <a class="result-status-win"> {{ t('common.win') }} </a>
              </div>
            </div>
            <div class="column-headers-row co" style="margin-top: 0px">
              <div class="item time">15:30</div>
              <div class="item" style="display: flex; align-items: center; justify-content: center">
                <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/JDCqS4T34uMAAAAAOfAAAAgAejH3AQBr/original" class="game-icon-small" />
                <span class="game-name"> Ele-Family Games </span>
              </div>
              <div class="item" style="display: flex; align-items: center; justify-content: center">
                <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/3jZpTZyC_d8AAAAAQGAAAAgAejH3AQBr/original" class="choice-icon" />{{
                  t('food.skewer')
                }}
              </div>
              <div class="item">1.80X</div>
              <div class="item">
                <a class="result-status-lose"> {{ t('common.lose') }} </a>
              </div>
            </div>
            <div class="column-headers-row" style="margin-top: 0px">
              <div class="item time">15:30</div>
              <div class="item" style="display: flex; align-items: center; justify-content: center">
                <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/onopTq66jG4AAAAAH2AAAAgAejH3AQBr/original" class="game-icon-small" />
                <span class="game-name"> GREEDY </span>
              </div>
              <div class="item" style="display: flex; align-items: center; justify-content: center">
                <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/Zli2R5uvDTkAAAAAQEAAAAgAejH3AQBr/original" class="choice-icon" />{{
                  t('food.hotdog')
                }}
              </div>
              <div class="item">2.45X</div>
              <div class="item">
                <a class="result-status-win"> {{ t('common.win') }} </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="strategy-section">
        <div class="strategy-header-group">
          <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/yfo9RJjmwPcAAAAAJ3AAAAgAejH3AQBr/original" class="strategy-icon" />
          <div class="text-group-vertical">
            <span class="section-title"> {{ t('strategy.title') }} </span>
            <span class="strategy-subtitle"> {{ t('strategy.subtitle') }} </span>
          </div>
        </div>
        <div class="strategy-list">
          <div class="strategy-item">
            <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/MY-DRoKYKaQAAAAAQCAAAAgAejH3AQBr/original" class="strategy-game-icon" />
            <span class="strategy-item-title"> {{ t('strategy.greedyFood') }} </span>
          </div>
          <div class="strategy-item-alt">
            <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/SVBfTo8crkoAAAAAQCAAAAgAejH3AQBr/original" class="strategy-game-icon" />
            <span class="strategy-item-title"> {{ t('strategy.catorDogRate') }} </span>
          </div>
          <div class="strategy-item-third">
            <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/L-KgRLlptFsAAAAAQCAAAAgAejH3AQBr/original" class="strategy-game-icon" />
            <span class="strategy-item-title"> {{ t('strategy.eleFamilyLineup') }} </span>
          </div>
          <div class="strategy-item-fourth">
            <img
              src="https://mdn.alipayobjects.com/fecodex_image/afts/img/3gYXSLwxnB8AAAAAQCAAAAgAejH3AQBr/original"
              class="strategy-game-icon-fourth"
            />
            <span class="strategy-item-title-fourth"> {{ t('strategy.eleFamilyCandidates') }} </span>
          </div>
        </div>
        <div class="game-record-row-fourth">
          <span class="link-text"> {{ t('common.viewAll') }} </span>
          <img src="https://mdn.alipayobjects.com/fecodex_image/afts/img/n8KER6Ge3bYAAAAAG4AAAAgAejH3AQBr/original" class="view-all-arrow-icon" />
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
.list {
}
.wrapper-6 {
  width: 100%;
  background-color: #f7f9fa;
  padding: 60px 0;
}

.data-analysis-section {
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.game-trend-header {
  border-radius: 9px;
  background-color: #ffffff;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 16px 20px 36px 20px;
}

.trend-content-wrapper {
  margin-left: 2px;
  display: flex;
  flex-direction: column;
}

.header-title-group {
  margin-right: 2px;
  display: flex;
  flex-direction: column;
}

.title-and-icon-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.icon-and-text-group {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.header-icon {
  border-radius: 4px;
  flex-shrink: 0;
  width: 18px;
  height: 20px;
}

.text-group-vertical {
  margin-left: 6px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.section-title {
  color: #333333;
  font-size: 18px;
  white-space: nowrap;
}

.section-subtitle {
  color: #aaaaaa;
  font-size: 13px;
  margin-left: 2px;
  white-space: nowrap;
}

.link-text {
  color: #ff5b2b;
  font-size: 14px;
  white-space: nowrap;
  cursor: pointer;
}

.arrow-icon {
  flex-shrink: 0;
  border-radius: 3px;
  width: 12px;
  margin-left: 5px;
  height: 14px;
}

.column-headers-row {
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-betaween;
  .item-header {
    color: #676767;
    flex: 1;
    font-size: 14px;
    text-align: center;
  }
  .item {
    text-align: center;
    flex: 1;
    font-size: 14px;
    height: 72px;
    line-height: 72px;
  }
}
.co {
  background-color: #fff9f0;
  border-radius: 4px;
}

.game-record-row {
  border-radius: 7px;
  background-color: #fff9f0;
  margin-top: 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 18px;
  padding-bottom: 20px;
  align-items: center;
}

.record-time {
  color: #333333;
  font-size: 14px;
  white-space: nowrap;
}

.game-name-group {
  margin-left: 72px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.game-icon-small {
  border-radius: 6px;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
}

.game-name {
  color: #333333;
  font-size: 13px;
  margin-left: 8px;
  white-space: nowrap;
}

.choice-icon {
  border-radius: 17px;
  flex-shrink: 0;
  margin-right: 8px;
  width: 32px;
  height: 32px;
}

.player-choice {
  color: #333333;
  font-size: 14px;
  margin-left: 8px;
  white-space: nowrap;
}

.multiplier-value {
  color: #333333;
  font-size: 13px;
  margin-left: 82px;
  white-space: nowrap;
}

.result-status-win {
  color: #ff5b2b;
  font-size: 14px;
  white-space: nowrap;
}

.game-record-row-alt {
  margin-top: 20px;
  align-self: center;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.record-time-alt {
  color: #333333;
  font-size: 14px;
  white-space: nowrap;
}

.game-icon-alt {
  border-radius: 8px;
  flex-shrink: 0;
  width: 15px;
  margin-left: 75px;
  height: 15px;
}

.game-name-alt {
  color: #333333;
  font-size: 14px;
  margin-left: 10px;
  white-space: nowrap;
}

.choice-icon-alt {
  border-radius: 17px;
  flex-shrink: 0;
  width: 32px;
  margin-left: 116px;
  height: 32px;
}

.player-choice-alt {
  color: #333333;
  font-size: 14px;
  margin-left: 4px;
  white-space: nowrap;
}

.multiplier-value-alt {
  color: #333333;
  font-size: 13px;
  margin-left: 95px;
  white-space: nowrap;
}

.game-record-row-third {
  border-radius: 7px;
  background-color: #fff9f0;
  margin-top: 20px;
  margin-right: 2px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 18px;
  padding-bottom: 20px;
  align-items: center;
}

.record-time-third {
  color: #333333;
  font-size: 14px;
  white-space: nowrap;
}

.game-icon-third {
  border-radius: 6px;
  flex-shrink: 0;
  width: 15px;
  margin-left: 74px;
  height: 15px;
}

.game-name-third {
  color: #333333;
  font-size: 14px;
  margin-left: 10px;
  white-space: nowrap;
}

.player-group {
  margin-left: 78px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.player-icon {
  border-radius: 17px;
  flex-shrink: 0;
  width: 32px;
  height: 32px;
}

.multiplier-value-third {
  color: #333333;
  font-size: 14px;
  margin-left: 80px;
  white-space: nowrap;
}

.result-status-lose {
  color: #333333;
  font-size: 14px;
  white-space: nowrap;
}

.game-record-row-fourth {
  margin-top: 18px;
  align-self: center;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.game-icon-fourth {
  border-radius: 7px;
  flex-shrink: 0;
  width: 16px;
  height: 15px;
}

.multiplier-value-fourth {
  color: #333333;
  font-size: 13px;
  margin-left: 80px;
  white-space: nowrap;
}

.strategy-section {
  border-radius: 11px;
  background-color: #ffffff;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  width: 388px;
  padding: 20px;
}

.strategy-header-group {
  align-self: flex-start;
  margin-left: 2px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.strategy-icon {
  border-radius: 4px;
  flex-shrink: 0;
  width: 18px;
  height: 18px;
}

.strategy-subtitle {
  color: #aaaaaa;
  font-size: 13px;
  margin-left: 6px;
  white-space: nowrap;
}

.strategy-list {
  margin-top: 14px;
  width: 100%;
  align-self: center;
  display: flex;
  flex-direction: column;
}

.strategy-item {
  border-radius: 9px;
  background-color: #f7f8f9;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 8px 6px 8px;
}

.strategy-game-icon {
  flex-shrink: 0;
  border-radius: 3px;
  width: 42px;
  height: 40px;
}

.strategy-item-title {
  color: #333333;
  font-size: 14px;
  font-weight: 700;
  margin-left: 8px;
  white-space: nowrap;
}

.strategy-item-alt {
  border-radius: 9px;
  background-color: #f7f8f9;
  margin-top: 22px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 6px 8px 6px;
}

.strategy-item-third {
  border-radius: 9px;
  background-color: #f7f8f9;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 6px 6px 6px 6px;
}

.strategy-item-fourth {
  border-radius: 9px;
  background-color: #f7f8f9;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 10px 8px 10px;
}

.strategy-game-icon-fourth {
  flex-shrink: 0;
  border-radius: 3px;
  width: 38px;
  height: 38px;
}

.strategy-item-title-fourth {
  color: #333333;
  font-size: 14px;
  font-weight: 700;
  margin-left: 10px;
  white-space: nowrap;
}

.view-all-arrow-icon {
  flex-shrink: 0;
  border-radius: 3px;
  width: 10px;
  margin-left: 2px;
  height: 12px;
}
</style>
