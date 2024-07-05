let $sideNav = document.getElementById("side-nav");
let $navBarBtn = document.getElementById("nav-bar__open-menu-btn");
let $navBarBtnClose = document.getElementById("side-nav__btn-close");

export function toggleSideMenu() {
  $sideNav.classList.toggle("side-nav-active");
}

$navBarBtn.addEventListener("click", () =>  toggleSideMenu());
$navBarBtnClose.addEventListener("click", () => toggleSideMenu());

