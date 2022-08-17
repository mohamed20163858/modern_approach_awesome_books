import { DateTime } from './modules/luxon.js';
import Methods from './modules/classes.js';
import singlePage from './modules/singlePageApp.js';

const message = document.createElement('p');
const section = document.querySelector('.books-list');
const addButton = document.querySelector('.add-books');
const title = document.querySelector('.add-books .title input');
const author = document.querySelector('.add-books .author input');
const addBooksSection = document.querySelector('.add-books-section');
const date = document.querySelector('header p');
window.setInterval(() => {
  const dateNow = DateTime.now();
  const dayInNumeric = +dateNow.toLocaleString({ day: 'numeric' });
  let endDayPhrase = '';
  if (dayInNumeric === 1) {
    endDayPhrase = 'st';
  } else if (dayInNumeric === 2) {
    endDayPhrase = 'nd';
  } else if (dayInNumeric === 3) {
    endDayPhrase = 'rd';
  } else {
    endDayPhrase = 'th';
  }
  date.textContent = `${dateNow.toLocaleString({ month: 'long', day: 'numeric' })}${endDayPhrase} ${dateNow.toLocaleString({ year: 'numeric' })}, ${dateNow.toLocaleString(DateTime.TIME_WITH_SECONDS)}`;
}, 1000);
addBooksSection.appendChild(message);
const booksMethods = new Methods();
if (window.localStorage.booksCollection) {
  booksMethods.books = JSON.parse(window.localStorage.booksCollection);
  for (let i = 0; i < booksMethods.books.length; i += 1) {
    const loadedSection = document.createElement('li');
    loadedSection.classList.add('row');
    loadedSection.innerHTML = `
        <p>"${booksMethods.books[i].title}" by ${booksMethods.books[i].author}</p>
        <button>Remove</button>
        `;
    section.appendChild(loadedSection);
    section.style.cssText = 'border: 4px black solid;';
    const removeButtonStatic = document.querySelector(`.books-list li:nth-of-type(${i + 1}) button `);
    removeButtonStatic.addEventListener('click', () => {
      booksMethods.removeBook(removeButtonStatic);
    });
  }
}
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