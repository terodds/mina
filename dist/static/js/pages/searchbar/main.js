global.webpackJsonp([6],{

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page bh-index-page"
  }, [_c('div', {
    staticClass: "bh-search-mod"
  }, [_c('div', {
    staticClass: "weui-search-bar"
  }, [_c('div', {
    staticClass: "weui-search-bar__form"
  }, [_c('div', {
    staticClass: "weui-search-bar__box"
  }, [_c('icon', {
    staticClass: "weui-icon-search_in-box",
    attrs: {
      "type": "search",
      "size": "14"
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.inputVal),
      expression: "inputVal"
    }],
    staticClass: "weui-search-bar__input",
    attrs: {
      "type": "text",
      "placeholder": "搜索",
      "focus": _vm.inputShowed,
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.inputVal)
    },
    on: {
      "input": [function($event) {
        if ($event.target.composing) { return; }
        _vm.inputVal = $event.target.value
      }, _vm.inputTyping]
    }
  }), _vm._v(" "), (_vm.inputVal.length > 0) ? _c('div', {
    staticClass: "weui-icon-clear",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.clearInput
    }
  }, [_c('icon', {
    attrs: {
      "type": "clear",
      "size": "14"
    }
  })], 1) : _vm._e()], 1), _vm._v(" "), _c('label', {
    staticClass: "weui-search-bar__label",
    attrs: {
      "hidden": _vm.inputShowed,
      "eventid": '2'
    },
    on: {
      "click": _vm.showInput
    }
  }, [_c('icon', {
    staticClass: "weui-icon-search",
    attrs: {
      "type": "search",
      "size": "14"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "weui-search-bar__text"
  }, [_vm._v("搜索")])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "weui-search-bar__cancel-btn",
    attrs: {
      "hidden": !_vm.inputShowed,
      "eventid": '3'
    },
    on: {
      "click": _vm.hideInput
    }
  }, [_vm._v("取消")])]), _vm._v(" "), (_vm.inputVal.length > 0) ? _c('div', {
    staticClass: "weui-cells searchbar-result"
  }, [_c('navigator', {
    staticClass: "weui-cell",
    attrs: {
      "url": "",
      "hover-class": "weui-cell_active"
    }
  }, [_c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('div', [_vm._v("实时搜索文本1")])])]), _vm._v(" "), _c('navigator', {
    staticClass: "weui-cell",
    attrs: {
      "url": "",
      "hover-class": "weui-cell_active"
    }
  }, [_c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('div', [_vm._v("实时搜索文本2")])])]), _vm._v(" "), _c('navigator', {
    staticClass: "weui-cell",
    attrs: {
      "url": "",
      "hover-class": "weui-cell_active"
    }
  }, [_c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('div', [_vm._v("实时搜索文本3")])])]), _vm._v(" "), _c('navigator', {
    staticClass: "weui-cell",
    attrs: {
      "url": "",
      "hover-class": "weui-cell_active"
    }
  }, [_c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('div', [_vm._v("实时搜索文本4")])])])], 1) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "page"
  }, [_c('div', {
    staticClass: "page__bd page__bd_spacing"
  }, [_c('swiper', {
    attrs: {
      "indicator-dots": _vm.indicatorDots,
      "autoplay": _vm.autoplay,
      "interval": _vm.interval,
      "duration": _vm.duration,
      "circular": _vm.circular,
      "eventid": '4'
    },
    on: {
      "change": _vm.swiperChange,
      "animationfinish": _vm.animationfinish
    }
  }, _vm._l((_vm.imgUrls), function(item, index) {
    return _c('div', {
      key: index
    }, [_c('swiper-item', {
      attrs: {
        "mpcomid": '0-' + index
      }
    }, [_c('image', {
      staticClass: "slide-image",
      attrs: {
        "src": item
      }
    })])], 1)
  }))], 1)]), _vm._v(" "), _c('div', {
    staticClass: "post-panel"
  }, [_c('div', {
    staticClass: "post-panel__hd"
  }, [_c('h3', {
    staticClass: "post-panel__title"
  }, [_vm._v("寻找丢失宝贝")]), _vm._v(" "), _c('a', {
    staticClass: "btn-more",
    attrs: {
      "href": "javascript:;"
    }
  }, [_vm._v("更多 >")])], 1), _vm._v(" "), _c('div', {
    staticClass: "post-panel__bd"
  }, [_c('ul', {
    staticClass: "post-list"
  }, _vm._l((_vm.items), function(item, index) {
    return _c('li', {
      key: index,
      staticClass: "post-item",
      attrs: {
        "eventid": '5-' + index
      },
      on: {
        "click": function($event) {
          _vm.clickHandle(item.UUID, $event)
        }
      }
    }, [_c('div', {
      staticClass: "post-item__pic"
    }, [_c('image', {
      attrs: {
        "src": item.PicUrl
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "post-item__detail"
    }, [_c('p', {
      staticClass: "post-item__title"
    }, [_vm._v(_vm._s(item.Title))]), _vm._v(" "), _c('p', {
      staticClass: "post-item__desc"
    }, [_vm._v(_vm._s(item.desc))])], 1)])
  }))], 1)]), _vm._v(" "), _c('div', {
    staticClass: "post-panel"
  }, [_c('div', {
    staticClass: "post-panel__hd"
  }, [_c('h3', {
    staticClass: "post-panel__title"
  }, [_vm._v("寻找送养宝贝")]), _vm._v(" "), _c('a', {
    staticClass: "btn-more",
    attrs: {
      "href": "javascript:;"
    }
  }, [_vm._v("更多 >")])], 1), _vm._v(" "), _c('div', {
    staticClass: "post-panel__bd"
  }, [_c('ul', {
    staticClass: "post-list"
  }, _vm._l((_vm.items), function(item, index) {
    return _c('li', {
      key: index,
      staticClass: "post-item",
      attrs: {
        "eventid": '6-' + index
      },
      on: {
        "click": function($event) {
          _vm.clickHandle(item.UUID, $event)
        }
      }
    }, [_c('div', {
      staticClass: "post-item__pic"
    }, [_c('image', {
      attrs: {
        "src": _vm.src
      }
    }), _vm._v(">\n      ")]), _vm._v(" "), _c('div', {
      staticClass: "post-item__detail"
    }, [_c('p', {
      staticClass: "post-item__title"
    }, [_vm._v(_vm._s(item.Title))]), _vm._v(" "), _c('p', {
      staticClass: "post-item__desc"
    }, [_vm._v(_vm._s(item.desc))])], 1)])
  }))], 1)]), _vm._v(" "), _c('div', {
    staticClass: "post-panel"
  }, [_c('div', {
    staticClass: "post-panel__hd"
  }, [_c('h3', {
    staticClass: "post-panel__title"
  }, [_vm._v("被拐宝贝寻家")]), _vm._v(" "), _c('a', {
    staticClass: "btn-more",
    attrs: {
      "href": "javascript:;"
    }
  }, [_vm._v("更多 >")])], 1), _vm._v(" "), _c('div', {
    staticClass: "post-panel__bd"
  }, [_c('ul', {
    staticClass: "post-list"
  }, _vm._l((_vm.items), function(item, index) {
    return _c('li', {
      key: index,
      staticClass: "post-item",
      attrs: {
        "eventid": '7-' + index
      },
      on: {
        "click": function($event) {
          _vm.clickHandle(item.UUID, $event)
        }
      }
    }, [_c('div', {
      staticClass: "post-item__pic"
    }, [_c('image', {
      attrs: {
        "src": _vm.src
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "post-item__detail"
    }, [_c('p', {
      staticClass: "post-item__title"
    }, [_vm._v(_vm._s(item.Title))]), _vm._v(" "), _c('p', {
      staticClass: "post-item__desc"
    }, [_vm._v(_vm._s(item.desc))])], 1)])
  }))], 1)]), _vm._v(" "), _c('div', {
    staticClass: "post-panel"
  }, [_c('div', {
    staticClass: "post-panel__hd"
  }, [_c('h3', {
    staticClass: "post-panel__title"
  }, [_vm._v("送养宝贝寻家")]), _vm._v(" "), _c('a', {
    staticClass: "btn-more",
    attrs: {
      "href": "javascript:;"
    }
  }, [_vm._v("更多 >")])], 1), _vm._v(" "), _c('div', {
    staticClass: "post-panel__bd"
  }, [_c('ul', {
    staticClass: "post-list"
  }, _vm._l((_vm.items), function(item, index) {
    return _c('li', {
      key: index,
      staticClass: "post-item",
      attrs: {
        "eventid": '8-' + index
      },
      on: {
        "click": function($event) {
          _vm.clickHandle(item.UUID, $event)
        }
      }
    }, [_c('div', {
      staticClass: "post-item__pic"
    }, [_c('image', {
      attrs: {
        "src": _vm.src
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "post-item__detail"
    }, [_c('p', {
      staticClass: "post-item__title"
    }, [_vm._v(_vm._s(item.Title))]), _vm._v(" "), _c('p', {
      staticClass: "post-item__desc"
    }, [_vm._v(_vm._s(item.desc))])], 1)])
  }))], 1)]), _vm._v(" "), _c('img', {
    staticClass: "btn-post",
    attrs: {
      "src": "/images/addition_fill.png",
      "eventid": '9'
    },
    on: {
      "click": _vm.onPostClick
    }
  })])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-bd0b6a78", esExports)
  }
}

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_bd0b6a78_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(122);
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
var __vue_scopeId__ = "data-v-bd0b6a78"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_bd0b6a78_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\searchbar\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-bd0b6a78", Component.options)
  } else {
    hotAPI.reload("data-v-bd0b6a78", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 46:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_card__ = __webpack_require__(3);
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
    card: __WEBPACK_IMPORTED_MODULE_0__components_card__["a" /* default */]
  },
  data: function data() {
    return {
      inputShowed: false,
      inputVal: '',
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 900,
      circular: true,

      imgUrls: ['/images/h2.png', '/images/head.jpg', '/images/h3.jpg'],

      src: '',
      items: [{
        desc: '',
        PicUrl: ''
      }, {
        desc: '',
        PicUrl: ''
      }]
    };
  },

  created: function created() {
    this.getSummary();
    wx.getStorage({
      key: 'nickname',
      success: function success(res) {
        console.log('get storage===', res.data);
      }
    });
  },
  mounted: function mounted() {},

  onPullDownRefresh: function onPullDownRefresh() {
    wx.showLoading({
      title: '加载中'
    });
    this.getSummary();

    setTimeout(function () {
      wx.hideLoading();
    }, 2000);
    wx.stopPullDownRefresh();
  },
  methods: {
    swiperChange: function swiperChange(e) {
      // console.log('第' + e.mp.detail.current + '张轮播图发生了滑动')
    },
    animationfinish: function animationfinish(e) {
      // console.log('第' + e.mp.detail.current + '张轮播图滑动结束')
    },
    showInput: function showInput() {
      this.inputShowed = true;
    },
    hideInput: function hideInput() {
      this.inputVal = '';
      this.inputShowed = false;
    },
    clearInput: function clearInput() {
      this.inputVal = '';
    },
    inputTyping: function inputTyping(e) {
      console.log(e);
      this.inputVal = e.mp.detail.value;
      console.log('输入信息为：' + e.mp.detail.value);
    },
    clickHandle: function clickHandle(uuid, ev) {
      // console.log('clickHandle:', uuid, ev)
      wx.navigateTo({
        url: '../article/main?uuid=' + uuid,
        success: function success() {
          // console.log('clickHandle success:', uuid, ev)
        },
        fail: function fail() {
          console.log('clickHandle fail:', uuid, ev);
        },
        complete: function complete() {
          // console.log('clickHandle:', uuid, ev)
        }
      });
    },
    getSummary: function getSummary() {
      var vm = this;
      wx.request({
        url: 'https://www.srehub.com/lastest/wechat/small/summary',
        method: 'GET',
        data: {
          phone_model: 'b'
        },
        header: {
          'content-type': 'application/json'
        },
        success: function success(res) {
          console.log('getSummary======', res.data);
          if (res.statusCode === 200) {
            vm.items = res.data;
          } else {
            wx.showLoading({
              title: '加载失败 : ' + res.statusCode
            });
            setTimeout(function () {
              wx.hideLoading();
            }, 2000);
          }
        },
        fail: function fail(res) {
          wx.showLoading({
            title: '网络不可达 : ' + res.statusCode
          });
          setTimeout(function () {
            wx.hideLoading();
          }, 2000);
        }
      });
    },
    openSuccess: function openSuccess() {
      wx.navigateTo({
        url: '../uploader/main'
      });
    },
    onPostClick: function onPostClick() {
      wx.navigateTo({
        url: '/pages/publish/main'
      });
    }
  }
});

/***/ }),

/***/ 98:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[46]);
//# sourceMappingURL=main.js.map