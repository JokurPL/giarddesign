const dropDown = () => {
  const offerDropdown = document.getElementById("offer-dropdown");
  const offerNavItem = document.getElementById("offer-nav-item");

  offerNavItem.addEventListener("click", () => {
    offerDropdown.classList.toggle("invisible");
    offerDropdown.classList.toggle("opacity-0");
    offerDropdown.classList.toggle("h-0");
    offerDropdown.classList.toggle("h-20");
  });

  window.addEventListener("click", (e) => {
    if (
      !e.target.matches("#offer-dropdown") &&
      !e.target.matches("#offer-nav-item") &&
      !e.target.matches("#offer-nav-link")
    ) {
      offerDropdown.classList.add("invisible");
      offerDropdown.classList.add("opacity-0");
      offerDropdown.classList.add("h-0");
      offerDropdown.classList.remove("h-20");
    }
  });
};

const search = () => {
  const searchIcon = document.getElementById("search-icon");
  const searchBar = document.getElementById("search-bar");
  searchIcon.addEventListener("click", () => {
    searchBar.classList.remove("max-w-0");
    searchBar.classList.remove("opacity-0");
    searchBar.classList.add("max-w-[30rem]");
  });
};

const expandMenu = () => {
  const menuContent = document.getElementById("menu-content");
  menuContent.classList.remove("invisible");
  menuContent.classList.remove("max-h-0");
  menuContent.classList.add("max-h-[18.5rem]");
};

const rollUpMenu = () => {
  const menuContent = document.getElementById("menu-content");
  menuContent.classList.add("invisible");
  menuContent.classList.add("max-h-0");
  menuContent.classList.remove("max-h-[18.5rem]");
};

const responsiveMenu = () => {
  const menuIcon = document.getElementById("menu-icon");
  let clicked = false;
  menuIcon.addEventListener("click", () => {
    if (clicked) {
      rollUpMenu();
      clicked = false;
      return;
    }
    expandMenu();
    clicked = true;
  });
};

const smallDevice = window.matchMedia("(min-width: 576px)");
const menuContent = document.getElementById("menu-content");

// Hide menu when exiting from mobile view
smallDevice.addEventListener("change", (e) => {
  if (e.matches) {
    expandMenu();
  } else {
    rollUpMenu();
  }
});

dropDown();
search();
responsiveMenu();
