function calculateLibraryFine() {
  let books = parseInt(prompt("Enter number of delayed book returns:"));
  let totalFine = 0;
  let details = "";

  for (let i = 1; i <= books; i++) {
    let daysLate = parseInt(prompt(`Enter days late for book ${i}:`));
    let fine = 0;

    if (daysLate >= 1 && daysLate <= 5) {
      fine = daysLate * 10;
    } else if (daysLate >= 6 && daysLate <= 10) {
      fine = daysLate * 20;
    } else if (daysLate > 10) {
      fine = daysLate * 50;
    }

    totalFine += fine;
    details += `Book ${i}: ${daysLate} days late → Fine ₹${fine}\n`;
  }

  let penalty = (books > 3) ? 200 : 0;
  totalFine += penalty;

  let message =
    "Library Fine Summary\n\n" +
    details +
    (penalty > 0 ? `\nExtra Penalty (more than 3 books): ₹${penalty}\n` : "") +
    `\nTotal Fine: ₹${totalFine}`;

  alert(message);
}

calculateLibraryFine();
