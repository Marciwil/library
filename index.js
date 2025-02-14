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
// that toogles a book's instance's read status.

let myLibrary = [];

function Book(title, author, pages, read, genre) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = read;
    this.genre = genre;
    this.info = function() {
        console.log(this.title, this.author, this.pages, this.read, this.genre)
    };
};

// Change "read status" button //
Book.prototype.changeToReadStatus = function(readCell) {
    this.readStatus = "Read"
    readCell.textContent = this.readStatus
};

// Remove a book fomr the display //
Book.prototype.removeBook = function(rowToRemove) {
    myLibrary = myLibrary.filter((bookToCheck) => {
        this.title != bookToCheck.title
    })
    table.removeChild(rowToRemove)
};

// Adds the content to myLibrary array //
function addBookToLibrary(title, author, pages, read, genre) {
    const book = new Book(title, author, pages, read, genre);
    myLibrary.push(book);
};

//Book Array Examples //

addBookToLibrary( "Twilight","Meyer, Stephanie","544 pages","Not Read","Romance, Supernatural");

addBookToLibrary("Thigh High: Reiwa Hanamaru Academy Vol.1","Kotobuki","137 pages","Not Read", "Teen, Drama",);

addBookToLibrary("Go for it! Nakamura!","Syundei","188 pages","Not Read","Teen, Roamance, Drama");

addBookToLibrary("Midnight Sun", "Meyer, Stephanie","662 pages","Not Read","Romance, Vampire, Fiction");

addBookToLibrary("Heaven's Official Blessing Book.1","Mo Xiang Tong Xiu","417 pages","Not Read","Romance, Fantasy, Fiction");

// Events //

let form = document.querySelector('form')
let titleInput =document.getElementById('title')
let authorInput = document.getElementById('author')
let pageInput = document.getElementById('page-amount')
let readInput = document.getElementById('read-status')
let genreInput = document.getElementById('genre')

const container = document.querySelector('#container')
const bookBtn = document.querySelector("#addBtn");
const table = document.querySelector('#tableBody');


// Display books onto table //
function displayBooks() {
    table.childNodes.forEach((child) => {
        table.removeChild(child)
    })

    myLibrary.forEach((book) => {
        const newRow = document.createElement('tr');
        newRow.classList.add("bookData");
        // Add the bookData class name to the new row

        const titleCell = document.createElement('td');
        titleCell.textContent = book.title
        newRow.appendChild(titleCell);

        const authorCell = document.createElement('td');
        authorCell.textContent = book.author
        newRow.appendChild(authorCell);

        const pageCell = document.createElement('td');
        pageCell.textContent = book.pages
        newRow.appendChild(pageCell);

        const readCell = document.createElement('td');
        readCell.classList.add('readCell')
        readCell.textContent = book.readStatus

        const readBtn = document.createElement('button')
        readBtn.setAttribute('id','readBtn')
        readBtn.textContent = "Read?";
        readBtn.addEventListener( 'click', () => { 
            console.log(book)
            book.changeToReadStatus(readCell)
        });
        readCell.appendChild(readBtn);
        newRow.appendChild(readCell);

        const genreCell = document.createElement('td');
        genreCell.textContent = book.genre
        newRow.appendChild(genreCell);

        const removeBookBtn = document.createElement('button');
        removeBookBtn.textContent = "Remove"
        newRow.appendChild(removeBookBtn);
        removeBookBtn.addEventListener( 'click', () => {
            book.removeBook(newRow)
        });

        table.appendChild(newRow);
    });
};

displayBooks()

// button to add new books //
bookBtn.addEventListener('click', () => {

    let bookTitle = titleInput.value
    let bookAuthor = authorInput.value
    let bookPage = pageInput.value
    let bookRead = readInput.value
    let bookGenre = genreInput.value

    addBookToLibrary(bookTitle, bookAuthor, bookPage, bookRead, bookGenre);
    displayBooks();
     
    // Clears Table Value //
    titleInput.value =''
    authorInput.value =''
    pageInput.value =''
    readInput.value =''
    genreInput.value =''


});

// Read Status Button //
// when this button is clicked, I want the read status to be "Read"
// else it should read "Not Read".

