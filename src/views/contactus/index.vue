<script setup lang="ts">
import { ref, onMounted } from 'vue';
import ContactInfo from '@/components/ContactInfo.vue';
import ContactMap from '@/components/ContactMap.vue';
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';
const pageLoaded = ref(false);

onMounted(() => {
  // 添加页面加载动画
  setTimeout(() => {
    pageLoaded.value = true;
  }, 500);
});
</script>

<template>
  <div class="contactus-container" :class="{ 'page-loaded': pageLoaded }">
    <Header />
    <!-- Banner，全屏 -->
    <div class="about-banner-img">
      <div class="img-box banner-img-box">
        <img 
          src="@/assets/images/contactus/bg.jpg" 
          alt="联系我们" 
          loading="lazy"
        />
      </div>
    </div>

    <!-- 主要内容区域 -->
    <div class="content-box">
      <ContactInfo />
      <ContactMap />
    </div>
  </div>
</template>

<style scoped lang="scss">
:deep(.van-button__content){
  justify-content:normal;
}
.contactus-container {
  position: relative;
  width: 100%;
  min-height: 100vh;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease;

  &.page-loaded {
    opacity: 1;
    transform: translateY(0);
  }

  .about-banner-img {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;

    .banner-img-box {
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;

        &:hover {
          transform: scale(1.05);
        }
      }
    }
  }

  .content-box {
    position: absolute;
    top: 46%;
    left: 50%;
    transform: translate(-50%, -48%);
    width: 90%;
    max-width: 1575px;
    background: #fff;
    display: flex;
    gap: 80px;
  }
  @media (max-width: 991px) {
    .content-box {
      gap: 0px;
    }
  }
}

// 平板设备
@media screen and (max-width: 1024px) {
  .contactus-container {
    .content-box {
      width: 95%;
      padding: 30px;
    }
  }
}

// 移动设备
@media screen and (max-width: 768px) {
  .contactus-container {
    .about-banner-img {
      height: 100vh;
      position: relative;
    }

    .content-box {
      position: relative;
      top: auto;
      left: 50%;
      transform: translateX(-50%);
      width: 90%;
      padding: 20px;
      flex-direction: column;
      border-radius: 0;
      background: transparent;
      box-shadow: none;
      backdrop-filter: none;
      margin-top: -100vh;
    }
  }
}

// 小屏移动设备
@media screen and (max-width: 375px) {
  .contactus-container {
    .about-banner-img {
      height: 110vh;
    }

    .content-box {
      padding: 15px;
      margin-top: -110vh;
      min-height: 100vh;
      width: 95%;
    }
    .contact-info{
      padding: 10px !important;
    }
  }
}
</style>
