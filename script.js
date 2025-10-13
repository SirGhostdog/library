const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = "by" + author;
    this.pages = "p." + pages;
    this.read = read
    this.BookInfo = function() {
        return (this.title, this.author, this.pages, this.read)
    }
}

function addBookToLibrary() {
ON BUTTON CLICK 
ADD NEW BOOK TO LIBRARY
RETURN BOOK INFO OF NEW BOOK FROM LIBRARY
}

TAKE myLibrary ARRAY AND ADD HTML DOM FOR EACH OBJECT