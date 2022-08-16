
  class Methods {
    constructor(books = [])
    {
        this.books=books;
    }
     addBook = () => {
      const section = document.querySelector('.books-list');
      const dynamicSection = document.createElement('li');
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
      console.log(this.books);
    }
  
    removeBook = (event) => {
      console.log(event);
      let bookTitle;
      let bookAuthor;
      const k = event.parentElement.querySelector('p').textContent;
      [bookTitle, bookAuthor] = k.split(' by ');
      bookTitle = bookTitle.slice(1, -1);
      event.parentElement.remove();
      this.books = this.books.filter(
        (item) => item.title !== bookTitle || item.author !== bookAuthor,
      );
      window.localStorage.booksCollection = JSON.stringify(this.books);
      if (this.books.length === 0) {
        section.style.cssText = 'border: none;';
      }
    }
  }
  export {Methods};