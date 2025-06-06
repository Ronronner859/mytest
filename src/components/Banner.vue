<script setup>
defineProps({
  title: {
    type: String,
    default: '关于我们'
  },
  imageUrl: {
    type: String,
    default: '@/assets/images/about/01.jpg'
  }
})
</script>

<template>
  <div class="about-banner-img">
    <div class="banner-bg"></div>
    <div class="img-box banner-img-box">
      <img :src="imageUrl" :alt="title" />
    </div>
    <div class="banner-title">{{ title }}</div>
  </div>
</template>

<style scoped>
.about-banner-img {
  width: 100vw;
  height: 450px;
  position: relative;
  overflow: hidden;
}

.banner-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) skew(-15deg);
  width: 330px;
  height: 60px;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1;
}

.banner-img-box {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 0;
}

.banner-img-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.banner-title {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 2.6rem;
  font-weight: bold;
  font-family: "思源黑体", sans-serif;
  line-height: 1.2;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  z-index: 2;
}

@media (max-width: 767px) {
  .banner-bg {
    width: 180px;
    height: 45px;
  }
  
  .about-banner-img {
    width: 100vw !important;
    height: 200px !important;
    position: relative !important;
    overflow: hidden !important;
  }
  
  .banner-img-box {
    width: 100% !important;
    height: 100% !important;
  }
  
  .banner-img-box img {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover !important;
    display: block !important;
  }
  
  .banner-title {
    font-size: 1.8rem !important;
    line-height: 1.4 !important;
    left: 50% !important;
    top: 50% !important;
    transform: translate(-50%, -50%) !important;
    text-align: center !important;
    padding: 15px 30px !important;
    max-width: 100% !important;
    word-break: break-word !important;
  }
  
  .banner-title::before {
    width: 140%;
    left: -20%;
  }
}
</style> 