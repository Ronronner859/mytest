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
        <img src="@/assets/images/base1/base-bg.png" alt="关于我们" />
      </div>
    </div>

    <section class="about-section about-overview">
      <div class="center-content">
        <h2 class="one-title">一站式核心智造基地，<br> <span class="one-title-span">连接全球</span>精密制造需求</h2>
        <p>
          中山英诺莱比智能科技有限公司坐落于广东省中山市大涌镇，是英诺莱比智能制造体系的核心智造基地。工厂占地面积超过20,000平方米，整体布局遵循6S精益管理理念，集CNC加工、注塑成型、真空复模、质检中心及表面处理区于一体，构建起涵盖"加工-后处理-质检-交付"的全流程一站式制造平台。该基地不仅是主要产能输出中心，更是公司智能制造系统和数字化管理平台的集成枢纽，全面服务全球客户对高精度、定制化生产的多样化需求。
        </p>
        <div class="img-box overview-img-box pc-img">
          <img src="@/assets/images/base1/base-1.png" alt="英诺莱比" />
        </div>
        <div class="img-box overview-img-box mobile-img">
          <img src="@/assets/images/base1/base-mobile-1.jpg" alt="英诺莱比" />
        </div>
      </div>
    </section>

    <section class="about-section about-base">
      <div class="center-content-base">
        <div class="base-list">
          <div class="base-item">
            <div class="base-text">
              <div class="base-text-content">
                <div>
                  <h4>
                    <span class="base-icon-pc-none">
                      <img class="base-mark-pc-none" src="@/assets/images/base1/base-3.png" alt="数字化智造" />
                    </span>
                    数字化智造
                  </h4>
                  <p>
                    智造基地实现从客户下单、生产执行到出货运输的全流程可视化管理，通过智能排产系统，结合设备稼动率和物料状态，自动优化排程路径，确保各项目高效、准时交付。生产与质检数据全程实时采集与监控，支持全过程质量追溯和工艺优化，显著提升生产透明度与效率，助力客户加快产品验证与市场落地。
                  </p>
                </div>
              </div>
            </div>
            <div class="base-img">
              <img src="@/assets/images/base1/base-2.png" alt="英诺莱比核心智造基地" />
            </div>
          </div>

          <div class="base-item reverse">
            <div class="base-text">
              <div class="base-text-content">
                <h4>
                  <span class="base-icon-pc-none">
                    <img class="base-mark-pc-none" src="@/assets/images/base1/base-5.png" alt="高精度CNC加工车间" />
                  </span>
                  高精度CNC加工车间
                </h4>
                <p>
                  配备先进的三轴、四轴、五轴数控加工中心，支持从单件定制到中小批量的高精度加工需求。加工材料覆盖铝合金、不锈钢、钛合金、铜、POM、PEEK等工程塑料和金属材料，满足医疗器械、科研仪器、汽车、机器人等行业的多样化应用场景。车间配备专属编程工程室，确保每道工序标准化、可控化，加工精度符合DIN ISO 2768 M (F)，最快3天即可实现全球交付。
                </p>
              </div>
            </div>
            <div class="base-img">
              <img src="@/assets/images/base1/base-4.png" alt="高精度CNC加工车间" />
            </div>
          </div>

          <div class="base-item">
            <div class="base-text">
              <div class="base-text-content">
                <h4>
                  <span class="base-icon-pc-none">
                    <img class="base-mark-pc-none" src="@/assets/images/base1/base-7.png" alt="自动化注塑车间" />
                  </span>
                  自动化注塑车间
                </h4>
                <p>
                  车间配备先进的注塑设备及自动化辅助系统，确保产品成型一致、外观稳定，支持从50件到超过10万件的灵活生产批量，广泛覆盖产品验证、小批量试制到量产等产品研发的一站式高标准应用需求。通过一体化模具设计与注塑成型流程，我们帮助客户将开发周期缩短高达80%，大幅加快产品上市节奏。此外，我们拥有100多种工程级塑料，包括医疗级、耐高温、食品级、阻燃级等多种高性能材料，可灵活应对多个行业的差异化需求。
                </p>
              </div>
            </div>
            <div class="base-img">
              <img src="@/assets/images/base1/base-6.png" alt="自动化注塑车间" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="about-section about-base-2">
      <div class="center-content-base">
        <div class="base-list">
          <div class="base-item reverse">
            <div class="base-text base-text-2">
              <div class="base-text-content">
                <div>
                  <h4>
                    <span class="base-icon-pc-none">
                      <img class="base-mark-pc-none" src="@/assets/images/base1/base-8.png" alt="小批量真空复模车间" />
                    </span>
                    小批量真空复模车间
                  </h4>
                  <p>
                    针对小批量、高定制化的产品需求，复模车间专注于1–200件的快速交付。采用高质量PU原材料与液态硅胶模具技术，可精准复制母模的结构与表面细节，适用于医疗、消费电子、科研等领域的样件验证与工程测试。支持嵌件包胶、软硬复合、透明件成型等多种特殊工艺，产品性能稳定，外观可媲美注塑成型。标准交期最快7天，帮助客户缩短产品迭代周期。
                  </p>
                </div>
              </div>
            </div>
            <div class="base-img">
              <img src="@/assets/images/base1/base-9.png" alt="英诺莱比核心智造基地" />
            </div>
          </div>

          <div class="base-item">
            <div class="base-text base-text-2">
              <div class="base-text-content">
                <h4>
                  <span class="base-icon-pc-none">
                    <img class="base-mark-pc-none" src="@/assets/images/base1/base-11.png" alt="丰富表面处理" />
                  </span>
                  丰富表面处理
                </h4>
                <p>
                  整合多种常规与定制化表面处理工艺，涵盖喷涂、电镀、激光雕刻、丝印、移印等，满足零件在外观、功能、防护方面的多样化需求。配备十万级无尘喷涂车间，保障表面质量的高洁净度与一致性，适用于高端医疗设备与外观件的精细处理。支持多种涂装体系（如PU、UV、EMC等），可提供耐磨、防指纹、电磁屏蔽等功能性涂层服务，实现零件外观与性能的双重提升。
                </p>
              </div>
            </div>
            <div class="base-img">
              <img src="@/assets/images/base1/base-10.png" alt="高精度CNC加工车间" />
            </div>
          </div>

          <div class="base-item reverse">
            <div class="base-text base-text-2">
              <div class="base-text-content">
                <h4>
                  <span class="base-icon-pc-none">
                    <img class="base-mark-pc-none" src="@/assets/images/base1/base-13.png" alt="严格品质保证" />
                  </span>
                  严格品质保证
                </h4>
                <p>
                  工厂配备独立的恒温质检实验室与专业品控团队，配置包括三坐标测量机（CMM）、2D影像测量仪、3D扫描仪、光谱仪等高端检测设备，全面覆盖从原材料来料检测、加工过程巡检、首件检测到最终出货检验的全过程。严格执行ISO 9001、ISO 13485等质量管理体系标准，为医疗器械、精密仪器等行业客户提供高标准的品质保障，确保每一批交付件都稳定可靠、符合预期。
                </p>
              </div>
            </div>
            <div class="base-img">
              <img src="@/assets/images/base1/base-12.png" alt="自动化注塑车间" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <Footer />
</template>

<style scoped>
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
  padding: 0 0 40px;
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
  background: #fff;
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
  padding: 0 40px;
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
    left: 50%;
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
