var seconds = 00;
var tens = 00;
var appendTens    = document.getElementById("tens");
var appendSeconds = document.getElementById("seconds");
var buttonStart   = document.getElementById ("button-start");
var buttonStop    = document.getElementById("button-stop");
var buttonReset   = document.getElementById("button-reset")
var interval; // to store timer values

// this function will run when click on start 


function startTimer() {
    tens++;

if (tens< 9) {
    appendTens.innerHTML="0" + tens;
    }
if ( tens > 9) {
    appendTens.innerHTML = tens;
    } 
if (tens > 99) {
    seconds++;
    appendSeconds.innerHTML = "0" + seconds;
    tens = 0;
    appendTens.innerHTML = "0" + 0;
    }
if (seconds > 9) {
    appendSeconds.innerHTML = seconds;
    }
}
    buttonStart.onclick = function() {
        interval=setInterval(startTimer);
    };

    buttonStop.onclick =function() {
        clearInterval=(interval);

    }

    buttonReset.onclick = function(){
        clearInterval(interval);
        tens="00";
        seconds="00";
        appendSeconds.innerHTML= seconds;
        appendTens.innerHTML=tens;
    };
    
































// let  [seconds, minutes] = [0,0];
// let timerRef = getElementById("seconds, tens");
// let int = null;

// document.getElementById ("button-start") addEventListener("click",()=>{
//     if (int!==null){
//      clearInterval(int);
//     }
//     int = setInterval(seconds, 10);
// });

// document.getElementById('button-reset').addEventListener('click', ()=>{
//     clearInterval(int);
//     [minutes, seconds] = [0,0,];
//     timerRef.innerHTML = " 00 : 00  ";
// });

// function displayTimer(){
    

//         if(seconds == 60){
//             seconds = 0;
//             minutes++;

//             if(minutes == 60){
//                 minutes = 0;
//                 hours++;
//             }
//         }
//     }

//  let h = hours < 10 ? "0" + hours : hours;
//  let m = minutes < 10 ? "0" + minutes : minutes;
//  let s = seconds < 10 ? "0" + seconds : seconds;

//  timerRef.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;


// // var d = 0;
// // window.setInterval(function () {
// //   d = d + 1;
// //   document.getElementById("seconds").innerHTML =
// //      d
// // }, 1000)

// // function start_button() {
// //   document.getElementById(button-start);
// //   onclick (d);
// // }

// // console.log(d)