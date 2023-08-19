function scrollToSection(id) {
  const obj = document.getElementById(id);
  obj.scrollIntoView({ behavior: "smooth" }, true);
  console.log("xddd");
}

const getActualYear = () => {
  const year = new Date().getFullYear();
  const footerYear = document.getElementById("footer-year");

  footerYear.innerHTML = year;
};

getActualYear();
