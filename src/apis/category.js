import httpInstance from "@/utils/http";

// 获取一级分类信息
export function getCategoryAPI(id) {
  return httpInstance({
    url: '/category',
    params: {
      id
    }
  })
}

// 获取二级分类过滤信息
export function getSubCategoryFilterAPI(id) {
  return httpInstance({
    url: '/category/sub/filter',
    params: {
      id
    }
  })
}

// 获取二级分类信息
export function getSubCategoryAPI(data) {
  return httpInstance({
    url: '/category/goods/temporary',
    method: 'POST',
    data
  })
}