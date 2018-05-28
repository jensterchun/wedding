/*

class Book {
    constructor(title, author, pages, rating) {
        this._title = title;
        this._author = author;
        this._pages = pages;
        this._rating = rating;
    }
    get title(){
        return this._title;
    }
    get author(){
        return this._author;
    }
    get pages(){
        return this._pages;
    }
    get rating(){
        return this._rating;
    }
    review() {
        document.write(`"${this.title}" was written by ${this.author} and it has ${this.pages} pages with a personal rating of ${this.rating}.`)
    }
}



//Book mixedUp
const mixedUp = new Book("From the Mixed-Up Files of Mrs. Basil E. Frankweiler", "E.L. Konigsburg", 162, 4);
mixedUp.review();

//Book refresh
const refresh = new Book("Refresh", "Shona Murray", 187, 5);
refresh.review();

//Book habit
const habit = new Book("The Power of Habit", "Charles Duhigg", 371, 3.5);
habit.review();

//Book mysteriousAffair
const mysteriousAffair = new Book("The Mysterious Affair at Styles", "Agatha Christie", 296, 3.5);
mysteriousAffair.review();

//Book horseAndBoy
const horseAndBoy = new Book("The Horse and His Boy", "C.S. Lewis", 199, 5);
horseAndBoy.review();

//Book princeCaspian
const princeCaspian = new Book("Prince Caspian", "C.S. Lewis", 195, 4);
princeCaspian.review();

//Book righteous
const righteous = new Book("The Way of the Righteous in the Muck of Life: Psalm 1-12", "Dale Ralph Davis", 144, 5);
righteous.review();

//Book breathBecomesAir
const breathBecomesAir = new Book("When Breath Becomes Air", "Paul Kalanithi", 256, 4);
breathBecomesAir.review();

//Book littlePrince
const littlePrince = new Book("The Little Prince", "Antoine de Saint-Exupery", 86, 4);
littlePrince.review();


*/

const books = [
    {title: "From the Mixed-Up Files of Mrs. Basil E. Frankweiler", author: "E.L. Konigsburg", pages: 162, rating: 4},
    {title: "Refresh", author: "Shona Murray", pages: 187, rating: 5},
    {title: "The Power of Habit", author: "Charles Duhigg", pages: 371, rating: 3.5},
    {title: "The Mysterious Affair at Styles", author: "Agatha Christie", pages: 296, rating: 3.5},
    {title: "The Horse and His Boy", author: "C.S. Lewis", pages: 199, rating: 5},
    {title: "Prince Caspian", author: "C.S. Lewis", pages: 195, rating: 4},
    {title: "The Way of the Righteous in the Muck of Life: Psalm 1-12", author: "Dale Ralph Davis", pages: 144, rating: 5},
    {title: "When Breath Becomes Air", author: "Paul Kalanithi", pages: 256, rating: 4},
    {title: "The Little Prince", author: "Anyoine de Saint-Exupery", pages: 86, rating: 4}
];

const bookListDOM = document.querySelector('.bookList');

books.forEach(book => {
    const bookDOM = document.createElement('DIV');
    console.log(bookListDOM)
    bookDOM.classList.add('book');
    bookDOM.innerHTML = `"${book.title}" was written by ${book.author} and it has ${book.pages} pages with a personal rating of ${book.rating}.`;
    bookDOM.appendChild(bookListDOM);
});

const read = books.title.map(book => `I read ${book}`);