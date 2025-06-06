<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router';
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';


const isMenuOpen = ref(false)
const router = useRouter()
const route = useRoute()

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  const navList = document.querySelector('.nav-list')
  const menuBtn = document.querySelector('.mobile-menu-btn')
  if (navList && menuBtn) {
    navList.classList.toggle('active')
    menuBtn.classList.toggle('active')
  }
}

const handleScroll = (target) => {
  switch(target) {
    case 1:
    case '1':
      router.push({ name: 'base1' });
      break;
    case 2:
    case '2':
      router.push({ name: 'base2' });
      break;
    case 3:
    case '3':
      router.push({ name: 'base3' });
      break;
    default:
      router.push({ name: 'about' });
  }
}
</script>

<template>
  <Header />
  <div class="about-container">
    <div class="about-banner-img">
      <div class="img-box banner-img-box">
        <img src="@/assets/images/base2/01.png" alt="关于我们" />
      </div>
    </div>

    <section class="about-section about-overview">
      <div class="center-content">
        <h2 class="one-title">高精度CNC定制化<br> <span class="one-title-span">工件的智造</span>基地</h2>
        <p>
          中山英诺莱比精密制造有限公司位于中山市火炬开发区，是英诺莱比智能制造体系中专注于高精度CNC定制化零件的重要产能基地。专注于复杂结构工件中小批量精密制造，服务于医疗设备、科研仪器、汽车零部件、机器人等对精度与一致性要求极高的行业。凭借先进设备配置与严谨质量体系，在全球客户中建立起优质可靠的交付口碑。
        </p>
        <div class="img-box overview-img-box pc-img">
          <img src="@/assets/images/base2/02.png" alt="英诺莱比" />
        </div>
        <div class="img-box overview-img-box mobile-img">
          <img src="@/assets/images/base2/mobile.jpg" alt="英诺莱比" />
        </div>
      </div>
    </section>

    <section class="about-section about-base">
      <div class="center-content-base">
        <div class="base-list">
          <div class="base-item">
            <div class="base-text">
              <div class="base-text-content base-text-content-1">
                <div>
                  <h4>
                    <span class="base-icon-pc-none">
                      <img class="base-mark-pc-none" src="@/assets/images/base2/04.png" alt="数字化智造" />
                    </span>
                    基地概览 
                  </h4>
                  <p>
                    高精度CNC智造基地以6S精益智造为核心理念进行整体布局，设有独立的数字化加工车间、恒温质检区域、专业编程工程室及刀具管理区，确保每道加工工序的标准化、可控化与高效率。引入先进的数字化管理系统，打通从排产、加工、质检到出货的各关键环节，实现全过程数据透明与可追溯管理，大幅提升交付效率与批量加工的稳定性，为客户提供稳定、高效、可持续的智造支持。
                  </p>
                </div>
              </div>
            </div>
            <div class="base-img">
              <img src="@/assets/images/base2/03.png" alt="英诺莱比核心智造基地" />
            </div>
          </div>

          <div class="base-item reverse">
            <div class="base-text">
              <div class="base-text-content base-text-content-2">
                <h4>
                  <span class="base-icon-pc-none">
                    <img class="base-mark-pc-none" src="@/assets/images/base2/06.png" alt="高精度CNC加工车间" />
                  </span>
                  智造能力
                </h4>
                <p>
                  工厂配备高端CNC加工中心，涵盖三轴、四轴与五轴复合加工机型，适用于复杂结构件的精密制造，符合DIN ISO 2768 M/F 等级要求，满足对尺寸公差控制严格的工件制造。支持加工的材料超过100种，覆盖多种金属（如铝合金、镁合金、不锈钢、铜、钛合金等）及工程塑料（如POM、PA、PEEK、PET、PTFE等），满足不同行业对力学性能、耐腐蚀性、电绝缘性等方面的定制化需求。交付周期最快可达3天，支持从单件到中小批量定制化制造。
                </p>
              </div>
            </div>
            <div class="base-img">
              <img src="@/assets/images/base2/05.png" alt="高精度CNC加工车间" />
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
  <Footer />
</template>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.about-container {
  width: 100%;
}

.about-header,
.center-content,
.center-content-base {
  margin: 0 auto;
  padding: 0 16px;
}

.about-banner-img {
  height: 600px;
  position: relative;
  overflow: hidden;
}

