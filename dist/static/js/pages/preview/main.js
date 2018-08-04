global.webpackJsonp([8],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page"
  }, [_c('div', {
    staticClass: "page__hd"
  }), _vm._v(" "), _c('div', {
    staticClass: "page__bd"
  }, [_c('div', {
    staticClass: "weui-article"
  }, [_c('div', {
    staticClass: "weui-article__h1"
  }, [_vm._v(_vm._s(_vm.article.title))]), _vm._v(" "), _c('div', {
    staticClass: "weui-article__section"
  }, [_c('div', {
    staticClass: "weui-article__p"
  }, [_c('image', {
    staticClass: "weui-article__img",
    staticStyle: {
      "height": "180px"
    },
    attrs: {
      "src": _vm.article.imageFiles,
      "mode": "aspectFit"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "bh-article-row"
  }, [_c('div', {
    staticClass: "bh-article-group"
  }, [_c('span', {
    staticClass: "bh-article-group__label"
  }, [_vm._v("姓　　名")]), _vm._v(" "), _c('p', {
    staticClass: "bh-article-group__cont"
  }, [_vm._v(_vm._s(_vm.article.nickName || '--'))])], 1), _vm._v(" "), _c('div', {
    staticClass: "bh-article-group"
  }, [_c('span', {
    staticClass: "bh-article-group__label"
  }, [_vm._v("性别")]), _vm._v(" "), (_vm.article.gender === 1) ? _c('div', [_c('p', {
    staticClass: "bh-article-group__cont"
  }, [_vm._v("男")])], 1) : (_vm.article.gender === 2) ? _c('div', [_c('p', {
    staticClass: "bh-article-group__cont"
  }, [_vm._v("女")])], 1) : _c('div', [_c('p', {
    staticClass: "bh-article-group__cont"
  }, [_vm._v("未知")])], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "bh-article-group"
  }, [_c('span', {
    staticClass: "bh-article-group__label"
  }, [_vm._v("出生日期")]), _vm._v(" "), _c('p', {
    staticClass: "bh-article-group__cont"
  }, [_vm._v(_vm._s(_vm.article.birthedAt || '--'))])], 1), _vm._v(" "), _c('div', {
    staticClass: "bh-article-group"
  }, [_c('span', {
    staticClass: "bh-article-group__label"
  }, [_vm._v("失踪时间")]), _vm._v(" "), _c('p', {
    staticClass: "bh-article-group__cont"
  }, [_vm._v(_vm._s(_vm.article.missedAt || '--'))])], 1), _vm._v(" "), _c('div', {
    staticClass: "bh-article-group"
  }, [_c('span', {
    staticClass: "bh-article-group__label"
  }, [_vm._v("失踪地点")]), _vm._v(" "), _c('p', {
    staticClass: "bh-article-group__cont"
  }, [_vm._v(_vm._s(_vm.article.province) + _vm._s(_vm.article.city) + "-" + _vm._s(_vm.article.address))])], 1), _vm._v(" "), _c('div', {
    staticClass: "bh-article-group"
  }, [_c('span', {
    staticClass: "bh-article-group__label"
  }, [_vm._v("特征描述")]), _vm._v(" "), _c('p', {
    staticClass: "bh-article-group__cont"
  }, [_vm._v(_vm._s(_vm.article.characters || '--'))])], 1), _vm._v(" "), _c('div', {
    staticClass: "bh-article-group"
  }, [_c('span', {
    staticClass: "bh-article-group__label"
  }, [_vm._v("发布详情")]), _vm._v(" "), _c('p', {
    staticClass: "bh-article-group__cont"
  }, [_vm._v(_vm._s(_vm.article.details || '--'))])], 1)])])]), _vm._v(" "), _c('checkbox-group', {
    attrs: {
      "eventid": '0',
      "mpcomid": '0'
    },
    on: {
      "click": _vm.bindAgreeChange
    }
  }, [_c('label', {
    staticClass: "weui-agree",
    attrs: {
      "for": "weuiAgree"
    }
  }, [_c('div', {
    staticClass: "weui-agree__text"
  }, [_c('checkbox', {
    staticClass: "weui-agree__checkbox",
    attrs: {
      "id": "weuiAgree",
      "value": "agree",
      "checked": "isAgree"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "weui-agree__checkbox-icon"
  }, [(_vm.isAgree) ? _c('icon', {
    staticClass: "weui-agree__checkbox-icon-check",
    attrs: {
      "type": "success_no_circle",
      "size": "9"
    }
  }) : _vm._e()], 1), _vm._v("\n            阅读并同意\n            "), _c('navigator', {
    staticClass: "weui-agree__link",
    attrs: {
      "url": "/pages/licence/main"
    }
  }, [_vm._v("《相关条款》")])], 1)])], 1), _vm._v(" "), _c('div', {
    staticClass: "weui-btn-area"
  }, [_c('button', {
    staticClass: "weui-btn",
    attrs: {
      "type": "primary",
      "eventid": '1'
    },
    on: {
      "click": _vm.publish
    }
  }, [_vm._v("保存至草稿箱")]), _vm._v(" "), _c('button', {
    staticClass: "weui-btn",
    attrs: {
      "type": "primary",
      "eventid": '2'
    },
    on: {
      "click": _vm.publish
    }
  }, [_vm._v("发布")])], 1), _vm._v(" "), _c('vfooter', {
    attrs: {
      "mpcomid": '1'
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
     require("vue-hot-reload-api").rerender("data-v-28633061", esExports)
  }
}

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_28633061_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(110);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(84)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-28633061"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_28633061_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\preview\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-28633061", Component.options)
  } else {
    hotAPI.reload("data-v-28633061", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(22);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
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
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    vfooter: __WEBPACK_IMPORTED_MODULE_1__pages_footer__["a" /* default */]
  },
  onLoad: function onLoad(option) {
    console.log('preview===onload==:', option.data);
    console.log('preview===onload==:', option.files);
    var article = JSON.parse(option.data);
    this.article = JSON.parse(option.data);
    this.article.title = article.title;
    this.article.content = article.content;
    this.files = option.files;
  },
  data: function data() {
    return {
      article: {},
      files: [],
      showTopTips: false,
      time: '09:01',
      date: '2015-09-01',

      isAgree: false
    };
  },

  methods: {
    bindAgreeChange: function bindAgreeChange(e) {
      this.isAgree = !this.isAgree;
    },
    publish: function publish() {
      var vm = this;
      wx.request({
        url: wx.getStorageSync('requestUrl') + '/small/article',
        method: 'POST',
        data: {
          article: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(vm.article)
        },
        header: {
          'content-type': 'application/json'
        },
        success: function success(res) {
          console.log(res.data);
          console.log('vm====', vm.files);
          if (res.data.uuid !== '') {
            vm.uploaderImage(res.data.uuid, vm.files);
          }
          vm.items = res.data;
          wx.showToast({
            title: '发布成功',
            icon: 'success',
            duration: 1500,
            mask: true,
            complete: function complete() {}
          });
        },
        complete: function complete() {
          /*
          wx.switchTab({
            url: '/pages/profile/main'
          })
          */
        }
      });
    },
    uploaderImage: function uploaderImage(uuid, files) {
      console.log('files:', files);
      console.log('uploaderImage in preview===', uuid, files);
    }
  }
});

/***/ }),

/***/ 84:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[44]);
//# sourceMappingURL=main.js.map