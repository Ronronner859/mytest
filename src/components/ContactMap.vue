<script setup lang="ts">
import { ref, onMounted } from 'vue';

const mapLoaded = ref(false);
const imageError = ref(false);

const handleImageError = () => {
  imageError.value = true;
};

onMounted(() => {
  // 延迟加载地图，提高首屏加载速度
  setTimeout(() => {
    mapLoaded.value = true;
  }, 1000);
});
</script>

<template>
  <div class="map-container">
    <div v-if="!mapLoaded" class="map-loading">
      <el-skeleton :rows="3" animated />
    </div>
    <div v-else class="map-box">
      <img 
        v-if="!imageError"
        src="@/assets/images/contactus/2d-earth.jpg" 
        alt="公司位置地图"
        @error="handleImageError"
        loading="lazy"
      />
      <div v-else class="map-fallback">
        <el-empty description="地图加载失败" />
      </div>
    </div>
    <!-- <iframe 
      v-show="mapLoaded"
      src="https://uri.amap.com/marker?position=113.291,22.467&name=中山英诺莱比智能科技有限公司&src=mypage&coordinate=gaode&callnative=0"
      frameborder="0"
      scrolling="no"
      allowfullscreen
      loading="lazy"
    ></iframe> -->
    <!-- http://154.9.228.111/ -->
    <!-- <iframe 
      src="http://154.9.228.111/"
      frameborder="0"
      scrolling="no"
      allowfullscreen
      loading="lazy"
    ></iframe> -->
  </div>
</template>

<style scoped lang="scss">
.map-container {
  flex: 1;
  overflow: hidden;
  background: #f5f7fa;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.15);
  }

  .map-loading {
    padding: 20px;
  }

  .map-box {
    width: 100%;
    height: 100%;
    min-height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.02);
      }
    }

    .map-fallback {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}

@media screen and (max-width: 768px) {
  .map-container {
    // display: none;
    background: transparent;
    .map-box {
      background: transparent;
      min-height: 0 !important;
      img{
        width: 100% !important;
      }
    }
  }
}
@media screen and (max-width: 375px) {
  .map-container {
    .map-box {
      img{
        width: 85% !important;
      }
    }
  }
}
</style> 