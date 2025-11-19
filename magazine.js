class Magazine extends libraryItem{
    constructor (title, id, isAvailable, issueNumber, publisher){
        super( title, id, isAvailable);
        this.issueNumber= issueNumber;
        this.publisher= publisher;
    }
}