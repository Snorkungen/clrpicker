"use strict";

var dDragItems = document.querySelectorAll(".storage__display-item");

for (var i = 0; i < dDragItems.length; i++) {
  dDragItems[i].ondragstart = function (e) {
    console.log(e);
  };
}