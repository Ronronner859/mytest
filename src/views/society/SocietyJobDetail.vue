<template>
  <div class="job-detail">
    <van-nav-bar
      title="职位详情"
      left-arrow
      @click-left="onClickLeft"
      class="custom-nav"
    />
    <div class="content" v-if="job">
      <div class="header">
        <div class="header-main">
          <h1 class="title">{{ job.title }}</h1>
          <div class="salary">{{ job.salary }}</div>
          <div class="tags">
            <van-tag plain type="primary">{{ Array.isArray(job.type) ? job.type.join('、') : job.type }}</van-tag>
            <van-tag plain type="success">{{ Array.isArray(job.location) ? job.location.join('、') : job.location }}</van-tag>
            <van-tag plain type="warning" v-if="job.urgent">急聘</van-tag>
          </div>
        </div>
        <div class="meta">
          <div class="meta-item">
            <van-icon name="cluster-o" />
            <span class="dept">{{ Array.isArray(job.dept) ? job.dept.join('、') : job.dept }}</span>
          </div>
          <div class="meta-item">
            <van-icon name="clock-o" />
            <span class="date">发布时间：{{ job.date }}</span>
          </div>
        </div>
      </div>

      <div class="section">
        <h2 class="section-title">
          <van-icon name="description" />
          <span>职位描述</span>
        </h2>
        <div class="section-content">
          <div v-for="(item, index) in job.description" :key="index" class="list-item">
            {{ index + 1 }}. {{ item }}
          </div>
        </div>
      </div>

      <div class="section">
        <h2 class="section-title">
          <van-icon name="guide-o" />
          <span>任职要求</span>
        </h2>
        <div class="section-content">
          <div v-for="(item, index) in job.requirement" :key="index" class="list-item">
            {{ index + 1 }}. {{ item }}
          </div>
        </div>
      </div>

      <div class="section">
        <h2 class="section-title">
          <van-icon name="send-gift-o" />
          <span>投递渠道</span>
        </h2>
        <div class="section-content">
          <div class="delivery-channels">
            <div class="channel-item" @click="onApply('email')">
              <div class="channel-icon">
                <van-icon name="envelop-o" size="24" />
              </div>
              <div class="channel-info">
                <div class="channel-title">邮箱投递</div>
                <div class="channel-desc">{{ emailAddress }}</div>
              </div>
              <van-icon name="arrow" class="channel-arrow" />
            </div>
            <div class="channel-item" @click="onApply('wechat')">
              <div class="channel-icon">
                <van-icon name="wechat" size="24" />
              </div>
              <div class="channel-info">
                <div class="channel-title">微信投递</div>
                <div class="channel-desc">扫码投递</div>
              </div>
              <van-icon name="arrow" class="channel-arrow" />
            </div>
            <div class="channel-item" @click="onApply('phone')">
              <div class="channel-icon">
                <van-icon name="phone-o" size="24" />
              </div>
              <div class="channel-info">
                <div class="channel-title">电话咨询</div>
                <div class="channel-desc">15728425507</div>
              </div>
              <van-icon name="arrow" class="channel-arrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="loading" v-else>
      <van-loading type="spinner" color="#1976d2" size="36px" />
      <span class="loading-text">加载中...</span>
    </div>

    <!-- 底部操作栏 -->
    <div class="action-bar" v-if="job">
      <van-button 
        type="primary" 
        block 
        @click="showApplyPopup = true"
        class="apply-btn"
      >
        立即投递
      </van-button>
    </div>

    <!-- 投递弹窗 -->
    <van-popup
      v-model:show="showApplyPopup"
      position="bottom"
      round
      :style="{ height: '70%' }"
      class="custom-popup"
    >
      <div class="apply-popup">
        <div class="popup-header">
          <h3>选择投递方式</h3>
          <van-icon name="cross" @click="showApplyPopup = false" />
        </div>
        <div class="popup-content">
          <div class="apply-option" @click="onApply('email')">
            <div class="option-icon">
              <van-icon name="envelop-o" size="24" />
            </div>
            <div class="option-info">
              <div class="option-title">邮箱投递</div>
              <div class="option-desc">{{ emailAddress }}</div>
            </div>
            <van-icon name="arrow" class="option-arrow" />
          </div>
          <div class="apply-option" @click="onApply('wechat')">
            <div class="option-icon">
              <van-icon name="wechat" size="24" />
            </div>
            <div class="option-info">
              <div class="option-title">微信投递</div>
              <div class="option-desc">扫码投递</div>
            </div>
            <van-icon name="arrow" class="option-arrow" />
          </div>
          <div class="apply-option" @click="onApply('phone')">
            <div class="option-icon">
              <van-icon name="phone-o" size="24" />
            </div>
            <div class="option-info">
              <div class="option-title">电话咨询</div>
              <div class="option-desc">15728425507</div>
            </div>
            <van-icon name="arrow" class="option-arrow" />
          </div>
        </div>
      </div>
    </van-popup>

    <!-- 邮箱投递弹窗 -->
    <van-popup
      v-model:show="showEmailPopup"
      position="bottom"
      round
      :style="{ height: 'auto' }"
    >
      <div class="email-popup">
        <div class="popup-header">
          <h3>邮箱投递</h3>
          <van-icon name="cross" @click="showEmailPopup = false" />
        </div>
        <div class="popup-content">
          <div class="email-address">
            <span class="label">投递邮箱：</span>
            <span class="value">{{ emailAddress }}</span>
            <van-button 
              size="small" 
              type="primary" 
              plain
              @click="copyToClipboard(emailAddress)"
            >
              复制
            </van-button>
          </div>
          <div class="email-actions">
            <van-button 
              block 
              type="primary" 
              @click="sendEmail"
            >
              发送邮件
            </van-button>
          </div>
        </div>
      </div>
    </van-popup>

    <!-- 微信投递弹窗 -->
    <van-popup
      v-model:show="showWechatPopup"
      position="bottom"
      round
      :style="{ height: 'auto' }"
    >
      <div class="wechat-popup">
        <div class="popup-header">
          <h3>微信投递</h3>
          <van-icon name="cross" @click="showWechatPopup = false" />
        </div>
        <div class="popup-content">
          <div class="qrcode-container">
            <div class="qrcode-wrapper" >
              <img 
                src="@/assets/images/code.png" 
                alt="微信二维码" 
                class="qrcode-image"
                @load="onQRCodeLoaded"
                @error="onQRCodeError"
                @contextmenu.prevent="showQRCodeActions"
              />
              <div class="qrcode-tip">请使用微信扫描二维码</div>
              <div class="qrcode-longpress-tip">长按可保存二维码</div>
            </div>
            
          </div>
          <div class="qrcode-actions">
            <van-button 
              block 
              type="primary" 
              @click="saveQRCode"
              :loading="isSaving"
            >
              保存二维码
            </van-button>
          </div>
        </div>
      </div>
    </van-popup>

    <!-- 二维码操作菜单 -->
    <van-action-sheet
      v-model:show="showQRCodeActionSheet"
      :actions="qrCodeActions"
      cancel-text="取消"
      @select="onQRCodeActionSelect"
    />

    <!-- 电话咨询弹窗 -->
    <van-popup
      v-model:show="showPhonePopup"
      position="bottom"
      round
      :style="{ height: 'auto' }"
    >
      <div class="phone-popup">
        <div class="popup-header">
          <h3>电话咨询</h3>
          <van-icon name="cross" @click="showPhonePopup = false" />
        </div>
        <div class="popup-content">
          <div class="phone-number">
            <span class="label">咨询电话：</span>
            <span class="value">{{ phoneNumber }}</span>
            <van-button 
              size="small" 
              type="primary" 
              plain
              @click="copyToClipboard(phoneNumber)"
            >
              复制
            </van-button>
          </div>
          <div class="phone-actions">
            <van-button 
              block 
              type="primary" 
              @click="makePhoneCall"
            >
              立即拨打
            </van-button>
          </div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { mockSocietyCategories } from '../../mock/societyJobs';
