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
