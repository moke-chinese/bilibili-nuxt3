<script setup lang="ts">
//SEO优化
useSeoMeta({
  //网站标题
  title: '哔哩哔哩 (゜-゜)つロ 干杯~-bilibili',
  //网站描述
  description:
  'bilibili是国内知名的在线视频弹幕网站，拥有最棒的ACG氛围，哔哩哔哩内容丰富多元，涵盖动漫、电影、二次元舞蹈视频、在线音乐、娱乐时尚、科技生活、鬼畜视频等。下载客户端还可离线下载电影、动漫。',
  //搜索关键字
  keywords: 'B站,bilibili,哔哩哔哩,哔哩哔哩动画,动漫,电影,在线动漫,高清电影',
})

//解决图片无法加载问题
useHead({
meta: [
{
name: 'referrer',
content: 'no-referrer'
}
]
})


</script>

<template>
  <!-- Nuxt 页面路由，相当于 RouterView -->
  <NuxtPage />
</template>

<style lang="scss">
// 基础样式
@import './assets/styles/base.scss';
// 字体图标
@import './assets/styles/iconfont.scss';
:root {
  /* CSS 变量设置组件库主题 C */
  --van-primary-color: #fb7299 !important;
}
</style>