// import { showNotify, showDialog, showShareSheet } from 'vant';

const router = useRouter();
const route = useRoute();
const job = ref(null);
const isFavorite = ref(false);
const showApplyPopup = ref(false);
const showEmailPopup = ref(false);
const showWechatPopup = ref(false);
const showPhonePopup = ref(false);
const isQRCodeLoading = ref(true);
const isSaving = ref(false);
const showQRCodeActionSheet = ref(false);

const emailAddress = 'zshr@innorapid.cn';
const qrCodeUrl = ref('/images/code.png');
const phoneNumber = '15728425507';

const qrCodeActions = [
  { name: '保存到相册', color: '#1976d2' },
  { name: '分享二维码', color: '#1976d2' },
];

const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    showNotify({ 
      type: 'success',
      message: '复制成功',
      duration: 2000,
    });
  } catch (err) {
    showNotify({ 
      type: 'danger',
      message: '复制失败，请手动复制',
      duration: 2000,
    });
  }
};

const sendEmail = () => {
  const mailtoLink = `mailto:${emailAddress}`;
  window.location.href = mailtoLink;
  showEmailPopup.value = false;
};

const onQRCodeLoaded = () => {
  isQRCodeLoading.value = false;
  console.log('QR code loaded successfully');
};

const onQRCodeError = (error) => {
  console.error('QR code loading error:', error);
  isQRCodeLoading.value = false;
  showNotify({
    type: 'danger',
    message: '二维码加载失败，请重试',
    duration: 2000,
  });
};

