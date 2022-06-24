//grab elements 

const author = document.getElementById('author');
const title = document.getElementById('title');
const isbn = document.getElementById('isbn');
const output = document.getElementById('output-container');
const button = document.getElementById('submit');



button.addEventListener('click', addBook);


function addBook(e) {


    if (author.value === '' && title.value === '' && isbn.value === '') {

        //do nothing
    }

    else {


        //create elements 

        const div = document.createElement('div');
        div.classList.add('table-title');
        div.classList.add('pos');

        const img = document.createElement('img');
        img.classList.add('image-check');
        img.src = "images/BookMark.png";

        const h31 = document.createElement('h3');
        h31.classList.add('adjust');
        const h32 = document.createElement('h3');
        h32.classList.add('adjust');
        const h33 = document.createElement('h3');
        h33.classList.add('adjust');



        //append elements 

        div.appendChild(img);
        div.appendChild(h31);
        div.appendChild(h32);
        div.appendChild(h33);

        output.appendChild(div);


        h31.innerHTML = author.value;
        h32.innerHTML = title.value;
        h33.innerHTML = isbn.value;



        author.value = '';
        title.value = '';
        isbn.value = '';



    }
}


