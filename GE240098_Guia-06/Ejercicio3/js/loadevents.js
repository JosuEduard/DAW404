function init() {
    var divw1 = document.getElementById("titlew1");
    var divw2 = document.getElementById("titlew2");

    function addDragEventListeners(div) {
        if (div.addEventListener) {
            div.addEventListener(
                "mousedown",
                function (event) {
                    drag(this.parentNode, event);
                },
                false
            );
        } else if (div.attachEvent) {
            div.attachEvent("onmousedown", function (event) {
                drag(this.parentNode, event);
            });
        }
    }

    addDragEventListeners(divw1);
    addDragEventListeners(divw2);
}

if (window.addEventListener) {
    window.addEventListener("load", init, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", init);
}
