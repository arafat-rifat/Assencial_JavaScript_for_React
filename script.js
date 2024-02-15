const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: false,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// Destructuring

/*
const book = getBook(3);
book;

// const title = book.title;
// const author = book.author;

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

console.log(author, title, genres);

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
console.log(primaryGenre, secondaryGenre, otherGenres);

const newGenres = ["epic fantasy", ...genres];
newGenres;

const updatedBook = {
  ...book,
  // Adding a new property
  moviePublicationDate: "2001-12-19",

  // Overwriting an existing property
  pages: 1210,
};
updatedBook;

// function getYear(str) {
//   return str.split("-")[0];
// }

const getYear = (str) => str.split("-")[0];
console.log(getYear(publicationDate));

const summary = `${title}, a ${pages}-page long book, was written by ${author} and published in ${getYear(
  publicationDate
)}. The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie`;
summary;

const pagesRange = pages > 1000 ? "over a thousand" : "less than 1000";
pagesRange;
console.log(`The book has ${pagesRange} pages`);

console.log(true && "Some string");
console.log(false && "Some string");
console.log(hasMovieAdaptation && "This book has a movie");

// falsy: 0, '', null, undefined
console.log("jonas" && "Some string");
console.log(0 && "Some string");

console.log(true || "Some string");
console.log(false || "Some string");

console.log(book.translations.spanish);

const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";
spanishTranslation;

// console.log(book.reviews.librarything.reviewsCount);
// const countWrong = book.reviews.librarything.reviewsCount || "no data";
// countWrong;

// const count = book.reviews.librarything.reviewsCount ?? "no data";
// count;

function getTotalReviewCount(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  librarything;
  return goodreads + librarything;
}

console.log(getTotalReviewCount(book));
*/

/*
function getTotalReviewCount(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  librarything;
  return goodreads + librarything;
}

const books = getBooks();
books;

const x = [1, 2, 3, 4, 5].map((el) => el * 2);
console.log(x);

const titles = books.map((book) => book.title);
titles;

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book),
}));
essentialData;

const longBooksWithMovie = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
longBooksWithMovie;

const adventureBooks = books
  .filter((books) => books.genres.includes("adventure"))
  .map((book) => book.title);
adventureBooks;

const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0);
pagesAllBooks;

const arr = [3, 7, 1, 9, 6];
const sorted = arr.slice().sort((a, b) => a - b);
sorted;
arr;

const sortedByPages = books.slice().sort((a, b) => a.pages - b.pages);
sortedByPages;

// 1) Add book object to array
const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J. K. Rowling",
};
const booksAfterAdd = [...books, newBook];
booksAfterAdd;

// 2) Delete book object from array
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
booksAfterDelete;

// 3) Update book object in the array
const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 1210 } : book
);
booksAfterUpdate;
*/

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// console.log("jonas");

// async function getTodos() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos");
//   const data = await res.json();
//   console.log(data);

//   return data;
// }

// const todos = getTodos();
// console.log(todos);

// console.log("jonas");

// Destructuring

