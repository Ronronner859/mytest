<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { mockSocietyCategories } from "@/mock/societyJobs.js";
import { debounce } from 'lodash-es';

const route = useRoute();
const router = useRouter()
const categoryName = route.query.category;

const searchKeyword = ref("");
const filterLocation = ref("");
const filterType = ref("");
const filterDept = ref("");
const filterCompany = ref("");
const activeCollapse = ref(['location', 'type', 'dept', 'company']);
const currentPage = ref(1);
const pageSize = 6;
const expandedJobs = ref(new Set());
const showSearchHistory = ref(false);
const showSearchSuggestions = ref(false);

// 搜索历史记录
const searchHistory = ref(JSON.parse(localStorage.getItem('searchHistory') || '[]'));

// 搜索建议
const searchSuggestions = computed(() => {
  if (!searchKeyword.value) return [];
  
  const keyword = searchKeyword.value.toLowerCase().trim();
  const suggestions = new Map(); // 使用Map来存储建议和其权重
  
  // 从职位数据中提取建议
  const jobsToSearch = category.value ? category.value.jobs : mockSocietyCategories.flatMap(c => c.jobs);
  
  jobsToSearch.forEach(job => {
    // 标题建议（最高权重）
    if (job.title.toLowerCase().includes(keyword)) {
      const weight = job.title.toLowerCase() === keyword ? 100 : 80;
      suggestions.set(job.title, Math.max(suggestions.get(job.title) || 0, weight));
    }
    
    // 部门建议
    if (Array.isArray(job.dept)) {
      job.dept.forEach(dept => {
        if (dept.toLowerCase().includes(keyword)) {
          const weight = dept.toLowerCase() === keyword ? 60 : 40;
          suggestions.set(dept, Math.max(suggestions.get(dept) || 0, weight));
        }
      });
    } else if (job.dept.toLowerCase().includes(keyword)) {
      const weight = job.dept.toLowerCase() === keyword ? 60 : 40;
      suggestions.set(job.dept, Math.max(suggestions.get(job.dept) || 0, weight));
    }
    
    // 公司建议
    if (job.company.toLowerCase().includes(keyword)) {
      const weight = job.company.toLowerCase() === keyword ? 50 : 30;
      suggestions.set(job.company, Math.max(suggestions.get(job.company) || 0, weight));
    }
    
    // 工作地点建议
    if (Array.isArray(job.location)) {
      job.location.forEach(loc => {
        if (loc.toLowerCase().includes(keyword)) {
          const weight = loc.toLowerCase() === keyword ? 40 : 20;
          suggestions.set(loc, Math.max(suggestions.get(loc) || 0, weight));
        }
      });
    } else if (job.location.toLowerCase().includes(keyword)) {
      const weight = job.location.toLowerCase() === keyword ? 40 : 20;
      suggestions.set(job.location, Math.max(suggestions.get(job.location) || 0, weight));
    }
    
    // 职位类型建议
    if (Array.isArray(job.type)) {
      job.type.forEach(type => {
        if (type.toLowerCase().includes(keyword)) {
          const weight = type.toLowerCase() === keyword ? 30 : 15;
          suggestions.set(type, Math.max(suggestions.get(type) || 0, weight));
        }
      });
    } else if (job.type.toLowerCase().includes(keyword)) {
      const weight = job.type.toLowerCase() === keyword ? 30 : 15;
      suggestions.set(job.type, Math.max(suggestions.get(job.type) || 0, weight));
    }
  });
  
  // 将Map转换为数组并排序
  return Array.from(suggestions.entries())
    .sort((a, b) => b[1] - a[1]) // 按权重降序排序
    .map(([text]) => text)
    .slice(0, 5); // 限制建议数量
});

// 添加搜索历史
const addToSearchHistory = (keyword) => {
  const history = searchHistory.value;
  // 移除重复项
  const index = history.indexOf(keyword);
  if (index > -1) {
    history.splice(index, 1);
  }
  // 添加到开头
  history.unshift(keyword);
  // 限制历史记录数量
  if (history.length > 10) {
    history.pop();
  }
  searchHistory.value = history;
  localStorage.setItem('searchHistory', JSON.stringify(history));
};

