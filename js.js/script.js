//players startingpostion
var mvinterval = 10;
var gameOver = false;
var score = 0;
var bombOnScreen = false;

var snake = {
  x: 100,
  y: 100,
  height: 10,
  width: 10,
  color: 'limegreen'
}

var food = {
  x: 300,
  y: 300,
  height: 10,
  width: 10,
  color: 'green'
  }

var bomb = {
    x: null,
    y: null,
    height: 10,
    width: 10,
    color: 'red'
  }

var highscore = localStorage.getItem("highscore");

if(highscore !== null){
    if (score > highscore) {
        localStorage.setItem("highscore", score);
    }
}
else{
    localStorage.setItem("highscore", score);
}

var randomNum = function() {
  return Math.floor(Math.random() * 50) * 10;
}

//randomly changes the location of the bomb
var generateBomb = function() {
  $('.bomb').css({top: bomb.y = randomNum(), left: bomb.x = randomNum()})
  $('.bomb').css("background-color", bomb.color);
}

//randomly changes the position of the food
var generateFood = function() {
  $('.food').css({top: food.y = randomNum(), left: food.x = randomNum()})
  score += 10;
  console.log(score);
  $('.updateScore').text('Score: ' + score + ' Highscore: ' + highscore);
  $('.updateScore').css('color', 'black');
}

var checkForEat = function() {
  if (snake.x < food.x + food.width &&
     snake.x + snake.width > food.x &&
     snake.y < food.y + food.height &&
     snake.height + snake.y > food.y) {
       generateFood();
       $('.snakehead').prepend("<div class='snakeBody'></div>");
  }
}


var checkForDead = function() {
  if (snake.x < bomb.x + bomb.width &&
     snake.x + snake.width > bomb.x &&
     snake.y < bomb.y + bomb.height &&
     snake.height + snake.y > bomb.y) {
      gameOver = true;
     }
  if (score === 50 && !bombOnScreen) {
    generateBomb();
    bombOnScreen = true;
  }
}



//changes the position of the snake based on the key you press
$(document).ready(function() {
  console.log('ready');
  $(document).keydown(function(e) {
    if(!gameOver) {
      controlpress = e.keyCode
    switch (controlpress) {
      case 37:
      case 65:
        console.log('left');
        if (snake.x < 10) {
          snake.x = 500;
        };
        $('.snakehead').css({top: snake.y, left: snake.x -= mvinterval});
        checkForEat();
        checkForDead();
          break;
      case 38:
      case 87:
        console.log('up');
        if (snake.y < 10) {
          snake.y = 500;
        };
        $('.snakehead').css({top: snake.y -= mvinterval, left: snake.x});
        checkForEat();
        checkForDead();
          break;
      case 39:
      case 68:
          console.log('right');
          if (snake.x > 480) {
            snake.x = -10;
          };
          $('.snakehead').css({top: snake.y, left: snake.x += mvinterval});
          checkForEat();
          checkForDead();
          break;
      case 40:
      case 83:
        console.log('down');
        if (snake.y > 480) {
          snake.y = -10;
        };
        $('.snakehead').css({top: snake.y += mvinterval, left: snake.x});
        checkForEat();
        checkForDead();
          break;

    };
  }});
});

$('.snakehead').prepend("<div class='snakeBody'></div>")





  //if snakehead position equals food fposition
  //generateFood and add one to snake tail

//after 5 generate bomb and food. if snakehead position equals bomb..dead
