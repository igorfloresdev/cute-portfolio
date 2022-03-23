const initMenuMobile = () => {
  const btnMenu = document.querySelector(".btn-menu-mob");
  const btncloseMenu = document.querySelector(".btn-close-mob")
  const menuItems = document.querySelector(".menu");
  const menu = document.querySelector(".menu");

  btnMenu.addEventListener("click", () => {
    menu.classList.add("show");
  })

  btncloseMenu.addEventListener("click", () => {
    menu.classList.remove("show");
  })

  menuItems.addEventListener("click", () => {
    menu.classList.remove("show");
  })
}

export default initMenuMobile;