// 清除搜索历史
const clearSearchHistory = () => {
  searchHistory.value = [];
  localStorage.removeItem('searchHistory');
};

// 使用搜索建议
const useSuggestion = (suggestion) => {
  searchKeyword.value = suggestion;
  performSearch();
};

// 执行搜索
const performSearch = () => {
  if (searchKeyword.value.trim()) {
    addToSearchHistory(searchKeyword.value.trim());
    router.push({
      path: '/society/list',
      query: { 
        keyword: searchKeyword.value.trim(),
        t: Date.now()
      }
    });
    showSearchHistory.value = false;
    showSearchSuggestions.value = false;
  }
};

// 防抖处理搜索
const debouncedSearch = debounce(() => {
  showSearchSuggestions.value = true;
}, 300);

// 监听搜索关键词变化
watch(searchKeyword, (newValue) => {
  if (newValue) {
    debouncedSearch();
  } else {
    showSearchSuggestions.value = false;
  }
});

// 高亮文本
const highlightText = (text, keyword) => {
  if (!keyword) return text;
  const regex = new RegExp(`(${keyword})`, 'gi');
  return text.replace(regex, '<span class="highlight">$1</span>');
};

const category = computed(() => {
  return mockSocietyCategories.find((c) => c.name === categoryName);
});

const filteredJobs = computed(() => {
  const jobsToSearch = category.value ? category.value.jobs : mockSocietyCategories.flatMap(c => c.jobs);
  const keyword = searchKeyword.value.toLowerCase().trim();
  
  const scoredJobs = jobsToSearch.map(job => {
    let score = 0;
    let matches = false;
    let matchDetails = {
      title: false,
      dept: false
    };

    if (!keyword) {
      return { job, score: 0, matches: true, matchDetails };
    }

    // 标题匹配（最高权重）
    if (job.title.toLowerCase() === keyword) {
      score += 100;
      matches = true;
      matchDetails.title = true;
    } else if (job.title.toLowerCase().includes(keyword)) {
      score += 80;
      matches = true;
      matchDetails.title = true;
    }

    // 部门匹配
    if (Array.isArray(job.dept)) {
      if (job.dept.some(dept => dept.toLowerCase() === keyword)) {
        score += 60;
        matches = true;
        matchDetails.dept = true;
      } else if (job.dept.some(dept => dept.toLowerCase().includes(keyword))) {
        score += 40;
        matches = true;
        matchDetails.dept = true;
      }
    } else {
      if (job.dept.toLowerCase() === keyword) {
        score += 60;
        matches = true;
        matchDetails.dept = true;
      } else if (job.dept.toLowerCase().includes(keyword)) {
        score += 40;
        matches = true;
        matchDetails.dept = true;
      }
    }

    return { job, score, matches, matchDetails };
  });

  return scoredJobs
    .filter(({ matches }) => matches)
    .sort((a, b) => {
      // 1. 先按 long_recruitment 排序，true 的置顶
      if (a.job.long_recruitment && !b.job.long_recruitment) return -1;
      if (!a.job.long_recruitment && b.job.long_recruitment) return 1;
      // 2. 再按分数排序
      if (b.score !== a.score) {
        return b.score - a.score;
      }
      // 3. 分数相同时，优先显示完全匹配的
      const aExactMatch = Object.values(a.matchDetails).some(v => v);
      const bExactMatch = Object.values(b.matchDetails).some(v => v);
      if (aExactMatch && !bExactMatch) return -1;
      if (!aExactMatch && bExactMatch) return 1;
      // 4. 最后按日期排序
      return new Date(b.job.date) - new Date(a.job.date);
    })
    .map(({ job }) => job)
    .filter(job => {
      // 获取职位的地点数组
      const jobLocations = Array.isArray(job.location) ? job.location : [job.location];
      
      // 根据公司确定对应的地点
      let companyLocation = '';
      if (job.company === '英诺莱比智能科技') {
        companyLocation = '中山市大涌镇';
      } else if (job.company === '英诺莱比精密制造有限公司') {
        companyLocation = '中山市火炬开发区';
      }

      // 公司匹配逻辑
      const matchCompany = !filterCompany.value || job.company === filterCompany.value;
      
      // 如果选择了公司，只显示该公司对应地点的职位
      if (filterCompany.value) {
        if (job.company !== filterCompany.value) return false;
        // 检查地点是否匹配（支持部分匹配）
        const hasMatchingLocation = jobLocations.some(loc => 
          loc.includes(companyLocation) || companyLocation.includes(loc)
        );
        if (!hasMatchingLocation) return false;
      }

      // 地点匹配逻辑
      const matchLocation = !filterLocation.value || jobLocations.includes(filterLocation.value);
      
      const matchType = 
        !filterType.value || 
        (Array.isArray(job.type)
          ? job.type.includes(filterType.value)
          : job.type === filterType.value);
      const matchDept = 
        !filterDept.value || 
        (Array.isArray(job.dept)
          ? job.dept.includes(filterDept.value)
          : job.dept === filterDept.value);

      return matchLocation && matchType && matchDept && matchCompany;
    });
});

