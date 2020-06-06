// capitalize  the first letter of every word in a string 
function capitalizeFirstLetter(string){
    let splitString = string.toLowerCase().split(" ")
    for(let i = 0; i < splitString.length ; i++){
        splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].substring(1)
    }
    return splitString.join(" ")
}
// console.log(capitalizeFirstLetter("hello world"));

//given a string, replace every letter with its position in the alphabet.
function alphabetPosition(text){
    let arr = text.toLowerCase().split("")
    let alphabetArr= [...Array(26)].map((_, i) => String.fromCharCode('a'.charCodeAt(0) + i))
    let newArr = []
    for(let i = 0; i< arr.length; i++){
        if(alphabetArr.includes(arr[i])){
            newArr.push(arr[i])
        }
    }
    for(let x = 0 ; x< newArr.length; x++){
        newArr[x] = parseInt(alphabetArr.indexOf(newArr[x]) + 1)
    }
    return newArr.toString().split(",").join(" ")
}
console.log(alphabetPosition("awdwadgjnv saefhs h 3t t"));
