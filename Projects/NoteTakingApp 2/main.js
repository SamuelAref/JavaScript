//grab elements

const input = document.getElementById('input');
const button = document.getElementById('button');
const output = document.getElementById('output-page');



button.addEventListener('click', addNote);


function addNote(e) {


    //create elements 

    const div1 = document.createElement('div');
    div1.classList.add('one-note');

    const div2 = document.createElement('div');
    div2.classList.add('note');

    const del = document.createElement('button');
    del.classList.add('delete');
    del.innerHTML = "delete";


    if (input.value === '') {
        //do nothing
    }

    else {


        //append elements 


        output.appendChild(div1);
        div1.appendChild(div2);
        div1.appendChild(del);

        console.log(input.value.length);

        if (input.value.length > 132) {

            const more = document.createElement('button');
            more.classList.add('more');
            more.innerHTML = "more";

            div2.innerHTML = `${input.value}....`;

            div2.appendChild(more);
            console.log(div2);


        }

        else {

            div2.innerHTML = input.value;


        }


        input.value = '';


    }

    del.addEventListener('click', remove);

    function remove(e) {

        div1.remove('one-note');
    }


}

