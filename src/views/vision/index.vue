<script setup>
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';
</script>

<template>
  <Header />
  <div class="vision-container">
    <!-- Banner，全屏 -->
    <div class="about-banner-img">
      <div class="img-box banner-img-box">
        <img src="@/assets/images/vision/01.jpg" alt="关于我们" />
      </div>
    </div>
    <!-- 公司愿景 -->
    <div class="vision-section-box">
      <div class="vision-section vision-section--reverse">
        <div class="vision-text">
          <h2 class="vision-title">企业愿景 <span>Company Vision</span></h2>
          <div class="vision-divider"></div>
          <p class="vision-cn">成为全球智能制造领域的领先服务提供商</p>
          <p class="vision-en">
           To Be the Leading Manufacturing Service Provider<br />of Global Digital
            Manufacturing Industries
          </p>
        </div>
        <div class="vision-img">
          <img
            class="pc-img"
            src="@/assets/images/vision/02.jpg"
            alt="公司愿景"
          />
          <img
            class="mobile-img"
            src="@/assets/images/vision/mobile02.jpg"
            alt="公司愿景"
          />
        </div>
      </div>
    </div>
    <!-- 公司使命 -->
    <div class="vision-section-box-reverse">
      <div class="vision-section vision-section-base">
        <div class="vision-img">
          <img
            class="pc-img"
            src="@/assets/images/vision/04.jpg"
            alt="公司使命"
          />
          <img
            class="mobile-img"
            src="@/assets/images/vision/mobile04.jpg"
            alt="公司使命"
          />
        </div>
        <div class="vision-text">
          <h2 class="vision-title">企业使命 <span>Company Mission</span></h2>
          <div class="vision-divider"></div>
          <p class="vision-cn">
            构建智能制造服务体系<br />助力全球企业产品创新
          </p>
          <p class="vision-en">
            Building Intelligent Manufacturing Service System to Accelerate
            Product Innovations<br />of Global Companies
          </p>
        </div>
      </div>
    </div>
    <!-- 企业战略 -->
    <div class="vision-section-box">
      <div class="vision-section">
        <div class="vision-text">
          <h2 class="vision-title">企业战略 <span>Company Strategy</span></h2>
          <div class="vision-divider"></div>
          <p class="vision-cn">
            面对全球制造需求的不断升级，英诺莱比持续加大投入，推动生产基地向智能化、数字化转型升级，构建高效、灵活、可持续的制造体系，全力支持全球客户的产品开发与供应链协同。
          </p>
        </div>
        <div class="vision-img">
          <img
            class="pc-img"
            src="@/assets/images/vision/05.jpg"
            alt="企业战略"
          />
          <img
            class="mobile-img"
            src="@/assets/images/vision/mobile05.jpg"
            alt="企业战略"
          />
        </div>
      </div>
    </div>
    <!-- 企业文化  pc-->
    <div class="vision-section-box-culture">
      <div class="vision-section-culture">
        <div class="vision-section-culture-item">
          <div class="vision-section-culture-item-left">
            <h4>加速实现工业4.0</h4>
            <p style="width: 400px;"> 
              对于一些企业来说，变化意味着风险。而我们主动迎接变化，不断更新迭代，致力于智能化制造，加速迈向工业4.0。
            </p>
          </div>
          <div class="vision-section-culture-item-right">
            <img
              src="@/assets/images/vision/icon01.jpg"
              alt="加速实现工业4.0"
            />
          </div>
          <div class="vision-section-culture-item-right">
            <img
              src="@/assets/images/vision/icon02.jpg"
              alt="加速实现工业4.0"
            />
          </div>
          <div class="vision-section-culture-item-right">
            <h4>数智化技术引领制造</h4>
            <p>实现全面数字化与智能化制造，提升协同能力，联动全球资源。</p>
          </div>
        </div>
        <div
          class="vision-section-culture-item vision-section-culture-item-reverse"
        >
          <div
            class="vision-section-culture-item-left vision-section-culture-item-left-reverse"
          ></div>
          <div class="vision-section-culture-item-right">
            <img
              src="@/assets/images/vision/icon03.jpg"
              alt="加速实现工业4.0"
            />
          </div>
          <div class="vision-section-culture-item-right"  style="width: 1000px;">
            <h4>赋能医疗与科研仪器制造升级</h4>
            <p>
              深耕医学设备与科研设备领域，借助数字化制造体系满足高精度、定制化、快速交付等核心需求，赋能行业创新与效率提升。
            </p>
          </div>
        </div>
        <div class="vision-section-culture-item">
          <div class="vision-section-culture-item-right">
            <span class="right-title">机器人产业升级</span>
            <p style="width: 272px;">
              聚焦机器人产业升级，作为智能制造的重要环节，有效提升生产效率、增强产品一致性，并帮助客户降低整体制造成本。
            </p>
          </div>
          <div class="vision-section-culture-item-left">
            <img
              src="@/assets/images/vision/icon04.jpg"
              alt="加速实现工业4.0"
            />
          </div>
          <div class="vision-section-culture-item-left">
            <img
              src="@/assets/images/vision/icon05.jpg"
              alt="加速实现工业4.0"
            />
          </div>
          <div class="vision-section-culture-item-right">
            <span class="right-title">致力于服务型制造</span>
            <p>
              坚持服务型制造理念，提供伴随式工程咨询与定制化制造解决方案，持续向制造业价值链高端迈进，延伸至"微笑曲线"的两端。
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- 企业文化  mobile-->
    <div class="vision-section-box-culture-mobile">
      <div class="vision-section-culture-item">
        <div class="vision-section-culture">
          <div class="culture-header">
            <img
              src="@/assets/images/vision/icon-mobile-01.png"
              alt="加速实现工业4.0"
              style="margin-bottom: 5px"
            />
            <h4>加速实现工业4.0</h4>
          </div>
          <p>
            对于一些企业来说，变化意味着风险。而我们主动迎接变化，不断更新迭代，致力于智能化制造，加速迈向工业4.0。
          </p>
        </div>
      </div>
      <div class="vision-section-culture-item">
        <div class="vision-section-culture">
          <div class="culture-header">
            <img
              src="@/assets/images/vision/icon-mobile-02.png"
              alt="数智化技术引领制造"
              style="margin-bottom: 5px"
            />
            <h4>数智化技术引领制造</h4>
          </div>
          <p>实现全面数字化与智能化制造，提升协同能力，联动全球资源。</p>
        </div>
      </div>
      <div class="vision-section-culture-item">
        <div class="vision-section-culture">
          <div class="culture-header">
            <img
              src="@/assets/images/vision/icon-mobile-04.png"
              alt="机器人产业升级"
            />
            <h4>机器人产业升级</h4>
          </div>
          <p>
            聚焦机器人产业升级，作为智能制造的重要环节，有效提升生产效率、增强产品一致性，并帮助客户降低整体制造成本。
          </p>
        </div>
      </div>
      <div class="vision-section-culture-item">
        <div class="vision-section-culture">
          <div class="culture-header">
            <img
              src="@/assets/images/vision/icon-mobile-03.png"
              alt="赋能医疗与科研仪器制造升级"
              style="margin-bottom: 5px"
            />
            <h4>赋能医疗与科研仪器制造升级</h4>
          </div>
          <p>
            深耕医学设备与科研设备领域，借助数字化制造体系满足高精度、定制化、快速交付等核心需求，赋能行业创新与效率提升。
          </p>
        </div>
      </div>
      <div class="vision-section-culture-item">
        <div class="vision-section-culture">
          <div class="culture-header">
            <img
              src="@/assets/images/vision/icon-mobile-05.png"
              alt="致力于服务型制造"
            />
            <h4>致力于服务型制造</h4>
          </div>
          <p>
            坚持服务型制造理念，提供伴随式工程咨询与定制化制造解决方案，持续向制造业价值链高端迈进，延伸至"微笑曲线"的两端。
          </p>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<style lang="scss" scoped>
