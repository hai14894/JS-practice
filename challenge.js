let me ={
    age: 25,
    currentLocation: "nsw"
}
me.hobbies =['code','cooking','movies']
delete me.age
for (hobby of me.hobbies){
    console.log(hobby)
}
// BeastMode
me.hobbies.push('new hobby')
me.hobbies.splice(0,1)
me.mother = {
    age: 45,
    currentLocation: "nsw",
    hobbies: null
}

console.log(me);