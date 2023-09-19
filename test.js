const myLibrary = []
const showButton = document.getElementById('showDialog')
const addNewBook = document.getElementById('addNewBook')
const outputBox = document.querySelector("output")
const formInfo = document.getElementById('formInfo')
const cancelButton = document.getElementById('cancel')


//Adds info to book
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

//Adds book title to array
function addBookToLibrary (title, author, pages) {
    myLibrary.push(new Book(title, author, pages, false))
}

//Placeholder for cards
addBookToLibrary('The Atlantic','Moby Dick',3)
addBookToLibrary('The Atlantic','Moby Dick',3)
addBookToLibrary('The Atlantic','Moby Dick',3)
addBookToLibrary('The Atlantic','Moby Dick',3)

function deleteCards () {
    for (i = 0; i < myLibrary.length; i++) {
    var div = document.getElementById('cards')
    var divCard = document.createElement('divCard')
    div.remove(divCard)
    }
}


//Creates Card for each book
function createCard() {
for (i = 0; i < myLibrary.length; i++) {
    var div = document.getElementById('cards')
    var divCard = document.createElement('divCard')
    divCard.style.padding = '10px'
    divCard.style.margin = '10px'
    divCard.style.backgroundColor = 'grey'
    divCard.textContent = myLibrary[i].title + "\n" + myLibrary[i].author + "\n" + myLibrary[i].pages + "\n" + myLibrary[i].read
    div.appendChild(divCard)
}
}

function deleteCards () {
    for (i = 0; i < myLibrary.length; i++) {
    var div = document.getElementById('cards')
    var divCard = document.createElement('divCard')
    div.remove(divCard)
    }
}

//Opens dialog when new book button is pressed
showButton.addEventListener('click', () => {
    addNewBook.showModal();
})

cancelButton.addEventListener('click', () => {
    addNewBook.close('bookNotChosen')
}
)

formInfo.addEventListener("submit", (e) => {
    e.preventDefault()
    let titleForm = document.getElementById('title').value
    let authorForm = document.getElementById('author').value
    let pagesForm = document.getElementById('pages').value
    addBookToLibrary(titleForm,authorForm,pagesForm)
    deleteCards()
    createCard()
    addNewBook.close('bookNotChosen')
}
)
