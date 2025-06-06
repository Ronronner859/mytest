<script setup>
import { ref, onMounted } from 'vue'
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
// @/assets/images/history/01.jpg
import history01 from '@/assets/images/history/01.jpg'
import history02 from '@/assets/images/history/02.jpg'
import history03 from '@/assets/images/history/03.jpg'
import history04 from '@/assets/images/history/04.jpg'
import history05 from '@/assets/images/history/05.jpg'
import history06 from '@/assets/images/history/06.jpg'
import history07 from '@/assets/images/history/07.jpg'
import history08 from '@/assets/images/history/08.jpg'

const timelineData = ref([
  {
    year: '2003',
    description: '公司在2003年正式创立，专注为国际客户提供高效、专业的快速原型制造服务，开启了智能制造全球化探索的第一步。',
    img: history01,
    position: 'left', // 图片在左
    yearPosition: 'left'
  },
  {
    year: '2006',
    description: '两位联合创始人加入，凭借制造管理方面的专业优势，结合中国强大的产业配套能力，积极开拓海外客户与市场。',
    img: history02,
    position: 'right', // 图片在右
    yearPosition: 'right'
  },
  {
    year: '2010',
    description: '持续深耕国际业务的同时，正式进入国内汽车零部件领域。自有制造基地在北京落地，标志着企业正式步入规模化定制智造阶段。',
    img: history03,
    position: 'left', // 图片在右
    yearPosition: 'left'
  },
  {
    year: '2015',
    description: '制造基地迁至广东省中山市，在制造效率、产能规模与资源整合等方面实现全面升级，为构建现代化智造体系奠定坚实基础。',
    img: history04,
    position: 'right', // 图片在左
    yearPosition: 'right'
  },
  {
    year: '2016',
    description: '聚焦"伴随式工程咨询+制造服务"的差异化路径，赢得欧洲客户广泛认可，欧洲市场销售额同比增长300%。',
    img: history05,
    position: 'left', // 图片在左
    yearPosition: 'left'
  },
  {
    year: '2018',
    description: '顺应多品种、小批量生产趋势，持续升级智能制造能力，成为全球众多工业制造企业可信赖的定制化制造伙伴。',
    img: history06,
    position: 'right', // 图片在右
    yearPosition: 'right'
  },
  {
    year: '2021',
    description: '产能与规模双升级，整体搬迁至中山大涌镇恒惠丰工业园，打造20000+平方米智能制造基地，提升交付能力与服务深度。',
    img: history07,
    position: 'left', // 图片在右
    yearPosition: 'left'
  },
  {
    year: '2024',
    description: '成立精密制造基地和金属表面处理基地，进一步完善一站式制造体系，推动产业链向更高效、更专业的方向全面升级。',
    img: history08,
    position: 'right', // 图片在左
    yearPosition: 'right'
  }
])

const timelineRef = ref(null)
const timelineItems = ref([])

onMounted(() => {
  timelineItems.value = document.querySelectorAll('.timeline-item')
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')
        observer.unobserve(entry.target)
      }
    })
  }, {
    threshold: 0.2,
    rootMargin: '0px'
  })

  timelineItems.value.forEach(item => {
    observer.observe(item)
  })
})
</script>

