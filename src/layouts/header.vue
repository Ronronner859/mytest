<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const isMenuOpen = ref(false);
const searchKeyword = ref('');
const isSearchPopupVisible = ref(false);

const navList = [
  { 
    name: '走进英诺', 
    path: '#', 
    isExternal: true, 
    icon: 'info-o',
    children: [
      { name: '关于我们', path: '/', isExternal: true },
      { name: '发展历程', path: '/developmentHistory', isExternal: true },
      { name: '愿景和使命', path: '/mission', isExternal: true },
      { name: '地图导航', path: 'https://innorapidzs.cn/map/', isExternal: true }
    ]
  },
  { 
    name: '人才招聘', 
    path: '#', 
    isExternal: true, 
    icon: 'friends-o',
    children: [
      { name: '社会招聘', path: '/social-recruitment/society', isExternal: true },
      { name: '校园招聘', path: '/campus-recruitment/campus', isExternal: true }
    ]
  },
  { name: '联系我们', path: '/contactus', isExternal: false, icon: 'phone-o' },
];

const showDropdown = ref('');

const handleNavClick = (item) => {
  if (item.children) {
    return; // Don't navigate if it's a dropdown parent
  }
  if (item.isExternal) {
    window.open(item.path, '_blank');
  } else {
    router.push(item.path);
  }
  isMenuOpen.value = false;
};

const toggleDropdown = (menu) => {
  showDropdown.value = showDropdown.value === menu ? '' : menu;
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const scrollToContent = () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth'
  });
};

