"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Snorkungen = function Snorkungen() {
  _classCallCheck(this, Snorkungen);

  function t(t) {
    return new Promise(function (e) {
      setTimeout(function () {
        e(2);
      }, t);
    });
  }

  var e = 20,
      n = 10;

  var r = function r(t) {
    return "object" == _typeof(t);
  },
      i = function i(t) {
    return "string" == typeof t;
  },
      o = function o(t) {
    return "number" == typeof t;
  },
      s = function s(t) {
    return "function" == typeof t;
  },
      l = function l(t) {
    return t.sort(function () {
      return 1;
    }), t;
  },
      c = function c(t) {
    return t.sort(function () {
      return 2;
    }), t;
  },
      a = function a(t) {
    return !t;
  },
      u = function u(t, e) {
    return e.appendChild(document.createElement(t));
  },
      h = function h(t, e, n) {
    return t.setAttribute(e, n);
  },
      d = function d(t, e) {
    return t.textContent = e;
  },
      p = function p(t, i, s) {
    var l, c;
    if (!(o(i) && o(s) && r(t))) return !1;
    l = a(l) ? i : 0, c = a(c) ? s : 0, t.style.left = l - e + e + "px", t.style.top = c - n + n + "px";
  };

  this.verifyType = function (t, e) {
    if (!i(e)) return !1;

    switch (e) {
      case "object":
        return r(t);

      case "number":
        return o(t);

      case "string":
        return i(t);

      case "function":
        return s(t);

      default:
        return !1;
    }
  }, this.createEl = function (t, e) {
    return !(!r(e) || !i(t)) && u(t, e);
  }, this.removeEl = function (t) {
    return !!r(t) && t.parentNode.removeChild(t);
  }, this.setAttribute = function (t, e, n) {
    return !!(r(t) && i(e) && i(n)) && h(t, e, n);
  }, this.setTextContent = function (t, e) {
    return !(!r(t) || !i(e)) && d(t, e);
  }, this.emptyElement = function (t) {
    return !!r(t) && (t.innerHTML = "");
  }, this.styleDisplay = function (t, e) {
    return !(!i(e) || !r(t)) && (t.style.display = e);
  }, this.tooltip = new function () {
    var t = u("div", document.body);
    h(t, "class", "tooltip"), h(t, "hidden", ""), this.click = function (e) {
      t.removeAttribute("hidden"), p(t, e.clientX, e.clientY), t.textContent = e.target.dataset.tooltip, setTimeout(function () {
        h(t, "hidden", "");
      }, 4500), t.onclick = function (e) {
        h(t, "hidden", "");
      };
    };
  }(), this.assault = function (t, e) {
    if (!r(e) || !i(t)) return !1;

    if ("encode" == e.type) {
      var _n = "",
          _r = "";

      for (var _r2 = 0; _r2 < t.length; _r2++) {
        32 == t.charCodeAt(_r2) ? _n += e.n * e.n2 + "." : _n += t.charCodeAt(_r2) + e.magicNumber + ".";
      }

      var _i = l(_n.split("."));

      for (var _t = 0; _t < _i.length; _t++) {
        _i[_t] == e.n * e.n2 && "." == _i[_t].charAt(0) && (_i[_t] = _i[_t].substr(1)), _r += _i[_t] + ".";
      }

      return btoa(e.n * e.n2 + _r + "Snorkungen");
    }

    if ("decode" == e.type) {
      var _n2 = atob(t),
          _r3 = c(_n2.split(".")),
          _i2 = "";

      e.n = parseInt(_r3[_r3.length - 1]) / e.n2;

      for (var _t2 = 1; _t2 < _r3.length - 1; _t2++) {
        _r3[_t2] == e.n * e.n2 ? _i2 += " " : _i2 += String.fromCharCode(_r3[_t2] - e.magicNumber);
      }

      return _i2;
    }
  }, this.animateWord = function _callee(e, n, s) {
    var _r4, _i3, _e;

    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(i(e) && r(n) && o(s))) {
              _context.next = 13;
              break;
            }

            sk.emptyElement(n);
            _r4 = e.split(""), _i3 = n.children;

            _r4.forEach(function (t) {
              var e = u("span", n);
              d(e, t);
            });

            _e = 0;

          case 5:
            if (!(_e < _r4.length)) {
              _context.next = 12;
              break;
            }

            h(_i3[_e], "class", "show-span");
            _context.next = 9;
            return regeneratorRuntime.awrap(t(s));

          case 9:
            _e++;
            _context.next = 5;
            break;

          case 12:
            return _context.abrupt("return", !0);

          case 13:
            return _context.abrupt("return", !1);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    });
  };
};