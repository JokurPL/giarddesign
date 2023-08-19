function scrollToSection(id) {
  const obj = document.getElementById(id);
  obj.scrollIntoView({ behavior: "smooth" }, true);
}

const getActualYear = () => {
  const year = new Date().getFullYear();
  const footerYear = document.getElementById("footer-year");

  footerYear.innerHTML = year;
};

const hideLoading = () => {
  const loader = document.getElementById("loader");
  window.onload = function () {
    loader.classList.add("opacity-0");
    loader.classList.add("invisible");
  };
};

hideLoading();
getActualYear();
