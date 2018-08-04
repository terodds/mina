global.webpackJsonp([6],{

/***/ 102:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page bh-publish-page"
  }, [_vm._m(0), _vm._v(" "), _c('uploader', {
    ref: "imgUploader",
    attrs: {
      "mpcomid": '0'
    }
  }), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "page__bd"
  }, [(_vm.showTopTips) ? _c('div', {
    staticClass: "weui-toptips weui-toptips_warn"
  }, [_vm._v("填写错误, 请检查")]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "weui-cells weui-cells_after-title"
  }, [_vm._m(2), _vm._v(" "), _vm._m(3), _vm._v(" "), _c('div', {
    staticClass: "weui-cell weui-cell_input"
  }, [_vm._m(4), _vm._v(" "), _c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('input', {
    staticClass: "weui-input",
    attrs: {
      "placeholder": "请输入姓名",
      "eventid": '0'
    },
    on: {
      "input": _vm.NicknameInput
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "weui-cell weui-cell_input"
  }, [_vm._m(5), _vm._v(" "), _c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('radio-group', {
    staticClass: "sex-radio-group",
    attrs: {
      "eventid": '1',
      "mpcomid": '1'
    },
    on: {
      "change": _vm.radioChange
    }
  }, _vm._l((_vm.radioItems), function(item, index) {
    return _c('label', {
      key: index,
      staticClass: "weui-cell weui-check__label"
    }, [_c('radio', {
      staticClass: "weui-check",
      attrs: {
        "value": item.value,
        "checked": item.checked
      }
    }), _vm._v(" "), (item.checked) ? _c('div', {
      staticClass: "weui-cell__ft weui-cell__ft_in-radio"
    }, [_c('icon', {
      staticClass: "weui-icon-checkbox_success",
      attrs: {
        "type": "success",
        "size": "23"
      }
    })], 1) : _c('div', {
      staticClass: "weui-cell__ft weui-cell__ft_in-radio"
    }, [_c('icon', {
      staticClass: "weui-icon-checkbox_circle",
      attrs: {
        "type": "circle",
        "size": "23"
      }
    })], 1), _vm._v(" "), _c('div', {
      staticClass: "weui-cell__bd"
    }, [_vm._v(_vm._s(item.name))])], 1)
  }))], 1)]), _vm._v(" "), _c('div', {
    staticClass: "weui-cell weui-cell_input"
  }, [_vm._m(6), _vm._v(" "), _c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('picker', {
    attrs: {
      "mode": "date",
      "value": _vm.birthday,
      "start": "1900-01-01",
      "end": _vm.currentDate,
      "eventid": '2'
    },
    on: {
      "change": _vm.bindBirthdayChange
    }
  }, [_c('div', {
    staticClass: "weui-input"
  }, [_vm._v(_vm._s(_vm.birthday))])])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "weui-cell weui-cell_input"
  }, [_vm._m(7), _vm._v(" "), _c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('div', {
    staticClass: "lost-picker-wrap"
  }, [_c('picker', {
    attrs: {
      "mode": "date",
      "value": _vm.date,
      "start": "2015-09-01",
      "end": "2017-09-01",
      "eventid": '3'
    },
    on: {
      "change": _vm.bindDateChange
    }
  }, [_c('div', {
    staticClass: "weui-input"
  }, [_vm._v(_vm._s(_vm.date))])]), _vm._v(" "), _c('picker', {
    attrs: {
      "mode": "time",
      "value": _vm.lostTime,
      "start": "00:00:00",
      "end": "23:59:00",
      "eventid": '4'
    },
    on: {
      "change": _vm.bindLostTimeChange
    }
  }, [_c('div', {
    staticClass: "weui-input"
  }, [_vm._v(_vm._s(_vm.lostTime))])])], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "weui-cell weui-cell_select"
  }, [_vm._m(8), _vm._v(" "), _c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('picker', {
    staticClass: "weui-btn",
    attrs: {
      "mode": "region",
      "value": _vm.region,
      "eventid": '5'
    },
    on: {
      "change": _vm.bindCityChange
    }
  }, [_c('div', {
    staticClass: "weui-select weui-select_in-select-after"
  }, [_vm._v(_vm._s(_vm.region[0]) + ", " + _vm._s(_vm.region[1]) + ", " + _vm._s(_vm.region[2]) + "\n            ")])])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "weui-cell weui-cell_input"
  }, [_vm._m(9), _vm._v(" "), _c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('input', {
    staticClass: "weui-input",
    attrs: {
      "placeholder": "请输入地址",
      "eventid": '6'
    },
    on: {
      "input": _vm.AddressInput
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "weui-cell weui-cell_input"
  }, [_c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('input', {
    staticClass: "weui-input",
    attrs: {
      "name": "title",
      "placeholder": "特征描述",
      "eventid": '7'
    },
    on: {
      "input": _vm.CharactersInput
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "weui-textarea-counter"
  }, [_vm._v("0/120")])])]), _vm._v(" "), _c('div', {
    staticClass: "weui-cell"
  }, [_c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('textarea', {
    staticStyle: {
      "height": "4.0em"
    },
    attrs: {
      "name": "content",
      "placeholder": "发布详情",
      "eventid": '8'
    },
    on: {
      "input": _vm.DetailsInput
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "weui-textarea-counter"
  }, [_vm._v("0/2000")])])])]), _vm._v(" "), _vm._m(10), _vm._v(" "), _c('contact', {
    attrs: {
      "mpcomid": '2'
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "weui-btn-area"
  }, [_c('button', {
    staticClass: "weui-btn",
    attrs: {
      "type": "primary",
      "eventid": '9'
    },
    on: {
      "click": _vm.submit
    }
  }, [_vm._v("预览")])], 1)], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page__hd"
  }, [_c('div', {
    staticClass: "page__title"
  }, [_vm._v("图片上传(1/3)")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page__hd"
  }, [_c('div', {
    staticClass: "page__title"
  }, [_vm._v("失踪信息(2/3)")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-cell weui-cell_input"
  }, [_c('div', {
    staticClass: "weui-cell__hd"
  }, [_c('div', {
    staticClass: "weui-label"
  }, [_vm._v("消息标题")])]), _vm._v(" "), _c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('input', {
    staticClass: "weui-input",
    attrs: {
      "placeholder": "请输入标题"
    }
  })])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-cell weui-cell_input"
  }, [_c('div', {
    staticClass: "weui-cell__hd"
  }, [_c('div', {
    staticClass: "weui-label"
  }, [_vm._v("档案编号")])]), _vm._v(" "), _c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('input', {
    staticClass: "weui-input",
    attrs: {
      "placeholder": "新失踪录入可忽略"
    }
  })])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-cell__hd"
  }, [_c('div', {
    staticClass: "weui-label"
  }, [_vm._v("姓名")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-cell__hd"
  }, [_c('div', {
    staticClass: "weui-label"
  }, [_vm._v("性别")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-cell__hd"
  }, [_c('div', {
    staticClass: "weui-label"
  }, [_vm._v("出生日期")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-cell__hd"
  }, [_c('div', {
    staticClass: "weui-label"
  }, [_vm._v("丢失时间")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-cell__hd weui-cell__hd_in-select-after"
  }, [_c('div', {
    staticClass: "weui-label"
  }, [_vm._v("失踪地区")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-cell__hd"
  }, [_c('div', {
    staticClass: "weui-label"
  }, [_vm._v("具体地址")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page__hd"
  }, [_c('div', {
    staticClass: "page__title"
  }, [_vm._v("联系人(3/3)")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-c1a58630", esExports)
  }
}

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_c1a58630_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(127);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(102)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-c1a58630"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_c1a58630_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\publish\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c1a58630", Component.options)
  } else {
    hotAPI.reload("data-v-c1a58630", Component.options)
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(24);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_uploader__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_contact__ = __webpack_require__(6);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    uploader: __WEBPACK_IMPORTED_MODULE_1__pages_uploader__["a" /* default */],
    contact: __WEBPACK_IMPORTED_MODULE_2__pages_contact__["a" /* default */]
  },
  data: function data() {
    return {
      article: {
        uuid: 'default-uuid',
        nickName: 'nickname',
        gender: 0,
        country: '中国',
        province: '广东',
        city: '深圳',
        address: 'address',
        title: 'xxx',
        characters: 'default',
        details: 'detail',
        birthedAt: '2000-03-03',
        missedAt: '2008-03-03 00:00:00'
      },
      genders: ['未知', '男', '女'],
      genderIndex: 0,
      showTopTips: false,
      time: '09:01',
      date: '2015-09-01',
      lostTime: '00:00',
      region: ['广东省', '深圳市', '南山区'],
      cityIndex: 0,
      accounts: ['微信号', 'QQ', 'Email'],
      accountsIndex: 0,
      radioItems: [{ name: '男', value: '1' }, { name: '女', value: '2' }],

      isAgree: false,
      birthday: '',
      currentDate: ''
    };
  },
  created: function created() {
    var _hours = (Array(2).join('0') + new Date().getHours()).slice(-2);
    var _minus = (Array(2).join('0') + new Date().getMinutes()).slice(-2);
    var _secs = (Array(2).join('0') + new Date().getSeconds()).slice(-2);
    var _curdate = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();
    this.lostTime = _hours + ':' + _minus + ':' + _secs;
    this.date = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();
    this.currentDate = _curdate;
    this.birthday = _curdate;
  },
  onLoad: function onLoad() {
    console.log('pulibsh ====== onload');
  },

  methods: {
    NicknameInput: function NicknameInput(e) {
      this.article.nickName = e.mp.detail.value;
    },
    CharactersInput: function CharactersInput(e) {
      this.article.characters = e.mp.detail.value;
    },
    DetailsInput: function DetailsInput(e) {
      this.article.details = e.mp.detail.value;
    },
    AddressInput: function AddressInput(e) {
      this.article.address = e.mp.detail.value;
    },
    contentInput: function contentInput(e) {
      this.article.content = e.mp.detail.value;
    },
    ageInput: function ageInput(e) {
      this.article.Age = parseInt(e.mp.detail.value);
    },
    showTopTipsFun: function showTopTipsFun() {
      var _this2 = this;

      this.showTopTips = true;
      setTimeout(function () {
        _this2.showTopTips = false;
      }, 2000);
    },
    preview: function preview() {
      console.log('json=: ', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(this.article));
      var files = this.$refs.imgUploader.getFiles();
      console.log('image files: ', files);
      /*
      if (this.article.Nickname === '' || this.article.Address === '' || this.article.Characters === '' || this.article.Details === '') {
        wx.showLoading({
          title: '信息不能为空'
        })
        setTimeout(function () {
          wx.hideLoading()
        }, 2000)
        return
      }
      */
      wx.navigateTo({
        url: '/pages/preview/main?data=' + __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(this.article) + '&files=' + files
      });
    },
    bindProvinceChange: function bindProvinceChange(e) {
      this.provinceIndex = e.mp.detail.value;
      console.log('change index===', this.provinceIndex);
    },
    bindCityChange: function bindCityChange(e) {
      this.region = e.mp.detail.value;
      console.log('change city index===', e.mp.detail.value);
    },
    bindAccountChange: function bindAccountChange(e) {
      this.accountsIndex = e.mp.detail.value;
    },
    bindCountryCodeChange: function bindCountryCodeChange(e) {
      this.countryCodesIndex = e.mp.detail.value;
    },
    bindGenderCodeChange: function bindGenderCodeChange(e) {
      this.gendersIndex = e.mp.detail.value;
    },
    bindAgreeChange: function bindAgreeChange(e) {
      this.isAgree = !this.isAgree;
    },
    bindBirthdayChange: function bindBirthdayChange(e) {
      this.article.birthedAt = e.mp.detail.value;
    },
    checkboxChange: function checkboxChange(e) {
      console.log('radio发生change事件，携带value值为：' + e.mp.detail.value);
      var checkboxItems = this.checkboxItems;
      for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
        checkboxItems[i].checked = checkboxItems[i].value === e.mp.detail.value;
      }
      this.checkboxItems = checkboxItems;
      this.article.Gender = e.mp.detail.value;
    },
    radioChange: function radioChange(e) {
      var radioItems = this.radioItems;
      for (var i = 0; i < radioItems.length; ++i) {
        radioItems[i].checked = radioItems[i].value === e.mp.detail.value;
      }
      this.radioItems = radioItems;
      this.article.gender = parseInt(e.mp.detail.value);
      console.log('raidoChange===', this.article.gender);
    },
    chooseImage: function chooseImage(e) {
      var _this = this;
      wx.chooseImage({
        count: 1, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function success(res) {
          console.log('成功上传：' + res.tempFilePaths);
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          _this.article.imageFiles = _this.article.imageFiles.concat(res.tempFilePaths);
        },
        fail: function fail() {
          console.log('fail');
        },
        complete: function complete() {
          console.log('commplete');
        }
      });
    },
    predivImage: function predivImage(e) {
      console.log(e);
      wx.previewImage({
        current: e.currentTarget.id, // 当前显示图片的http链接
        urls: this.article.imageFiles // 需要预览的图片http链接列表
      });
    },
    submit: function submit() {
      console.log(this.article);
      var vm = this;
      vm.preview();
    }
  }
});

/***/ })

},[46]);
//# sourceMappingURL=main.js.map