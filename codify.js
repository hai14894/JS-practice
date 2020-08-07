function solution(S, K) {
    let days= ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat","Sun"]
    for(let i=0; i<days.length; i++) {
        if(S === days[i]) {

            let newIndex = i + K
            let numberOfWeeks = Math.floor(newIndex/7);
            if(newIndex>6){
                newIndex = newIndex - 7*numberOfWeeks
            }
            return ( days[newIndex])
        }
    }
}
console.log(solution("Sun", 9));
