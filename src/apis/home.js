import httpInstance from "@/utils/http";

// 主页轮播图
export function getBannerAPI(param = {}) {
  // 默认为 1
  const { distributionSite = '1' } = param
  return httpInstance({
    url: 'home/banner',
    params: {
      distributionSite
    }
  })
}

// 获取新鲜好物
export function getNewAPI() {
  return httpInstance({
    url: 'home/new'
  })
}

// 获取人气推荐
export function getHotAPI() {
  return httpInstance({
    url: 'home/hot'
  })
}

// 获取商品
export function getGoodsAPI() {
  return httpInstance({
    url: 'home/goods'
  })
}