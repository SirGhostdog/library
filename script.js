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

console.log(this.title)

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

console.log(myLibrary)


document.getElementById('cancel-button').addEventListener("click", function(){
    addPrompt.style.display = "none";
    addPrompt.reset();
        }
);

document.getElementById('add-book').addEventListener("click", function(){
    addPrompt.style.display = "grid";
        }
);

const htmlTitle = document.getElementById("book-title")
const htmlAuthor = document.getElementById("book-author")
const htmlPages = document.getElementById("book-pages")
const htmlRead = document.getElementById("read-checkbox")

function addBookToLibrary(){
    for (let lib of myLibrary) {
        console.log(typeof (lib))
    }
}

addBookToLibrary();