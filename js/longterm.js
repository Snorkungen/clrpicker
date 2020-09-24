const dDragItems = document.querySelectorAll(".storage__display-item");

for (let i = 0; i < dDragItems.length; i++) {
    dDragItems[i].ondragstart = e => {
        console.log(e)
    }
    
}