/*
const book = getBook(3);

// const title = book.title;
// const author = book.author;

const { title, author, publicationDate, genres, hasMovieAdaptation, pages } =
  book;

console.log(author, title, genres);

const [primaryGenres, secondaryGenre, ...otherGenres] = genres;

console.log(primaryGenres, secondaryGenre, otherGenres);

const newGenres = ["Epiq Fentacy", ...genres];
newGenres;

const updatedBook = {
  ...book,

  // Adding A new Property
  moviePublicationDate: "2001-12-19",

  // OverWriting A existing Property

  pages: 1210,
};

updatedBook;

//  Arrow Functions(Revisions)

// Lets Example With Publications Date , We Use it as a function to get Year Value.

// If We Do it In function Decleration

// function getYear(str){
//   return str.split("-")[0];
// }


// Also Do it In Function Decleration Using Arrow Function

const getYear = (str) => str.split("-")[0];
console.log(getYear(publicationDate));


// Tamplate Litterels

const summary = `${title}, is a ${pages}--page long book, was written by ${author} and published in ${ 
  getYear(publicationDate) }, The book has ${hasMovieAdaptation ? "" : "Not"} been adapted a movie`;
summary;

//Turnary Operator
 const pagesRange = pages > 1000 ? "Over a thousand" : "Less than 1000";

 pagesRange;

 console.log(`the book has ${pagesRange} pages`)


// "And" Operator and "OR" Operator have a Features Called Short Circuiting

console.log(hasMovieAdaptation && "Thid Book has a movie");


// Falsy :- 0, "" , null , undefined
// When First Operend true the Exicute the Secoend Operend

console.log('Jonas' && "Some String")

console.log(0 && "Some String")

// OR Operator (When First Operend True Then Exicute The First Operend)
console.log(true || "Some String")
console.log(false || "Some String")

// End Short Circuiting Part

console.log(book.translations.spanish)

const spanishTranshlation = book.translations.spanish || "Not Translated";

spanishTranshlation;

// But There Is A problem.In this Situation When First Value Is 0 it also Exicute as a falsy value 
// For The Example

// console.log(book.reviews.librarything.reviewsCount)
// In this moment I have a Data =  0; But In short circuirting They Count This as a Falsy Value and and Exicuite 2nd Operend;

// const countWrong = book.reviews.librarything.reviewsCount || "NO DATA";

// countWrong;

// End Example
// So what is the Solution ???
// JavaScript has Recently added a new Logical Operator Which Is Called the Nullish coalescing  Operator

// const count = book.reviews.librarything.reviewsCount ?? "no data";
// count;

// So we can say that  Nullish coalescing  Operator retun second value when first value is null or undefined; But not when it is 0 or empty string;

////////////////////////////////////////////////////

// Lets now take a quick look at the very important optional chaining operator;

function getTotalReviewCount(book){

  const goodreads = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  return  goodreads + librarything;

}

 console.log(getTotalReviewCount(book))

 */

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*

//  Lets Take a very Quick look about  3 functional Array Methods(map,filter,reduce,sort)

const books = getBooks();

// demo
const x = [1, 2, 3, 4, 5, 6, 7].map((el) => el * 2);

console.log(x);

const titles = books.map((book) => book.title)

titles


////////////////////////////////////////////////

function getTotalReviewCount(book){

  const goodreads = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  return  goodreads + librarything;

}

const essencialData = books.map((book)=> ({
  // If we use third bracket in arrow function then we must write return for returning some thing because After {} it will be function declaration.
  // For Autometicly Returning SomeThing Then We use () Before the {}
 
    title : book.title,
    author : book.author,
    reviewCount : getTotalReviewCount(book),
}) );

essencialData;

// Array Filter Method
// As the name says we can use the filter method in order to filter out some elements of the array based on a condition.

const longBooksWithMovie = books.filter((book) => 
 book.pages >  500
).filter((book) => book.hasMovieAdaptation)

longBooksWithMovie;

const adventureBooks = books.filter((book) => book.genres.includes("adventure")).map((book) => book.title)
adventureBooks;

// Reduce Method

const pagesAllBooks = books.reduce((sum,book)=> sum + book.pages,0)

pagesAllBooks;

// Sort Method

const num = [3,47,1,9,6];


// Using Slide here For Create new Array to not muted with orginal array(Its a Tricks)
const sorted = num.slice().sort((a,b) => a - b) //This is for assending away
// a is first element and b is 2nd element
// For decending we just reverse it b-a
// Its a mutable method its not a functional method
sorted;
num;

///////////////////////////////////

const sortedByPages = books.slice().sort((a,b) => a.pages - b.pages);
sortedByPages;

////////////////////////////////////
// Working With Immutables arrays
//////////


// Add a Book object to array

const newBook ={
  id:6,
  title: "Harry Potter and the Chamber of Secrets",
  author: 'J.K .Rowling',
}

const booksAfterAdd = [...books,newBook];
booksAfterAdd;

// Delete a Book Object From Array
// To Shorted a array We use Filter to shorter the Previous Array
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
booksAfterDelete;

// Update book object in the array
const booksAfterUpdate = booksAfterDelete.map((book) => book.id === 1 ? {...book, pages :1210} : book);
booksAfterUpdate;

*/

// Asyncronus JavaScript Technique :- Promises
// Fetching Data Using Promises Method

// fetch('https://jsonplaceholder.typicode.com/todos').then((res) => res.json()).then((data) => console.log(data))

// console.log('rifat')

//We do it in Cleaner way using Asyng Await function

async function getTodos() {
 const res = await fetch("https://jsonplaceholder.typicode.com/todos");

 const data = await res.json()
 console.log("🚀 ~ getTodos ~ data:", data)
}
getTodos();

console.log('rifat2')