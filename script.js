const myLibrary = []
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
function addBookToLibrary (title, author, pages, read) {
    let NewBookTitle = title
    title = new Book(title, author, pages, read)
    myLibrary.push(title)
}

//Placeholder for cards
addBookToLibrary('The Atlantic','Moby Dick',3,false)
addBookToLibrary('The Atlantic','Moby Dick',3,false)
addBookToLibrary('The Atlantic','Moby Dick',3,false)
addBookToLibrary('The Atlantic','Moby Dick',3,false)

//Creates Card for each book
for (i = 0; i < myLibrary.length; i++) {
    var div = document.getElementById('cards')
    var divCard = document.createElement('divCard')
    divCard.style.padding = '10px'
    divCard.style.margin = '10px'
    divCard.style.backgroundColor = 'grey'
    divCard.textContent = myLibrary[i].title + "\n" + myLibrary[i].author + "\n" + myLibrary[i].pages + "\n" + myLibrary[i].read
    div.appendChild(divCard)
}

//Opens dialog when new book button is pressed
showButton.addEventListener('click', () => {
    addNewBook.showModal();
})

