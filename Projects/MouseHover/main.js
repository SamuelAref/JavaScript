//grab element

const circle = document.getElementById('circle');


circle.addEventListener('mouseover', increment);
circle.addEventListener('mouseleave', decrement);



function increment() {

    if (!circle.classList.contains('hover')) {
        circle.classList.add('hover');
    }
}

function decrement() {

    if (circle.classList.contains('hover')) {

        circle.classList.remove('hover');
    }
}


