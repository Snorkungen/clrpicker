const sk = new Snorkungen;

// select elements 

const
    rgbSliderData = document.querySelectorAll(".rgbSliderData"),
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

let ccc = [],
    contrastCheckSwitch = false,
    sliderSPrev = clrPickerSliderS.value;

setBG();


rgbSlider[0].value = rgbSlider[0].value;
rgbSlider[1].value = rgbSlider[1].value;
rgbSlider[2].value = rgbSlider[2].value;


for (let i = 0; i < clrPickerF.children.length; i++) {
    clrPickerF.children[i].onclick = e => {
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
    }
}

clrPickerSliderS.oninput = e => {
    let d = e.target.value,
        u = d - sliderSPrev,
        s = u < 0 ? false : true,
        r = rgbSliderData[0].textContent,
        g = rgbSliderData[1].textContent,
        b = rgbSliderData[2].textContent;

    r=validateRGBnum(parseInt(r) + u);
    g=validateRGBnum(parseInt(g) + u);
    b=validateRGBnum(parseInt(b) + u);


    rgbSliderData[0].textContent = r;
    rgbSliderData[1].textContent = g;
    rgbSliderData[2].textContent = b;

    rgbSlider[0].value = r;
    rgbSlider[1].value = g;
    rgbSlider[2].value = b;

    setBG();
     return sliderSPrev = clrPickerSliderS.value;
}
function validateRGBnum (num) {
    if (num >= 255) return 255;
    else if (num <= 0) return 0;
    else return num;
}

for (let i = 0; i < rgbSlider.length; i++) {
    rgbSlider[i].oninput = e => {
        rgbSliderData[i].textContent = e.target.value;
        setBG();
    }
}

clrPickerSCc.onclick = e => {
    sk.setAttribute(clrPickerSCc, "class", "color-picker__contrastC hidden")
}

function contrastCheck() {
    contrastCheckSwitch = true;
    document.body.style.cursor = "crosshair";
    let r = rgbSliderData[0].textContent,
        g = rgbSliderData[1].textContent,
        b = rgbSliderData[2].textContent;
    ccc.push(`${intToHex(r)}${intToHex(g)}${intToHex(b)}`)
}

function saveColor() {
    let r = rgbSliderData[0].textContent,
        g = rgbSliderData[1].textContent,
        b = rgbSliderData[2].textContent,
        gIn = `rgb( ${r},${g},${b} )`;
        

    for (let j = 0; j < clrPickerSC.children.length; j++) {
        if (clrPickerSC.children[j].children[1].textContent == gIn) return true;
    }

    if (clrPickerSC.children.length < (0x4 + 0x1)) {
        let d = sk.createEl("div", clrPickerSC),
            d2 = sk.createEl("div", d),
            h = sk.createEl("h2", d),
            h2 = sk.createEl("h2", d),
            del = sk.createEl("button", d),
            delSw = true;

        sk.setAttribute(d, 'class', 'color-picker__saved-child');
        sk.setAttribute(del, 'class', 'cp-del');

        h.textContent = `rgb( ${r},${g},${b} )`;
        h2.textContent = `#${intToHex(r)}${intToHex(g)}${intToHex(b)}`;
        d2.style.background = gIn;
        del.textContent = "X"
        
        del.onclick = e => {
            e.target.parentElement.remove();
            delSw = false;
        }

        d.addEventListener("click", async () => {
            if (contrastCheckSwitch) {
                saveColor();
                ccc.push(`${intToHex(r)}${intToHex(g)}${intToHex(b)}`)
                let x = await aw(ccc[0], ccc[1]);
                clrPickerSCd[0].style.background = "#" + await x.q
                clrPickerSCd[1].style.background = "#" + await x.w

                sk.setAttribute(clrPickerSCc, "class", "color-picker__contrastC")
                if (parseInt(x.r.ratio) >= 5.01) {
                    clrPickerSCr.textContent = "Pass";
                    sk.setAttribute(clrPickerSCr, "class", "color-picker__contrastR pass")
                } else {
                    clrPickerSCr.textContent = "Fail";
                    sk.setAttribute(clrPickerSCr, "class", "color-picker__contrastR fail")
                }
                document.body.style.cursor = "default";
                ccc = []
                contrastCheckSwitch = false;

            } else if (delSw) {
                rgbSliderData[0].textContent = r;
                rgbSliderData[1].textContent = g;
                rgbSliderData[2].textContent = b;
    
                rgbSlider[0].value = r;
                rgbSlider[1].value = g;
                rgbSlider[2].value = b;
                setBG();
                delSw = true;
            }
        })
        return true;
    } else return false
}


function setBG() {
    let r = rgbSliderData[0].textContent,
        g = rgbSliderData[1].textContent,
        b = rgbSliderData[2].textContent;
    clrPickerValues[0].textContent = `rgb( ${r},${g},${b} )`;
    clrPickerValues[1].textContent = `#${intToHex(r)}${intToHex(g)}${intToHex(b)}`;
    let gIn = `rgb(${r},${g},${b})`;
    clrPickerOut.style.background = gIn;
}

intToHex(254)

function hexV(n) {
    switch (n) {
        case 10:
            return "A"
        case 11:
            return "B"
        case 12:
            return "C"
        case 13:
            return "D"
        case 14:
            return "E"
        case 15:
            return "F"
        default:
            return n
    }
}

function intToHex(n) {
    let x = n / 16,
        z = x.toString().substring(2);
    if (x < 10) {
        z = x.toString().substring(1);
    }
    let y = ("0" + z) * 16,
        xf = Math.floor(x)

    return hexV(xf) + "" + hexV(y);
}

async function aw(q, w) {
    let f = await fetch(`https://webaim.org/resources/contrastchecker/?fcolor=${q}&bcolor=${w}&api`);
    return {
        r: await f.json(),
        q,
        w
    }
}