class Dog{
    constructor(nameP, locationP){
        this.name = nameP
        this.location = locationP
        this.walks = []
        
    }
    speak(){
        return(`woof!My name is ${this.name}`)
    }
    walk(locationP, distanceP){
            this.walks.push({location: locationP, distance:distanceP})
                return(this.walks)
        }
    
    displayWalk(){
        this.walks.forEach(walk =>{
            console.log(`the dog is located in  ${walk.location} and has walked ${walk.distance}`)

        })
    }
    totalDistance(){
        let totalDistance = 0
        this.walks.forEach(walk => {
            totalDistance += walk.distance
        })
        return totalDistance
    }
}
let Dog1 = new Dog("baby","nsw")
Dog1.walk("sydney", 30)
Dog1.walk("sydney", 40)
console.log(Dog1.totalDistance())