const handleSearch = () => {
  if (searchKeyword.value.trim()) {
    router.push({
      path: '/social-recruitment/society/list',
      query: { 
        keyword: searchKeyword.value.trim(),
        t: Date.now()
      }
    });
    searchKeyword.value = '';
    
    setTimeout(() => {
      const jobListSection = document.querySelector('.main-content');
      if (jobListSection) {
        jobListSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }
};

const handleMobileSearch = () => {
  if (searchKeyword.value.trim()) {
    router.push({
      path: '/social-recruitment/society/list',
      query: { 
        keyword: searchKeyword.value.trim(),
        t: Date.now()
      }
    });
    isSearchPopupVisible.value = false;
    searchKeyword.value = '';
  }
};
</script>

<template>
  <header class="header-container">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <div  class="banner society-banner">
      <div class="banner-search-container">
        <van-search
          v-model="searchKeyword"
          placeholder="搜索职位关键词"
          shape="round"
          background="transparent"
          class="banner-search"
          @search="handleSearch"
          @keyup.enter="handleSearch"
        >
          <template #right-icon>
            <van-icon name="search" @click="handleSearch" />
          </template>
        </van-search>
      </div>
    </div>
    <!-- <div v-else-if="route.path.startsWith('/social-recruitment/campus')" class="banner campus-banner">
      <div class="banner-search-container">
        <van-search
          v-model="searchKeyword"
          placeholder="搜索职位关键词"
          shape="round"
          background="transparent"
          class="banner-search"
          @search="handleSearch"
          @keyup.enter="handleSearch"
        >
          <template #right-icon>
            <van-icon name="search" @click="handleSearch" />
          </template>
        </van-search>
      </div>
    </div> -->
    <!-- <div v-else class="banner default-banner">
      <div class="banner-search-container">
        <van-search
          v-model="searchKeyword"
          placeholder="搜索职位关键词"
          shape="round"
          background="transparent"
          class="banner-search"
          @search="handleSearch"
          @keyup.enter="handleSearch"
        >
          <template #right-icon>
            <van-icon name="search" @click="handleSearch" />
          </template>
        </van-search>
      </div>
    </div> -->
    <div class="recruitment-container">
      <van-nav-bar
        title=""
        :border="false"
        class="custom-nav-bar"
        :fixed="false"
        :placeholder="true"
      >
        <template #left>
          <img src="@/assets/images/logo.png" @click="handleNavClick({ name: '社会招聘', path: '/social-recruitment/society', isExternal: false })" alt="logo" class="logo">
        </template>
        
        <template #right>
          <div class="desktop-menu">
            <div 
              v-for="item in navList" 
              :key="item.name"
              class="nav-item"
              :class="{ active: $route.path === item.path }"
              @mouseenter="item.children && toggleDropdown(item.name)"
              @mouseleave="item.children && toggleDropdown('')"
            >
              <span class="nav-link" @click="handleNavClick(item)">{{ item.name }}</span>
              <van-icon v-if="item.children" name="arrow-down" class="arrow-icon" />
              <div v-if="item.children && showDropdown === item.name" class="dropdown-menu">
                <div 
                  v-for="child in item.children" 
                  :key="child.name"
                  class="dropdown-item"
                  @click="handleNavClick(child)"
                >
                  {{ child.name }}
                </div>
              </div>
            </div>
          </div>
          <div class="mobile-controls">
            <van-button 
              class="mobile-search-button" 
              icon="search" 
              @click="isSearchPopupVisible = true"
            />
            <van-button 
              class="mobile-menu-button" 
              icon="bars" 
              @click="toggleMenu"
            />
          </div>
        </template>
      </van-nav-bar>

      <van-popup
        v-model:show="isMenuOpen"
        position="right"
        :style="{ width: '80%', height: '100%' }"
        :overlay-style="{ background: 'rgba(0, 0, 0, 0.4)' }"
        :close-on-click-overlay="true"
        @click-overlay="toggleMenu"
        :duration="0.2"
        :transition="'slide-right'"
        :lazy-render="false"
        :lock-scroll="true"
      >
        <div class="mobile-menu">
          <div class="mobile-menu-header">
            <img src="@/assets/images/logo.png" alt="logo" class="mobile-logo">
            <van-icon name="cross" class="close-icon" @click="toggleMenu" />
          </div>
          <div class="mobile-menu-content">
            <div 
              v-for="item in navList" 
              :key="item.name"
              class="mobile-nav-item"
            >
              <template v-if="item.children">
                <div class="mobile-nav-header" @click="toggleDropdown(item.name)">
                  <span class="nav-text">{{ item.name }}</span>
                  <van-icon name="arrow" class="external-icon" :class="{ 'rotate': showDropdown === item.name }" />
                </div>
                <div v-show="showDropdown === item.name" class="mobile-dropdown-menu">
                  <div 
                    v-for="child in item.children" 
                    :key="child.name"
                    class="mobile-dropdown-item"
                    @click="handleNavClick(child)"
                  >
                    {{ child.name }}
                  </div>
                </div>
              </template>
              <template v-else>
                <div class="nav-text" @click="handleNavClick(item)">{{ item.name }}</div>
              </template>
            </div>
          </div>
        </div>
      </van-popup>
    </div>
  </header>
  <div class="scroll-down-indicator" @click="scrollToContent">
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
      <path d="M7 10l5 5 5-5" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M7 6l5 5 5-5" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
  <van-popup
    v-model:show="isSearchPopupVisible"
    position="top"
    :style="{ width: '100%', height: 'auto' }"
    :overlay-style="{ background: 'rgba(0, 0, 0, 0.3)' }"
    :close-on-click-overlay="true"
    :duration="0.15"
  >
    <div class="mobile-search-popup">
      <van-search
        v-model="searchKeyword"
        placeholder="搜索职位关键词"
        shape="round"
        background="transparent"
        class="mobile-search-input"
        @search="handleMobileSearch"
        @keyup.enter="handleMobileSearch"
      >
        <template #right-icon>
          <van-icon name="search" @click="handleMobileSearch" />
        </template>
      </van-search>
    </div>
  </van-popup>
</template>

<style scoped lang="scss">
.header-container {
  position: relative;
  height: 85vh;
}

.banner {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.society-banner {
  background-image: url('@/assets/images/society-banner.jpg');
}

.campus-banner {
  background-image: url('@/assets/images/campus-banner.jpg');
}

.default-banner {
  background-image: url('@/assets/images/campus-banner.jpg');
}

.recruitment-container {
  width: 100%;
  // 背景透明
}
:deep(.van-nav-bar__right){
  right: 5%;
}
:deep(.van-nav-bar__left){
  left: 5%;
}
:deep(.van-nav-bar){
  background-color: transparent;
}
.custom-nav-bar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  // max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
  height: 56px;
  :deep(.van-nav-bar){
    background-color: transparent;
  }
  :deep(.van-nav-bar__content) {
    height: 56px;
  }

}


.logo {
  height: 36px;
  width: auto;
  object-fit: contain;
}

.desktop-menu {
  display: flex;
  align-items: center;
  gap: 48px;
}

.nav-item {
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  cursor: pointer;
  position: relative;
  padding: 0 4px;
  
  &:hover {
    color: #ff375f;
  }
  
  &.active {
    color: #ff375f;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -7px;
      left: 50%;
      transform: translateX(-50%);
      width: 36px;
      height: 4px;
      background: #ff375f;
      border-radius: 2px;
    }
  }
}

.arrow-icon {
  font-size: 12px;
  margin-left: 4px;
  transition: transform 0.3s ease;
}

.dropdown-menu {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  min-width: 180px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  padding: 8px 0;
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  pointer-events: none;

  &::before {
    content: '';
    position: absolute;
    top: -6px;
    left: 50%;
    transform: translateX(-50%);
    width: 12px;
    height: 12px;
    background: #fff;
    transform: rotate(45deg);
    box-shadow: -2px -2px 5px rgba(0, 0, 0, 0.05);
  }

  &::after {
    content: '';
    position: absolute;
    top: -20px;
    left: 0;
    width: 100%;
    height: 20px;
    background: transparent;
  }
}

.nav-item:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  transform: translateX(-50%) translateY(0);
}

.nav-item {
  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 20px;
    background: transparent;
  }
}

