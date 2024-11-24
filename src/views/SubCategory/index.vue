<script setup>
import { getSubCategoryFilterAPI, getSubCategoryAPI } from '@/apis/category';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import GoodsItem from '@/components/GoodsItem.vue';

const route = useRoute()
const subCategoryFilterList = ref([])
const getSubCategoryFilter = async (id) => {
  const res = await getSubCategoryFilterAPI(id)
  subCategoryFilterList.value = res.result
}
// 获取基础列表数据渲染
const goodList = ref([])
const reqData = ref({
  categoryId: route.params.id,
  page: 1,
  pageSize: 20,
  sortField: 'publishTime'
})

const getGoodList = async (data) => {
  const res = await getSubCategoryAPI(data)
  goodList.value = res.result.items
}

getGoodList(reqData.value)
getSubCategoryFilter(route.params.id)
function tabChange() {
  // 切换时发送网络请求
  console.log('切换了', reqData.value.sortField);
  reqData.value.page = 1
  getGoodList(reqData.value)
}
// 停止监听
const disable = ref(false)
// 无限滚动
async function load() {
  reqData.value.page++
  const res = await getSubCategoryAPI(reqData.value)
  console.log(res);
  // 和旧数据合并
  goodList.value = [...goodList.value, ...res.result.items]
  // 没有数据了就停止监听
  if (res.result.items.length === 0) {
    disable.value = true
  }
}
</script>

<template>
<div class="container ">
  <!-- 面包屑 -->
  <div class="bread-container">
    <el-breadcrumb separator=">">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: `/category/${subCategoryFilterList.parentId}` }">{{
        subCategoryFilterList.parentName }}
      </el-breadcrumb-item>
      <el-breadcrumb-item>{{ subCategoryFilterList.name }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
  <div class="sub-container">
    <el-tabs v-model="reqData.sortField" @tab-change="tabChange">
      <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
      <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
      <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
    </el-tabs>
    <div class="body" v-infinite-scroll="load" :infinite-scroll-disabled="disable">
      <!-- 商品列表-->
      <GoodsItem v-for="item in goodList" :key="item.id" :good="item" />
    </div>
  </div>
</div>
</template>



<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }


}
</style>