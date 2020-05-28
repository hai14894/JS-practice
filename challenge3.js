class Movie{
    constructor(titleP, durationP, ratingP){
        this.title = titleP,
        this.duration = durationP,
        this.rating = ratingP 
        this.watchCount = 0
    }
    printMovie(){
        console.log(`the movie name is ${this.title},${this.duration} minutes, rated ${this.rating} star , has been watched ${this.watchCount} times`)
    }
    watch(){
        this.watchCount++
    }
}
myMovie = new Movie("Inception", 180, 5)
myMovie.watch()
myMovie.printMovie()