<template>
    <Header />
    <div class="history-container">
    <!-- Banner，全屏 -->
    <div class="about-banner-img">
      <!-- <div class="banner-bg"></div> -->
      <div class="img-box banner-img-box">
        <img src="@/assets/images/history/bg.jpg" alt="关于我们" />
      </div>
    </div>
    <div class="history-title-banner">发展历程</div>
    <!-- 发展历程 -->
    <div class="history-content">
      <div class="timeline-container" ref="timelineRef">
        <div class="timeline-wrapper">
          <div class="timeline-line"></div>
          <div v-for="(item, index) in timelineData" 
               :key="index"
               class="timeline-item"
               :class="{ 'reverse': item.position === 'left' }">
            <div class="timeline-dot">
              <div class="dot-inner"></div>
            </div>
            <div class="timeline-content">
              <div class="timeline-year" :class="{ 'left': item.yearPosition === 'left', 'right': item.yearPosition === 'right' }">{{ item.year }}</div>
              <span class="timeline-card">
                <p class="timeline-description">{{ item.description }}</p>
              </span>
            </div>
            <div class="timeline-image">
              <img :src="item.img" :alt="`${item.year}发展历程`" />
            </div>
          </div>
          <div class="timeline-continuing" style="display: none;"></div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.history-container {
  background: #f8f9fa;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
}
/* 时间在左 */
.timeline-year.left {
  text-align: left;
}
/* 时间在右 */
.timeline-year.right {
  text-align: right;
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

/* Timeline Styles */
.history-content {
  padding: 10px 0 60px 0;
  background: #f8f9fa;
}

.timeline-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
}

.timeline-wrapper {
  display: flex;
  flex-direction: column;
  gap: 60px;
  position: relative;
  padding-bottom: 60px;
}

.timeline-line {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(to bottom, #e60012, #ff4d4d);
  transform: translateX(-50%);
  box-shadow: 0 0 8px rgba(230, 0, 18, 0.3);
}

.timeline-line::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 3px;
  height: 60px;
  background: linear-gradient(to bottom, #ff4d4d, transparent);
  animation: linePulse 2s infinite;
}

.timeline-continuing {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 32px;
  height: 32px;
  background: #fff;
  border: 4px solid #e60012;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  box-shadow: 0 0 12px rgba(230, 0, 18, 0.2);
  animation: dotPulse 2s infinite;
}

.timeline-continuing::before {
  content: '';
  width: 12px;
  height: 12px;
  background: #e60012;
  border-radius: 50%;
  animation: innerPulse 2s infinite;
}

.timeline-continuing::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  border: 2px solid #e60012;
  border-radius: 50%;
  animation: ripple 2s infinite;
}

@keyframes dotPulse {
  0% {
    transform: translateX(-50%) scale(1);
    box-shadow: 0 0 12px rgba(230, 0, 18, 0.2);
  }
  50% {
    transform: translateX(-50%) scale(1.1);
    box-shadow: 0 0 20px rgba(230, 0, 18, 0.4);
  }
  100% {
    transform: translateX(-50%) scale(1);
    box-shadow: 0 0 12px rgba(230, 0, 18, 0.2);
  }
}

@keyframes innerPulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.3);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes ripple {
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.5);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 0.8;
  }
}

@keyframes linePulse {
  0% {
    opacity: 1;
    height: 60px;
  }
  50% {
    opacity: 0.5;
    height: 80px;
  }
  100% {
    opacity: 1;
    height: 60px;
  }
}

