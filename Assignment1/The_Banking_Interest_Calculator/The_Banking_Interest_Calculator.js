let accountType = "Saving account";
let amount = 150000;
let years = 2;

let interset;
if (accountType == "Saving account") {
  interset = 0.04;
}
if (accountType == "Fixed Deposit") {
  interset = 0.065;
}
if (amount > 100000) {
  rate += 1;
}
let total = amount * Math.pow((1 + interset / 100), years);

total = total.toFixed(2);

console.log("Account Type: " + accountType);
console.log("Interest Rate: " + rate + "%");
console.log("Final Balance after " + years + " years: " + total);