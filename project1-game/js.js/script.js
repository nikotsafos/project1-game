//players startingpostion
var positionx = 100;
var positiony = 100;
var mvinterval = 10;


$(document).ready(function() {
  console.log('ready');
  $(document).keydown(function(e) {
    controlpress = e.keyCode
    switch (controlpress) {
      case 37:
      case 65:
        console.log('left');
        if (positionx < 10) {
          positionx = 500;
        };
        $('.snakehead').css({top: positiony, left: positionx -= mvinterval});
          break;
      case 38:
      case 87:
        console.log('up');
        if (positiony < 10) {
          positiony = 500;
        };
        $('.snakehead').css({top: positiony -= mvinterval, left: positionx});
          break;
      case 39:
      case 68:
          console.log('right');
          if (positionx > 480) {
            positionx = -10;
          };
          $('.snakehead').css({top: positiony, left: positionx += mvinterval});
          break;
      case 40:
      case 83:
        console.log('down');
        if (positiony > 480) {
          positiony = -10;
        };
        $('.snakehead').css({top: positiony += mvinterval, left: positionx})
          break;

    };
  });
  });

var generateFood = function() {
  $('.gameboard').append
  MATH.random
}