const showQRCodeActions = () => {
  showQRCodeActionSheet.value = true;
};

const onQRCodeActionSelect = (action) => {
  if (action.name === '保存到相册') {
    saveQRCode();
  } else if (action.name === '分享二维码') {
    shareQRCode();
  }
};

const saveQRCode = async () => {
  try {
    isSaving.value = true;
    
    // 获取图片元素
    const imgElement = document.querySelector('.qrcode-image');
    if (!imgElement) {
      throw new Error('二维码图片未找到');
    }

    // 检查图片是否已加载
    if (!imgElement.complete) {
      throw new Error('二维码图片未加载完成');
    }

    // 检查是否为移动设备
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile) {
      // 移动端处理方式
      if (navigator.share) {
        // 如果支持原生分享
        try {
          const response = await fetch(imgElement.src);
          const blob = await response.blob();
          const file = new File([blob], 'RPWorld-Campus-Recruitment-QR-Code.jpg', { type: 'image/jpeg' });
          
          await navigator.share({
            files: [file],
            title: 'RPWorld社会招聘二维码',
            text: '扫描二维码投递简历'
          });
          
          showNotify({
            type: 'success',
            message: '二维码已分享',
            duration: 2000,
          });
        } catch (error) {
          // 如果分享失败，则打开新窗口
          window.open(imgElement.src, '_blank');
        }
      } else {
        // 如果不支持原生分享，则打开新窗口
        window.open(imgElement.src, '_blank');
      }
    } else {
      // 桌面端处理方式
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = imgElement.naturalWidth;
      canvas.height = imgElement.naturalHeight;
      
      ctx.drawImage(imgElement, 0, 0);
      
      const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/jpeg', 0.95));
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'RPWorld-Social-Recruitment-QR-Code.jpg';
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      URL.revokeObjectURL(url);
      
      showNotify({
        type: 'success',
        message: '二维码已保存',
        duration: 2000,
      });
    }
  } catch (error) {
    console.error('保存二维码失败:', error);
    showNotify({
      type: 'danger',
      message: error.message || '保存失败，请重试',
      duration: 2000,
    });
  } finally {
    isSaving.value = false;
  }
};

const shareQRCode = () => {
  showShareSheet({
    options: [
      { name: '微信', icon: 'wechat' },
      { name: '朋友圈', icon: 'wechat-moments' },
      { name: '复制链接', icon: 'link' },
      { name: '分享海报', icon: 'poster' },
    ],
    title: '分享二维码',
    description: '分享职位投递二维码',
  });
};

const makePhoneCall = () => {
  showDialog({
    title: '拨打电话',
    message: `是否拨打咨询电话 ${phoneNumber}？`,
    showCancelButton: true,
    confirmButtonText: '拨打',
    cancelButtonText: '取消',
  }).then(() => {
    window.location.href = `tel:${phoneNumber.replace(/-/g, '')}`;
    showNotify({ 
      type: 'success',
      message: '正在拨打电话...',
      duration: 2000,
    });
  }).catch(() => {
    showNotify({ 
      type: 'primary',
      message: '已取消拨打',
      duration: 2000,
    });
  });
  
  showPhonePopup.value = false;
};

