let pageViews = document.querySelector("#pageviews");
let dollars = document.querySelector("#money-dollars");
let text = document.querySelector(".month-year-text");
let discount = document.querySelector(".discount");
let discountMobile = document.querySelector(".discount-mobile");
let sliderInput = document.querySelector("#slider-input");
let checkBoxInput = document.querySelector("#checkbox-input");
let yearlySale;



sliderInput.addEventListener("input", ()=>{
    dollarAmount();
})
checkBoxInput.addEventListener('change', ()=> {
  
   if(checkBoxInput.checked) {
    text.innerHTML = "/ year"
    discount.classList.add("green-highlight");
    discountMobile.classList.add("green-highlight");
    yearlySale = true;
    dollarAmount();
   } else {
       text.innerHTML = "/ month"
       discount.classList.remove("green-highlight");
       discountMobile.classList.remove("green-highlight");
       yearlySale = false;
       dollarAmount();
   }
})

function dollarChange() { 
    if(yearlySale == true) {
    dollars.dataset.amount = dollars.dataset.amount - (dollars.dataset.amount * 25 / 100);
    dollars.innerHTML = `$${dollars.dataset.amount}.00`;
    } else {
        dollars.dataset.amount = dollars.dataset.amount;
        dollars.innerHTML = `$${dollars.dataset.amount}.00`;
    }
    
}

function dollarAmount() {
    if(sliderInput.value < 6) {
        pageViews.innerHTML =  "10K";
        pageViews.style.marginLeft = "10px";
        dollars.dataset.amount = 8;
        dollarChange();
    } else if(sliderInput.value < 11) {
        pageViews.innerHTML =  "50K";
        pageViews.style.marginLeft = "10px";
        dollars.dataset.amount = 12;
        dollarChange();
    } else if(sliderInput.value < 16) {
        pageViews.innerHTML =  "100K";
        pageViews.style.marginLeft = "0px";
        dollars.dataset.amount = 16;
        dollarChange();
    } else if(sliderInput.value < 21) {
        pageViews.style.marginLeft = "0px";
        pageViews.innerHTML =  "500K";
        dollars.dataset.amount = 24;
        dollarChange();
    } else {
        pageViews.innerHTML =  "1M";
        pageViews.style.marginLeft = "20px";
        dollars.dataset.amount = 36;
        dollarChange();
    }
}