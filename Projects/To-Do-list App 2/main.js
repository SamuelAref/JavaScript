//grab elements 

const input = document.getElementById('text-input');
const button = document.getElementById('submit');
const output = document.getElementById('output');
const ol = document.getElementById('ordered');


//add event listener to button 

button.addEventListener('click', addNote);



function addNote(e) {

    //create elements
    const li = document.createElement('li');
    li.classList.add('ordered1');
    const h3 = document.createElement('h3');
    h3.classList.add('output-text');

    const buttonDone = document.createElement('button');
    buttonDone.classList.add('done');
    buttonDone.innerHTML = "Done";

    const buttonDelete = document.createElement('button');
    buttonDelete.classList.add('delete');
    buttonDelete.innerHTML = "Delete";


    if (input.value === '') {

        //do nothing

    }

    else {

        //append elements
        ol.appendChild(li);
        li.appendChild(h3);
        li.appendChild(buttonDone);
        li.appendChild(buttonDelete);

        //set input value to output
        h3.innerHTML = input.value;

        //reset input field
        input.value = null;

    }


    //add event listener for Done
    buttonDone.addEventListener('click', through);

    function through(e) {

        h3.style.textDecoration = "line-through";
    }

    //add event listener for delete
    buttonDelete.addEventListener('click', removing);

    function removing(e) {

        ol.removeChild(li);
        li.removeChild(h3);
        li.removeChild(buttonDone);
        li.removeChild(buttonDelete);

        h3.innerHTML = null;


    }


}