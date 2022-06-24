//grab elements 

const container = document.getElementById('form-container');
const form = document.getElementById('form');
const title = document.getElementById('title');
const author = document.getElementById('author');
const isbn = document.getElementById('isbn');
const button = document.getElementById('button');
const table = document.getElementById('table');


button.addEventListener('click', addBook);

function addBook(e) {

    e.preventDefault();


    //create elements

    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    const del = document.createElement('button');
    const confirm = document.createElement('div');

    confirm.id = 'confirm';
    del.innerText = 'delete';
    del.style.backgroundColor = "red";
    del.style.color = "white";
    confirm.innerText = "Book added successfully";

    //append elements to table

    table.appendChild(tr);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(del);

    //give elements to td's

    td1.innerText = title.value;
    td2.innerText = author.value;
    td3.innerText = isbn.value;

    title.value = '';
    author.value = '';
    isbn.value = '';

    container.insertBefore(confirm, form);


    function time(ms) {

        return new Promise((resolve, reject) => {

            setTimeout(resolve, ms);
        });
    }


    time(3000)
        .then(() => {

            confirm.style.display = 'none';
        });


    del.addEventListener('click', d);


    function d(e) {

        table.removeChild(tr);


    }







}




