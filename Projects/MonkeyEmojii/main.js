//first get the element
const img = document.getElementById('img-Monkey');

//set a counter for the clicks to alternate between them
let changeCounter = 0;

// add event listener to image
img.addEventListener('click', changer);


//write the function to change image when clicked
function changer(e) {

    if (changeCounter === 0) {

        e.target.src = "images/monkeySee.jpeg";
        changeCounter++;

    }

    else {

        e.target.src = "images/monkeyCover.jpeg";
        changeCounter--;


    }


}







