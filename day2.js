let movies = [{
    "title": "The Shawshank Redemption",
    
    "duration": "PT142M",
    
    "actors": [ "Tim Robbins", "Morgan Freeman", "Bob Gunton" ],
    
    "ratings": [],
    
    "watchlist": [15291, 51417, 62289, 6146, 71389, 93707]
    
    },  {
    "title": "The Godfather",
    
    "duration": "PT175M",
    
    "actors": [ "Marlon Brando", "Al Pacino", "James Caan" ],
    
    "ratings": [],
    
    "watchlist": [62289, 66380, 34139, 6146]
    
    },  {
    "title": "The Dark Knight",
    
    "duration": "PT152M",
    
    "actors": [ "Christian Bale", "Heath Ledger", "Aaron Eckhart" ],
    
    "ratings": [],
    
    "watchlist": [51417, 62289, 6146, 71389, 7001]
    
    },  {
    "title": "Pulp Fiction",
    
    "duration": "PT154M",
    
    "actors": [ "John Travolta", "Uma Thurman", "Samuel L. Jackson" ],
    
    "ratings": [],
    
    "watchlist": [7001, 9250, 34139, 6146]
    
    },  {
    "title": "Schindler's List",
    
    "duration": "PT195M",
    
    "actors": ["Liam Neeson", "Ralph Fiennes", "Ben Kingsley"],
    
    "watchlist": [15291, 51417, 7001, 9250, 93707]
    
}];
let users = [{
    "userId": 15291,
    
    "email": "Constantin_Kuhlman15@yahoo.com",
    
    "friends": [7001, 51417, 62289]
    
    },    {
    "userId": 7001,
    
    "email": "Keven6@gmail.com",
    
    "friends": [15291, 51417, 62289, 66380]
    
    },    {
    "userId": 51417,
    
    "email": "Margaretta82@gmail.com",
    
    "friends": [15291, 7001, 9250]
    
    },    {
    "userId": 62289,
    
    "email": "Marquise.Borer@hotmail.com",
    
    "friends": [15291, 7001]
    
}];

function getUserById(userId){
    for(let i = 0; i < users.length; i++) {
        if(users[i].userId === userId) return users[i]
    }
}

function getFriendsOfUser(userId){
    return getUserById(userId).friends
}

function getWatchlistedMoviesOfUser(userId){
    let watchlistedMovies = []
    movies.forEach(movie => {
        if(movie.watchlist.includes(userId)){
            watchlistedMovies.push(movie.title)
        }
    })
    return watchlistedMovies
}

function getWatchlistedMoviesOfUsersFriends(userId){
    let watchlistedMovies = []
    getFriendsOfUser(userId).forEach(friend => {
        watchlistedMovies = [...watchlistedMovies, ...getWatchlistedMoviesOfUser(friend)]
    })
    return watchlistedMovies
}

function generateArrayFrequencyObject(arr){
    let frequencies = {}
    arr.forEach(e => {
        if(frequencies[e]) frequencies[e]++
        else frequencies[e] = 1
    })
    return frequencies
}

function generateOrderedArrayFromFrequencyObject(freqObj){
    numItems = Object.keys(freqObj).length
    orderedItems = []
    currentFrequency = 0
    while(orderedItems.length < numItems){
        let arr = []
        for(let item in freqObj)
            if(currentFrequency === freqObj[item]) arr.push(item)
        orderedItems = [...arr.sort(), ...orderedItems]
        currentFrequency++
    }
    return orderedItems   
}

function topWatchlistedMoviesAmongFriends(userId){
    const friendsWatchlistedMovies = getWatchlistedMoviesOfUsersFriends(userId)
    const movieFrequencyObj = generateArrayFrequencyObject(friendsWatchlistedMovies)
    const sortedMovies = generateOrderedArrayFromFrequencyObject(movieFrequencyObj)
    return sortedMovies.slice(0, 4)
}

console.log( topWatchlistedMoviesAmongFriends(62289) )