onMounted(() => {
  // 从所有分类中查找职位
  for (const category of mockSocietyCategories) {
    const foundJob = category.jobs.find(j => j.id === route.params.id);
    if (foundJob) {
      job.value = foundJob;
      break;
    }
  }

  if (!job.value) {
    showNotify({ 
      type: 'danger',
      message: '职位不存在',
      duration: 2000,
    });
    router.push('/');
  }

  // 滚动到页面顶部
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

const onClickLeft = () => {
  router.back();
};

const toggleFavorite = () => {
  isFavorite.value = !isFavorite.value;
  // 字体红色 背景黑色
  showNotify({
    message: isFavorite.value ? '收藏成功' : '已取消收藏',
    color: 'red', // 字体红色
    background: 'black', // 背景黑色
    type: 'danger',
  });

};

const onApply = (type) => {
  showApplyPopup.value = false;
  switch (type) {
    case 'email':
      showEmailPopup.value = true;
      break;
    case 'wechat':
      isQRCodeLoading.value = true;
      showWechatPopup.value = true;
      break;
    case 'phone':
      showPhonePopup.value = true;
      break;
  }
};
</script>

<style lang="scss" scoped>
.job-detail {
  min-height: 100vh;
  background-color: #f7f8fa;
}

.custom-nav {
  background: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  
  :deep(.van-nav-bar__title) {
    font-size: 20px;
    color: #000000;
    font-family: '思源黑体',Arial, "Helvetica Neue", Helvetica, sans-serif;
  }
  
  :deep(.van-icon) {
    color: #333;
    font-size: 20px;
  }
}

.content {
  padding: 16px;
  padding-bottom: 80px;
}

.header {
  background-color: #fff;
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 16px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  .header-main {
    margin-bottom: 24px;

    .title {
      font-size: 24px;
      font-weight: 600;
      margin: 0 0 20px;
      line-height: 1.4;
      color: #000000;
      letter-spacing: -0.02em;
      font-family: '思源黑体',Arial, "Helvetica Neue", Helvetica, sans-serif;
    }

    .salary {
      font-size: 26px;
      color: #1976d2;
      font-weight: 600;
      font-family: '思源黑体',Arial, "Helvetica Neue", Helvetica, sans-serif;
      background: rgba(25, 118, 210, 0.08);
      padding: 10px 20px;
      border-radius: 10px;
      display: inline-block;
      margin-bottom: 24px;
      transition: all 0.3s ease;

      &:hover {
        background: rgba(25, 118, 210, 0.12);
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(25, 118, 210, 0.15);
      }
    }
  }

  .tags {
    margin-bottom: 24px;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;

    .van-tag {
      margin: 0;
      padding: 8px 16px;
      font-size: 14px;
      border-radius: 8px;
      font-weight: 500;
      transition: all 0.3s ease;
      font-family: '思源黑体',Arial, "Helvetica Neue", Helvetica, sans-serif;

      &--primary {
        color: #1976d2;
        background: rgba(25, 118, 210, 0.08);
        border-color: transparent;
        
        &:hover {
          background: rgba(25, 118, 210, 0.12);
        }
      }
      
      &--success {
        color: #2e7d32;
        background: rgba(46, 125, 50, 0.08);
        border-color: transparent;
        
        &:hover {
          background: rgba(46, 125, 50, 0.12);
        }
      }
      
      &--warning {
        color: #ed6c02;
        background: rgba(237, 108, 2, 0.08);
        border-color: transparent;
        
        &:hover {
          background: rgba(237, 108, 2, 0.12);
        }
      }
    }
  }

  .meta {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding-top: 20px;
    border-top: 1px solid rgba(0, 0, 0, 0.06);

    .meta-item {
      display: flex;
      align-items: center;
      gap: 8px;
      color: #666;
      font-size: 14px;
      transition: color 0.3s ease;
      font-family: '思源正常体',Arial, "Helvetica Neue", Helvetica, sans-serif;

      &:hover {
        color: #1976d2;
      }

      .van-icon {
        color: #1976d2;
        font-size: 18px;
        transition: transform 0.3s ease;
      }

      &:hover .van-icon {
        transform: scale(1.1);
      }
    }
  }
}

.section {
  background-color: #fff;
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 16px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  .section-title {
    font-size: 17px;
    font-weight: 600;
    margin: 0 0 20px;
    color: #1a1a1a;
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: '思源黑体',Arial, "Helvetica Neue", Helvetica, sans-serif;

    .van-icon {
      color: #1976d2;
      font-size: 20px;
    }
  }

  .section-content {
    font-size: 15px;
    line-height: 1.6;
    color: #333;
    font-family: '思源正常体',Arial, "Helvetica Neue", Helvetica, sans-serif;

    .list-item {
      margin-bottom: 16px;
      padding-left: 12px;
      position: relative;
      
      &::before {
        content: '';
        position: absolute;
        left: -4px;
        top: 10px;
        width: 6px;
        height: 6px;
        background: #1976d2;
        border-radius: 50%;
        opacity: 0.6;
      }
      
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}

.delivery-channels {
  display: flex;
  flex-direction: column;
  gap: 16px;
  
  .channel-item {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 20px;
    background: #f7f8fa;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    
    &:hover {
      background: #e3f1ff;
      transform: translateY(-2px);
    }
    
    &:active {
      transform: translateY(0);
    }
    
    .channel-icon {
      width: 48px;
      height: 48px;
      background: rgba(25, 118, 210, 0.08);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      
      .van-icon {
        color: #1976d2;
      }
    }
    
    .channel-info {
      flex: 1;
      min-width: 0;
    }
    
    .channel-title {
      font-size: 15px;
      font-weight: 500;
      color: #333;
      margin-bottom: 4px;
    }
    
    .channel-desc {
      color: #666;
      font-size: 13px;
    }

    .channel-arrow {
      color: #999;
      font-size: 16px;
      transition: transform 0.3s;
    }
    
    &:hover .channel-arrow {
      transform: translateX(4px);
    }
  }
}

.loading {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #fff;
  gap: 12px;
  
  .loading-text {
    color: #666;
    font-size: 14px;
  }
}

.action-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 12px 16px;
  background-color: #fff;
  box-shadow: 0 -2px 12px rgba(0, 0, 0, 0.06);
  z-index: 100;
  
  .apply-btn {
    height: 48px;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 500;
    background: #1976d2;
    border-color: #1976d2;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    
    &:active {
      transform: scale(0.98);
      background: rgb(from #1976d2 r g b / 95%);
    }
  }
}

.custom-popup {
  :deep(.van-popup) {
    border-radius: 20px 20px 0 0;
  }
}

.apply-popup {
  .popup-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid #f5f5f5;
    
    h3 {
      margin: 0;
      font-size: 18px;
      font-weight: 600;
      color: #1a1a1a;
    }
    
    .van-icon {
      font-size: 20px;
      color: #999;
      cursor: pointer;
      transition: color 0.2s;
      
      &:hover {
        color: #666;
      }
    }
  }
  
  .popup-content {
    padding: 20px;
    
    .apply-option {
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 20px;
      background: #f7f8fa;
      border-radius: 12px;
      margin-bottom: 16px;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      
      &:hover {
        background: #e3f1ff;
        transform: translateY(-2px);
      }
      
      &:active {
        transform: translateY(0);
      }
      
      .option-icon {
        width: 48px;
        height: 48px;
        background: rgba(25, 118, 210, 0.08);
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        
        .van-icon {
          color: #1976d2;
        }
      }
      
      .option-info {
        flex: 1;
        min-width: 0;
      }
      
      .option-title {
        font-size: 15px;
        font-weight: 500;
        color: #333;
        margin-bottom: 4px;
      }
      
      .option-desc {
        color: #666;
        font-size: 13px;
      }
      
      .option-arrow {
        color: #999;
        font-size: 16px;
        transition: transform 0.3s;
      }
      
      &:hover .option-arrow {
        transform: translateX(4px);
      }
    }
  }
}

.email-popup {
  .popup-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    border-bottom: 1px solid #f5f5f5;
    
    h3 {
      margin: 0;
      font-size: 16px;
      font-weight: 600;
      color: #333;
    }
    
    .van-icon {
      font-size: 20px;
      color: #999;
      cursor: pointer;
    }
  }
  
  .popup-content {
    padding: 20px 16px;
    
    .email-address {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 20px;
      padding: 12px;
      background: #f7f8fa;
      border-radius: 8px;
      
      .label {
        color: #666;
        font-size: 14px;
      }
      
      .value {
        flex: 1;
        color: #333;
        font-size: 14px;
        font-weight: 500;
      }
      
      .van-button {
        flex-shrink: 0;
      }
    }
    
    .email-actions {
      .van-button {
        height: 44px;
        font-size: 15px;
        font-weight: 500;
      }
    }
  }
}

.wechat-popup {
  .popup-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    border-bottom: 1px solid #f5f5f5;
    
    h3 {
      margin: 0;
      font-size: 16px;
      font-weight: 600;
      color: #333;
    }
    
    .van-icon {
      font-size: 20px;
      color: #999;
      cursor: pointer;
    }
  }
  
  .popup-content {
    padding: 20px 16px;
    
    .qrcode-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 20px;
      
      .qrcode-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
      }
      
      .qrcode-image {
        width: 200px;
        height: 200px;
        margin-bottom: 12px;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        user-select: none;
        -webkit-user-select: none;
        object-fit: contain;
      }
      
      .qrcode-tip {
        color: #666;
        font-size: 14px;
        margin-bottom: 4px;
      }

      .qrcode-longpress-tip {
        color: #999;
        font-size: 12px;
      }
      
      .qrcode-loading {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        padding: 40px 0;
        
        span {
          color: #666;
          font-size: 14px;
        }
      }
    }
    
    .qrcode-actions {
      display: flex;
      flex-direction: column;
      gap: 12px;
      
      .van-button {
        height: 44px;
        font-size: 15px;
        font-weight: 500;
      }
    }
  }
}

