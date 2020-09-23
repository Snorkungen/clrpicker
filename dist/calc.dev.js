"use strict";

var sk = new Snorkungen(); // select elements 

var ccc = [],
    contrastCheckSwitch = false;
var rgbSliderData = document.querySelectorAll(".rgbSliderData"),
    rgbSlider = document.querySelectorAll(".rgbSlider"),
    clrPickerOut = document.querySelector(".color-picker__top"),
    clrPickerF = document.querySelector(".color-picker__funcs"),
    clrPickerSC = document.querySelector(".color-picker__saved"),
    clrPickerValues = document.querySelectorAll(".color-picker__value"),
    colorPicker = document.querySelector(".color-picker__container"),
    clrPickerSCd = document.querySelectorAll(".color-picker__contrast-color"),
    clrPickerSCr = document.querySelector(".color-picker__contrastR"),
    clrPickerSCc = document.querySelector(".color-picker__contrastC");
setBG();

var _loop = function _loop(i) {
  clrPickerF.children[i].onclick = function (e) {
    switch (clrPickerF.children[i].textContent) {
      case "Save":
        saveColor();
        break;

      case "Contrast Check":
        contrastCheck();
        break;

      default:
        break;
    }
  };
};

for (var i = 0; i < clrPickerF.children.length; i++) {
  _loop(i);
}

var _loop2 = function _loop2(_i) {
  rgbSlider[_i].oninput = function (e) {
    rgbSliderData[_i].textContent = e.target.value;
    setBG();
  };
};

for (var _i = 0; _i < rgbSlider.length; _i++) {
  _loop2(_i);
}

clrPickerSCc.onclick = function (e) {
  sk.setAttribute(clrPickerSCc, "class", "color-picker__contrastC hidden");
};

function contrastCheck() {
  contrastCheckSwitch = true;
  document.body.style.cursor = "crosshair";
  var r = rgbSliderData[0].textContent,
      g = rgbSliderData[1].textContent,
      b = rgbSliderData[2].textContent;
  ccc.push("".concat(intToHex(r)).concat(intToHex(g)).concat(intToHex(b)));
}

function saveColor() {
  var r = rgbSliderData[0].textContent,
      g = rgbSliderData[1].textContent,
      b = rgbSliderData[2].textContent,
      gIn = "rgb( ".concat(r, ",").concat(g, ",").concat(b, " )");

  for (var j = 0; j < clrPickerSC.children.length; j++) {
    if (clrPickerSC.children[j].children[1].textContent == gIn) return true;
  }

  if (clrPickerSC.children.length < 10) {
    var d = sk.createEl("div", clrPickerSC),
        d2 = sk.createEl("div", d),
        h = sk.createEl("h2", d),
        h2 = sk.createEl("h2", d),
        del = sk.createEl("button", d);
    sk.setAttribute(d, 'class', 'color-picker__saved-child');
    sk.setAttribute(del, 'class', 'cp-del');
    h.textContent = "rgb( ".concat(r, ",").concat(g, ",").concat(b, " )");
    h2.textContent = "#".concat(intToHex(r)).concat(intToHex(g)).concat(intToHex(b));
    d2.style.background = gIn;
    del.textContent = "X";
    d.addEventListener("click", function _callee() {
      var x;
      return regeneratorRuntime.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!contrastCheckSwitch) {
                _context.next = 19;
                break;
              }

              saveColor();
              ccc.push("".concat(intToHex(r)).concat(intToHex(g)).concat(intToHex(b)));
              _context.next = 5;
              return regeneratorRuntime.awrap(aw(ccc[0], ccc[1]));

            case 5:
              x = _context.sent;
              _context.next = 8;
              return regeneratorRuntime.awrap(x.q);

            case 8:
              _context.t0 = _context.sent;
              clrPickerSCd[0].style.background = "#" + _context.t0;
              _context.next = 12;
              return regeneratorRuntime.awrap(x.w);

            case 12:
              _context.t1 = _context.sent;
              clrPickerSCd[1].style.background = "#" + _context.t1;
              sk.setAttribute(clrPickerSCc, "class", "color-picker__contrastC");

              if (parseInt(x.r.ratio) >= 5.01) {
                clrPickerSCr.textContent = "Pass";
                sk.setAttribute(clrPickerSCr, "class", "color-picker__contrastR pass");
              } else {
                clrPickerSCr.textContent = "Fail";
                sk.setAttribute(clrPickerSCr, "class", "color-picker__contrastR fail");
              }

              document.body.style.cursor = "default";
              ccc = [];
              contrastCheckSwitch = false;

            case 19:
              rgbSliderData[0].textContent = r;
              rgbSliderData[1].textContent = g;
              rgbSliderData[2].textContent = b;
              rgbSlider[0].value = r;
              rgbSlider[1].value = g;
              rgbSlider[2].value = b;
              setBG();

            case 26:
            case "end":
              return _context.stop();
          }
        }
      });
    });

    del.onclick = function (e) {
      e.target.parentElement.remove();
    };

    return true;
  } else return false;
}

function setBG() {
  var r = rgbSliderData[0].textContent,
      g = rgbSliderData[1].textContent,
      b = rgbSliderData[2].textContent;
  clrPickerValues[0].textContent = "rgb( ".concat(r, ",").concat(g, ",").concat(b, " )");
  clrPickerValues[1].textContent = "#".concat(intToHex(r)).concat(intToHex(g)).concat(intToHex(b));
  var gIn = "rgb(".concat(r, ",").concat(g, ",").concat(b, ")");
  clrPickerOut.style.background = gIn;
}

intToHex(254);

function hexV(n) {
  switch (n) {
    case 10:
      return "A";

    case 11:
      return "B";

    case 12:
      return "C";

    case 13:
      return "D";

    case 14:
      return "E";

    case 15:
      return "F";

    default:
      return n;
  }
}

function intToHex(n) {
  var x = n / 16,
      z = x.toString().substring(2);

  if (x < 10) {
    z = x.toString().substring(1);
  }

  var y = ("0" + z) * 16,
      xf = Math.floor(x);
  return hexV(xf) + "" + hexV(y);
}

function aw(q, w) {
  var f;
  return regeneratorRuntime.async(function aw$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(fetch("https://webaim.org/resources/contrastchecker/?fcolor=".concat(q, "&bcolor=").concat(w, "&api")));

        case 2:
          f = _context2.sent;
          _context2.next = 5;
          return regeneratorRuntime.awrap(f.json());

        case 5:
          _context2.t0 = _context2.sent;
          _context2.t1 = q;
          _context2.t2 = w;
          return _context2.abrupt("return", {
            r: _context2.t0,
            q: _context2.t1,
            w: _context2.t2
          });

        case 9:
        case "end":
          return _context2.stop();
      }
    }
  });
}