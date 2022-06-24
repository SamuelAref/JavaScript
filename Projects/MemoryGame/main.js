//grab elements
const board = document.getElementById('board');
const img = document.getElementsByTagName('img');
const box1 = document.getElementById('box-1');
const box2 = document.getElementById('box-2');
const box3 = document.getElementById('box-3');
const box4 = document.getElementById('box-4');
const box5 = document.getElementById('box-5');
const box6 = document.getElementById('box-6');
const box7 = document.getElementById('box-7');
const box8 = document.getElementById('box-8');



//create array of images with their paths
const imgArray = ["images/html.ico", "images/css.ico", "images/js.ico", "images/react.ico"];


//assign images to boxes
let j = 0; //counter

for (let i of img) {

    i.id = 'im';

    i.src = imgArray[j];

    if (j === 3) {

        j = 0;


    }
    else {
        j++;

    }


}


//set timing function for display of box if not correct 
function timing(ms) {

    return new Promise((resolve, reject) => {

        setTimeout(resolve, ms);
    });
}


let press1 = null; // holder of first image preview
let press2 = null; // holder of the second image preview


// button event listeners for each box
box1.addEventListener('click', targ);
box2.addEventListener('click', targ);
box3.addEventListener('click', targ);
box4.addEventListener('click', targ);
box5.addEventListener('click', targ);
box6.addEventListener('click', targ);
box7.addEventListener('click', targ);
box8.addEventListener('click', targ);




async function targ(e) { //wrap the event listener in async function for time delay in comparing the images


    console.log(e.target.id);

    e.target.firstElementChild.style.display = "block";
    e.target.style.backgroundColor = "white";

    if (press1 != null) { // assign second clicked to press2

        press2 = e.target;
        console.log(press2.id);
    }

    else { // assign first clicked to press1

        press1 = e.target;
        console.log(press1.id);

    }



    while (press1 !== null && press2 !== null) { //if both press1 and press2 have values




        if (press1.firstElementChild.src === press2.firstElementChild.src) { // if press1 and press2 have the same image

            console.log('correct');
        }

        else { // if press1 and press2 don't have the same image

            await timing(1200); //wait 2 seconds and close the box

            // cover the boxes
            press1.firstElementChild.style.display = "none";
            press1.style.backgroundColor = "green";
            press2.firstElementChild.style.display = "none";
            press2.style.backgroundColor = "green";

        }

        //reset press1 and press2
        press1 = null;
        press2 = null;

    }





}












