/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

var quote = '';
var htmlString = '';
var randQ = '';


const quotes = [
{
	quote:  " I didn't know how many of them it was going to take to whip my ass, but I knew how many they were going to use. That's a handy piece of information to have, right there.",
	source: "Ron White",
	citation: "Blue Collar Comedy Tour",
	year: `2003`
},
{
	quote: "When you're at the end of your rope, tie a knot and hold on.",
	source: "Theodore Roosevelt",
},
{
	quote: "To me this is not yelling. I am not yelling. I'm just passionate about my opinions and I want to tell you all of them before you start talking again.",
	source: "Bill Burr",
},
{
	quote: "The scariest moment is always just before you start.",
	source: "Stephen King",
	citation: "On Writing: A Memoir of the Craft",
	year: `2000`
},
{
	quote: "Sometimes, making the wrong choice is better than making no choice. You have the courage to go forward, that is rare. A person who stands at the fork, unable to pick, will never get anywhere.",
	source: "Terry Goodkind",
	citation: "Wizard's First Rule",
	year: `1994`
}

]


/***
 * `getRandomQuote` function
***/


function getRandomQuote(){
	var randN = Math.floor(Math.random() * quotes.length ); //random number generated
	var quote = quotes[randN]; //object pulled from quotes array
	
	


}




/***
 * `printQuote` function
***/ 
function printQuote(randN){
	var randQ = getRandomQuote();
	var htmlString = ` 
		<p class="randN"> ${randQ.quote} </p>
		<p class="randN"> ${randQ.source} </p>`
		
		
		/*
		if (getRandomQuote.includes(randQ.citation)){ 
			<span class="citation"> ${randQ.citation} </span>
		} if (getRandomQuote.includes(randQ.date)) {
			<span class="year"> ${randQ.date} </span>
		} </p> 
		` */
	return htmlString
	}

console.log(htmlString);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);