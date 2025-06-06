<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';
const isMenuOpen = ref(false);
const router = useRouter();
const route = useRoute();

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  const navList = document.querySelector(".nav-list");
  const menuBtn = document.querySelector(".mobile-menu-btn");
  if (navList && menuBtn) {
    navList.classList.toggle("active");
    menuBtn.classList.toggle("active");
  }
};
const handleScroll = (target) => {
  // 根据target参数进行不同的路由跳转
  switch (target) {
    case 1:
    case "1":
      router.push({ name: "CoreIntelligentManufacturing" });

      break;
    case 2:
    case "2":
      router.push({ name: "PreciseIntelligentManufacturing" });
      break;
    case 3:
    case "3":
      router.push({ name: "ServiceIntelligentManufacturing" });

      break;
    default:
      router.push({ name: "about" });
  }
};
</script>

<template>
  <Header />
  <div class="about-container">
    <!-- Banner，全屏 -->
    <div class="about-banner-img">
      <div class="banner-bg"></div>
      <div class="img-box banner-img-box">
        <img src="@/assets/images/about/01.jpg" alt="关于我们" />
      </div>
      <div class="banner-title">关于我们</div>
    </div>
    <!-- 概况区块，居中内容 -->
    <section class="about-section about-overview">
      <div class="center-content">
        <!-- 一级标题 -->
        <h2 class="one-title">了解英诺莱比</h2>
        <!-- 二级标题 -->
        <h3>始于2003，走在智能制造前沿</h3>
        <!-- 内容 -->
        <p>
          自2003年成立以来，英诺莱比始终专注于定制化精密零件的智能制造服务。20多年来，我们凭借一站式智能制造体系与扎实的工程实力，为来自欧洲、美洲、亚太等40多个国家和地区的20000多个项目，提供专业、高效、高质量的工程支持与制造解决方案，赢得全球客户的广泛认可。随着客户需求的持续增长，2024年英诺莱比新增两座智能化加工基地，进一步强化一站式交付能力。公司加快推进数字化转型与产业布局升级，三大智造基地现已实现生产数据自动采集与全流程可视化管控，显著提升制造效率与质量管理水平，助力客户实现商业成功。
        </p>
        <!-- pc -->
        <div class="img-box overview-img-box pc-img">
          <img src="@/assets/images/about/02.jpg" alt="英诺莱比" />
        </div>
        <!-- 移动 -->
        <div class="img-box overview-img-box mobile-img">
          <img src="@/assets/images/about/mobile.jpg" alt="英诺莱比" />
        </div>
      </div>
    </section>
    <!-- 基地区块，背景全屏，居中内容 -->
    <section class="about-section about-base">
      <div class="center-content-base">
        <div class="base-list">
          <div class="base-item">
            <div
              class="base-text"
              style="
                display: flex;
                align-items: flex-start;
                justify-content: space-between;
              "
            >
              <div class="base-icon">
                <img
                  class="base-mark base-mark-none"
                  src="@/assets/images/about/mark.png"
                  alt="英诺莱比核心智造基地"
                />
              </div>
              <div>
                <h4>
                  <span class="base-icon-pc-none">
                    <img
                      class="base-mark-pc-none"
                      src="@/assets/images/about/mark.png"
                      alt="英诺莱比核心智造基地"
                    />
                  </span>
                  英诺莱比核心智造基地
                </h4>
                <p>
                  英诺莱比构建了涵盖精密CNC加工、模具设计与制造、自动化注塑成型、小批量复模、定制钣金加工、多工艺表面处理及DFM可制造性分析的一站式制造服务体系。通过集成多工艺协同制造与工程咨询能力，我们为医疗设备、科研仪器等高要求行业提供高效率、高品质的智造支持，赋能企业创新。
                </p>
                <!-- 路由跳转 -->
                <a
                  class="base-link"
                  href="javascript:void(0)"
                  @click="handleScroll('1')"
                >
                  了解更多
                  <span class="arrow">
                    <img src="@/assets/images/about/arrow.png" alt="了解更多" />
                  </span>
                </a>
              </div>
            </div>
            <div class="base-img">
              <img
                src="@/assets/images/about/11.jpg"
                alt="英诺莱比核心智造基地"
              />
            </div>
          </div>
          <div class="base-item reverse">
            <div
              class="base-text"
              style="
                display: flex;
                align-items: flex-start;
                justify-content: space-between;
              "
            >
              <div class="base-icon">
                <img
                  class="base-mark base-mark-none"
                  src="@/assets/images/about/mark.png"
                  alt="CNC精密智造基地"
                />
              </div>
              <div>
                <h4>
                  <span class="base-icon-pc-none">
                    <img
                      class="base-mark-pc-none"
                      src="@/assets/images/about/mark.png"
                      alt="CNC精密智造基地"
                    />
                  </span>
                  CNC精密智造基地
                </h4>
                <p>
                  配备高端多轴加工中心与智能化品控系统，突破高复杂度结构件的批量加工难点，符合DIN
                  ISO 2768 M(F)标准，实现高精度加工与全流程质量管控。
                </p>
                <a
                  class="base-link"
                  href="javascript:void(0)"
                  @click="handleScroll('2')"
                >
                  了解更多
                  <span class="arrow">
                    <img src="@/assets/images/about/arrow.png" alt="了解更多" />
                  </span>
                </a>
              </div>
            </div>
            <div class="base-img">
              <img src="@/assets/images/about/13.jpg" alt="CNC精密智造基地" />
            </div>
          </div>
          <div class="base-item">
            <div
              class="base-text"
              style="
                display: flex;
                align-items: flex-start;
                justify-content: space-between;
              "
            >
              <div class="base-icon">
                <img
                  class="base-mark base-mark-none"
                  src="@/assets/images/about/mark.png"
                  alt="金属表面处理智造基地"
                />
              </div>
              <div>
                <h4>
                  <span class="base-icon-pc-none">
                    <img
                      class="base-mark-pc-none"
                      src="@/assets/images/about/mark.png"
                      alt="金属表面处理智造基地"
                    />
                  </span>
                  金属表面处理智造基地
                </h4>
                <p>
                  集成阳极氧化、喷砂、钝化等全流程金属表面处理工艺，显著提升零件表面光洁度、抗腐蚀性能及长效防护等级，满足医疗设备、科研仪器、汽车研发等领域的严苛需求。
                </p>
                <a
                  class="base-link"
                  href="javascript:void(0)"
                  @click="handleScroll('3')"
                >
                  了解更多
                  <span class="arrow">
                    <img src="@/assets/images/about/arrow.png" alt="了解更多" />
                  </span>
                </a>
              </div>
            </div>
            <div class="base-img">
              <img
                src="@/assets/images/about/12.jpg"
                alt="金属表面处理智造基地"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 第三部分，左右结构 -->
    <section class="about-section about-third">
      <div class="center-content third-content">
        <div class="third-flex">
          <div class="third-text">
            <!-- pc -->
            <div class="third-text-content-pc">
              <h2 class="main-title">全球智造，</h2>
              <h3 class="sub-title two-title">创新赋能</h3>
            </div>
            <!-- 移动 -->
            <div class="third-text-content-mobile">
              <h2 class="main-title">全球智造，创新赋能</h2>
            </div>
            <p>
              英诺莱比专注高端精密智造，服务涵盖医疗设备、科研仪器、汽车工业、消费电子等多个领域。通过符合ISO
              9001、ISO13485、ISO14001等多个国际标准的质量体系、专业的工程支持与一站式智能制造能力，我们帮助客户加速从设计验证到量产的全过程，推动产品更快落地、更稳量产。
            </p>
          </div>
          <div class="third-img large-img">
            <img src="@/assets/images/about/14.jpg" alt="科技驱动 智领未来" />
          </div>
        </div>
      </div>
    </section>
    <!-- 第四部分，左右结构 -->
    <section class="about-section about-fourth">
      <div class="center-content third-content">
        <div class="third-flex">
          <div class="third-text">
            <!-- pc -->
            <div class="third-text-content-pc">
              <h2 class="main-title">智造未来，</h2>
              <h3 class="sub-title two-title">携手共赢</h3>
            </div>
            <!-- 移动 -->
            <div class="third-text-content-mobile">
              <h2 class="main-title">智造未来，携手共赢</h2>
            </div>
            <p>
              我们相信，只有不断提升自身实力，才能真正为客户创造长期价值。未来，英诺莱比将继续以数字化、智能化制造为核心发展方向，以更开放的视野、更先进的技术，赋能全球客户实现更快、更优、更可靠的产品上市。
            </p>
          </div>
          <div class="third-img large-img">
            <img src="@/assets/images/about/15.jpg" alt="科技驱动 智领未来" />
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
  max-width: 100%;
  box-sizing: border-box;
}

