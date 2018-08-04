global.webpackJsonp([7],{

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "bh-profile-page"
  }, [_c('div', {
    staticClass: "profile-page-main"
  }, [_c('div', {
    staticClass: "userinfo",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": function($event) {}
    }
  }, [_c('div', {
    staticClass: "userinfo-avatar"
  }, [(_vm.userInfo.avatarUrl) ? _c('image', {
    staticClass: "img",
    attrs: {
      "src": _vm.userInfo.avatarUrl,
      "background-size": "cover"
    }
  }) : _vm._e()]), _vm._v(" "), (!_vm.isLogin) ? _c('div', [_c('button', {
    attrs: {
      "open-type": "getUserInfo",
      "lang": "zh_CN",
      "bindgetuserinfo": "onGotUserInfo"
    }
  }, [_vm._v("微信登录")])], 1) : _c('div', [_c('div', {
    staticClass: "userinfo-cont"
  }, [_c('div', {
    staticClass: "text-name"
  }, [_vm._v(_vm._s(_vm.userInfo.nickName))]), _vm._v(" "), _c('div', [_vm._v("公益时长：" + _vm._s(_vm.servicetime) + "小时")])])]), _vm._v(" "), _c('div', {
    staticClass: "userinfo-volunt"
  }, [_c('i', {
    staticClass: "icon-dot"
  }), _vm._v("加入志愿者")], 1)]), _vm._v(" "), _c('div', {
    staticClass: "post-panel"
  }, [_c('div', {
    staticClass: "post-panel__hd"
  }, [_c('h3', {
    staticClass: "post-panel__title"
  }, [_vm._v("登记信息")])], 1), _vm._v(" "), _c('div', {
    staticClass: "post-panel__bd"
  }, [_c('div', {
    staticClass: "kind-list"
  }, _vm._l((_vm.items), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "kind-item",
      attrs: {
        "eventid": '1-' + index
      },
      on: {
        "click": _vm.onPostClick
      }
    }, [_c('div', {
      staticClass: "kind-item__pic"
    }, [(_vm.userInfo.avatarUrl) ? _c('img', {
      staticClass: "img",
      attrs: {
        "src": item.src,
        "background-size": "cover"
      }
    }) : _vm._e()]), _vm._v(" "), _c('div', {
      staticClass: "kind-item__cont"
    }, [_c('div', [_vm._v(_vm._s(item.name))])])])
  }))])]), _vm._v(" "), _c('div', {
    staticClass: "notice-card"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "notice-card__cont"
  }, [_c('p', [_vm._v("第2388例 | 二十一年苦寻，夺子之痛难愈")]), _vm._v(" "), _c('p', [_vm._v("寻找曾华起")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "notice-card"
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "notice-card__cont"
  }, [_c('p', [_vm._v("第2397例 | 残纸寄乡愁")]), _vm._v(" "), _c('p', [_vm._v("高杉回家")])], 1)])]), _vm._v(" "), _c('img', {
    staticClass: "btn-post",
    attrs: {
      "src": "/images/addition_fill.png",
      "eventid": '2'
    },
    on: {
      "click": _vm.onPostClick
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "profile-page-footer"
  }, [_c('vfooter', {
    attrs: {
      "mpcomid": '0'
    }
  })], 1)])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "notice-card__pic"
  }, [_c('img', {
    staticClass: "img",
    attrs: {
      "src": "/static/images/mini-logo/1.png",
      "alt": ""
    }
  })])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "notice-card__pic"
  }, [_c('img', {
    staticClass: "img",
    attrs: {
      "src": "/static/images/mini-logo/2.png",
      "alt": "http://http://bbs2.baobeihuijia.com"
    }
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4adfb102", esExports)
  }
}

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4adfb102_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(114);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(89)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4adfb102"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4adfb102_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\profile\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4adfb102", Component.options)
  } else {
    hotAPI.reload("data-v-4adfb102", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(23);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_card__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_footer__ = __webpack_require__(2);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    vfooter: __WEBPACK_IMPORTED_MODULE_1__pages_footer__["a" /* default */],
    card: __WEBPACK_IMPORTED_MODULE_0__components_card__["a" /* default */]
  },
  data: function data() {
    return {
      isLogin: true,
      servicetime: 10,
      userInfo: wx.getStorageSync('userInfo'),
      items: [{
        name: '家寻宝贝',
        src: '/static/images/mini-logo/1.png'
      }, {
        name: '宝贝寻家',
        src: '/static/images/mini-logo/2.png'
      }, {
        name: '救助寻亲',
        src: '/static/images/mini-logo/3.png'
      }, {
        name: '流浪乞讨',
        src: '/static/images/mini-logo/4.png'
      }, {
        name: '即时寻人',
        src: '/static/images/mini-logo/5.png'
      }, {
        name: '其他寻人',
        src: '/static/images/mini-logo/6.png'
      }]
    };
  },

  onShareAppMessage: function onShareAppMessage() {
    return {
      title: '公益项目',
      desc: '10岁丢失宝贝',
      path: '/pages/profile/main?from=forward'
    };
  },
  methods: {
    bindViewTap: function bindViewTap() {
      var url = '../logs/main';
      wx.navigateTo({ url: url });
    },
    onPostClick: function onPostClick() {
      wx.navigateTo({
        url: '/pages/publish/main'
      });
    },
    clickHandle: function clickHandle(msg, ev) {
      console.log('clickHandle:', msg, ev);
    }
  },

  created: function created() {
    // 调用应用实例的方法获取全局数据
  }
});

/***/ }),

/***/ 89:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[45]);
//# sourceMappingURL=main.js.map