import { showBookList, showForm, showContact } from './modules/index1.js';
import { DateTime } from './modules/luxon.min.js';

const bookTitle = document.querySelector('#book-title');
const bookAuthor = document.querySelector('#book-author');
const addBookBtn = document.querySelector('#add');
const bookList = document.querySelector('#bookList');
let collectBooks = JSON.parse(localStorage.getItem('books')) || [];

class BookClass {
constructor(title, author) {
this.bookTitle = title;
this.bookAuthor = author;
}
addBook() {
    const newBook = { title: bookTitle.value, author: bookAuthor.value };
    collectBooks.push(newBook);
    localStorage.setItem('books', JSON.stringify(collectBooks));
    }
    
    remove(element) {
    const bookId = element.target.id;
    const bookToDelete = collectBooks[bookId - 1];
    const freshCollection = collectBooks.filter((book) => book !== bookToDelete);
    collectBooks = freshCollection;
    localStorage.setItem('books', JSON.stringify(freshCollection));
    element.target.parentElement.remove();
    }
    displayBooks() {
        bookList.innerHTML = '';
        collectBooks.forEach((book, index) => {
        const parentContainer = document.createElement('div');
        parentContainer.classList.add('book-card');
        const titleContainer = document.createElement('span');
        const authorContainer = document.createElement('span');
        const removeButton = document.createElement('button');
        removeButton.classList.add('btn');
        const bookInfos = document.createElement('p');
        bookInfos.classList.add('book-infos');
        removeButton.innerText = 'Remove';
        removeButton.addEventListener('click', (e) => this.remove(e));
        removeButton.setAttribute('id', index + 1);
      
        titleContainer.innerText = `Title : ${book.title} \nAuthor : `;
        authorContainer.innerText = book.author;
      
        bookInfos.appendChild(titleContainer);
        bookInfos.appendChild(authorContainer);
        parentContainer.appendChild(bookInfos);
        parentContainer.appendChild(removeButton);
        bookList.appendChild(parentContainer);
      });
    }
}

const myBookList = new BookClass();

addBookBtn.addEventListener('click', () => {
myBookList.addBook();
bookTitle.value = '';
bookAuthor.value = '';
myBookList.displayBooks();
});

window.addEventListener('DOMContentLoaded', () => {
myBookList.displayBooks();
});
const now = DateTime.now();
document.getElementById('current-date').innerHTML = now.toLocaleString(DateTime.DATETIME_MED);

const list = document.querySelector('#list');
const addNew = document.querySelector('#new');
const contact = document.querySelector('#cont');

list.addEventListener('click', () => showBookList());
addNew.addEventListener('click', () => showForm());
contact.addEventListener('click', () => showContact());

document.addEventListener('DOMContentLoaded', showBookList);