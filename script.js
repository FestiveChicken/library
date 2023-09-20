const myLibrary = []
const showButton = document.getElementById('showDialog')
const addNewBook = document.getElementById('addNewBook')
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
    card.setAttribute('id',[i])
    card.style.display = 'flex'
    card.style.flexDirection = 'column'
    card.style.justifyContent = 'space-between'
    card.style.alignItems = 'center'
    card.style.backgroundColor = '#00ADB5'
    cardHolder.appendChild(card)

    //Card Content
    let title = document.createElement('p')
    let author = document.createElement('p')
    let pages = document.createElement('p')
    title.textContent = 'Title: ' + myLibrary[i].title
    card.appendChild(title)
    author.textContent = 'Author: ' + myLibrary[i].author 
    card.appendChild(author)
    pages.textContent = 'Pages: ' + myLibrary[i].pages
    card.appendChild(pages)

    //Adds Remove Button
    let removeButton = document.createElement('button')
    removeButton.style.borderRadius = '20px'
    removeButton.style.backgroundColor = '#EEEEEE'
    removeButton.style.border = 'solid'
    removeButton.style.borderColor = '#EEEEEE'
    removeButton.textContent = 'Remove'
    card.appendChild(removeButton)

    //Adds Read Button
    let readButton = document.createElement('button')
    readButton.textContent = 'Not Read'
    readButton.style.backgroundColor = 'red'
    readButton.style.borderRadius = '20px'
    readButton.style.border = 'solid'
    readButton.style.borderColor = '#EEEEEE'
    card.appendChild(readButton)

    //Removes Card
    removeButton.addEventListener('click', () => {
        cardHolder.removeChild(card)
    }
    )

    //Changes read status for book
    readButton.addEventListener('click', () => {
        let idNumber = card.getAttribute('id')
        if (myLibrary[idNumber].read == false) {
            myLibrary[idNumber].read = true
            readButton.textContent = 'Read'
            readButton.style.backgroundColor = 'green'
        }
        else if (myLibrary[idNumber].read == true) {
            myLibrary[idNumber].read = false
            readButton.style.backgroundColor = 'red'
            readButton.textContent = 'Not Read'
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