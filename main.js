
let bookShelf = document.querySelector('.bookDisplay');
let book = bookShelf.querySelectorAll('.exampleBook');
let title = bookShelf.querySelectorAll('.title');
let author = bookShelf.querySelectorAll('.author');
let pages = bookShelf.querySelectorAll('.pages');
let addBook = document.querySelector('.addButt');

// Selectors for book printing
let bookTemplate = document.querySelector('.bookDisplay');
let tempTitle = bookTemplate.querySelector('.title');
let tempAuthor = bookTemplate.querySelector('.author');
let tempPages = bookTemplate.querySelector('.pages');





let myLibrary = [];

function Book(name, author, pages) {
    this.name = name,
    this.author = author,
    this.pages = pages,
    this.summary
}


myLibrary.push(book);
console.log(myLibrary);

addBook.addEventListener('click', addBookToLibrary);

function addBookToLibrary() {
    let name = document.querySelector('.bookTitle').value;
    let author = document.querySelector('.bookAuthor').value;
    let pages = document.querySelector('.bookPages').value;
    let newBook = new Book(name, author, pages);
    publishBook(`${name}`, author, pages);
    console.log(newBook);
    
    myLibrary.unshift(newBook);
    console.log(newBook);
    console.log(myLibrary);
}


function publishBook(name, author, pages) {
    // book to display div
    let bookShelf = document.querySelector('.bookDisplay');
    let bookCreate = document.createElement('div');
    bookCreate.classList.add('exampleBook')
    // close button
    let trashBook = document.createElement('div');
    trashBook.classList.add('close');
    
    let trashButton = document.createElement('button');
    trashButton.classList.add('x');
    trashButton.textContent = 'x';
    
    // Title of Book
    let tempTitle = document.createElement('h1');
    tempTitle.classList.add('title');
    tempTitle.textContent = name;
    // Author of Book
    let tempAuthor = document.createElement('h3');
    tempAuthor.classList.add('author');
    tempAuthor.textContent = author;
    // Number of Pages
    let tempPages = document.createElement('h3');
    tempPages.classList.add('pages');
    tempPages.textContent = 'Pages: ' + pages;
    // Container div for buttons
    let tempBtnCont = document.createElement('div');
    tempBtnCont.classList.add('buttonCont')
    // "read" button
    let tempRead = document.createElement('button');
    tempRead.classList.add('read');
    tempRead.textContent = 'Read';
    // "unread" button
    let tempUnRead = document.createElement('button');
    tempUnRead.classList.add('unread');
    tempUnRead.textContent = 'Unread';

    bookShelf.appendChild(bookCreate);
    bookCreate.appendChild(trashBook);
    trashBook.appendChild(trashButton);
    bookCreate.appendChild(tempTitle);
    bookCreate.appendChild(tempAuthor);
    bookCreate.appendChild(tempPages);
    bookCreate.appendChild(tempBtnCont);

    tempBtnCont.appendChild(tempUnRead);
    tempBtnCont.appendChild(tempRead);

    

}

// (function stockShelf(title, author, pages) {
//     for (let i = 0; i = book; i++) {
        
//     }
//     let newBook = new Book(title, author, pages);
//     myLibrary.push(newBook);
// })();



// Modal Menu animations & functionality

var clicked = false;
let pageContainer = document.querySelector('.pageContainer');
let modalButton = document.querySelector('.linedNavDiv');
let modalPop = document.querySelector('.modal');
let modalClose = document.querySelector('.closeModal');
let line1 = document.querySelector('.linedNav1');
let line2 = document.querySelector('.linedNav2');
let line3 = document.querySelector('.linedNav3');

modalButton.addEventListener('click', function() {
    if (clicked == false) {
        clicked = true;
        modalPop.style.cssText = "display: grid";
        line1.style.cssText = "background-color: white; animation-name: nav1Open; animation-duration: .5s; animation-fill-mode: forwards;"
        line2.style.cssText = "background-color: white; animation-name: nav2Open; animation-duration: .5s; animation-fill-mode: forwards;"
        line3.style.cssText = "background-color: white; animation-name: nav3Open; animation-duration: .5s; animation-fill-mode: forwards;"
        pageContainer.style.cssText = 'transition: all 0.4s ease; -webkit-transform: scale(.99); -webkit-filter: blur(5px) grayscale(100%);';
    } else if (clicked == true) {
        modalPop.style.cssText = "display: none";
        line1.style.cssText = 'animation-name: nav1Close; animation-duration: .5s;';
        line2.style.cssText = 'animation-name: nav2Close; animation-duration: .5s;';
        line3.style.cssText = 'animation-name: nav3Close; animation-duration: .5s;';
        pageContainer.style.cssText = 'transition: all 0.4s ease; -webkit-transform: scale(1); -webkit-filter: blur(0px) grayscale(0%);';
        clicked = false;

    }
   
    
})

modalClose.addEventListener('click', function() {
    modalPop.style.cssText = "display: none";
    line1.style.cssText = 'animation-name: nav1Close; animation-duration: .5s;';
        line2.style.cssText = 'animation-name: nav2Close; animation-duration: .5s;';
        line3.style.cssText = 'animation-name: nav3Close; animation-duration: .5s;';
        pageContainer.style.cssText = 'transition: all 0.4s ease; -webkit-transform: scale(1); -webkit-filter: blur(0px) grayscale(0%);';
        clicked = false;


})

// ----------------

