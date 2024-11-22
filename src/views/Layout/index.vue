<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFix from './components/LayoutFix.vue';
import { onMounted } from 'vue';
// 触发获取导航列表的 action
import { useCategoryStore } from '@/stores/category';
const category = useCategoryStore()
// 在组件挂载时调用
onMounted(() => {
  category.getCategory()
})
</script>

<template>
<LayoutFix />
<LayoutNav />
<LayoutHeader />
<RouterView />
<LayoutFooter />
</template>