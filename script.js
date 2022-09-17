const sliderImage = document.querySelector(".slider-image");
const sliderButtonNext = document.querySelector(".slider-button-next");
const sliderButtonPrev = document.querySelector(".slider-button-prev");
const sliderOrShop = document.getElementById("myDiv");
const shop = document.querySelector(".shop");
const cardImages = document.querySelectorAll(".product-image");
const bigSlider = document.querySelector(".cards-big-wrapper");
const sliderBigButtonPrev = document.querySelector(".slider-big-prev");
const sliderBigButtonNext = document.querySelector(".slider-big-next");
const bestSellers = document.querySelector(".best-sellers");
const bestSellersBtn = document.querySelector("#best-sellers-btn");
// const flashSale = document.querySelector(".flash-sale");
// console.log(cardImage[0]);
const upperFooterTitles = document.querySelectorAll(".upper-footer-title");
let temp = 1;
// console.log(temp);
// console.log(cardImages);

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
  let originalImageSrc = cardImage.src;
  cardImage.addEventListener("mouseover", function () {
    // console.log(cardImage.src);
    // console.log(cardImage.src.indexOf(".png"));
    let index = cardImage.src.indexOf(".png");
    cardImage.src =
      cardImage.src.slice(0, index) + 2 + cardImage.src.slice(index);
    // console.log(cardImage.src);
  });
  cardImage.addEventListener("mouseout", function () {
    cardImage.src = originalImageSrc;

    // console.log(cardImage.src);
  });
}
console.log(upperFooterTitles);

for (const upperFooterTitle of upperFooterTitles) {
  upperFooterTitle.addEventListener("click", function () {});
}

//smooth scrolling
bestSellersBtn.addEventListener("click", function (e) {
  e.preventDefault();
  bestSellers.scrollIntoView({ behavior: "smooth" });
});
