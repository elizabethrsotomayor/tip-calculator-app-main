"use strict";
const billAmt = document.getElementById("bill-amt");
const numPeople = document.getElementById("numPeople-amt");
const tipAmt = document.getElementById("tip-amount");
const totalAmt = document.getElementById("total-amount");
const resetBtn = document.getElementById("reset-btn");
const tipBtns = document.getElementsByName("tip-percent");
const customTip = document.getElementById("tip-percent-custom");
const customSpan = document.getElementById("custom");

billAmt.addEventListener("input", updateTotalValue);
numPeople.addEventListener("input", splitTotal);

tipBtns.forEach((btn) => {
  btn.addEventListener("click", addTip);
});

function isNumeric(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
}

function updateTotalValue() {
  const billInput = +billAmt.value;

  if (+numPeople.value > 0) {
    totalAmt.innerText = `${billInput / numPeople.value}`;
  } else if (isNumeric(billInput)) {
    totalAmt.innerText = `$${billInput.toFixed(2)}`;
  }
}

function splitTotal() {
  const peopleInput = +numPeople.value;
  const billInput = +billAmt.value;

  if (billAmt && billAmt.value && peopleInput !== 0) {
    totalAmt.innerText = `$${(billInput / peopleInput).toFixed(2)}`;
  }
}

function addTip(e) {
  const percent = (+e.target.value / 100).toFixed(2);

  if (isNumeric(percent) && +numPeople.value > 0) {
    customTip.type = "radio";
    const newTotal = (
      (+billAmt.value + billAmt.value * percent) /
      +numPeople.value
    ).toFixed(2);

    const tipTotal = ((+billAmt.value * percent) / +numPeople.value).toFixed(2);

    if (isNumeric(newTotal) && isNumeric(tipTotal)) {
      totalAmt.innerText = `$${newTotal}`;
      tipAmt.innerText = `$${tipTotal}`;
    }
  }

  if (e.target.value === "custom") {
    handleCustomInput();
  }
}

function handleCustomInput() {
  customTip.type = "text";
  customTip.value = "";
  customSpan.style.display = "none";

  customTip.classList.add("custom-input");
}