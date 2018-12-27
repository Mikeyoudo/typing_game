window.addEventListener('load', init);


//Globals

//avaliable levels 

const levels = {
	easy: 5,
	medium: 3,
	hard: 2
};

//To change level levels.medium, levels.hard (fyi its amount of seconds you got left ot type your word.)
const currentLevel = levels.hard;

let time = currentLevel;
let score = 0;
let isPlaying;

// DOM Elements

//wordInput = 'text'
const wordInput = document.querySelector('#word-input');
//word that shows on top of the text
const currentWord = document.querySelector('#current-word');
//score and time display are self evident
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

words = [
	'hat',
	'river',
	'lucky',
	'statue',
	'generate',
	'stubborn',
	'cocktail',
	'runaway',
	'joke',
	'developer',
	'echo',
	'siblings',
	'investigate',
	'humangoloid',
	'Hilarity',
	'horrendous',
	'symptom',
	'laughter',
	'magic',
	'master',
	'space',
	'definition'

];

//initialize or lets get this game started
function init() {
	//show number of seconds in UI
	seconds.innerHTML = currentLevel;
	//load word from array or wordlist above
	showWord(words);
	//start matching on word input
	wordInput.addEventListener('input', startMatch);
	//repeat, call countdown every second
				//countdown is a function, run every 1000 mili second or second
	setInterval(countdown, 1000);
	//check the game status, this happens really quickly;
	setInterval(checkStatus, 50);

}
//start match
function startMatch() {
	if(matchWords()) {
		isPlaying = true;
		//page load usually takes a second
		time = currentLevel + 1;
		showWord(words);
		wordInput.value = '';
		score++;

	}
	//If score is -1, display 0
	if(score === -1) {
			scoreDisplay.innerHTML = 0;
	}else {
		scoreDisplay.innerHTML = score;
	}
	
}
//match currentWord to wordInput
function matchWords() {
	if(wordInput.value === currentWord.innerHTML) {
			message.innerHTML = 'Correct!!!';
			return true;
		} else {
			message.innerHTML = '';
			return false;
		}

}
// Pick & show random word

function showWord(words) {
	   
//generates random array index
	const randIndex = Math.floor(Math.random() * words.length);

	//output random word, remember currentWord above
	currentWord.innerHTML = words[randIndex];


}

//countdown timer
function countdown() {
	//make sure time is not run out 
	if(time > 0) {
		//subtract time by 1
		time--;

	}else if(time === 0) {
		//game over
		isPlaying = false;
	}

	//show time
	timeDisplay.innerHTML = time;
}

//checks game status
function checkStatus() {
	if(!isPlaying && time === 0) {
		message.innerHTML = 'Game Over!';
		score = -1;
	}
}