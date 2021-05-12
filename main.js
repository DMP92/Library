let pageContainer = document.querySelector('.pageContainer');   
let bookShelf = document.querySelector('.bookDisplay');
let book = bookShelf.querySelectorAll('.exampleBook');
let title = bookShelf.querySelectorAll('.title');
let author = bookShelf.querySelectorAll('.author');
let pages = bookShelf.querySelectorAll('.pages');
let addBook = document.querySelector('.addButt');
let book1 = document.getElementById('exampleBook1');
let book2 = document.getElementById('exampleBook2');

// Selectors for book printing

let bookTemplate = document.querySelector('.bookDisplay');
let tempTitle = bookTemplate.querySelector('.title');
let tempAuthor = bookTemplate.querySelector('.author');
let tempPages = bookTemplate.querySelector('.pages');




// Functions to add books to display =========================================

let myLibrary = [];



function Book(name, author, pages) {
    this.name = name,
    this.author = author,
    this.pages = pages
}

let aliens = new Book("Aliens", "Flabber", 240);
let bible = new Book("The Bible", "God", 1350);
let coding = new Book("Eloquent JavaScript", "Marjin Haverbeke", 450); 
let oceans = new Book("Oceanic", "Paige Ruthe", 544);

myLibrary.unshift(aliens);
myLibrary.push(oceans);
myLibrary.push(bible);
myLibrary.push(coding);

publishBook(aliens);
publishBook(oceans);
publishBook(bible);
publishBook(coding);


function addBookToLibrary() {
    let name = document.querySelector('.bookTitle').value;
    let author = document.querySelector('.bookAuthor').value;
    let pages = document.querySelector('.bookPages').value;

    let newBook = new Book(name, author, pages);
    
    myLibrary.push(newBook);
    publishBook(newBook);

let closeBook = document.querySelectorAll('.close');
let trashButton = document.querySelectorAll('.x');

trashButton.forEach(button => button.addEventListener('click', hidden));
    console.log(trashButton);
    console.log(myLibrary);


}

addBook.addEventListener('click', addBookToLibrary);


function publishBook(book) {

    let name = book.name;
    let author = book.author;
    let pages = book.pages;

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





// Function to keep library updated constantly ==================================================



// Modal Menu animations & functionality ======================================================

var clicked = false;
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


});

// ----------------




// function stockShelves() {
//     let i = 0;
  
//       for (let i = 0; i < myLibrary.length; i++) {
//           let name = myLibrary[i].name;
//            let author = myLibrary[i].author;
//            let pages = myLibrary[i].pages;
       
//            publishBook(name, author, pages);
       
//         console.log(myLibrary[i].name);
//            console.log(myLibrary[i].author);
//            console.log(myLibrary[i].pages);
//       } 
 
// };
// stockShelves();




// if I create a way to give each nodelist item a number that corresponds to their index
// I should then be able to take that number and access the myLibrary array and delete that specific item









let closeBook = document.querySelectorAll('.close');
let trashButton = document.querySelectorAll('.x');

trashButton.forEach(button => button.addEventListener('click', hidden));
// NOTATING FOR FUTURE SELF ================= HOW TO PRINT SPECIFIC INDICES OF NODE ITEMS

function hidden(e) {
    
    for (var i = 0; i < trashButton.length; i++) {
        (function(i) {
            trashButton[i].index = i;

            trashButton[i].addEventListener('click', function() {
               
            });
        })(i);
    }
    console.log(this.index);
    myLibrary.splice(this.index, 1);
    console.log(myLibrary);
    
}

// ============================================================================




