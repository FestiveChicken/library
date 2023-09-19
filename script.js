const myLibrary = []
const showButton = document.getElementById('showDialog')
const addNewBook = document.getElementById('addNewBook')
const outputBox = document.querySelector("output")
const formInfo = document.getElementById('formInfo')
const cancelButton = document.getElementById('cancel')
const removeButton = document.getElementById('removeButton')
let i = 0


//Adds info to book
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

//Adds book title to array
function addBookToLibrary (title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read))
}

//Creates Card for each book
function createCard() {
    var cardHolder = document.getElementById('cardHolder')
    var card = document.createElement('div')
    card.setAttribute('class', 'card')
    card.setAttribute('id', i)
    card.style.backgroundColor = 'grey'
    card.style.margin = '10px'
    card.style.padding = '10px'
    cardHolder.appendChild(card)

    //Card Content
    var cardContent = document.createElement('p')
    cardContent.textContent = myLibrary[i].title + "\n" + myLibrary[i].author + "\n" + myLibrary[i].pages + "\n"
    card.appendChild(cardContent)

    //Remove Button
    var removeButton = document.createElement('button')
    removeButton.setAttribute('id', 'removeButton')
    removeButton.textContent = 'Remove'
    //Removes Card
    removeButton.addEventListener('click', () => {
        cardHolder.removeChild(card)
    })
    card.appendChild(removeButton)
    i++
}

//Opens dialog when new book button is pressed
showButton.addEventListener('click', () => {
    formInfo.reset()
    addNewBook.showModal();
})

//Closes dialog and resets form
cancelButton.addEventListener('click', () => {
    formInfo.reset()
    addNewBook.close()
}
)

//Submits form and adds a new card
formInfo.addEventListener("submit", (e) => {
    e.preventDefault()
    let titleForm = document.getElementById('title').value
    let authorForm = document.getElementById('author').value
    let pagesForm = document.getElementById('pages').value
    addBookToLibrary(titleForm, authorForm, pagesForm)
    createCard()
    formInfo.reset()
    addNewBook.close()
}
)