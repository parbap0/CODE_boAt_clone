const sliderImage = document.querySelector(".slider-image");
const sliderButtonNext = document.querySelector(".slider-button-next");
const sliderButtonPrev = document.querySelector(".slider-button-prev");
const sliderOrShop = document.getElementById("myDiv");
const shop = document.querySelector(".shop");
const cardImages = document.querySelectorAll(".product-image");
// const flashSale = document.querySelector(".flash-sale");
// console.log(cardImage[0]);

let temp = 1;
// console.log(temp);
console.log(cardImages);

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
for (const cardImage of cardImages) {
  cardImage.addEventListener("mouseover", function () {
    console.log(cardImage.src);
    console.log(cardImage.src.indexOf(".png"));
    let index = cardImage.src.indexOf(".png");
    cardImage.src =
      cardImage.src.slice(0, index) + 2 + cardImage.src.slice(index);
    console.log(cardImage.src);
  });
  cardImage.addEventListener("mouseout", function () {
    let index = cardImage.src.indexOf(".png");
    cardImage.src =
      cardImage.src.slice(0, index - 1) + cardImage.src.slice(index);
    console.log(cardImage.src);
  });
}
