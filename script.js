const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = "by " + author;
    this.pages = "p. " + pages;
    this.read = read
    this.BookInfo = function() {
        console.log(this.read)
        myLibrary.push(this)
        addBookToLibrary();
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
    

function addBookToLibrary(){
    for (i = myLibrary.length - 1; i < myLibrary.length; i++) {

        const htmlBook = document.createElement("div")
            htmlBook.setAttribute('id', 'book')
            htmlLibrary.appendChild(htmlBook)
            
        const htmlBookHead = document.createElement("div")
            htmlBookHead.setAttribute('id', 'book-header')
            htmlBook.appendChild(htmlBookHead)

            const htmlTitle = document.createElement("h4")
                htmlTitle.setAttribute('id', 'book-title')
                htmlBookHead.appendChild(htmlTitle)
                htmlTitle.innerHTML = myLibrary[i].title

            const htmlAuthor = document.createElement("div")
                htmlAuthor.setAttribute('id', 'book-author')
                htmlBookHead.appendChild(htmlAuthor)
                htmlAuthor.innerHTML = myLibrary[i].author

        const htmlBookFoot = document.createElement("div")
            htmlBookFoot.setAttribute('id', 'book-footer')
            htmlBook.appendChild(htmlBookFoot)

            const htmlPages = document.createElement("div")
                htmlPages.setAttribute('id', 'book-pages')
                htmlBookFoot.appendChild(htmlPages)
                htmlPages.innerHTML = myLibrary[i].pages

            const htmlRead = document.createElement("label")
                htmlRead.setAttribute('id', 'read-checkbox')
                htmlBookFoot.appendChild(htmlRead)

                const htmlCheck = document.createElement("input")
                    htmlCheck.setAttribute('type', 'checkbox')
                    htmlCheck.setAttribute('id', 'myCheckbox')
                    htmlRead.appendChild(htmlCheck)
                    if (myLibrary[i].read == "on") {
                        htmlCheck.checked = true
                    } else {
                        htmlCheck.checked = false
                    }

                const htmlCheckStatus = document.createElement("span")
                    htmlCheckStatus.setAttribute('id', 'checkbox')
                    htmlRead.appendChild(htmlCheckStatus)
                    htmlCheckStatus.innerHTML = " Read"

    }
}


