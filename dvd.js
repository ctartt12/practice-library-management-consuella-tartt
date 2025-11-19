class Dvd extends libraryItem{
    constructor (title, id, isAvailable, director, duration){
        super( title, id, isAvailable);
        this.director= director;
        this.duration= duration;
    }
}