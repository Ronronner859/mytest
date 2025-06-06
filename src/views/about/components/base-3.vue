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
        <img src="@/assets/images/base3/01.png" alt="关于我们" />
      </div>
    </div>

    <section class="about-section about-overview">
      <div class="center-content">
        <h2 class="one-title">让金属更出色<br> <span class="one-title-span">英诺莱比</span>表面处理解决方案</h2>
        <p>
          中山英诺莱比金属表面处理有限公司位于中山市小榄镇，是英诺莱比在金属精密制造领域的重要延伸模块。该基地专注于金属零件的多重表面处理工艺，旨在通过高效、高标准的表面处理解决方案，全面提升产品的外观品质、结构性能与耐久性，满足医疗设备、科研仪器、汽车、消费电子等高端制造行业对工艺质量与外观细节的双重需求。
        </p>
        <div class="img-box overview-img-box pc-img">
          <img src="@/assets/images/base3/10.jpg" alt="英诺莱比" />
        </div>
        <div class="img-box overview-img-box mobile-img">
          <img src="@/assets/images/base3/mobile.jpg" alt="英诺莱比" />
        </div>
      </div>
    </section>
    <!-- 第一组 -->
    <section class="about-section about-base">
      <div class="center-content-base">
        <div class="base-list">
          <div class="base-item">
            <div class="base-text">
              <div class="base-text-content">
                <div>
                  <h4>
                    <span class="base-icon-pc-none">
                      <img class="base-mark-pc-none" src="@/assets/images/base3/03.png" alt="数字化智造" />
                    </span>
                    基地概览
                  </h4>
                  <p>
                    金属表面处理智造基地按照6S精益制造理念科学规划，设置了阳极氧化、不锈钢钝化、铜钝化、碳钢发黑处理、喷砂等多功能加工区域，构建出从处理前清洗、前处理、主处理到后处理的完整工艺流程。每道工序在统一的生产管理体系下协同运行，确保处理效果稳定、重复性强。基地还设有现代化实验室与独立质检室，配合各类检测设备，为产品的处理效果、膜层质量和工艺一致性提供有力保障。整体布局兼顾工艺安全、作业效率与环保标准，是公司表面处理一体化服务的重要支撑平台。
                  </p>
                </div>
              </div>
            </div>
            <div class="base-img">
              <img src="@/assets/images/base3/02.png" alt="英诺莱比核心智造基地" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 第二组 -->
    <section class="about-section about-base-2">
      <div class="center-content-base">
        <div class="base-list">
          <div class="base-item reverse">
            <div class="base-text base-text-2">
              <div class="base-text-content">
                <div>
                  <h4>
                    <span class="base-icon-pc-none">
                      <img class="base-mark-pc-none" src="@/assets/images/base3/04.png" alt="表面处理能力" />
                    </span>
                    表面处理能力 
                  </h4>
                  <p class="surface-processing-text">
                    目前提供以下多种成熟且可控的金属表面处理工艺，适用于铝合金、不锈钢、碳钢、铜等多种材料，涵盖从外观装饰性处理到功能性防护涂层：
                    <ul class="surface-processing-list">
                      <li><span class="list-title">阳极氧化（普通阳极 / 硬质阳极）：</span>增强铝合金表面耐腐蚀性、硬度与装饰性，颜色可定制。</li>
                      <li><span class="list-title">不锈钢钝化：</span>去除游离铁离子，提升不锈钢抗腐蚀能力，保持本色金属质感。</li>
                      <li><span class="list-title">铜钝化：</span>防止氧化发黑，稳定电气性能，适用于电子部件与导电部件。</li>
                      <li><span class="list-title">碳钢发黑处理：</span>提升碳钢表面抗氧化性能，同时赋予低反光哑黑外观</li>
                      <li><span class="list-title">喷砂处理：</span>提供均匀磨砂质感或去除表面微瑕，常用于预处理或装饰处理。</li>
                    </ul>
                    <p class="surface-processing-text-last">针对客户的特殊要求，我们还可定制工艺参数（如膜厚、颜色、处理时间等），确保最终产品在功能与视觉效果上的高度一致性。</p>
                  </p>
                </div>
              </div>
            </div>
            <div class="base-img">
              <img src="@/assets/images/base3/05.png" alt="英诺莱比核心智造基地" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 第三组 -->
    <section class="about-section about-base">
      <div class="center-content-base">
        <div class="base-list">
          <div class="base-item">
            <div class="base-text">
              <div class="base-text-content">
                <div>
                  <h4>
                    <span class="base-icon-pc-none">
                      <img class="base-mark-pc-none" src="@/assets/images/base3/07.png" alt="品质保障" />
                    </span>
                    品质保障
                  </h4>
                  <p>
                    为确保每一件产品在性能与外观方面的稳定性，表面处理基地配备盐雾试验、UV检测、耐磨测试、光泽度检测、硬度检测、膜厚检测与颜色一致性检测等多项检测设备，覆盖从防腐性能、膜层质量到外观一致性的全面检验要求。各处理工序严格遵循标准化作业流程，并形成完整质检记录，确保不同批次产品始终如一，满足客户高标准的品质要求。
                  </p>
                </div>
              </div>
            </div>
            <div class="base-img">
              <img src="@/assets/images/base3/06.png" alt="英诺莱比核心智造基地" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 第四组 -->
    <section class="about-section about-base-2">
      <div class="center-content-base">
        <div class="base-list">
          <div class="base-item reverse">
            <div class="base-text base-text-2">
              <div class="base-text-content">
                <div>
                  <h4>
                    <span class="base-icon-pc-none">
                      <img class="base-mark-pc-none" src="@/assets/images/base3/09.png" alt="环保责任" />
                    </span>
                    环保责任
                  </h4>
                  <p>
                    表面处理基地高度重视环境保护与绿色制造，配备完善的污水净化系统，采用多级过滤与循环净化等工艺，有效去除处理过程中的污染物，实现达标排放，避免对环境造成二次污染。所有化学品均按照环保要求规范储存与管理，确保生产过程安全、合规。<br>我们将ESG理念融入日常运营，从工艺控制到废液处理，全面落实环保举措，以实际行动践行企业社会责任。通过绿色、可持续的制造方式，积极响应客户对环保合规、绿色供应链与可持续发展的需求，致力于打造更加环保、规范、值得信赖的表面处理基地。
                  </p>
                </div>
              </div>
            </div>
            <div class="base-img">
              <img src="@/assets/images/base3/08.png" alt="英诺莱比核心智造基地" />
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
  padding: 20px 0 50px 0;
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
  background: #ffffff !important;
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
  background: #eaeef1;
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
  top: 50%;
  transform: translate(0%, -50%);
  padding: 0;
}

.about-base .base-text-content {
  padding: 0 40px 0 0;
}

.about-base-2 .base-text-content {
  padding: 0 0 0 40px;
}

.surface-processing-list {
  font-size: 1rem;
  line-height: 2;
  list-style: disc;
  color: #333;
  font-family: "思源正常体", sans-serif;
  margin-left: 20px;
}
.list-title {
  font-weight: bold;
}

.surface-processing-text {
  font-size: 1rem;
  line-height: 2;
  color: #333;
  font-family: "思源正常体", sans-serif;
}

.surface-processing-text-last {
}
@media (max-width: 767px) {
  .about-base .base-text-content {
    padding: 0;
  }

  .about-base-2 .base-text-content {
    padding: 0;
  }
}

.about-base:nth-of-type(odd) .base-text-content {
  /* padding: 40px 0 0 0; */
}

.about-base:nth-of-type(even) .base-text-content {
  /* padding: 0 40px 0 0; */
}

.base-text p {
  font-size: 1rem;
  color: #333;
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
  padding: 20px 0;
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
    width: 2.6em;
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

  .base-img img {
    padding: 0 !important;
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
