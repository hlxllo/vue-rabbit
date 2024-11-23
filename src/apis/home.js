import httpInstance from "@/utils/http";

// 主页轮播图
export function getBannerAPI() {
  return httpInstance({
    url: 'home/banner'
  })
}