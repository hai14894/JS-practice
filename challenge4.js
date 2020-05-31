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