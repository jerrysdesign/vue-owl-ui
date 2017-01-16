webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _markItDown = __webpack_require__(8);

var _markItDown2 = _interopRequireDefault(_markItDown);

var _cashDom = __webpack_require__(51);

var _cashDom2 = _interopRequireDefault(_cashDom);

var _markdown = __webpack_require__(59);

var _markdown2 = _interopRequireDefault(_markdown);

var _clipboard = __webpack_require__(53);

var _clipboard2 = _interopRequireDefault(_clipboard);

var _lodash = __webpack_require__(87);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Markdown = {
  name: 'Markdown',
  props: {
    src: {
      type: String,
      default: ''
    },
    opts: {}
  },

  created: function created() {
    var opts = this.opts;


    this.md = new _markItDown2.default(_extends({
      hasHeadHash: false
    }, opts));
  },
  mounted: function mounted() {
    var md = this.md,
        $el = this.$el,
        $refs = this.$refs;

    md.mountToTextArea($refs.textarea);

    var cpSvg = '<svg width="16" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1528"><path d="M917.980361 1009.145687H434.961416c-37.918611 0-68.768223-30.845519-68.768223-68.75799v-60.047608H112.948445c-37.918611 0-68.768223-30.844495-68.768223-68.756966V135.336338c0-37.913495 30.848589-68.75799 68.768223-68.75799h547.421744c37.919634 0 68.768223 30.844495 68.768223 68.75799v154.199964a111.745037 111.745037 0 0 1 12.106736 10.44591l205.293643 205.304899c22.920012 22.907733 40.20877 64.60132 40.20877 96.978729v338.12288c0 37.912471-30.848589 68.756967-68.7672 68.756967zM406.036643 839.407841h1.088798v100.979856c0 15.343453 12.487406 27.825742 27.835975 27.825742h483.018945c15.34857 0 27.834952-12.482289 27.834952-27.825742V622.73094H765.226329c-37.918611 0-68.7672-30.845519-68.7672-68.75799V346.701257H406.036643v492.706584zM112.948445 107.510596c-15.34857 0-27.835975 12.482289-27.835975 27.825742v676.246785c0 15.34243 12.487406 27.824719 27.835975 27.824718h252.15595V305.769009h323.101769V135.336338c0-15.343453-12.487406-27.825742-27.835975-27.825742H112.948445zM737.391377 354.015849v199.957101c0 15.343453 12.486382 27.825742 27.834952 27.825742h177.615256c-4.679579-17.781992-14.360056-36.68962-25.241894-47.564295L737.391377 354.015849zM563.767014 236.31517H209.552643v-40.932248h354.213348v40.932248z" fill="#3E3A39" p-id="1529"></path></svg> ';
    (0, _cashDom2.default)($el).find('.mark-it-down pre').each(function (pre) {
      var copy = document.createElement('div');
      copy.appendChild(pre.cloneNode(true));
      copy.classList.add(_markdown2.default.cp);

      (0, _cashDom2.default)(copy).append('<div class="' + _markdown2.default.cpBoard + '" data-clipboard-text="' + (0, _lodash2.default)(pre.textContent) + '"> ' + cpSvg + '</div> ');
      pre.parentNode.replaceChild(copy, pre);
    });

    (0, _cashDom2.default)($el).find('.mark-it-down .' + _markdown2.default.cp).on('mouseleave', function (ev) {
      var currentTarget = ev.currentTarget;

      currentTarget.querySelector('.' + _markdown2.default.cpBoard).innerHTML = cpSvg;
    });

    new _clipboard2.default('.' + _markdown2.default.cpBoard).on('success', function (ev) {
      var trigger = ev.trigger;

      trigger.innerHTML = 'Copied';
    });
  },
  render: function render(h) {
    var src = this.src;


    return h(
      'div',
      {
        attrs: { 'data-markdown': true }
      },
      [h(
        'textarea',
        { ref: 'textarea', attrs: { hidden: true }
        },
        [src]
      )]
    );
  }
};

module.exports = Markdown;

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

__webpack_require__(4);

var Icon = {
  name: 'Icon',

  props: {
    typ: {
      default: '',
      required: true,
      type: String
    },

    size: {
      type: [String, Number],
      default: '20x20'
    }
  },

  computed: {
    cSize: function cSize() {
      var size = this.size;

      var width = void 0,
          height = void 0;

      if (size.includes && size.includes('x')) {
        ;
        var _size$split = size.split('x');

        var _size$split2 = _slicedToArray(_size$split, 2);

        width = _size$split2[0];
        height = _size$split2[1];
      } else {
        width = height = size;
      }

      return {
        width: width, height: height
      };
    }
  },

  render: function render(h) {
    var typ = this.typ,
        cSize = this.cSize;


    return h(
      'svg',
      {
        attrs: { width: cSize.width, height: cSize.height },
        domProps: {
          'innerHTML': '<use xlink:href="#owl-icons-' + typ + '"></use>'
        }
      },
      []
    );
  }
};

module.exports = Icon;

