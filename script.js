const myLibrary = []
const showButton = document.getElementById('showDialog')
const addNewBook = document.getElementById('addNewBook')
const outputBox = document.querySelector("output")
const formInfo = document.getElementById('formInfo')
const cancelButton = document.getElementById('cancel')

let i = 0


//Adds info to book
function Book(title, author, pages, read = false) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

//Adds book title to array
function addBookToLibrary (title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages))
}

//Creates Card for each book
function createCard() {
    let cardHolder = document.getElementById('cardHolder')
    let card = document.createElement('div')
    card.setAttribute('class', 'card')
    card.style.backgroundColor = 'grey'
    card.style.margin = '10px'
    card.style.padding = '10px'
    cardHolder.appendChild(card)

    //Card Content
    let cardContent = document.createElement('p')
    cardContent.textContent = myLibrary[i].title + "\n" + myLibrary[i].author + "\n" + myLibrary[i].pages + "\n"
    card.appendChild(cardContent)

    //Remove Button
    let removeButton = document.createElement('button')
    removeButton.setAttribute('id',[i])
    removeButton.textContent = 'Remove'
    card.appendChild(removeButton)


    //Read Button
    let readButton = document.createElement('button')
    readButton.textContent = 'Unread'
    readButton.style.backgroundColor = 'red'
    readButton.style.marginLeft = '10px'
    card.appendChild(readButton)

    //Removes Card
    removeButton.addEventListener('click', () => {
        cardHolder.removeChild(card)
    }
    )

    //Changes read status for book
    readButton.addEventListener('click', () => {
        let idNumber = removeButton.getAttribute('id')
        console.log(idNumber)
        if (myLibrary[idNumber].read == false) {
            myLibrary[idNumber].read = true
            readButton.textContent = 'Read'
            readButton.style.backgroundColor = 'green'
            console.log(myLibrary)
        }
        else if (myLibrary[idNumber].read == true) {
            myLibrary[idNumber].read = false
            readButton.style.backgroundColor = 'red'
            readButton.textContent = 'Unread'
            console.log(myLibrary)
        }
    }
    )

    i++
}

//Opens dialog when new book button is pressed
showButton.addEventListener('click', () => {
    formInfo.reset()
    addNewBook.showModal();
}
)

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