global.webpackJsonp([19],{

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(52);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(85)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2e4c19bc", Component.options)
  } else {
    hotAPI.reload("data-v-2e4c19bc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mpvue_weui_static_weui_weui_css__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mpvue_weui_static_weui_weui_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mpvue_weui_static_weui_weui_css__);





// import { Swiper, Slide } from 'vue-swiper-component'

// import VueRouter from 'vue-router'
// var router = new VueRouter()

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;

__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */].mpType = 'app';

// const app = new Vue(App, router)
var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */]);

app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['^pages/topic/main', 'pages/logs/main', 'pages/publish/main', 'pages/home/main', 'pages/profile/main'],
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
      list: [{
        pagePath: 'pages/home/main',
        text: '首页',
        iconPath: '/static/images/home.png',
        selectedIconPath: '/static/images/home_active.png'
      }, {
        pagePath: 'pages/topic/main',
        text: '助力',
        iconPath: '/static/images/reading.png',
        selectedIconPath: '/static/images/reading_active.png'
      }, {
        pagePath: 'pages/profile/main',
        text: '我的',
        iconPath: '/static/images/user.png',
        selectedIconPath: '/static/images/user_active.png'
      }]
    }
  },
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */] }
});

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);

//

/* harmony default export */ __webpack_exports__["a"] = ({
  created: function created() {
    var _this = this;

    var env = 'trial';
    wx.setStorageSync('env', env);

    if (wx.getStorageSync('env') === 'prod') {
      wx.setStorageSync('requestUrl', 'https://bbs.baobeihuijia.com/lastest/wechatapi');
    } else if (wx.getStorageSync('env') === 'trial') {
      wx.setNavigationBarTitle({
        title: '宝贝回家-体验版'
      });
      wx.setStorageSync('requestUrl', 'https://apiwechat.srehub.com/lastest/wechatapi');
    } else {
      wx.setStorageSync('requestUrl', 'https://apiwechat.srehub.com/lastest/wechatapi');
    }

    // 填写自己的鉴权服务器地址
    var wecosSignatureUrl = wx.getStorageSync('requestUrl') + '/qcloud/wecos/auth';

    wx.setStorageSync('wecosSignatureUrl', wecosSignatureUrl);

    // 调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    wx.setStorageSync('logs', logs);

    // 用户信息
    wx.getUserInfo({
      success: function success(res) {
        try {
          wx.setStorageSync('userInfo', res.userInfo);
        } catch (e) {
          console.log('setUserInfo failed App.vue');
        }
        _this.userInfo = res.userInfo;
        console.log('getUserInfo', res.userInfo);
      }
    });

    var loginInfo = {};
    // 用户网络类型
    wx.getNetworkType({
      success: function success(res) {
        try {
          loginInfo['networkType'] = res.networkType;
          wx.setStorageSync('networkType', res.networkType);
        } catch (e) {
          console.log('getNetworkType failed App.vue');
        }
      }
    });

    // 获取系统信息
    wx.getSystemInfo({
      success: function success(res) {
        try {
          loginInfo['platform'] = res.platform;
          loginInfo['brand'] = res.brand;
          loginInfo['pmodel'] = res.model;
          wx.setStorageSync('systemInfo', res);
        } catch (e) {
          console.log('getSystemInfo failed App.vue');
        }
      }
    });

    // 获取用户经纬度
    wx.getLocation({
      type: 'wgs84',
      success: function success(res) {
        try {
          loginInfo['longitude'] = res.longitude;
          loginInfo['latitude'] = res.latitude;
          wx.setStorageSync('userLocation', res);
        } catch (e) {
          console.log('getSystemInfo failed App.vue');
        }
      }
    });

    wx.request({
      url: wx.getStorageSync('requestUrl') + '/small/config',
      method: 'GET',
      data: {},
      header: {
        'content-type': 'application/json'
      },
      success: function success(res) {
        console.log('get config: ', res.data.WeCosUrl);
        wx.setStorageSync('wecosUrl', res.data.WeCosUrl);
      }
    });

    console.log('app created, env:', wx.getStorageSync('env'));
    console.log('cache logs by setStorageSync');

    wx.login({
      success: function success(res) {
        if (res.code) {
          wx.request({
            url: wx.getStorageSync('requestUrl') + '/small/user/login',
            method: 'POST',
            data: {
              code: res.code,
              loginInfo: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(loginInfo),
              userInfo: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(wx.getStorageSync('userInfo'))
            },
            header: {
              'content-type': 'application/json'
            },
            success: function success(res) {
              var obj = JSON.parse(res.data);
              console.log('wechat login: ', obj);
              loginInfo['openid'] = obj.openid;
              loginInfo['unionid'] = obj.unionid;
              console.log('-----', loginInfo);
              wx.setStorageSync('loginInfo', loginInfo);
              console.log('loginInfo add openid', wx.getStorageSync('loginInfo'));
            }
          });
        }
      }
    });
  }
});

/***/ }),

/***/ 85:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[29]);
//# sourceMappingURL=app.js.map