/***/ },
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports) {

var nestRE = /^(attrs|props|on|nativeOn|class|style|hook)$/

module.exports = function mergeJSXProps (objs) {
  return objs.reduce(function (a, b) {
    var aa, bb, key, nestedKey, temp
    for (key in b) {
      aa = a[key]
      bb = b[key]
      if (aa && nestRE.test(key)) {
        // normalize class
        if (key === 'class') {
          if (typeof aa === 'string') {
            temp = aa
            a[key] = aa = {}
            aa[temp] = true
          }
          if (typeof bb === 'string') {
            temp = bb
            b[key] = bb = {}
            bb[temp] = true
          }
        }
        if (key === 'on' || key === 'nativeOn' || key === 'hook') {
          // merge functions
          for (nestedKey in bb) {
            aa[nestedKey] = mergeFn(aa[nestedKey], bb[nestedKey])
          }
        } else if (Array.isArray(aa)) {
          a[key] = aa.concat(bb)
        } else if (Array.isArray(bb)) {
          a[key] = [aa].concat(bb)
        } else {
          for (nestedKey in bb) {
            aa[nestedKey] = bb[nestedKey]
          }
        }
      } else {
        a[key] = b[key]
      }
    }
    return a
  }, {})
}

function mergeFn (a, b) {
  return function () {
    a.apply(this, arguments)
    b.apply(this, arguments)
  }
}


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _babelHelperVueJsxMergeProps = __webpack_require__(6);

var _babelHelperVueJsxMergeProps2 = _interopRequireDefault(_babelHelperVueJsxMergeProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Link = {
  name: 'Link',
  functional: true,
  render: function render(h, _ref) {
    var data = _ref.data,
        children = _ref.children;

    return h(
      'router-link',
      (0, _babelHelperVueJsxMergeProps2.default)([{
        attrs: { exact: true }
      }, data]),
      [children]
    );
  }
};

module.exports = Link;

/***/ },
/* 8 */,
/* 9 */,
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var Logo = {
  name: 'Logo',
  props: {
    size: {
      type: [Number, String],
      default: 20
    }
  },

  computed: {
    sSize: function sSize() {
      var size = this.size;

      var width = void 0,
          height = void 0;

      if (size.includes && size.includes('x')) {
        ;
        var _size$split = size.split('x');

        var _size$split2 = _slicedToArray(_size$split, 2);

        width = _size$split2[0];
        height = _size$split2[1];
      } else {
        width = height = size;
      }

      return {
        width: width, height: height
      };
    }
  },

  render: function render(h) {
    var sSize = this.sSize;

    return h(
      'svg',
      {
        attrs: { width: sSize.width, height: sSize.height, version: '1.0', xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 128.000000 128.000000', preserveAspectRatio: 'xMidYMid meet' }
      },
      [h(
        'g',
        {
          attrs: { transform: 'translate(0.000000,128.000000) scale(0.050000,-0.050000)', stroke: 'none' }
        },
        [h(
          'path',
          {
            attrs: { d: 'M1140 2537 c-1391 -109 -1526 -2211 -160 -2496 1343 -281 2157 1416 1081 2252 -111 85 -117 95 -107 159 l11 68 -82 0 c-60 0 -83 -8 -83 -30 0 -37 -8 -37 -116 1 -122 42 -346 61 -544 46z m344 -239 c212 -45 301 -96 289 -166 -6 -34 -16 -143 -23 -242 l-11 -180 285 -144 286 -143 6 -112 c50 -922 -1107 -1421 -1766 -761 -721 720 -60 1956 934 1748z m700 -500 c107 -184 100 -190 -104 -83 l-182 95 11 70 c6 39 11 106 12 150 l0 80 106 -112 c58 -62 129 -152 157 -200z' }
          },
          []
        ), h(
          'path',
          {
            attrs: { d: 'M930 2172 c-435 -205 -329 -839 140 -839 345 0 591 357 452 657 -98 212 -359 292 -592 182z m382 -114 c84 -51 136 -171 123 -287 -46 -412 -655 -430 -655 -20 0 275 298 447 532 307z' }
          },
          []
        ), h(
          'path',
          {
            attrs: { d: 'M1021 1856 c-49 -52 -52 -92 -10 -152 44 -63 135 -59 188 9 97 123 -71 258 -178 143z' }
          },
          []
        ), h(
          'path',
          {
            attrs: { d: 'M1670 1541 c-524 -127 -499 -890 30 -887 546 3 684 765 160 884 -101 24 -106 24 -190 3z m290 -180 c271 -212 51 -604 -327 -584 -300 16 -279 568 24 635 29 6 62 14 73 18 49 16 166 -19 230 -69z' }
          },
          []
        ), h(
          'path',
          {
            attrs: { d: 'M1653 1183 c-69 -76 -17 -203 84 -203 57 0 123 68 123 127 0 99 -140 151 -207 76z' }
          },
          []
        ), h(
          'path',
          {
            attrs: { d: 'M882 1077 c-50 -148 -53 -143 107 -153 l128 -8 11 67 c27 165 29 160 -68 189 -131 40 -133 39 -178 -95z' }
          },
          []
        )]
      )]
    );
  }
};

module.exports = Logo;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _loading = __webpack_require__(12);

var _loading2 = _interopRequireDefault(_loading);

var _icon = __webpack_require__(2);

var _icon2 = _interopRequireDefault(_icon);

var _input = __webpack_require__(75);

var _input2 = _interopRequireDefault(_input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Input = {
  props: {
    name: {
      type: String,
      default: 'input'
    },
    icon: {
      type: Array
    },
    status: {
      type: String,
      default: 'normal'
    },
    val: {
      type: [String, Number],
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    loading: {
      type: Boolean,
      default: false
    },
    password: {
      type: Boolean,
      default: false
    },
    x: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    }
  },

  data: function data() {
    return {
      pwdStatus: this.password,
      pwdFill: '#b8bdbf',
      pwdInput: this.password ? 'password' : 'text',
      showX: false,
      value: this.val
    };
  },


  watch: {
    val: function val() {
      this.value = this.val;
    }
  },

  methods: {
    handleIconClick: function handleIconClick(e) {
      var icon = this.icon,
          name = this.name;

      this.value = this.$refs[name].value = '';
      this.$parent.$emit('handleClickOnX', name);
      this.showX = false;
    },
    handleInput: function handleInput(e) {
      var name = this.name,
          x = this.x;

      this.value = this.$refs[name].value;
      this.showX = x && this.value && !this.loading ? true : false;
    },
    handlePwdStyle: function handlePwdStyle(e) {
      this.pwdStatus = !this.pwdStatus;
      this.pwdFill = this.pwdStatus ? '#b8bdbf' : '#8962d9';
      this.pwdInput = this.pwdStatus ? 'password' : 'text';
    }
  },

  render: function render(h) {
    var status = this.status,
        icon = this.icon,
        name = this.name,
        placeholder = this.placeholder,
        val = this.val,
        password = this.password,
        loading = this.loading,
        handlePwdStyle = this.handlePwdStyle,
        pwdFill = this.pwdFill,
        pwdInput = this.pwdInput,
        showX = this.showX,
        required = this.required,
        handleInput = this.handleInput,
        handleIconClick = this.handleIconClick;


    return h(
      'div',
      { 'class': [_input2.default.inputWrapper] },
      [h(
        _loading2.default,
        {
          attrs: { size: 10, show: loading },
          'class': [_input2.default.loadingPie] },
        []
      ), icon && !loading && !password && !showX ? h(
        _icon2.default,
        {
          attrs: { typ: icon[0], fill: icon[1] },
          'class': [_input2.default.icon] },
        []
      ) : '', password ? h(
        'span',
        {
          on: {
            'click': handlePwdStyle
          }
        },
        [h(
          _icon2.default,
          {
            attrs: { typ: 'eye', fill: pwdFill },
            'class': [_input2.default.specialIcon] },
          []
        )]
      ) : '', showX ? h(
        'span',
        {
          on: {
            'click': handleIconClick
          }
        },
        [h(
          _icon2.default,
          {
            attrs: { typ: 'x', fill: pwdFill },
            'class': [_input2.default.specialIcon] },
          []
        )]
      ) : '', required ? h(
        'span',
        { 'class': [_input2.default.mustFill] },
        ['*']
      ) : '', h(
        'input',
        { 'class': [_input2.default.input, _input2.default[status]], attrs: { type: pwdInput, placeholder: placeholder, value: val },
          ref: name, on: {
            'input': handleInput
          }
        },
        []
      )]
    );
  }
};

module.exports = Input;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _loading = __webpack_require__(78);

var _loading2 = _interopRequireDefault(_loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  props: {
    typ: {
      type: String,
      default: 'pie'
    },
    size: {
      type: [String, Number]
    },
    show: {
      type: Boolean,
      default: true
    }
  },

  computed: {
    style: function style() {
      var width = void 0,
          height = void 0;
      var size = this.size;
      var typ = this.typ,
          show = this.show;


      var style = {
        display: show ? 'block' : 'none'
      };

      switch (typ) {
        case 'pie':
          style.borderWidth = size + 'px';
          break;

        case 'bar':
          size = size || '100x10';
          var _size$split = size.split('x');

          var _size$split2 = _slicedToArray(_size$split, 2);

          width = _size$split2[0];
          height = _size$split2[1];

          style.width = width + 'px';
          style.height = height + 'px';
          break;
      }

      return style;
    }
  },

  render: function render(h) {
    var style = this.style,
        typ = this.typ;

    var type = 'loading' + typ;
    return h(
      'div',
      { 'class': _loading2.default[type], style: style },
      []
    );
  }
};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _app = __webpack_require__(14);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_app2.default.$mount('#app');

if (false) {
  module.hot.accept();
}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(5);

var _vue2 = _interopRequireDefault(_vue);

var _router = __webpack_require__(17);

var _router2 = _interopRequireDefault(_router);

var _app = __webpack_require__(56);

var _app2 = _interopRequireDefault(_app);

var _footer = __webpack_require__(15);

var _footer2 = _interopRequireDefault(_footer);

var _header = __webpack_require__(16);

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = new _vue2.default({
  router: _router2.default,

  mounted: function mounted() {},
  data: function data() {
    return {};
  },


  computed: {},

  render: function render(h) {
    var $route = this.$route;


    return h(
      'div',
      {
        attrs: { id: 'app', 'data-path': $route.path }
      },
      [h(
        _header2.default,
        null,
        []
      ), h(
        'keep-alive',
        null,
        [h(
          'router-view',
          { 'class': 'main' },
          []
        )]
      ), h(
        _footer2.default,
        null,
        []
      )]
    );
  }
});

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _cepaveLogo = __webpack_require__(222);

var _cepaveLogo2 = _interopRequireDefault(_cepaveLogo);

var _footer = __webpack_require__(57);

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = {
  name: 'Footer',
  render: function render(h) {
    var $slots = this.$slots;

    return h(
      'footer',
      null,
      [h(
        'div',
        { 'class': 'w1120' },
        [h(
          'div',
          { 'class': 'fbox -around' },
          [h(
            'div',
            null,
            [h(
              'a',
              {
                attrs: { target: '_blank', href: '//cepave.com/' }
              },
              [h(
                'img',
                { 'class': [_footer2.default.logo], attrs: { src: _cepaveLogo2.default }
                },
                []
              )]
            )]
          ), h(
            'div',
            null,
            [h(
              'ul',
              { 'class': 'fbox' },
              [h(
                'li',
                null,
                [h(
                  'a',
                  null,
                  [h(
                    'svg',
                    {
                      attrs: { name: 'twitter', fill: '#4AA0EB', viewBox: '0 0 1024 1024', version: '1.1', xmlns: 'http://www.w3.org/2000/svg', 'p-id': '2135' }
                    },
                    [h(
                      'path',
                      {
                        attrs: { d: 'M512.027093 93.146738c-245.645847 0-444.781543 199.17182-444.781543 444.781543 0 245.645847 199.135696 444.745418 444.781543 444.745418 245.645847 0 444.745418-199.099571 444.745418-444.745418C956.772512 292.318558 757.654878 93.146738 512.027093 93.146738zM736.070555 448.249484c0.234809 4.804544 0.32512 9.62715 0.32512 14.503942 0 148.128058-112.744219 318.906108-318.906108 318.906108-63.28993 0-122.226871-18.549874-171.825657-50.339336 8.778227 1.029545 17.682889 1.553349 26.732048 1.553349 52.524862 0 100.859295-17.917697 139.205334-47.973189-49.038858-0.921172-90.419346-33.342811-104.68848-77.866121 6.82751 1.336602 13.853703 2.004904 21.078581 2.004904 10.223202 0 20.121285-1.336602 29.531688-3.919496-51.296633-10.295451-89.931667-55.631559-89.931667-109.890392 0-0.487679 0-0.957296 0.018062-1.444976 15.099995 8.398921 32.385515 13.438273 50.772829 14.034325-30.091616-20.139347-49.869719-54.40333-49.869719-93.309297 0-20.536715 5.527032-39.809077 15.172243-56.354047 55.288378 67.805479 137.886794 112.437162 231.051594 117.097208-1.914593-8.182174-2.908013-16.761717-2.908013-25.539943 0-61.881079 50.176777-112.075918 112.09398-112.075918 32.241017 0 61.357275 13.618895 81.803679 35.383839 25.539943-5.003228 49.526538-14.359445 71.183109-27.201665-8.398921 26.190182-26.154058 48.153811-49.309791 62.007514 22.704179-2.709329 44.306563-8.742102 64.391724-17.646764C776.999488 412.703085 757.979998 432.445064 736.070555 448.249484z', 'p-id': '2136' }
                      },
                      []
                    )]
                  )]
                ), h(
                  'a',
                  {
                    attrs: { href: 'https://www.facebook.com/CepaveInc', target: '_blank' }
                  },
                  [h(
                    'svg',
                    {
                      attrs: { name: 'facebook', viewBox: '0 0 1024 1024', version: '1.1', xmlns: 'http://www.w3.org/2000/svg', 'p-id': '1531' }
                    },
                    [h(
                      'path',
                      {
                        attrs: { d: 'M613.76 948.423C811.881 902.352 959.5 724.687 959.5 512.544c0-247.147-200.353-447.5-447.5-447.5S64.5 265.396 64.5 512.544c0 236.578 183.582 430.277 416.059 446.413V647.463H422.5l0.91-117.424h57.149v-61.832c0-149.262 140.491-134.242 140.491-134.242h89.839l-0.91 107.935h-57.044c-47.378 0-39.175 40.364-39.175 40.364v47.762h95.641L690.69 647.462h-76.93v300.961z', fill: '#38569A', 'p-id': '1532' }
                      },
                      []
                    )]
                  )]
                )]
              ), h(
                'li',
                null,
                [h(
                  'a',
                  {
                    attrs: { href: '//github.com/Cepave', target: '_blank' }
                  },
                  ['Cepave Open Source']
                )]
              )]
            )]
          )]
        )]
      )]
    );
  }
};

module.exports = Footer;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _header = __webpack_require__(58);

var _header2 = _interopRequireDefault(_header);

var _logo = __webpack_require__(10);

var _logo2 = _interopRequireDefault(_logo);

var _link = __webpack_require__(7);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = {
  name: 'Header',
  render: function render(h) {
    var $slots = this.$slots;

    return h(
      'header',
      null,
      [h(
        'div',
        { 'class': 'w1120' },
        [h(
          'div',
          { 'class': 'fbox -around' },
          [h(
            'div',
            null,
            [h(
              'h1',
              null,
              [h(
                _link2.default,
                {
                  attrs: { to: '/' }
                },
                [h(
                  _logo2.default,
                  {
                    attrs: { fill: '#fff', size: 25 }
                  },
                  []
                ), ' OWL UI']
              ), h(
                'span',
                { 'class': [_header2.default.ver] },
                ['v', '0.5.1']
              )]
            )]
          ), h(
            'ul',
            null,
            [h(
              'li',
              null,
              [h(
                _link2.default,
                {
                  attrs: { to: '/' }
                },
                ['Docs']
              )]
            ), h(
              'li',
              null,
              [h(
                _link2.default,
                {
                  attrs: { to: '/components' }
                },
                ['Components']
              )]
            ), h(
              'li',
              null,
              [h(
                'a',
                {
                  attrs: { href: '//github.com/cepave-f2e/vue-owl-ui', target: '_blank' }
                },
                ['GitHub']
              )]
            ), h(
              'li',
              null,
              [h(
                'a',
                {
                  attrs: { href: '//github.com/cepave-f2e', target: '_blank' }
                },
                ['Cepave F2E']
              )]
            )]
          )]
        )]
      )]
    );
  }
};

module.exports = Header;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(5);

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = __webpack_require__(9);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);

module.exports = new _vueRouter2.default({
  mode: 'hash',
  scrollBehavior: function scrollBehavior() {
    return { y: 0 };
  },
  routes: [{ path: '/home', component: __webpack_require__(25) }, { path: '/components', component: __webpack_require__(21),
    children: [{ path: '', component: __webpack_require__(20) }, { path: 'loading', component: __webpack_require__(30) }, { path: 'select', component: __webpack_require__(33) }, { path: 'switch', component: __webpack_require__(34) }, { path: 'icons', component: __webpack_require__(26) }, { path: 'tip', component: __webpack_require__(36) }, { path: 'checkbox', component: __webpack_require__(19) }, { path: 'radio', component: __webpack_require__(32) }, { path: 'input', component: __webpack_require__(27) }, { path: 'button', component: __webpack_require__(18) }, { path: 'lightbox', component: __webpack_require__(29) }, { path: 'grid', component: __webpack_require__(24) }, { path: 'label', component: __webpack_require__(28) }, { path: 'dual-list', component: __webpack_require__(22) }, { path: 'tab', component: __webpack_require__(35) }, { path: 'page', component: __webpack_require__(31) }, { path: 'flex', component: __webpack_require__(23) }]
  }, { path: '*', redirect: '/home' }]
});

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _button = __webpack_require__(37);

var _button2 = _interopRequireDefault(_button);

var _icon = __webpack_require__(2);

var _icon2 = _interopRequireDefault(_icon);

var _markdown = __webpack_require__(0);

var _markdown2 = _interopRequireDefault(_markdown);

var _button3 = __webpack_require__(60);

var _button4 = _interopRequireDefault(_button3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonPage = {
  name: 'ButtonPage',
  data: function data() {
    return {
      options: [{ value: 'winnie', title: 'Winnie The Pooh' }, { value: 'piglet', title: 'Piglet' }, { value: 'tigger', title: 'Tigger', selected: true }],
      buttonGroupData: {
        value: 'tigger',
        idx: 2
      }
    };
  },

  methods: {
    getButtonGroupData: function getButtonGroupData(data) {
      this.buttonGroupData = data;
    }
  },

  render: function render(h) {
    return h(
      'div',
      null,
      [h(
        _markdown2.default,
        {
          attrs: { src: __webpack_require__(202) }
        },
        []
      ), h(
        'div',
        { 'class': [_button4.default.buttonWrapper] },
        [h(
          _button2.default,
          { 'class': [_button4.default.buttonIcon] },
          [h(
            _icon2.default,
            {
              attrs: { typ: 'plus', size: 16 }
            },
            []
          ), '\u65B0\u589E\u516C\u544A']
        ), h(
          _button2.default,
          {
            attrs: { status: 'primary' }
          },
          ['\u9001\u51FA']
        ), h(
          _button2.default,
          {
            attrs: { status: 'outline' }
          },
          ['\u641C\u5C0B']
        ), h(
          _button2.default,
          {
            attrs: { status: 'primaryOutline' }
          },
          ['\u95DC\u9589']
        )]
      ), h(
        'span',
        null,
        ['Disabled buttons']
      ), h(
        'div',
        { 'class': [_button4.default.buttonWrapper] },
        [h(
          _button2.default,
          {
            attrs: { disabled: true }
          },
          ['Submit']
        ), h(
          _button2.default,
          {
            attrs: { status: 'primary', disabled: true }
          },
          ['Submit']
        ), h(
          _button2.default,
          {
            attrs: { status: 'primaryOutline', disabled: true }
          },
          ['Submit']
        )]
      ), h(
        'span',
        null,
        ['Width-50% button']
      ), h(
        'div',
        { 'class': [_button4.default.buttonWrapper] },
        [h(
          _button2.default,
          {
            attrs: { status: 'primary' },
            'class': [_button4.default.buttonBig] },
          ['Submit']
        )]
      ), h(
        'span',
        null,
        ['Button Group']
      ), h(
        'div',
        { 'class': [_button4.default.buttonGroupWrapper] },
        [h(
          _button2.default.Group,
          {
            attrs: { options: this.options },
            'class': [_button4.default.buttonGroup], on: {
              'change': this.getButtonGroupData
            }
          },
          []
        ), h(
          'code',
          null,
          [JSON.stringify(this.buttonGroupData)]
        )]
      )]
    );
  }
};

module.exports = ButtonPage;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _checkbox = __webpack_require__(38);

var _checkbox2 = _interopRequireDefault(_checkbox);

var _markdown = __webpack_require__(0);

var _markdown2 = _interopRequireDefault(_markdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CheckboxPage = {
  name: 'CheckboxPage',
  data: function data() {
    return {
      checkedDatum: { 1: true, 2: true, all: true }
    };
  },

  methods: {
    getCheckedDatum: function getCheckedDatum(data) {
      this.checkedDatum = data;
    }
  },
  render: function render(h) {
    var getCheckedDatum = this.getCheckedDatum,
        checkedDatum = this.checkedDatum;

    return h(
      'div',
      null,
      [h(
        _markdown2.default,
        {
          attrs: { src: __webpack_require__(203) }
        },
        []
      ), h(
        'div',
        null,
        [h(
          'code',
          null,
          [JSON.stringify(checkedDatum)]
        )]
      ), h(
        'br',
        null,
        []
      ), h(
        'div',
        null,
        [h(
          _checkbox2.default.Group,
          {
            on: {
              'change': getCheckedDatum
            }
          },
          [h(
            _checkbox2.default,
            {
              attrs: { name: 'all', checked: true }
            },
            ['All']
          ), h(
            _checkbox2.default,
            {
              attrs: { name: '1' }
            },
            ['Pikachu']
          ), h(
            _checkbox2.default,
            {
              attrs: { name: '2' }
            },
            ['Eevee']
          )]
        )]
      )]
    );
  }
};

module.exports = CheckboxPage;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _markdown = __webpack_require__(0);

var _markdown2 = _interopRequireDefault(_markdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CompnentHomePage = {
  name: 'CompnentHomePage',
  data: function data() {
    return {
      loading: true,
      owlSrc: ''
    };
  },


  methods: {},

  mounted: function mounted() {},
  render: function render(h) {
    return h(
      'div',
      null,
      [h(
        _markdown2.default,
        {
          attrs: { src: __webpack_require__(204) }
        },
        []
      )]
    );
  }
};

module.exports = CompnentHomePage;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _markdown = __webpack_require__(0);

var _markdown2 = _interopRequireDefault(_markdown);

var _link = __webpack_require__(7);

var _link2 = _interopRequireDefault(_link);

var _components = __webpack_require__(61);

var _components2 = _interopRequireDefault(_components);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ComponentPage = {
  name: 'ComponentPage',
  render: function render(h) {
    var $route = this.$route;

    return h(
      'div',
      { 'class': _components2.default.main },
      [h(
        'div',
        { 'class': ['w1120', 'fbox'] },
        [h(
          'aside',
          { 'class': [_components2.default.side] },
          [h(
            'div',
            {
              attrs: { id: 'sticky-menu' }
            },
            [h(
              'dl',
              null,
              [h(
                'dt',
                null,
                ['Layout']
              ), h(
                'dd',
                null,
                [h(
                  _link2.default,
                  {
                    attrs: { to: '/components/flex' }
                  },
                  ['Flex (Grid System)']
                )]
              )]
            ), h(
              'dl',
              null,
              [h(
                'dt',
                null,
                ['General']
              ), h(
                'dd',
                null,
                [h(
                  _link2.default,
                  {
                    attrs: { to: '/components/icons' }
                  },
                  ['Icon']
                )]
              ), h(
                'dd',
                null,
                [h(
                  _link2.default,
                  {
                    attrs: { to: '/components/loading' }
                  },
                  ['Loading']
                )]
              ), h(
                'dd',
                null,
                [h(
                  _link2.default,
                  {
                    attrs: { to: '/components/tip' }
                  },
                  ['Tip']
                )]
              ), h(
                'dd',
                null,
                [h(
                  _link2.default,
                  {
                    attrs: { to: '/components/lightbox' }
                  },
                  ['LightBox']
                )]
              ), h(
                'dd',
                null,
                [h(
                  _link2.default,
                  {
                    attrs: { to: '/components/label' }
                  },
                  ['Label']
                )]
              ), h(
                'dd',
                null,
                [h(
                  _link2.default,
                  {
                    attrs: { to: '/components/dual-list' }
                  },
                  ['DualList']
                )]
              ), h(
                'dd',
                null,
                [h(
                  _link2.default,
                  {
                    attrs: { to: '/components/tab' }
                  },
                  ['Tab']
                )]
              ), h(
                'dd',
                null,
                [h(
                  _link2.default,
                  {
                    attrs: { to: '/components/page' }
                  },
                  ['Page']
                )]
              )]
            ), h(
              'dl',
              null,
              [h(
                'dt',
                null,
                [' Form ']
              ), h(
                'dd',
                null,
                [h(
                  _link2.default,
                  {
                    attrs: { to: '/components/select' }
                  },
                  ['Select']
                )]
              ), h(
                'dd',
                null,
                [h(
                  _link2.default,
                  {
                    attrs: { to: '/components/checkbox' }
                  },
                  ['Checkbox']
                )]
              ), h(
                'dd',
                null,
                [h(
                  _link2.default,
                  {
                    attrs: { to: '/components/switch' }
                  },
                  ['Switch']
                )]
              ), h(
                'dd',
                null,
                [h(
                  _link2.default,
                  {
                    attrs: { to: '/components/radio' }
                  },
                  ['Radio']
                )]
              ), h(
                'dd',
                null,
                [h(
                  _link2.default,
                  {
                    attrs: { to: '/components/button' }
                  },
                  ['Button']
                )]
              ), h(
                'dd',
                null,
                [h(
                  _link2.default,
                  {
                    attrs: { to: '/components/input' }
                  },
                  ['Input']
                )]
              )]
            )]
          )]
        ), h(
          'div',
          { 'class': [_components2.default.view] },
          [h(
            'router-view',
            null,
            []
          )]
        )]
      )]
    );
  }
};

module.exports = ComponentPage;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _dualList = __webpack_require__(39);

var _dualList2 = _interopRequireDefault(_dualList);

var _markdown = __webpack_require__(0);

var _markdown2 = _interopRequireDefault(_markdown);

var _dualList3 = __webpack_require__(62);

var _dualList4 = _interopRequireDefault(_dualList3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DualListPage = {
  name: 'DualListPage',

  data: function data() {
    return {
      output: {
        10: { name: 'Hippopotmonstrosesquipadaliophobiahipo', id: '20' }, 11: { name: 'Abra', id: '21' },
        12: { name: 'Doduo', id: '22' }, 13: { name: 'Dodrio', id: '23' }
      },
      labels: [{ name: 'Squirtle', id: '1' }, { name: 'Caterpie', id: '2' }, { name: 'Raticate', id: '3' }, { name: 'Fearow', id: '4' }, { name: 'Clefairy', id: '5' }, { name: 'Venonat', id: '6' }, { name: 'Psyduck', id: '7' }, { name: 'Pikachu', id: '8' }, { name: 'Vulpix', id: '9' }, { name: 'Raichu', id: '10' }],
      selectedLabel: [{ name: 'Hippopotmonstrosesquipadaliophobiahipo', id: '20' }, { name: 'Abra', id: '21' }, { name: 'Doduo', id: '22' }, { name: 'Dodrio', id: '23' }]
    };
  },


  methods: {
    getDualData: function getDualData(data) {
      this.output = Object.assign({}, data);
    },
    getInputValue: function getInputValue(data) {}
  },

  mounted: function mounted() {
    var _this = this;

    window.setTimeout(function () {
      _this.labels = [{ name: 'Squirtle', id: '1' }, { name: 'Caterpie', id: '2' }, { name: 'Raticate', id: '3' }, { name: 'Fearow', id: '4' }, { name: 'Clefairy', id: '5' }, { name: 'Venonat', id: '6' }];
    }, 6000);
  },
  render: function render(h) {
    return h(
      'div',
      null,
      [h(
        _markdown2.default,
        {
          attrs: { src: __webpack_require__(205) }
        },
        []
      ), h(
        _dualList2.default,
        {
          attrs: { items: this.labels, selectedItems: this.selectedLabel, displayKey: 'name', caseInsensitive: true },
          'class': [_dualList4.default.dualGroup], on: {
            'change': this.getDualData
          }
        },
        []
      ), h(
        'div',
        { 'class': [_dualList4.default.code] },
        [h(
          'pre',
          null,
          [h(
            'code',
            null,
            [JSON.stringify(this.output, null, 2)]
          )]
        )]
      )]
    );
  }
};

module.exports = DualListPage;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _flex = __webpack_require__(40);

var _flex2 = _interopRequireDefault(_flex);

var _markdown = __webpack_require__(0);

var _markdown2 = _interopRequireDefault(_markdown);

var _flex3 = __webpack_require__(63);

var _flex4 = _interopRequireDefault(_flex3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var FlexPage = {
  name: 'FlexPage',
  render: function render(h) {
    var $slots = this.$slots;

    return h(
      'div',
      null,
      [h(
        _markdown2.default,
        {
          attrs: { src: __webpack_require__(206) }
        },
        []
      ), h(
        'h2',
        null,
        ['Auto']
      ), h(
        _flex2.default,
        null,
        [h(
          _flex2.default.Col,
          {
            attrs: { size: 'auto' }
          },
          [h(
            'p',
            { 'class': [_flex4.default.p] },
            ['size="auto"']
          )]
        ), h(
          _flex2.default.Col,
          {
            attrs: { size: 'auto' }
          },
          [h(
            'p',
            { 'class': [_flex4.default.p] },
            ['size="auto"']
          )]
        ), h(
          _flex2.default.Col,
          {
            attrs: { size: 'auto' }
          },
          [h(
            'p',
            { 'class': [_flex4.default.p] },
            ['size="auto"']
          )]
        )]
      ), h(
        'h2',
        null,
        ['12 Grids']
      ), h(
        'div',
        { 'class': _flex4.default.boxs },
        [[].concat(_toConsumableArray(Array(6))).map(function (v, i) {
          var left = i + 1;
          var right = 12 - left;
          return h(
            _flex2.default,
            null,
            [h(
              _flex2.default.Col,
              {
                attrs: { size: left }
              },
              [h(
                'p',
                { 'class': [_flex4.default.p] },
                ['size="', left, '"']
              )]
            ), h(
              _flex2.default.Col,
              {
                attrs: { size: right }
              },
              [h(
                'p',
                { 'class': [_flex4.default.p] },
                ['size="', right, '"']
              )]
            )]
          );
        })]
      ), h(
        'h2',
        null,
        ['Offset']
      ), h(
        'div',
        { 'class': _flex4.default.boxs },
        [[].concat(_toConsumableArray(Array(6))).map(function (v, i) {
          var left = i + 1;
          var offset = 12 - 5 - left;
          return h(
            _flex2.default,
            null,
            [h(
              _flex2.default.Col,
              {
                attrs: { size: left }
              },
              [h(
                'p',
                { 'class': [_flex4.default.p] },
                ['size="', left, '"']
              )]
            ), h(
              _flex2.default.Col,
              {
                attrs: { size: 5, offset: offset }
              },
              [h(
                'p',
                { 'class': [_flex4.default.p] },
                ['size="5", offset="', offset, '"']
              )]
            )]
          );
        })]
      ), h(
        'h2',
        null,
        ['Split']
      ), h(
        _flex2.default,
        {
          attrs: { split: true }
        },
        [h(
          _flex2.default.Col,
          null,
          [h(
            'p',
            { 'class': [_flex4.default.p] },
            ['Left']
          )]
        ), h(
          _flex2.default.Col,
          null,
          [h(
            'p',
            { 'class': [_flex4.default.p] },
            ['Right']
          )]
        )]
      ), h(
        'h2',
        null,
        ['Mid']
      ), h(
        _flex2.default,
        {
          attrs: { mid: true },
          'class': [_flex4.default.midContent] },
        ['Mid Content']
      ), h(
        'h2',
        null,
        ['Social Example']
      ), h(
        _flex2.default,
        { 'class': [_flex4.default.social], attrs: { margin: 12 }
        },
        [h(
          _flex2.default.Col,
          null,
          [h(
            'div',
            { 'class': [_flex4.default.avatar] },
            [h(
              _flex2.default,
              {
                attrs: { mid: true }
              },
              ['avatar ', h(
                'br',
                null,
                []
              ), ' 76 x 76']
            )]
          )]
        ), h(
          _flex2.default.Col,
          {
            attrs: { size: 'auto' }
          },
          [h(
            'p',
            null,
            ['Cepave @cepave said:']
          ), h(
            'p',
            null,
            ['OWL UI is No.1. :)']
          )]
        )]
      )]
    );
  }
};

module.exports = FlexPage;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _grid = __webpack_require__(41);

var _grid2 = _interopRequireDefault(_grid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GridPage = {
  name: 'GridPage',
  data: function data() {
    return {
      gridData: {
        heads: [{
          col: 'item 1',
          sort: -1,
          width: '40%',
          render: function render(h, head) {
            return h(
              'b',
              null,
              [head.col]
            );
          }
        }, {
          width: '60%',
          col: 'item 2'
        }],
        rowsRender: function rowsRender(h, _ref) {
          var row = _ref.row,
              index = _ref.index;

          return [h(
            _grid2.default.Col,
            null,
            [row[0].col]
          ), h(
            _grid2.default.Col,
            null,
            [row[1].col]
          )];
        },


        rows: [[{
          col: 11111111
        }, {
          col: 222222222
        }], [{
          col: 4444
        }, {
          col: 33333
        }]]
      }
    };
  },
  render: function render(h) {
    var $slots = this.$slots,
        gridData = this.gridData;

    var props = _extends({}, gridData);

    return h(
      'div',
      null,
      [$slots.default, h(
        _grid2.default,
        { props: props },
        []
      )]
    );
  }
};

module.exports = GridPage;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _home = __webpack_require__(64);

var _home2 = _interopRequireDefault(_home);

var _logo = __webpack_require__(10);

var _logo2 = _interopRequireDefault(_logo);

var _markdown = __webpack_require__(0);

var _markdown2 = _interopRequireDefault(_markdown);

var _link = __webpack_require__(7);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = {
  name: 'Home',

  render: function render(h) {
    return h(
      'div',
      null,
      [h(
        'section',
        { 'class': [_home2.default.des] },
        [h(
          'div',
          { 'class': 'w1120' },
          [h(
            'div',
            { 'class': 'fbox -around' },
            [h(
              'div',
              null,
              [h(
                'h2',
                null,
                ['Component Design System']
              ), h(
                'p',
                null,
                ['OWL UI is a Component Design System based on VueJS 2, used by Cepave to run in monitoring system of OWL Light.']
              ), h(
                'p',
                { 'class': [_home2.default.badges] },
                [h(
                  'a',
                  {
                    attrs: { href: 'https://travis-ci.org/cepave-f2e/vue-owl-ui', alt: 'Build Status', target: '_blank' }
                  },
                  [h(
                    'img',
                    {
                      attrs: { src: 'https://img.shields.io/travis/cepave-f2e/vue-owl-ui/dev.svg' }
                    },
                    []
                  )]
                ), h(
                  'a',
                  {
                    attrs: { href: 'https://codecov.io/gh/cepave-f2e/vue-owl-ui', alt: 'Coverage', target: '_blank' }
                  },
                  [h(
                    'img',
                    {
                      attrs: { src: 'https://img.shields.io/codecov/c/github/cepave-f2e/vue-owl-ui/dev.svg' }
                    },
                    []
                  )]
                ), h(
                  'a',
                  {
                    attrs: { href: '//www.bithound.io/github/cepave-f2e/vue-owl-ui', alt: 'BitHound', target: '_blank' }
                  },
                  [h(
                    'img',
                    {
                      attrs: { src: '//www.bithound.io/github/cepave-f2e/vue-owl-ui/badges/score.svg' }
                    },
                    []
                  )]
                ), h(
                  'img',
                  {
                    attrs: { src: '//img.shields.io/github/license/cepave-f2e/vue-owl-ui.svg' }
                  },
                  []
                ), h(
                  'a',
                  {
                    attrs: { href: '//github.com/cepave-f2e/vue-owl-ui', target: '_new' }
                  },
                  [h(
                    'img',
                    {
                      attrs: { src: 'https://img.shields.io/github/stars/cepave-f2e/vue-owl-ui.svg?style=social&label=Stars \u2605' }
                    },
                    []
                  )]
                )]
              ), h(
                _link2.default,
                {
                  attrs: { to: '/components' },
                  'class': 'btn' },
                ['COMPONENTS']
              ), h(
                'a',
                { 'class': 'btn', attrs: { href: '//github.com/cepave-f2e/owl-light', target: '_blank' }
                },
                ['OWL LIGHT']
              )]
            ), h(
              'div',
              null,
              [h(
                _logo2.default,
                {
                  attrs: { size: 150, fill: '#fff' },
                  style: { marginTop: '32px' } },
                []
              )]
            )]
          )]
        )]
      ), h(
        'section',
        { 'class': [_home2.default.points] },
        [h(
          'div',
          { 'class': 'w1120' },
          [h(
            'div',
            { 'class': 'fbox -sb' },
            [h(
              'div',
              { 'class': [_home2.default.point] },
              [h(
                'div',
                { 'class': [_home2.default.img] },
                [h(
                  'svg',
                  {
                    attrs: { viewBox: '0 0 1025 1024', version: '1.1', xmlns: 'http://www.w3.org/2000/svg', 'p-id': '1147' }
                  },
                  [h(
                    'path',
                    {
                      attrs: { d: 'M6.826667 79.189333C16.384 95.232 62.464 175.445333 75.776 199.68c6.144 11.264 13.994667 24.234667 17.066667 29.013333 3.413333 4.778667 11.946667 19.114667 19.456 32.426667 18.432 32.085333 66.901333 116.736 75.434666 131.413333 4.096 6.485333 9.216 15.701333 11.946667 20.48 2.389333 4.778667 17.066667 30.037333 32.426667 55.978667 15.36 25.941333 27.989333 47.786667 27.989333 48.469333 0 0.682667 38.570667 67.242667 44.373333 76.458667 1.706667 2.730667 11.264 18.773333 21.162667 35.84 9.898667 16.725333 19.797333 33.450667 21.504 36.522667 2.048 3.072 6.826667 11.605333 10.581333 18.773333 14.677333 25.941333 21.504 38.570667 61.781334 106.837333 22.528 38.570667 46.08 79.189333 52.565333 90.453334 6.144 11.264 15.018667 26.624 19.456 34.133333 4.096 7.509333 10.24 18.773333 13.312 24.917333 3.072 5.802667 6.826667 10.922667 7.850667 10.922667 1.024 0 4.778667-5.12 7.850666-11.264 3.072-5.802667 9.898667-18.773333 15.36-27.989333 5.461333-9.557333 17.066667-30.037333 26.282667-46.08 8.874667-16.042667 31.402667-54.272 49.493333-85.333334 31.744-53.589333 39.594667-66.901333 55.978667-96.597333 3.754667-7.168 8.874667-15.701333 10.581333-18.773333 2.048-3.072 11.605333-19.797333 21.504-36.522667 9.898667-17.066667 19.456-33.109333 21.162667-35.84 7.509333-11.605333 44.373333-75.776 44.373333-77.141333 0-0.682667 6.144-11.264 13.653334-23.552 7.509333-12.288 13.653333-22.869333 13.653333-23.552 0-1.024 7.509333-13.653333 16.384-28.330667 8.874667-14.677333 17.408-29.013333 18.773333-31.744 1.365333-2.730667 4.437333-8.192 6.826667-11.946667s18.432-32.085333 36.181333-63.146666c17.749333-31.061333 40.277333-69.290667 49.834667-85.333334 9.557333-16.042667 18.432-31.402667 19.797333-34.133333 1.365333-2.730667 5.802667-10.581333 9.557334-17.066667 4.096-6.485333 19.456-33.450667 34.474666-59.733333 15.018667-26.282667 30.378667-52.906667 34.133334-59.050667l6.826666-10.922666H630.442667l-17.066667 30.037333c-15.018667 26.624-53.589333 92.501333-80.896 138.922667-5.461333 9.216-11.605333 21.162667-13.994667 26.282666-2.048 5.461333-4.778667 9.557333-5.802666 9.557334-1.024 0-3.754667-4.096-5.802667-9.557334-2.389333-5.12-8.533333-17.066667-13.994667-26.282666-27.306667-46.421333-65.877333-112.298667-80.896-138.922667l-17.066666-30.037333H0l6.826667 10.922666zM249.856 145.066667c19.456 33.792 56.32 97.621333 81.92 141.653333 25.6 44.032 76.117333 131.754667 112.64 194.56s66.901333 115.029333 67.584 116.053333c1.024 1.024 2.048 0 2.730667-1.706666 1.024-2.048 30.037333-52.565333 64.853333-112.64 35.157333-60.074667 88.746667-152.234667 119.125333-204.8 30.72-52.565333 59.392-102.4 64.170667-110.933334 4.778667-8.533333 18.432-32.085333 30.378667-52.224l21.504-36.864 96.597333-0.682666c52.906667-0.341333 96.256 0.341333 96.256 2.048 0 1.365333-11.946667 22.869333-26.282667 47.786666-14.336 24.576-45.738667 78.848-69.632 120.149334-23.893333 41.301333-53.248 91.818667-65.536 112.64-11.946667 20.48-39.594667 68.266667-61.098666 105.813333-21.845333 37.546667-50.517333 87.381333-64.512 110.933333-13.653333 23.552-36.181333 62.464-50.176 87.04-13.994667 24.234667-30.378667 52.906667-36.522667 63.146667-6.144 10.24-31.061333 52.565333-54.954667 93.866667-23.893333 41.301333-48.128 83.285333-53.930666 92.842666-5.461333 9.898667-11.264 18.090667-12.629334 18.090667-2.048 0-53.930667-87.722667-80.554666-135.850667-4.778667-8.874667-9.898667-17.749333-11.264-19.456-1.365333-2.048-5.802667-8.874667-9.557334-15.36-3.413333-6.485333-20.821333-36.522667-38.229333-66.56s-43.349333-74.752-57.344-98.986666c-14.336-24.576-39.253333-67.584-55.637333-95.573334-16.384-28.330667-42.666667-73.386667-58.368-100.693333-15.36-26.965333-32.426667-56.32-37.205334-64.853333-24.917333-42.666667-34.133333-58.709333-50.858666-87.04-9.557333-17.066667-22.528-39.253333-28.330667-49.493334-5.461333-10.24-14.336-24.917333-19.114667-32.426666-4.778667-7.509333-12.288-20.48-16.725333-29.013334-8.874667-17.066667-12.629333-23.552-23.893333-41.301333-4.096-6.826667-7.509333-13.653333-7.509334-15.36s40.618667-2.730667 92.16-2.389333c67.925333 0.341333 92.16-0.341333 92.16-3.413334 0-8.533333 14.336 12.288 47.786667 70.997334z m151.893333-47.786667c6.485333 10.24 11.946667 19.114667 11.946667 20.138667 0 1.024 5.802667 11.605333 12.970667 23.210666 7.168 11.946667 13.994667 23.893333 15.36 26.624 1.365333 2.730667 6.144 11.264 10.581333 18.773334 4.778667 7.509333 17.749333 30.037333 29.013333 49.834666 24.576 43.349333 29.013333 47.786667 37.546667 38.570667 3.754667-3.413333 20.821333-31.744 38.912-62.805333 17.749333-31.061333 41.984-73.386667 53.930667-93.866667l21.845333-37.546667 86.357333-1.024c47.104-0.341333 86.016 0.341333 86.016 2.048 0 1.365333-4.437333 9.898667-10.24 18.773334-5.461333 8.874667-10.24 17.066667-10.24 18.090666 0 1.024-6.826667 12.629333-15.36 25.6s-15.36 24.576-15.36 25.258667c0 3.072-42.325333 75.093333-46.762666 79.530667-2.389333 2.389333-4.437333 5.802667-4.437334 7.509333 0 1.706667-10.24 20.48-22.528 41.642667-36.522667 62.122667-83.285333 143.018667-94.549333 163.157333-5.802667 10.24-15.701333 26.965333-22.186667 37.205333-6.144 10.24-12.629333 21.162667-13.653333 24.234667-5.12 11.946667-35.84 61.44-38.570667 61.44-1.706667 0-5.461333-5.12-8.533333-11.264-3.072-5.802667-13.653333-23.893333-23.210667-39.936-9.898667-16.042667-23.210667-38.912-29.696-51.2-6.485333-12.288-12.629333-22.869333-13.653333-23.893333-3.754667-3.413333-50.858667-87.381333-50.858667-91.136 0-2.048-1.365333-4.437333-3.072-5.12-2.730667-1.024-13.653333-18.773333-46.421333-76.117334-4.096-7.509333-26.624-46.08-49.493333-85.333333-57.344-97.621333-68.266667-117.077333-68.266667-120.149333 0-0.341333 38.570667-1.024 85.333333-1.024h85.333334l11.946666 18.773333z', 'p-id': '1148' }
                    },
                    []
                  )]
                )]
              ), h(
                'h3',
                null,
                ['Base on Vue.JS 2']
              ), h(
                'p',
                null,
                ['Writes base on VueJS 2 and jsx syntax.']
              ), h(
                'p',
                null,
                ['The low-level render functions.']
              )]
            ), h(
              'div',
              { 'class': [_home2.default.point] },
              [h(
                'div',
                { 'class': [_home2.default.img] },
                [h(
                  'svg',
                  { style: 'transform:rotate(45deg)', attrs: { viewBox: '0 0 1024 1024', version: '1.1', xmlns: 'http://www.w3.org/2000/svg', 'p-id': '1895' }
                  },
                  [h(
                    'path',
                    {
                      attrs: { d: 'M512 238.944c-47.776 0-85.344 37.536-85.344 85.344s37.536 85.344 85.344 85.344c47.776 0 85.344-37.536 85.344-85.344s-37.536-85.344-85.344-85.344zM512 375.456c-29.024 0-51.2-22.176-51.2-51.2s22.176-51.2 51.2-51.2c29.024 0 51.2 22.176 51.2 51.2s-22.176 51.2-51.2 51.2zM682.656 605.856c0-122.88 0-262.816 0-314.016 0-95.584-63.136-225.28-170.656-291.84-107.52 66.56-170.656 196.256-170.656 293.536 0 51.2 0 191.136 0 314.016l-170.656 211.616 682.656 0-170.656-213.344zM341.312 785.056l-98.976 0 98.976-124.576 0 124.576zM648.512 785.056l-273.056 0 0-491.52c0-76.8 47.776-187.744 136.544-252.576 88.736 64.864 136.544 174.08 136.544 252.576l0 491.52zM682.656 660.48l98.976 124.576-98.976 0c0-29.024 0-73.376 0-124.576zM494.912 853.344l34.144 0 0 170.656-34.144 0 0-170.656zM580.256 853.344l34.144 0 0 102.4-34.144 0 0-102.4zM409.6 853.344l34.144 0 0 102.4-34.144 0 0-102.4z', 'p-id': '1896' }
                    },
                    []
                  )]
                )]
              ), h(
                'h3',
                null,
                ['Lightweight and Fast']
              ), h(
                'p',
                null,
                ['There is only one js file.']
              ), h(
                'p',
                null,
                ['It gziped: 15kb']
              )]
            ), h(
              'div',
              { 'class': [_home2.default.point] },
              [h(
                'div',
                { 'class': [_home2.default.img] },
                [h(
                  'svg',
                  {
                    attrs: { viewBox: '0 0 1024 1024', version: '1.1', xmlns: 'http://www.w3.org/2000/svg', 'p-id': '1127' }
                  },
                  [h(
                    'path',
                    {
                      attrs: { d: 'M945.178 271.168 714 178.009l0-6.259c0-49.706-90.438-90-202-90s-202 40.294-202 90l0 8.284-223.37 85.19C73 269.5 64 277.208 64 291.343l0 442.569c0 14.507 10.11 29.623 23.516 35.162l411.617 167.917c6.14 2.505 16.12 2.584 22.291 0.179l421.062-164.149C952.635 769.1 960 758.349 960 747.459l0.019-454.308C960.02 284.313 953.381 274.474 945.178 271.168zM512.481 112.75c93.87 0 169.966 25.967 169.966 58s-76.096 58-169.966 58c-89.525 0-162.882-23.619-169.481-53.593l0-3.407-0.448 0c-0.017-0.333-0.037-0.666-0.037-1C342.515 138.717 418.611 112.75 512.481 112.75zM682.678 219.901l0 64.474c0 0-27.994 56.22-170.678 56.616L512 261.75C583.808 261.75 646.856 245.054 682.678 219.901zM492.383 896.085 110.501 739.967c-8.181-3.344-14.812-13.221-14.812-22.063l0-412.31L492.383 463.64 492.383 896.085zM518.071 436.857 134.401 280.92 310 213.95l0 73.801c0 1.1 0.248 2.857 0.555 3.917 0 0 17.445 80.582 199.945 80.582 179.5 0 202.823-80.622 202.823-80.622 0.394-1.035 0.677-2.772 0.677-3.876l0-75.704 189.785 75.869-170.472 67.557L518.071 436.857zM928.311 744.527l-400.073 154.64L528.238 470.45c1.416-0.331 2.861-0.755 4.297-1.323l212.305-84.133 183.472-70.486L928.312 744.527z', 'p-id': '1128' }
                    },
                    []
                  )]
                )]
              ), h(
                'h3',
                null,
                ['Composable and Clever API']
              ), h(
                'p',
                null,
                ['Each component can be composed very easy.']
              ), h(
                'p',
                null,
                ['All components had passed test specs.']
              )]
            )]
          )]
        )]
      ), h(
        'section',
        { 'class': ['w1120', _home2.default.mainContent] },
        [h(
          _markdown2.default,
          {
            attrs: { src: __webpack_require__(207) }
          },
          []
        )]
      )]
    );
  }
};

module.exports = Home;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _icon = __webpack_require__(2);

var _icon2 = _interopRequireDefault(_icon);

var _markdown = __webpack_require__(0);

var _markdown2 = _interopRequireDefault(_markdown);

var _icon3 = __webpack_require__(65);

var _icon4 = _interopRequireDefault(_icon3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var icons = __webpack_require__(4).match(/symbol id="([^"]*)/g).map(function (id) {
  return id.match(/symbol id="([^"]*)/)[1];
});

var IconPage = {
  name: 'IconPage',
  render: function render(h) {
    var $slots = this.$slots;

    return h(
      'div',
      null,
      [h(
        _markdown2.default,
        {
          attrs: { src: __webpack_require__(208) }
        },
        []
      ), icons.map(function (typ) {
        typ = typ.replace(/^owl-icons-/, '');
        return h(
          'div',
          { 'class': [_icon4.default.icons] },
          [h(
            _icon2.default,
            {
              attrs: { typ: typ, size: 30 }
            },
            []
          ), h(
            'p',
            null,
            [typ]
          )]
        );
      })]
    );
  }
};

module.exports = IconPage;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _input = __webpack_require__(11);

var _input2 = _interopRequireDefault(_input);

var _markdown = __webpack_require__(0);

var _markdown2 = _interopRequireDefault(_markdown);

var _input3 = __webpack_require__(66);

var _input4 = _interopRequireDefault(_input3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InputPage = {
  name: 'InputPage',
  data: function data() {
    return {
      outputs: ''
    };
  },
  mounted: function mounted() {
    this.$on('handleClickOnX', this.handleClickOnX);
  },

  methods: {
    handleSubmit: function handleSubmit(e) {
      this.outputs = this.$refs.inputRef.value;
    },
    handleClickOnX: function handleClickOnX(data) {
      this.outputs = this.$refs.inputRef.value;
    }
  },
  render: function render(h) {
    return h(
      'div',
      null,
      [h(
        _markdown2.default,
        {
          attrs: { src: __webpack_require__(209) }
        },
        []
      ), h(
        'div',
        { 'class': [_input4.default.wrapper] },
        [h(
          _input2.default,
          {
            attrs: { name: 'demo', icon: ['search', '#919799'], status: 'normal', placeholder: 'type some words..' },
            ref: 'inputRef' },
          []
        ), h(
          'div',
          {
            on: {
              'click': this.handleSubmit
            },
            'class': [_input4.default.submit] },
          ['Submit']
        ), h(
          'div',
          { 'class': [_input4.default.demo] },
          ['demo : ', this.outputs]
        )]
      ), h(
        'div',
        { 'class': [_input4.default.pwdInputwrapper] },
        [h(
          _input2.default,
          {
            attrs: { loading: true }
          },
          []
        )]
      ), h(
        'div',
        { 'class': [_input4.default.pwdInputwrapper] },
        [h(
          _input2.default,
          {
            attrs: { password: true }
          },
          []
        )]
      ), h(
        'div',
        { 'class': [_input4.default.pwdInputwrapper] },
        [h(
          _input2.default,
          {
            attrs: { x: true }
          },
          []
        )]
      ), h(
        'div',
        { 'class': [_input4.default.pwdInputwrapper] },
        [h(
          _input2.default,
          {
            attrs: { val: 'cepave', status: 'success' }
          },
          []
        )]
      ), h(
        'div',
        { 'class': [_input4.default.pwdInputwrapper] },
        [h(
          _input2.default,
          {
            attrs: { status: 'error' }
          },
          []
        )]
      ), h(
        'div',
        { 'class': [_input4.default.pwdInputwrapper] },
        [h(
          _input2.default,
          {
            attrs: { required: true }
          },
          []
        )]
      )]
    );
  }
};

module.exports = InputPage;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _label = __webpack_require__(43);

var _label2 = _interopRequireDefault(_label);

var _markdown = __webpack_require__(0);

var _markdown2 = _interopRequireDefault(_markdown);

var _label3 = __webpack_require__(67);

var _label4 = _interopRequireDefault(_label3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LabelPage = {
  name: 'LabelPage',

  render: function render(h) {
    var $slots = this.$slots;


    return h(
      'div',
      null,
      [h(
        _markdown2.default,
        {
          attrs: { src: __webpack_require__(210) }
        },
        []
      ), 'Labels', h(
        'div',
        { 'class': [_label4.default.group] },
        [h(
          _label2.default,
          null,
          ['Default']
        ), h(
          _label2.default,
          {
            attrs: { status: 'primary' }
          },
          ['Primary']
        ), h(
          _label2.default,
          {
            attrs: { status: 'error' }
          },
          ['Error']
        ), h(
          _label2.default,
          {
            attrs: { status: 'success' }
          },
          ['Success']
        ), h(
          _label2.default,
          {
            attrs: { status: 'warning' }
          },
          ['Warning']
        ), h(
          'span',
          { 'class': [_label4.default.dark] },
          [h(
            _label2.default,
            {
              attrs: { status: 'inverted' }
            },
            ['Inverted']
          )]
        )]
      ), 'Outline', h(
        'div',
        { 'class': [_label4.default.group] },
        [h(
          _label2.default,
          {
            attrs: { typ: 'outline' }
          },
          ['Default']
        ), h(
          _label2.default,
          {
            attrs: { typ: 'outline', status: 'primary' }
          },
          ['Primary']
        ), h(
          _label2.default,
          {
            attrs: { typ: 'outline', status: 'error' }
          },
          ['Error']
        ), h(
          _label2.default,
          {
            attrs: { typ: 'outline', status: 'success' }
          },
          ['Success']
        ), h(
          _label2.default,
          {
            attrs: { typ: 'outline', status: 'warning' }
          },
          ['Warning']
        ), h(
          'span',
          { 'class': [_label4.default.dark] },
          [h(
            _label2.default,
            {
              attrs: { typ: 'outline', status: 'inverted' }
            },
            ['Inverted']
          )]
        )]
      ), 'Tags', h(
        'div',
        { 'class': [_label4.default.group] },
        [h(
          _label2.default,
          {
            attrs: { typ: 'tag' }
          },
          ['Default']
        ), h(
          _label2.default,
          {
            attrs: { typ: 'tag', status: 'primary' }
          },
          ['Primary']
        ), h(
          _label2.default,
          {
            attrs: { typ: 'tag', status: 'error' }
          },
          ['Error']
        ), h(
          _label2.default,
          {
            attrs: { typ: 'tag', status: 'success' }
          },
          ['Success']
        ), h(
          _label2.default,
          {
            attrs: { typ: 'tag', status: 'warning' }
          },
          ['Warning']
        ), h(
          'span',
          { 'class': [_label4.default.dark] },
          [h(
            _label2.default,
            {
              attrs: { typ: 'tag', status: 'inverted' }
            },
            ['Inverted']
          )]
        )]
      ), 'Badges', h(
        'div',
        { 'class': [_label4.default.group] },
        [h(
          _label2.default,
          {
            attrs: { badge: true }
          },
          ['Default']
        ), h(
          _label2.default,
          {
            attrs: { badge: true, status: 'primary' }
          },
          ['1']
        ), h(
          _label2.default,
          {
            attrs: { badge: true, status: 'error' }
          },
          ['2']
        ), h(
          _label2.default,
          {
            attrs: { badge: true, status: 'success' }
          },
          ['3']
        ), h(
          _label2.default,
          {
            attrs: { badge: true, status: 'warning' }
          },
          ['4']
        ), h(
          'span',
          { 'class': [_label4.default.dark] },
          [h(
            _label2.default,
            {
              attrs: { badge: true, status: 'inverted' }
            },
            ['5']
          )]
        )]
      ), 'Badge Outline', h(
        'div',
        { 'class': [_label4.default.group] },
        [h(
          _label2.default,
          {
            attrs: { badge: true, typ: 'outline' }
          },
          ['Default']
        ), h(
          _label2.default,
          {
            attrs: { badge: true, typ: 'outline', status: 'primary' }
          },
          ['1']
        ), h(
          _label2.default,
          {
            attrs: { badge: true, typ: 'outline', status: 'error' }
          },
          ['2']
        ), h(
          _label2.default,
          {
            attrs: { badge: true, typ: 'outline', status: 'success' }
          },
          ['3']
        ), h(
          _label2.default,
          {
            attrs: { badge: true, typ: 'outline', status: 'warning' }
          },
          ['4']
        ), h(
          'span',
          { 'class': [_label4.default.dark] },
          [h(
            _label2.default,
            {
              attrs: { badge: true, typ: 'outline', status: 'inverted' }
            },
            ['5']
          )]
        )]
      )]
    );
  }
};

module.exports = LabelPage;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _lightBox = __webpack_require__(44);

var _lightBox2 = _interopRequireDefault(_lightBox);

var _markdown = __webpack_require__(0);

var _markdown2 = _interopRequireDefault(_markdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LightBoxPage = {
  name: 'LightBoxPage',
  methods: {},
  render: function render(h) {
    var content = h(
      'div',
      null,
      [h(
        'h2',
        null,
        ['LightBox']
      ), h(
        'p',
        null,
        ['Lightbox is a JavaScript library that displays images and videos by filling the screen, and dimming out the rest of the web page.[1]']
      ), h(
        'p',
        null,
        ['The original JavaScript library was written by Lokesh Dhakar with the help of riphath.[2] The term Lightbox may also refer to other similar JavaScript libraries. The technique gained widespread popularity due to its simple and elegant style.']
      ), h(
        'p',
        null,
        ['The original Lightbox library used two JavaScript libraries, Prototype Javascript Framework[3] and script.aculo.us,[4] for its animations and positioning. In April 2012, the plugin was rewritten for jQuery.[5] The open-source nature of Lightbox encouraged developers to modify and fork the code, resulting in plugins such as Colorbox, Magnific Popup, Slimbox or Thickbox.']
      ), h(
        'p',
        null,
        ['Lightbox scripts are dependent upon a browser\'s JavaScript support,.[6] Many Lightbox scripts use unobtrusive JavaScript. Browsers that do not load the script for whatever reason can instead simply load the image as a separate page load, losing the Lightbox effect but still retaining the ability to display the image.[7]']
      ), h(
        'h3',
        null,
        ['Bypassing']
      ), h(
        'p',
        null,
        ['The user may use a developer tool such as Chrome\'s Inspect Element, to remove and add the code for it from the DOM. [8] Adblock Plus as an example, has the ability to block these elements using Element Hiding Helper or manually written rules. [9]']
      )]
    );

    return h(
      'div',
      null,
      [h(
        _markdown2.default,
        {
          attrs: { src: __webpack_require__(211) }
        },
        []
      ), h(
        _lightBox2.default,
        {
          attrs: { closeOnClickMask: true, closeOnESC: true, width: 600 }
        },
        [h(
          _lightBox2.default.Open,
          null,
          [h(
            'a',
            {
              attrs: { href: '#' }
            },
            ['Open lightbox']
          )]
        ), h(
          _lightBox2.default.View,
          null,
          [h(
            'h1',
            null,
            ['LightBox long content demo']
          ), content, content]
        )]
      )]
    );
  }
};

module.exports = LightBoxPage;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _loading = __webpack_require__(12);

var _loading2 = _interopRequireDefault(_loading);

var _markdown = __webpack_require__(0);

var _markdown2 = _interopRequireDefault(_markdown);

var _loading3 = __webpack_require__(68);

var _loading4 = _interopRequireDefault(_loading3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoadingPage = {
  name: 'LoadingPage',

  render: function render(h) {
    var $slots = this.$slots;


    return h(
      'div',
      null,
      [h(
        _markdown2.default,
        {
          attrs: { src: __webpack_require__(212) }
        },
        []
      ), h(
        'h2',
        null,
        ['typ="pie"']
      ), h(
        'div',
        { 'class': [_loading4.default.exampleWrapper] },
        [h(
          _loading2.default,
          null,
          []
        )]
      ), h(
        'h2',
        null,
        ['typ="bar"']
      ), h(
        'div',
        { 'class': [_loading4.default.exampleWrapper] },
        [h(
          _loading2.default,
          {
            attrs: { typ: 'bar' }
          },
          []
        )]
      )]
    );
  }
};

module.exports = LoadingPage;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _page = __webpack_require__(45);

var _page2 = _interopRequireDefault(_page);

var _markdown = __webpack_require__(0);

var _markdown2 = _interopRequireDefault(_markdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageDoc = {
  name: 'PageDoc',
  render: function render(h) {
    return h(
      'div',
      null,
      [h(
        _markdown2.default,
        {
          attrs: { src: __webpack_require__(213) }
        },
        []
      ), h(
        'h3',
        null,
        ['typ="pages"']
      ), h(
        _page2.default,
        {
          attrs: { total: 500, limit: 20, align: 'left' }
        },
        []
      ), h(
        'h3',
        null,
        ['typ="number"']
      ), h(
        _page2.default,
        {
          attrs: { total: 500, limit: 20, typ: 'number', align: 'left' }
        },
        []
      )]
    );
  }
};

module.exports = PageDoc;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _radio = __webpack_require__(46);

var _radio2 = _interopRequireDefault(_radio);

var _markdown = __webpack_require__(0);

var _markdown2 = _interopRequireDefault(_markdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RadioPage = {
  name: 'RadioPage',
  data: function data() {
    return {
      radioDatum: { piglet: false, tigger: false, winnieThePooh: true }
    };
  },

  methods: {
    getRadioData: function getRadioData(data) {
      this.radioDatum = data;
    }
  },
  render: function render(h) {
    var getRadioData = this.getRadioData,
        radioDatum = this.radioDatum;

    return h(
      'div',
      null,
      [h(
        _markdown2.default,
        {
          attrs: { src: __webpack_require__(214) }
        },
        []
      ), h(
        'div',
        null,
        [h(
          'code',
          null,
          [JSON.stringify(radioDatum)]
        )]
      ), h(
        'br',
        null,
        []
      ), h(
        _radio2.default.Group,
        {
          on: {
            'change': getRadioData
          }
        },
        [h(
          _radio2.default,
          {
            attrs: { name: 'piglet' }
          },
          ['Piglet']
        ), h(
          _radio2.default,
          {
            attrs: { name: 'tigger' }
          },
          ['Tigger']
        ), h(
          _radio2.default,
          {
            attrs: { name: 'winnieThePooh', on: true }
          },
          ['Winnie the Pooh']
        )]
      )]
    );
  }
};

module.exports = RadioPage;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _babelHelperVueJsxMergeProps = __webpack_require__(6);

var _babelHelperVueJsxMergeProps2 = _interopRequireDefault(_babelHelperVueJsxMergeProps);

var _select = __webpack_require__(47);

var _select2 = _interopRequireDefault(_select);

var _markdown = __webpack_require__(0);

var _markdown2 = _interopRequireDefault(_markdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SelectPage = {
  name: 'SelectPage',
  data: function data() {
    return {
      outputs: {
        value: '3d',
        idx: 1
      },
      selectProps: {
        options: [{ value: '1d', title: '1 day' }, { value: '3d', title: '3 days', selected: true }, { value: '5d', title: '5 days' }]
      }
    };
  },


  methods: {
    selectOnChange: function selectOnChange(d) {
      this.outputs = d;
    }
  },

  render: function render(h) {
    var selectProps = this.selectProps,
        outputs = this.outputs,
        selectOnChange = this.selectOnChange;

    return h(
      'div',
      null,
      [h(
        _markdown2.default,
        {
          attrs: { src: __webpack_require__(215) }
        },
        []
      ), h(
        'pre',
        null,
        [h(
          'code',
          null,
          [JSON.stringify(outputs)]
        )]
      ), h(
        _select2.default,
        (0, _babelHelperVueJsxMergeProps2.default)([{ props: selectProps }, {
          on: {
            'change': selectOnChange
          }
        }]),
        []
      )]
    );
  }
};

module.exports = SelectPage;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _switch = __webpack_require__(48);

var _switch2 = _interopRequireDefault(_switch);

var _markdown = __webpack_require__(0);

var _markdown2 = _interopRequireDefault(_markdown);

var _switch3 = __webpack_require__(69);

var _switch4 = _interopRequireDefault(_switch3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SwitchPage = {
  name: 'SwitchPage',
  data: function data() {
    return {
      switch1Data: { demo1: true },
      switch2Data: { demo2: true }
    };
  },

  methods: {
    getSwitch1Data: function getSwitch1Data(data) {
      this.switch1Data = data;
    },
    getSwitch2Data: function getSwitch2Data(data) {
      this.switch2Data = data;
    }
  },

  render: function render(h) {
    var getSwitch1Data = this.getSwitch1Data,
        switch1Data = this.switch1Data,
        getSwitch2Data = this.getSwitch2Data,
        switch2Data = this.switch2Data;


    return h(
      'div',
      null,
      [h(
        _markdown2.default,
        {
          attrs: { src: __webpack_require__(216) }
        },
        []
      ), h(
        'div',
        { 'class': [_switch4.default.title] },
        ['Default Switch Button']
      ), h(
        'div',
        { 'class': [_switch4.default.demo] },
        [h(
          _switch2.default,
          {
            attrs: { checked: true, name: 'demo1' },
            on: {
              'change': getSwitch1Data
            }
          },
          []
        ), h(
          'span',
          { 'class': [_switch4.default.demoMsg] },
          [h(
            'code',
            null,
            [JSON.stringify(switch1Data, null, 2)]
          )]
        )]
      ), h(
        'div',
        { 'class': [_switch4.default.title] },
        ['Special Switch Button']
      ), h(
        'div',
        { 'class': [_switch4.default.demo] },
        [h(
          _switch2.default,
          {
            attrs: { checked: true, name: 'demo2', typ: 'special' },
            on: {
              'change': getSwitch2Data
            }
          },
          [h(
            _switch2.default.Open,
            null,
            ['\u958B']
          ), h(
            _switch2.default.Close,
            null,
            ['\u95DC']
          )]
        ), h(
          'span',
          { 'class': [_switch4.default.demoMsg] },
          [h(
            'code',
            null,
            [JSON.stringify(switch2Data, null, 2)]
          )]
        )]
      )]
    );
  }
};

module.exports = SwitchPage;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _tab = __webpack_require__(49);

var _tab2 = _interopRequireDefault(_tab);

var _markdown = __webpack_require__(0);

var _markdown2 = _interopRequireDefault(_markdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TabPage = {
  name: 'TabPage',
  data: function data() {
    return {
      tabData: { idx: 1, name: '2' }
    };
  },

  methods: {
    getTabData: function getTabData(data) {
      this.tabData = data;
    }
  },

  render: function render(h) {
    var tabData = this.tabData,
        getTabData = this.getTabData;

    return h(
      'div',
      null,
      [h(
        _markdown2.default,
        {
          attrs: { src: __webpack_require__(217) }
        },
        []
      ), h(
        'div',
        null,
        [h(
          _tab2.default,
          {
            on: {
              'change': getTabData
            }
          },
          [h(
            _tab2.default.Head,
            { slot: 'tabHead', attrs: { name: '1' }
            },
            ['Tab1']
          ), h(
            _tab2.default.Head,
            { slot: 'tabHead', attrs: { isSelected: true, name: '2' }
            },
            ['Tab2']
          ), h(
            _tab2.default.Content,
            { slot: 'tabContent', attrs: { name: '1' }
            },
            [h(
              'br',
              null,
              []
            ), 'Hello, I am tab one']
          ), h(
            _tab2.default.Content,
            { slot: 'tabContent', attrs: { name: '2' }
            },
            [h(
              'br',
              null,
              []
            ), 'This is tab two']
          )]
        ), h(
          'br',
          null,
          []
        ), h(
          'code',
          null,
          [JSON.stringify(tabData)]
        )]
      )]
    );
  }
};

module.exports = TabPage;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _tip = __webpack_require__(50);

var _tip2 = _interopRequireDefault(_tip);

var _markdown = __webpack_require__(0);

var _markdown2 = _interopRequireDefault(_markdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TipPage = {
  name: 'TipPage',

  render: function render(h) {
    var $slots = this.$slots;


    return h(
      'div',
      null,
      [h(
        _markdown2.default,
        {
          attrs: { src: __webpack_require__(218) }
        },
        []
      ), h(
        'h2',
        null,
        ['pos="right"']
      ), h(
        _tip2.default,
        {
          attrs: { pos: 'right' }
        },
        ['hover me', h(
          _tip2.default.Context,
          null,
          ['I am a tip']
        )]
      ), h(
        'h2',
        null,
        ['pos="up"']
      ), h(
        _tip2.default,
        {
          attrs: { pos: 'up' }
        },
        ['hover me', h(
          _tip2.default.Context,
          null,
          ['I am a tip']
        )]
      ), h(
        'h2',
        null,
        ['pos="left"']
      ), h(
        _tip2.default,
        {
          attrs: { pos: 'left' }
        },
        ['hover me', h(
          _tip2.default.Context,
          null,
          ['I am a tip']
        )]
      ), h(
        'h2',
        null,
        ['pos="down"']
      ), h(
        _tip2.default,
        {
          attrs: { pos: 'down' }
        },
        ['hover me', h(
          _tip2.default.Context,
          null,
          ['I am a tip']
        )]
      )]
    );
  }
};

module.exports = TipPage;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _delegateTo = __webpack_require__(1);

var _delegateTo2 = _interopRequireDefault(_delegateTo);

var _button = __webpack_require__(70);

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = {
  name: 'Button',
  props: {
    status: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    style: function style() {
      var status = this.status,
          disabled = this.disabled;

      var style = [_button2.default.button];
      if (status) {
        style.push(_button2.default[status]);
      }
      if (disabled) {
        style.push(_button2.default.disabled);
      }
      return style;
    }
  },

  render: function render(h) {
    var status = this.status,
        style = this.style,
        fill = this.fill,
        $slots = this.$slots;


    return h(
      'button',
      {
        attrs: { type: 'button', 'data-color': 'red' },
        'class': style },
      [$slots.default]
    );
  }
};

Button.Group = {
  name: 'ButtonGroup',
  props: {
    options: {
      type: Array,
      required: true
    }
  },
  data: function data() {
    return {
      buttonOptions: this.options,
      selectedIdx: this.options.find(function (option) {
        return option.selected === true;
      })
    };
  },

  computed: {
    renderButtons: function renderButtons() {
      var _this = this;

      var buttonOptions = this.buttonOptions;

      var h = this.$createElement;
      var _buttonOptions = buttonOptions.map(function (option, i) {
        var dataSelected = option.selected ? '1' : '0';
        if (option.selected) {
          _this.selectedIdx = i;
        }
        return h(
          Button,
          {
            attrs: { status: 'primaryOutline', 'data-selected': dataSelected, 'data-role': 'button' }
          },
          [option.title]
        );
      });
      return _buttonOptions;
    }
  },
  methods: {
    _handleClickButton: (0, _delegateTo2.default)('[data-role="button"]', function (e) {
      var _this2 = this;

      var delegateTarget = e.delegateTarget;
      var selectedIdx = this.selectedIdx;

      var idx = Array.from(delegateTarget.parentNode.children).indexOf(delegateTarget);
      if (idx === selectedIdx) {
        return;
      }
      this.$emit('change', {
        value: this.buttonOptions[idx].value,
        idx: idx
      });
      this.buttonOptions.forEach(function (buttonOption) {
        return _this2.$set(buttonOption, 'selected', false);
      });
      this.$set(this.buttonOptions[idx], 'selected', true);
    })
  },
  render: function render(h) {
    var renderButtons = this.renderButtons,
        _handleClickButton = this._handleClickButton;

    return h(
      'div',
      { 'class': [_button2.default.buttonGroup], on: {
          'click': _handleClickButton
        }
      },
      [renderButtons]
    );
  }
};

module.exports = Button;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _icon = __webpack_require__(2);

var _icon2 = _interopRequireDefault(_icon);

var _checkbox = __webpack_require__(71);

var _checkbox2 = _interopRequireDefault(_checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Checkbox = {
  name: 'Checkbox',
  props: {
    checked: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    }
  },

  data: function data() {
    return {
      check: this.checked
    };
  },


  methods: {
    handleClick: function handleClick(e) {
      e.stopPropagation();
      var $parent = this.$parent,
          name = this.name;

      this.check = !this.check;

      var data = _defineProperty({}, name, this.check);

      this.$emit('change', data);

      $parent.$emit('handleSingleCheckboxChange', data);
    }
  },

  watch: {
    checked: function checked(newVal) {
      var $parent = this.$parent,
          name = this.name;

      this.check = newVal;

      $parent.$emit('handleSingleCheckboxChange', _defineProperty({}, name, newVal));
    }
  },

  render: function render(h) {
    var handleClick = this.handleClick,
        check = this.check,
        $slots = this.$slots;


    return h(
      'div',
      {
        on: {
          'click': handleClick
        },
        'class': [_checkbox2.default.cb] },
      [check ? h(
        _icon2.default,
        {
          attrs: { typ: 'checked' }
        },
        []
      ) : h(
        _icon2.default,
        {
          attrs: { typ: 'checkbox', fill: '#fff' }
        },
        []
      ), $slots.default]
    );
  }
};

Checkbox.Group = {
  name: 'CheckboxGroup',

  mounted: function mounted() {
    var handleChange = this.handleChange,
        $children = this.$children,
        checkedDatum = this.checkedDatum;

    this.$on('handleSingleCheckboxChange', handleChange);

    if (checkedDatum.all) {
      $children.forEach(function (c) {
        checkedDatum[c.name] = true;
        c.check = true;
      });
    }
  },


  computed: {
    checkedDatum: function checkedDatum() {
      var _this = this;

      var $children = this.$children;

      return $children.reduce(function (data, child) {
        var name = child.name,
            check = child.check;


        if (name === 'all') {
          _this.$all = child;
        }

        data[name] = !!check;
        return data;
      }, {});
    },
    counts: function counts() {
      var checkedDatum = this.checkedDatum;

      var datum = Object.keys(checkedDatum);
      var total = datum.length - (this.$all ? 1 : 0);
      var checked = datum.filter(function (d) {
        return d !== 'all' && checkedDatum[d];
      }).length;

      return {
        total: total, checked: checked
      };
    }
  },

  methods: {
    handleChange: function handleChange(checked) {
      var checkedDatum = _extends({}, this.checkedDatum, checked);

      var $children = this.$children,
          counts = this.counts;

      var isClickedAll = checked.all !== undefined;

      if (this.$all) {
        if (isClickedAll) {
          this.$all.check = checked.all;
          $children.forEach(function (c) {
            checkedDatum[c.name] = checked.all;
            c.check = checked.all;
          });
        } else {
          this.$all.check = checkedDatum.all = counts.checked >= counts.total;
        }
      }

      this.$emit('change', checkedDatum);
    }
  },

  render: function render(h) {
    var $slots = this.$slots;

    return h(
      'div',
      { 'class': [_checkbox2.default.cbGroup] },
      [$slots.default]
    );
  }
};
module.exports = Checkbox;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _icon = __webpack_require__(2);

var _icon2 = _interopRequireDefault(_icon);

var _input = __webpack_require__(11);

var _input2 = _interopRequireDefault(_input);

var _dualList = __webpack_require__(72);

var _dualList2 = _interopRequireDefault(_dualList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DualList = {
  name: 'DualList',
  props: {
    items: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    selectedItems: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    displayKey: {
      type: String,
      required: true
    },
    caseInsensitive: {
      type: Boolean,
      default: false
    },
    apiMode: {
      type: Boolean,
      default: false
    },
    leftLoading: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      listToAdd: {},
      listToRemove: {},
      highlightLeft: '',
      highlightRight: '',
      leftList: {},
      rightList: {}
    };
  },
  mounted: function mounted() {
    var handleChange = this.handleChange,
        handleClickOnX = this.handleClickOnX;

    var items = this.items.reduce(function (preVal, curVal, idx) {
      return _extends({}, preVal, _defineProperty({}, idx, curVal));
    }, {});
    this.listToAdd = _extends({}, items);
    this.leftList = _extends({}, items);

    var leftNum = this.items.length;
    var selectedItems = this.selectedItems.reduce(function (preVal, curVal, idx) {
      return _extends({}, preVal, _defineProperty({}, idx + leftNum, curVal));
    }, {});
    this.rightList = _extends({}, selectedItems);
    this.listToRemove = _extends({}, selectedItems);
    this.$on('handleSingleDualListChange', handleChange);
    this.$on('handleClickOnX', handleClickOnX);
  },

  watch: {
    items: function items() {
      var items = this.items.reduce(function (preVal, curVal, idx) {
        return _extends({}, preVal, _defineProperty({}, idx, curVal));
      }, {});
      this.listToAdd = _extends({}, items);
      this.leftList = _extends({}, items);
    },
    selectedItems: function selectedItems() {
      var leftNum = this.items.length;
      var selectedItems = this.selectedItems.reduce(function (preVal, curVal, idx) {
        return _extends({}, preVal, _defineProperty({}, idx + leftNum, curVal));
      }, {});
      this.listToRemove = _extends({}, selectedItems);
      this.rightList = _extends({}, selectedItems);
    }
  },
  methods: {
    handleChange: function handleChange(list) {
      if (list[0] === 'add') {
        var shiftItem = this.leftList[list[2]];
        delete this.leftList[list[2]];
        this.rightList = _extends({}, this.rightList, _defineProperty({}, list[2], shiftItem));
        delete this.listToAdd[list[2]];
        this.listToRemove = _extends({}, this.listToRemove, _defineProperty({}, list[2], shiftItem));
      } else if (list[0] === 'remove') {
        var _shiftItem = this.rightList[list[2]];
        delete this.rightList[list[2]];
        this.leftList = _extends({}, this.leftList, _defineProperty({}, list[2], _shiftItem));
        delete this.listToRemove[list[2]];
        this.listToAdd = _extends({}, this.listToAdd, _defineProperty({}, list[2], _shiftItem));
      }
      this.$emit('change', this.rightList);
    },
    handleClickOnX: function handleClickOnX(data) {
      if (data === 'left') {
        var apiMode = this.apiMode;

        if (apiMode) {
          this.$emit('remove');
        } else {
          this.listToAdd = this.leftList;
          this.highlightLeft = '';
        }
      } else if (data === 'right') {
        this.listToRemove = this.rightList;
        this.highlightRight = '';
      }
    },
    handleSelectAll: function handleSelectAll() {
      var _this = this;

      var keys = Object.keys(this.listToAdd);
      keys.map(function (key) {
        delete _this.leftList[key];
      });
      this.rightList = _extends({}, this.rightList, this.listToAdd);
      this.listToRemove = _extends({}, this.listToRemove, this.listToAdd);
      this.listToAdd = {};
      this.$emit('change', this.rightList);
    },
    handleUnselectAll: function handleUnselectAll() {
      var _this2 = this;

      var keys = Object.keys(this.listToRemove);
      keys.map(function (key) {
        delete _this2.rightList[key];
      });
      this.leftList = _extends({}, this.leftList, this.listToRemove);
      this.listToAdd = _extends({}, this.listToAdd, this.listToRemove);
      this.listToRemove = {};
      this.$emit('change', this.rightList);
    },
    handleSearchListLeft: function handleSearchListLeft(e) {
      var _this3 = this;

      var apiMode = this.apiMode,
          caseInsensitive = this.caseInsensitive,
          displayKey = this.displayKey;

      if (e.charCode === 13) {
        if (apiMode) {
          this.$emit('inputchange', this.$refs.searchListToAdd.value);
        } else {
          var keys = caseInsensitive ? Object.keys(this.leftList).filter(function (key) {
            return _this3.leftList[key][displayKey].toLowerCase().includes(_this3.$refs.searchListToAdd.value.toLowerCase());
          }) : Object.keys(this.leftList).filter(function (key) {
            return _this3.leftList[key][displayKey].includes(_this3.$refs.searchListToAdd.value);
          });

          this.listToAdd = keys.reduce(function (preVal, curVal) {
            return _extends({}, preVal, _defineProperty({}, curVal, _this3.leftList[curVal]));
          }, {});
          this.highlightLeft = this.$refs.searchListToAdd.value;
        }
      }
    },
    handleSearchListRight: function handleSearchListRight(e) {
      var _this4 = this;

      if (e.charCode === 13) {
        (function () {
          var caseInsensitive = _this4.caseInsensitive,
              displayKey = _this4.displayKey;

          var keys = caseInsensitive ? Object.keys(_this4.rightList).filter(function (key) {
            return _this4.rightList[key][displayKey].toLowerCase().includes(_this4.$refs.searchListToRemove.value.toLowerCase());
          }) : Object.keys(_this4.rightList).filter(function (key) {
            return _this4.rightList[key][displayKey].includes(_this4.$refs.searchListToRemove.value);
          });
          _this4.listToRemove = keys.reduce(function (preVal, curVal) {
            return _extends({}, preVal, _defineProperty({}, curVal, _this4.rightList[curVal]));
          }, {});
          _this4.highlightRight = _this4.$refs.searchListToRemove.value;
        })();
      }
    }
  },
  render: function render(h) {
    var _this5 = this;

    var handleSelectAll = this.handleSelectAll,
        handleUnselectAll = this.handleUnselectAll,
        handleSearchListLeft = this.handleSearchListLeft,
        handleSearchListRight = this.handleSearchListRight,
        highlightLeft = this.highlightLeft,
        highlightRight = this.highlightRight,
        leftLoading = this.leftLoading,
        displayKey = this.displayKey;

    return h(
      'div',
      { 'class': [_dualList2.default.dualWrapper] },
      [h(
        'div',
        { 'class': [_dualList2.default.dual] },
        [h(
          _input2.default,
          {
            nativeOn: {
              'keypress': handleSearchListLeft
            },
            attrs: { name: 'left', icon: ['search', '#919799'], x: true, loading: leftLoading },
            'class': [_dualList2.default.input], ref: 'searchListToAdd' },
          []
        ), h(
          'div',
          { 'class': [_dualList2.default.lists] },
          [Object.keys(this.listToAdd).map(function (label) {
            return h(
              List,
              {
                attrs: { id: label, name: _this5.listToAdd[label][displayKey], highlight: highlightLeft, icon: ['circle-add', '#b9e617'] }
              },
              []
            );
          })]
        )]
      ), h(
        'div',
        { 'class': [_dualList2.default.arrow] },
        [h(
          _icon2.default,
          {
            nativeOn: {
              'click': handleSelectAll
            },
            'class': [_dualList2.default.doubleRight], attrs: { typ: 'double-right', size: 20, fill: '#b8bdbf' }
          },
          []
        ), h(
          _icon2.default,
          {
            nativeOn: {
              'click': handleUnselectAll
            },
            'class': [_dualList2.default.doubleLeft], attrs: { typ: 'double-left', size: 20, fill: '#b8bdbf' }
          },
          []
        )]
      ), h(
        'div',
        { 'class': [_dualList2.default.dual] },
        [h(
          _input2.default,
          {
            nativeOn: {
              'keypress': handleSearchListRight
            },
            attrs: { name: 'right', icon: ['search', '#919799'], x: true },
            'class': [_dualList2.default.input], ref: 'searchListToRemove' },
          []
        ), h(
          'div',
          { 'class': [_dualList2.default.lists] },
          [Object.keys(this.listToRemove).map(function (label) {
            return h(
              List,
              {
                attrs: { id: label, name: _this5.listToRemove[label][displayKey], highlight: highlightRight, icon: ['circle-minus', '#e6175c'] }
              },
              []
            );
          })]
        )]
      )]
    );
  }
};

var List = {
  name: 'List',
  props: {
    highlight: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    icon: {
      type: Array,
      default: ['circle-add', '#b9e617']
    }
  },

  computed: {
    highlightText: function highlightText() {
      var highlight = this.highlight,
          name = this.name;

      var highlightText = '';
      if (highlight) {
        var highlightReg = new RegExp('' + highlight, 'gi');
        highlightText = ('' + name).replace(highlightReg, function (replacement) {
          return '<span class="' + _dualList2.default.highlight + '">' + replacement + '</span>';
        });
      }
      return highlightText;
    }
  },

  methods: {
    handleClick: function handleClick() {
      var $parent = this.$parent,
          name = this.name,
          id = this.id;

      var manipulation = this.icon[0] === 'circle-add' ? 'add' : 'remove';
      var data = [manipulation, name, id];
      $parent.$emit('handleSingleDualListChange', data);
    }
  },

  render: function render(h) {
    var name = this.name,
        icon = this.icon,
        highlight = this.highlight,
        handleClick = this.handleClick,
        highlightText = this.highlightText;

    return h(
      'div',
      { 'class': [_dualList2.default.listWrapper], on: {
          'click': handleClick
        }
      },
      [highlight ? h(
        'span',
        { 'class': [_dualList2.default.list], domProps: {
            'innerHTML': highlightText
          },
          attrs: { title: name }
        },
        []
      ) : h(
        'span',
        { 'class': [_dualList2.default.list], domProps: {
            'innerHTML': name
          },
          attrs: { title: name }
        },
        []
      ), h(
        _icon2.default,
        { 'class': [_dualList2.default.icon], attrs: { typ: icon[0], size: 18, fill: icon[1] }
        },
        []
      )]
    );
  }
};

module.exports = DualList;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _flex = __webpack_require__(73);

var _flex2 = _interopRequireDefault(_flex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Flex = {
  name: 'Flex',
  props: {
    grids: {
      type: Number,
      default: 12
    },

    margin: {
      type: Number,
      default: 20
    },

    mid: {
      type: Boolean,
      default: false
    },

    split: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes: function classes() {
      var _ref;

      return _ref = {}, _defineProperty(_ref, _flex2.default.flexMid, this.mid), _defineProperty(_ref, _flex2.default.flexSplit, this.split), _ref;
    }
  },
  render: function render(h) {
    var $slots = this.$slots,
        classes = this.classes;

    return h(
      'div',
      { 'class': [_flex2.default.flex, classes] },
      [$slots.default]
    );
  }
};

Flex.Col = {
  name: 'FlexCol',
  props: {
    offset: {
      type: [Number, String]
    },
    size: {
      type: [Number, String]
    },
    width: {
      type: [Number, String]
    },
    mid: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    style: function style() {
      var $parent = this.$parent,
          size = this.size,
          offset = this.offset;


      var styleObj = {
        marginRight: $parent.margin + 'px'
      };

      if (size === 'auto') {
        styleObj.flex = 1;
      } else {
        styleObj.width = 100 / $parent.grids * size + '%';
      }

      if (offset) {
        styleObj.marginLeft = 100 / $parent.grids * offset + '%';
      }

      return styleObj;
    },
    classes: function classes() {
      return _defineProperty({}, _flex2.default.flexMid, this.mid);
    }
  },

  render: function render(h) {
    var $slots = this.$slots,
        classes = this.classes,
        style = this.style;

    return h(
      'div',
      { style: style, 'class': classes },
      [$slots.default]
    );
  }
};

module.exports = Flex;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _delegateTo = __webpack_require__(1);

var _delegateTo2 = _interopRequireDefault(_delegateTo);

var _grid = __webpack_require__(74);

var _grid2 = _interopRequireDefault(_grid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var unit = function unit(u) {
  u = String(u);
  if (!u.includes('%')) {
    u = u + 'px';
  }
  return u;
};

var Grid = {
  name: 'Grid',

  props: {
    heads: {
      type: Array,
      default: function _default() {
        return [];
      }
    },

    rows: {
      type: Array,
      default: function _default() {
        return [];
      }
    },

    rowsRender: {
      type: Function
    }
  },

  watch: {
    rows: function rows(newRows) {
      this.heads.forEach(function (head) {
        if (head.sort !== undefined) {
          head.sort = -1;
        }
      });
      this.drows = Array.from(newRows);
    }
  },

  data: function data() {
    this._createID = 'owl-ui-grid_' + Date.now();

    var rows = this.rows;

    return {
      updating: true,
      drows: Array.from(rows)
    };
  },
  mounted: function mounted() {
    var widths = this.widths,
        $el = this.$el,
        _createID = this._createID;

    var style = document.createElement('style');
    style.textContent = widths.map(function (width, i) {
      return '#' + _createID + ' [data-role="row"] [data-role="col"]:nth-of-type(' + (i + 1) + ') {\n          width: ' + width + '\n      }';
    }).join('');

    $el.appendChild(style);
  },


  computed: {
    widths: function widths() {
      var heads = this.heads;


      return heads.map(function (head) {
        return unit(head.width);
      });
    }
  },

  methods: {
    sorting: (0, _delegateTo2.default)('[data-sort]', function (ev) {
      var idx = ev.delegateTarget.dataset.idx;
      var drows = this.drows,
          heads = this.heads;

      var sort = +heads[idx].sort;

      if (sort !== -1) {
        drows.reverse();
        heads[idx].sort = sort === 1 ? 0 : 1;
      } else {
        heads.forEach(function (head) {
          if (head.sort !== undefined) {
            head.sort = -1;
          }
        });
        heads[idx].sort = 1;

        drows.sort(function (a, b) {
          a = a[idx].col;
          b = b[idx].col;

          if (typeof a === 'number' && typeof b === 'number') {
            return a - b;
          } else {
            return a.localeCompare(b);
          }
        });
      }
    })
  },

  render: function render(h) {
    var sorting = this.sorting,
        heads = this.heads,
        drows = this.drows,
        rowsRender = this.rowsRender,
        _createID = this._createID;


    return h(
      'div',
      { 'class': [_grid2.default.gridFixed], attrs: { id: _createID }
      },
      [h(
        'div',
        { 'class': [_grid2.default.ghead], on: {
            'click': sorting
          }
        },
        [h(
          'div',
          {
            attrs: { 'data-role': 'row' }
          },
          [heads.map(function (head, i) {
            return h(
              'div',
              {
                attrs: { 'data-role': 'col', 'data-idx': i, 'data-sort': head.sort }
              },
              [head.render ? head.render(h, head) : head.col]
            );
          })]
        )]
      ), h(
        'div',
        { 'class': [_grid2.default.gbody] },
        [drows.map(function (row, index) {
          return h(
            'div',
            {
              attrs: { 'data-role': 'row' }
            },
            [rowsRender ? rowsRender(h, { row: row, index: index }) : row.map(function (col, i) {
              return h(
                'div',
                {
                  attrs: { 'data-role': 'col', 'data-idx': i }
                },
                [col.render ? col.render(h, col) : col.col]
              );
            })]
          );
        })]
      )]
    );
  }
};

Grid.Col = {
  name: 'GridCol',
  props: {
    width: {
      type: [String, Number],
      default: ''
    }
  },

  computed: {
    style: function style() {
      var width = this.width;


      return {
        width: unit(width)
      };
    }
  },

  render: function render(h) {
    var $slots = this.$slots,
        style = this.style;


    return h(
      'div',
      {
        attrs: { 'data-role': 'col' },
        style: style },
      [$slots.default]
    );
  }
};

module.exports = Grid;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var isBrowser = typeof window !== 'undefined' && window.document && document.createElement;
var isNode = !isBrowser && typeof global !== 'undefined';

module.exports = {
  isBrowser: isBrowser, isNode: isNode
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _label = __webpack_require__(76);

var _label2 = _interopRequireDefault(_label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Label = {
  name: 'Label',
  props: {
    typ: {
      type: String,
      default: '' //label, outline, tag
    },
    status: {
      type: String,
      default: '' //default, primary, success, error, warning, inverted
    },
    badge: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    style: function style() {
      var status = this.status,
          typ = this.typ,
          badge = this.badge;

      var style = [_label2.default.label];
      if (typ) {
        style.push(_label2.default[typ]);
      }
      if (status) {
        style.push(_label2.default['' + status + typ]);
      }
      if (badge) {
        style.push(_label2.default.badge);
      }
      return style;
    }
  },
  render: function render(h) {
    var $slots = this.$slots,
        style = this.style;

    return h(
      'div',
      { 'class': style },
      [$slots.default]
    );
  }
};

module.exports = Label;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _babelHelperVueJsxMergeProps = __webpack_require__(6);

var _babelHelperVueJsxMergeProps2 = _interopRequireDefault(_babelHelperVueJsxMergeProps);

var _isEnv = __webpack_require__(42);

var _lightbox = __webpack_require__(77);

var _lightbox2 = _interopRequireDefault(_lightbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var lbDiv = void 0;
var lbDivID = 'owl-ui-lb';
if (_isEnv.isBrowser && !document.querySelector('#' + lbDivID)) {
  lbDiv = document.createElement('div');
  lbDiv.id = lbDivID;

  document.body.appendChild(lbDiv);
}

var LightBox = {
  name: 'LightBox',
  props: {
    width: {
      type: [String, Number],
      default: 700
    },
    closeOnESC: {
      type: Boolean,
      default: false
    },
    closeOnClickMask: {
      type: Boolean,
      default: false
    },
    bgColor: {
      type: String,
      default: 'rgba(255, 255, 255, .8)'
    }
  },

  data: function data() {
    return {
      opened: false
    };
  },


  watch: {
    opened: function opened(bool) {
      var _this = this;

      if (bool) {
        (function () {
          var view = _this.view;

          lbDiv.appendChild(view.$el);
          document.body.style.overflow = 'hidden';
          _this.$nextTick(function () {
            view.$el.focus();
          });
        })();
      } else {
        lbDiv.innerHTML = '';
        document.body.style.overflow = 'visible';
      }
    }
  },

  methods: {
    open: function open(ev) {
      if (ev) {
        ev.preventDefault();
      }

      this.opened = true;
      this.$emit('open');
    },
    close: function close(ev) {
      if (ev) {
        ev.preventDefault();
      }

      this.opened = false;
      this.$emit('close');
    }
  },

  computed: {
    view: function view() {
      return this.$children.find(function (vm) {
        return vm.$el.getAttribute('data-role') === 'lb-view';
      });
    }
  },

  render: function render(h) {
    var $slots = this.$slots;

    return h(
      'div',
      { 'class': [_lightbox2.default.lbWrap] },
      [$slots.default]
    );
  }
};

LightBox.Close = {
  name: 'LightBoxClose',
  props: {
    event: {
      type: String,
      default: 'click'
    }
  },

  render: function render(h) {
    var $slots = this.$slots,
        event = this.event,
        $parent = this.$parent;


    var opts = {
      on: _defineProperty({}, event, $parent.$parent.close)
    };
    return h(
      'div',
      (0, _babelHelperVueJsxMergeProps2.default)([opts, {
        attrs: { 'data-role': 'lb-close' },
        'class': [_lightbox2.default.close] }]),
      [$slots.default]
    );
  }
};

LightBox.Open = {
  name: 'LightBoxOpen',
  props: {
    event: {
      type: String,
      default: 'click'
    }
  },

  render: function render(h) {
    var $slots = this.$slots,
        event = this.event;

    var opts = {
      on: _defineProperty({}, event, this.$parent.open)
    };
    return h(
      'div',
      (0, _babelHelperVueJsxMergeProps2.default)([opts, {
        attrs: { 'data-role': 'lb-open' },
        'class': [_lightbox2.default.open] }]),
      [$slots.default]
    );
  }
};

LightBox.View = {
  name: 'LightBoxView',
  props: {},

  computed: {
    viewStyle: function viewStyle() {
      var width = this.$parent.width;


      if (!isNaN(+width)) {
        width = width + 'px';
      }
      return {
        width: width
      };
    },
    style: function style() {
      var _$parent = this.$parent,
          bgColor = _$parent.bgColor,
          opened = _$parent.opened;


      return {
        backgroundColor: bgColor,
        display: opened ? 'block' : 'none'
      };
    }
  },

  render: function render(h) {
    var $slots = this.$slots,
        viewStyle = this.viewStyle,
        style = this.style;
    var _$parent2 = this.$parent,
        closeOnESC = _$parent2.closeOnESC,
        closeOnClickMask = _$parent2.closeOnClickMask,
        close = _$parent2.close;


    var on = {};

    if (closeOnClickMask) {
      on.click = close;
    }

    if (closeOnESC) {
      on.keydown = function (ev) {
        if (ev.keyCode !== 27) {
          return;
        }

        close(ev);
      };
    }

    return h(
      'div',
      (0, _babelHelperVueJsxMergeProps2.default)([{
        attrs: { 'data-role': 'lb-view', tabindex: '-1' },
        'class': [_lightbox2.default.lb], style: style }, { on: on }]),
      [h(
        'div',
        { 'class': [_lightbox2.default.view], on: {
            'click': function click(ev) {
              return ev.stopPropagation();
            }
          },
          style: viewStyle },
        [h(
          'span',
          { 'class': [_lightbox2.default.x], on: {
              'click': close
            }
          },
          []
        ), $slots.default]
      )]
    );
  }
};

module.exports = LightBox;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _page = __webpack_require__(79);

var _page2 = _interopRequireDefault(_page);

var _delegateTo = __webpack_require__(1);

var _delegateTo2 = _interopRequireDefault(_delegateTo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Page = {
  name: 'Page',
  props: {
    limit: {
      type: Number,
      default: 10,
      required: true
    },

    total: {
      type: Number,
      required: true
    },

    typ: {
      type: String,
      default: 'pages' },

    align: {
      type: String,
      default: 'center' // `left`, `center` or `right`
    },

    toPage: {
      type: Number,
      default: 1
    }
  },

  data: function data() {
    return {
      page: this.toPage
    };
  },


  watch: {
    toPage: function toPage(p) {
      this.page = p;
    }
  },

  methods: {
    jumpTo: (0, _delegateTo2.default)('li', function (ev) {
      var delegateTarget = ev.delegateTarget;

      var page = delegateTarget.getAttribute('data-page');

      page = +page || page;

      if (this.page === page || page === '...' || !page) {
        return;
      }

      if (page === 'next') {
        this.page += 1;
      } else if (page === 'prev') {
        this.page -= 1;
      } else {
        this.page = page;
      }

      this.$emit('page', {
        page: this.page
      });
    })
  },

  computed: {
    totalPages: function totalPages() {
      var total = this.total,
          limit = this.limit;


      return Math.ceil(total / limit);
    },
    pageData: function pageData() {
      var keep = 5;

      var mid = Math.floor(keep / 2);
      var range = keep - 1;

      return { mid: mid, range: range };
    },
    pageLists: function pageLists() {
      var page = this.page,
          $createElement = this.$createElement,
          totalPages = this.totalPages,
          pageData = this.pageData;

      var pagesVNodes = [],
          h = $createElement;

      var start = Math.max(1, page - pageData.mid);
      var end = Math.min(page + pageData.mid, totalPages);

      var hasStartSpread = start > 1;
      var hasEndSpread = end <= totalPages - 1;

      for (var i = start; i <= end; i++) {
        var css = _defineProperty({}, _page2.default.on, i === page);
        pagesVNodes.push(h(
          'li',
          {
            attrs: { 'data-page': i, 'data-role': 'page' },
            'class': [css] },
          []
        ));
      }

      return {
        pagesVNodes: pagesVNodes,
        hasStartSpread: hasStartSpread,
        hasEndSpread: hasEndSpread
      };
    },
    typeRender: function typeRender() {
      var typ = this.typ,
          page = this.page,
          pageLists = this.pageLists,
          totalPages = this.totalPages,
          $createElement = this.$createElement;

      var h = $createElement;
      var VNode = h(
        'ol',
        null,
        [h(
          'li',
          {
            attrs: { 'data-page': 'prev', hidden: page <= 1 },
            'class': [_page2.default.prev] },
          []
        ), h(
          'li',
          {
            attrs: { 'data-page': '1', hidden: !pageLists.hasStartSpread }
          },
          []
        ), h(
          'li',
          {
            attrs: { 'data-page': '...', hidden: !pageLists.hasStartSpread }
          },
          []
        ), pageLists.pagesVNodes, h(
          'li',
          {
            attrs: { 'data-page': '...', hidden: !pageLists.hasEndSpread }
          },
          []
        ), h(
          'li',
          {
            attrs: { 'data-page': totalPages, hidden: !pageLists.hasEndSpread }
          },
          []
        ), h(
          'li',
          {
            attrs: { 'data-page': 'next', hidden: page >= totalPages },
            'class': [_page2.default.next] },
          []
        )]
      );

      if (typ === 'number') {
        VNode = h(
          'ol',
          null,
          [h(
            'li',
            {
              attrs: { 'data-page': 'prev', hidden: page <= 1 },
              'class': [_page2.default.prev] },
            []
          ), h(
            'li',
            null,
            [page, ' of ', totalPages]
          ), h(
            'li',
            {
              attrs: { 'data-page': 'next', hidden: page >= totalPages },
              'class': [_page2.default.next] },
            []
          )]
        );
      }
      return VNode;
    }
  },

  render: function render(h) {
    var jumpTo = this.jumpTo,
        align = this.align,
        typeRender = this.typeRender;


    return h(
      'nav',
      { 'class': [_page2.default.page], attrs: { 'data-align': align },
        on: {
          'click': jumpTo
        }
      },
      [typeRender]
    );
  }
};

module.exports = Page;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _icon = __webpack_require__(2);

var _icon2 = _interopRequireDefault(_icon);

var _radio = __webpack_require__(80);

var _radio2 = _interopRequireDefault(_radio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Radio = {
  name: 'Radio',
  props: {
    on: {
      type: Boolean,
      default: false
    },

    name: {
      type: String,
      default: ''
    }
  },

  data: function data() {
    return {
      active: this.on
    };
  },

  methods: {
    handleClick: function handleClick(e) {
      e.stopPropagation();
      var $parent = this.$parent,
          active = this.active,
          name = this.name;


      $parent.$children.forEach(function (child) {
        return child.active = false;
      });
      this.active = true;

      var data = _defineProperty({}, name, this.active);
      this.$emit('change', data);
      $parent.$emit('handleSingleRadioChange', data);
    }
  },

  watch: {
    on: function on(newVal) {
      var $parent = this.$parent,
          active = this.active,
          name = this.name;

      $parent.$children.forEach(function (child) {
        return child.active = false;
      });
      this.active = newVal;
      $parent.$emit('handleSingleRadioChange', _defineProperty({}, name, newVal));
    }
  },

  render: function render(h) {
    var active = this.active,
        handleClick = this.handleClick,
        $slots = this.$slots;

    return h(
      'div',
      {
        on: {
          'click': handleClick
        },
        'class': [_radio2.default.radio] },
      [active ? h(
        _icon2.default,
        {
          attrs: { typ: 'radio-on', fill: '#6c7173' }
        },
        []
      ) : h(
        _icon2.default,
        {
          attrs: { typ: 'radio', fill: '#b0b0b0', 'data-radio': true }
        },
        []
      ), $slots.default]
    );
  }
};

Radio.Group = {
  name: 'RadioGroup',

  data: function data() {
    return {
      radioData: {}
    };
  },


  methods: {
    radioGroupOnChange: function radioGroupOnChange(data) {
      this._radioData[this._on] = false;
      this._on = Object.keys(data)[0];

      this.$emit('change', _extends({}, this._radioData, data));
    }
  },

  mounted: function mounted() {
    var _this = this;

    this._radioData = {};

    var getReduceData = function getReduceData() {
      return _this.$children.reduce(function (data, child) {
        var name = child.name,
            on = child.on;

        data[name] = on;
        if (on) {
          _this._on = name;
        }
        return data;
      }, {});
    };

    this._radioData = getReduceData();

    this.$on('handleSingleRadioChange', function (data) {
      _this.radioGroupOnChange(data);
    });
  },
  render: function render(h) {
    var $slots = this.$slots;


    return h(
      'div',
      { 'class': [_radio2.default.raGroup] },
      [$slots.default]
    );
  }
};

module.exports = Radio;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _delegateTo = __webpack_require__(1);

var _delegateTo2 = _interopRequireDefault(_delegateTo);

var _select = __webpack_require__(81);

var _select2 = _interopRequireDefault(_select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Select = {
  name: 'Select',

  props: {
    options: {
      type: Array,
      required: true
    },

    optionsRender: {
      type: Function
    },

    isOpened: {
      type: Boolean,
      default: false
    },

    isDisabled: {
      type: Boolean,
      default: false
    },

    name: {
      type: String,
      default: ''
    }
  },

  data: function data() {
    this._selectedIdx = 0;

    return {
      opened: this.isOpened,
      value: '',
      title: []
    };
  },


  watch: {
    isOpened: function isOpened(newVal) {
      this.opened = newVal;
    }
  },

  methods: {
    close: function close() {
      this.opened = false;
    },
    toggleMenu: function toggleMenu() {
      if (this.isDisabled) {
        return;
      }

      this.opened = !this.opened;
    },


    _handleOnChange: (0, _delegateTo2.default)('[data-role="select-option"]', function (ev) {
      var delegateTarget = ev.delegateTarget;
      var _getTitle = this._getTitle,
          options = this.options,
          _selectedIdx = this._selectedIdx;

      var index = Array.from(delegateTarget.parentNode.children).indexOf(delegateTarget);

      if (index === _selectedIdx) {
        return;
      }

      this._selectedIdx = index;
      this.title = _getTitle({ option: options[index] });
      this.value = options[index].value;
      this.opened = false;

      this.$emit('change', {
        value: this.value,
        index: index
      });
    }),

    _getTitle: function _getTitle(_ref) {
      var option = _ref.option,
          index = _ref.index;
      var optionsRender = this.optionsRender;


      return optionsRender ? optionsRender({ option: option, index: index }) : option.title;
    }
  },

  computed: {
    css: function css() {
      var opened = this.opened,
          isDisabled = this.isDisabled;

      var style = {};
      style[_select2.default.selectOpen] = opened;
      style[_select2.default.disabled] = isDisabled;
      return style;
    },
    renderOptions: function renderOptions() {
      var _this = this;

      var options = this.options,
          _getTitle = this._getTitle;

      var h = this.$createElement;
      var hasSelected = false;

      var _options = options.map(function (option, index) {
        if (option.selected) {
          hasSelected = true;
          _this._selectedIdx = index;
          _this.title = _getTitle({ option: option });
          _this.value = option.value;
        }

        return h(
          'div',
          {
            attrs: { 'data-role': 'select-option', 'data-idx': index }
          },
          [_getTitle({ option: option, index: index })]
        );
      });

      if (!hasSelected) {
        this.title = _getTitle({ option: options[0] });
        this.value = options[0].value;
      }
      return _options;
    }
  },

  render: function render(h) {
    var close = this.close,
        name = this.name,
        _handleOnChange = this._handleOnChange,
        renderOptions = this.renderOptions,
        css = this.css,
        toggleMenu = this.toggleMenu,
        value = this.value,
        title = this.title;


    return h(
      'div',
      { 'class': [_select2.default.selecter, css], on: {
          'blur': close
        },
        attrs: { tabindex: '-1' }
      },
      [h(
        'div',
        { 'class': [_select2.default.selectTitle], on: {
            'click': toggleMenu
          }
        },
        [h(
          'div',
          { 'class': [_select2.default.titleText] },
          [title]
        ), h(
          'div',
          { 'class': [_select2.default.titleRight] },
          [h(
            'div',
            { 'class': [_select2.default.arrow] },
            []
          )]
        )]
      ), h(
        'div',
        { 'class': [_select2.default.optionBox, css], on: {
            'click': _handleOnChange
          }
        },
        [renderOptions]
      ), h(
        'input',
        {
          attrs: { type: 'hidden', name: name, value: value }
        },
        []
      )]
    );
  }
};

module.exports = Select;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _switch = __webpack_require__(82);

var _switch2 = _interopRequireDefault(_switch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Switch = {
  name: 'Switch',
  props: {
    checked: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: 'data'
    },
    typ: {
      type: String,
      default: 'default' //or 'special'
    }
  },
  data: function data() {
    return {
      check: this.checked
    };
  },

  watch: {
    checked: function checked() {
      this.check = this.checked;
    }
  },
  methods: {
    handleClick: function handleClick() {
      var name = this.name;

      this.check = !this.check;
      var data = _defineProperty({}, name, this.check);
      this.$emit('change', data);
    }
  },
  computed: {
    style: function style() {
      var typ = this.typ;

      var style = {
        checkbox: [_switch2.default[typ + 'SwitchButton']],
        div: [_switch2.default[typ + 'Switch']]
      };
      return style;
    }
  },
  render: function render(h) {
    var handleClick = this.handleClick,
        check = this.check,
        $slots = this.$slots,
        style = this.style;

    return h(
      'div',
      { 'class': [_switch2.default.wrapper], on: {
          'click': handleClick
        }
      },
      [h(
        'input',
        {
          attrs: { type: 'checkbox', checked: check },
          'class': style.checkbox },
        []
      ), h(
        'div',
        { 'class': style.div },
        [h(
          'label',
          { 'class': [_switch2.default.toggle] },
          []
        ), $slots.default]
      )]
    );
  }
};

Switch.Open = {
  name: 'SwitchOpen',
  render: function render(h) {
    var $slots = this.$slots;

    return h(
      'span',
      { 'class': [_switch2.default.labelOpen] },
      [$slots.default]
    );
  }
};

Switch.Close = {
  name: 'SwitchClose',
  render: function render(h) {
    var $slots = this.$slots;

    return h(
      'span',
      { 'class': [_switch2.default.labelClose] },
      [$slots.default]
    );
  }
};
module.exports = Switch;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _delegateTo = __webpack_require__(1);

var _delegateTo2 = _interopRequireDefault(_delegateTo);

var _tab = __webpack_require__(83);

var _tab2 = _interopRequireDefault(_tab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tab = {
  name: 'Tab',
  data: function data() {
    return {
      tabs: {},
      selectedIdx: 0,
      selectedName: ''
    };
  },
  mounted: function mounted() {
    //find selected
    var $slots = this.$slots;

    var selectedChild = $slots.tabHead.find(function (slot) {
      return slot.child.isSelected;
    });
    if (!selectedChild) {
      selectedChild = $slots.tabHead[0];
      $slots.tabHead[0].child.selected = '1';
    }
    this.selectedIdx = $slots.tabHead.indexOf(selectedChild);
    this.selectedName = selectedChild.child.name;
    this.switchContent();
  },


  methods: {
    switchContent: function switchContent() {
      var $slots = this.$slots,
          selectedIdx = this.selectedIdx,
          selectedName = this.selectedName;

      $slots.tabContent.forEach(function (slot) {
        slot.child.isSelected = false;
      });
      $slots.tabContent[selectedIdx].child.isSelected = true;
      this.$emit('change', {
        name: selectedName,
        idx: selectedIdx
      });
    },

    clickTab: (0, _delegateTo2.default)('[data-role="tab-head"]', function (e) {
      var delegateTarget = e.delegateTarget;

      var idx = Array.from(delegateTarget.parentNode.children).indexOf(delegateTarget);

      if (idx === this.selectedIdx) {
        return;
      }

      this.selectedIdx = idx;
      this.selectedName = this.$slots.tabHead[idx].child.name;
      this.$slots.tabHead.forEach(function (slot) {
        return slot.child.selected = '0';
      });
      this.$slots.tabHead[idx].child.selected = '1';
      this.switchContent();
    })
  },

  render: function render(h) {
    var $slots = this.$slots,
        clickTab = this.clickTab;

    return h(
      'div',
      null,
      [h(
        'div',
        { 'class': [_tab2.default.tHead], on: {
            'click': clickTab
          }
        },
        [$slots.tabHead]
      ), h(
        'div',
        null,
        [$slots.tabContent]
      )]
    );
  }
};

Tab.Head = {
  name: 'TabHead',
  props: {
    isSelected: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: '',
      required: true
    }
  },
  data: function data() {
    return {
      selected: this.isSelected ? '1' : '0'
    };
  },
  render: function render(h) {
    var $slots = this.$slots,
        selected = this.selected;

    return h(
      'div',
      {
        attrs: { 'data-selected': selected, 'data-role': 'tab-head' },
        'class': [_tab2.default.tHead] },
      [$slots.default]
    );
  }
};

Tab.Content = {
  name: 'TabContent',
  props: {
    name: {
      type: String,
      default: '',
      required: true
    }
  },
  data: function data() {
    return {
      isSelected: false
    };
  },
  render: function render(h) {
    var $slots = this.$slots,
        isSelected = this.isSelected;

    var selected = isSelected ? '1' : '0';
    return h(
      'div',
      {
        attrs: { 'data-selected': selected, 'data-role': 'tab-content' }
      },
      [$slots.default]
    );
  }
};

module.exports = Tab;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _tip = __webpack_require__(84);

var _tip2 = _interopRequireDefault(_tip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var offset = function offset(el) {
  var top = 0,
      left = 0;

  while (el) {
    top += el.offsetTop;
    left += el.offsetLeft;

    el = el.offsetParent;
  }

  return { top: top, left: left };
};

var Tip = {
  name: 'Tip',
  props: {
    pos: {
      type: String,
      default: 'down'
    },

    event: {
      type: String,
      default: 'mouseenter'
    },

    delay: {
      type: Number,
      default: 50
    }
  },

  mounted: function mounted() {
    var event = this.event,
        $el = this.$el,
        pos = this.pos,
        $children = this.$children,
        delay = this.delay;

    var _body = document.body;
    var _context = $children[0].$el.cloneNode(true);
    _context.style.display = 'block';
    _context.setAttribute('id', 'tipContext2');

    $el.addEventListener(event, function (ev) {
      _body.appendChild(_context);
      var currentTarget = ev.currentTarget;

      var _offset = offset(currentTarget),
          left = _offset.left,
          top = _offset.top;

      var oWidth = currentTarget.offsetWidth;
      var oHeight = currentTarget.offsetHeight;
      var cWidth = _context.offsetWidth;
      var cHeight = _context.offsetHeight;

      if (pos === 'down') {
        _context.style.left = left + oWidth / 2 - cWidth / 2 + 'px';
        _context.style.top = top + oHeight + 10 + 'px';
      } else if (pos === 'up') {
        _context.style.left = left + oWidth / 2 - cWidth / 2 + 'px';
        _context.style.top = top - oHeight - 10 + 'px';
      } else if (pos === 'left') {
        _context.style.left = left - cWidth - 10 + 'px';
        _context.style.top = top + oHeight / 2 - cHeight / 2 + 'px';
      } else if (pos === 'right') {
        _context.style.left = left + oWidth + 10 + 'px';
        _context.style.top = top + oHeight / 2 - cHeight / 2 + 'px';
      }

      setTimeout(function () {
        _context.style.opacity = 1;
      }, delay);
    }, false);

    $el.addEventListener('mouseleave', function (ev) {
      _context.style.opacity = 0;
      _body.removeChild(_context);
    }, false);
  },
  render: function render(h) {
    var pos = this.pos,
        $slots = this.$slots;

    return h(
      'div',
      { 'class': [_tip2.default.tip], attrs: { 'data-pos': pos }
      },
      [$slots.default]
    );
  }
};

Tip.Context = {
  name: 'TipContext',
  props: {
    width: {
      type: [String, Number],
      default: 'auto'
    }
  },

  computed: {
    setWidth: function setWidth() {
      var width = this.width;


      return {
        width: width + 'px'
      };
    }
  },

  render: function render(h) {
    var $slots = this.$slots,
        setWidth = this.setWidth,
        $parent = this.$parent;

    return h(
      'div',
      { 'class': [_tip2.default.tipContext], style: setWidth, attrs: { 'data-pos': $parent.pos }
      },
      [$slots.default]
    );
  }
};

module.exports = Tip;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

/*! cash-dom 1.3.5, https://github.com/kenwheeler/cash @license MIT */
;(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    module.exports = factory();
  } else {
    root.cash = root.$ = factory();
  }
})(this, function () {
  var doc = document, win = window, ArrayProto = Array.prototype, slice = ArrayProto.slice, filter = ArrayProto.filter, push = ArrayProto.push;

  var noop = function () {}, isFunction = function (item) {
    // @see https://crbug.com/568448
    return typeof item === typeof noop && item.call;
  }, isString = function (item) {
    return typeof item === typeof "";
  };

  var idMatch = /^#[\w-]*$/, classMatch = /^\.[\w-]*$/, htmlMatch = /<.+>/, singlet = /^\w+$/;

  function find(selector, context) {
    context = context || doc;
    var elems = (classMatch.test(selector) ? context.getElementsByClassName(selector.slice(1)) : singlet.test(selector) ? context.getElementsByTagName(selector) : context.querySelectorAll(selector));
    return elems;
  }

  var frag;
  function parseHTML(str) {
    if (!frag) {
      frag = doc.implementation.createHTMLDocument();
      var base = frag.createElement("base");
      base.href = doc.location.href;
      frag.head.appendChild(base);
    }

    frag.body.innerHTML = str;

    return frag.body.childNodes;
  }

  function onReady(fn) {
    if (doc.readyState !== "loading") {
      fn();
    } else {
      doc.addEventListener("DOMContentLoaded", fn);
    }
  }

  function Init(selector, context) {
    if (!selector) {
      return this;
    }

    // If already a cash collection, don't do any further processing
    if (selector.cash && selector !== win) {
      return selector;
    }

    var elems = selector, i = 0, length;

    if (isString(selector)) {
      elems = (idMatch.test(selector) ?
      // If an ID use the faster getElementById check
      doc.getElementById(selector.slice(1)) : htmlMatch.test(selector) ?
      // If HTML, parse it into real elements
      parseHTML(selector) :
      // else use `find`
      find(selector, context));

      // If function, use as shortcut for DOM ready
    } else if (isFunction(selector)) {
      onReady(selector);return this;
    }

    if (!elems) {
      return this;
    }

    // If a single DOM element is passed in or received via ID, return the single element
    if (elems.nodeType || elems === win) {
      this[0] = elems;
      this.length = 1;
    } else {
      // Treat like an array and loop through each item.
      length = this.length = elems.length;
      for (; i < length; i++) {
        this[i] = elems[i];
      }
    }

    return this;
  }

  function cash(selector, context) {
    return new Init(selector, context);
  }

  var fn = cash.fn = cash.prototype = Init.prototype = { // jshint ignore:line
    cash: true,
    length: 0,
    push: push,
    splice: ArrayProto.splice,
    map: ArrayProto.map,
    init: Init
  };

  Object.defineProperty(fn, "constructor", { value: cash });

  cash.parseHTML = parseHTML;
  cash.noop = noop;
  cash.isFunction = isFunction;
  cash.isString = isString;

  cash.extend = fn.extend = function (target) {
    target = target || {};

    var args = slice.call(arguments), length = args.length, i = 1;

    if (args.length === 1) {
      target = this;
      i = 0;
    }

    for (; i < length; i++) {
      if (!args[i]) {
        continue;
      }
      for (var key in args[i]) {
        if (args[i].hasOwnProperty(key)) {
          target[key] = args[i][key];
        }
      }
    }

    return target;
  };

  function each(collection, callback) {
    var l = collection.length, i = 0;

    for (; i < l; i++) {
      if (callback.call(collection[i], collection[i], i, collection) === false) {
        break;
      }
    }
  }

  function matches(el, selector) {
    var m = el && (el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector || el.oMatchesSelector);
    return !!m && m.call(el, selector);
  }

  function getCompareFunction(selector) {
    return (
    /* Use browser's `matches` function if string */
    isString(selector) ? matches :
    /* Match a cash element */
    selector.cash ? function (el) {
      return selector.is(el);
    } :
    /* Direct comparison */
    function (el, selector) {
      return el === selector;
    });
  }

  function unique(collection) {
    return cash(slice.call(collection).filter(function (item, index, self) {
      return self.indexOf(item) === index;
    }));
  }

  cash.extend({
    merge: function (first, second) {
      var len = +second.length, i = first.length, j = 0;

      for (; j < len; i++, j++) {
        first[i] = second[j];
      }

      first.length = i;
      return first;
    },

    each: each,
    matches: matches,
    unique: unique,
    isArray: Array.isArray,
    isNumeric: function (n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    }

  });

  var uid = cash.uid = "_cash" + Date.now();

  function getDataCache(node) {
    return (node[uid] = node[uid] || {});
  }

  function setData(node, key, value) {
    return (getDataCache(node)[key] = value);
  }

  function getData(node, key) {
    var c = getDataCache(node);
    if (c[key] === undefined) {
      c[key] = node.dataset ? node.dataset[key] : cash(node).attr("data-" + key);
    }
    return c[key];
  }

  function removeData(node, key) {
    var c = getDataCache(node);
    if (c) {
      delete c[key];
    } else if (node.dataset) {
      delete node.dataset[key];
    } else {
      cash(node).removeAttr("data-" + name);
    }
  }

  fn.extend({
    data: function (name, value) {
      if (isString(name)) {
        return (value === undefined ? getData(this[0], name) : this.each(function (v) {
          return setData(v, name, value);
        }));
      }

      for (var key in name) {
        this.data(key, name[key]);
      }

      return this;
    },

    removeData: function (key) {
      return this.each(function (v) {
        return removeData(v, key);
      });
    }

  });

  var notWhiteMatch = /\S+/g;

  function getClasses(c) {
    return isString(c) && c.match(notWhiteMatch);
  }

  function hasClass(v, c) {
    return (v.classList ? v.classList.contains(c) : new RegExp("(^| )" + c + "( |$)", "gi").test(v.className));
  }

  function addClass(v, c, spacedName) {
    if (v.classList) {
      v.classList.add(c);
    } else if (spacedName.indexOf(" " + c + " ")) {
      v.className += " " + c;
    }
  }

  function removeClass(v, c) {
    if (v.classList) {
      v.classList.remove(c);
    } else {
      v.className = v.className.replace(c, "");
    }
  }

  fn.extend({
    addClass: function (c) {
      var classes = getClasses(c);

      return (classes ? this.each(function (v) {
        var spacedName = " " + v.className + " ";
        each(classes, function (c) {
          addClass(v, c, spacedName);
        });
      }) : this);
    },

    attr: function (name, value) {
      if (!name) {
        return undefined;
      }

      if (isString(name)) {
        if (value === undefined) {
          return this[0] ? this[0].getAttribute ? this[0].getAttribute(name) : this[0][name] : undefined;
        }

        return this.each(function (v) {
          if (v.setAttribute) {
            v.setAttribute(name, value);
          } else {
            v[name] = value;
          }
        });
      }

      for (var key in name) {
        this.attr(key, name[key]);
      }

      return this;
    },

    hasClass: function (c) {
      var check = false, classes = getClasses(c);
      if (classes && classes.length) {
        this.each(function (v) {
          check = hasClass(v, classes[0]);
          return !check;
        });
      }
      return check;
    },

    prop: function (name, value) {
      if (isString(name)) {
        return (value === undefined ? this[0][name] : this.each(function (v) {
          v[name] = value;
        }));
      }

      for (var key in name) {
        this.prop(key, name[key]);
      }

      return this;
    },

    removeAttr: function (name) {
      return this.each(function (v) {
        if (v.removeAttribute) {
          v.removeAttribute(name);
        } else {
          delete v[name];
        }
      });
    },

    removeClass: function (c) {
      if (!arguments.length) {
        return this.attr("class", "");
      }
      var classes = getClasses(c);
      return (classes ? this.each(function (v) {
        each(classes, function (c) {
          removeClass(v, c);
        });
      }) : this);
    },

    removeProp: function (name) {
      return this.each(function (v) {
        delete v[name];
      });
    },

    toggleClass: function (c, state) {
      if (state !== undefined) {
        return this[state ? "addClass" : "removeClass"](c);
      }
      var classes = getClasses(c);
      return (classes ? this.each(function (v) {
        var spacedName = " " + v.className + " ";
        each(classes, function (c) {
          if (hasClass(v, c)) {
            removeClass(v, c);
          } else {
            addClass(v, c, spacedName);
          }
        });
      }) : this);
    } });

  fn.extend({
    add: function (selector, context) {
      return unique(cash.merge(this, cash(selector, context)));
    },

    each: function (callback) {
      each(this, callback);
      return this;
    },

    eq: function (index) {
      return cash(this.get(index));
    },

    filter: function (selector) {
      if (!selector) {
        return this;
      }

      var comparator = (isFunction(selector) ? selector : getCompareFunction(selector));

      return cash(filter.call(this, function (e) {
        return comparator(e, selector);
      }));
    },

    first: function () {
      return this.eq(0);
    },

    get: function (index) {
      if (index === undefined) {
        return slice.call(this);
      }
      return (index < 0 ? this[index + this.length] : this[index]);
    },

    index: function (elem) {
      var child = elem ? cash(elem)[0] : this[0], collection = elem ? this : cash(child).parent().children();
      return slice.call(collection).indexOf(child);
    },

    last: function () {
      return this.eq(-1);
    }

  });

  var camelCase = (function () {
    var camelRegex = /(?:^\w|[A-Z]|\b\w)/g, whiteSpace = /[\s-_]+/g;
    return function (str) {
      return str.replace(camelRegex, function (letter, index) {
        return letter[index === 0 ? "toLowerCase" : "toUpperCase"]();
      }).replace(whiteSpace, "");
    };
  }());

  var getPrefixedProp = (function () {
    var cache = {}, doc = document, div = doc.createElement("div"), style = div.style;

    return function (prop) {
      prop = camelCase(prop);
      if (cache[prop]) {
        return cache[prop];
      }

      var ucProp = prop.charAt(0).toUpperCase() + prop.slice(1), prefixes = ["webkit", "moz", "ms", "o"], props = (prop + " " + (prefixes).join(ucProp + " ") + ucProp).split(" ");

      each(props, function (p) {
        if (p in style) {
          cache[p] = prop = cache[prop] = p;
          return false;
        }
      });

      return cache[prop];
    };
  }());

  cash.prefixedProp = getPrefixedProp;
  cash.camelCase = camelCase;

  fn.extend({
    css: function (prop, value) {
      if (isString(prop)) {
        prop = getPrefixedProp(prop);
        return (arguments.length > 1 ? this.each(function (v) {
          return v.style[prop] = value;
        }) : win.getComputedStyle(this[0])[prop]);
      }

      for (var key in prop) {
        this.css(key, prop[key]);
      }

      return this;
    }

  });

  function compute(el, prop) {
    return parseInt(win.getComputedStyle(el[0], null)[prop], 10) || 0;
  }

  each(["Width", "Height"], function (v) {
    var lower = v.toLowerCase();

    fn[lower] = function () {
      return this[0].getBoundingClientRect()[lower];
    };

    fn["inner" + v] = function () {
      return this[0]["client" + v];
    };

    fn["outer" + v] = function (margins) {
      return this[0]["offset" + v] + (margins ? compute(this, "margin" + (v === "Width" ? "Left" : "Top")) + compute(this, "margin" + (v === "Width" ? "Right" : "Bottom")) : 0);
    };
  });

  function registerEvent(node, eventName, callback) {
    var eventCache = getData(node, "_cashEvents") || setData(node, "_cashEvents", {});
    eventCache[eventName] = eventCache[eventName] || [];
    eventCache[eventName].push(callback);
    node.addEventListener(eventName, callback);
  }

  function removeEvent(node, eventName, callback) {
    var events = getData(node, "_cashEvents"), eventCache = (events && events[eventName]), index;

    if (!eventCache) {
      return;
    }

    if (callback) {
      node.removeEventListener(eventName, callback);
      index = eventCache.indexOf(callback);
      if (index >= 0) {
        eventCache.splice(index, 1);
      }
    } else {
      each(eventCache, function (event) {
        node.removeEventListener(eventName, event);
      });
      eventCache = [];
    }
  }

  fn.extend({
    off: function (eventName, callback) {
      return this.each(function (v) {
        return removeEvent(v, eventName, callback);
      });
    },

    on: function (eventName, delegate, callback, runOnce) {
      // jshint ignore:line

      var originalCallback;

      if (!isString(eventName)) {
        for (var key in eventName) {
          this.on(key, delegate, eventName[key]);
        }
        return this;
      }

      if (isFunction(delegate)) {
        callback = delegate;
        delegate = null;
      }

      if (eventName === "ready") {
        onReady(callback);
        return this;
      }

      if (delegate) {
        originalCallback = callback;
        callback = function (e) {
          var t = e.target;

          while (!matches(t, delegate)) {
            if (t === this) {
              return (t = false);
            }
            t = t.parentNode;
          }

          if (t) {
            originalCallback.call(t, e);
          }
        };
      }

      return this.each(function (v) {
        var finalCallback = callback;
        if (runOnce) {
          finalCallback = function () {
            callback.apply(this, arguments);
            removeEvent(v, eventName, finalCallback);
          };
        }
        registerEvent(v, eventName, finalCallback);
      });
    },

    one: function (eventName, delegate, callback) {
      return this.on(eventName, delegate, callback, true);
    },

    ready: onReady,

    trigger: function (eventName, data) {
      var evt = doc.createEvent("HTMLEvents");
      evt.data = data;
      evt.initEvent(eventName, true, false);
      return this.each(function (v) {
        return v.dispatchEvent(evt);
      });
    }

  });

  function encode(name, value) {
    return "&" + encodeURIComponent(name) + "=" + encodeURIComponent(value).replace(/%20/g, "+");
  }

  function getSelectMultiple_(el) {
    var values = [];
    each(el.options, function (o) {
      if (o.selected) {
        values.push(o.value);
      }
    });
    return values.length ? values : null;
  }

  function getSelectSingle_(el) {
    var selectedIndex = el.selectedIndex;
    return selectedIndex >= 0 ? el.options[selectedIndex].value : null;
  }

  function getValue(el) {
    var type = el.type;
    if (!type) {
      return null;
    }
    switch (type.toLowerCase()) {
      case "select-one":
        return getSelectSingle_(el);
      case "select-multiple":
        return getSelectMultiple_(el);
      case "radio":
        return (el.checked) ? el.value : null;
      case "checkbox":
        return (el.checked) ? el.value : null;
      default:
        return el.value ? el.value : null;
    }
  }

  fn.extend({
    serialize: function () {
      var query = "";

      each(this[0].elements || this, function (el) {
        if (el.disabled || el.tagName === "FIELDSET") {
          return;
        }
        var name = el.name;
        switch (el.type.toLowerCase()) {
          case "file":
          case "reset":
          case "submit":
          case "button":
            break;
          case "select-multiple":
            var values = getValue(el);
            if (values !== null) {
              each(values, function (value) {
                query += encode(name, value);
              });
            }
            break;
          default:
            var value = getValue(el);
            if (value !== null) {
              query += encode(name, value);
            }
        }
      });

      return query.substr(1);
    },

    val: function (value) {
      if (value === undefined) {
        return getValue(this[0]);
      } else {
        return this.each(function (v) {
          return v.value = value;
        });
      }
    }

  });

  function insertElement(el, child, prepend) {
    if (prepend) {
      var first = el.childNodes[0];
      el.insertBefore(child, first);
    } else {
      el.appendChild(child);
    }
  }

  function insertContent(parent, child, prepend) {
    var str = isString(child);

    if (!str && child.length) {
      each(child, function (v) {
        return insertContent(parent, v, prepend);
      });
      return;
    }

    each(parent, str ? function (v) {
      return v.insertAdjacentHTML(prepend ? "afterbegin" : "beforeend", child);
    } : function (v, i) {
      return insertElement(v, (i === 0 ? child : child.cloneNode(true)), prepend);
    });
  }

  fn.extend({
    after: function (selector) {
      cash(selector).insertAfter(this);
      return this;
    },

    append: function (content) {
      insertContent(this, content);
      return this;
    },

    appendTo: function (parent) {
      insertContent(cash(parent), this);
      return this;
    },

    before: function (selector) {
      cash(selector).insertBefore(this);
      return this;
    },

    clone: function () {
      return cash(this.map(function (v) {
        return v.cloneNode(true);
      }));
    },

    empty: function () {
      this.html("");
      return this;
    },

    html: function (content) {
      if (content === undefined) {
        return this[0].innerHTML;
      }
      var source = (content.nodeType ? content[0].outerHTML : content);
      return this.each(function (v) {
        return v.innerHTML = source;
      });
    },

    insertAfter: function (selector) {
      var _this = this;


      cash(selector).each(function (el, i) {
        var parent = el.parentNode, sibling = el.nextSibling;
        _this.each(function (v) {
          parent.insertBefore((i === 0 ? v : v.cloneNode(true)), sibling);
        });
      });

      return this;
    },

    insertBefore: function (selector) {
      var _this2 = this;
      cash(selector).each(function (el, i) {
        var parent = el.parentNode;
        _this2.each(function (v) {
          parent.insertBefore((i === 0 ? v : v.cloneNode(true)), el);
        });
      });
      return this;
    },

    prepend: function (content) {
      insertContent(this, content, true);
      return this;
    },

    prependTo: function (parent) {
      insertContent(cash(parent), this, true);
      return this;
    },

    remove: function () {
      return this.each(function (v) {
        return v.parentNode.removeChild(v);
      });
    },

    text: function (content) {
      if (content === undefined) {
        return this[0].textContent;
      }
      return this.each(function (v) {
        return v.textContent = content;
      });
    }

  });

  var docEl = doc.documentElement;

  fn.extend({
    position: function () {
      var el = this[0];
      return {
        left: el.offsetLeft,
        top: el.offsetTop
      };
    },

    offset: function () {
      var rect = this[0].getBoundingClientRect();
      return {
        top: rect.top + win.pageYOffset - docEl.clientTop,
        left: rect.left + win.pageXOffset - docEl.clientLeft
      };
    },

    offsetParent: function () {
      return cash(this[0].offsetParent);
    }

  });

  fn.extend({
    children: function (selector) {
      var elems = [];
      this.each(function (el) {
        push.apply(elems, el.children);
      });
      elems = unique(elems);

      return (!selector ? elems : elems.filter(function (v) {
        return matches(v, selector);
      }));
    },

    closest: function (selector) {
      if (!selector || this.length < 1) {
        return cash();
      }
      if (this.is(selector)) {
        return this.filter(selector);
      }
      return this.parent().closest(selector);
    },

    is: function (selector) {
      if (!selector) {
        return false;
      }

      var match = false, comparator = getCompareFunction(selector);

      this.each(function (el) {
        match = comparator(el, selector);
        return !match;
      });

      return match;
    },

    find: function (selector) {
      if (!selector || selector.nodeType) {
        return cash(selector && this.has(selector).length ? selector : null);
      }

      var elems = [];
      this.each(function (el) {
        push.apply(elems, find(selector, el));
      });

      return unique(elems);
    },

    has: function (selector) {
      var comparator = (isString(selector) ? function (el) {
        return find(selector, el).length !== 0;
      } : function (el) {
        return el.contains(selector);
      });

      return this.filter(comparator);
    },

    next: function () {
      return cash(this[0].nextElementSibling);
    },

    not: function (selector) {
      if (!selector) {
        return this;
      }

      var comparator = getCompareFunction(selector);

      return this.filter(function (el) {
        return !comparator(el, selector);
      });
    },

    parent: function () {
      var result = [];

      this.each(function (item) {
        if (item && item.parentNode) {
          result.push(item.parentNode);
        }
      });

      return unique(result);
    },

    parents: function (selector) {
      var last, result = [];

      this.each(function (item) {
        last = item;

        while (last && last.parentNode && last !== doc.body.parentNode) {
          last = last.parentNode;

          if (!selector || (selector && matches(last, selector))) {
            result.push(last);
          }
        }
      });

      return unique(result);
    },

    prev: function () {
      return cash(this[0].previousElementSibling);
    },

    siblings: function () {
      var collection = this.parent().children(), el = this[0];

      return collection.filter(function (i) {
        return i !== el;
      });
    }

  });


  return cash;
});

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(219)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(module, require('select'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod, global.select);
        global.clipboardAction = mod.exports;
    }
})(this, function (module, _select) {
    'use strict';

    var _select2 = _interopRequireDefault(_select);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    var ClipboardAction = function () {
        /**
         * @param {Object} options
         */
        function ClipboardAction(options) {
            _classCallCheck(this, ClipboardAction);

            this.resolveOptions(options);
            this.initSelection();
        }

        /**
         * Defines base properties passed from constructor.
         * @param {Object} options
         */


        _createClass(ClipboardAction, [{
            key: 'resolveOptions',
            value: function resolveOptions() {
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                this.action = options.action;
                this.emitter = options.emitter;
                this.target = options.target;
                this.text = options.text;
                this.trigger = options.trigger;

                this.selectedText = '';
            }
        }, {
            key: 'initSelection',
            value: function initSelection() {
                if (this.text) {
                    this.selectFake();
                } else if (this.target) {
                    this.selectTarget();
                }
            }
        }, {
            key: 'selectFake',
            value: function selectFake() {
                var _this = this;

                var isRTL = document.documentElement.getAttribute('dir') == 'rtl';

                this.removeFake();

                this.fakeHandlerCallback = function () {
                    return _this.removeFake();
                };
                this.fakeHandler = document.body.addEventListener('click', this.fakeHandlerCallback) || true;

                this.fakeElem = document.createElement('textarea');
                // Prevent zooming on iOS
                this.fakeElem.style.fontSize = '12pt';
                // Reset box model
                this.fakeElem.style.border = '0';
                this.fakeElem.style.padding = '0';
                this.fakeElem.style.margin = '0';
                // Move element out of screen horizontally
                this.fakeElem.style.position = 'absolute';
                this.fakeElem.style[isRTL ? 'right' : 'left'] = '-9999px';
                // Move element to the same position vertically
                var yPosition = window.pageYOffset || document.documentElement.scrollTop;
                this.fakeElem.addEventListener('focus', window.scrollTo(0, yPosition));
                this.fakeElem.style.top = yPosition + 'px';

                this.fakeElem.setAttribute('readonly', '');
                this.fakeElem.value = this.text;

                document.body.appendChild(this.fakeElem);

                this.selectedText = (0, _select2.default)(this.fakeElem);
                this.copyText();
            }
        }, {
            key: 'removeFake',
            value: function removeFake() {
                if (this.fakeHandler) {
                    document.body.removeEventListener('click', this.fakeHandlerCallback);
                    this.fakeHandler = null;
                    this.fakeHandlerCallback = null;
                }

                if (this.fakeElem) {
                    document.body.removeChild(this.fakeElem);
                    this.fakeElem = null;
                }
            }
        }, {
            key: 'selectTarget',
            value: function selectTarget() {
                this.selectedText = (0, _select2.default)(this.target);
                this.copyText();
            }
        }, {
            key: 'copyText',
            value: function copyText() {
                var succeeded = void 0;

                try {
                    succeeded = document.execCommand(this.action);
                } catch (err) {
                    succeeded = false;
                }

                this.handleResult(succeeded);
            }
        }, {
            key: 'handleResult',
            value: function handleResult(succeeded) {
                this.emitter.emit(succeeded ? 'success' : 'error', {
                    action: this.action,
                    text: this.selectedText,
                    trigger: this.trigger,
                    clearSelection: this.clearSelection.bind(this)
                });
            }
        }, {
            key: 'clearSelection',
            value: function clearSelection() {
                if (this.target) {
                    this.target.blur();
                }

                window.getSelection().removeAllRanges();
            }
        }, {
            key: 'destroy',
            value: function destroy() {
                this.removeFake();
            }
        }, {
            key: 'action',
            set: function set() {
                var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'copy';

                this._action = action;

                if (this._action !== 'copy' && this._action !== 'cut') {
                    throw new Error('Invalid "action" value, use either "copy" or "cut"');
                }
            },
            get: function get() {
                return this._action;
            }
        }, {
            key: 'target',
            set: function set(target) {
                if (target !== undefined) {
                    if (target && (typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object' && target.nodeType === 1) {
                        if (this.action === 'copy' && target.hasAttribute('disabled')) {
                            throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                        }

                        if (this.action === 'cut' && (target.hasAttribute('readonly') || target.hasAttribute('disabled'))) {
                            throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                        }

                        this._target = target;
                    } else {
                        throw new Error('Invalid "target" value, use a valid Element');
                    }
                }
            },
            get: function get() {
                return this._target;
            }
        }]);

        return ClipboardAction;
    }();

    module.exports = ClipboardAction;
});

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(52), __webpack_require__(221), __webpack_require__(86)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(module, require('./clipboard-action'), require('tiny-emitter'), require('good-listener'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod, global.clipboardAction, global.tinyEmitter, global.goodListener);
        global.clipboard = mod.exports;
    }
})(this, function (module, _clipboardAction, _tinyEmitter, _goodListener) {
    'use strict';

    var _clipboardAction2 = _interopRequireDefault(_clipboardAction);

    var _tinyEmitter2 = _interopRequireDefault(_tinyEmitter);

    var _goodListener2 = _interopRequireDefault(_goodListener);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var Clipboard = function (_Emitter) {
        _inherits(Clipboard, _Emitter);

        /**
         * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
         * @param {Object} options
         */
        function Clipboard(trigger, options) {
            _classCallCheck(this, Clipboard);

            var _this = _possibleConstructorReturn(this, (Clipboard.__proto__ || Object.getPrototypeOf(Clipboard)).call(this));

            _this.resolveOptions(options);
            _this.listenClick(trigger);
            return _this;
        }

        /**
         * Defines if attributes would be resolved using internal setter functions
         * or custom functions that were passed in the constructor.
         * @param {Object} options
         */


        _createClass(Clipboard, [{
            key: 'resolveOptions',
            value: function resolveOptions() {
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                this.action = typeof options.action === 'function' ? options.action : this.defaultAction;
                this.target = typeof options.target === 'function' ? options.target : this.defaultTarget;
                this.text = typeof options.text === 'function' ? options.text : this.defaultText;
            }
        }, {
            key: 'listenClick',
            value: function listenClick(trigger) {
                var _this2 = this;

                this.listener = (0, _goodListener2.default)(trigger, 'click', function (e) {
                    return _this2.onClick(e);
                });
            }
        }, {
            key: 'onClick',
            value: function onClick(e) {
                var trigger = e.delegateTarget || e.currentTarget;

                if (this.clipboardAction) {
                    this.clipboardAction = null;
                }

                this.clipboardAction = new _clipboardAction2.default({
                    action: this.action(trigger),
                    target: this.target(trigger),
                    text: this.text(trigger),
                    trigger: trigger,
                    emitter: this
                });
            }
        }, {
            key: 'defaultAction',
            value: function defaultAction(trigger) {
                return getAttributeValue('action', trigger);
            }
        }, {
            key: 'defaultTarget',
            value: function defaultTarget(trigger) {
                var selector = getAttributeValue('target', trigger);

                if (selector) {
                    return document.querySelector(selector);
                }
            }
        }, {
            key: 'defaultText',
            value: function defaultText(trigger) {
                return getAttributeValue('text', trigger);
            }
        }, {
            key: 'destroy',
            value: function destroy() {
                this.listener.destroy();

                if (this.clipboardAction) {
                    this.clipboardAction.destroy();
                    this.clipboardAction = null;
                }
            }
        }]);

        return Clipboard;
    }(_tinyEmitter2.default);

    /**
     * Helper function to retrieve attribute value.
     * @param {String} suffix
     * @param {Element} element
     */
    function getAttributeValue(suffix, element) {
        var attribute = 'data-clipboard-' + suffix;

        if (!element.hasAttribute(attribute)) {
            return;
        }

        return element.getAttribute(attribute);
    }

    module.exports = Clipboard;
});

/***/ },
/* 54 */
/***/ function(module, exports) {

/**
 * A polyfill for Element.matches()
 */
if (Element && !Element.prototype.matches) {
    var proto = Element.prototype;

    proto.matches = proto.matchesSelector ||
                    proto.mozMatchesSelector ||
                    proto.msMatchesSelector ||
                    proto.oMatchesSelector ||
                    proto.webkitMatchesSelector;
}

/**
 * Finds the closest parent that matches a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @return {Function}
 */
function closest (element, selector) {
    while (element && element !== document) {
        if (element.matches(selector)) return element;
        element = element.parentNode;
    }
}

module.exports = closest;


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

var closest = __webpack_require__(54);

/**
 * Delegates event to a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function delegate(element, selector, type, callback, useCapture) {
    var listenerFn = listener.apply(this, arguments);

    element.addEventListener(type, listenerFn, useCapture);

    return {
        destroy: function() {
            element.removeEventListener(type, listenerFn, useCapture);
        }
    }
}

/**
 * Finds closest match and invokes callback.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Function}
 */
function listener(element, selector, type, callback) {
    return function(e) {
        e.delegateTarget = closest(e.target, selector);

        if (e.delegateTarget) {
            callback.call(element, e);
        }
    }
}

module.exports = delegate;


/***/ },
/* 56 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"badges":"_3DX-X"};

/***/ },
/* 57 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"logo":"_2xhSk"};

/***/ },
/* 58 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"ver":"_1LgP6"};

/***/ },
/* 59 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"cp":"_2uFxP","cpBoard":"DxCBI"};

/***/ },
/* 60 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"buttonWrapper":"_1w_SC","buttonGroupWrapper":"_1-XP_","buttonGroup":"_15BA5","buttonBig":"_2bgJ6"};

/***/ },
/* 61 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"hover":"_2YCjB","side":"-YhMq","main":"IXdHe","view":"_2sqoD"};

/***/ },
/* 62 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"dualGroup":"_3deKe","code":"_1czr2"};

/***/ },
/* 63 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"p":"uW6fe","boxs":"_2OnZi","midContent":"_3BcYC","social":"_1bYI3","avatar":"_1CL1r"};

/***/ },
/* 64 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"points":"_2dQmZ","point":"_3JzNI","img":"_1TGS6","mainContent":"_3HNsP","badges":"_3QArG","des":"UrFGQ"};

/***/ },
/* 65 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"icons":"_1IuL8"};

/***/ },
/* 66 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"wrapper":"_1VlL6","submit":"_3LxoW","demo":"_3lifM","pwdInputwrapper":"_2Jylf"};

/***/ },
/* 67 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"group":"_25hPt","dark":"_1scYU"};

/***/ },
/* 68 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"exampleWrapper":"-jQwv"};

/***/ },
/* 69 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"demo":"_2ufX7","demoMsg":"lDTMs","title":"_2iN7S"};

/***/ },
/* 70 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"button":"_3kagF","disabled":"_2YAWg","outline":"QT4LL","primary":"_2lv9w","primaryOutline":"_3P2NC","buttonGroup":"_1p6_m"};

/***/ },
/* 71 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"cbGroup":"_1JXLi","cb":"_4E9En"};

/***/ },
/* 72 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"dual":"_1mx7U","input":"_32Ctd","dualWrapper":"_2EWkq","lists":"_3hqV0","listWrapper":"J5oNV","list":"_2htOK","highlight":"_1BMT0","arrow":"_3E-GF","doubleRight":"_3yha2","doubleLeft":"_1xQUZ"};

/***/ },
/* 73 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"flex":"_2SoeS","flexMid":"wwwnn","flexSplit":"_13VER"};

/***/ },
/* 74 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"gridFixed":"_3PKaW","ghead":"_14Ra5","loading-pie":"_2eAH3","gbody":"uQeuQ"};

/***/ },
/* 75 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"inputWrapper":"_1znPA","input":"_2y3V7","mustFill":"_2MB8F","normal":"_1qTPh","success":"_1kPIr","error":"_1w9VL","loadingPie":"_25SP3","icon":"_1UKWW","specialIcon":"_3PeU-"};

/***/ },
/* 76 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"label":"_26xNs","outline":"_22B_d","primary":"_2L_0u","error":"_3ab55","success":"_2xlpf","warning":"RjzHC","inverted":"_3ujmN","primaryoutline":"_1BjTD","erroroutline":"_17Gsl","successoutline":"CFq2-","warningoutline":"_3csi6","invertedoutline":"_2Vb6D","primarytag":"_1H85A","errortag":"_2jCTd","successtag":"_1rZ3m","warningtag":"_1g3_-","invertedtag":"_1MWVK","tag":"_1yGyd","badge":"zhh4z"};

/***/ },
/* 77 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"lbWrap":"_1CYuE","lb":"_2bOjj","view":"_14m81","x":"_3ZTSP","open":"bFl5s","close":"_2__05"};

/***/ },
/* 78 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"loadingpie":"zy0NX","loadingbar":"_1h6Rw"};

/***/ },
/* 79 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"page":"_166Xm","on":"_3nph_"};

/***/ },
/* 80 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"radio":"F_5Wq","raGroup":"_1bpI1"};

/***/ },
/* 81 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"selecter":"_1E_N4","arrow":"_1g91l","optionBox":"_3HHJJ","selectOpen":"_3FLsN","disabled":"_1DnHb","titleText":"_1ovbp","selectTitle":"_13-il","titleRight":"_2D_pO","body":"_3U2Ql"};

/***/ },
/* 82 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"wrapper":"_1GNwJ","specialSwitch":"_10Xil","labelOpen":"_1uZag","labelClose":"_1f2Pr","toggle":"_1G61M","defaultSwitch":"_3oEBo","specialSwitchButton":"_3HUq6","defaultSwitchButton":"uThs9"};

/***/ },
/* 83 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"tHead":"Xvmh-"};

/***/ },
/* 84 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"tip":"kEzM0","tipContext":"_1sxc1"};

/***/ },
/* 85 */
/***/ function(module, exports) {

/**
 * Check if argument is a HTML element.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.node = function(value) {
    return value !== undefined
        && value instanceof HTMLElement
        && value.nodeType === 1;
};

/**
 * Check if argument is a list of HTML elements.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.nodeList = function(value) {
    var type = Object.prototype.toString.call(value);

    return value !== undefined
        && (type === '[object NodeList]' || type === '[object HTMLCollection]')
        && ('length' in value)
        && (value.length === 0 || exports.node(value[0]));
};

/**
 * Check if argument is a string.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.string = function(value) {
    return typeof value === 'string'
        || value instanceof String;
};

/**
 * Check if argument is a function.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.fn = function(value) {
    var type = Object.prototype.toString.call(value);

    return type === '[object Function]';
};


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

var is = __webpack_require__(85);
var delegate = __webpack_require__(55);

/**
 * Validates all params and calls the right
 * listener function based on its target type.
 *
 * @param {String|HTMLElement|HTMLCollection|NodeList} target
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listen(target, type, callback) {
    if (!target && !type && !callback) {
        throw new Error('Missing required arguments');
    }

    if (!is.string(type)) {
        throw new TypeError('Second argument must be a String');
    }

    if (!is.fn(callback)) {
        throw new TypeError('Third argument must be a Function');
    }

    if (is.node(target)) {
        return listenNode(target, type, callback);
    }
    else if (is.nodeList(target)) {
        return listenNodeList(target, type, callback);
    }
    else if (is.string(target)) {
        return listenSelector(target, type, callback);
    }
    else {
        throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
    }
}

/**
 * Adds an event listener to a HTML element
 * and returns a remove listener function.
 *
 * @param {HTMLElement} node
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNode(node, type, callback) {
    node.addEventListener(type, callback);

    return {
        destroy: function() {
            node.removeEventListener(type, callback);
        }
    }
}

/**
 * Add an event listener to a list of HTML elements
 * and returns a remove listener function.
 *
 * @param {NodeList|HTMLCollection} nodeList
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNodeList(nodeList, type, callback) {
    Array.prototype.forEach.call(nodeList, function(node) {
        node.addEventListener(type, callback);
    });

    return {
        destroy: function() {
            Array.prototype.forEach.call(nodeList, function(node) {
                node.removeEventListener(type, callback);
            });
        }
    }
}

/**
 * Add an event listener to a selector
 * and returns a remove listener function.
 *
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenSelector(selector, type, callback) {
    return delegate(document.body, selector, type, callback);
}

module.exports = listen;


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match HTML entities and HTML characters. */
var reUnescapedHtml = /[&<>"'`]/g,
    reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

/** Used to map characters to HTML entities. */
var htmlEscapes = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '`': '&#96;'
};

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function(key) {
    return object == null ? undefined : object[key];
  };
}

