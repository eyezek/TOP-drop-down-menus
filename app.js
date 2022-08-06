let onClickIcon = document.getElementById("onclickicon");

let onClickMenu = document.getElementById("onclickmenu");

onClickIcon.addEventListener("click", function () {
  onClickMenu.style.visibility = "visible";
});

let onHoverIcon = document.getElementById("onhovericon");

let onHoverMenu = document.getElementById("onhovermenu");

onHoverIcon.addEventListener("mouseover", function () {
  onHoverMenu.style.visibility = "visible";
});

onHoverIcon.addEventListener("mouseout", function () {
  onHoverMenu.style.visibility = "hidden";
});
