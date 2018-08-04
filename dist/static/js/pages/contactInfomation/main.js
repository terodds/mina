global.webpackJsonp([18],{

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_03f236af_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(101);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(76)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-03f236af"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_03f236af_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\contactInfomation\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-03f236af", Component.options)
  } else {
    hotAPI.reload("data-v-03f236af", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "page__bd"
  }, [(_vm.showTopTips) ? _c('div', {
    staticClass: "weui-toptips weui-toptips_warn"
  }, [_vm._v("填写错误, 请检查")]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "weui-cells weui-cells_after-title"
  }, [_c('div', {
    staticClass: "weui-cell weui-cell_input"
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('input', {
    staticClass: "weui-input",
    attrs: {
      "placeholder": "请输入姓名",
      "eventid": '0'
    },
    on: {
      "change": _vm.nameInput
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "weui-cells weui-cells_after-title"
  }, [_c('div', {
    staticClass: "weui-cell weui-cell_select"
  }, [_c('div', {
    staticClass: "weui-cell__hd",
    staticStyle: {
      "width": "105px",
      "padding-left": "0"
    }
  }, [_c('picker', {
    attrs: {
      "range": _vm.countryCodes,
      "eventid": '1'
    },
    on: {
      "change": _vm.bindCountryCodeChange
    }
  }, [_c('div', {
    staticClass: "weui-select"
  }, [_vm._v(_vm._s(_vm.countryCodes[_vm.countryCodesIndex]))])])], 1), _vm._v(" "), _c('div', {
    staticClass: "weui-cell__bd weui-cell__bd_in-select-before"
  }, [_c('input', {
    staticClass: "weui-input",
    attrs: {
      "placeholder": "请输入号码",
      "eventid": '2'
    },
    on: {
      "change": _vm.phoneInput
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "weui-cells weui-cells_after-title"
  }, [_c('div', {
    staticClass: "weui-cell weui-cell_input"
  }, [_vm._m(2), _vm._v(" "), _c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('input', {
    staticClass: "weui-input",
    attrs: {
      "placeholder": "请输入微信号",
      "eventid": '3'
    },
    on: {
      "change": _vm.wechatInput
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "weui-cell weui-cell_input"
  }, [_vm._m(3), _vm._v(" "), _c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('input', {
    staticClass: "weui-input",
    attrs: {
      "placeholder": "请输入邮箱",
      "eventid": '4'
    },
    on: {
      "change": _vm.mailInput
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "weui-cell weui-cell_input"
  }, [_vm._m(4), _vm._v(" "), _c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('input', {
    staticClass: "weui-input",
    attrs: {
      "placeholder": "请输地址",
      "eventid": '5'
    },
    on: {
      "change": _vm.addressInput
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "weui-cell weui-cell_input"
  }, [_vm._m(5), _vm._v(" "), _c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('input', {
    staticClass: "weui-input",
    attrs: {
      "placeholder": "请输入其他联系方式",
      "eventid": '6'
    },
    on: {
      "change": _vm.remarkInput
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "text-tipmsg"
  }, [_c('p', [_vm._v(" 重要提示：")]), _vm._v(" "), _c('p', [_vm._v(" 联系人信息为保密信息，未经许可，本平台不会泄露。 请用户注意保护隐私，不要在论坛跟贴回复联系方式。")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "weui-btn-area"
  }, [_c('button', {
    staticClass: "weui-btn",
    attrs: {
      "type": "primary",
      "eventid": '7'
    },
    on: {
      "click": _vm.submit
    }
  }, [_vm._v("第三录：登记联系人")])], 1)])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page__hd"
  }, [_c('div', {
    staticClass: "page__title"
  }, [_vm._v("登记联系人(3/4)")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-cell__hd"
  }, [_c('div', {
    staticClass: "weui-label"
  }, [_vm._v("联系人")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-cell__hd"
  }, [_c('div', {
    staticClass: "weui-label"
  }, [_vm._v("微信号")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-cell__hd"
  }, [_c('div', {
    staticClass: "weui-label"
  }, [_vm._v("邮箱")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-cell__hd"
  }, [_c('div', {
    staticClass: "weui-label"
  }, [_vm._v("联系地址")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-cell__hd"
  }, [_c('div', {
    staticClass: "weui-label"
  }, [_vm._v("其他信息")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-03f236af", esExports)
  }
}

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(10);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      acticle: {},
      contact: {
        Name: '',
        Wechat: '',
        Phone: '',
        Mail: '',
        Address: '',
        Remark: ''
      },

      showTopTips: false,
      time: '09:01',
      date: '2015-09-01',
      countryCodes: ['+86', '+80', '+84', '+87'],
      countryCodesIndex: 0,
      countries: ['四川', '中国-香港', '中国-澳门', '中国-台湾'],
      countryIndex: 0,
      accounts: ['微信号', 'QQ', 'Email'],
      accountsIndex: 0,
      radioItems: [{ name: 'cell standard', value: '0' }, { name: 'cell standard', value: '1', checked: true }],
      checkboxItems: [{ name: 'standard is dealt for u.', value: '0', checked: true }, { name: 'standard is dealicient for u.', value: '1', checked: false }],

      isAgree: false
    };
  },

  onLoad: function onLoad(option) {
    console.log('===contact ======:', option.data);
    var article = JSON.parse(option.data);
    this.article = article;
    console.log('===contact ======:', this.article);
  },
  methods: {
    nameInput: function nameInput(e) {
      this.contact.Name = e.mp.detail.value;
    },
    wechatInput: function wechatInput(e) {
      this.contact.Wechat = e.mp.detail.value;
    },
    mailInput: function mailInput(e) {
      this.contact.Mail = e.mp.detail.value;
    },
    phoneInput: function phoneInput(e) {
      this.contact.Phone = e.mp.detail.value;
    },
    addressInput: function addressInput(e) {
      this.contact.Address = e.mp.detail.value;
    },
    remarkInput: function remarkInput(e) {
      this.contact.Remak = e.mp.detail.value;
    },
    showTopTipsFun: function showTopTipsFun() {
      var _this2 = this;

      this.showTopTips = true;
      setTimeout(function () {
        _this2.showTopTips = false;
      }, 2000);
    },
    preview: function preview() {
      console.log('json=: ', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(this.contact));
      wx.navigateTo({
        url: '../preview/main?data=' + __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(this.article)
        // url: '../preview/main?data=' + JSON.stringify(this.contact)
      });
    },
    bindCountryChange: function bindCountryChange(e) {
      this.countryIndex = e.mp.detail.value;
    },
    bindAccountChange: function bindAccountChange(e) {
      this.accountsIndex = e.mp.detail.value;
    },
    bindCountryCodeChange: function bindCountryCodeChange(e) {
      this.countryCodesIndex = e.mp.detail.value;
    },
    bindAgreeChange: function bindAgreeChange(e) {
      this.isAgree = !this.isAgree;
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
          _this.contact.imageFiles = _this.contact.imageFiles.concat(res.tempFilePaths);
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
        urls: this.contact.imageFiles // 需要预览的图片http链接列表
      });
    },
    submit: function submit() {
      console.log(this.contact);
      var vm = this;
      wx.request({
        url: 'https://www.srehub.com/lastest/wechat/small/contact',
        method: 'POST',
        data: {
          Name: this.contact.Name,
          Address: this.contact.Address,
          Mail: this.contact.Mail,
          Wechat: this.contact.Wechat,
          Phone: this.contact.Phone,
          Remark: this.contact.Remark
        },
        header: {
          'content-type': 'application/json'
        },
        success: function success(res) {
          console.log(res.data);
          vm.items = res.data;
          vm.preview();
        }
      });
    }
  }
});

/***/ }),

/***/ 76:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[31]);
//# sourceMappingURL=main.js.map