let newNode = document.createElement("h1")
newNode.innerHTML = "My Book List"
document.body.appendChild(newNode)
let books = [
    {
        title: 'The Design of EveryDay Things',
        author: 'Don Norman',
        alreadyRead: false
    }, {
        title: 'The Most Human Human',
        author: 'Brian Christian',
        alreadyRead: true
    }
    ];
for(book of books){
    let newP = document.createElement("p")
    newP.innerHTML = book.title + "-" + book.author
    document.body.appendChild(newP)
}
