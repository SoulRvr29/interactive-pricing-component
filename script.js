"use strict";
const views = document.querySelector(".views_value");
const price = document.querySelector(".price_span");
const slider = document.querySelector(".slider");
const monthYearTrigger = document.querySelector(".monthYear_trigger");
const discPercent = document.querySelector(".discount_percent");
const prices = {
    "10K": 8,
    "50K": 12,
    "100K": 16,
    "500K": 24,
    "1M": 36,
};
let discount = 1;
let triggerPosition = false;
let sliderActual = "";
slider.style.background = `linear-gradient(to right, hsl(174, 86%, 45%) 50%, hsla(225, 49%, 68%, 0.164) 50%)`;
slider.addEventListener("input", (e) => {
    let sliderPercent = (e.currentTarget.value / slider.max) * 100;
    slider.style.background = `linear-gradient(to right, hsl(174, 86%, 45%) ${sliderPercent}%, hsla(225, 49%, 68%, 0.164) ${sliderPercent}%)`;
});
function sliderFunction(sliderValue) {
    sliderActual = sliderValue;
    switch (sliderValue) {
        case "0":
            views.innerHTML = "10K";
            price.innerHTML = "$" + prices["10K"] * discount + ".00";
            break;
        case "1":
            views.innerHTML = "50K";
            price.innerHTML = "$" + prices["50K"] * discount + ".00";
            break;
        case "2":
            views.innerHTML = "100K";
            price.innerHTML = "$" + prices["100K"] * discount + ".00";
            break;
        case "3":
            views.innerHTML = "500K";
            price.innerHTML = "$" + prices["500K"] * discount + ".00";
            break;
        case "4":
            views.innerHTML = "1M";
            price.innerHTML = "$" + prices["1M"] * discount + ".00";
    }
}
function trigger() {
    if (triggerPosition == false) {
        monthYearTrigger.style.justifyContent = "flex-end";
        monthYearTrigger.style.backgroundColor = "hsl(174, 86%, 45%)";
        discPercent.style.visibility = "visible";
        triggerPosition = true;
        discount = 0.75;
    }
    else {
        monthYearTrigger.style.justifyContent = "flex-start";
        monthYearTrigger.style.backgroundColor = "hsl(223, 50%, 87%)";
        discPercent.style.visibility = "hidden";
        triggerPosition = false;
        discount = 1;
    }
    sliderFunction(sliderActual);
}
