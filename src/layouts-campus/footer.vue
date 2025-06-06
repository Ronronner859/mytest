<script setup></script>

<template>
  <div class="footer">
    <div class="footer-container">
      <div class="footer-content">
        <!-- 联系我们 -->
        <div class="contact-us">
          <span class="contact-us-title">联系我们</span>
        </div>
        <!-- 三家公司 -->
        <div class="three-companies">
          <div class="company-item">
            <img src="@/assets/images/about/contact01.jpg" alt="公司1" />
            <div class="company-item-text">
              <span>
                <span class="company-name">中山英诺莱比智能科技有限公司</span>
                <span class="company-address"
                  >中山市大涌镇恒惠丰工业园A1栋1-4层</span
                >
              </span>
            </div>
          </div>
          <div class="company-item">
            <img src="@/assets/images/about/contact01.jpg" alt="公司2" />
            <div class="company-item-text">
              <span>
                <span class="company-name">中山英诺莱比精密制造有限公司</span>
                <span class="company-address"
                  >中山市火炬开发区十涌路27号精制所一楼</span
                >
              </span>
            </div>
          </div>
          <div class="company-item">
            <img src="@/assets/images/about/contact01.jpg" alt="公司3" />
            <div class="company-item-text">
              <span>
                <span class="company-name"
                  >中山英诺莱比金属表面处理有限公司</span
                >
                <span class="company-address"
                  >中山市小榄镇泰业路68号北区社区高端环保产业园B幢4层03单元</span
                >
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-container-bom">
      <div class="footer-bottom">
          <span class="footer-bottom-text">
            ©2003-2025 RPWORLD ALL RIGHTS RESERVED <br>
            ISO 9001:2015 Certified
          </span>
        
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer {
  background-color: #eaeef1;
  padding: 20px 0 0 0;
}
.footer-container {
  width: 100%;
  margin: 0 auto;
  padding: 0 15px 20px 0;
}
.contact-us {
  padding: 20px 0 40px 10px;
}
.contact-us-title {
  font-size: 24px;
  font-weight: 600;
  font-family: "思源黑体", Arial, "Helvetica Neue", Helvetica, sans-serif;
}
.three-companies {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
}
.company-item {
  display: flex;
  align-items: flex-start;
  padding: 0 10px;
}
.company-item img {
  width: 32px;
  height: 32px;
  object-fit: cover;
  border-radius: 8px;
}
.company-item-text {
  padding-left: 15px;
  flex: 1;
  font-family: "思源正常体", Arial, "Helvetica Neue", Helvetica, sans-serif;
}
.company-name {
  font-size: 18px;
  font-weight: 600;
  display: block;
  margin-bottom: 10px;
  line-height: 1.4;
}
.company-address {
  font-size: 14px;
  color: #666;
  line-height: 1.5;
  display: inline-block;
  max-width: 100%;
  word-break: break-word;
}
.footer-container-bom {
  background-color: #2d2d2d;
  text-align: center;
}
.footer-bottom {
  padding: 0 0 0 0;
  color: #bdbdbd;
  margin: 0 auto;
}


.footer-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: #000;
  border-radius: 50%;
  transition: background 0.2s;
  color: #fff;
}
.footer-icon img {
  width: 18px;
  height: 18px;
  filter: none;
}
.footer-icon:hover {
  background: #333;
}
.footer-bottom-text {
  color: #bdbdbd;
  font-size: 14px;
  line-height: 1.5;
  font-family: "思源正常体", Arial, "Helvetica Neue", Helvetica, sans-serif;
}
/* 响应式布局 */
@media (min-width: 768px) {
  .footer-container,
  .footer-bottom {
    max-width: 750px;
  }
}

@media (min-width: 992px) {
  .footer-container,
  .footer-bottom {
    max-width: 970px;
  }
}

@media (min-width: 1200px) {
  .footer-container,
  .footer-bottom {
    max-width: 1170px;
  }
}

@media (max-width: 768px) {
  .footer {
    padding: 20px 0 0 0;
  }
  .footer-container {
    padding: 0 16px 10px 16px;
  }
  .footer-content {
    padding-bottom: 16px;
  }
  .contact-us-title {
    font-size: 24px;
    color: #000000;
    display: block;
  }
  .three-companies {
    flex-direction: column;
    gap: 12px;
  }
  .company-item {
    width: 100%;
    padding: 12px;
    margin-bottom: 8px;
    display: flex;
    align-items: flex-start;
  }
  .company-item img {
    width: 44px;
    height: 44px;
  }
  .company-item-text {
    padding-left: 12px;
  }
  .company-name {
    font-size: 15px;
    color: #000000;
    margin-bottom: 4px;
  }
  .company-address {
    font-size: 12px;
    color: #434343;
    width: auto;
    display: block;
    word-break: break-all;
  }
  .footer-container-bom {
    background: #2d2d2d;
    padding: 0 0 12px 0;
  }
  .footer-bottom {
    line-height: 30px;
  }
 
}

@media (max-width: 480px) {
  .footer-container {
    padding: 0 8px 8px 8px;
  }
  .company-item {
    padding: 8px;
  }
  .company-item img {
    width: 28px;
    height: 28px;
  }
  .company-name {
    font-size: 16px;
  }
  .company-address {
    font-size: 11px;
  }
  .footer-icon {
    width: 36px;
    height: 36px;
    font-size: 18px;
  }
  .footer-icon svg {
    width: 18px;
    height: 18px;
  }
}
</style>
