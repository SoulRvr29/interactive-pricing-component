let price10K = 8;
let price50K = 12;
let price100K = 16;
let price500K = 24;
let price1M = 36;

let discount = 1;

let triggerPosition = false;
let sliderActual;

function sliderFunction(sliderValue) {
  sliderActual = sliderValue;
  switch (sliderValue) {
    case "1":
      document.querySelector(".views_value").innerHTML = "10K";
      document.querySelector(".price_span").innerHTML =
        "$" + price10K * discount + ".00";
      break;
    case "2":
      document.querySelector(".views_value").innerHTML = "50K";
      document.querySelector(".price_span").innerHTML =
        "$" + price50K * discount + ".00";
      break;
    case "3":
      document.querySelector(".views_value").innerHTML = "100K";
      document.querySelector(".price_span").innerHTML =
        "$" + price100K * discount + ".00";
      break;
    case "4":
      document.querySelector(".views_value").innerHTML = "500K";
      document.querySelector(".price_span").innerHTML =
        "$" + price500K * discount + ".00";
      break;
    case "5":
      document.querySelector(".views_value").innerHTML = "1M";
      document.querySelector(".price_span").innerHTML =
        "$" + price1M * discount + ".00";
  }
}

function trigger() {
  if (triggerPosition == false) {
    document.querySelector(".monthYear_trigger").style.justifyContent =
      "flex-end";
    document.querySelector(".monthYear_trigger").style.backgroundColor =
      "hsl(174, 86%, 45%)";
    document.querySelector(".discount_percent").style.visibility = "visible";
    triggerPosition = true;
    discount = 0.75;
  } else {
    document.querySelector(".monthYear_trigger").style.justifyContent =
      "flex-start";
    document.querySelector(".monthYear_trigger").style.backgroundColor =
      "hsl(223, 50%, 87%)";
    document.querySelector(".discount_percent").style.visibility = "hidden";
    triggerPosition = false;
    discount = 1;
  }
  sliderFunction(sliderActual);
}