// 计算总页数
const totalPages = computed(() => {
  return Math.ceil(filteredJobs.value.length / pageSize);
});

// 计算当前页的职位
const currentPageJobs = computed(() => {
  const start = (currentPage.value - 1) * pageSize;
  const end = start + pageSize;
  return filteredJobs.value.slice(start, end);
});

const locationOptions = computed(() => {
  const set = new Set();
  category.value?.jobs.forEach((j) => {
    if (Array.isArray(j.location)) {
      j.location.forEach(loc => set.add(loc));
    } else {
      set.add(j.location);
    }
  });
  set.add('中山市小榄镇');
  return [
    { text: "全部", value: "" },
    ...Array.from(set).map((l) => ({ text: l, value: l })),
  ];
});
const typeOptions = computed(() => {
  const set = new Set();
  category.value?.jobs.forEach((j) => {
    if (Array.isArray(j.type)) {
      j.type.forEach(t => set.add(t));
    } else {
      set.add(j.type);
    }
  });
  set.add('实习');
  return [
    { text: "全部", value: "" },
    ...Array.from(set).map((l) => ({ text: l, value: l })),
  ];
});
const deptOptions = computed(() => {
  const set = new Set();
  category.value?.jobs.forEach((j) => {
    if (Array.isArray(j.dept)) {
      j.dept.forEach(d => set.add(d));
    } else {
      set.add(j.dept);
    }
  });
  set.add('人资行政类');
  set.add('财务类');
  return [
    { text: "全部", value: "" },
    ...Array.from(set).map((l) => ({ text: l, value: l })),
  ];
});
const companyOptions = computed(() => {
  const set = new Set();
  category.value?.jobs.forEach((j) => set.add(j.company));
  set.add('英诺莱比金属表面处理有限公司');
  return [
    { text: "全部", value: "" },
    ...Array.from(set).map((l) => ({ text: l, value: l })),
  ];
});
// 最新职位，取所有职位按日期排序后前8条
const latestJobs = computed(() => {
  if (!category.value) return [];
  const allJobs = mockSocietyCategories.flatMap((c) => c.jobs);
  return allJobs.sort((a, b) => (b.date > a.date ? 1 : -1)).slice(0, 8);
});

// 跳转到职位详情页
const goToJobDetail = (jobId) => {
  // 保存当前页码到 localStorage
  localStorage.setItem('lastJobListPage', currentPage.value.toString());
  router.push({
    name: 'SocietyJobDetail',
    params: { id: jobId }
  });
};

function collapseAfterSelect(name) {
  // 只关闭当前选中的选项
  activeCollapse.value = activeCollapse.value.filter(item => item !== name);
}
function clearFilters() {
  searchKeyword.value = '';
  filterLocation.value = '';
  filterType.value = '';
  filterDept.value = '';
  filterCompany.value = '';
}

// 处理页码变化
const handlePageChange = (page) => {
  currentPage.value = page;
};

// 添加切换展开/折叠的方法
const toggleJobExpand = (jobId, event) => {
  event.stopPropagation(); // 阻止事件冒泡，避免触发卡片的点击事件
  if (expandedJobs.value.has(jobId)) {
    expandedJobs.value.delete(jobId);
  } else {
    expandedJobs.value.add(jobId);
  }
};

