const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = "by " + author;
    this.pages = "p." + pages;
    this.read = read
    this.BookInfo = function() {
        myLibrary.push(this.title, this.author, this.pages, this.read)
    }
};

const addPrompt = document.getElementById('add-book-prompt');

document.addEventListener('submit', function(event){
    
    event.preventDefault()

    const promptData = new FormData(addPrompt);

    const titleData = promptData.get('title')
    const authorData = promptData.get('author')
    const pagesData = promptData.get('pages')
    const readData = promptData.get('read')

    addPrompt.style.display = "none";
    addPrompt.reset();

    const bookObj = new Book(titleData, authorData, pagesData, readData)
    bookObj.BookInfo();
    }
);


document.getElementById('cancel-button').addEventListener("click", function(){
    addPrompt.style.display = "none";
    addPrompt.reset();
        }
);

document.getElementById('add-book').addEventListener("click", function(){
    addPrompt.style.display = "grid";
        }
);

const htmlLibrary = document.getElementById("books")
const htmlBook = document.getElementById("book")
const htmlTitle = document.getElementById("book-title")
const htmlAuthor = document.getElementById("book-author")
const htmlPages = document.getElementById("book-pages")
const htmlRead = document.getElementById("read-checkbox")

function addBookToLibrary(){
    for (i = 0; i < 10; i++) {
        if (myLibrary[i] == Object){
            console.log("Good Job!")
        } else{
            console.log("you Suck!")
        }

    
    }
}

addBookToLibrary();