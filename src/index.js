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
    }
  });
};

const search = () => {
  const searchIcon = document.getElementById("search-icon");
  const searchBar = document.getElementById("search-bar");
  searchIcon.addEventListener("click", () => {
    searchBar.classList.remove("invisible");
    searchBar.classList.remove("w-0");
    searchBar.classList.remove("delay-0");
    searchBar.classList.remove("opacity-0");
    searchBar.classList.add("delay-300");
    searchBar.classList.add("opacity-100");
  });
};

const responsiveMenu = () => {
  const menuIcon = document.getElementById("menu-icon");
  const menuContent = document.getElementById("menu-content");
  menuIcon.addEventListener("click", () => {
    menuContent.classList.toggle("invisible");
    menuContent.classList.toggle("opacity-0");
    menuContent.classList.toggle("h-0");
  });
};

function scrollTo(id) {
  const obj = document.getElementById(id);
  obj.scrollIntoView({ behavior: "smooth" }, true);
}

dropDown();
search();
responsiveMenu();
