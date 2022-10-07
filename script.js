
const clock = document.getElementsByClassName('container');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const session = document.getElementById('session');


showTime = ()=> {
    let time = new Date();
    let hrs = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    if (hrs >= 12) {
        session.innerHTML = 'PM';
        
    }
    else {
        session.innerHTML = 'AM'
    }
    if(hrs > 12) {
       hrs = hrs -  12;
    }
    hrs = (hrs < 10) ? "0" + hrs : hrs;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    if(hrs == 0) {
        hrs = 12;
    }


    hours.innerHTML = hrs;
    minutes.innerHTML = min;
    seconds.innerHTML = sec;

}

setInterval(showTime, 1000);




