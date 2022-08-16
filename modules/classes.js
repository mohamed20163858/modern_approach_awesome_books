function BooksArray(books = []) {
    this.books = books;
  }
  class Methods {
     addBook = () => {
      const dynamicSection = document.createElement('li');
      dynamicSection.classList.add('row');
      dynamicSection.innerHTML = `
        <p>"${title.value}" by ${author.value}</p>
        <button>Remove</button>
        `;
      section.appendChild(dynamicSection);
      section.style.cssText = 'border: 4px black solid;';
      const book = { title: title.value, author: author.value };
      books.books.push(book);
      window.localStorage.booksCollection = JSON.stringify(books.books);
      this.style.color = 'black';
    }
  
    removeBook = () => {
      const k = this.parentElement.querySelector('p').textContent;
      [bookTitle, bookAuthor] = k.split(' by ');
      bookTitle = bookTitle.slice(1, -1);
      this.parentElement.remove();
      books.books = books.books.filter(
        (item) => item.title !== bookTitle || item.author !== bookAuthor,
      );
      window.localStorage.booksCollection = JSON.stringify(books.books);
      if (books.books.length === 0) {
        section.style.cssText = 'border: none;';
      }
    }
  }
  export {BooksArray,Methods};