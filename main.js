let myLibrary = [];

function Book(name, author, pages) {
    this.name = name,
        this.author = author,
        this.pages = pages,
        this.summary
    }
    
    let bookShelf = document.querySelector('.bookDisplay');
    let book = bookShelf.querySelectorAll('.exampleBook');
    let title = bookShelf.querySelectorAll('.title');
    let author = bookShelf.querySelectorAll('.author');
    let pages = bookShelf.querySelectorAll('.pages');
let addBook = document.querySelector('.addButt');
addBook.addEventListener('click', addBookToLibrary);

myLibrary.push(book);
console.log(myLibrary);

function addBookToLibrary() {
    let name = document.querySelector('.bookTitle').value;
    let author = document.querySelector('.bookAuthor').value;
    let pages = document.querySelector('.bookPages').value;
    let newBook = new Book(name, author, pages);

    
    name.value = '0';
    author.value = '' ;
    pages.value = '' ;

    myLibrary.unshift(newBook);
    console.log(newBook);
    console.log(myLibrary);
}




// (function stockShelf(title, author, pages) {
//     for (let i = 0; i = book; i++) {
        
//     }
//     let newBook = new Book(title, author, pages);
//     myLibrary.push(newBook);
// })();



// Modal Menu

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
