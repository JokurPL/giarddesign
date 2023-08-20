const sliderContainer = document.getElementById("slider");

const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");

const sliderHeader = document.getElementById("slider-header");
const sliderImg = document.getElementById("slider-image");
const sliderDesc = document.getElementById("slider-desc");
const sliderImgCopyright = document.getElementById("slider-img-copyright");

const data = [
  {
    id: 0,
    header: "Nowoczesna \n aranżacja \n Twojego ogrodu",
    desc: "Marka GiardDesign to wieloletnie doświadczenie i wysoka estetyka realizacji. Oferujemy kompleksowy zakres usług z indywidualnym podejściem do każdego projektu.",
    img: "slider-1.jpg",
    alt: "Zdjęcie ogrodu",
  },
  {
    id: 1,
    header: "Congue \n egestas \n rutrum dictum",
    desc: "Suspendisse ac convallis, laoreet nisi dictum, semper dolor. Nullam vel egestas sem. Curabitur ac pharetra nisi. Fusce quis faucibus turpis, eget porttitor enim.",
    img: "slider-2.jpg",
    copyright:
      "Zdjęcie dodane przez Tina Nord: https://www.pexels.com/pl-pl/zdjecie/fotografia-lotnicza-szarego-domu-1590336/",
    alt: "Zdjęcie ogrodu z powietrza",
  },
  {
    id: 2,
    header: "Vestibulum \n aliquam \n pharetra nisi",
    desc: "Cras sollicitudin molestie mauris, in vestibulum ex consequat ac. Nunc tincidunt velit lectus, pretium aliquam mauris condimentum in. Ut egestas odio purus, enim.",
    img: "slider-3.jpg",
    alt: "Zdjęcie natury w słoiku",
    copyright:
      "Zdjęcie dodane przez Katarzyna Modrzejewska: https://www.pexels.com/pl-pl/zdjecie/terrarium-w-przezroczystym-szklanym-sloju-1466434/",
  },
];

const changeSlide = (header, img, desc, alt, copyright, direction) => {
  if (direction === "left") {
    sliderContainer.classList.add("animate-fade-left");
  } else {
    sliderContainer.classList.add("animate-fade-right");
  }

  console.log(`animate-fade-${direction === "left" ? "left" : "right"}`);

  sliderHeader.innerText = header;
  sliderImg.src = `./assets/img/slider/${img}`;
  sliderImg.alt = alt;
  sliderDesc.innerText = desc;
  sliderImgCopyright.innerText = copyright;
  setTimeout(() => {
    if (direction === "left") {
      sliderContainer.classList.remove("animate-fade-left");
    } else {
      sliderContainer.classList.remove("animate-fade-right");
    }
  }, 710);
};

let currentId = 0;

leftArrow.addEventListener("click", () => {
  currentId -= 1;
  if (currentId < 0) currentId = data.length - 1;
  changeSlide(
    data[currentId].header,
    data[currentId].img,
    data[currentId].desc,
    data[currentId].alt,
    data[currentId].copyright,
    "left"
  );
});

rightArrow.addEventListener("click", () => {
  currentId += 1;
  if (currentId >= data.length) currentId = 0;
  changeSlide(
    data[currentId].header,
    data[currentId].img,
    data[currentId].desc,
    data[currentId].alt,
    data[currentId].copyright,
    "right"
  );
});
