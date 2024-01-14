// alert("hello");
// var x=$("div").hasClass("btn")
// alert(x);\
var started=false;
var level =0;
$(document).keypress(function(){
    if (!started) {

        
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
        
    }
})
let userClickedPattern=[];
function playSound(color) {
    var audio = new Audio("sounds/" + color + ".mp3");
    audio.play();
}
let gamePattern=[];
let buttonColors=["red", "blue", "green", "yellow" ]
function nextSequence(){
    level++;
    userClickedPattern=[];
   
    $("#level-title").text("Level " + level);
    var  randomnumber=Math.floor(Math.random() * 4);
    var randomChoosenColor=buttonColors[randomnumber]
    gamePattern.push(randomChoosenColor);
    // alert(randomnumber);
    switch (randomnumber) {
        case 0:
            playSound("red");
            animation("red");
            break;
        case 1:
            playSound("blue");
            animation("blue");
            break;
        case 2:
            playSound("green");
            animation("green");
            break;
        case 3:
            playSound("yellow");
            animation("yellow");
            break;
    }
    
    
}


// for (var i=0;i<4;i++){

// }
var tracking=0;
$(".btn").click(function() {

   
    var userChosenColour = $(this).attr("id");
  
    
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);

   
   
    
    
  
    
  
  });
function playSound(color){
    
        var audio = new Audio("sounds/" + color + ".mp3");
        audio.play();
    
}
function animation(currentkey){
    $("#" + currentkey).fadeIn(100).fadeOut(100).fadeIn(100);
    
}
function animatePress(currentColor){
    var activebutton=document.querySelector("."+currentColor);
    activebutton.classList.add("pressed");
    setTimeout(function(){
        activebutton.classList.remove("pressed")
    },100)
}

function checkAnswer(currentLevel1){
    
        if(userClickedPattern[currentLevel1]==gamePattern[currentLevel1]){
            console.log("success")
            if(userClickedPattern.length==gamePattern.length){
                setTimeout(function () {
                    nextSequence();
                  }, 1000);

            }
        }
        else{
            playSound("wrong")
            $("body").addClass("game-over")   
            setTimeout(function(){
                $("body").removeClass("game-over");
            }, 300);
            
            $("#level-title").text("Game Over, Press Any Key to Restart");
            gameOver();
        }
        
        
    
}
function gameOver(){
    level=0;
    gamePattern=[];
    started=false;
}