"use strict";
const billAmt = document.getElementById("bill-amt");
const tip5 = document.getElementById("tip-percent-5");
const tip10 = document.getElementById("tip-percent-10");
const tip15 = document.getElementById("tip-percent-15");
const tip25 = document.getElementById("tip-percent-25");
const tip50 = document.getElementById("tip-percent-50");
const numPeople = document.getElementById("numPeople-amt");
const tipAmt = document.getElementById("tip-amount");
const totalAmt = document.getElementById("total-amount");

billAmt.addEventListener("input", updateTotalValue);

function updateTotalValue(e) {
  // totalAmt.innerText = e.data;
  totalAmt.innerText = `$${billAmt.value || 0}.00`;
}
