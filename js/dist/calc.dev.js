"use strict";

var sk = new Snorkungen(); // select elements 

var rgbSliderData = document.querySelectorAll(".rgbSliderData"),
    rgbSlider = document.querySelectorAll(".rgbSlider"),
    clrPickerOut = document.querySelector(".color-picker__top"),
    clrPickerF = document.querySelector(".color-picker__funcs"),
    clrPickerSC = document.querySelector(".color-picker__saved"),
    clrPickerValues = document.querySelectorAll(".color-picker__value"),
    colorPicker = document.querySelector(".color-picker__container"),
    clrPickerSCd = document.querySelectorAll(".color-picker__contrast-color"),
    clrPickerSCr = document.querySelector(".color-picker__contrastR"),
    clrPickerSCc = document.querySelector(".color-picker__contrastC"),
    clrPickerSliderS = document.querySelector("#slider_sdd");
var ccc = [],
    contrastCheckSwitch = false,
    sliderSPrev = clrPickerSliderS.value;
setBG();
rgbSlider[0].value = rgbSlider[0].value;
rgbSlider[1].value = rgbSlider[1].value;
rgbSlider[2].value = rgbSlider[2].value;

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

clrPickerSliderS.oninput = function (e) {
  var d = e.target.value,
      u = d - sliderSPrev,
      s = u < 0 ? false : true,
      r = rgbSliderData[0].textContent,
      g = rgbSliderData[1].textContent,
      b = rgbSliderData[2].textContent;
  r = validateRGBnum(parseInt(r) + u);
  g = validateRGBnum(parseInt(g) + u);
  b = validateRGBnum(parseInt(b) + u);
  rgbSliderData[0].textContent = r;
  rgbSliderData[1].textContent = g;
  rgbSliderData[2].textContent = b;
  rgbSlider[0].value = r;
  rgbSlider[1].value = g;
  rgbSlider[2].value = b;
  setBG();
  return sliderSPrev = clrPickerSliderS.value;
};

function validateRGBnum(num) {
  if (num >= 255) return 255;else if (num <= 0) return 0;else return num;
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

  if (clrPickerSC.children.length < 0x4 + 0x1) {
    var d = sk.createEl("div", clrPickerSC),
        d2 = sk.createEl("div", d),
        h = sk.createEl("h2", d),
        h2 = sk.createEl("h2", d),
        del = sk.createEl("button", d),
        delSw = true;
<<<<<<< HEAD:dist/calc.dev.js
=======
    sk.setAttribute(d2, "draggable", "true");
    sk.setAttribute(d2, "data-value", "".concat(r, ",").concat(g, ",").concat(b));
    sk.setAttribute(d2, "class", "saved__color-D");
>>>>>>> drag-longterm:js/dist/calc.dev.js
    sk.setAttribute(d, 'class', 'color-picker__saved-child');
    sk.setAttribute(del, 'class', 'cp-del');
    h.textContent = "rgb( ".concat(r, ",").concat(g, ",").concat(b, " )");
    h2.textContent = "#".concat(intToHex(r)).concat(intToHex(g)).concat(intToHex(b));
    d2.style.background = gIn;
    del.textContent = "X";

    del.onclick = function (e) {
      e.target.parentElement.remove();
      delSw = false;
    };

    d.addEventListener("click", function _callee() {
      var x;
      return regeneratorRuntime.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!contrastCheckSwitch) {
<<<<<<< HEAD:dist/calc.dev.js
                _context.next = 21;
=======
                _context.next = 12;
>>>>>>> drag-longterm:js/dist/calc.dev.js
                break;
              }

              saveColor();
              ccc.push("".concat(intToHex(r)).concat(intToHex(g)).concat(intToHex(b)));
              _context.next = 5;
              return regeneratorRuntime.awrap(aw(ccc[1], ccc[0]));

            case 5:
              x = _context.sent;
              contratDisplay(x);
              document.body.style.cursor = "default";
              ccc = [];
              contrastCheckSwitch = false;
<<<<<<< HEAD:dist/calc.dev.js
              _context.next = 22;
              break;

            case 21:
              if (delSw) {
                rgbSliderData[0].textContent = r;
                rgbSliderData[1].textContent = g;
                rgbSliderData[2].textContent = b;
                rgbSlider[0].value = r;
                rgbSlider[1].value = g;
                rgbSlider[2].value = b;
                setBG();
                delSw = true;
              }

            case 22:
=======
              _context.next = 13;
              break;

            case 12:
              if (delSw) {
                rgbSliderData[0].textContent = r;
                rgbSliderData[1].textContent = g;
                rgbSliderData[2].textContent = b;
                rgbSlider[0].value = r;
                rgbSlider[1].value = g;
                rgbSlider[2].value = b;
                setBG();
                delSw = true;
              }

            case 13:
>>>>>>> drag-longterm:js/dist/calc.dev.js
            case "end":
              return _context.stop();
          }
        }
      });
    });
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

function contratDisplay(d) {
  var foreground = document.querySelector(".contrast__foreground"),
      wp = document.querySelectorAll(".w_p"),
      ratio = document.querySelector(".color-picker__contrastR");

  for (var _i2 = 0; _i2 < wp.length; _i2++) {
    switch (_i2) {
      case 0:
        if (d.r.AA == "fail") {
          sk.setAttribute(wp[_i2], "class", "w_p fail");
          wp[_i2].textContent = "Fail";
        } else {
          sk.setAttribute(wp[_i2], "class", "w_p pass");
          wp[_i2].textContent = "Pass";
        }

        break;

      case 1:
        if (d.r.AALarge == "fail") {
          sk.setAttribute(wp[_i2], "class", "w_p fail");
          wp[_i2].textContent = "Fail";
        } else {
          sk.setAttribute(wp[_i2], "class", "w_p pass");
          wp[_i2].textContent = "Pass";
        }

        break;

      case 2:
        if (d.r.AAA == "fail") {
          sk.setAttribute(wp[_i2], "class", "w_p fail");
          wp[_i2].textContent = "Fail";
        } else {
          sk.setAttribute(wp[_i2], "class", "w_p pass");
          wp[_i2].textContent = "Pass";
        }

        break;

      case 3:
        if (d.r.AAALarge == "fail") {
          sk.setAttribute(wp[_i2], "class", "w_p fail");
          wp[_i2].textContent = "Fail";
        } else {
          sk.setAttribute(wp[_i2], "class", "w_p pass");
          wp[_i2].textContent = "Pass";
        }

        break;
    }
  }

  ratio.textContent = d.r.ratio;
  foreground.style.background = "#" + d.q;
  foreground.style.color = "#" + d.w;
  var extraContrast = document.querySelector(".contrast__C"),
      extraStorage = document.querySelector(".storage__C"),
      extraNavc = document.querySelector("#contrast-nav"),
      extraNavs = document.querySelector("#storage-nav");
  extraNavc.className += " active";
  extraNavs.className = "extra__navB";
  sk.setAttribute(extraContrast, "class", "cc contrast__C");
  sk.setAttribute(extraStorage, "class", "cc storage__C hidden");
}