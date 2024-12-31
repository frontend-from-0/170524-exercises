window.addEventListener("load", function () {
  let currentImage = 0;
  const imageList = document.querySelectorAll(".carousel-container img");
  const stopBtn = document.getElementById("stop-btn");
  const startBtn = document.getElementById("start-btn");

  let carouselIntervalId = setInterval(handleNextClick, 3000);
  document
    .getElementById("prev-btn")
    .addEventListener("click", () => handlePrevClick());

  document
    .getElementById("next-btn")
    .addEventListener("click", () => handleNextClick());

    stopBtn.addEventListener("click", () => {
      clearInterval(carouselIntervalId);
      stopBtn.parentElement.classList.add("hidden");
      startBtn.parentElement.classList.remove("hidden");
    });
  
    startBtn.addEventListener("click", () => {
      carouselIntervalId = setInterval(handleNextClick, 3000);
      startBtn.parentElement.classList.add("hidden");
      stopBtn.parentElement.classList.remove("hidden");
    });

  function handleNextClick() {
    for (let i = 0; i < imageList.length; i++) {
      imageList[i].classList.remove("active");
    }
    if (currentImage === imageList.length - 1) {
      currentImage = 0;
    } else {
      currentImage++;
    }

    imageList[currentImage].classList.add("active");
  }

  function handlePrevClick() {
     for (let i = imageList.length-1; i > 0; i--) {
      imageList[i].classList.remove("active");
    }
    if (currentImage === 0) {
      currentImage = imageList.length-1;
    } else {
      currentImage--;
    }

    imageList[currentImage].classList.add("active");
  }



});
