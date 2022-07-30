const sliderImage = document.querySelector(".slider-image");
const sliderButtonNext = document.querySelector(".slider-button-next");
const sliderButtonPrev = document.querySelector(".slider-button-prev");

let temp = 1;
console.log(temp);

sliderButtonNext.addEventListener("click", function () {
  if (temp <= 3) {
    sliderImage.src = `media/slider_${temp + 1}.png`;
    temp++;
  } else {
    temp = 0;
    sliderImage.src = `media/slider_${temp + 1}.png`;
    temp++;
  }
});

sliderButtonPrev.addEventListener("click", function () {
  if (temp > 1) {
    sliderImage.src = `media/slider_${temp - 1}.png`;
    temp--;
  } else if ((temp = 1)) {
    temp = 5;
    sliderImage.src = `media/slider_${temp - 1}.png`;
    temp--;
  }
});
