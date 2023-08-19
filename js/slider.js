const sliderContainer = document.getElementById("intro");

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
    img: "slider-1.png",
    alt: "Zdjęcie ogrodu",
  },
  {
    id: 1,
    header: "Suspendisse ac convallis",
    desc: "Sed congue erat rutrum, laoreet nisi dictum, semper dolor. Nullam vel egestas sem. Curabitur ac pharetra nisi. Fusce quis faucibus turpis, eget porttitor enim. Duis eu pharetra tellus. Nulla ac sollicitudin tellus. Vestibulum vitae vulputate turpis.",
    img: "slider-2.jpg",
    copyright:
      "Zdjęcie dodane przez Tina Nord: https://www.pexels.com/pl-pl/zdjecie/fotografia-lotnicza-szarego-domu-1590336/",
    alt: "Zdjęcie ogrodu z powietrza",
  },
  {
    id: 2,
    header: "Vestibulum ante ipsum",
    desc: "Cras sollicitudin molestie mauris, in vestibulum ex consequat ac. Nunc tincidunt velit lectus, pretium aliquam mauris condimentum in. Ut egestas odio purus, non rhoncus orci luctus non. Phasellus posuere pellentesque orci, quis dictum lorem placerat ac. Aliquam a tellus metus. Aenean vel massa at mi tincidunt luctus eu vitae massa. Ut tincidunt placerat leo.",
    img: "slider-3.jpg",
    alt: "Zdjęcie natury w słoiku",
    copyright:
      "Zdjęcie dodane przez Katarzyna Modrzejewska: https://www.pexels.com/pl-pl/zdjecie/terrarium-w-przezroczystym-szklanym-sloju-1466434/",
  },
];

const changeSlide = (header, img, desc, alt, copyright) => {
  sliderContainer.classList.add("opacity-0");

  setTimeout(() => {
    sliderHeader.innerText = header;
    sliderImg.src = `../public/images/slider/${img}`;
    sliderImg.alt = alt;
    sliderDesc.innerText = desc;
    sliderImgCopyright.innerText = copyright;
    sliderContainer.classList.remove("opacity-0");
  }, 300);
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
    data[currentId].copyright
  );
});

rightArrow.addEventListener("click", () => {
  sliderContainer.classList.add("bg-gray");

  console.log(currentId);
  currentId += 1;
  if (currentId >= data.length) currentId = 0;
  changeSlide(
    data[currentId].header,
    data[currentId].img,
    data[currentId].desc,
    data[currentId].alt
  );
});
