global.webpackJsonp([18],{

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_60bbf80f_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(120);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(95)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-60bbf80f"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_60bbf80f_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\article\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-60bbf80f", Component.options)
  } else {
    hotAPI.reload("data-v-60bbf80f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page  bh-article-page"
  }, [_c('div', {
    staticClass: "page__bd"
  }, [_c('div', {
    staticClass: "weui-article"
  }, [_c('div', {
    staticClass: "weui-article__h1"
  }, [_vm._v(_vm._s(_vm.article.Babyid) + "-" + _vm._s(_vm.article.Nickname) + "-" + _vm._s(_vm.gender))]), _vm._v(" "), _c('div', {
    staticClass: "weui-article__section"
  }, [_c('div', {
    staticClass: "weui-article__p"
  }, [_c('image', {
    staticClass: "weui-article__img",
    staticStyle: {
      "height": "180px"
    },
    attrs: {
      "src": _vm.article.AvatarUrl,
      "mode": "aspectFit"
    }
  })]), _vm._v(" "), _c('button', {
    attrs: {
      "open-type": "contact",
      "session-from": "weixin-baobeihuijia"
    }
  }, [_vm._v("进入客服会话")]), _vm._v(" "), _c('div', {
    staticClass: "bh-article-group"
  }, [_c('span', {
    staticClass: "bh-article-group__label"
  }, [_vm._v("姓　　名")]), _vm._v(" "), _c('p', {
    staticClass: "bh-article-group__cont"
  }, [_vm._v(_vm._s(_vm.article.Nickname || '--'))])], 1), _vm._v(" "), _c('div', {
    staticClass: "bh-article-row"
  }, [_c('div', {
    staticClass: "bh-article-group"
  }, [_c('span', {
    staticClass: "bh-article-group__label"
  }, [_vm._v("年　　龄")]), _vm._v(" "), _c('p', {
    staticClass: "bh-article-group__cont"
  }, [_vm._v(_vm._s(_vm.article.BirthedAt || '--') + " ")])], 1), _vm._v(" "), _c('div', {
    staticClass: "bh-article-group"
  }, [_c('span', {
    staticClass: "bh-article-group__label"
  }, [_vm._v("性别")]), _vm._v(" "), _c('p', {
    staticClass: "bh-article-group__cont"
  }, [_vm._v(_vm._s(_vm.gender || '--'))])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "bh-article-group"
  }, [_c('span', {
    staticClass: "bh-article-group__label"
  }, [_vm._v("失踪时间")]), _vm._v(" "), _c('p', {
    staticClass: "bh-article-group__cont"
  }, [_vm._v(_vm._s(_vm.article.MissedAt || '--'))])], 1), _vm._v(" "), _c('div', {
    staticClass: "bh-article-group"
  }, [_c('span', {
    staticClass: "bh-article-group__label"
  }, [_vm._v("失踪地点")]), _vm._v(" "), _c('p', {
    staticClass: "bh-article-group__cont"
  }, [_vm._v(_vm._s(_vm.article.MissedProvince) + _vm._s(_vm.article.MissedCity) + "-" + _vm._s(_vm.article.MissedAddress))])], 1), _vm._v(" "), _c('div', {
    staticClass: "bh-article-group"
  }, [_c('span', {
    staticClass: "bh-article-group__label"
  }, [_vm._v("特征描述")]), _vm._v(" "), _c('p', {
    staticClass: "bh-article-group__cont"
  }, [_vm._v(_vm._s(_vm.article.Characters || '--'))])], 1), _vm._v(" "), _c('div', {
    staticClass: "bh-article-group"
  }, [_c('span', {
    staticClass: "bh-article-group__label"
  }, [_vm._v("发布详情")]), _vm._v(" "), _c('p', {
    staticClass: "bh-article-group__cont"
  }, [_vm._v(_vm._s(_vm.article.Details || '--'))])], 1), _vm._v(" "), _c('div', {
    staticClass: "bh-article-group"
  }, [_c('span', {
    staticClass: "bh-article-group__label"
  }, [_vm._v("志  愿  者")]), _vm._v(" "), _c('p', {
    staticClass: "bh-article-group__cont"
  }, [_vm._v(_vm._s(_vm.article.Handler || '--'))])], 1), _vm._v(" "), _vm._m(0)], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "bhui-comments"
  }, [_c('span', {
    staticClass: "bhui-comments__btn",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.clickCommentBtn
    }
  }, [_vm._v("提供线索")]), _vm._v(" "), _c('ul', {
    staticClass: "bhui-comments__list"
  }, _vm._l((_vm.comments), function(comment, index) {
    return _c('li', {
      key: index,
      staticClass: "bhui-comments__item"
    }, [_c('div', {
      staticClass: "bhui-comments__avatar"
    }, [_c('image', {
      attrs: {
        "src": comment.AvatarUrl,
        "alt": "用户头像"
      }
    })]), _vm._v(" "), _c('p', {
      staticClass: "bhui-comments__name"
    }, [_vm._v(_vm._s(comment.Nickname || '匿名宝宝'))]), _vm._v(" "), _c('p', {
      staticClass: "bhui-comments__cont"
    }, [_vm._v(_vm._s(comment.Content))]), _vm._v(" "), _c('p', {
      staticClass: "bhui-comments__time"
    }, [_vm._v(_vm._s(comment.CreatedAt))]), _vm._v(" "), _c('div', {
      staticClass: "bhui-comments__opt"
    }, [_c('p', [_c('span', {
      staticClass: "label"
    }, [_vm._v("支持")]), _vm._v("(" + _vm._s(comment.Like) + ")")]), _vm._v(" "), _c('p', [_c('span', {
      staticClass: "label"
    }, [_vm._v("举报")]), _vm._v("(" + _vm._s(comment.Blow) + ")")])], 1)], 1)
  }))], 1), _vm._v(" "), _c('vfooter', {
    attrs: {
      "mpcomid": '0'
    }
  })], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "article-oth-wrap"
  }, [_vm._v("关注(30K)"), _c('span', {
    staticClass: "line"
  }, [_vm._v("|")]), _vm._v("线索(1234)")])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-60bbf80f", esExports)
  }
}

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(11);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_footer__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_index__ = __webpack_require__(5);
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
      gender: '未知',
      article: {},
      comments: [{
        uuid: 'f74f0a2b-8413-4cff-b9cf-5dccdb171b76',
        AvatarUrl: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTK476rqoy0zicVAxv1fJ9v9EaltE42WibKS7btmicQBkbwBFkeB6XVSFHF4CGmFlB5OaPeVft7WJcn9w/0',
        Nickname: 'Dean',
        Content: 'xxxxxxxx test',
        CreatedAt: '2018-04-08 18:00:00',
        Like: 1000,
        Blow: 10
      }]
    };
  },

  onShareAppMessage: function onShareAppMessage() {
    return {
      title: '宝贝科技提供技术支持',
      desc: '10岁丢失宝贝',
      path: '/pages/article/main?uuid=' + this.article.UUID
    };
  },
  onLoad: function onLoad(option) {
    console.log('uuid====', option.uuid);
    this.uuid = option.uuid;
    if (option.uuid !== '') {
      this.article.UUID = option.uuid;
    }
    this.getArticle(this.article.UUID);
    this.getComments(this.article.UUID);
  },
  mounted: function mounted() {},
  created: function created() {
    // this.getArticle(this.article.UUID)
    // uhis.getComments(this.article.UUID)
  },


  onPullDownRefresh: function onPullDownRefresh() {
    wx.showLoading({
      title: '更新留言'
    });
    this.getComments(this.article.UUID);
    setTimeout(function () {
      wx.hideLoading();
    }, 2000);
    wx.stopPullDownRefresh();
  },
  methods: {
    getArticle: function getArticle(uuid) {
      var vm = this;
      if (vm.uuid === '') {
        return;
      }
      wx.request({
        url: wx.getStorageSync('requestUrl') + '/small/article/' + uuid,
        method: 'GET',
        data: {
          phone_model: 'b'
        },
        header: {
          'content-type': 'application/json'
        },
        success: function success(res) {
          console.log(res.data);
          vm.article = res.data;
          vm.article.MissedAt = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_index__["b" /* formatTime */])(new Date(vm.article.MissedAt));
          vm.article.BirthedAt = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_index__["b" /* formatTime */])(new Date(vm.article.BirthedAt));
          if (vm.article.Gender === 1) {
            vm.gender = '男';
          } else if (vm.article.Gender === 2) {
            vm.gender = '女';
          }
        }
      });
      console.log(vm.article);
    },
    getComments: function getComments() {
      var vm = this;
      if (vm.uuid === '') {
        return;
      }
      wx.request({
        url: wx.getStorageSync('requestUrl') + '/small/comment/' + vm.uuid,
        method: 'GET',
        data: {},
        header: {
          'content-type': 'application/json',
          Authorization: wx.getStorageSync('Authorization')
        },
        success: function success(res) {
          if (res.statusCode === 200) {
            vm.comments = res.data;
            for (var i = 0; i < vm.comments.length; i++) {
              vm.comments[i].CreatedAt = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_index__["b" /* formatTime */])(new Date(vm.comments[i].CreatedAt));
            }
          } else {
            wx.showLoading({
              title: '加载失败 : ' + res.statusCode
            });
            setTimeout(function () {
              wx.hideLoading();
            }, 2000);
          }
        }
      });
    },
    clickCommentBtn: function clickCommentBtn() {
      console.log('xxxxxxxxxxxxxxxxxxxxxxxx', this.uuid);
      wx.navigateTo({
        // url: '/pages/comment/main?data=' + JSON.stringify(this.article)
        url: '/pages/comment/main?uuid=' + this.uuid
      });
    }
  }
});

/***/ }),

/***/ 95:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[30]);
//# sourceMappingURL=main.js.map