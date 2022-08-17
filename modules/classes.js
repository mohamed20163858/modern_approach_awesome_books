class Methods {
  constructor(books = []) {
    this.books = books;
  }

     addBook = () => {
       const section = document.querySelector('.books-list');
       const dynamicSection = document.createElement('li');
       const title = document.querySelector('.add-books .title input');
       const author = document.querySelector('.add-books .author input');
       dynamicSection.classList.add('row');
       dynamicSection.innerHTML = `
        <p>"${title.value}" by ${author.value}</p>
        <button>Remove</button>
        `;
       section.appendChild(dynamicSection);
       section.style.cssText = 'border: 4px black solid;';
       const book = { title: title.value, author: author.value };
       this.books.push(book);
       window.localStorage.booksCollection = JSON.stringify(this.books);
     }

    removeBook = (element) => {
      let bookTitle;
      let bookAuthor = '';
      const section = document.querySelector('.books-list');
      const k = element.parentElement.querySelector('p').textContent;
      [bookTitle, bookAuthor] = k.split(' by ');
      bookTitle = bookTitle.slice(1, -1);
      element.parentElement.remove();
      this.books = this.books.filter(
        (item) => item.title !== bookTitle || item.author !== bookAuthor,
      );
      window.localStorage.booksCollection = JSON.stringify(this.books);
      if (this.books.length === 0) {
        section.style.cssText = 'border: none;';
      }
    }
}
export { Methods as default };