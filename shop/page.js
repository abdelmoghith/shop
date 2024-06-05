let bar = document.querySelector(".right i");
let menu = document.querySelector(".sidebar");
let exit = document.querySelector("#exit");

bar.onclick = function () {
  menu.style.display = "block";
};
exit.onclick = function () {
  menu.style.display = "none";
};
