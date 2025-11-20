function bookTicket() {
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let seats = document.getElementById("seats");

  let nameErr = document.getElementById("nameErr");
  let emailErr = document.getElementById("emailErr");
  let seatErr = document.getElementById("seatErr");

  let ticketBox = document.getElementById("ticketBox");

  let nameRegex = /^[A-Za-z ]+$/;
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let isValid = true;

  if (!nameRegex.test(name.value.trim())) {
    name.style.border = "2px solid red";
    nameErr.style.display = "block";
    isValid = false;
  } else {
    name.style.border = "2px solid green";
    nameErr.style.display = "none";
  }

  if (!emailRegex.test(email.value.trim())) {
    email.style.border = "2px solid red";
    emailErr.style.display = "block";
    isValid = false;
  } else {
    email.style.border = "2px solid green";
    emailErr.style.display = "none";
  }

  if (seats.value < 1 || seats.value > 10) {
    seats.style.border = "2px solid red";
    seatErr.style.display = "block";
    isValid = false;
  } else {
    seats.style.border = "2px solid green";
    seatErr.style.display = "none";
  }

  if (isValid) {
    const booking = {
      name: name.value,
      email: email.value,
      seats: seats.value,
    };

    ticketBox.textContent = JSON.stringify(booking, null, 2);
  }
}
