

const buttonColours=["red","blue","green","yellow"];

var gamePattern=[];

var userClickedPattern=[];

var value=0;
var started=false;


$(document).keypress(function () {
  if(!started)
  {
    $("#level-title").text("level "+value);
    nextSequence();
    started=true;
  }
  
});

$(".btn").click(function() {
  var userChosenColour=$(this).attr("id");
  userClickedPattern.push(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
  animatePress(userChosenColour);
  playSound(userChosenColour);
});

function startOver(){
  gamePattern=[];
  started=false;
  value=0;
}
function checkAnswer(currentLevel){
  if(userClickedPattern[currentLevel]==gamePattern[currentLevel])
  {
  if(userClickedPattern.length==gamePattern.length){
    setTimeout(function () {
      nextSequence();
      
    },1000);
  }
}
      else {
      var audio=new Audio("./sounds/wrong.mp3");
      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      },200);
      $("h1").text("Game Over, Press any kew to start again!")
      startOver();
    }
  }


function nextSequence(){
  userClickedPattern=[];
  value++;
  $("#level-title").text("Level " + value);
  var randomNumber=Math.random();
  randomNumber=randomNumber*4;
  randomNumber=Math.floor(randomNumber);

  var randomChosenColour=buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);

  $("."+randomChosenColour).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
  console.log(gamePattern);
  return value;

};

function playSound(name){
  var audio= new Audio("./sounds/"+name+".mp3");
  audio.play();
}


function animatePress(currentColour) {
  $("."+currentColour).addClass("pressed");
  setTimeout(function () {
    $("."+currentColour).removeClass("pressed");
  },100);
  
}