.dropdown-item {
  padding: 10px 20px;
  color: #333;
  font-size: 14px;
  transition: all 0.2s ease;
  position: relative;
  white-space: nowrap;
  
  &:hover {
    background-color: #fff1f3;
    color: #ff375f;
    padding-left: 24px;
  }

  &::before {
    content: '';
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 4px;
    background: #ff375f;
    border-radius: 50%;
    opacity: 0;
    transition: all 0.2s ease;
  }

  &:hover::before {
    opacity: 1;
  }
}

.mobile-menu-button {
  display: none;
  padding: 0;
  width: 40px;
  height: 40px;
  border: none;
  background: transparent;
  color: #1989fa;
  :deep(.van-icon) {
    font-size: 24px;
  }
}

.mobile-menu {
  height: 100%;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.08);
}

.mobile-menu-header {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000000;
  position: sticky;
  top: 0;
  z-index: 2;
  border-bottom: 1px solid #f0f0f0;
}

.mobile-logo {
  height: 28px;
  width: auto;
  object-fit: contain;
}

.close-icon {
  font-size: 24px;
  color: #ffffff;
  padding: 8px;
  cursor: pointer;
  
  &:active {
    opacity: 0.7;
  }
}

.mobile-menu-content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.mobile-nav-item {
  font-size: 17px;
  font-weight: 500;
  color: #333333;
  cursor: pointer;
  transition: all 0.2s ease;
  
  .nav-text {
    flex: 1;
    padding: 16px 0;
    display: block;
    border-bottom: 1px solid #f0f0f0;
  }
  
  .external-icon {
    font-size: 16px;
    color: #999999;
    margin-right: 8px;
    transition: transform 0.3s ease;
  }
  
  &:active {
    opacity: 0.7;
  }
}

.mobile-nav-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px 0;
  color: #333333;
  font-weight: 600;
  border-bottom: 1px solid #f0f0f0;
  margin-bottom: 8px;
  
  &:active {
    opacity: 0.7;
  }
}

.mobile-dropdown-menu {
  margin: 0 0 16px 0;
}

.mobile-dropdown-item {
  padding: 14px 0;
  color: #666666;
  font-size: 15px;
  transition: all 0.2s ease;
  border-bottom: 1px solid #f0f0f0;
  
  &:last-child {
    border-bottom: none;
  }
  
  &:active {
    color: #ff375f;
  }
}

.external-icon.rotate {
  transform: rotate(180deg);
}

.mobile-controls {
  display: none;
  align-items: center;
  gap: 8px;
}

