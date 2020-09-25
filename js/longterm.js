const dDragItems = document.querySelectorAll(".storage__display-item"),
    storageDisp = document.querySelector(".storage__display"),
    storageTrash = document.querySelector(".storage__trash"),
    storageEdit = document.querySelector(".storage__edit");

let dragged;

let Colors = JSON.parse(localStorage.getItem("colors"))
Colors.forEach(o => {
    let x = o.c.split(",");
    createStorageI(x[0],x[1],x[2])
});

function createStorageI(r, g, b) {
    let d = sk.createEl("div", storageDisp);
    sk.setAttribute(d, "draggable", "true");
    sk.setAttribute(d, "data-value", `${r},${g},${b}`);
    sk.setAttribute(d, "class", "storage__display-item");
    d.style.background = `rgb(${r},${g},${b})`;
}

function sdItemDstart() {
    storageTrash.className += " storage__dragstart";
    storageEdit.className += " storage__dragstart";
}

document.addEventListener("dragstart", e => {
    if (e.target.className == "storage__display-item") {
        sdItemDstart()
    } else if (e.target.className == "saved__color-D") {
        storageDisp.className += " storage__dragstart";
    };
    dragged = e.target
}, false);

document.addEventListener("dragover", function (event) {
    event.preventDefault();
}, false);

document.addEventListener("dragenter", function (event) {
    if (event.target.id == "Sedit") {
        event.target.style.opacity = .4;
    } else if (event.target.id == "Strash") {
        event.target.style.opacity = .4;
    }

}, false);

document.addEventListener("dragleave", function (e) {
    if (e.target.id == "Sedit") {
        e.target.style.opacity = 1;
    } else if (e.target.id == "Strash") {
        e.target.style.opacity = 1;
    }
}, false);

document.addEventListener("drop", function (event) {
    event.preventDefault();
    if (event.target.id == "Sedit" && dragged.className == "storage__display-item") {
        let va = dragged.dataset.value.split(","),
            r = va[0],
            g = va[1],
            b = va[2];
        rgbSliderData[0].textContent = r;
        rgbSliderData[1].textContent = g;
        rgbSliderData[2].textContent = b;
        rgbSlider[0].value = r;
        rgbSlider[1].value = g;
        rgbSlider[2].value = b;
        setBG();
    } else if (event.target.id == "Strash" && dragged.className == "storage__display-item") {
        dragged.parentNode.removeChild(dragged);
        let find = e => e.c == dragged.dataset.value,
        index = Colors.findIndex(find); 
        Colors.splice(index,1)
        localStorage.setItem("colors",JSON.stringify(Colors))
    } else if (event.target.id == "Sdisp" && dragged.className == "saved__color-D" || event.target.className == "storage__display-item" && dragged.className) {
        let va = dragged.dataset.value.split(","),
            r = va[0],
            g = va[1],
            b = va[2],
            co = {
                c: `${r},${g},${b}`
            };
        createStorageI(r,g,b)

        let getColors = JSON.parse(localStorage.getItem("colors"))
        if (getColors == null) localStorage.setItem("colors", JSON.stringify([co]));
        else {
            getColors.push(co);
            localStorage.setItem("colors", JSON.stringify(getColors))
        }
    }
    dropDone()

}, false);

function dropDone() {
    dragged = null;
    storageEdit.style.opacity = 1;
    storageTrash.style.opacity = 1;

    storageEdit.className = "storage__edit";
    storageEdit.style.border = "none";

    storageTrash.className = "storage__trash";
    storageTrash.style.border = "none";

    storageDisp.className = "storage__display";
    storageDisp.style.border = "none";
}