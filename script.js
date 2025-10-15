const myLibrary = [];

const addPrompt = document.getElementById('add-book-prompt');

document.addEventListener('submit', function(event){
    
    event.preventDefault()

    const promptData = new FormData(addPrompt);

    const title = promptData.get('title')
    const author = promptData.get('author')
    const pages = promptData.get('pages')
    const read = promptData.get('read')

    addPrompt.style.display = "none";
    addPrompt.reset();
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

function Book(title, author, pages, read) {
    this.title = title;
    this.author = "by" + author;
    this.pages = "p." + pages;
    this.read = read
    this.BookInfo = function() {
        console.log (this.title, this.author, this.pages, this.read)
    }
};







// function addBookToLibrary() {
    
// ON BUTTON CLICK 
// ADD NEW BOOK TO LIBRARY
// RETURN BOOK INFO OF NEW BOOK FROM LIBRARY
// }

// TAKE myLibrary ARRAY AND ADD HTML DOM FOR EACH OBJECT