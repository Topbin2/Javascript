// var requestOptions = {
//   method: "GET",
//   redirect: "follow",
// };

// fetch(
//   "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDhEeHaM-lrpgIYTkseTk-eiB9kp9X4-qg"
// )
//   .then((response) => response.json())
//   .then((result) => console.log(result.items[0].snippet.title))
//   .catch((error) => console.log("error", error));

// async function fetchYoutube() {
//   try {
//     const res = await fetch(
//       "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDhEeHaM-lrpgIYTkseTk-eiB9kp9X4-qg"
//     );
//     const result = await res.json();
//     console.log(result);
//   } catch (e) {
//     console.log('error!');
//   }
// }

// fetchYoutube();

// axios.get( "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDhEeHaM-lrpgIYTkseTk-eiB9kp9X4-qg")
// .then( res => console.log(res.data) )
// .catch( err => console.log('err') )

// async function fetchApi() {
//     const response = await axios.get("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDhEeHaM-lrpgIYTkseTk-eiB9kp9X4-qg");
//     console.log(response.data);
// }

// fetchApi();
const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

async function getJoke() {
    try {
    const config = { headers: {Accept: 'application/json'} };
    const response = await axios.get("https://icanhazdadjoke.com/", config);
    return response.data.joke;
    } catch {
        console.log('error!');
    }
    
}

const addNewJoke = async () => {
    const jokeText = await getJoke();
    console.log(jokeText);
    const newLi = document.createElement('li');
    newLi.innerHTML = jokeText;
    jokes.appendChild(newLi);
}


button.addEventListener('click', addNewJoke);