// 监听路由参数变化
watch(
  () => route.query.keyword,
  (newKeyword) => {
    if (newKeyword) {
      searchKeyword.value = newKeyword;
    }
  },
  { immediate: true }  // 添加 immediate: true 确保组件挂载时就执行一次
);

// 添加滚动到顶部相关的响应式变量
const showScrollTop = ref(false);
const scrollThreshold = 300; // 显示按钮的滚动阈值

// 监听滚动事件
const handleScroll = () => {
  showScrollTop.value = window.scrollY > scrollThreshold;
};

// 滚动到顶部方法
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

// 组件挂载时添加滚动监听
onMounted(() => {
  // 从 localStorage 恢复上次的页码
  const savedPage = localStorage.getItem('lastJobListPage');
  if (savedPage) {
    currentPage.value = parseInt(savedPage);
  }
  
  // 添加滚动监听
  window.addEventListener('scroll', handleScroll);
});

// 组件卸载时移除滚动监听
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div class="main-layout">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <!-- 左侧筛选栏 -->
    <aside class="sidebar-left">
      <div class="filter-title-bar">
        <div class="filter-title-line"></div>
        <div class="filter-title">职位筛选</div>
        <span class="filter-clear" @click="clearFilters">清除</span>
      </div>
      <div class="search-container">
        <van-search
          v-model="searchKeyword"
          placeholder="搜索职位关键词"
          shape="round"
          background="#f7f8fa"
          class="job-search"
          @focus="showSearchHistory = true"
          @input="showSearchSuggestions = true"
          @blur="setTimeout(() => { showSearchHistory = false; showSearchSuggestions = false; }, 200)"
        >
          <template #right-icon>
            <van-icon name="search" @click="performSearch" />
          </template>
        </van-search>
        
        <!-- 搜索历史和建议 -->
        <div v-if="showSearchHistory || showSearchSuggestions" class="search-dropdown">
          <!-- 搜索历史 -->
          <div v-if="showSearchHistory && !searchKeyword && searchHistory.length > 0" class="search-history">
            <div class="search-history-header">
              <span>搜索历史</span>
              <van-icon name="delete-o" @click="clearSearchHistory" />
            </div>
            <div class="search-history-list">
              <div 
                v-for="(item, index) in searchHistory" 
                :key="index"
                class="history-item"
                @click="useSuggestion(item)"
              >
                <van-icon name="clock-o" />
                <span>{{ item }}</span>
              </div>
            </div>
          </div>
          
          <!-- 搜索建议 -->
          <div v-if="showSearchSuggestions && searchSuggestions.length > 0" class="search-suggestions">
            <div class="suggestion-item" 
              v-for="(suggestion, index) in searchSuggestions" 
              :key="index"
              @click="useSuggestion(suggestion)"
              v-html="highlightText(suggestion, searchKeyword)"
            ></div>
          </div>
        </div>
      </div>
      <van-collapse v-model="activeCollapse">
        <van-collapse-item title="工作地点" name="location">
          <van-radio-group v-model="filterLocation">
            <van-radio :name="''">全部</van-radio>
            <van-radio
              v-for="opt in locationOptions.slice(1)"
              :key="opt.value"
              :name="opt.value"
              >{{ opt.text }}</van-radio
            >
          </van-radio-group>
        </van-collapse-item>
        <van-collapse-item title="职位性质" name="type">
          <van-radio-group v-model="filterType">
            <van-radio :name="''">全部</van-radio>
            <van-radio
              v-for="opt in typeOptions.slice(1)"
              :key="opt.value"
              :name="opt.value"
              >{{ opt.text }}</van-radio
            >
          </van-radio-group>
        </van-collapse-item>
        <van-collapse-item title="所属类别" name="dept">
          <van-radio-group v-model="filterDept">
            <van-radio :name="''">全部</van-radio>
            <van-radio
              v-for="opt in deptOptions.slice(1)"
              :key="opt.value"
              :name="opt.value"
              >{{ opt.text }}</van-radio
            >
          </van-radio-group>
        </van-collapse-item>
        <!-- 所属公司 -->
        <van-collapse-item title="所属公司" name="company">
          <van-radio-group v-model="filterCompany">
            <van-radio :name="''">全部</van-radio>
            <van-radio
              v-for="opt in companyOptions.slice(1)"
              :key="opt.value"
              :name="opt.value"
            >{{ opt.text }}</van-radio>
          </van-radio-group>
        </van-collapse-item>
      </van-collapse>
    </aside>

    <!-- 中间职位列表 -->
    <main class="main-content">
      <span class="page-title">在招职位</span>
      <!-- 搜索框 -->
       <!-- 粘性布局 -->
      <div class="sticky-search">
        <van-search
        v-model="searchKeyword"
        shape="round"
        background="white"
        placeholder="请输入搜索关键词"
      />
      <!-- 筛选区域 横向下拉框：：工作地点、职位性质、所属类别-->
      <div class="filter-section">
        <van-dropdown-menu>
          <!-- 工作地点 -->
          <van-dropdown-item v-model="filterLocation" :options="locationOptions" title="工作地点"/>
          <!-- 职位性质 -->
          <van-dropdown-item v-model="filterType" :options="typeOptions" title="职位性质" />
          <!-- 所属部门 -->
          <van-dropdown-item v-model="filterDept" :options="deptOptions" title="所属类别" />
          <!-- 所属公司 -->
          <!-- <van-dropdown-item v-model="filterCompany" :options="companyOptions" /> -->
        </van-dropdown-menu>
      </div>
      </div>
      <!-- <div class="sub-title">{{ categoryName }}</div> -->
      <div v-if="filteredJobs.length">
        <div
          v-for="job in currentPageJobs"
          :key="job.id"
          class="job-card"
          @click="goToJobDetail(job.id)"
        >
          <div class="job-card-header">
            <div class="job-card-title-box">
              <span v-if="job.urgent" class="urgent-tag">急</span>
              <span class="job-title">{{ job.title }}</span>
              <span class="job-card-salary">
                <span class="salary">{{ job.salary }}</span>
              </span>
            </div>
          </div>
          <div class="job-card-info-row">
            <div class="info-left">
              <span class="job-info-item">{{ Array.isArray(job.dept) ? job.dept.join('、') : job.dept }}</span>
              <span class="job-info-divider">|</span>
              <span class="job-info-item">{{ Array.isArray(job.type) ? job.type.join('、') : job.type }}</span>
              <span class="job-info-divider">|</span>
              <span class="job-info-item">{{ Array.isArray(job.location) ? job.location.join('、') : job.location }}</span>
              <span class="job-info-divider">|</span>
              <span class="job-info-item job-date">发布于 {{ job.date }}</span>
            </div>
            <div class="info-right">
              <div class="tag-group">
                <van-tag 
                  v-if="job.long_recruitment" 
                  type="warning" 
                  plain 
                  class="job-tag"
                >
                  长期招聘
                </van-tag>
                <van-tag 
                  v-if="job.urgent" 
                  type="danger" 
                  plain 
                  class="job-tag"
                >
                  Urgent
                </van-tag>
              </div>
              <div class="job-icons">
                <van-icon name="share-o" class="action-icon" />
                <van-icon 
                  :name="expandedJobs.has(job.id) ? 'arrow-up' : 'arrow-down'" 
                  @click.stop="(e) => toggleJobExpand(job.id, e)"
                  class="expand-icon"
                />
              </div>
            </div>
          </div>
          <div class="job-card-desc" v-show="expandedJobs.has(job.id)">
            <span class="job-desc-label">职位职责：</span>
            <div class="job-desc-content">
              <div
                v-for="(item, index) in job.description"
                :key="index"
                class="desc-item"
              >
                {{ index + 1 }}. {{ item }}
              </div>
            </div>
          </div>
        </div>
        <!-- 添加分页组件 -->
        <div class="pagination-container">
          <van-pagination
            v-model="currentPage"
            :total-items="filteredJobs.length"
            :items-per-page="pageSize"
            :show-page-size="3"
            force-ellipses
            @change="handlePageChange"
          />
        </div>
      </div>
      <div v-else class="empty">暂无职位</div>
    </main>

    <!-- 右侧最新职位 -->
    <aside class="sidebar-right">
      <div class="filter-title-bar">
        <div class="filter-title-line"></div>
        <div class="filter-title">最新职位</div>
      </div>
      <ul class="latest-list">
        <li v-for="job in latestJobs" :key="job.id">{{ job.title }}</li>
      </ul>
    </aside>

    <!-- 添加返回顶部按钮 -->
    <transition name="fade">
      <div 
        v-show="showScrollTop" 
        class="scroll-top-btn"
        @click="scrollToTop"
      >
        <van-icon name="arrow-up" />
      </div>
    </transition>
  </div>
