// function solution(S, K) {
//     let days= ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat","Sun"]
//     for(let i=0; i<days.length; i++) {
//         if(S === days[i]) {

//             let newIndex = i + K
//             let numberOfWeeks = Math.floor(newIndex/7);
//             if(newIndex>6){
//                 newIndex = newIndex - 7*numberOfWeeks
//             }
//             return ( days[newIndex])
//         }
//     }
// }
// console.log(solution("Sun", 9));
function solution(T) {
    let second, minute, hour
    second = T % 60

    let numberOfMinute = Math.floor(T / 60) 

    if(numberOfMinute<60){
        minute =numberOfMinute
        hour = 0
    }else{
        minute = numberOfMinute % 60 
        hour =  Math.floor(numberOfMinute / 60) 
    }

    return (hour+"h"+minute+"m"+second+"s")

}
console.log(solution(6));