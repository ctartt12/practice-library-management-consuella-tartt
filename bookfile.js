class Book extends libraryItem{
    constructor (title, id, isAvailable, author, genre){
        super( title, id, isAvailable);
        this.author= author;
        this.genre= genre;
    }
}
let book1= new Book("wishingStar", 123, true, "IDk", "kids");

console.log(book1.isAvailable);