.banner-img-box {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.banner-img-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
@media screen and (max-width: 767px) {
  .banner-img-box img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  .banner-img-box {
    height: auto;
  }
}
.about-section {
  padding: 60px 0 20px;
}

.about-section:last-child {
  /* padding: 0 0 40px; */
  margin-bottom: 20px;
}

.center-content h2 {
  font-family: "思源黑体", sans-serif;
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 20px;
}

.one-title-span {
  border-bottom: 5px solid #e60012;
}

.center-content p {
  font-family: "思源正常体", sans-serif;
  font-size: 1rem;
  line-height: 27px;
  margin: 20px 0;
}

.overview-img-box {
  width: 100%;
  height: 100%;
  background: #fff;
}

.overview-img-box img {
  width: 100%;
  height: 100%;
}

.pc-img {
  display: block;
}

.mobile-img {
  display: none;
}

.base-mark-pc-none {
  display: block;
  width: 24px;
  height: 24px;
  object-fit: contain;
  vertical-align: middle;
  margin-right: 8px;
  margin-top: 3px;
}

.about-base {
  background: #eaeef1;
  padding: 0 0 20px;
}

.about-base-2 {
  background: #fff;
  padding: 20px 0;
}

.base-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.base-item {
  display: flex;
  justify-content: space-between;
  padding: 0;
}

.base-item:first-child {
  margin-top: 20px;
}

.base-item.reverse {
  flex-direction: row-reverse;
}

.base-text-2 {
  background: #eaeef1 !important;
}

@media (max-width: 767px) {
  .base-text-2 {
    background: #fff !important;
  }
  .about-base{
    background: #fff !important;
  }
  .base-text h4 {
    gap: 0 !important;
  }
}

.base-text {
  flex: 1;
  min-width: 0;
  position: relative;
}

.base-text h4 {
  font-size: 1.5rem;
  line-height: 1.3;
  font-weight: bold;
  font-family: "思源黑体", sans-serif;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 10px;
}


.base-text-content {
  position: absolute;
  top: 55%;
  transform: translate(0%, -50%);
}

.base-text-content-1 {
  padding: 0 40px 0 0;
}
.base-text-content-2 {
  padding: 0 0 0 40px;
}
.base-text p {
  font-size: 1rem;
  color: #333;
  margin-bottom: 20px;
  line-height: 1.8;
  font-family: "思源正常体", sans-serif;
}

.base-img {
  min-width: 0;
  display: flex;
  align-items: flex-start;
}

.base-img img {
  width: 100%;
  max-width: 520px;
  object-fit: cover;
}

@media (min-width: 768px) {
  .center-content,
  .center-content-base {
    max-width: 750px;
  }
}

@media (min-width: 992px) {
  .center-content,
  .center-content-base {
    max-width: 970px;
  }
}

@media (min-width: 1200px) {
  .center-content,
  .center-content-base {
    max-width: 1170px;
  }
}

@media (max-width: 767px) {
  .one-title-span {
    border-bottom: none;
  }

  .center-content {
    text-align: center;
  }

  .center-content h2 {
    font-size: 1.5rem;
    line-height: 1.4;
    text-align: center;
    display: inline-block;
    margin: 0 auto 16px;
    padding-bottom: 8px;
    position: relative;
  }

  .center-content h2::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 56%;
    transform: translateX(-50%);
    width: 5.6em;
    height: 2px;
    background-color: #e60012;
  }

  .center-content p {
    font-size: 16px;
    line-height: 1.95em;
    text-align: left;
    margin: 16px 0;
  }

  .about-banner-img {
    height: 170px;
  }

  .pc-img {
    display: none;
  }

  .mobile-img {
    display: block;
  }

  .base-mark-pc-none {
    width: 20px;
    height: 20px;
    margin-bottom: 2px;
  }

  .about-section {
    /* padding: 32px 0; */
    /* box-shadow: 0 3px 6px 0 #e4e4e4; */
    margin-bottom: 16px;
    /* border-radius: 12px; */
    padding:0;
  }

  .about-section:last-child {
    margin-bottom: 0;
    box-shadow: none;
  }

  .base-text {
    background: none;
  }

  .base-text-content {
    position: static;
    padding: 0;
    transform: none;
  }

  .base-item,
  .base-item.reverse {
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }

  .base-img {
    width: 100%;
    max-width: 100%;
    margin-bottom: 12px;
  }

  .base-img img {
    width: 100%;
    max-width: 100%;
    height: auto;
  }

  .base-text h4 {
    font-size: 1.25rem;
    margin-bottom: 12px;
    justify-content: center;
  }

  .base-text p {
    font-size: 16px;
    line-height: 1.95em;
    margin-bottom: 16px;
  }
}
</style>
