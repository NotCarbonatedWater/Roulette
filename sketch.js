var touchReleasedBool = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255,192,203);
  textStyle(BOLD);
  textSize(25);
  fill(0);
  textAlign(CENTER);
  text("Press Any Key/Click/Touch To Start", windowWidth/2, windowHeight / 2);
}
function roulette() {
  var num = int(random(0, 38 * 10));
  num = int (num / 10); 
  let listBlacks = [10,29,8,31,6,33,4,35,2,28,26,11,20,17,22,15,21,13,24];
  let colour;
  if (num == 0 || num == 37) {
    if (num == 37) {
      num = '00'; 
    }
    colour = 'green'; 
  }
  else {
      for (let i = 0; i < listBlacks.length; i++) {
        if (num == listBlacks[i]) {
          colour = 'black'
          break;
        }
        colour = 'red'
      }
}

  if (colour == 'red') {
    background(255, 0, 0);
  } 
  else if (colour == 'green'){
    background(0,255,0);
  }
  else {
    background(0,0,0);
  }
  textStyle(BOLD);
  textSize(100);
  fill(255);
  textAlign(CENTER);
  text(num, windowWidth / 2, windowHeight / 2);
}

function draw() {
}

function keyReleased() {
  roulette(); 
}

function touchStarted() {
  if (!touchReleasedBool) {
    return; 
  }
  touchReleasedBool = false; 
  roulette();
}
function touchEnded() {
  touchReleasedBool = true; 
  return false; 
}
