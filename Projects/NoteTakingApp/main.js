//grab the elements 

const input = document.getElementById('inner-input');
const button = document.getElementById('button');
const container = document.getElementById('output-container');
//create modal 
const myModal = document.createElement('div'); // modal container
const span = document.createElement('span'); // modal close button
const cont = document.createElement('p'); //modal content

// give id
myModal.id = 'myModal';
span.id = 'close';
cont.id = 'cont';
span.innerText = 'Close';



// event listener for add note
button.addEventListener('click', take);

function take(e) {



    if (input.value == '') { //if no input is set

        input.placeholder = 'Enter Text here';

    }


    //else
    else {



        //create output elements
        const div = document.createElement('div'); //create container
        const a = document.createElement('button'); //create view more button
        const more = document.createElement('span'); // create overflow separator
        a.innerHTML = 'view more';
        div.id = 'card';


        //append items to html container

        container.appendChild(div);

        // create overflow elements, str 1 refers to string before the overflow and str2 refers to string after overflow;
        let str1 = '';
        let str2 = '';

        //criteria for no overflow of more than 75 characters
        if (input.value.length < 75) {


            for (let i = 0; i < input.value.length; i++) {


                str1 = str1 + input.value[i];
            }

            div.innerText = str1;

            input.value = ''; //clear input box after input


        }


        //criteria of there is overflow of more than 75 characters
        else {


            /////

            for (let i = 0; i < 75; i++) { // non overflown chars for str 1


                str1 = str1 + input.value[i];
            }

            for (let i = 75; i < input.value.length; i++) { // overflown chars for str2


                str2 = str2 + input.value[i];
            }

            input.value = ''; // clear input box after input



            ////

            div.innerText = str1; // give unoverflowed to output
            div.appendChild(more); // append span to output box
            more.innerText = str2;  // append overflown to span
            more.style.display = "none"; // give span of hidden character as to not view the overflown characters
            div.appendChild(a); //append view more button



            container.appendChild(myModal); // apppend modal
            myModal.appendChild(span); // append modal span close button
            myModal.appendChild(cont); // append modal content

            a.addEventListener('click', mode); // event listener for view more button

            function mode(e) { // to open modal

                cont.innerText = str1 + str2;
                myModal.style.display = "block"; // make modal view
                span.addEventListener('click', closeModal); //event listener for close modal button


                function closeModal(e) {

                    myModal.style.display = "none"; // closes the modal by setting display to none
                }


            }



        }


    }




}





