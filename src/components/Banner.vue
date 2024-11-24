<template>
<div :class="[customClass || homeBanner]">
  <el-carousel height="500px">
    <el-carousel-item v-for="item in bannerList" :key="item.id">
      <img :src="item.imgUrl" alt="">
    </el-carousel-item>
  </el-carousel>
</div>
</template>

<script setup>
import { getBannerAPI } from '@/apis/home';
import { onMounted, ref } from 'vue';

const props = defineProps({
  param: {
    type: Object,
    default: {}
  },
  customClass: {
    type: String,
    default: ''
  }
})
const bannerList = ref([])
const getBanner = async (param) => {
  const res = await getBannerAPI(param)
  // console.log(res.result);
  bannerList.value = res.result
}

getBanner(props.param)

const homeBanner = 'home-banner'
</script>

<style scoped lang='scss'>
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;

  img {
    width: 100%;
    height: 500px;
  }
}

.banner {
  width: 1240px;
  height: 500px;
  margin: 0 auto;
  left: 0;
  top: 0;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>