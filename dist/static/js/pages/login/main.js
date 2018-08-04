global.webpackJsonp([10],{

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": function($event) {}
    }
  }, [_c('button', {
    attrs: {
      "open-type": "getUserInfo",
      "lang": "zh_CN",
      "bindgetuserinfo": "onGotUserInfo"
    }
  }, [_vm._v("微信登录")]), _vm._v(" "), _c('button', {
    attrs: {
      "open-type": "contact"
    }
  }, [_vm._v("进入客服会话")]), _vm._v(" "), _c('vfooter', {
    attrs: {
      "mpcomid": '0'
    }
  })], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7278ae42", esExports)
  }
}

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7278ae42_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(123);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(98)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7278ae42_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\login\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7278ae42", Component.options)
  } else {
    hotAPI.reload("data-v-7278ae42", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(20);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_card__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_footer__ = __webpack_require__(2);

//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    vfooter: __WEBPACK_IMPORTED_MODULE_2__pages_footer__["a" /* default */],
    card: __WEBPACK_IMPORTED_MODULE_1__components_card__["a" /* default */]
  },
  data: function data() {
    return {
      userInfo: wx.getStorageSync('userInfo'),
      systemInfo: {},
      networkType: '',
      userLocation: wx.getStorageSync('userLocation')
    };
  },


  methods: {
    bindViewTap: function bindViewTap() {
      var url = '../logs/main';
      wx.navigateTo({ url: url });
    },
    getUserInfo: function getUserInfo() {
      // 调用登录接口
      wx.login({
        success: function success(res) {
          console.log('login====', wx.getStorageSync('userInfo'));
          if (res.code) {
            wx.request({
              url: wx.getStorageSync('requestUrl') + '/small/user/login',
              method: 'POST',
              data: {
                code: res.code,
                longitude: wx.getStorageSync('userLocation').longitude,
                latitude: wx.getStorageSync('userLocation').latitude,
                phone_network: wx.getStorageSync('networkType'),
                phone_brand: wx.getStorageSync('systemInfo').brand,
                phone_model: wx.getStorageSync('systemInfo').model,
                userInfo: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(wx.getStorageSync('userInfo'))
              },
              header: {
                'content-type': 'application/json'
              },
              success: function success(res) {
                console.log(res.data);
              }
            });
          }
        }
      });
      var flag = false;
      if (flag) {
        wx.reLaunch({
          url: '/pages/home/main'
        });
      }
    },
    clickHandle: function clickHandle(msg, ev) {
      console.log('clickHandle:', msg, ev);
    }
  },
  onGotUserInfo: function onGotUserInfo(e) {
    console.log(e.detail.errMsg);
    console.log(e.detail.userInfo);
    console.log(e.detail.rawData);

    wx.switchTab({
      url: '/pages/home/main'
    });
  },
  created: function created() {
    // 获取系统信息
    wx.getSetting({
      success: function success(res) {
        console.log(res.authSetting);
      }
    });
  }
});

/***/ }),

/***/ 98:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[42]);
//# sourceMappingURL=main.js.map