//reading speed challenge
function returnLowercaseArrayWithoutPunctuation(text) {
    text = text.toLowerCase().split("")
    let alphabetArr= [...Array(26)].map((_, i) => String.fromCharCode('a'.charCodeAt(0) + i))
    alphabetArr.push(" ")
    let newArr = []
    for(let i = 0; i< text.length ; i++){
        if(alphabetArr.includes(text[i])){
            newArr.push(text[i])
        }
    }
    return newArr.join("")
}
function readingSpeed(text){
    let trimmedArr = returnLowercaseArrayWithoutPunctuation(text)
    trimmedArr = trimmedArr.split(" ")
    let counter = 0
    let noDuplicateArr = []
    for(word of trimmedArr){
        if(noDuplicateArr.includes(word)){
            counter++
        }else{
            noDuplicateArr.push(word)
        }
    }
    return noDuplicateArr.join("").split("").length + counter
}

console.log(readingSpeed("Red fish green fish fish!"));