/* 头部Logo，全屏 */
.about-header,
.center-content,
.center-content-base {
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
  .one-title {
    margin-bottom: 20px;
  }
}

@media (min-width: 768px) {
  .about-header,
  .center-content {
    max-width: 750px;
  }
  .center-content-base {
    max-width: 750px;
  }
}
@media (min-width: 992px) {
  .about-header,
  .center-content {
    max-width: 970px;
  }
  .center-content-base {
    max-width: 970px;
  }
}
@media (min-width: 1200px) {
  .about-header,
  .center-content {
    max-width: 1170px;
  }
  .center-content-base {
    max-width: 1250px;
  }
}

.logo-box {
  width: 180px;
  height: 48px;
  /* background: #eee; */
  display: flex;
  align-items: center;
  /* justify-content: center; */
  font-size: 1.5rem;
  font-weight: bold;
  color: #e60012;
  /* margin-left: 300px; */
  border-radius: 8px;
  margin: 8px 0;
}

/* Banner，全屏 */
.about-banner-img {
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

/* 居中内容区块 */
.about-section {
  /* background: #f8f8f8; */
  padding: 40px 0;
}

.about-section:last-child {
  padding: 0 0 40px 0;
}
.center-content h2 {
  font-family: "思源黑体", sans-serif;
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.2;
}
.center-content h3 {
  font-family: "思源黑体", sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.3;
}
.two-title {
  font-family: "思源黑体", sans-serif;
  font-size: 2rem !important;
  font-weight: bold;
  line-height: 1.2 !important;
  margin: 20px 0 0 100px;
}
.center-content p {
  font-family: "思源正常体", sans-serif;
  font-size: 1rem; /* 16px */
  font-weight: normal;
  line-height: 27px;
  margin: 20px 0;
}
.overview-img-box {
  width: 100%;
  height: 100%;
  background: #fff;
  img {
    width: 100%;
    height: 100%;
  }
}
.pc-img {
  display: block;
}
.mobile-img {
  display: none;
}
.base-icon-pc-none {
  display: none;
}
@media (max-width: 767px) {
  .banner-bg {
    width: 180px;
    height: 45px;
  }
  .center-content {
    text-align: center;
    /* padding: 0 4%; */
    .one-title {
      margin-bottom: 7px;
    }
  }
  .about-header {
    padding: 12px 4%;
  }
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
    width: 100%;
    height: auto;
    display: block;
    object-fit: contain;
  }
  .about-banner-img {
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
  .center-content h2 {
    font-size: 1.5rem;
    line-height: 1.4;
    text-align: center;
    display: inline-block;
    margin: 0 auto 16px auto;
    padding-bottom: 8px;
    width: auto;
    position: relative;
    border-bottom: none;
  }
  .center-content h2::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 2.6em;
    height: 2px;
    background-color: #e60012;
  }
  .two-title {
    font-size: 1.25rem !important;
    text-align: center;
    margin: 0 auto 16px auto;
    width: auto;
  }
  .center-content h3 {
    font-size: 1.25rem;
    text-align: center;
    margin: 0 auto 16px auto;
    width: auto;
  }
  .center-content p {
    font-family: "思源正常体", sans-serif;
    font-size: 16px;
    line-height: 1.95em;
    padding: 0;
    width: 100%;
    text-align: left;
    margin: 16px 0;
  }
  .overview-img-box,
  .overview-img-box img {
    width: 100%;
    height: auto;
    display: block;
    max-width: 100%;
  }
  .pc-img {
    display: none;
  }
  .mobile-img {
    display: block;
  }
  .base-icon-pc-none {
    display: block;
    display: flex;
    align-items: center;
  }
  .base-mark-pc-none {
    display: block;
    width: 24px;
    height: 24px;
    object-fit: contain;
    vertical-align: middle;
    margin-right: 8px;
  }
  .about-section {
    padding: 32px 0;
    margin-bottom: 16px;
  }
  .about-section:last-child {
    margin-bottom: 0;
    box-shadow: none;
  }
  .about-overview,
  .about-base,
  .about-third,
  .about-fourth {
    background: #fff;
  }
  .base-list {
    gap: 32px;
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
    font-size: 1.125rem;
    margin-bottom: 12px;
  }
  .base-text p {
    font-size: 16px;
    line-height: 1.95em;
    margin-bottom: 16px;
  }
  .base-mark {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }
  .base-link {
    font-size: 16px;
  }
  .base-link .arrow img {
    width: 20px;
    height: 12px;
  }
  .about-third {
    padding: 32px 0;
  }
  .third-flex {
    flex-direction: column;
    gap: 24px;
    align-items: flex-start;
  }
  .third-img.large-img img {
    width: 100%;
    max-width: 100%;
    height: auto;
  }
  .third-text .main-title,
  .third-text .sub-title {
    display: inline;
    font-size: 1.25rem;
    font-weight: bold;
    margin: 0;
    line-height: 1.4;
    padding: 0;
  }
  .third-text .sub-title {
    margin-left: 0.25em;
  }
  .third-text p {
    margin: 16px 0;
    font-size: 16px;
    line-height: 1.95em;
  }
  .main-title {
    font-size: 1.25rem;
  }
  .sub-title {
    font-size: 1.125rem;
  }
  .base-list {
    gap: 32px !important;
  }
}