</template>


<style scoped lang="scss">
.sticky-search {
  display: none;
  position: sticky;
  top: 0;
  z-index: 100;
  background: #fff;
  padding: 12px 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.sticky-search .van-search {
  padding: 0;
  margin-bottom: 8px;
}

.sticky-search .van-dropdown-menu {
  height: 40px;
  background: transparent;
  box-shadow: none;
}

.sticky-search .van-dropdown-menu__bar {
  height: 40px;
  box-shadow: none;
  background: #f7f8fa;
  border-radius: 8px;
}

.sticky-search .van-dropdown-menu__item {
  justify-content: center;
}

.sticky-search .van-dropdown-menu__title {
  font-size: 13px;
  color: #333;
}

.page-title {
  display: block;
}
@media (max-width: 900px) {
  .sticky-search {
    display: block;
  }
  .page-title {
    display: none;
  }
}
.main-layout {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
  box-sizing: border-box;
  gap: 32px;
  font-family: '思源黑体', 'Source Han Sans CN', 'Arial', 'Helvetica Neue', 'Helvetica', sans-serif;
  color: #333;
  line-height: 1.6;
}
.sidebar-left,
.sidebar-right {
  width: 280px;
  background: #fff;
  border-radius: 20px;
  margin: 36px 0;
  padding: 32px 24px 28px 24px;
  box-shadow: 0 4px 20px 0 rgba(25, 118, 210, 0.06);
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: relative;
}
.sidebar-left::after,
.sidebar-right::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 8px;
  border-radius: 16px 16px 0 0;
  background: linear-gradient(90deg, #e3f1ff 0%, #f7f8fa 100%);
  opacity: 0.3;
}
.sidebar-left {
  border-right: 1.5px solid #f0f0f0;
}
.sidebar-right {
  border-left: 1.5px solid #f0f0f0;
}
.filter-title-bar {
  display: flex;
  align-items: center;
  margin-bottom: 18px;
  position: relative;
}
.filter-title-line {
  width: 4px;
  height: 22px;
  background: #1976d2;
  border-radius: 2px;
  margin-right: 10px;
}
.filter-title {
  font-size: 20px;
  font-weight: 600;
  color: #1a1a1a;
  letter-spacing: 0.5px;
}
.filter-clear {
  margin-left: auto;
  color: #999;
  font-size: 13px;
  cursor: pointer;
  transition: color 0.2s;
}
.filter-clear:hover {
  color: #1976d2;
}
:deep(.van-collapse-item__wrapper) {
  margin: 20px;
}
:deep(.van-collapse-item__title) {
  font-size: 16px;
  font-weight: 500;
  color: #333;
}
:deep(.van-collapse-item__content) {
  padding: 8px 0 0 0;
}
:deep(.van-radio-group) {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 4px;
}
:deep(.van-radio) {
  font-size: 15px;
  --van-radio-checked-icon-color: #1976d2;
}
.latest-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.latest-list li {
  font-size: 15px;
  color: #333;
  padding: 10px 14px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  background: #f7f8fa;
  line-height: 1.5;
}
.latest-list li:hover {
  background: #e3f1ff;
  color: #1976d2;
}
.main-content {
  flex: 1 1 0;
  min-width: 0;
  padding: 36px 0 36px 0;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
.page-title {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 24px;
  color: #000000;
  letter-spacing: 1px;
  border-radius: 16px;
  background: #fff;
  padding: 16px 20px;
  box-shadow: 0 2px 16px 0 rgba(25, 118, 210, 0.06);
}
.sub-title {
  text-align: left;
  font-size: 16px;
  color: #333;
  margin: 0 0 16px 8px;
  font-weight: 600;
}
.job-card:first-child {
  margin-top: 0;
}
.job-card {
  border-radius: 16px;
  box-shadow: 0 2px 16px 0 rgba(25, 118, 210, 0.06);
  background: #fff;
  font-size: 15px;
  padding: 24px 32px 20px 32px;
  margin: 24px 0 0 0;
  border: 1px solid #f0f0f0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0;
  cursor: pointer;
  
  &:hover {
    box-shadow: 0 8px 28px 0 rgba(25, 118, 210, 0.1);
    border-color: #1976d2;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 4px 20px 0 rgba(25, 118, 210, 0.08);
  }
}
.job-card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 4px;
}
.job-card-title-box {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
}
.urgent-tag {
  display: inline-flex;
  align-items: center;
  background: #fff2f0;
  color: #ff4d4f;
  font-size: 12px;
  font-weight: 600;
  border-radius: 4px;
  padding: 2px 8px;
  margin-right: 6px;
  flex-shrink: 0;
  border: 1px solid rgba(255, 77, 79, 0.2);
}
.job-title {
  font-size: 18px;
  font-weight: 600;
  color: #1a1a1a;
  line-height: 1.4;
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.job-card-salary {
  margin-left: 16px;
  flex-shrink: 0;
}
.salary {
  color: #1976d2;
  font-weight: 600;
  font-size: 17px;
  background: rgba(25, 118, 210, 0.08);
  padding: 4px 12px;
  border-radius: 6px;
}
.job-card-info-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #666;
  margin: 12px 0;
  gap: 16px;
}
.info-left {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  flex: 1;
  min-width: 0;
}
.info-right {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
}
.tag-group {
  display: flex;
  gap: 8px;
}
.job-info-item {
  color: #666;
  font-size: 14px;
  white-space: nowrap;
  transition: color 0.2s;
  
  &:hover {
    color: #1976d2;
  }
}
.job-info-divider {
  color: #e0e0e0;
  margin: 0 2px;
}
.job-date {
  color: #999;
}
.job-tag {
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 4px;
  margin: 0;
  transition: all 0.2s;
  
  &.van-tag--primary {
    color: #1976d2;
    background: rgba(25, 118, 210, 0.08);
    border-color: transparent;
    
    &:hover {
      background: rgba(25, 118, 210, 0.12);
    }
  }
  
  &.van-tag--danger {
    color: #ff4d4f;
    background: rgba(255, 77, 79, 0.08);
    border-color: transparent;
    
    &:hover {
      background: rgba(255, 77, 79, 0.12);
    }
  }
}
.job-icons {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #999;
  font-size: 18px;
  padding-left: 16px;
  border-left: 1px solid #f0f0f0;
}
.action-icon {
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    color: #1976d2;
    transform: scale(1.1);
  }
}
.expand-icon {
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    color: #1976d2;
    transform: scale(1.1);
  }
}
.job-card-desc {
  font-size: 14px;
  color: #666;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid #f5f5f5;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.job-desc-label {
  color: #999;
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 8px;
  display: block;
}
.job-desc-content {
  color: #666;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 4px;

  .desc-item {
    line-height: 1.6;
    white-space: normal;
    position: relative;
    padding-left: 4px;
    
    &::before {
      content: "";
      position: absolute;
      left: -4px;
      top: 8px;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: #1976d2;
      opacity: 0.6;
    }
  }
}
.empty {
  text-align: center;
  color: #aaa;
  margin-top: 40px;
  font-size: 16px;
}
.pagination-container {
  margin-top: 24px;
  display: flex;
  justify-content: center;
  padding: 16px 0;
}

