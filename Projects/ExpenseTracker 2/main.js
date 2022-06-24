//grab elements 

const description = document.getElementById('description');
const amount = document.getElementById('amount');
const date = document.getElementById('date');
const button = document.getElementById('submit');
const table = document.getElementById('table');



//add event listener to button 


button.addEventListener('click', addToTable);

function addToTable(e) {

    e.preventDefault();

    //create elements 

    const div = document.createElement('div');
    div.classList.add('output-style');

    const h41 = document.createElement('h4');
    h41.classList.add('pos');
    const h42 = document.createElement('h4');
    h42.classList.add('pos');
    const h43 = document.createElement('h4');
    h43.classList.add('pos');


    //append elements
    div.appendChild(h41);
    div.appendChild(h42);
    div.appendChild(h43);

    if (description.value === '' && amount.value === '' && date.value === '') {


        //do nothing
    }

    else {

        table.appendChild(div);
        h41.innerHTML = description.value;
        h42.innerHTML = `$ ${amount.value}`;
        h43.innerHTML = date.value;
    }
}

