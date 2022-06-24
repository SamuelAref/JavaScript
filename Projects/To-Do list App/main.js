//grab elements

const input = document.getElementById('in');
const button = document.getElementById('button');
const table = document.getElementById('inner-table');


button.addEventListener('click', adder);


function adder(e) {







    const tr = document.createElement('tr');
    const td = document.createElement('td');
    const del = document.createElement('button');
    const comp = document.createElement('button');
    del.innerText = "delete";
    comp.innerText = "completed";
    del.style.position = "fixed";



    table.firstElementChild.appendChild(tr);
    tr.appendChild(td);
    tr.appendChild(comp);
    tr.appendChild(del);
    td.innerText = input.value;
    input.value = " ";


    del.addEventListener('click', d);
    comp.addEventListener('click', c);

    function c(e) {

        td.style.textDecoration = 'line-through';
    }

    function d(e) {

        tr.remove('td');
    }

    console.log(table);


}