:deep(.van-pagination) {
  --van-pagination-item-width: 36px;
  --van-pagination-item-height: 36px;
  --van-pagination-item-font-size: 14px;
  --van-pagination-item-active-color: #1976d2;
  --van-pagination-item-active-background: #e3f1ff;
}

@media (max-width: 900px) {
  .main-layout {
    gap: 0;
  }
  .sidebar-left,
  .sidebar-right {
    width: 200px;
    padding: 20px 16px 16px 16px;
  }
  .main-content {
    padding: 20px 0;
  }
  .job-card {
    padding: 16px 20px;
    border-radius: 16px;
    margin: 16px 0 0 0;
  }
  .job-title {
    font-size: 16px;
  }
  .salary {
    font-size: 16px;
  }
  .job-card-info-row {
    font-size: 13px;
  }
  .job-card-desc {
    font-size: 13px;
  }
  .job-card:first-child {
    margin-top: 15px;
  }
}
@media (max-width: 600px) {
  .main-layout {
    display: block;
    padding: 0;
    background: #fff;
  }
  .sidebar-left,
  .sidebar-right {
    display: none !important;
  }
  .main-content {
    padding: 0;
    background: #fff;
  }
  .page-title {
    font-size: 22px;
    margin: 20px 0;
    padding: 0 20px;
  }
  .job-card {
    padding: 20px;
    margin: 16px 20px;
    border-radius: 12px;
  }
  .job-card-header {
    margin-bottom: 8px;
  }
  .job-card-title-box {
    gap: 8px;
  }
  .urgent-tag {
    font-size: 13px;
    padding: 2px 8px;
  }
  .job-title {
    font-size: 16px;
  }
  .salary {
    font-size: 15px;
    padding: 3px 10px;
  }
  .job-card-info-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
  .info-left {
    width: 100%;
  }
  .info-right {
    width: 100%;
    justify-content: space-between;
  }
  .job-info-item {
    font-size: 13px;
  }
  .job-tag {
    font-size: 11px;
    padding: 1px 6px;
  }
  .job-icons {
    font-size: 16px;
    gap: 8px;
    padding-left: 12px;
  }
  .job-card-desc {
    margin-top: 12px;
    padding-top: 12px;
  }
  .job-desc-label {
    font-size: 13px;
  }
  .job-desc-content {
    gap: 6px;
    
    .desc-item {
      font-size: 13px;
      line-height: 1.5;
    }
  }
  .empty {
    font-size: 15px;
    margin: 40px 0;
    color: #999;
  }
  .pagination-container {
    margin-top: 16px;
    padding: 12px 0;
  }
  
  :deep(.van-pagination) {
    --van-pagination-item-width: 32px;
    --van-pagination-item-height: 32px;
    --van-pagination-item-font-size: 13px;
  }
}

