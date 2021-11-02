//Constructor
let myLibrary = [];
function Book(title, author, pagesNo, read, iD){
    this.title = title;
    this.author = author;
    this.pagesNo = pagesNo;
    this.read = read;
    this.iD = iD;
}

const formModal = document.getElementById("form");

//For Modal Window
const modal = document.getElementById("myModal");
const newBook = document.getElementById("newBook");
newBook.onclick = function() {
  modal.style.display = "block";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 

const printlib = function(){
  (myLibrary.forEach((element)=>console.log(element)));
}

const cardSpace = document.getElementById('cardspace'); //the whole screen

const removeCard = (id) => {
  const deleted = document.getElementById(`${id}`);
  deleted.parentNode.removeChild(deleted);  
  myLibrary = myLibrary.filter((e)=>{
    return e.iD != id;
  })
}

//Adding a new book
const addNewBookInput = () => {
  const title = document.getElementById('title').value
  const author = document.getElementById('author').value
  const pages = document.getElementById('pages').value
  const isRead = document.getElementById('checkread').checked
  return new Book(title, author, pages, isRead, Math.ceil(Math.random()*10000))
}
const submitBtn = document.getElementById("submit")
submitBtn.onclick = () => {
  const addedBook = addNewBookInput();
  myLibrary.push(addedBook);
  createBookCard(addedBook);
  formModal.reset();
  modal.style.display = "none";
}
//create cards
const createBookCard = (book, number) => {
  const divID = book.iD;
  const bookCard = document.createElement('div');
  const title = document.createElement('h3');
  const author = document.createElement('h3');
  const pages = document.createElement('h3');
  const hasread = document.createElement('button');
  const removeBtn = document.createElement('button');

  bookCard.setAttribute('id', divID);
  bookCard.classList.add('bookcard');
  title.classList.add('bookcarditem');
  author.classList.add('bookcarditem');
  pages.classList.add('bookcarditem');
  hasread.classList.add('bookcarditem');
  hasread.classList.add('readbtn');
  removeBtn.classList.add('bookcarditem');
  removeBtn.classList.add('removebtn');

  title.textContent = `"${book.title}"`;
  author.textContent = `${book.author}`;
  pages.textContent = `${book.pagesNo} pages`;
  hasread.textContent = book.read == true ? 'FINISHED' : 'NOT FINISHED';
  removeBtn.textContent = 'REMOVE BOOK';

  bookCard.appendChild(title);
  bookCard.appendChild(author);
  bookCard.appendChild(pages);
  bookCard.appendChild(hasread);
  bookCard.appendChild(removeBtn);
  cardSpace.appendChild(bookCard);

  removeBtn.onclick = () => {
    console.log(myLibrary.indexOf(bookCard));
    removeCard(bookCard.id);
  }
  hasread.onclick = () => {
    hasread.textContent = hasread.textContent == 'FINISHED' ? 'NOT FINISHED' : 'FINISHED';
  }
}