.mobile-search-button {
  padding: 0;
  width: 40px;
  height: 40px;
  border: none;
  background: transparent;
  color: #333333;
  :deep(.van-icon) {
    font-size: 22px;
  }
  
  &:active {
    opacity: 0.7;
  }
}

.mobile-search-popup {
  padding: 16px;
  background: #fff;
  
  .mobile-search-input {
    :deep(.van-search__content) {
      background: #f5f5f5;
      border-radius: 8px;
      height: 44px;
    }
    
    :deep(.van-field__input) {
      font-size: 15px;
      padding: 0 12px;
      height: 44px;
      line-height: 44px;
    }
    
    :deep(.van-icon) {
      font-size: 20px;
      margin-right: 4px;
      color: #666666;
    }
  }
}

@media screen and (max-width: 768px) {
  .header-container {
    height: 50vh;
  }
  
  .banner {
    background-position: 56% center;
  }
  
  .desktop-menu {
    display: none;
  }
  .mobile-controls {
    display: flex;
  }
  .mobile-menu-button {
    display: block;
  }
  .custom-nav-bar {
    padding: 0 12px;
  }
  .scroll-down-indicator {
    display: none;
  }
}

@media screen and (max-width: 480px) {
  .header-container {
    height: 25vh;
  }
  
  .banner {
    background-position: 56% center;
  }
  
  .logo {
    height: 18px;
  }
  :deep(.van-nav-bar__left){
    left: 0px;
  }
  :deep(.van-nav-bar__right){
    right: 0px;
  }
  .scroll-down-indicator {
    display: none;
  }
}

.scroll-down-indicator {
  position: absolute;
  left: 50%;
  bottom: 150px;
  transform: translateX(-50%);
  z-index: 2;
  animation: bounce 1.5s infinite;
  cursor: pointer;
  svg {
    display: block;
  }
}

@keyframes bounce {
  0%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(12px);
  }
}

.banner-search-container {
  position: absolute;
  top: 84%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  z-index: 2;
  text-align: center;
}

.banner-search {
  :deep(.van-search__content) {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 32px;
    height: 52px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    display: flex;
    
    &:hover {
      box-shadow: 0 6px 24px rgba(0, 0, 0, 0.15);
      transform: translateY(-1px);
    }
    
    &:focus-within {
      box-shadow: 0 8px 28px rgba(0, 0, 0, 0.2);
      transform: translateY(-2px);
    }
  }
  
  :deep(.van-field__input) {
    color: #333;
    font-size: 16px;
    font-weight: 500;
    padding: 0 16px;
    height: 52px;
    line-height: 52px;
    -webkit-text-size-adjust: 100%;
    
    &::placeholder {
      color: #999;
      font-weight: normal;
    }
  }
  
  :deep(.van-icon) {
    color: #1976d2;
    font-size: 22px;
    margin-right: 8px;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    height: 52px;
    
    &:hover {
      transform: scale(1.1);
      color: #1565c0;
    }
  }
  
  :deep(.van-field__left-icon) {
    margin-right: 8px;
    display: flex;
    align-items: center;
    height: 52px;
  }
}

@media screen and (max-width: 768px) {
  .banner-search-container {
    display: none;
  }
  
  .banner-search {
    :deep(.van-search__content) {
      height: 44px;
      border-radius: 22px;
    }
    
    :deep(.van-field__input) {
      font-size: 15px;
      padding: 0 12px;
      height: 44px;
      line-height: 44px;
    }
    
    :deep(.van-icon) {
      font-size: 20px;
      margin-right: 6px;
      height: 44px;
    }
    
    :deep(.van-field__left-icon) {
      height: 44px;
    }
  }
}

@media screen and (max-width: 480px) {
  .banner-search {
    :deep(.van-search__content) {
      height: 40px;
      border-radius: 20px;
    }
    
    :deep(.van-field__input) {
      font-size: 14px;
      padding: 0 10px;
      height: 40px;
      line-height: 40px;
    }
    
    :deep(.van-icon) {
      font-size: 18px;
      margin-right: 4px;
      height: 40px;
    }
    
    :deep(.van-field__left-icon) {
      height: 40px;
    }
  }
}
</style>




