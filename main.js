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

function Book(name, author, pages, status) {
    this.name = name,
    this.author = author,
    this.pages = pages,
    this.status = status
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

function addBookToLibrary() {

// below code adds items to the firestore database

    db.collection('books').add({
        name: document.querySelector('.bookTitle').value,
        author: document.querySelector('.bookAuthor').value,
        pages: document.querySelector('.bookPages').value,
        status: 'read'
        
    })
    
    
    // let newBook = new Book(name, author, pages);
    
    // myLibrary.push(newBook);
    // publishBook(newBook);
        document.querySelector('.bookTitle').value = '';
        document.querySelector('.bookAuthor').value = '';
        document.querySelector('.bookPages').value = '';
}
  


addBook.addEventListener('click', addBookToLibrary);









function publishBook(book, id) {
    
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
    
    
    bookCreate.setAttribute('data-id', id);

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
        modalPop.style.cssText = "display: grid; place-self: center center;";
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


let gooModal = document.querySelector('.googlemodal');

window.onload = function() {
    gooModal.style.cssText = 'display: grid';
    pageContainer.style.cssText = 'transition: all 0.4s ease; -webkit-transform: scale(.99); -webkit-filter: blur(5px) grayscale(100%);';
}

let googButt = document.querySelector('.g-signin2');
googButt.addEventListener('click', function() {
    gooModal.style.cssText = 'display: none';
    pageContainer.style.cssText = 'transition: all 0.4s ease; -webkit-transform: scale(1); -webkit-filter: blur(0px) grayscale(0%);';

})





// ----------------
let closeBook = document.querySelectorAll('.close');
let trashButt = document.querySelectorAll('.x');

// NOTATING FOR FUTURE SELF ================= HOW TO PRINT SPECIFIC INDICES OF NODE ITEMS
                        
function hidden(e) {
    
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
    
    // below code will delete items from firestore
    e.stopPropagation();
    // the 'let id' line targets the item in the firestore
    let id = e.target.closest('.exampleBook').getAttribute('data-id');

    // this line deletes the item we selected in the line above
    db.collection('books').doc(id).delete();
}

// ============================================================================

// Read and UnRead functionality
let unread = document.querySelectorAll('.unread');
let read = document.querySelectorAll('.read');




function grayScale(e) {



        let unread = document.querySelectorAll('.unread');
        
        for (var i=0; i<unread.length; i++) {    
            (function(i) {
                unread[i].index = i;
                
                unread[i].addEventListener('click', function() {
                    
                });
            })(i);
        }
        let objectToChange = unread[this.index].parentNode.parentNode;
            let objId = objectToChange.getAttribute('data-id');
            
            db.collection('books').doc(objId).update({
                status: 'unread'
            });
        myLibrary[this.index].unread(this.index);
        
    
    
}

function normalize(status) {

    

        let read = document.querySelectorAll('.read');
            for (var i=0; i<read.length; i++) {
                (function(i) {
                    read[i].index = i;
        
                    read[i].addEventListener('click', function() {
                    });
                })(i);
                
            }
            let objectToChange = read[this.index].parentNode.parentNode;
            let objId = objectToChange.getAttribute('data-id');
            
            db.collection('books').doc(objId).update({
                status: 'read'
            });
            

            myLibrary[this.index].read(this.index);
    
}



// // get elements 
// var getBook = document.querySelectorAll('.exampleBook');

// // firebase send off
// function fireBaseSend() {
    
//     var task = storageRef.put(book);
// }

// // push added books to storage
// addBook.addEventListener('click', fireBaseSend);

// // get books
// var getBook = document.querySelectorAll('.exampleBook');

// var storageRef = firebase.storage().ref('books' + book.name);


// // Get a reference to the storage service, which is used to create references in your storage bucket
// var storage = firebase.storage();

// // Create a storage reference from our storage service
// var storageRef = storage.ref();



// the below code is a reference to the list of books on the page

const bookList = document.querySelector('.bookDisplay');

// create element and render book

function renderBook(doc, id) {
    let newBook = doc.data().name;
    let name = document.createElement('h1');
    let author = document.createElement('h3');
    let pages = document.createElement('h3');
    
    


    name.textContent = doc.data().name;
    author.textContent = doc.data().author;
    pages.textContent = doc.data().pages;
    
    newBook = new Book(
    name.textContent = doc.data().name, 
    author.textContent = doc.data().author, 
    pages.textContent = doc.data().pages,
    status = doc.data().status);

    myLibrary.push(newBook);
        

    
    
    

    publishBook(newBook, id);
}


function search(nameKey){
    for (var i=0; i < myLibrary.length; i++) {
        if (myLibrary[i].name === nameKey) {
            console.log(myLibrary[i]);
        }
    }
}











/* the below text takes the firestore collection "books" and it then uses the 
'.get()' method to get the data. BUT since it's not 
automatic (asynchronous) JS will give error messages because 
the JS document will process and require the data before it can retrieve it from
the database. So, it then uses the ".then()" method. This method basically says
after the data has been retrieved THEN proceed to execute the following code.

the 'snapshot' is basically the copy of the data that we are accessing in our code.
Once we get it we can use it how we need to, but you can log each chunk of data 
to the console with the following code:

    db.collection('books').get().then((snapshot) => {
                    snapshot.docs.forEach(doc => {
        console.log(doc.data());
    })

    the forEach method cycles through each document in the collection. Then,
    the doc.data() causes it to appear in a way that makes sense to us.
*/




// saving grayscale and normalize status 
db.collection('books').get().then(snapshot => {
    snapshot.docs.forEach(snapshot => {
        let status = snapshot.data().status;
        
         
    })
})


// real-time listener 
db.collection('books').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        if (change.type == 'added') {
            renderBook(change.doc, change.doc.id);
        } 
    })
})





function rememberColor(file) {
    let bookDoc = file.data().status;
    let changed = file.id;

    
    
    
    
    if(bookDoc === 'unread') {
        
        let junction = bookShelf.querySelectorAll('.exampleBook');
        junction.forEach(pic => {
            for(let i = 0; i < junction.length; i++) {
                let pic = junction[i].getAttribute('data-id');

                if(pic === changed) {
                    let colorScheme = junction[i];
                    colorScheme.style.cssText = '-webkit-filter: grayscale(100%);';
                }
            }
        })
    
        
    }

}

db.collection('books').get().then((snapshot) => {
    snapshot.docs.forEach(file => {
        rememberColor(file);
    })

})
