global.webpackJsonp([21],{

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "page__bd"
  }, [_c('div', {
    staticClass: "weui-cells weui-cells_after-title"
  }, [_c('div', {
    staticClass: "weui-cell weui-cell_input"
  }, [_c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('textarea', {
    staticClass: "weui-textarea",
    attrs: {
      "placeholder": "写下你的留言",
      "eventid": '0'
    },
    on: {
      "change": _vm.contentInput
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "weui-btn-area"
  }, [_c('button', {
    staticClass: "weui-btn",
    attrs: {
      "type": "primary",
      "eventid": '1'
    },
    on: {
      "click": _vm.addComment
    }
  }, [_vm._v("留言")])], 1)])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page__hd"
  }, [_c('div', {
    staticClass: "page__title"
  }, [_vm._v("留言")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-aa95575e", esExports)
  }
}

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_footer__ = __webpack_require__(3);
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
    vfooter: __WEBPACK_IMPORTED_MODULE_0__pages_footer__["a" /* default */]
  },
  data: function data() {
    return {
      uuid: '',
      comment: {
        Nickname: '',
        Content: ''
      }
    };
  },

  onLoad: function onLoad(option) {
    // console.log('comment=====:', option.uuid)
    this.uuid = option.uuid;
  },
  methods: {
    contentInput: function contentInput(e) {
      this.comment.Content = e.mp.detail.value;
    },
    bindFormSubmit: function bindFormSubmit(e) {
      console.log(e.detail.value.textarea);
    },
    addComment: function addComment() {
      var vm = this;
      console.log('comments====', vm.comment.Content);
      wx.request({
        url: 'https://www.srehub.com/lastest/wechat/small/comment',
        method: 'POST',
        data: {
          UUID: vm.uuid,
          AvatarUrl: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTK476rqoy0zicVAxv1fJ9v9EaltE42WibKS7btmicQBkbwBFkeB6XVSFHF4CGmFlB5OaPeVft7WJcn9w/0',
          Nickname: '阿正_Dean',
          Content: vm.comment.Content
        },
        header: {
          'content-type': 'application/json'
        },
        success: function success(res) {
          console.log(res.data);
          vm.items = res.data;
        }
      });
      wx.showToast({
        title: '发布成功',
        icon: 'success',
        duration: 2000,
        mask: true,
        complete: function complete() {
          wx.navigateBack({
            url: '/pages/airticle/main'
          });
        }
      });
    }
  }
});

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(9);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_aa95575e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(120);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(96)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-aa95575e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_aa95575e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\comments\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-aa95575e", Component.options)
  } else {
    hotAPI.reload("data-v-aa95575e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 96:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[30]);
//# sourceMappingURL=main.js.map