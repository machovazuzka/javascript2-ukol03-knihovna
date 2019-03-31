/*
  Třída pro jednu knihu v knihovně.

  Vlastnosti:
  - author: autor knihy
  - title: název khiny
  - year: rok vydání
  - image: obrázek knihy
  - isRead: boolean (true/false) zda máme knihu přečtenou

  Metody:
  - read(): označí knihu jako přečtenou
*/
export default class Book {

  constructor(author, title, year, image) {
    this.author = author;
    this.title = title;
    this.year = year;
    this.image = image;
    this.isRead = false;
  }

  read() {
    this.isRead = true;
    console.log(`Super, přečetl jsi knihu ${this.title}.`);
  }

  createHtmlElemet(element, itsClass, text) {
    let el = document.createElement(element);
    el.classList.add(itsClass);
    if(text) {
      el.innerHTML = text;
    }
    return el;
  }

  renderHTML(isCurrent) {
    let bookElement = document.createElement("div");
    bookElement.classList.add("book");

    let imageElement = document.createElement("img");
    imageElement.src = `images/${this.image}`;
    let bookImageElement = this.createHtmlElemet("div", "book__image");
    bookImageElement.appendChild(imageElement);
    bookElement.appendChild(bookImageElement);
    let titleElement = this.createHtmlElemet("h3", "book__title", this.title);
    let metaElement = this.createHtmlElemet("p", "book__meta", `${this.author}, ${this.year}`);

    let bookInfoElement = this.createHtmlElemet("div", "book__info");
    bookInfoElement.appendChild(titleElement);
    bookInfoElement.appendChild(metaElement);
    bookElement.appendChild(bookInfoElement);

    if(this.isRead) {
      let isReadElement = document.createElement("div");
      isReadElement.classList.add("book__badge", "book__badge--read");
      isReadElement.innerHTML = "Precteno";
      bookElement.appendChild(isReadElement);
    }
    if(isCurrent) {
      let isCurrentElement = document.createElement("div");
      isCurrentElement.classList.add("book__badge", "book__badge--current");
      isCurrentElement.innerHTML = "Právě čtu";
      bookElement.appendChild(isCurrentElement);
    }
    return bookElement;
  }
}