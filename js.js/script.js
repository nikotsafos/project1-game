//players startingpostion
var snakeheadpositionx = 100;
var snakeheadpositiony = 100;
var mvinterval = 10;
var gameOver = false;
var score = 0;
// var snake = {
//   x: 100,
//   y: 100,
//   height: 10,
//   width: 10,
//   color: limegreen
// }
// var food = {
//   x: 300,
//   y: 300,
//   height: 10,
//   width: 10,
//   color: green
//   }
// }



//gets random numbers in intervals of 10 so you can change where the food pops up
var fpositionx = function() {
  return Math.floor(Math.random() * 50) * 10;
}
var fpositiony = function() {
  return Math.floor(Math.random() * 50) * 10;
}

//same as before but with generating a random place for the bomb
var bpositionx = function() {
  return Math.floor(Math.random() * 50) * 10;
}
var bpositiony = function() {
  return Math.floor(Math.random() * 50) * 10;
}

//randomly changes the location of the bomb
var generateBomb = function() {
  $('.bomb').css({top: bpositiony(), left: bpositionx()})
}

//randomly changes the position of the food
var generateFood = function() {
  $('.food').css({top: fpositiony(), left: fpositionx()})
}

var detectEat = function() {
  if (snakeheadpositionx === fpositionx && snakeheadpositiony === fpositiony) {
  generateFood();
};
};

// var detectHit = function() {
//   if (snakeheadpositionx === bpositionx && snakeheadpositiony === bpositiony) {
//     gameOver = true;
//   };
// };


//changes the position of the snake based on the key you press
$(document).ready(function() {
  console.log('ready');
  $(document).keydown(function(e) {
    controlpress = e.keyCode
    switch (controlpress) {
      case 37:
      case 65:
        console.log('left');
        if (snakeheadpositionx < 10) {
          snakeheadpositionx = 500;
        };
        $('.snakehead').css({top: snakeheadpositiony, left: snakeheadpositionx -= mvinterval});
        detectEat();
          break;
      case 38:
      case 87:
        console.log('up');
        if (snakeheadpositiony < 10) {
          snakeheadpositiony = 500;
        };
        $('.snakehead').css({top: snakeheadpositiony -= mvinterval, left: snakeheadpositionx});
        detectEat();
          break;
      case 39:
      case 68:
          console.log('right');
          if (snakeheadpositionx > 480) {
            snakeheadpositionx = -10;
          };
          $('.snakehead').css({top: snakeheadpositiony, left: snakeheadpositionx += mvinterval});
          detectEat();
          break;
      case 40:
      case 83:
        console.log('down');
        if (snakeheadpositiony > 480) {
          snakeheadpositiony = -10;
        };
        $('.snakehead').css({top: snakeheadpositiony += mvinterval, left: snakeheadpositionx});
        detectEat();
        generateFood();
          break;

    };
  });
  });


// $('.snakehead').append("<div class='snakeBody'></div>");

  //if snakehead position equals food fposition
  //generateFood and add one to snake tail

//after 15 generate bomb and food. if snakehead position equals bomb..dead