.timeline-item {
  display: flex;
  align-items: center;
  gap: 80px;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.timeline-item.reverse {
  flex-direction: row-reverse;
}

.timeline-item.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.timeline-dot {
  width: 28px;
  height: 28px;
  background: #fff;
  border: 4px solid #e60012;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  box-shadow: 0 0 12px rgba(230, 0, 18, 0.2);
  transition: all 0.3s ease;
}

.timeline-dot:hover {
  transform: translateX(-50%) scale(1.1);
  box-shadow: 0 0 15px rgba(230, 0, 18, 0.4);
}

.dot-inner {
  width: 10px;
  height: 10px;
  background: #e60012;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.timeline-dot:hover .dot-inner {
  transform: scale(1.2);
  background: #ff4d4d;
}

.timeline-content {
  width: 45%;
  padding-right: 40px;
  display: flex;
  flex-direction: column;
}

.timeline-item.reverse .timeline-content {
  padding-right: 0;
  padding-left: 40px;
}

.timeline-year {
  color: #e60012;
  font-size: 2rem;
  font-weight: 700;
  font-family: "思源黑体", sans-serif;
}

.timeline-card {
  padding: 24px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin: 0;
  padding: 0;
  display: flex;
}

.timeline-card:hover {
  /* transform: translateY(-5px); */
  /* box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12); */
}

.timeline-description {
  color: #333;
  line-height: 1.8;
  font-size: 1.1rem;
  margin-bottom: 0;
  max-width: 320px;
  font-family: "思源正常体", sans-serif;
}

.timeline-item:not(.reverse) .timeline-description {
  margin-left: auto;
}

.timeline-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.timeline-image img {
  max-width: 100%;
  height: 211px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.timeline-image:hover {
  transform: translateY(-5px);
}

.timeline-image:hover img {
  transform: scale(1.05);
}

@media (max-width: 767px) {
  .timeline-line {
    left: 20px;
    width: 2px;
    background: linear-gradient(to bottom, #e60012, #ff4d4d);
  }

  .timeline-line::after {
    left: 20px;
    width: 2px;
    height: 40px;
  }

  .timeline-dot {
    left: 20px;
    width: 24px;
    height: 24px;
    border-width: 3px;
  }

  .dot-inner {
    width: 8px;
    height: 8px;
  }

  .timeline-item {
    flex-direction: column !important;
    gap: 20px;
    padding-left: 40px;
    align-items: flex-start;
  }

  .timeline-item.reverse {
    flex-direction: column !important;
  }

  .timeline-content {
    width: 100%;
    padding: 0 !important;
    align-items: flex-start;
    text-align: left;
  }

  .timeline-year {
    text-align: left !important;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .timeline-card {
    padding: 0px;
  }

  .timeline-description {
    text-align: left !important;
    font-size: 1rem;
    line-height: 1.6;
  }

  .timeline-image {
    width: 100%;
  }

  .timeline-image img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .timeline-continuing {
    left: 20px;
    width: 24px;
    height: 24px;
    border-width: 3px;
    transform: none;
  }

  .timeline-continuing::before {
    width: 8px;
    height: 8px;
  }

  .timeline-continuing::after {
    border-width: 1.5px;
  }

  @keyframes dotPulse {
    0% {
      transform: scale(1);
      box-shadow: 0 0 8px rgba(230, 0, 18, 0.2);
    }
    50% {
      transform: scale(1.1);
      box-shadow: 0 0 12px rgba(230, 0, 18, 0.3);
    }
    100% {
      transform: scale(1);
      box-shadow: 0 0 8px rgba(230, 0, 18, 0.2);
    }
  }

  @keyframes innerPulse {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.2);
      opacity: 0.7;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes ripple {
    0% {
      transform: scale(1);
      opacity: 0.6;
    }
    50% {
      transform: scale(1.3);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 0.6;
    }
  }

  @keyframes linePulse {
    0% {
      opacity: 1;
      height: 40px;
    }
    50% {
      opacity: 0.5;
      height: 50px;
    }
    100% {
      opacity: 1;
      height: 40px;
    }
  }
}

/* Animation Keyframes */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.history-title-banner {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: -36px auto 12px auto;
  background: linear-gradient(90deg, #e60012 60%, #ff4d4d 100%);
  color: #fff;
  font-size: 2.4rem;
  font-weight: 900;
  padding: 16px 64px;
  box-shadow: 0 8px 32px rgba(230,0,18,0.18);
  letter-spacing: 6px;
  z-index: 10;
  text-align: center;
  font-family: "思源黑体", sans-serif;
  width: max-content;
  min-width: 180px;
  max-width: 90vw;
  transition: all 0.3s cubic-bezier(.4,0,.2,1);
}

@media (max-width: 767px) {
  .history-title-banner {
    font-size: 1.1rem;
    padding: 7px 12vw;
    border-radius: 14px;
    margin: -12px auto 4px auto;
    box-shadow: 0 2px 8px rgba(230,0,18,0.10);
    letter-spacing: 2px;
    min-width: 100px;
    max-width: 96vw;
  }
}
</style>