.phone-popup {
  .popup-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    border-bottom: 1px solid #f5f5f5;
    
    h3 {
      margin: 0;
      font-size: 16px;
      font-weight: 600;
      color: #333;
    }
    
    .van-icon {
      font-size: 20px;
      color: #999;
      cursor: pointer;
    }
  }
  
  .popup-content {
    padding: 20px 16px;
    
    .phone-number {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 20px;
      padding: 12px;
      background: #f7f8fa;
      border-radius: 8px;
      
      .label {
        color: #666;
        font-size: 14px;
      }
      
      .value {
        flex: 1;
        color: #333;
        font-size: 14px;
        font-weight: 500;
      }
      
      .van-button {
        flex-shrink: 0;
      }
    }
    
    .phone-actions {
      .van-button {
        height: 44px;
        font-size: 15px;
        font-weight: 500;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .content {
    padding: 12px;
    // padding-bottom: 80px;
  }
  
  .header {
    padding: 20px;
    margin-bottom: 12px;
    
    .header-main {
      margin-bottom: 20px;

      .title {
        font-size: 20px;
        margin-bottom: 16px;
        letter-spacing: -0.01em;
      }

      .salary {
        font-size: 22px;
        padding: 8px 16px;
        margin-bottom: 20px;
        border-radius: 8px;
      }
    }
    
    .tags {
      margin-bottom: 20px;
      gap: 8px;

      .van-tag {
        padding: 6px 12px;
        font-size: 13px;
        border-radius: 6px;
      }
    }
    
    .meta {
      gap: 16px;
      padding-top: 16px;

      .meta-item {
        font-size: 13px;

        .van-icon {
          font-size: 16px;
        }
      }
    }
  }
  
  .section {
    padding: 20px;
    margin-bottom: 12px;
    
    .section-title {
      font-size: 16px;
      margin-bottom: 16px;
    }
    
    .section-content {
      font-size: 14px;
      
      .list-item {
        margin-bottom: 12px;
      }
    }
  }
  
  .delivery-channels {
    gap: 12px;
    
    .channel-item {
      padding: 16px;
      
      .channel-icon {
        width: 40px;
        height: 40px;
      }
      
      .channel-title {
        font-size: 14px;
      }
      
      .channel-desc {
        font-size: 12px;
      }
    }
  }
  
  .action-bar {
    padding: 10px 12px;
    
    .apply-btn {
      height: 44px;
      font-size: 15px;
    }
  }
  
  .apply-popup {
    .popup-header {
      padding: 16px;
      
      h3 {
        font-size: 16px;
      }
    }
    
    .popup-content {
      padding: 16px;
      
      .apply-option {
        padding: 16px;
        margin-bottom: 12px;
        
        .option-icon {
          width: 40px;
          height: 40px;
        }
        
        .option-title {
          font-size: 14px;
        }
        
        .option-desc {
          font-size: 12px;
        }
      }
    }
  }
}
</style>
  
  
