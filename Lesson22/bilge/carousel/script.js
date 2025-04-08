window.addEventListener("load", function () {
  let currentImage = 0;
  const imageList = document.querySelectorAll(".carousel-container img");
  const indicators = document.querySelectorAll(".carousel-indicators div");
  let carouselIntervalId;

  document
    .getElementById("prev-btn")
    .addEventListener("click", () => handlePrevClick());

  document
    .getElementById("next-btn")
    .addEventListener("click", () => handleNextClick());

  function handleNextClick() {
    // removes active class from the current image and indicator
    imageList[currentImage].classList.remove("active");
    indicators[currentImage].classList.remove("active");

    if (currentImage === imageList.length - 1) {
      currentImage = 0;
    } else {
      currentImage++;
    }

    imageList[currentImage].classList.add("active");
    indicators[currentImage].classList.add("active");
  }

  function handlePrevClick() {        
    imageList[currentImage].classList.remove("active");
    indicators[currentImage].classList.remove("active");

    if (currentImage === 0) {
      currentImage = imageList.length - 1;
    } else {
      currentImage--;
    }
    
    imageList[currentImage].classList.add("active");
    indicators[currentImage].classList.add("active");
  }


  carouselIntervalId = setInterval(handleNextClick, 3000);

  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      clearInterval(carouselIntervalId); // stops the automatic carousel      
     
     imageList[currentImage].classList.remove("active");
     indicators[currentImage].classList.remove("active");

     // updates currentImage to the index of the clicked indicator
     currentImage = index;

     imageList[currentImage].classList.add("active");
     indicators[currentImage].classList.add("active");
    })
  });
});
