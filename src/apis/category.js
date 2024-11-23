import httpInstance from "@/utils/http";

// 获取分类信息
export function getCategoryAPI(id) {
  return httpInstance({
    url: '/category',
    params: {
      id
    }
  })
}