/**
 * Used by `_.escape` to convert characters to HTML entities.
 *
 * @private
 * @param {string} chr The matched character to escape.
 * @returns {string} Returns the escaped character.
 */
var escapeHtmlChar = basePropertyOf(htmlEscapes);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var Symbol = root.Symbol;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Converts the characters "&", "<", ">", '"', "'", and "\`" in `string` to
 * their corresponding HTML entities.
 *
 * **Note:** No other characters are escaped. To escape additional
 * characters use a third-party library like [_he_](https://mths.be/he).
 *
 * Though the ">" character is escaped for symmetry, characters like
 * ">" and "/" don't need escaping in HTML and have no special meaning
 * unless they're part of a tag or unquoted attribute value. See
 * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
 * (under "semi-related fun fact") for more details.
 *
 * Backticks are escaped because in IE < 9, they can break out of
 * attribute values or HTML comments. See [#59](https://html5sec.org/#59),
 * [#102](https://html5sec.org/#102), [#108](https://html5sec.org/#108), and
 * [#133](https://html5sec.org/#133) of the
 * [HTML5 Security Cheatsheet](https://html5sec.org/) for more details.
 *
 * When working with HTML you should always
 * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
 * XSS vectors.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category String
 * @param {string} [string=''] The string to escape.
 * @returns {string} Returns the escaped string.
 * @example
 *
 * _.escape('fred, barney, & pebbles');
 * // => 'fred, barney, &amp; pebbles'
 */
function escape(string) {
  string = toString(string);
  return (string && reHasUnescapedHtml.test(string))
    ? string.replace(reUnescapedHtml, escapeHtmlChar)
    : string;
}

module.exports = escape;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */
/***/ function(module, exports) {

module.exports = "# Button\n\n## Props\n\n```js\n{\n  name: 'Button',\n  props: {\n    status: {\n      type: String,\n      default: ''\n    },\n    disabled: {\n      type: Boolean,\n      default: false\n    }\n  }\n},\n{\n  name: 'ButtonGroup',\n  props: {\n    options: {\n      type: Array,\n      required: true\n    }\n  }\n}\n```\n\n## Options data structure for `<Button.Group>`\nThe `options` of props must be an `Array Object`.\n\n```json\n[\n  { value: 'winnie', title: 'Winnie The Pooh' },\n  { value: 'piglet', title: 'Piglet' },\n  { value: 'tigger', title: 'Tigger', selected: true }\n]\n```\n\n## Usage\n### Button\nThere are four kinds of button style: `default`, `primary`, `outline`, `primaryOutline`\n```jsx\n<Button>\n  <Icon typ=\"plus\" size={16} />\n  新增公告\n</Button>\n<Button status=\"primaryOutline\">關閉</Button>\n```\nSet width of the button to 50% relative to its upper layer\n```jsx\n<Button status=\"primary\" class={[s.buttonBig]}>Submit</Button>\n.buttonBig {\n  width: 50%;\n}\n```\nUse `nativeOn-click={this.handleClick}` to bind click event\n```jsx\n<Button nativeOn-click={this.handleClick}>Click me</Button>\n```\n### Button Group  \nUse `onChange` as a listener to get data from `$emit('change')`\n```jsx\ndata() {\n return {\n   options: [\n     { value: 'winnie', title: 'Winnie The Pooh' },\n     { value: 'piglet', title: 'Piglet' },\n     { value: 'tigger', title: 'Tigger', selected: true }\n   ]\n }\n},\n\nmethods: {\n  getButtonGroupData((data) => console.log(data))\n},\n\nrender(h) {\n  return (\n    <Button.Group options={this.options} onChange={this.getButtonGroupData} />\n  )\n}\n```\n## Demo\n"

/***/ },
/* 203 */
/***/ function(module, exports) {

module.exports = "# Checkbox and CheckboxGroup\n\n## Props\n\n```js\nconst Checkbox = {\n  props: {\n    checked: {\n      type: Boolean,\n      default: false\n    },\n    name: {\n      type: String,\n      default: ''\n    }\n  }\n}\n```\n\n## Usage\n\n```jsx\n<Checkbox.Group>\n  <Checkbox name=\"1\">Pikachu</Checkbox>\n  <Checkbox name=\"2\">Eevee</Checkbox>\n</Checkbox.Group>\n```\nMake a checkbox named `all`. It can control other checkboxes\n```jsx\n<Checkbox.Group>\n  <Checkbox name=\"all\" checked={true}>All</Checkbox>\n  <Checkbox name=\"1\">Pikachu</Checkbox>\n  <Checkbox name=\"2\">Eevee</Checkbox>\n</Checkbox.Group>\n```\nUse `onChange` as a listener to get data from `$emit('change')`\nIt works both on `<Checkbox>` and `<Checkbox.Group>`\n```jsx\n//Define a Function to handle onChange and get Checkbox.Group data\nconst getCheckboxData = (data) => {\n  console.log(data)\n}\n\n<Checkbox.Group onChange={getCheckboxData}>\n  <Checkbox name=\"1\">Pikachu</Checkbox>\n  <Checkbox name=\"2\">Eevee</Checkbox>\n</Checkbox.Group>\n```\n\n## Demo\n"

/***/ },
/* 204 */
/***/ function(module, exports) {

module.exports = "# Custom Primary Color\n\nThere are default colors of `OWL UI`, just overwrite it as you need.\n\n```css\n:root {\n  --OWL-UI-COLOR-PRIMARY: #8962d9;\n  --OWL-UI-COLOR-PRIMARY-LIGHT: #cab6f2;\n  --OWL-UI-COLOR-PRIMARY-DARK: #6b5499;\n}\n```\n"

/***/ },
/* 205 */
/***/ function(module, exports) {

module.exports = "# DualList\n\n## Props\n```js\nprops: {\n  items: { //list on the left\n    type: Array,\n    default: () => {\n      return []\n    }\n  },\n  selectedItems: { //list on the right\n    type: Array,\n    default: () => {\n      return []\n    }\n  },\n  displayKey: {\n    type: String,\n    required: true\n  },\n  caseInsensitive: {\n    type: Boolean,\n    default: false\n  },\n  apiMode: {\n    type: Boolean,\n    default: false\n  },\n  leftLoading: {\n    type: Boolean,\n    default: false\n  }\n}\n```\n\n## Usage\nThe props -- `items` and `selectedItems` must be `Array Object`.  \nGive `displayKey` to determine what should be display in a single list\n```jsx\nconst labels = [\n  { name: 'Squirtle', id: '1' }, { name: 'Caterpie', id: '2' },\n  { name: 'Raticate', id: '3' }, { name: 'Fearow', id: '4' }\n]\n<DualList items={labels} selectedItems={selectedLabel} displayKey=\"name\" caseInsensitive />\n```\nUse `onChange `as a listener to get data from `$emit('change')`\n```jsx\n<DualList items={labels} onChange={this.getDualData} />\n```\nUse `caseInsensitive` props to determine whether the search feature is case insensitive\n```jsx\n<DualList items={labels} caseInsensitive />\n```\nAPI mode `<Dual />`:\n- additional props `apiMode` and `leftLoading`  \n- get left input box value by listener `onInputChange`\n- get remove input value event by listener `onRemove`\n```jsx\n<DualList apiMode onInputChange={this.getInputValue} onRemove={this.removeInput} leftLoading={true} />\n```\n\n## Demo\n"

/***/ },
/* 206 */
/***/ function(module, exports) {

module.exports = "# Flex\n\nFlex is a `flex-box` grid system component.\n\n## Props\n```js\nprops: {\n  grids: {\n    type: Number,\n    default: 12,\n  },\n\n  margin: {\n    type: Number,\n    default: 20,\n  },\n\n  mid: {\n    type: Boolean,\n    default: false,\n  },\n\n  split: {\n    type: Boolean,\n    default: false,\n  },\n},\n```\n\n## Flex.Col\n### Props\n\n```js\nprops: {\n  offset: {\n    type: [Number, String],\n  },\n  size: {\n    type: [Number, String],\n  },\n  width: {\n    type: [Number, String],\n  },\n  mid: {\n    type: Boolean,\n    default: false,\n  },\n},\n```\n\n## Usage\n\n```jsx\nimport { Flex } from 'owl-ui'\n\nrender(h) {\n  return (\n    <Flex>\n      <Flex.Col size=\"2\"></Flex.Col>\n      <Flex.Col size=\"10\"></Flex.Col>\n    </Flex>\n  )\n}\n```\n\n## Auto\n\n```jsx\nimport { Flex } from 'owl-ui'\n\nrender(h) {\n  return (\n    <Flex>\n      <Flex.Col size=\"auto\"></Flex.Col>\n      <Flex.Col size=\"auto\"></Flex.Col>\n    </Flex>\n  )\n}\n```\n\n## Grids\nSet your grid columns, default is `12`.\n\n```jsx\nrender(h) {\n  return (\n    <Flex grids={24}>\n\n    </Flex>\n  )\n}\n```\n\n## Margin\nSet the margin of each column, default is `20`.\n\n```jsx\nrender(h) {\n  return (\n    <Flex grids={24} margin={16}>\n\n    </Flex>\n  )\n}\n```\n\n## Split\n\n```jsx\nrender(h) {\n  return (\n    <Flex split>\n      <Flex.Col>left</Flex.Col>\n      <Flex.Col>right</Flex.Col>\n    </Flex>\n  )\n}\n```\n\n## Mid\n\n```jsx\nrender(h) {\n  return (\n    <Flex mid>\n      Mid Content\n    </Flex>\n  )\n}\n```\n\n## Social Example\n`Flex` also can support any typical layouts quickly and easy, for example is social media layout:\n\n```jsx\nrender(h) {\n  return (\n    <Flex margin={12}>\n      <Flex.Col >\n        <div class=\"avatar\">\n          <Flex mid>\n            avatar <br /> 76 x 76\n          </Flex>\n        </div>\n      </Flex.Col>\n      <Flex.Col size=\"auto\">\n        <p>Cepave @cepave said:</p>\n        <p>OWL UI is No.1. :)</p>\n      </Flex.Col>\n    </Flex>\n  )\n}\n```\n"

/***/ },
/* 207 */
/***/ function(module, exports) {

module.exports = "## INSTALLATION\n\nYou can install quickly through `npm` or `yarn`:\n\n```sh\nnpm install @cepave/owl-ui --save\n```\n\nor\n\n```sh\nyarn add @cepave/owl-ui\n```\n\n\n## GET STARTED\nEach component in `OWL UI` was named `CamelCase`, and you can find the all naming from [component](/#/components) lists.\n\n```js\nimport { Button, Select, ... } from '@cepave/owl-ui'\n```\n"

/***/ },
/* 208 */
/***/ function(module, exports) {

module.exports = "# Icon\n\n## Props\n```js\nprops: {\n  typ: {\n    default: '',\n    required: true,\n    type: String,\n  },\n\n  size: {\n    type: [String, Number],\n    default: '20x20'\n  },\n},\n```\n\n## Usage\n\n```jsx\n<Icon typ=\"add\" size={20} />\n\n// same as [width] x [height]\n<Icon typ=\"add\" size=\"20x20\" />\n```\n\n## Colorful\nThe Icon component export as a standard `SVG` tag, you can `fill` the color free.\n\n```js\nimport { Icon } from 'owl-ui'\n\n<Icon fill=\"#e08600\" typ=\"alarm\" size={45} />\n```\n\n## Demo\n"

/***/ },
/* 209 */
/***/ function(module, exports) {

module.exports = "# Input\n\n## Props\n\n```js\nprops: {\n  name: {\n    type: String,\n    default: 'input',\n  },\n  icon: {\n    type: Array,\n  },\n  status: {\n    type: String,\n    default: 'normal'\n  },\n  val: {\n    type: [String, Number],\n    default: ''\n  },\n  placeholder: {\n    type: String,\n    default: ''\n  },\n  loading:{\n    type: Boolean,\n    default: false,\n  },\n  password: {\n    type: Boolean,\n    default: false\n  },\n  x: {\n    type: Boolean,\n    default: false\n  },\n  required: {\n    type: Boolean,\n    default: false\n  }\n}\n```\n\n## Usage\n\nget input value from `this.$refs.inputRef.value`\n```jsx\n<Input name=\"demo\" icon={['search', '#919799']} status=\"normal\" placeholder=\"type some words..\" ref=\"inputRef\" />\n```\nuse `loading` props to show loading pie\n```jsx\n<Input loading={true} />\n```\nuse `password` props to switch input type\n```jsx\n<Input password={true} />\n```\nuse props `x` and `x` icon to remove value when clicking on `x`\n```jsx\n<Input icon={['search', '#919799']} x={true} />\n```\nuse `required` props to add `*` beside `<Input>`\n```jsx\n<Input required={true} />\n```\n\nget `onClickX` event by `$on` and `$emit`\n```jsx\nmounted() {\n  this.$on('handleClickOnX', this.handleClickOnX)\n},\nmethods: {\n  handleClickOnX(data) {\n    console.log(data)\n  }\n}\n```\n\nUse `nativeOn-keypress={this.handleClick}` to bind keypress event\n```jsx\n<Input status=\"success\" nativeOn-keypress={this.handleKeyPress} />\n```\n\n## Demo\n"

/***/ },
/* 210 */
/***/ function(module, exports) {

module.exports = "# Label\n\n## Props\n\n```js\nprops: {\n  typ: {\n    type: String,\n    default: ''\n    //label, outline, tag\n  },\n  status: {\n    type: String,\n    default: ''\n    //six kinds of status: default, primary, success, error, warning, inverted\n  },\n  badge: {\n    type: Boolean,\n    default: false\n  }\n}\n```\n\n## Usage\n\n```jsx\n//Labels\n<Label>Default</Label>\n<Label status=\"primary\">Primary</Label>\n\n//Outline\n<Label typ=\"outline\">Default</Label>\n<Label typ=\"outline\" status=\"primary\">Primary</Label>\n\n//Tags\n<Label typ=\"tag\">Default</Label>\n<Label typ=\"tag\" status=\"primary\">Primary</Label>\n\n//Badges\n<Label badge={true}>Default</Label>\n<Label badge={true} status=\"primary\">1</Label>\n\n//Badge Outline\n<Label badge={true} typ=\"outline\">Default</Label>\n<Label badge={true} typ=\"outline\" status=\"primary\">1</Label>\n```\n\n## Demo\n"

/***/ },
/* 211 */
/***/ function(module, exports) {

module.exports = "# LightBox\n\n## Props\n\n```js \nprops: {\n  closeOnESC: {\n    type: Boolean,\n    default: false\n  },\n  closeOnClickMask: {\n    type: Boolean,\n    default: false,\n  },\n  bgColor: {\n    type: String,\n    default: 'rgba(255, 255, 255, .8)',\n  }\n},\n...\n```\n\n## LightBox.Open and LightBox.Close\nThis is a recommend way to open or close your lightbox, the default event type is `click`.\n\n## Events\n\n### open\nTriggers when LightBox is opened.\n\n### close\nTriggers when LightBox is closed.\n\n### Props\n```js\nprops: {\n  event: {\n    type: String,\n    default: 'click'\n  }\n},\n...\n```\n\n## Usage\n\n```jsx\n<LightBox>\n  <LightBox.Open>\n    Open LightBox\n  </LightBox.Open>\n  <LightBox.View>\n    ...\n  </LightBox.View>\n</LightBox>\n```\n"

/***/ },
/* 212 */
/***/ function(module, exports) {

module.exports = "# Loading\n\n## Props\n\n```js\nprops: {\n  typ: {\n    type: String,\n    default: 'pie',\n  },\n  size: {\n    type: [String, Number],\n  },\n  show: {\n    type: Boolean,\n    default: true\n  }\n}\n```\n\n## Usage\n\n```jsx\n<Loading typ=\"pie\" />\n\n//adding `width` x `height` to Loading Bar\n<Loading typ=\"bar\" size=\"100x10\" />\n\n//make Loading disappear\n<Loading show={false} />\n```\n\n## Demo\n"

/***/ },
/* 213 */
/***/ function(module, exports) {

module.exports = "# Page\n\n## props\n\n```js\nprops: {\n  limit: {\n    type: Number,\n    default: 10,\n    required: true,\n  },\n\n  total: {\n    type: Number,\n    required: true,\n  },\n\n  typ: {\n    type: String,\n    default: 'pages', // `pages`, `button`, `text` and `number`.\n  },\n\n  align: {\n    type: String,\n    default: 'center' // `left`, `center`, `right` and `around`.\n  },\n\n  toPage: {\n    type: Number,\n    default: 1,\n  }\n},\n...\n```\n\n### props.typ\nThe pagination's type, default is `pages`. Otherwise is `button`, `text` and `number`.\n\n\n### props.align\nThe pagination's alignment, default is `center`. Otherwise is `left`, `right` and `around`.\n\n## Usage\n\n```jsx\n<Page total={500} limit={20} />\n```\n\n## Events\n### page({ page })\nIt'll be triggered when switch page.\n\n## Get Current Page\nYou can access the `page` directly through `ref`.\n\n```jsx\nmounted() {\n  this.$refs.myPager.page // get page\n},\n\nrender(h) {\n  return (\n    <Page total={500} limit={20} ref=\"myPager\" />\n  )\n}\n```\n\n## The all  looks of Page's type\n\n"

/***/ },
/* 214 */
/***/ function(module, exports) {

module.exports = "# Radio and RadioGroup\n\n## props\n\n```js\nconst Radio = {\n  props: {\n    on: {\n      type: Boolean,\n      default: false\n    },\n    name: {\n      type: String,\n      default: ''\n    }\n  },\n}\n```\n\n## Usage\n```jsx\n<Radio.Group>\n  <Radio name=\"winnieThePooh\" on={true}>Winnie the Pooh</Radio>\n  <Radio name=\"piglet\">Piglet</Radio>\n  <Radio name=\"tigger\">Tigger</Radio>\n</Radio.Group>\n```\nUse `onChange` as a listener to get data from `$emit('change')`\nIt works both on `<Radio>` and `<Radio.Group>`\n```jsx\n//Define a Function to handle onChange and get Raio.Group data\nconst getRadioData = (data) => {\n  console.log(data)\n}\n\n<Radio.Group onChange={getRadioData}>\n  <Radio name=\"piglet\">Piglet</Radio>\n  <Radio name=\"tigger\">Tigger</Radio>\n  <Radio name=\"winnieThePooh\" on={true}>Winnie the Pooh</Radio>\n</Radio.Group>\n```\n\n## Demo\n"

/***/ },
/* 215 */
/***/ function(module, exports) {

module.exports = "# Select\n\n## Props\n\n```js\nprops: {\n  options: {\n    type: Array,\n    required: true,\n  },\n\n  optionsRender: {\n    type: Function\n  },\n\n  isOpened: {\n    type: Boolean,\n    default: false,\n  },\n\n  isDisabled: {\n    type: Boolean,\n    default: false,\n  },\n\n  name: {\n    type: String,\n    default: ''\n  }\n},\n...\n```\n\n## Options data structure\nThe `options` of props must be an `Array Object`.\n\n```json\n[\n  { value: '1d', title: '1 day' },\n  { value: '3d', title: '3 days', selected: true },\n  { value: '5d', title: '5 days' },\n]\n```\n### options.value [String]\nOption's value\n\n### options.title [String]\nDisplayed title\n\n### options.selected [Boolean]\nSet the default selected option\n\n### options.render [Function]\nCustom render template.\n\n## Events\n### change({ value, idx })\nGets value after changes.\n\n## Usage\n```jsx\ndata() {\n  options: [\n    { value: '1d', title: '1 day' },\n    { value: '3d', title: '3 days', selected: true },\n    { value: '5d', title: '5 days' },\n  ]\n},\n\nmethods: {\n  selectOnChange(data) {\n    console.log(data)\n  }\n},\n\nrender(h) {\n  const { selectOnChange, options } = this\n  return (\n    <Select onChange={selectOnChange} options={options} />\n  )\n}\n```\n\n## The Value\nYou also can get value directly thro `ref`\n\n```jsx\nmounted() {\n  // gets value\n  this.$refs.mySelect.value\n},\n\nrender(h) {\n  <Select ref=\"mySelect\" />\n}\n```\n\n## Custom Options Render\n\n```jsx\n\ndata() {\n  options: [\n    { value: '1d', title: '1 day' },\n    { value: '3d', title: '3 days', selected: true },\n    { value: '5d', title: '5 days' },\n  ]\n},\nrender(h) {\n  return (\n    <Select options={this.options} optionsRender={({ option })=>(\n      <b>{options.title}</b>\n    )}/>\n  )\n}\n```\n"

/***/ },
/* 216 */
/***/ function(module, exports) {

module.exports = "#Switch\n\n##props\n\n```js\nprops: {\n  checked: {\n    type: Boolean,\n    default: false\n  },\n  name: {\n    type: String,\n    default: 'data'\n  },\n  typ: {\n    type: String,\n    default: 'default'\n    //two different type: 'default' and 'special'\n  }\n}\n```\n\n##Switch.Open and Switch.Close\nThis is the recommended way to put words in Switch Button\n\n##Usage\n\nUse `onChange` as a listener to get data from `$emit('change')`\n```jsx\n//Define a Function to handle onChange and get switch button data\nconst getSwitchData = (data) => {\n  console.log(data)\n}\n\n<Switch checked={true} name=\"demo1\" onChange={getSwitchData}/>\n```\nSwitch can also handle dynamic changes of `checked`\n```jsx\nlet a = true\n\nsetTimeout(() => {\n  a = false\n}, 2000)\n\n<Switch checked={a}/>\n```\nUse `<Switch.Open>` and `<Switch.Close>` to put words into Switch Button\n```jsx\n<Switch checked={true} name=\"demo2\" typ=\"special\" onChange={getSwitchData}>\n  <Switch.Open>開</Switch.Open>\n  <Switch.Close>關</Switch.Close>\n</Switch>\n```\n\n##Demo\n"

/***/ },
/* 217 */
/***/ function(module, exports) {

module.exports = "# Tab\n\n## Props of Tab.Head and Tab.Content\n`name` of `Tab.Head` and `Tab.Content` are required, they will be matched\n```js\n{\n  name: 'Tab.Head',\n  props: {\n    isSelected: {\n      type: Boolean,\n      default: false\n    },\n    name: {\n      type: String,\n      default: '',\n      required: true\n    }\n  }\n},\n{\n  name: 'Tab.Content',\n  props: {\n    name: {\n      type: String,\n      default: '',\n      required: true\n    }\n  }\n}\n```\n\n## Usage\n\n- The sequence of `<Tab.Head>` and `<Tab.Content>` should be placed in order, eg. `1`,`2`,...or `Alarms`, `Alarm History`  \n- Must add attribute `slot=\"tabHead\"` in `<Tab.Head>` and `slot=\"tabContent\"` in `<Tab.Content>`\n- Use `onChange` as a listener to get data from `$emit('change')`\n```jsx\nconst getTabData = (data) => {\n  console.log(data)\n}\n<Tab onChange={getTabData}>\n  <Tab.Head slot=\"tabHead\" name=\"1\">Tab1</Tab.Head>\n  <Tab.Head slot=\"tabHead\" isSelected={true} name=\"2\">Tab2</Tab.Head>\n  <Tab.Content slot=\"tabContent\" name=\"1\">\n    <br />Hello, I am tab one\n  </Tab.Content>\n  <Tab.Content slot=\"tabContent\" name=\"2\">\n    <br />This is tab two\n  </Tab.Content>\n</Tab>\n```\nIt can be placed like this as well\n```jsx\n<Tab>\n  <Tab.Head slot=\"tabHead\" name=\"1\">Tab1</Tab.Head>\n  <Tab.Content slot=\"tabContent\" name=\"1\">\n    <br />Hello, I am tab one\n  </Tab.Content>\n  <Tab.Head slot=\"tabHead\" isSelected={true} name=\"2\">Tab2</Tab.Head>\n  <Tab.Content slot=\"tabContent\" name=\"2\">\n    <br />This is tab two\n  </Tab.Content>\n</Tab>\n```\n\n## Demo\n"

/***/ },
/* 218 */
/***/ function(module, exports) {

module.exports = "# Tip\n\n## Props\n\n```js\nprops: {\n  pos: {\n    type: String,\n    default: 'down',\n  },\n  event: {\n    type: String,\n    default: 'mouseenter'\n  },\n  delay: {\n    type: Number,\n    default: 50\n  }\n}\n```\n\n## Usage\n\n```jsx\n<Tip pos=\"right\">\n  hover me\n  <Tip.Context>\n    I am a tip\n  </Tip.Context>\n</Tip>\n```\n\n## Demo\n"

/***/ },
/* 219 */
/***/ function(module, exports) {

function select(element) {
    var selectedText;

    if (element.nodeName === 'SELECT') {
        element.focus();

        selectedText = element.value;
    }
    else if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
        element.focus();
        element.setSelectionRange(0, element.value.length);

        selectedText = element.value;
    }
    else {
        if (element.hasAttribute('contenteditable')) {
            element.focus();
        }

        var selection = window.getSelection();
        var range = document.createRange();

        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);

        selectedText = selection.toString();
    }

    return selectedText;
}

module.exports = select;


/***/ },
/* 220 */,
/* 221 */
/***/ function(module, exports) {

function E () {
  // Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}

E.prototype = {
  on: function (name, callback, ctx) {
    var e = this.e || (this.e = {});

    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });

    return this;
  },

  once: function (name, callback, ctx) {
    var self = this;
    function listener () {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    };

    listener._ = callback
    return this.on(name, listener, ctx);
  },

  emit: function (name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;

    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }

    return this;
  },

  off: function (name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];

    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }

    // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

    (liveEvents.length)
      ? e[name] = liveEvents
      : delete e[name];

    return this;
  }
};

