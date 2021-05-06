let myLibrary = [];

function Book(name, author, pages) {
    this.name = name,
        this.author = author,
        this.pages = pages,
        this.summary
}

function addBookToLibrary() {
    console.log("Eureka!");
    prompt("What books have you read?", "book title here");
    let name = prompt.value;
    let newBook = new Book(name);
    console.log(newBook);
}

let addBook = document.querySelector('.addButt');

addBook.addEventListener('click', addBookToLibrary);




// Modal Menu

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
        console.log("clicked!");
        modalPop.style.cssText = "display: grid";
        line1.style.cssText = "background-color: white; animation-name: nav1; animation-duration: .5s; animation-fill-mode: forwards;"
        line2.style.cssText = "background-color: white; animation-name: nav2; animation-duration: .5s; animation-fill-mode: forwards;"
        line3.style.cssText = "background-color: white; animation-name: nav3; animation-duration: .5s; animation-fill-mode: forwards;"

    } else if (clicked == true) {
        modalPop.style.cssText = "display: none";
        line1.style.cssText = '';
        line2.style.cssText = '';
        line3.style.cssText = '';
        clicked = false;

    }
   
    
})

modalClose.addEventListener('click', function() {
    console.log("closed!");
    modalPop.style.cssText = "display: none";
    line1.style.cssText = '';
        line2.style.cssText = '';
        line3.style.cssText = '';
        clicked = false;
})

// ----------------
