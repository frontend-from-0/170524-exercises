window.addEventListener("load", function () {
  let currentImage = 0;
  const imageList = document.querySelectorAll(".carousel-container img");


  document
    .getElementById("prev-btn")
    .addEventListener("click", () => handlePrevClick());

  document
    .getElementById("next-btn")
    .addEventListener("click", () => handleNextClick());

  const indicators=document.querySelectorAll(".indicator")

  function updateIndicators(){
    for (let i = 0; i < indicators.length; i++) {
     
    if(i===currentImage){
      indicators[i].classList.add("active");
    }else{
      indicators[i].classList.remove("active");
    }
  
    
  }
}

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
    updateIndicators();
  }

  function handlePrevClick() {
    for (let i = 0; i < imageList.length; i++) {
      imageList[i].classList.remove("active");
    }
    if (currentImage === 0) {
      currentImage = imageList.length-1;
    } else {
      currentImage--;
    }

    imageList[currentImage].classList.add("active");
    updateIndicators();
  }


  const carouselIntervalId = setInterval(handleNextClick, 3500);

  const stopButton=document.getElementById("stop-btn");
  if(stopButton){
   stopButton.addEventListener("click", () => {
    clearInterval(carouselIntervalId);
  });
}

const startButton=document.getElementById("start-btn");
  if(startButton){
    startButton.addEventListener("click", () => {
      const carouselIntervalId = setInterval(handleNextClick, 4000);
  });
}


});
