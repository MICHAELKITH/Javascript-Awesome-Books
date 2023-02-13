// dom manipulation
const books = JSON.parse(localStorage.getItem('books')) || [];
const bookList = document.getElementById('books');
const bookTitle = document.getElementById('title');
const authorTitle = document.getElementById('author');
const addBtn = document.getElementById('add');

// display books
function displayList() {
  bookList.textContent = '';
  books.forEach((item, i) => {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');
    bookDiv.innerHTML = `
          <p> Title:${item.title}</p>
          <p> Author:${item.author}</p>
          <button data-i="${i}" id="remove">Remove</button>
          <hr>
        `;
    bookList.appendChild(bookDiv);
  });
}
// add new book
function newBook() {
  const title = bookTitle.value;
  const author = authorTitle.value;
  books.push({ title, author });
  localStorage.setItem('books', JSON.stringify(books));
  displayList();
}
// remove new book
function removeBook(i) {
  books.splice(i, 1);
  localStorage.setItem('books', JSON.stringify(books));
  displayList();
}
addBtn.addEventListener('click', newBook);
bookList.addEventListener('click', (bookRem) => {
  if (bookRem.target.id === 'remove') {
    const i = bookRem.target.getAttribute('data-index');
    removeBook(i);
  }
});
displayList();