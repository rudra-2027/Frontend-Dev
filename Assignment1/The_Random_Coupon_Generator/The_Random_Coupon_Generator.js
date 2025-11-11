function generateCoupon() {
  let number = Math.floor(Math.random() * 100) + 1;
  alert(`Your Coupon Number: ${number}`);

  let message = "";
  if (number <= 30) {
    message = "You won a 10% discount!";
  } else if (number <= 60) {
    message = "You won a 20% discount!";
  } else if (number <= 90) {
    message = "You won a 30% discount!";
  } else {
    message = "You won a 50% Mega Offer!";
  }

  alert(message);

  function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  if (isPrime(number)) {
    alert("Prime number bonus applied!");
  }
}

generateCoupon();
