//grab elements 

const second = document.getElementById('second');
const minute = document.getElementById('minute');
const hour = document.getElementById('hour');
const start = document.getElementById('button');

//set variables 
let secondValue = 6;
let minuteValue = 6;
let hourValue = 0.5;
let secondCounter = 0;
let minuteCounter = 0;
let hourCounter = 0;

//add event listener
start.addEventListener('click', begin);


function begin(e) {

    setInterval(sec, 1000); //set interval as 1 second (1000ms)

    function sec() {

        second.style.transform = `rotate(${secondValue}deg)`; // rotate 6 degrees after 1 second
        secondValue += 6;
        secondCounter++;

        if (secondCounter === 60) { // if 60 second is passed rotate minute hand by 6 degrees and hour hand by 0.5 degrees

            //for minute 
            minute.style.transform = `rotate(${minuteValue}deg)`;
            minuteValue += 6;
            minuteCounter++;
            secondCounter = 0;


            //for hour
            hour.style.transform = `rotate(${hourValue}deg)`;
            hourValue += 0.5;
            hourCounter++;

            if (minuteCounter === 60) { // if minute sets  60, reset the counter 

                minuteCounter = 0;
            }


        }
    }

}



