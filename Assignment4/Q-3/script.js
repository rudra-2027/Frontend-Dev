class Book {
  constructor(title, author, isbn, isIssued = false) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isIssued = isIssued;
  }

  issueBook() {
    if (!this.isIssued) {
      this.isIssued = true;
      return true;
    }
    return false;
  }

  returnBook() {
    this.isIssued = false;
  }
}

const books = [
  new Book("The Alchemist", "Paulo Coelho", "1111", false),
  new Book("Atomic Habits", "James Clear", "2222", false),
  new Book("Rich Dad Poor Dad", "Robert Kiyosaki", "3333", true),
  new Book("Clean Code", "Robert C. Martin", "4444", false),
  new Book("1984", "George Orwell", "5555", true),
];

function displayAvailableBooks() {
  const container = document.getElementById("bookList");
  container.innerHTML = "";

  const available = books.filter((b) => !b.isIssued);

  available.forEach((book) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${book.title}</h3>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>ISBN:</strong> ${book.isbn}</p>
      <p style="color:green;"><strong>Status: Available</strong></p>
    `;
    container.appendChild(card);
  });
}

function issueBookNow() {
  const isbn = document.getElementById("isbnInput").value.trim();
  const msg = document.getElementById("message");

  const book = books.find((b) => b.isbn === isbn);

  if (!book) {
    msg.style.color = "red";
    msg.textContent = " Book not found!";
    return;
  }

  if (book.isIssued) {
    msg.style.color = "red";
    msg.textContent = "Book already issued!";
    return;
  }

  book.issueBook();
  msg.style.color = "green";
  msg.textContent = "Book issued successfully!";

  displayAvailableBooks();
}

displayAvailableBooks();
