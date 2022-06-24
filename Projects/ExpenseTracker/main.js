//grab element

const description = document.getElementById('description');
const date = document.getElementById('date');
const amount = document.getElementById('amount');
const button = document.getElementById('button');
const table = document.getElementById('table');

button.addEventListener('click', add);

function add(e) {

    e.preventDefault();

    //create element 

    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    const del = document.createElement('button');
    del.textContent = "delete";


    //append elements

    table.firstElementChild.appendChild(tr);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(del);


    td1.innerText = description.value;
    td2.innerText = date.value;
    td3.innerText = `$${amount.value}`;

    del.addEventListener('click', remove);

    function remove(e) {

        tr.remove();
    }




    console.log(table);



}

console.log(table);





