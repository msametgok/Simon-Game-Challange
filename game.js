let buttonColors = ["green", "red", "yellow", "blue"];

let gamePattern = [];
let userClickedPattern = [];
let gameStarted = false;
let level = 0;

$(".btn").click(function () {
  if(gameStarted){

    let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    setTimeout(()=>{
      nextSequence()
    },1000)

  }
  else{
    $("h1").text("Game Over, Press Any Key to Restart")

    //Buraya daha sonra kodlar gelecek
    //Wrong alert sesi ve kirmizi background eklenecek
  }
  
});

$(document).on( "keydown", function() {
  if(!gameStarted){
    nextSequence();
    gameStarted = true;
  }
} );

function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColors[randomNumber];
  gamePattern.push(randomChosenColour);

  $(`#${randomChosenColour}`).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
  level++;
  $("h1").text(`Level ${level}`)
}

function playSound(name) {
  let audio = new Audio(`sounds/${name}.mp3`);
  audio.play();
}

function animatePress(currentColour) {
  $(`#${currentColour}`).addClass('pressed');

  setTimeout(function(){
    $(`#${currentColour}`).removeClass('pressed')
  }, 100)
}