.search-container {
  position: relative;
  margin-bottom: 16px;
}

.search-dropdown {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  max-height: 300px;
  overflow-y: auto;
  border: 1px solid #f0f0f0;
}

.search-history {
  padding: 12px;
  
  .search-history-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
    color: #666;
    font-size: 14px;
    
    .van-icon {
      cursor: pointer;
      padding: 4px;
      
      &:hover {
        color: #1976d2;
      }
    }
  }
  
  .search-history-list {
    .history-item {
      display: flex;
      align-items: center;
      padding: 8px 12px;
      cursor: pointer;
      border-radius: 4px;
      
      &:hover {
        background: #f5f5f5;
      }
      
      .van-icon {
        margin-right: 8px;
        color: #999;
      }
      
      span {
        color: #333;
        font-size: 14px;
      }
    }
  }
}

.search-suggestions {
  padding: 8px 0;
  
  .suggestion-item {
    padding: 8px 16px;
    cursor: pointer;
    font-size: 14px;
    color: #333;
    transition: all 0.2s ease;
    
    &:hover {
      background: #f5f5f5;
      color: #1976d2;
    }
    
    :deep(.highlight) {
      color: #1976d2;
      font-weight: 500;
    }
  }
}

// 修改职位卡片中的文本显示，添加高亮
.job-title {
  :deep(.highlight) {
    color: #1976d2;
    font-weight: 500;
  }
}

.job-info-item {
  :deep(.highlight) {
    color: #1976d2;
    font-weight: 500;
  }
}

// 添加返回顶部按钮样式
.scroll-top-btn {
  position: fixed;
  right: 24px;
  bottom: 24px;
  width: 40px;
  height: 40px;
  background: #1976d2;
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 12px rgba(25, 118, 210, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1000;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(25, 118, 210, 0.4);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  .van-icon {
    font-size: 20px;
  }
}

// 添加淡入淡出动画
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

// 移动端适配
@media (max-width: 600px) {
  .scroll-top-btn {
    right: 16px;
    bottom: 16px;
    width: 36px;
    height: 36px;
    
    .van-icon {
      font-size: 18px;
    }
  }
}
</style>
