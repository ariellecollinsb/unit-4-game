
var wins = 0;

var losses = 0;

var answer = 0;

var userGuess = 0;

var gameOver = false;

var gems = {

    ruby: 0,
    sapphire: 0,
    emerald: 0,
    topaz: 0,
}

function startGame() {

    answer = getRandomNumber(19, 120);
    gems.ruby = getRandomNumber(1, 12);
    gems.sapphire = getRandomNumber(1, 12);
    gems.amethyst = getRandomNumber(1, 12);
    gems.pearl = getRandomNumber(1, 12);

    userScore = 0;
    gameOver = false;
    $("#game-over").html("");
    display();
}

function display() {

    $("#answer").html(answer);
    $("#userScore").html(userScore);
    $("#wins").html(wins);
    $("#losses").html(losses);

}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * max) + min;
}

function adder(score) {
    if (gameOver === true) {
        return;
    }
    userScore = userScore + score;
    if (userScore === answer) {
        wins++;
        gameOva("You Win!");
    } else if (userScore > answer) {
        losses++;
        gameOva("You Lose! :( ");
    }
    display();
}

function gameOva(message) {
    gameOver = true
    $("#game-over").html(message);

}

$("#gems img").on("click", function () {
    adder(gems[this.id]);
});
$("#start-button").on("click", function () {
    startGame();
});

// Four gems and a random result

// each gem has a random number between 1-12

// a new number should be generated for each gem at start()/restart()

// on.click of a gem {gem value += gem value} till {gem value === answer || gem value > answer }

//var randomNum; 

//for(i=0; i< answer.length; i++)

//var randomNum = Math.floor(Math.random()*12)+1;

//$(".random.Num1").html(userGuess)
