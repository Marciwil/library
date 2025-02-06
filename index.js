// const twilight = new Book('Twilight by Stephanie Meyer,', '544 pages,', 'have read.'); // this is fun :D (2/3/25)
// ;
// twilight.info();

// Library Project //

// Instructions //
// 1. All books are stored in an array.
// 2. Add a seperate function that can take some arguments, create a book from the arguments
// and store the new book into an array.
// 3. Write a function that loops through the array and displays each book on the page. Use a table
// or own their own "card". 
// 4. Add a "New Book" button to calls a form allowing users to inut the details for the new book
// and add it to the library; author, title, number of pages, and read status, etc.
// Use <dialog> tag if you wish. submit input and event.preventDefaults(); can also be used.
// 5. Add a button on each display to remove the book from the library. Give them an attribute
// for data that corresponds to the index of the library array.
// 6. Add a button on each book's display to change its read status. Create a book prototype
// that toogles a book'sinstance's read status.

const myLibrary = [];

function Book(title, author, pages, read, genre) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.genre = genre;
    this.info = function() {
        console.log(this.title, this.author, this.pages, this.read, this.genre)
    };
};

function addBookToLibrary(title, author, pages, read, genre) {
    const book = new Book(title, author, pages, read, genre);
    myLibrary.push(book);
}

const book1 = new Book(
    "Twilight,",
    "Meyer, Stephanie,",
    "544 pages,",
    "Read,",
    "Romance, Supernatural"
);

addBookToLibrary(book1);

const book2 = new Book(
    "Thigh High: Reiwa Hanamaru Academy Vol.1,",
    "Kotobuki,",
    "137 pages,",
    "Read,",
    "Teen, Drama",
);

addBookToLibrary(book2);

const book3 = new Book(
    "Go for it! Nakamura!,",
    "Syundei,",
    "188 pages,",
    "Read,",
    "Teen, Roamance, Drama",
);

addBookToLibrary(book3);

const book4 = new Book(
    "Heaven's Official Blessing Book.1,",
    "Mo Xiang Tong Xiu,",
    "417 pages,",
    "Read",
    "Romance, Fantasy, Fiction",
);

addBookToLibrary(book4);

const book5 = new Book(
    "Midnight Sun,",
    "Meyer, Stephanie,",
    "662 pages,",
    "Mostly Read,",
    "Romance, Vampire, Fiction",
)

addBookToLibrary(book5);

// Events //

// const table = document.querySelector("#library");
let form = document.querySelector('form')
let titleInput =document.getElementById('title')
let authorInput = document.getElementById('author')
let pageInput = document.getElementById('page-amount')
let readInput = document.getElementById('read-status')
let genreInput = document.getElementById('genre')

const container = document.querySelector('#container')
const bookBtn = document.querySelector("#addBtn");

function displayBook(arr) {
    const table = document.getElementById('library')
    const titleColumn = document.getElementById('title-table')
    titleColumn = addBookToLibrary(bookTitle);
    
    console.log(displayBook);
};

bookBtn.addEventListener('onclick', () => {
    let bookTitle = titleInput.value
    let bookAuthor = authorInput.value
    let bookPage = pageInput.value
    let bookRead = readInput.value
    let bookGenre = genreInput.values


    addBookToLibrary(bookTitle, bookAuthor, bookPage, bookRead, bookGenre)

    let firstRow = document.getElementById("title-table").rows[0];
    let newRow = firstRow.insertCell(num);

    for (let num = 1; num < addBookToLibrary.length; num++) {
         newRow += firstRow.insertCell(num)[i];
        console.log(myLibrary.length)
    }

    titleInput.value =''
    authorInput.value =''
    pageInput.value =''
    readInput.value =''
    genreInput.value =''


});



form.appendChild(bookBtn);
container.appendChild(bookBtn);