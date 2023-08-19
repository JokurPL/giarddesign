const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

const gallery = (containerId) => {
  const container = document.getElementById(containerId);
  const popup = document.getElementById("gallery-popup");

  // Insert images
  for (let i = 1; i < 18; i++) {
    let projectImage = document.createElement("img");
    projectImage.src = `./assets/img/projects/Photo-${i}.${
      i < 10 ? "png" : "jpg"
    }`;
    projectImage.alt = "Zdjęcie zrealizowanego projektu";
    container.appendChild(projectImage);
  }

  const images = container.querySelectorAll("img");

  const macy = new Macy({
    container: "#projects-container",
    mobileFirst: true,
    trueOrder: true,
    margin: {
      x: 10,
      y: 10,
    },
    columns: 2,
    breakAt: {
      768: {
        margin: {
          x: 20,
          y: 20,
        },
        columns: 3,
      },
    },
  });

  // Smooth loading
  macy.runOnImageLoad(function () {
    const imagesContainer = document.getElementById("projects-container");
    imagesContainer.classList.add("opacity-1");
    imagesContainer.classList.remove("opacity-0");
    macy.recalculate(true, true);
  }, true);

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

  const morePhotosButton = document.getElementById("more-photos-button");
  const lessPhotosButton = document.getElementById("less-photos-button");

  const showLessButton = () => {
    morePhotosButton.classList.add("invisible");
    morePhotosButton.classList.add("h-0");
    morePhotosButton.classList.add("opacity-0");

    lessPhotosButton.classList.remove("invisible");
    lessPhotosButton.classList.remove("h-0");
    lessPhotosButton.classList.remove("opacity-0");

    container.classList.remove("before:z-10");
    container.classList.add("before:-z-10");
  };

  const showMoreButton = () => {
    lessPhotosButton.classList.add("invisible");
    lessPhotosButton.classList.add("h-0");
    lessPhotosButton.classList.add("opacity-0");

    morePhotosButton.classList.remove("invisible");
    morePhotosButton.classList.remove("h-0");
    morePhotosButton.classList.remove("opacity-0");

    container.classList.add("before:z-10");
    container.classList.remove("before:-z-10");
  };

  morePhotosButton.addEventListener("click", () => {
    container.classList.toggle(`max-h-[85rem]`);
    container.classList.toggle(`max-h-[200rem]`);

    const expanded = container.classList.contains("max-h-[200rem]");

    if (expanded) {
      showLessButton();
    } else {
      showMoreButton();
    }
  });

  lessPhotosButton.addEventListener("click", () => {
    container.classList.toggle(`max-h-[85rem]`);
    container.classList.toggle(`max-h-[200rem]`);

    const expanded = container.classList.contains("max-h-[200rem]");

    if (expanded) {
      showLessButton();
    } else {
      showMoreButton();
    }
  });
};

gallery("projects-container");
