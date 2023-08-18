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
    searchBar.classList.remove("invisible");
    searchBar.classList.remove("w-0");
    searchBar.classList.remove("delay-0");
    searchBar.classList.remove("opacity-0");
    searchBar.classList.add("delay-300");
    searchBar.classList.add("opacity-100");
  });
};

const expandMenu = () => {
  const menuContent = document.getElementById("menu-content");
  menuContent.classList.remove("invisible");
  menuContent.classList.remove("opacity-0");
  menuContent.classList.remove("h-0");
  menuContent.classList.add("h-[14rem]");
};

const rollUpMenu = () => {
  const menuContent = document.getElementById("menu-content");
  menuContent.classList.add("invisible");
  menuContent.classList.add("opacity-0");
  menuContent.classList.add("h-0");
  menuContent.classList.remove("h-[14rem]");
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

function scrollTo(id) {
  const obj = document.getElementById(id);
  obj.scrollIntoView({ behavior: "smooth" }, true);
}

const smallDevice = window.matchMedia("(min-width: 576px)");
const menuContent = document.getElementById("menu-content");

smallDevice.addEventListener("change", (e) => {
  if (e.matches) {
    expandMenu();
  } else {
    rollUpMenu();
    console.log("Xd");
  }
});

const getActualYear = () => {
  const year = new Date().getFullYear();
  const footerYear = document.getElementById("footer-year");

  footerYear.innerHTML = year;
};

// Projects gallery
const macy = new Macy({
  container: "#projects-container",
  mobileFirst: true,
  trueOrder: true,
  margin: 42,
  columns: 3,
  breakAt: {
    1200: 3,
    940: 1,
  },
});

macy.runOnImageLoad(function () {
  const imagesContainer = document.getElementById("projects-container");
  imagesContainer.classList.add("opacity-1");
  imagesContainer.classList.remove("opacity-0");
  macy.recalculate(true, true);
}, true);

const gallery = (containerId) => {
  const container = document.getElementById(containerId);
  const popup = document.getElementById("gallery-popup");
  const images = container.querySelectorAll("img");

  const showImage = () => {
    popup.classList.add("opacity-1");
    popup.classList.remove("invisible");
    popup.classList.remove("opacity-0");
  };

  const hideImage = () => {
    popup.classList.add("opacity-0");
    popup.classList.add("invisible");
  };

  images.forEach((image) => {
    image.classList.add("hover:cursor-pointer");
    image.classList.add("hover:brightness-75");
    image.classList.add("transition-all");
    image.classList.add("-z-10");

    image.addEventListener("click", () => {
      const imgPopup = popup.getElementsByClassName("img-popup");
      imgPopup[0].src = image.src;
      showImage();
    });
  });

  popup.addEventListener("click", () => {
    hideImage();
  });
};

gallery("projects-container");
getActualYear();
dropDown();
search();
responsiveMenu();