module.exports = E;


/***/ },
/* 222 */
/***/ function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAAAeCAYAAADtubaCAAAAAXNSR0IArs4c6QAAEEFJREFUaAXtmwmQVMUZx783e7kssusS0FUXd8QDwiFEQUkIRxKFEJVDWY0mMcRYBEJKudVUKUlKo1wSiyISTcADhUVFQRFiShBEuTYRYQUhHCsoIocssizsMS+/7828oV/P7LBUaYEVuuh93d/1+vj311/3Gxw5ieRulRYSkdbiSBHPZqg6kiZ7xZUdEpKNzsVSfhLmzoiehiPgnKhNbpnkS5YMZOqLAcGVki655GCqpVonFYDiP4CjRJ5qVeL8edP+oNCZ2jdhBOoFhOsyvVvlToAwVjKlJRMuohMfqadbChIHc6+GRd4q2AZCJkhW4ZPO3LmqeSZ9Q0YgKSDcD6UAEEwj9/NAoEBIlUIwa0LiPt9SnDXNRbJckRCmI5EFAGmI89p7n6RSP8M7fUYgARDuFrxBSF4CDFdIVQMaqhZcR9xZl4izCjBkGi4kDaTUsemk1Q5w5q3e3ABrZ0RO8Qjo2o4npu48toiXJaOBYFDNNPAwv0UiGJRXBzjSnDYSSZvnXt/lAiWdSaf3CMQ9hLuEUPF8eVEaSd8GeQbtVyZgWNFMnOcvZYtgm4hbszqtnqK2bqEUrOzn/E1qLG691SVLlqSXlpb2rKur6+M4TpHrurVpaWnjR40ataZeJRgTJ07shM4N6FxG9Rzy5+hu4PnK2LFjP+KZMk2aNOmKSCRyIzqtEWxK3o+tjdQXjBkz5v2Uyhbz8ccfv/DYsWP9sHcVrPPIX2KLGEsWjh49ejllw6UGlR977LG8Dh06HO7Zs2e9m/bUqVObDhs2LGUA/+ijj16O5X68qy1P3Lh8QV82Z2RkvDZixIjV5lvjU8hWcSeniafkqMlOUVbP8Fm2OH/hHUcyooBIIS4OUeeulkOc0plPpBLzeePHj+9NeQoN187EE506AK2Iif0yTowVYkCYQvW7Ns+vo/8KAzFy+PDhOimBNGHChLbYfoz8owDDqKD/Vnp6+j0M5HqDnFCkLd8ClA8j/yvsMVpJUxkAHw7A3zS5yDu0ZSbPX0Dfj8wAZJaZMgCtWVVV1WJoHcnrec91gPUzUwYbYYA4EdoAk26W0Xsv1h8PGN6W4X7AKnLl914AaUqnKkfA0vyLwDtuQr1DquTAr2ZMqi673+38sq64lAkwjEFgIQMSAIMqQcunEy1tA+j8kgl4B3q9YIjp96uurl7Lqulp2mACBzB4q7BfLxhi+j+ora1dhfzNpr5ZhvdtbOkA34W9+sCgKm2QW0zb77f0e6KnYNDUFJnp0eLxv4BBdRQMmtoxJiOixehfwNADG2up1QsGlUSmC/15B/lBWo/GEFXyMzlLwg125jgEWZfvOuvzRTLq9XhqP5oUEJVns6WcWyjVFbf45GRPBvMOGvkoOe69TDk6vrNZs2abTBqTq+7979BAZ4OSbiMvMQg5Ks2EdGfQZ1NspPUTJd6VDfhesEGlelOmTDkX3mJkwieyo3ztJ/khbA315WlLoO/wW9HWq32+bqWUb/fr+lQ7fn3y5MntsLEAGhN04oRcBvlJxr4VZ0XXmde8f783Qr3d5RldI5tDl0YOS07Eu2/QuY4ufv0bzRwo5GjIdf/lxYgm/bi03QYuNeRQIfADSZG6W10ZFwWiJceeWcBgTrPIXG84ldCW8ZyEu+82aNCg+MZG59VjPA3ftlkL/X3yXHgf2zapnwOvEP1syrN0UCyZaurvkmcgt4J8zOLrpMyaPn16AER4H90SL7RktboDG6+QVyWxpX2cQlsuUcFwOLycxxda9hPt+7lfXrt27Y8p601xPIVCoVe1glyIFf88xcZxJgXsu2SNn14kl5k8LaOXBojahOSAXDgg5+Wr++S84XTLXR66Im9dqH3uutDAxrPl6YzbuZcGZK4XLioCHUJPxy1jLD9uTNlDZZQelbHfgwZgOMJCPBpmyvSOyu0o7S+4KFGQXaW6+l7ogQGmE3MbN25cSMzQnT1yFHv/DlOXzo+mM3kmDZ017LvtkO/Icwp19Qh2Wt+iRYstAHAI+h66fQHVp9yed36P/CvsdMVOe+irfJnYs6CiomKYT2OFdcJWP78ee2oMMBA7Yez0J1+DzMXw3jDloGXQl3FKKy4uruZdcyz+rYDPAy2ycXCoDLLbR44cuULLtOE2+G217CflA5gevLtVZmbmaOi464S0H5m3QxwbW7Nd5Pg3kEedbNme3lJebHSL/DLvObkyr1T+lHmfu68uNuY6pysJVI97qATLQQKOY++lHD8VWCg76Y0BSZugDKyoyxto0unIciLxW4YOHRpYLaYM5Z9a9V25ubnXEoRtws12YcIXYTswADpABFI/YeDr4N1q6e9hYPowgbqa4okB34xOHwi740QKpj4rLNAW3uNiq5i26KqMJ2x/2rlz5xvhl8aJFLDVf8aMGWcpDd4zJo9y00OHDvUBFLnI3WDxntV3KQ2e3YYqANlbg1LAclFNTc1SxFqorJEq8Lx9kNkXIm4Ic++QmDzzIjsziuSB3IedrnnvyHznOk4Kjjjbmoik6w5xgqQe4QCeraq13kdEhR1irIiT4CGYPHWXBaZFOnKv31GT7pfZYooYgIAt5P8wePDgCuzpiSEpGLKysnowwTtjg6/HQTNN0oExCX6Zk8UBJniiX489OxrbRneL9zqAfsuieVU9StK+sRav0d69ezspDb33ePzX5CP/czySLhoPNAbvOaMcaAM60xXMurWyOJZSt8frEH3q5R8/+UbJnqAHuJBh0iy6VMgfZbWRm5rPlznl41yprIluBaacXQ4BmEq8/+f0LxMA+S7Ihe4kPQmcb5mozc/P/7dFC1RBe8DVK5NVrAOpK+V+sr7YTDvofM+77777YyXu27evAJkYUqNiAGq1qWCXk/ErKyu9tmPLbo/XFtuGUV9tA5563AZtNSda1a7nHUMNfS2uZCvYogW9t4DP/nw8YcNrg26NUIuOczwvdIhF1wvwxbfCkHfU3IHYYXJ9oFArgKLWzZLsIw84kj+IW8ijSk2eFAxHsvAmXTiFFCYDT2ASkhv5aqkMdDmd78HqL/ctUwexwQSgknoHQyow4ErHjgagCYl3puwnW4cuRc3xxIQ29iu05Vm/rE94DGr8qOmxeIW9tXj0E/1BTy/IeuM9VpqyIVbrFx4otkLWnVpBkawb0PIqXblqD/zzh4k0IXaKHKFiJd0mDrEwd3ZjpNgF7DsKhxe4jkbvdvrUIqQfOHDgOxYtUGXf+yRAoEJgBgo9T/EQHfZtliEbAIOt19A6K627JVtbUFDwmdJ4X6A9TOA1luxJVfXyDJsrUihVA5o5Ph/5g8hX+nV9Etd445Gdnf0E1fUx3m7k1DMkeDCOnbLd+7TNoqYk3k9canjawKB+8UGRc/V1CpiCUaz+Vkwui0PjGQUC/+TTsMgnP2JGLk4EA2wvsAyFdmjRTDRO98vdJo3Bf4RBTQZPT0xPHHSs3NRB/kENvNgTy4qKisJE1S1xqe3t04mp09AyLrk1ssNNed6/VE8FMdrbJo/yT4hlfmDRTqqK/YCXMJXhLdS4xqRRDrQBmcFcxV+m19uMQwcdj3A4XJQMDGpHTxkf4iG+1I9UHgjUYW4k7yJXkXU6lJcOICoo6qQrWDLxnAqKCEiqhrmn0JVtLJ4ve/D5uxl6ijA7YcytOyxuelkCJxolzzXpTO73GdA506ZNS3Zs9EVf8Aux54UEXm/qJYtOVGyVJWuMpVZ/VY97XF79lJhlGVKBgI42zvQ12a8DbVEws0JLaMvNvszJPnNyckqY1GPJ9KA/Y9Oh2W3QS7RFtKEbvIiOhwFgW53pHueGpLu8xR1fd/FxrmI68QoG7b7umuwCw1e77uTF7IsKEJVVwGx/wpXDn3H0KHAlPRMdXdF4jGRJv2e4tSvkgybd+QGWviGQ9GKKuwj1FIG9nY5UMrilPNfg+qeaq12jZ7aJrfBj5+K4Sb2Y2kCtDF6tUqkfJb/O6ligdXTbMMkqE0/Yb6vepaSkJK28vFwD0xthtuOZFReKFbBViq1OPOMdBjjzkGU/TUg7oKxFdmmnTp2m+x+skK9AntGNJvh3sZKf8uv6ROZFZG4yacgdwAMW2JOLXIhFtI5nW0te27gZ+jqeOnOadIzepQ96+eb1ISTjvKX8gjf50ZlUhsuk62+muJUk668mP5ZI03U8N3Ht+BFHhu0ScT+nnjUAIFwQkUzusJ0IunotCT16rPDL0afGWK7MTgYG5IWJ3k2AZkfRGkwpJLvxHKmr1D+rq466TOh3ULS9QDr0DuTb4Sn/DsqDWbHzGbC+1FMmwDAE2T+icxU5GRj2MYgD/YH0jeGSf0NZ/audiiDcjK2pa9asGW8zU9V5R7Jto8QGg9pANkJccRvFw6ZN3qtX5JdDKyZ748HzTmh/Zzzu82XV+et2UMLElwMC9QnBrGEnt5PkUA5+QDKZ1SygQnYyqGd/KyShXIcraWzpjEOLZrXtl9HkJ1SRml2SWTcber2JU8DTdGosWUGUkOhAIWf1ViaDaH0+8ndCM32cKRIoY6N3gJCkgswVScgeiXdtZXvozsrabsvcc889ewB1L2QSeL6s+X7KGrGZyfNmJqFJkyYLsfe5SaM+06ybZRbJetqnn//t+MIUM8vx8YgC4vvOF0zxQxonpEzJrqf11JB5gcNWkFLV+/ztuo84pYM1SkmZcJm6gvqQN9uC2kkGcatNR2cmE9EVerITTECcwVqpBPZWBWzShMzLvMsGJVGU/In3dwS4HyZVhKg89DtTfBIbCVsjdO/9Mf23Y09d3QqOhFMFF2018H4N74i2iTwJMMbvDnx98wl/KXJXkeeZ9GRlZOLtOT4gS9x0nO48du/rk/4mIkPkz3zDu5dPTIGbTbVQyfwcXMTWkU0lyakgRGwRqV4kdbv6OmXjGrSKteFf0Q9kiHC9qEe3Hj+GmMoguKliCH0/rrQLOj9E9iDbx8a8vLxlOjnKa2giwi9Ety9ZJ+dc9DZg84+xOwiNY/LZBh+E1wLedIC9qD7bulXy2Tv7BFf5Cep8SdWtoh/v0LjiPDKz6SW9LX23efPmD/sfDI8DQvnL3AL2+H8i3lbsuBYTo5ZFZMJiPIJvTnXUwrH9XPuVAAjdai1ARL9wbmI9Xut8cFeyvVWtnJJ0IkCckkad4pdGtwy/Ed2c3QBhAN83NgQPV1GBXU1woUEIRcPHtLMQ0KOH5WE9z1C3Udya/qcbGPwun3kGRyAICOVd52xhbnsRni0gcIw5W57E8NvyOFenW5OuOpIG0dhv9QOWB4bahRKp6uWsH4yHOJO+CSOQCAhtdVeufPdIf0AxlNp2z1sQcG47JyT7GkFJwIT+wof7DIdPmgoEcculrvp3kh/u62z47U4Ip2ViX0/sSRLaadn4r6lR9Z8rir3o+K+yxJ3LNqH/je+W/We7HT88zzm7ucb4PpT0Wcu4urV8pMl4n+1hLgfS2c66X+/9mtr8lZkloCrH2FGy7nmajsZo0dr/4V87Ikg9BKvc8JxZ0rq4TMIAoh2eQuHwgdQd2i6f/GOjsznxl8ypDZ56LieJYkAwWVtCFD6C41rJqW/VqWvB/wDDS8ittNFzHQAAAABJRU5ErkJggg=="

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(13);


/***/ }
],[223]);