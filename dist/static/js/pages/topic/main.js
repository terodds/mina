global.webpackJsonp([2],{

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page1 bh-topic-page"
  }, [_c('div', {
    staticClass: "weui-cells weui-cells_after-title"
  }, [_c('div', {
    staticClass: "weui-tab"
  }, [_c('div', {
    staticClass: "weui-navbar"
  }, [_vm._l((_vm.tabs), function(item, index) {
    return _c('block', {
      key: index
    }, [_c('div', {
      staticClass: "weui-navbar__item",
      class: {
        'weui-bar__item_on': _vm.activeIndex == index
      },
      attrs: {
        "id": index,
        "eventid": '0-' + index
      },
      on: {
        "click": _vm.tabClick
      }
    }, [_c('div', {
      staticClass: "weui-navbar__title"
    }, [_vm._v(_vm._s(item))])])])
  }), _vm._v(" "), _c('div', {
    class: ['weui-navbar__slider', 'weui-navbar__slider_' + _vm.activeIndex]
  })], 2), _vm._v(" "), _c('div', {
    staticClass: "weui-tab__panel"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "publish-card-wrap"
  }, [_c('div', {
    staticClass: "publish-card-list"
  }, _vm._l((_vm.items), function(item, index) {
    return _c('publish-card', {
      key: index,
      attrs: {
        "isFollow": _vm.isFollow,
        "publishInfo": item,
        "handleClick": _vm.handleClickPubCard,
        "handleFollow": _vm.handleFollow,
        "mpcomid": '0-' + index
      }
    })
  }))])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3e1b8c88", esExports)
  }
}

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3e1b8c88_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(112);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(87)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3e1b8c88"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3e1b8c88_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\topic\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3e1b8c88", Component.options)
  } else {
    hotAPI.reload("data-v-3e1b8c88", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(28);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_card__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_publish_card__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_index__ = __webpack_require__(5);
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
    card: __WEBPACK_IMPORTED_MODULE_0__components_card__["a" /* default */],
    PublishCard: __WEBPACK_IMPORTED_MODULE_1__components_publish_card__["a" /* default */]
  },
  data: function data() {
    return {
      isFollow: false,
      tabs: ['智能推荐', '最新发布', '最近更新', '我的关注'],
      types: ['nearby', 'lastpublish', 'lastupdate', 'recommend'],
      activeIndex: 0,
      fontSize: 30,
      parms: {
        type: 'nearby',
        page: 1
      },
      showmessage: '今年，宝贝回家十岁了，我们促成了近两千家庭的团圆，未来，宝贝回家的下一个十年，我们将见证更多的美满！衷心祝福你们，那些团圆的父母和孩子!',

      items: []
    };
  },

  onLoad: function onLoad() {
    console.log('===topic onload test ======:');
    this.getTopicInfo();
  },
  methods: {
    // 点击卡片
    handleClickPubCard: function handleClickPubCard(publishInfo) {
      console.log(publishInfo);
      this.clickHandle(publishInfo.UUID);
    },

    // 点击卡片关注按钮
    handleFollow: function handleFollow(publishInfo) {
      console.log('handleFollow----', this.isFollow);
      this.isFollow = !this.isFollow;
    },
    bindAccountChange: function bindAccountChange(e) {
      this.accountsIndex = e.mp.detail.value;
    },
    clickHandle: function clickHandle(uuid) {
      console.log('clickHandle:', uuid);
      wx.navigateTo({
        url: '../article/main?uuid=' + uuid,
        success: function success() {
          console.log('clickHandle success:', uuid);
        },
        fail: function fail() {
          console.log('clickHandle fail:', uuid);
        },
        complete: function complete() {
          console.log('clickHandle:', uuid);
        }
      });
      // this.$router.push({path: '/pages/logs/main', query: {id: '2'}})
    },
    tabClick: function tabClick(e) {
      console.log(e);
      this.activeIndex = e.currentTarget.id;
      this.parms.type = this.types[e.currentTarget.id];
      this.parms.page = 1;
      // this.items = []
      this.getTopicInfo();
    },

    onPullDownRefresh: function onPullDownRefresh() {
      wx.showLoading({
        title: '加载中'
      });
      setTimeout(function () {
        wx.hideLoading();
      }, 2000);
      wx.stopPullDownRefresh();
    },
    getTopicInfo: function getTopicInfo() {
      var vm = this;
      wx.request({
        url: wx.getStorageSync('requestUrl') + '/small/article/topics',
        method: 'GET',
        data: {
          type: this.parms.type,
          page: this.parms.page
        },
        header: {
          'content-type': 'application/json'
        },
        success: function success(res) {
          for (var i = 0; i < res.data.length; i++) {
            res.data[i].MissedAt = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_index__["a" /* formatTimeMin */])(new Date(res.data[i].MissedAt));
            res.data[i].BirthedAt = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_index__["b" /* formatTime */])(new Date(res.data[i].BirthedAt));
          }

          vm.items = vm.items.concat(res.data);
          console.log('not 0, add 5 , xxx', vm.items.length);
        },
        compelte: function compelte(e) {
          console.log('e', e, vm.items);
        }
      });
    },
    openSuccess: function openSuccess() {
      wx.navigateTo({
        url: '../uploader/main'
      });
    }
  },
  onShareAppMessage: function onShareAppMessage() {
    return {
      title: '公益项目',
      desc: '10岁丢失宝贝',
      path: '/pages/home/main?from=forward'
    };
  },
  onPullDownRefresh: function onPullDownRefresh() {
    wx.showLoading({
      title: '下拉更新'
    });
    this.getTopicInfo();
    setTimeout(function () {
      wx.hideLoading();
    }, 2000);
    wx.stopPullDownRefresh();
  },
  onReachBottom: function onReachBottom() {
    wx.showLoading({
      title: '加载更多'
    });
    this.parms.page += 1;
    this.getTopicInfo();
    setTimeout(function () {
      wx.hideLoading();
    }, 2000);
  }
});

/***/ }),

/***/ 87:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[50]);
//# sourceMappingURL=main.js.map