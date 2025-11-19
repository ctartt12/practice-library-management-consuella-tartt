class libraryItem{
    constructor(title, id, isAvailable){
this.title= title;
this.id= id;
this.isAvailable= isAvailable
    }
checkOut(){
    this.isAvailable = false;
    return this.isAvailable
}    
returnItem(){
    this.isAvailable = true;
    return this.isAvailable
}
}


class Book extends libraryItem{
    constructor (title, id, isAvailable, author, genre){
        super( title, id, isAvailable);
        this.author= author;
        this.genre= genre;
    }
}
let book1= new Book("wishingStar", 123, true, "IDk", "kids");

console.log(book1.isAvailable);
console.log(book1.checkOut());
console.log(book1.returnItem());

class Magazine extends libraryItem{
    constructor (title, id, isAvailable, issueNumber, publisher){
        super( title, id, isAvailable);
        this.issueNumber= issueNumber;
        this.publisher= publisher;
    }
}
let magazine1= new Magazine("vogue", 1122, true, "IDk", "fashion", 1990, "Nast");

console.log(magazine1.publisher);
console.log(magazine1.issueNumber);

class Dvd extends libraryItem{
    constructor (title, id, isAvailable, director, duration){
        super( title, id, isAvailable);
        this.director= director;
        this.duration= duration;
    }
}

let dvd1= new Dvd("johnWick", 1313, false, "idk", "pewpewman", "3hrs");

console.log(dvd1.director);
console.log(dvd1.duration);