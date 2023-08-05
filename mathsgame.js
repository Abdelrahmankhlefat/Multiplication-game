var playing = false;
var score;
var action;
var timerem;
// if we click on the start game button 
document.getElementById("startest").onclick = function() {
    // if we are playing 
    if (playing == true) {
        location.reload(); //reload page
    } else {
        // if we are not playing 

        //change mode to playing 
        playing = true;
        //set score to 0
        score = 0;
        document.getElementById("scorevalue").innerHTML = score;
        //change the time remaining 
        timerem = 60;

        //show countdown box 
        show("timerem");
        hide("wrong");
        hide("correct");
        // change button to reset 
        document.getElementById("startest").innerHTML = "Reset Game!";
        //start countdown by reducing 1 sec in loops 
        startcountdown();
        // generate q&a 
        generate();


    }
}
var ca;
var wa;
for (i = 1; i < 5; i++) {
    document.getElementById("box" + i).onclick =
        function() {

            //check if we are playing
            if (playing == true) {
                //yes 

                if (this.innerHTML == ca) {
                    // correct answer 
                    //increase score
                    score += 1;
                    show("correct");
                    setTimeout(
                        function() {
                            hide("correct");
                        }, 1000)
                    generate();
                    document.getElementById("scorevalue").innerHTML = score;
                } else {

                    show("wrong");
                    setTimeout(
                        function() {
                            hide("wrong");
                        }, 1000)
                    generate();
                }
            }
        }
}

/*      //hide wrong box and show correct 
                    hide("wrong");
                    show("correct");
                    setTimeout(function() {
                        hide("correct")
                    }, 2000)
                    generate();

                } else {
                    //wrong answer
                    hide("correct");
                    show("wrong");
                    setTimeout(function() {
                        hide("wrong");
                    }, 2000);
                }
            }
        }
}
*/




// start counter 
// time left ? 
// yes -> continue 
function startcountdown() {

    action = setInterval(function() {
        timerem -= 1;
        document.getElementById("timeremval").innerHTML = timerem;
        if (timerem == 0) {
            //no -> game over 
            stopcountdown();
            show("gameover");
            document.getElementById("gameover").innerHTML = "<p>Game over!</p> <p> your score is: " + score + ".</p>";
            hide("timeremaining");
            playing = false;
        }
    }, 1000)
}

//stop counter 
function stopcountdown() {
    clearInterval(action);

}
// hide an element 
function hide(Id) {
    document.getElementById(Id).style.visibility = "hidden";

}
//show an element 
function show(Id) {
    document.getElementById(Id).style.visibility = "visible";

}

function generate() {
    var x, y;
    x = 1 + Math.round(Math.random() * 9);
    y = 1 + Math.round(Math.random() * 9);
    document.getElementById("question").innerHTML = x + "x" + y;
    ca = x * y;
    var cp = 1 + (Math.round(Math.random() * 3));
    document.getElementById("box" + cp).innerHTML = ca;

    wa = (1 + Math.round(Math.random() * 9)) * (1 + Math.round(Math.random() * 9));
    for (var i = 1; i < 5; i++) {
        if (i != cp) {
            document.getElementById("box" + i).innerHTML = (1 + Math.round(Math.random() * 9) * (1 + Math.round(Math.random() * 9)));

        }

    }
}

/*function generateQA() {
    var x = 1 + math.round(9 * Math.random());
    var y = 1 + math.round(9 * Math.random());
    var correctanswer = x * y;
    document.getElementById("question").innerHTML = x + "x" + y;
    var correctposition = 1 + Math.round(3 * Math.random());
    document.getElementById("box" + correctposition).innerHTML = correctanswer; //fill one box with the correct answer 
    // fill other boxes with wrong answers 
    var answers = [correctanswer];
    for (i = 1; i < 5; i++) {
        if (i != correctposition) {
            var wronganswer;
            do {
                wronganswer =
                    (1 + Math.round(9 * Math.random())) * (1 + math.round(9 * Math.random())); // wrong answer
            }
            while (answers.indexOf(wronganswer) > -1)
            document.getElementById("box" + i).innerHTML = wronganswer;
            answers.push(wronganswer);
        }
    }
}*/






// generate new q&a 

// if we click on the answer box 
// if we are playing 
// correct? 
// yes 
//increase score 
//show correct box for 1sec 
// generate new q&a 
//no 
// show try again box for 1sec 
// //