.about-base {
  background: #f6f6f8;
  padding: 40px 0;
}
.base-list {
  display: flex;
  flex-direction: column;
  gap: 48px;
}
.base-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* gap: 40px; */
  padding: 0;
}
.base-item.reverse {
  flex-direction: row-reverse;
}
.base-text {
  flex: 1;
  min-width: 0;
}
.base-text h4 {
  font-size: 1.5rem;
  line-height: 1.3;
  font-weight: bold;
  font-family: "思源黑体", sans-serif;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
}
.base-icon {
  display: flex;
  align-items: center;
}

.base-text p {
  font-size: 1rem;
  color: #333;
  margin-bottom: 20px;
  line-height: 1.8;
  font-family: "思源正常体", sans-serif;
}
.base-link {
  color: #e60012;
  font-weight: bold;
  font-family: "思源正常体", sans-serif;
  text-decoration: none;
  font-size: 1rem;
  /* display: inline-flex; */
  /* align-items: center; */
}
.base-link .arrow {
  margin-left: 4px;
  font-size: 1.2em;
  transition: transform 0.2s;
}
.base-link .arrow img {
  width: 28px;
  height: 16px;
  vertical-align: middle;
}
.base-link:hover .arrow {
  transform: translateX(4px);
}
.base-img {
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.base-img img {
  width: 100%;
  max-width: 520px;
  object-fit: cover;
}
@media (max-width: 767px) {
  .base-item,
  .base-item.reverse {
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }
  .base-img {
    width: 100%;
    max-width: 100%;
    margin-bottom: 8px;
  }
  .base-img img {
    width: 100%;
    max-width: 100%;
    height: auto;
  }
  .base-text h4 {
    font-size: 1.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .base-text p {
    font-size: 16px;
  }
  .base-mark {
    width: 22px;
    height: 22px;
    margin-right: 6px;
  }
  .base-mark-none {
    display: none;
  }
  .base-mark-pc-none {
    display: block;
  }
  .third-text-content-pc {
    display: none;
  }
  .third-text-content-mobile {
    display: block;
  }
}
.base-mark {
  width: 32px;
  height: 32px;
  object-fit: contain;
  vertical-align: middle;
  margin-right: 8px;
  padding-top: 5px;
}
.about-third {
  background: #fff;
  /* padding: 40px 0; */
}
.third-flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
}
.third-text {
  flex: 1;
}
.third-img img {
  width: 100%;
  max-width: 520px;
  object-fit: cover;
}
.third-text-content-pc {
  display: block;
}
.third-text-content-mobile {
  display: none;
}
@media (max-width: 767px) {
  .about-third {
    padding: 24px 0;
  }
  .third-flex {
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }
  .third-img.large-img img {
    width: 100%;
    max-width: 100%;
    height: auto;
  }
  /* 合并主副标题为一行 */
  .third-text .main-title,
  .third-text .sub-title {
    display: inline;
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0;
    line-height: 1.3;
    padding: 0;
  }

  .third-text .sub-title::before {
    content: "";
  }
  .third-text .sub-title {
    margin-left: 0.2em;
  }
  /* 移动端下隐藏副标题的换行 */
  .third-text .main-title {
    margin-bottom: 0;
  }
  .third-text p {
    margin: 12px 0;
  }
  .third-text-content-pc {
    display: none;
  }
  .third-text-content-mobile {
    display: block;
  }
}
.main-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.2em;
  line-height: 1.1;
}
.sub-title {
  font-size: 1.5rem;
  margin-bottom: 1em;
  line-height: 1.1;
}
.third-img.large-img {
  flex: 1.5;
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.third-img.large-img img {
  width: 100%;
  max-width: 700px;
  object-fit: cover;
}
@media (max-width: 767px) {
  .main-title {
    font-size: 1.4rem;
  }
  .sub-title {
    font-size: 1.1rem;
  }
  .third-img.large-img img {
    max-width: 100%;
    height: auto;
  }
}

@media (max-width: 767px) {
  .third-text-content-mobile .main-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0;
    line-height: 1.3;
    padding: 0;
    position: relative;
    display: inline-block;
    padding-bottom: 8px;
    border-bottom: none;
  }
  .third-text-content-mobile .main-title::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 8.6em;
    height: 2px;
    background-color: #e60012;
  }
}

.about-header {
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-nav {
  display: flex;
  align-items: center;
}

.nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 32px;
}

.nav-item {
  margin: 0;
}

.nav-link {
  color: #333;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  font-family: "思源黑体", sans-serif;
  position: relative;
  padding: 8px 0;
}

.nav-link::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #e60012;
  transition: width 0.3s ease;
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}

.mobile-menu-btn {
  display: none;
  flex-direction: column;
  gap: 6px;
  cursor: pointer;
  padding: 8px;
  z-index: 100;
}

.mobile-menu-btn span {
  display: block;
  width: 24px;
  height: 2px;
  background-color: #333;
  transition: all 0.3s ease;
}

@media (max-width: 767px) {
  .nav-list {
    display: none;
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    background: #fff;
    flex-direction: column;
    padding: 16px;
    gap: 16px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    z-index: 99;
  }

  .nav-list.active {
    display: flex;
  }

  .mobile-menu-btn {
    display: flex;
  }

  .nav-link {
    display: block;
    padding: 12px 0;
  }

  .mobile-menu-btn.active span:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }

  .mobile-menu-btn.active span:nth-child(2) {
    opacity: 0;
  }

  .mobile-menu-btn.active span:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }
}
</style>
