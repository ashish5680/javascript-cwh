console.log("This is tutorial 32 - solution")


console.log('\n');

// create a class library and implement the following:
// constructor must take the book list as an argument
// getBookList()
// issueBook(bookname, user)
// returnBook(bookname)



class Library {

    constructor(bookList){
        this.bookList = bookList;
        this.issuedBooks = {};     // issuedBooks ko object bana raha hu idhar aur usse abhi khali rakh raha hu
    }

    getBookList(){
        this.bookList.forEach(element => {
            console.log(element);
        });
    }

    issueBook(bookname, user){
        if (this.issuedBooks[bookname] == undefined){
            this.issuedBooks[bookname] =  user;
        }
        else{
            console.warn("This book is already issued!");
        }
    }

    returnBook(bookname){
        delete this.issuedBooks[bookname];
    }
}

















// Try to run this in console
//////////////////////////////////////////
// let myliberary = new Library(['Harry Pooter', 'Dark Secrets', 'Galaxy', 'Underworld', 'Atlanic Sea World']);

// myliberary.getBookList();

// myliberary.issueBook('Dark Secrets', 'Ashish');

// myliberary.returnBook('Dark Secrets');