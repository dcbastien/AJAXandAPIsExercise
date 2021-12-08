// AJAX and APIs Exercise

// 1
const first = document.querySelector('#first');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
first.append(p1);
first.append(p2);
`{"id":18,"type":"programming","setup":"Why did the programmer quit his job?","punchline":"Because he didn't get arrays."}`

//1a. Change the string of JSON into JavaScript (It will be a JS object) and set the new value to a const variable called jokeJS1 (HINT: Use JSON.parse())

const jokeJS1 = JSON.parse(`{"id":18,"type":"programming","setup":"Why did the programmer quit his job?","punchline":"Because he didn't get arrays."}`);

console.log(jokeJS1);


//1b. Access the value for the "setup" key in the jokeJS1 object and set it to the inner text for the p1 variable/element (If done correctly the setup for the joke should display on the webpage)

p1.innerText = jokeJS1.setup;
console.log(jokeJS1.setup);

// 1c. Access the value for the "punchline" key in the jokeJS1 object and set it to the inner text for the p2 variable/element (If done correctly the punchline for the joke should display on the webpage)
p2.innerText = jokeJS1.punchline;
console.log(jokeJS1.punchline);


// 2
const second = document.querySelector('#second');
const p3 = document.createElement('p');
const p4 = document.createElement('p');
second.append(p3);
second.append(p4);

// Use the Friends API for questions 2 & 3 (Link below)…
// https://friends-quotes-api.herokuapp.com/

// 2a. Use the "Returns a single random quote." endpoint/URL to GET a Random quote using axios\

axios.get(`https://friends-quotes-api.herokuapp.com/quotes/random`);

// 2b. Use .then to create a function that sets the value returned from the axios GET request to a const variable called friendsJS2 (NOTE: You will need to create a function with a parameter. The parameter will hold the "resolved" value returned from the axios GET request).

.then(res => {
    console.log(res);
    const friendsJS2 = res.data;
    console.log(friendsJS2);
  
// 2c. Inside of the same function, access the value for the "character" key in the friendsJS2 object and set it to the inner text for the p3 variable/element. Also, access the value for the "quote" key in the friendsJS2 object and set it to the inner text for the p4 variable/element (If done correctly the character and quote for the quote should display on the webpage)

p3.innertext = friendsJS2.data.character;
p4.innertext = friendsJS2.data.quote; })
// 2d. Finally, use .catch to create a function that would display the "rejected" value/error returned from the axios GET request in the console (NOTE: You will need a console log for this. Also, you will need to create a function with a parameter. The parameter will hold the "rejected" value/error returned from the axios GET request).
.catch(err => {
    console.log(`Question 2 Failed`);
    console.log(err);
  });

// 3
const third = document.querySelector('#third');
const p5 = document.createElement('p');
const p6 = document.createElement('p');
third.append(p5);
third.append(p6);

// 3a. Use the "Returns a single random quote." endpoint/URL again to GET another Random Quote using axios


// 3b. Create a function that uses async/await called quoteFunc which sets the value returned from the axios GET request to a const variable called quoteJS3
// 3c. Inside of the same quoteFunc function, access the value for the "character" key in the quoteJS3 object and set it to the inner text for the p5 variable/element. Also, access the value for the "quote" key in the quoteJS3 object and set it to the inner text for the p6 variable/element (If done correctly the character and quote for the quote should display on the webpage)(NOTE: Don't forget the run the quoteFunc function)
// 3d. Finally, include try and catch inside the quoteFunc function. For the catch, just have the "rejected" value/error returned from the axios GET request display in the console (NOTE: You will need a console log for this. Also, you will need to create a parameter for the catch. The parameter will hold the "rejected" value/error returned from the axios GET request).

// 3b
async function quoteFunc (){
    try {
      // 3a
      const quoteJS3 = await axios.get(`https://friends-quotes-api.herokuapp.com/quotes/random`);
      console.log(quoteJS3);
      // 3c
      p5.innerText = quoteJS3.data.character;
      p6.innerText = quoteJS3.data.quote;
      // 3d
    } catch (err) {
      console.log(err);
    }
  }
  quoteFunc();


// 4

// Use the TVMazeAPI for question 4 (Link below)…
// https://www.tvmaze.com/api
// 4a. Using Axios, Async/await, and the "Episode by Number" endpoint/URL display the name of the final episode in season two of "The Mandalorian" TV show as the inner text for the p7 variable/element. Also, use tvMazeFunc for the name of the async function you create. If done correctly the name of the episode should display on the webpage. (NOTE: Don't forget to run the tvMazeFunc function)(Hint: id is 38963).
// 4b. Finally, include try and catch inside the tvMazeFunc function. For the catch, just have the "rejected" value/error returned from the axios GET request display in the console (NOTE: You will need a console log for this. Also, you will need to create a parameter for the catch. The parameter will hold the "rejected" value/error returned from the axios GET request).



const fourth = document.querySelector('#fourth');
const p7 = document.createElement('p');
fourth.append(p7);


// 4a
const baseURL = `https://api.tvmaze.com`;
const id = `38963`;
const endpoint = `/shows/${id}/episodebynumber?`;
const season = `2`;
const number = `8`;
const queryString = `season=${season}&number=${number}`;
const fullEndpoint = baseURL + endpoint + queryString;
// Same as above
// const fullEndpoint = `https://api.tvmaze.com/shows/38963/episodebynumber?season=2&number=8`;


// Example using a arrow function expression (NOTE: A Declaration function can also be used here)
tvMazeFunc = async () => {
    // 4b
    try {
      const episode = await axios.get(fullEndpoint);
      console.log(`Question 4`);
      console.log(episode);
      console.log(episode.data.name);
      p7.innerHTML = episode.data.name;
    } catch (err) {
      console.log(err);
    }
  }
  tvMazeFunc();

  // BONUS
// 5
const img = document.createElement(`img`);
const body = document.querySelector(`body`);

axios.get(`https://pokeapi.co/api/v2/pokemon/pikachu`)
.then(res => {
  console.log(`Question 5`);
  console.log(res);
  
})