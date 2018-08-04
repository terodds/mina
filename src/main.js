import Vue from 'vue'
import App from './App'

import 'mpvue-weui/static/weui/weui.css'

// import { Swiper, Slide } from 'vue-swiper-component'

// import VueRouter from 'vue-router'
// var router = new VueRouter()

Vue.config.productionTip = false

App.mpType = 'app'

// const app = new Vue(App, router)
const app = new Vue(App)

app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [
      '^pages/topic/main',
      'pages/logs/main',
      'pages/publish/main',
      'pages/home/main',
      'pages/profile/main'
    ],
    window: {
      enablePullDownRefresh: true,
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '宝贝回家',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#000',
      selectedColor: '#56abe4',
      backgroundColor: '#fff',
      borderStyle: '#f5f5f5',
      list: [ {
        pagePath: 'pages/home/main',
        text: '首页',
        iconPath: '/static/images/home.png',
        selectedIconPath: '/static/images/home_active.png'
      },
      {
        pagePath: 'pages/topic/main',
        text: '助力',
        iconPath: '/static/images/reading.png',
        selectedIconPath: '/static/images/reading_active.png'
      },
      {
        pagePath: 'pages/profile/main',
        text: '我的',
        iconPath: '/static/images/user.png',
        selectedIconPath: '/static/images/user_active.png'
      }]
    }
  },
  components: { App }
}
