

//grab elements

const winorLose = document.getElementById('win');
const container = document.getElementById('container');
const circle = document.getElementById('circle1');
const playerCounter = document.getElementById('player-counter');

playerCounter.innerHTML = "player 1";
playerCounter.style.color = "red";

//declare variables
let player = 0;
const indexRed = [];
const indexBlue = [];


//event listener when the circles are pressed
container.addEventListener('click', change);

function change(e) {

    //change color when pressed
    if (e.target.id === "circle1") {

        if (player === 0) {

            if (e.target.style.backgroundColor === "lightgray") {

                e.target.style.backgroundColor = "red";
                player++;
                playerCounter.innerHTML = "player 2";
                playerCounter.style.color = "blue";


            }

        }

        else if (player === 1) {

            if (e.target.style.backgroundColor === "lightgray") {


                e.target.style.backgroundColor = "blue";
                player--;
                playerCounter.innerHTML = "player 1";
                playerCounter.style.color = "red";

            }

        }


    }

    const array = [];
    let num = 0;

    // give values to an array for proper operation
    for (let i of container.children) {

        array[num] = i.style.backgroundColor;
        num++;
    }

    let redIndex = 0;
    let blueIndex = 0;

    //checker row of red and blue indexes
    for (let i = 0; i < array.length; i++) {

        if (array[i] === "red") {

            indexRed[redIndex] = i;
            redIndex++;


        }

        else if (array[i] === "blue") {

            indexBlue[blueIndex] = i;
            blueIndex++;

        }

    }

    //check if red wins
    for (let i = 0; i < indexRed.length - 3; i++) {

        if (indexRed[i] + 1 === indexRed[i + 1] && indexRed[i + 1] + 1 === indexRed[i + 2] && indexRed[i + 2] + 1 === indexRed[i + 3]) {

            if (indexRed[i] === 7 || indexRed[i + 1] === 7 || indexRed[i + 2] === 7) {

            }

            else if (indexRed[i] === 15 || indexRed[i + 1] === 15 || indexRed[i + 2] === 15) {

            }

            else if (indexRed[i] === 23 || indexRed[i + 1] === 23 || indexRed[i + 2] === 23) {

            }

            else if (indexRed[i] === 31 || indexRed[i + 1] === 31 || indexRed[i + 2] === 31) {

            }

            else if (indexRed[i] === 39 || indexRed[i + 1] === 39 || indexRed[i + 2] === 39) {

            }

            else if (indexRed[i] === 47 || indexRed[i + 1] === 47 || indexRed[i + 2] === 47) {

            }

            else if (indexRed[i] === 55 || indexRed[i + 1] === 55 || indexRed[i + 2] === 55) {

            }

            else if (indexRed[i] === 63 || indexRed[i + 1] === 63 || indexRed[i + 2] === 63) {

            }

            else {

                winorLose.innerHTML = "Red wins !!!";
                winorLose.style.color = "red";
                console.log('Red win');
            }
        }


    }

    //check if blue wins
    for (let i = 0; i < indexBlue.length - 3; i++) {

        if (indexBlue[i] + 1 === indexBlue[i + 1] && indexBlue[i + 1] + 1 === indexBlue[i + 2] && indexBlue[i + 2] + 1 === indexBlue[i + 3]) {


            if (indexBlue[i] === 7 || indexBlue[i + 1] === 7 || indexBlue[i + 2] === 7) {

            }

            else if (indexBlue[i] === 15 || indexBlue[i + 1] === 15 || indexBlue[i + 2] === 15) {

            }

            else if (indexBlue[i] === 23 || indexBlue[i + 1] === 23 || indexBlue[i + 2] === 23) {

            }

            else if (indexBlue[i] === 31 || indexBlue[i + 1] === 31 || indexBlue[i + 2] === 31) {

            }

            else if (indexBlue[i] === 39 || indexBlue[i + 1] === 39 || indexBlue[i + 2] === 39) {

            }

            else if (indexBlue[i] === 47 || indexBlue[i + 1] === 47 || indexBlue[i + 2] === 47) {

            }

            else if (indexBlue[i] === 55 || indexBlue[i + 1] === 55 || indexBlue[i + 2] === 55) {

            }

            else if (indexBlue[i] === 63 || indexBlue[i + 1] === 63 || indexBlue[i + 2] === 63) {

            }

            else {

                winorLose.innerHTML = "Blue wins !!!";
                winorLose.style.color = "blue";
                console.log('Blue win');
            }
        }


    }

}







