// fetch("https://api.chucknorris.io/jokes/random")
//   .then(response => response.json())
//   .then (data => console.log(data.value))
//   .catch(err => console.log(err));

axios.get("https://api.chucknorris.io/jokes/random")
.then(joke =>{
    console.log(joke.data.value)
})