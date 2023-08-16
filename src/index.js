const offerDropdown = document.getElementById("offer-dropdown");
const offerNavItem = document.getElementById("offer-nav-item");

const dropDown = (hoverItem, dropdown) => {
  hoverItem.addEventListener("mouseover", () => {
    dropdown.classList.remove("invisible");
    dropdown.classList.remove("opacity-0");

    setTimeout(checkHover, 500);
  });

  checkHover = () => {
    if (!dropdown.matches(":hover") && !hoverItem.matches(":hover")) {
      dropdown.classList.add("invisible");
      dropdown.classList.add("opacity-0");
    }
  };
};

const searchIcon = document.getElementById("search-icon");
const searchBar = document.getElementById("search-bar");
const search = (searchIcon, searchBar) => {
  searchIcon.addEventListener("click", () => {
    searchBar.classList.remove("hidden");

    searchBar.classList.remove("opacity-0");
  });
};

dropDown(offerNavItem, offerDropdown);
search(searchIcon, searchBar);
