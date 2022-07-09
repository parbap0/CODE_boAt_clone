const sliderImage = document.querySelector(".slider-image");
const sliderButtonNext = document.querySelector(".slider-button-next");
const sliderButtonPrev = document.querySelector(".slider-button-prev");

let temp = 1;
sliderButtonNext.addEventListener("click", function () {
  //button needs a fix--->>expected to go to image_1 after image_4
  sliderImage.src = `media/slider_${temp + 1}.png`;
  temp++;
  console.log(temp);
});

sliderButtonPrev.addEventListener("click", function () {
  //button needs a fix--->>expected to go to image_4 after image_1

  sliderImage.src = `media/slider_${temp - 1}.png`;
  temp--;
  console.log(temp - 1);
});
