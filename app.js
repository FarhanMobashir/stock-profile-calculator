const initialPriceInput = document.querySelector("#initial-price");
const stockQuantityInput = document.querySelector("#stock-quantity");
const currentPriceInput = document.querySelector("#current-price");
const checkButton = document.querySelector(".check-button");
const image = document.querySelector(".image");

const output = document.querySelector(".output");

let initialPrice = "";
let stockQuantity = "";
let currentPrice = "";

initialPriceInput.addEventListener("change", function (e) {
  initialPrice = e.target.value;
});

stockQuantityInput.addEventListener("change", function (e) {
  stockQuantity = e.target.value;
});

currentPriceInput.addEventListener("change", function (e) {
  currentPrice = e.target.value;
});

function isProfit(initialPrice, stockQuantity, currentPrice) {
  let totalPurchasePrice = parseInt(initialPrice) * parseInt(stockQuantity);
  let totalCurrentPrice = parseInt(currentPrice) * parseInt(stockQuantity);
  if (totalPurchasePrice < totalCurrentPrice) {
    return true;
  } else {
    return false;
  }
}

function calculate(initialPrice, stockQuantity, currentPrice) {
  let totalPurchasePrice = parseInt(initialPrice) * parseInt(stockQuantity);
  let totalCurrentPrice = parseInt(currentPrice) * parseInt(stockQuantity);
  if (isProfit(initialPrice, stockQuantity, currentPrice)) {
    let profit = parseInt(totalCurrentPrice) - parseInt(totalPurchasePrice);
    return profit;
  } else {
    let loss = parseInt(totalPurchasePrice) - parseInt(totalCurrentPrice);
    return loss;
  }
}

// console.log(isLucky("10-10-2002", 3));

checkButton.addEventListener("click", function () {
  if (
    initialPrice !== "" &&
    stockQuantity !== "" &&
    currentPrice !== "" &&
    parseInt(initialPrice) > 0
  ) {
    if (isProfit(initialPrice, stockQuantity, currentPrice)) {
      let profit = calculate(initialPrice, stockQuantity, currentPrice);
      output.innerText = `Woooho you earned ${profit} rupees`;
      image.setAttribute(
        "src",
        "https://i.ibb.co/mRN6HQF/leisure-Social-meia-relax-work-laptop-computer-clock-deadline.png"
      );
      setTimeout(() => {
        image.setAttribute(
          "src",
          "https://i.ibb.co/7nB26Jp/Business-Startup-Growth-success-build-idea-innovation-man-thought-grow-smart.png"
        );
        output.innerText = "";
        initialPriceInput.value = "";
        stockQuantityInput.value = "";
        currentPriceInput.value = "";
        initialPrice = "";
        currentPrice = "";
        stockQuantity = "";
      }, 4000);
    } else {
      let loss = calculate(initialPrice, stockQuantity, currentPrice);
      output.innerText = `Shit ! you lost ${loss} rupees`;
      image.setAttribute(
        "src",
        "https://i.ibb.co/Pj8NCM1/Business-Startup-workflow-error-exhaustion-exhausted-work-laptop-computer-support.png"
      );
      setTimeout(() => {
        image.setAttribute(
          "src",
          "https://i.ibb.co/7nB26Jp/Business-Startup-Growth-success-build-idea-innovation-man-thought-grow-smart.png"
        );
        output.innerText = "";
        initialPriceInput.value = "";
        stockQuantityInput.value = "";
        currentPriceInput.value = "";
        initialPrice = "";
        currentPrice = "";
        stockQuantity = "";
      }, 4000);
    }
    //  if (isLucky(userBirthdate, luckyNumber) === false) {
    //   output.innerText = `Sorry , your birthdate is not a lucky one`;
    //   setTimeout(() => {
    //     output.innerText = "";
    //     birthdateInput.value = "";
    //     luckyNumberInput.value = "";
    //   }, 3000);
    // }
  }
});
