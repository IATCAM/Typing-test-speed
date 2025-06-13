
const timing = document.querySelector('#timer');
const tArea = document.querySelector('#textareaa');
const examplee = document.querySelector('#main h3').innerHTML;
const reset = document.querySelector('#reset');
const mainn = document.querySelector('#main');

let timer = [0, 0, 0, 0];
let timeRunning = false;
let interval;


function leadZero(time){
    if(time <= 9){
        time = "0" + time;
    }
    return time;
}

function runTimer(){
    let currentTime = leadZero(timer[0]) + ":" + leadZero(timer[1] ) + ":" + leadZero(timer[2]);
    timing.innerHTML = currentTime;

    timer[3]++;
    timer[0] = Math.floor((timer[3] / 100) / 60);
    timer[1] = Math.floor(timer[3] / 100) - (timer[0] * 60);
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
}


function check(){
    let textEnter = tArea.value;
    let orginal = examplee.substring(0,textEnter.length);

    if(textEnter == examplee){
        mainn.style.borderColor = "green";
        clearInterval(interval);
    }
    else{
        if(textEnter == orginal){
            mainn.style.borderColor = "yellow";
        }
        else{
            mainn.style.borderColor = "red";
        }
    }
}


function strat(){
    let textAreaLength = tArea.value.length;
    
    if(textAreaLength == 0 && !timeRunning){
        timeRunning = true;
        interval = setInterval(runTimer , 10)
    }
}

function restart(){
    clearInterval(interval);   
    interval = null;
    timer = [0, 0, 0, 0];
    timeRunning = false;
    tArea.value = "";
    timing.innerHTML = "00:00:00";
    mainn.style.borderColor = "gray";
}


tArea.addEventListener('keypress' , strat);
tArea.addEventListener('keyup' , check);
reset.addEventListener('click' , restart);
