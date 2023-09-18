const myLibrary = ['book1', 'book2','book3']
const showButton = document.getElementById('showDialog')
const addNewBook = document.getElementById('addNewBook')
const outputBox = document.querySelector("output")
const confirmButton = document.querySelector('#confirmButton')

//Adds info to book
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return title + " by " + author + ", " + pages + " pages, " +read
    }
}

//Adds book title to array
function addBookToLibrary () {
    myLibrary.push(this)
}

//Creates Card for each book
for (i = 0; i < myLibrary.length; i++) {
    var div = document.getElementById('cards')
    var divCard = document.createElement('divCard')
    divCard.style.padding = '10px'
    divCard.style.margin = '10px'
    divCard.style.backgroundColor = 'grey'
    divCard.textContent = myLibrary[i]
    div.appendChild(divCard)
}

//Opens dialog when new book button is pressed
showButton.addEventListener('click', () => {
    addNewBook.showModal();
})

