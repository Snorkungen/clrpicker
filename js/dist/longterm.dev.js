"use strict";

var dDragItems = document.querySelectorAll(".storage__display-item"),
    storageTrash = document.querySelector(".storage__trash"),
    storageEdit = document.querySelector(".storage__edit");
var dragged;

function sdItemDstart() {
  // animate the placces where this hould go
  storageTrash.className += " storage__dragstart";
  storageEdit.className += " storage__dragstart";
}

document.addEventListener("dragstart", function (e) {
  console.log(e.target);

  if (e.target.className == "storage__display-item") {
    sdItemDstart();
    dragged = e.target;
  }

  ;
}, false);
document.addEventListener("dragover", function (event) {
  event.preventDefault();
}, false);
document.addEventListener("dragenter", function (event) {
  if (event.target.id = "Sedit") {
    event.target.style.opacity = .4;
  } else if (event.target.id = "Strash") {
    event.target.style.opacity = .4;
  }
}, false);
document.addEventListener("dragleave", function (e) {
  // reset background of potential drop target when the draggable element leaves it
  if (e.target.id = "Sedit") {
    e.target.style.opacity = 1;
  } else if (e.target.id = "Strash") {
    e.target.style.opacity = 1;
  }
}, false);
document.addEventListener("drop", function (event) {
  console.log(event);
  event.preventDefault();

  if (event.target.id = "Sedit") {
    dropDone();
  } else if (event.target.id = "Strash") {
    dragged.parentNode.removeChild(dragged);
    dropDone();
  }
}, false);

function dropDone() {
  dragged = null;
  storageEdit.style.opacity = 1;
  storageTrash.style.opacity = 1;
  storageEdit.className = "storage__edit";
  storageEdit.style.border = "none";
  storageTrash.className = "storage__trash";
  storageTrash.style.border = "none";
}