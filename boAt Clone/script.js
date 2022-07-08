const sliderImage = document.querySelector(".slider-image");
const sliderButtonNext = document.querySelector(".slider-button-next");
const sliderButtonPrev = document.querySelector(".slider-button-prev");

let temp = 1;
sliderButtonNext.addEventListener("click", function () {
  sliderImage.src = `media/slider_${temp + 1}.png`;
  temp++;
  console.log(temp);
});

sliderButtonPrev.addEventListener("click", function () {
  sliderImage.src = `media/slider_${temp - 1}.png`;
  temp--;
  console.log(temp - 1);
});
