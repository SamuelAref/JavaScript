

let button = document.getElementById("button");

button.onClick = function(){

    console.log('hello');
}

window.onload = function(){

    button.addEventListener('click', fun);

    interv = setInterval(fun, 2000); 

function fun(e){


    console.log('hi');
    clearInterval(interv);
}


}





