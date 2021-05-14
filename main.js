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

Book.prototype = {
    unread: function (index) {
       
       let book = document.querySelectorAll(".exampleBook");
       book.item(index).style.cssText = "-webkit-filter: grayscale(100%);"
        
    },

    read: function (index) {
        let book = document.querySelectorAll('.exampleBook');
        book.item(index).style.cssText = "-webkit-filter: grayscale(0%);"

    }
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
    let tempUnread = document.createElement('button');
    tempUnread.classList.add('unread');
    tempUnread.textContent = 'Unread';
    
    bookShelf.appendChild(bookCreate);
    bookCreate.appendChild(trashBook);
    trashBook.appendChild(trashButton);
    bookCreate.appendChild(tempTitle);
    bookCreate.appendChild(tempAuthor);
    bookCreate.appendChild(tempPages);
    bookCreate.appendChild(tempBtnCont);
    
    tempBtnCont.appendChild(tempUnread);
    tempBtnCont.appendChild(tempRead);
    
    
    let trashButt = document.querySelectorAll('.x');
    console.table(trashButt);
    
    let read = document.querySelectorAll('.read');
    let unread = document.querySelectorAll('.unread');
    trashButt.forEach(butt => butt.addEventListener('click', hidden));
    read.forEach(button => button.addEventListener('click', normalize));
    unread.forEach(button => button.addEventListener('click', grayScale));
}




function trashCollector() {
    let trashButton = document.querySelectorAll('.x');
    
    trashButton.forEach(buttons => buttons.addEventListener('click', hidden))
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

// I thought I would need this loop, but honestly it slows the page down too much
// even with the window event listener. Figured if it only loaded once 
// it'd slow it down, but it only helped speed the page up slightly. Infinite loops 
// don't seem to ever be a good idea

// window.addEventListener('load', stockShelves);
// function stockShelves() {
//      let i = 0;
  
//      for (let i = 0; i < myLibrary.length; i++) {
         
//         publishBook(myLibrary[i]);
       
       
//       } 
//   };




let closeBook = document.querySelectorAll('.close');
let trashButt = document.querySelectorAll('.x');

// NOTATING FOR FUTURE SELF ================= HOW TO PRINT SPECIFIC INDICES OF NODE ITEMS

function hidden() {
    
    let bookCreate = document.querySelectorAll('.exampleBook');
    // close button
    let trashButt = document.querySelectorAll('.x');
   
      
    for (var i=0; i<trashButt.length; i++) {
        (function(i) {
            trashButt[i].index = i;

            trashButt[i].addEventListener('click', function() {
               
            });
        })(i);
        
    }
    console.log(this.index);
    myLibrary.splice(this.index, 1);
    document.querySelector('.bookDisplay').removeChild(bookCreate[this.index]);
}

// ============================================================================

// Read and UnRead functionality
let unread = document.querySelectorAll('.unread');
let read = document.querySelectorAll('.read');




function grayScale() {
let unread = document.querySelectorAll('.unread');
console.log(myLibrary);
console.log(unread);

for (var i=0; i<unread.length; i++) {    
    (function(i) {
        unread[i].index = i;
        
        unread[i].addEventListener('click', function() {
            
        });
    })(i);
}
console.log(myLibrary[this.index]);
myLibrary[this.index].unread(this.index);
    
}

function normalize() {
let read = document.querySelectorAll('.read');
    for (var i=0; i<read.length; i++) {
        (function(i) {
            read[i].index = i;

            read[i].addEventListener('click', function() {
               
            });
        })(i);
        
    }
    myLibrary[this.index].read(this.index);
}
