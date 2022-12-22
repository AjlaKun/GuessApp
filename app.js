var app = angular.module("app1",[]);
app.controller("GameController",['$scope','$timeout',function($scope,$timeout){


	var words=["Altassian","Mountain","Pokemon"];
	$scope.incorrectLettersChosen=[];
	$scope.correctLettersChosen=[];
	var selectedWord='';
	$scope.guesses=6;
	$scope.displayWord='';
	$scope.input = {
		letter: ''
	};
	var selectRandomWord = function() {
		var index = Math.floor(Math.random()*words.length);
		return words[index];
	}
	var newGame = function() {
		$scope.incorrectLettersChosen = [];
		$scope.correctLettersChosen=[];
		$scope.guesses=6;
		$scope.displayWord="";
		selectedWord=selectRandomWord();
		var tempDisplayWord='';
		for(var i=0;i<selectedWord.length;i++) {
			tempDisplayWord+='*';
		}
		$scope.displayWord=tempDisplayWord;
		// Random word selection.
		$(document).ready(function(){
			$(".ring").css("background","aqua");
	     });
		
	}
	$scope.letterChosen = function() {
		// Check if $scope.input.letter is a single letter and an alphabet and not an already chosen letter.
		// Check if its correct.
		for(var i=0;i<$scope.correctLettersChosen.length;i++) {
			if($scope.correctLettersChosen[i].toUpperCase()==$scope.input.letter.toUpperCase()) {
				$scope.input.letter="";
				return;
			}
		}
		for(var i=0;i<$scope.incorrectLettersChosen.length;i++) {
			if($scope.incorrectLettersChosen[i].toUpperCase()==$scope.input.letter.toUpperCase()) {
				$scope.input.letter="";
				return;
			}
		}
		var correct=false;
		for(var i=0;i<selectedWord.length;i++) {
			if(selectedWord[i].toLowerCase()==$scope.input.letter.toLowerCase()) {
				$scope.displayWord=$scope.displayWord.slice(0,i)+$scope.input.letter.toUpperCase()+$scope.displayWord.slice(i+1);
				correct=true;
			}
		}
		if(correct) {
			$scope.correctLettersChosen.push($scope.input.letter.toUpperCase());
		} else {
			$scope.guesses--;
			$scope.incorrectLettersChosen.push($scope.input.letter.toUpperCase());
		}
		$scope.input.letter="";
		if($scope.guesses==0) {
			// You Lose
			$timeout(function() {
				newGame();
			},500);
		}
		if($scope.displayWord.indexOf("*")==-1) {
			// Show score
			$timeout(function() {
				newGame();
			},500);
		}

		let ring;
		let valueBeg = $scope.guesses;
		let valueEnd = 0;
		
		if($scope.guesses ==5)
		{
		$(document).ready(function(){
			$(".ring").css("background","conic-gradient(aqua 240deg 300deg, white 300deg)");
	     });
		}
		if($scope.guesses ==4)
		{
		$(document).ready(function(){
			$(".ring").css("background","conic-gradient(aqua 180deg 240deg, white 240deg)");
	     });
		}
		if($scope.guesses ==3)
		{
		$(document).ready(function(){
			$(".ring").css("background","conic-gradient(aqua 120deg 180deg, white 180deg)");
	     });
		}
		if($scope.guesses ==2)
		{
		$(document).ready(function(){
			$(".ring").css("background","conic-gradient(aqua 60deg 120deg, white 120deg)");
	     });
		}
		if($scope.guesses ==1)
		{
		$(document).ready(function(){
			$(".ring").css("background","conic-gradient(aqua 0deg 60deg, white 60deg)");
	     });
		}
		if($scope.guesses ==0)
		{
		$(document).ready(function(){
			$(".ring").css("background","conic-gradient(white 0deg)");
	     });
		}
	}
	newGame();
}]);