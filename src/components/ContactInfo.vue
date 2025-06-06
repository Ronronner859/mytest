<script setup lang="ts">
import { ref } from 'vue';
import { EnvironmentOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons-vue';

interface CompanyInfo {
  name: string;
  address: string;
}

const companies = ref<CompanyInfo[]>([
  {
    name: '中山英诺莱比智能科技有限公司',
    address: '广东省中山市大涌镇恒惠丰工业园A1栋1-4层'
  },
  {
    name: '中山英诺莱比精密制造有限公司',
    address: '广东省中山市火炬开发区十涌路27号精制所一楼'
  },
  {
    name: '中山英诺莱比金属表面处理有限公司',
    address: '广东省中山市小榄镇泰业路68号北区社区高端环保产业园B幢4层03单元'
  }
]);

const phone = '+86 (0)760 8617 1793';
const email = 'zshr@innorapid.cn';
</script>

<template>
  <div class="contact-info">
    <h2 class="title">联系我们</h2>
    <div class="company-list">
      <div v-for="(company, idx) in companies" :key="idx" class="company-item">
        <div class="company-text-box">
          <div class="company-text">
            <div class="company-text-box-item">
              <EnvironmentOutlined class="location-icon" />
              <div class="company-name">{{ company.name }}</div>
            </div>
            <div class="company-address">
              {{ company.address }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="contact-row">
      <div class="contact-row-item">
        <PhoneOutlined class="location-icon" />
        <div class="company-text">
          <div class="company-name">电话:</div>
          <div class="company-address">
            {{ phone }}
          </div>
        </div>
      </div>
      <div class="contact-row-item">
        <MailOutlined class="location-icon" />
        <div class="company-text">
          <div class="company-name">邮箱:</div>
          <div class="company-address">
            <a :href="`mailto:${email}`" class="highlight">{{ email }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.contact-info {
  padding: 40px 40px 0 32px;
  max-width: 400px;
  min-width: 280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  .title {
    font-size: 2.2rem;
    color: #1a1a1a;
    margin-bottom: 24px;
    font-weight: 600;
    letter-spacing: 0.5px;
    position: relative;
    font-family: "思源黑体", sans-serif;
    padding-left: 40px;
    
    // &::after {
    //   content: '';
    //   position: absolute;
    //   bottom: -8px;
    //   left: 50%;
    //   transform: translateX(-50%);
    //   width: 60px;
    //   height: 3px;
    //   background: linear-gradient(90deg, #409EFF, #2563eb);
    //   border-radius: 2px;
    // }
  }

  .company-list {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  .company-text-box{
    display: flex;
    align-items: center;
    gap: 12px;
    color: #222;
    font-size: 15px;
    font-family: "思源黑体", sans-serif;
    .location-icon {
      font-size: 24px;
      color: #000000;
    }
    .company-text-box-item{
      display: flex;
      align-items: center;
      gap: 6px;
    }
  }

  .company-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    color: #222;
    font-size: 15px;
    padding: 16px;
    transition: background-color 0.2s ease;
    font-family: "思源正常体", sans-serif;


    &:hover {
      // background: #f1f5f9;
    }

    .company-text {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .company-name {
      font-weight: 700;
      font-size: 20px;
      color: #1a1a1a;
      font-family: "思源黑体", sans-serif;
    }

    .company-address {
      font-size: 18px;
      color: #4f4f4f;
      line-height: 1.5;
      font-family: "思源正常体", sans-serif;
      margin-left: 30px;
      width: 410px;
    }
    @media (max-width: 991px) {
      .company-address {
        width: 245px;
      }
    }
  }

  .contact-row {
    display: flex;
    flex-direction: column;
    gap: 40px;
    font-size: 15px;
    margin-bottom: 12px;
    padding: 12px 16px;
    transition: background-color 0.2s ease;
    font-family: "思源正常体", sans-serif;

    &:hover {
      // background: #f1f5f9;
    }

    .location-icon {
      font-size: 24px;
      color: #000000;
    }

    .label {
      font-weight: 600;
      color: #1a1a1a;
      min-width: 45px;
      font-family: "思源黑体", sans-serif;
    }

    .highlight {
      color: #2563eb;
      text-decoration: none;
      font-weight: 600;
      word-break: break-all;
      transition: all 0.2s ease;
      border-radius: 6px;
      font-family: "思源正常体", sans-serif;

      &:hover {
        background: rgba(37, 99, 235, 0.1);
        text-decoration: none;
      }
    }
  }
  .contact-row-item{
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 15px;
    margin-bottom: 12px;
    .location-icon {
      font-size: 24px;
      color: #000000;
    }
    .company-name{
      font-size: 20px;
      font-weight: 600;
      font-family: "思源黑体", sans-serif;
    }
    @media (max-width: 991px) {
      .company-name{
        font-size: 16px;
      }
      .company-address{
        font-size: 14px !important; 
      }
    }
    .company-text{
      display: flex;
      align-items: center;
      gap: 5px;
    }
    .company-address{
      font-size: 20px;
      font-weight: 600;
      font-family: "思源黑体", sans-serif;
      color: #2563eb;
    }
  }

}

// 平板设备
@media screen and (max-width: 1024px) {
  .contact-info {
    padding: 28px 16px;
    max-width: 98vw;

    .title {
      font-size: 1.6rem;
      margin-bottom: 20px;
    }

    .company-item {
      padding: 14px;
      font-size: 14px;

      .company-name { 
        font-size: 15px; 
      }
      .company-address { 
        font-size: 13px; 
      }
    }

    .contact-row {
      padding: 10px 14px;
      font-size: 14px;
    }
  }
}

// 移动设备
@media screen and (max-width: 768px) {
  .contact-info {
    position: relative;
    width: 90%;
    // max-width: 360px;
    min-width: 0;
    z-index: 100;
    background: rgba(255, 255, 255, 0.98);
    margin: 0 auto;

    .title {
      font-size: 1.3rem;
      margin-bottom: 16px;
    }

    .company-item {
      padding: 12px;
      font-size: 13px;
      gap: 8px;

      .company-name { 
        font-size: 14px; 
      }
      .company-address { 
        font-size: 12px; 
      }
    }

    .contact-row {
      padding: 10px 12px;
      font-size: 13px;
      gap: 8px;
    }
  }
}
</style> 