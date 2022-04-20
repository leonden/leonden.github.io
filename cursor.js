// CURSOR
function cursorMove() {
  var cursor = document.querySelector(".cursor-outer");
  var cursor2 = document.querySelector(".cursor-inner");
  document.addEventListener("mousemove", function (e) {
    cursor.style.cssText = cursor2.style.cssText =
      "left: " + e.clientX + "px; top: " + e.clientY + "px;";
  });
}

function detectDevice() {
  if ("ontouchstart" in document.documentElement) {
    document.styleSheets[1].disabled = true;
    const cursorOuter = document.querySelector(".cursor-outer");
    const cursorInner = document.querySelector(".cursor-inner");
    cursorOuter.remove();
    cursorInner.remove();
  } else {
    cursorMove();
  }
}

detectDevice();
