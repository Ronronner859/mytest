<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const isMenuOpen = ref(false)
const router = useRouter()
const showDropdown = ref('')

const navList = [
  { 
    name: '走进英诺', 
    path: '#', 
    isExternal: false, 
    icon: 'info-o',
    children: [
      { name: '关于我们', path: '/', isExternal: false },
      { name: '发展历程', path: '/developmentHistory', isExternal: false },
      { name: '愿景和使命', path: '/mission', isExternal: false },
      { name: '地图导航', path: 'https://innorapidzs.cn/map/', isExternal: true }
    ]
  },
  { 
    name: '人才招聘', 
    path: '#', 
    isExternal: false, 
    icon: 'friends-o',
    children: [
      { name: '社会招聘', path: '/social-recruitment/society', isExternal: true },
      { name: '校园招聘', path: '/campus-recruitment/campus', isExternal: true }
    ]
  },
  { name: '联系我们', path: '/contactus', isExternal: false, icon: 'phone-o' },
]

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
}

const toggleDropdown = (menu) => {
  showDropdown.value = showDropdown.value === menu ? '' : menu;
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>

<template>
  <div class="about-header">
    <div class="img-box logo-box">
      <a href="javascript:void(0)" @click="router.push('/')">
        <img src="@/assets/images/about/logo.png" alt="关于我们" />
      </a>
    </div>
    <nav class="header-nav">
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
          class="mobile-menu-button" 
          icon="bars" 
          @click="toggleMenu"
        />
      </div>
    </nav>

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
          <img src="@/assets/images/about/logo.png" alt="logo" class="mobile-logo">
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
</template>

<style scoped lang="scss">
.about-header {
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  width: 100%;
}

.logo-box {
  width: 180px;
  height: 48px;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: #e60012;
  border-radius: 8px;
  margin: 8px 0;
  img{
    width: 80%;
    height: 80%;
    object-fit: contain;
  }
}

.header-nav {
  display: flex;
  align-items: center;
}

.desktop-menu {
  display: flex;
  align-items: center;
  gap: 48px;
}

.nav-item {
  font-size: 16px;
  font-weight: bold;
  color: #000000;
  cursor: pointer;
  position: relative;
  padding: 0 4px;
  text-align: center;
  
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
  text-align: left;

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

.dropdown-item {
  padding: 10px 20px;
  color: #333;
  font-size: 14px;
  transition: all 0.2s ease;
  position: relative;
  white-space: nowrap;
  text-align: left;
  
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
  color: #000000;
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
  background-color: #ffffff;
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
  color: #000000;
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

@media screen and (max-width: 768px) {
  .desktop-menu {
    display: none;
  }
  .mobile-controls {
    display: flex;
  }
  .mobile-menu-button {
    display: block;
  }
  .about-header {
    width: 100%;
    max-width: 100%;
    padding: 0 12px;
    box-sizing: border-box;
  }
}

@media screen and (max-width: 480px) {
  .logo-box {
    height: 32px;
    font-size: 1rem;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 0;
  }
  
  .logo-box img {
    width: 60%;
    height: auto;
    display: block;
    object-fit: contain;
  }
}

@media (min-width: 768px) {
  .about-header {
    max-width: 750px;
  }
}

@media (min-width: 992px) {
  .about-header {
    max-width: 970px;
  }
}

@media (min-width: 1200px) {
  .about-header {
    max-width: 1170px;
  }
}
</style>
