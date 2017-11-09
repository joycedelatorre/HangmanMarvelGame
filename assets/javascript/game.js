

// window.addEventListener('load', 
//   document.getElementById("myBtn").addEventListener("click", function(){
//     document.getElementById("demo").innerHTML = "Hello World";
// });

// );
var listOfmovies=["thor","spiderman","batman","daredevil","the avengers","captain america",
"guardians of the galaxy","iron man","the incredible hulk","doctor strange","x-men","the fantastic four","blade","wonder woman",
"deadpool","wolverine","elektra","black widow","cable","thanos","ghost rider","loki","cyclops","captain marvel","black panther",
"falcon","hank pym","hawkeye","luke cage","quicksilver","scarlet witch","vision","wonder man","wasp","spider woman",
"she-hulk","winter soldier","iron fist","storm","emma frost","apocalypse","professor x", "jean grey","rogue","mystique","sabretooth",
"iceman","beast","colossus","angel","gambit","jubilee","kitty pryde","magik","nightcrawler",
"northstar","psylocke",];
var display = [];
var temp=[];

// -----------------------------------------------------------------To start the game 
// document.addEventListener('keypress',(event)=>{
// 	const keyName = event.key;
// 	alert('keydown event\n\n' + 'key: ' + keyName);
// })

// ------------------------------------------------------------------ Get random movie
var randNum = Math.floor(Math.random() * listOfmovies.length);
var movieToGuess = listOfmovies[randNum];
	function pickRandomMovie(){
			console.log(movieToGuess);
// ----------------------------------------------------------------- Display the tiles
		 	for(var i=0; i < movieToGuess.length; i++){
		 		if (movieToGuess[i] != " "){
		 			temp.push("_");
		 			document.getElementById("tile").innerHTML =temp;
		 		} else {
		 		console.log(movieToGuess[i]);
		 			temp.push("*");
		 			document.getElementById("tile").innerHTML =temp;
		 		}
		 	}
			// console.log(temp);
	}
// -----------------------------------------------------------------------User Guess
var guess;
var text;
var textList = [];

	document.addEventListener('keypress',function(event){
		text = (String.fromCharCode(event.which));
		text = text.toLowerCase()
			if(textList.includes(text)){
				return alert("hey you guessed that letter");
			}
		textList.push(text);
		document.getElementById("guesses").innerHTML = "Guesses: " + textList;
		// console.log(textList[textList.length-1]);
		checker();
	})
// ----------------------------------------------------------------------------CHECKER

var lives = 7;
var score = 0;
var man = ["assets/images/hangman1.png","assets/images/hangman2.png","assets/images/hangman3.png","assets/images/hangman4.png","assets/images/hangman5.png","assets/images/hangman6.png","assets/images/hangman7.png"]
	
	function checker(){
		if (movieToGuess.includes(textList[textList.length-1])){
			console.log("yes its included");
			for(var i=0; i < movieToGuess.length; i++){
				if(movieToGuess[i] == textList[textList.length-1]){
					temp[i] = textList[textList.length-1];	
					document.getElementById("tile").innerHTML =temp;
				} 
			}
			console.log(temp);
		}else{
			console.log("nope not included");
			lives = lives - 1;
			document.getElementById("lives").innerHTML = "Lives: " + lives + "<img src='"+ man[lives] + "'>";

		}

		// this is to score
		var counter =0;

		for(var i=0; i < temp.length; i++){
			if(movieToGuess.includes(temp[i])){
				counter ++;
			}
		}
		if (temp.length == counter){
			score ++;
			document.getElementById("score").textContent ="Score: " + score;
		}
		if (score == 3){
			alert("You WIN!");
		} else if (lives==0){
			return(alert("You LOST!"));
		}
	}























