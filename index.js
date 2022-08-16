import {BooksArray,Methods} from './modules/classes';
import {singlePage} from './modules/singlePageApp';
const message = document.createElement('p');
const section = document.querySelector('.books-list');
const addButton = document.querySelector('.add-books');
const title = document.querySelector('.add-books .title input');
const author = document.querySelector('.add-books .author input');
const addBooksSection = document.querySelector('.add-books-section');
addBooksSection.appendChild(message);
let bookTitle;
let bookAuthor;
const books = new BooksArray();
const booksMethods = new Methods();
if (window.localStorage.booksCollection) {
  books.books = JSON.parse(window.localStorage.booksCollection);
  for (let i = 0; i < books.books.length; i += 1) {
    const loadedSection = document.createElement('li');
    loadedSection.classList.add('row');
    loadedSection.innerHTML = `
        <p>"${books.books[i].title}" by ${books.books[i].author}</p>
        <button>Remove</button>
        `;
    section.appendChild(loadedSection);
    section.style.cssText = 'border: 4px black solid;';
    const removeButtonStatic = document.querySelector(`.books-list li:nth-of-type(${i + 1}) button `);
    removeButtonStatic.addEventListener('click', booksMethods.removeBook);
  }
}
// addButton.addEventListener('submit', booksMethods.addBook);
addButton.addEventListener('submit', (e) => {
  if (title.value === '' || author.value === '') {
    e.preventDefault();
    message.style.cssText = 'color:red;margin-top:20px;';
    if (title.value === '' && author.value === '') {
      message.textContent = 'title and author fields are missing please fill them before adding your book';
    } else if (title.value === '') {
      message.textContent = 'title field is missing please fill it before adding your book';
    } else {
      message.textContent = 'author field is missing please fill it before adding your book';
    }
  } else {
    booksMethods.addBook();
  }
});
singlePage();