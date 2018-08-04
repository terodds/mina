global.webpackJsonp([15],{

/***/ 108:
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
  }, [_vm._v("取消")])]), _vm._v(" "), _vm._l((_vm.items), function(word, index) {
    return _c('div', {
      staticClass: "weui-cells searchbar-result",
      attrs: {
        "hidden": !_vm.inputShowed
      }
    }, [_c('div', {
      staticClass: "weui-cell",
      attrs: {
        "hover-class": "weui-cell_active",
        "eventid": '4-' + index
      },
      on: {
        "click": _vm.chooseResult
      }
    }, [_c('div', {
      staticClass: "weui-cell__bd"
    }, [_c('div', [_vm._v(_vm._s(word.Babyid) + "-" + _vm._s(word.Nickname))])])])])
  })], 2), _vm._v(" "), _c('map', {
    staticStyle: {
      "width": "100%",
      "height": "300px"
    },
    attrs: {
      "id": "map",
      "scale": "14",
      "show-location": "",
      "longitude": _vm.userLocation.longitude,
      "latitude": _vm.userLocation.latitude,
      "markers": _vm.markers,
      "circles": _vm.circles,
      "eventid": '5'
    },
    on: {
      "markertap": _vm.markertap
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "btn-post",
    attrs: {
      "src": "/static/images/addition_fill.png",
      "eventid": '6'
    },
    on: {
      "click": _vm.onPostClick
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
     require("vue-hot-reload-api").rerender("data-v-1add1b08", esExports)
  }
}

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1add1b08_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(108);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(82)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1add1b08"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1add1b08_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\home\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1add1b08", Component.options)
  } else {
    hotAPI.reload("data-v-1add1b08", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(15);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 62:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      tabs: ['家寻宝贝', '宝贝寻家', '救助寻亲', '流浪乞讨', '等着我寻人', '其他寻人'],
      activeIndex: 0,
      isFollow: false,
      isShowCard: true,
      apiurl: wx.getStorageSync('requestUrl') + '/small/article/:',
      from: '',
      inputShowed: false,
      inputVal: '',
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 900,
      circular: true,

      userLocation: wx.getStorageSync('userLocation'),
      markers: [{
        iconPath: '/static/images/map.png',
        id: 0,
        title: 'dean',
        label: '455112c2-cd5b-4bd5-9bfa-3687c0802da6',
        latitude: wx.getStorageSync('userLocation').latitude,
        longitude: wx.getStorageSync('userLocation').longitude,
        width: 50,
        height: 50
      }, {
        iconPath: '/static/images/map.png',
        id: 1,
        title: 'dean right',
        label: 'c266c63f-c49b-4433-964e-7c4cf64a7ba2',
        latitude: wx.getStorageSync('userLocation').latitude,
        longitude: wx.getStorageSync('userLocation').longitude + 0.02,
        width: 50,
        height: 50
      }, {
        iconPath: '/static/images/map.png',
        id: 2,
        title: 'dean  left',
        label: 'fbaab284-c43f-4fb0-8861-4de9850375e5',
        latitude: wx.getStorageSync('userLocation').latitude,
        longitude: wx.getStorageSync('userLocation').longitude - 0.02,
        width: 50,
        height: 50
      }, {
        iconPath: '/static/images/map.png',
        id: 3,
        title: 'dean  up',
        label: 'fbaab284-c43f-4fb0-8861-4de9850375e5',
        latitude: wx.getStorageSync('userLocation').latitude + 0.02,
        longitude: wx.getStorageSync('userLocation').longitude,
        width: 50,
        height: 50
      }, {
        iconPath: '/static/images/map.png',
        id: 4,
        title: 'dean  down',
        label: 'fbaab284-c43f-4fb0-8861-4de9850375e5',
        latitude: wx.getStorageSync('userLocation').latitude - 0.02,
        longitude: wx.getStorageSync('userLocation').longitude,
        width: 50,
        height: 50
      }],
      circles: [{
        latitude: wx.getStorageSync('userLocation').latitude,
        longitude: wx.getStorageSync('userLocation').longitude,
        color: '#FF0000DD',
        fillColor: '#7cb5ec88',
        radius: 3000,
        strokeWidth: 1
      }],

      imgUrls: ['/static/images/h2.png'],

      keyWords: {
        nickname: '',
        babyid: ''
      },
      src: '',
      showItem: {},
      items: []
    };
  },

  onShareAppMessage: function onShareAppMessage() {
    return {
      title: '公益项目',
      desc: '10岁丢失宝贝',
      path: '/pages/home/main?from=forward'
    };
  },
  onLoad: function onLoad(option) {
    this.from = option.from;
    console.log('=============!!!!!====', this.items);
    this.getHotTopic();
    this.showItem = this.items[0];
  },
  created: function created() {
    this.getLocationMarkers();
    // this.getSummary()
    wx.getStorage({
      key: 'nickname',
      success: function success(res) {
        console.log('get storage home created===', res.data);
      }
    });
  },
  mounted: function mounted() {},

  methods: {
    tabClick: function tabClick(e) {
      console.log(e);
      this.activeIndex = e.currentTarget.id;
    },
    markertap: function markertap(e) {
      var vm = this;
      vm.markers.forEach(function (marker, i) {
        if (marker['id'] === e.mp.markerId) {
          console.log('========', marker['id'], marker['label']);
          // uuid = marker['label']
          vm.getArticle(marker['label']);
          vm.isShowCard = true;
          // vm.getArticle('fbaab284-c43f-4fb0-8861-4de9850375e5')
        }
      });
    },
    controltap: function controltap(e) {
      console.log(e.controlId);
    },

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
      this.IsShowCard = false;
      console.log(e);
      this.inputVal = e.mp.detail.value;
      console.log('输入信息为：' + e.mp.detail.value);
    },
    clickHandle: function clickHandle(uuid, ev) {
      // console.log('clickHandle:', uuid, ev)
      wx.navigateTo({
        url: '/pages/article/main?uuid=' + uuid,
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
    getHotTopic: function getHotTopic() {
      var vm = this;
      console.log('debug=====start');
      wx.request({
        url: wx.getStorageSync('requestUrl') + '/small/article/keywords',
        method: 'GET',
        data: {
          nickname: '',
          babyid: ''
        },
        header: {
          'content-type': 'application/json'
        },
        success: function success(res) {
          console.log('debug=====sucess');
          for (var i = 0; i < res.data.length; i++) {
            res.data[i].MissedAt = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_index__["a" /* formatTimeMin */])(new Date(res.data[i].MissedAt));
            res.data[i].BirthedAt = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_index__["b" /* formatTime */])(new Date(res.data[i].BirthedAt));
          }
          vm.items = vm.items.concat(res.data);
          console.log('debug=====', vm.items);
        },
        fail: function fail(res) {
          console.log('debug=====fail');
        },
        compelte: function compelte(e) {
          console.log('==', this.keyWords);
          // console.log('e', e, vm.items)
        }
      });
    },
    getArticle: function getArticle(uuid) {
      if (uuid === '') {
        return;
      }
      console.log('getArticle====', uuid);
      var vm = this;

      wx.request({
        url: vm.apiurl + uuid,
        method: 'GET',
        data: {},
        header: {
          'content-type': 'application/json'
        },
        success: function success(res) {
          if (res.statusCode === 200) {
            vm.items = res.data;
            vm.items.MissedAt = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_index__["a" /* formatTimeMin */])(new Date(vm.items.MissedAt));
            vm.items.BirthedAt = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_index__["b" /* formatTime */])(new Date(vm.items.BirthedAt));
            console.log('getArticle====items', vm.items);
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
            title: '网络 : ' + res.statusCode
          });
          setTimeout(function () {
            wx.hideLoading();
          }, 2000);
        }
      });
    },
    chooseResult: function chooseResult(e) {
      this.inputShowed = false;
      console.log('chooseResult xxxxxxx', e.mp);
    },
    getLocationMarkers: function getLocationMarkers() {
      var vm = this;
      wx.request({
        url: wx.getStorageSync('requestUrl') + '/small/location/markers' + '?latitude=' + wx.getStorageSync('userLocation').latitude + '&longitude=' + wx.getStorageSync('userLocation').longitude,
        method: 'GET',
        data: {},
        header: {
          'content-type': 'application/json'
        },
        success: function success(res) {
          if (res.statusCode === 200) {
            vm.markers = res.data;
            console.log('getLocationMarkers====items', vm.markers);
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
            title: '网络 : ' + res.statusCode
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

/***/ 82:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[37]);
//# sourceMappingURL=main.js.map