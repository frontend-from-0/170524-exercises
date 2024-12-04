window.addEventListener("load", function () {
  let currentImage = 0;
  const imageList = document.querySelectorAll(".carousel-container img");
  let currentIndicator = 0;
  const indicators = document.querySelectorAll(".carousel-indicators div");

  document
    .getElementById("prev-btn")
    .addEventListener("click", () => handlePrevClick());

  document
    .getElementById("next-btn")
    .addEventListener("click", () => handleNextClick());

  function handleNextClick() {
    for (let i = 0; i < imageList.length; i++) {
      imageList[i].classList.remove("active");
    }
    if (currentImage === imageList.length - 1) {
      currentImage = 0;
    } else {
      currentImage++;
    }

    for (let i = 0; i < indicators.length; i++) {
      indicators[i].classList.remove("active");
    }
    if (currentIndicator === indicators.length - 1) {
      currentIndicator = 0;
    } else {
      currentIndicator++;
    }

    imageList[currentImage].classList.add("active");
    indicators[currentIndicator].classList.add("active");
  }

  function handlePrevClick() {
    for (let i = 0; i < imageList.length; i++) {
      imageList[i].classList.remove("active");
    }
    if (currentImage === 0) {
      currentImage = imageList.length - 1;
    } else {
      currentImage--;
    }

    for (let i = 0; i < indicators.length; i++) {
      indicators[i].classList.remove("active");
    }
    if (currentIndicator === 0) {
      currentIndicator = indicators.length - 1;
    } else {
      currentIndicator--;
    }

    imageList[currentImage].classList.add("active");
    indicators[currentIndicator].classList.add("active");
  }


  const carouselIntervalId = setInterval(handleNextClick, 10000);

  // Example of clearing interval. Will not work as the moment since we haven't added a stopButton element yet.
  // stopButton.addEventListener("click", () => {
  //   clearInterval(carouselIntervalId);
  // });
});
