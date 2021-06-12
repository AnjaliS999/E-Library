//constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

//display constructor displays the values 
function Display() {

}

//Add method to display prototype
Display.prototype.add = function(book) {
    console.log("adding to UI");
    tableBody = document.getElementById('tableBody');
    let uiString = `
    <tr>
    <td>${book.name}</td>
    <td>${book.author}</td>
    <td>${book.type}</td>
    </tr>`;
    tableBody.innerHTML += uiString;
}

//implement the clear function 
Display.prototype.clear = function () {
    let libraryForm = document.getElementById('LibraryForm');
    libraryForm.reset();
}
//implement the validate function 
Display.prototype.validate = function (book) {
   if (book.name.length<2 || book.author.length<2 ){
       return false;
   }
   else{
       return true;
   }
}

Display.prototype.show = function(){
    
}



// ??Add submit even listner to form libraryForm/

let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log('You have Submitted library form');
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    // fiction, programming, cooking 
    let type;
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    } 
    else if (cooking.checked) {
        type = cooking.value;

    }

    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();
    display.validate(book);
    if(display.validate(book)){
        display.add(book);
        display.clear();
        display.show('success');

    }

    else{
        display.show('error');
    }


    e.preventDefault();
}