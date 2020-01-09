var randomNumbers = [];
var sequenceNum = 1;

function createSequence(){

    for (var i = 0; i < 5; i++){
        //generate a random number between (and including) 1 and 6
        var randomNum = (Math.floor(Math.random() * 6) + 1);
        randomNumbers.push(randomNum);
    }
    runSequence();
}

function runSequence() {
    setTimeout(function () {
        console.log("turn on light" + randomNumbers[(sequenceNum - 1)]);
        togglelight($(String("#" + randomNumbers[(sequenceNum - 1)])));
        setTimeout(function () {
            console.log("turn off light" + randomNumbers[(sequenceNum - 1)]);
            togglelight($(String("#" + randomNumbers[(sequenceNum - 1)])));
            if (sequenceNum < 5) {
                sequenceNum += 1;
                runSequence();
            }
        }, 250);
    }, 100);
}

var userOrder = [];

function checkLights(){
    var answerCorrect = true;
    console.log(userOrder);
    for (var i = 0; i < randomNumbers.length; i++){
        if (randomNumbers[i] != userOrder[i]){
            answerCorrect = false;

        }
    }
    if (answerCorrect == true){
        window.alert("YOU WON!!!");
        userOrder = [];
        randomNumbers = [];
        sequenceNum = 1;
    }
    else if (answerCorrect == false){
        window.alert("YOU LOST!!!");
        userOrder = [];
        randomNumbers = [];
        sequenceNum = 1;
    }
}


function clickedLight1(){
    togglelight($("#1"));
    userOrder.push(1);
    setTimeout(function () {
        togglelight($("#1"));
    }, 250);
    if (userOrder.length == 5){
        checkLights();
    }
}

function clickedLight2(){
    togglelight($("#2"));
    userOrder.push(2);
    setTimeout(function() {
        togglelight($("#2"));
    }, 250);
    if (userOrder.length == 5){
        checkLights();
    }
}

function clickedLight3(){
    togglelight($("#3"));
    userOrder.push(3);
    setTimeout(function () {
        togglelight($("#3"));
    }, 250);
    if (userOrder.length == 5){
        checkLights();
    }
}

function clickedLight4(){
    togglelight($("#4"));
    userOrder.push(4);
    setTimeout(function () {
        togglelight($("#4"));
    }, 250);
    if (userOrder.length == 5){
        checkLights();
    }
}

function clickedLight5(){
    togglelight($("#5"));
    userOrder.push(5);
    setTimeout(function () {
        togglelight($("#5"));
    }, 250);
    if (userOrder.length == 5){
        checkLights();
    }
}

function clickedLight6(){
    togglelight($("#6"));
    userOrder.push(6);
    setTimeout(function () {
        togglelight($("#6"));
    }, 250);
    if (userOrder.length == 5){
        checkLights();
    }
}





