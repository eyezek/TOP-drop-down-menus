let onClickIcon = document.getElementById("onclickicon");

let onClickMenu = document.getElementById("onclickmenu");

onClickIcon.addEventListener(onclick, function () {
  onClickMenu.style.visibility = "visible";
});

let onHoverIcon = document.getElementById("onhovericon");

let onHoverMenu = document.getElementById("onhovermenu");

onHoverIcon.addEventListener(onmouseover, function () {
  onHoverMenu.style.visibility = "visible";
});
