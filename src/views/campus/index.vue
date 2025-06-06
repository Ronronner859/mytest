<template>
  <div class="society-recruitment">
    <h1 class="page-title">热门岗位</h1>
    <div class="category-list">
      <div
        v-for="category in categories"
        :key="category.name"
        class="category-card"
        @click="onCategoryClick(category.name)"
      >
        <div class="category-title">{{ category.name }}</div>
        <div class="category-right">
          <span class="job-count">共 {{ category.jobs.length }} 个职位</span>
          <span class="arrow-btn">
            <svg width="18" height="18" viewBox="0 0 18 18"><path d="M7 5l4 4-4 4" stroke="#1976d2" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { mockCampusCategories } from '@/mock/campusJobs.js';

const categories = ref(mockCampusCategories);
const router = useRouter();

function onCategoryClick(categoryName) {
  router.push({
    path: '/campus-recruitment/campus/list',
    query: { category: categoryName },
  });
}
</script>

<style scoped lang="scss">
.campus-recruitment-container {
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
}
:root {
  --main-blue: #1976d2;
  --main-bg: #f4f6fa;
  --card-bg: #fff;
  --card-radius: 16px;
  --card-shadow: 0 4px 16px 0 rgba(25, 118, 210, 0.06);
  --divider: #e5e6eb;
  --text-main: #222;
  --text-sub: #888;
  --urgent-bg: #ffeaea;
  --urgent-color: #e53935;
}

.society-recruitment {
  padding: 32px 0 48px 0;
  max-width: 1200px !important;
  margin: 0 auto;
  background: var(--main-bg);
  min-height: 80vh;
  box-sizing: border-box;
}
.page-title {
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  font-family: '思源黑体',Arial, "Helvetica Neue", Helvetica, sans-serif;
  margin-bottom: 32px;
  color: var(--main-blue);
  letter-spacing: 2px;
}
.category-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px 32px;
}
.category-card {
  background: var(--card-bg);
  border-radius: var(--card-radius);
  box-shadow: 0 4px 18px 0 rgba(25, 118, 210, 0.13);
  padding: 28px 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: box-shadow 0.18s, transform 0.18s, background 0.18s;
  border: 1px solid var(--divider);
  width: 400px;
  margin: 0;
  &:hover, &:active {
    box-shadow: 0 12px 36px 0 rgba(25, 118, 210, 0.18);
    transform: translateY(-2px) scale(1.01);
    border: 1.5px solid var(--main-blue);
    background: #f4f8ff;
    .arrow-btn {
      background: #e3f1ff;
    }
    .arrow-btn svg path {
      stroke: #1251a3;
    }
  }
}
.category-title {
  font-size: 22px;
  font-weight: 700;
  font-family: '思源黑体',Arial, "Helvetica Neue", Helvetica, sans-serif;
  color: var(--main-blue);
}
.category-right {
  display: flex;
  align-items: center;
  gap: 18px;
}
.job-count {
  color: var(--text-sub);
  font-size: 17px;
  font-weight: 400;
  font-family: '思源黑体',Arial, "Helvetica Neue", Helvetica, sans-serif;
}
.arrow-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #f0f4fa;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
  transition: background 0.18s;
}
.arrow-btn svg {
  display: block;
}
.arrow-btn svg path {
  transition: stroke 0.18s;
}

// PC端自适应优化
@media (min-width: 900px) {
  .society-recruitment {
    max-width: 1000px;
    padding: 20px 0 80px 0;
  }
  .page-title {
    font-size: 36px;
    margin-bottom: 40px;
    font-family: '思源黑体',Arial, "Helvetica Neue", Helvetica, sans-serif;
  }
  .category-card {
    padding: 32px 56px;
  }
  .category-title {
    font-size: 24px;
  }
  .job-count {
    font-size: 18px;
  }
  .arrow-btn {
    width: 44px;
    height: 44px;
  }
}

@media (max-width: 600px) {
  .society-recruitment {
    max-width: 100%;
    width: 100%;
    padding: 20px 16px 32px;
    box-sizing: border-box;
    overflow-x: hidden;
  }
  .page-title {
    font-size: 32px;
    margin-bottom: 24px;
    font-family: '思源黑体',Arial, "Helvetica Neue", Helvetica, sans-serif;
    letter-spacing: 1px;
  }
  .category-list {
    flex-direction: column;
    gap: 16px;
    align-items: stretch;
    padding: 0;
    width: 100%;
  }
  .category-card {
    min-width: unset;
    width: 100%;
    border-radius: 12px;
    padding: 20px 16px;
    box-shadow: 0 2px 8px 0 rgba(25, 118, 210, 0.08);
    margin: 0;
    height: auto;
    min-height: 80px;
    box-sizing: border-box;
    height: 120px;
    &:hover, &:active {
      transform: translateY(-1px) scale(1.005);
    }
  }
  .category-title {
    font-size: 18px;
    font-weight: 600;
  }
  .category-right {
    gap: 12px;
  }
  .job-count {
    font-size: 14px;
  }
  .arrow-btn {
    width: 32px;
    height: 32px;
    margin-left: 4px;
  }
  .arrow-btn svg {
    width: 16px;
    height: 16px;
  }
}

/* 添加平板设备的响应式布局 */
@media (min-width: 601px) and (max-width: 899px) {
  .society-recruitment {
    max-width: 100%;
    padding: 40px 24px 60px;
  }
  .page-title {
    font-size: 28px;
    margin-bottom: 32px;
    font-family: '思源黑体',Arial, "Helvetica Neue", Helvetica, sans-serif;
  }
  .category-list {
    gap: 24px;
  }
  .category-card {
    width: calc(50% - 24px);
    padding: 24px 28px;
  }
}
</style>
