//Create a function that takes a number as an argument. 
//Add up all the numbers from 1 to the number you passed to the function. 
//For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
function addUp(num) {
	const arr = [...Array(num+1).keys()]
	let sum = 0
	for(i = 0; i < arr.length ; i++){
		sum += arr[i]
	}
	return sum
}

///Your function will be passed two functions, f and g, that don't take any parameters. Your function has to call them, and return a string which indicates which function returned the larger number.
function whichIsLarger(f, g) {
	return f()>g() ? "f": g()>f() ? "g": "neither"
}

///Number Clamp
// Have the function clamp(value, min, max) take the value parameter being passed and:
// Return max if value is greater than max.
// Return min if value is less than min.
// Return value if neither of these conditions are met.
function clamp(value, min, max){
    return value > max ? max : value < min ? min : value
}

// 
function reverseStr(string){
    //#1 return string.split("").reverse().join("")
    string = string.split("")
    let reversedStr = []
    for(let i = string.length; i > 0; i--){
        reversedStr.push(string[i-1])
    }
    return reversedStr.join("")

}
console.log(reverseStr("hello"));
