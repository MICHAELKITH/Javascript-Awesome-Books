class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  static getBookList() {
    return JSON.parse(localStorage.getItem('books')) || [];
  }

  static saveBookList(bookList) {
    localStorage.setItem('books', JSON.stringify(bookList));
  }

  static displayList() {
    const bookListElement = document.getElementById('books');
    bookListElement.textContent = '';
    Book.getBookList().forEach((book, i) => {
      const bookDiv = document.createElement('div');
      bookDiv.classList.add('book');
      bookDiv.innerHTML = `<ul>
        <li>Title:${book.title} By Author:${book.author} <button data-i="${i}" id="remove">Remove</button></li>
      </ul>`;
      bookListElement.appendChild(bookDiv);
    });
  }

  static addBook(title, author) {
    const book = new Book(title, author);
    const bookList = Book.getBookList();
    bookList.push(book);
    Book.saveBookList(bookList);
    Book.displayList();
  }

  static removeBook(i) {
    const bookList = Book.getBookList();
    bookList.splice(i, 1);
    Book.saveBookList(bookList);
    Book.displayList();
  }
}

const bookListElement = document.getElementById('books');
const bookTitleElement = document.getElementById('title');
const authorTitleElement = document.getElementById('author');
const addBtnElement = document.getElementById('add');

addBtnElement.addEventListener('click', () => Book.addBook(bookTitleElement.value, authorTitleElement.value));
bookListElement.addEventListener('click', (event) => {
  if (event.target.id === 'remove') {
    const i = event.target.getAttribute('data-i');
    Book.removeBook(i);
  }
});

Book.displayList();
