class Movie{
    constructor(titleP, durationP, ratingP){
        this.title = titleP,
        this.duration = durationP,
        this.rating = ratingP 
        this.watchCount = {}
        
    }
    
    printMovie(){
        console.log(`the movie name is ${this.title},${this.duration} minutes, rated ${this.rating} star , has been watched ${this.watchCount} times`)
    }
    watch(user){
        
        if(this.watchCount[user.email]){
            this.watchCount[user.email]++
        } else {
            this.watchCount[user.email] = 1

        }
    }
}
class User{
    constructor(emailP ,nameP){
        this.email = emailP
        this.name = nameP
    }
}
const myUser = new User("123@gmail.com", "Hai")
const myMovie = new Movie("Inception", 180, 5)

