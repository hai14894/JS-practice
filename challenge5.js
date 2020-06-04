//only digits challenge
const onlyDigits = (string) => {
    string = string.split("")
    let numArr =  Array.from(Array(10).keys()).join("")
    let counter = 0
	for(character of string){
        if(numArr.includes(character)){
            counter++
        }
    }
    if(counter === string.length){
        return true
    } else{
        return false
    }
    
}
console.log(onlyDigits("01231430"))
//Palindrome challenge
    const palindrome = (str) => {
        let alphabetArr= [...Array(26)].map((_, i) => String.fromCharCode('a'.charCodeAt(0) + i))
        let numArr = Array.from(Array(10).keys())
        let characterArr = [...alphabetArr,...numArr]
        str = str.toLowerCase().split("")
        let newStr = []
        for(let i = 0; i < str.length; i++){
            if(characterArr.includes(str[i])){
                newStr.push(str[i])
            }
        }
        if(newStr.join("") === newStr.reverse().join("")){
            return true
        }else{
            return false
        }
    }
// console.log(palindrome("race0 car"))