.vision-container {
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
}
.vision-section-company-left{
  width: 320px;
}
.vision-section-culture {
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  @media (max-width: 991px) {
    padding: 0 16px;
  }
}

.vision-section-culture-item {
  display: flex;
  gap: 15px;
  align-items: center;
}

.vision-section-culture-item-left-reverse {
  width: 79%;
}

.vision-section-culture-item-left,
.vision-section-culture-item-right {
  // flex: 1;
  background: #fff;
  margin-right: -4px;
}

.vision-section-culture-item-left h4,
.vision-section-culture-item-right h4 {
  font-size: 1.2rem;
  color: #222;
  margin-bottom: 12px;
  font-weight: bold;
  font-family: "思源黑体", sans-serif;
}

.vision-section-culture-item-right .right-title {
  font-size: 1.2rem;
  color: #222;
  margin-bottom: 12px;
  font-weight: bold;
  font-family: "思源黑体", sans-serif;
}

.vision-section-culture-item-left p,
.vision-section-culture-item-right p {
  font-size: 1rem;
  color: #444;
  line-height: 1.6;
  font-family: "思源正常体", sans-serif;
}

.vision-section-culture-item img {
  object-fit: cover;
}

@media (max-width: 991px) {
  .vision-section-culture-item {
    flex-direction: column;
    gap: 16px;
  }

  .vision-section-culture-item-left,
  .vision-section-culture-item-right {
    min-width: 100%;
    max-width: 100%;
  }

  .vision-section-culture-item img {
    // height: 160px;
  }
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
    position: relative !important;
  }
  .banner-img-box img {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover !important;
    display: block !important;
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
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
    box-shadow: 0 3px 6px 0px #e4e4e4;
    margin-bottom: 16px;
    border-radius: 12px;
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
.vision-section-box {
  background: #f5f5f5;
  padding: 40px 0;
  @media (max-width: 991px) {
    padding: 40px 0;
  }
}
.vision-section-box-reverse {
  background: #fff;
  padding: 40px 0;
  @media (max-width: 991px) {
    padding: 40px 0;
  }
}
.vision-section-base {
  background: #f5f5f5 !important;
  @media (max-width: 991px) {
    background: transparent !important;
  }
}
.vision-section-box-company {
  background: #f5f5f5;
  @media (max-width: 991px) {
    padding: 40px 0;
  }
}
.vision-section-company.flex-layout {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  min-height: 320px;
  gap: 24px;
  // padding: 0 48px;

  @media (max-width: 991px) {
    flex-direction: column;
    gap: 0;
    min-height: unset;
    background: transparent;
    padding: 0;
  }
}
.vision-section-company.flex-layout .vision-desc-box {
  flex: 1;
  padding: 48px 0;

  @media (max-width: 991px) {
    padding: 24px 16px 0 16px;
    text-align: center;
  }
}
.vision-section-company.flex-layout .vision-img {
  flex: 1;

  @media (max-width: 991px) {
    width: 100%;
  }
}
.vision-section {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 1200px;
  height: 330px;
  background: #fff;
  @media (max-width: 991px) {
    flex-direction: column;
    padding: 0 0 24px 0;
    min-height: unset;
    margin: 0 16px;
    height: auto;
    background: transparent;
  }
}
.vision-section--reverse {
  @media (max-width: 991px) {
    flex-direction: column;
    padding: 0 0 24px 0;
  }
}
.vision-text {
  flex: 1 1 0%;
  padding: 48px;
  min-width: 320px;
  @media (max-width: 991px) {
    // padding: 0 16px;
    padding: 0;
    min-width: unset;
    text-align: center;
    order: 1;
  }
}
.vision-title {
  font-size: 2.2rem;
  font-weight: bold;
  color: #222;
  margin-bottom: 10px;
  font-family: "思源黑体", sans-serif;
  span {
    display: block;
    font-size: 1.3rem;
    color: #222;
    font-weight: 500;
    margin-top: 4px;
    letter-spacing: 0.5px;
    font-family: "思源黑体", sans-serif;
  }
  @media (max-width: 767px) {
    font-size: 1.4rem;
    span {
      font-size: 1rem;
    }
  }
}
.vision-divider {
  width: 60px;
  height: 4px;
  background: #b71c1c;
  margin: 16px 0 24px 0;
  border-radius: 2px;
  @media (max-width: 767px) {
    width: 36px;
    height: 3px;
    margin: 12px auto 18px auto;
  }
}
.vision-cn {
  font-size: 1.1rem;
  color: #222;
  margin-bottom: 12px;
  line-height: 1.7;
  font-family: "思源正常体", sans-serif;
  @media (max-width: 767px) {
    font-size: 1rem;
  }
}
.vision-en {
  font-size: 1rem;
  color: #444;
  line-height: 1.7;
  font-family: "思源正常体", sans-serif;
  @media (max-width: 767px) {
    font-size: 0.95rem;
    width: 400px;
  }
}
.vision-img {
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 991px) {
    padding: 16px 0 0 0;
    min-width: unset;
    order: 2;
    width: 100%;
  }
  img {
    width: 100%;
    object-fit: cover;
    @media (max-width: 991px) {
      max-width: 100%;
      height: 200px;
    }
  }
}
.vision-title-box {
  padding: 48px 32px;
}
.vision-desc-box {
  padding: 48px 32px;
  @media (max-width: 991px) {
    padding: 24px 16px 0 16px;
    text-align: center;
    order: 1;
  }
}
.vision-section-company{
  max-width: 1200px;
  margin: 0 auto;
  height: 330px;
  background: #fff;
  @media (max-width: 991px) {
    flex-direction: column;
    padding: 0 0 24px 0;
    min-height: unset;
  }
}
@media (max-width: 991px) {
  .vision-section-box,
  .vision-section-box-reverse,
  .vision-section-box-company {
    padding: 24px 0;
  }

  .vision-section-company.grid-layout > div:first-child {
    display: none;
  }

  .vision-section-company.grid-layout .vision-img {
    order: 2;
    // padding: 16px 16px 0 16px;
  }
}
.pc-img {
  display: block;
  @media (max-width: 991px) {
    display: none;
  }
}

.mobile-img {
  display: none;
  @media (max-width: 991px) {
    display: block;
  }
}

/* 移动端企业文化样式 */
.vision-section-box-culture-mobile {
  display: none;
  padding: 0px 16px;
  background: #f5f5f5;

  @media (max-width: 991px) {
    display: block;
  }

  .vision-section-culture-item {
    overflow: hidden;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .vision-section-culture {
    padding: 0;
    display: flex;
    flex-direction: column;

    .culture-header {
      display: flex;
      align-items: center;
      padding: 16px;
      gap: 12px;

      img {
        width: 21px;
        height: 23px;
        object-fit: cover;
      }

      h4 {
        font-size: 1.2rem;
        color: #222;
        margin: 0;
        font-weight: bold;
        flex: 1;
        font-family: "思源黑体", sans-serif;
      }
    }

    p {
      font-size: 0.95rem;
      color: #444;
      line-height: 1.6;
      margin: 0 16px 16px;
      font-family: "思源正常体", sans-serif;
    }
  }
}

/* 在移动端隐藏PC端的企业文化部分 */
.vision-section-box-culture {
  @media (max-width: 991px) {
    display: none;
  }
}
</style>
