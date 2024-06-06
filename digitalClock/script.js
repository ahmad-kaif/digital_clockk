const clock = document.getElementById('clock');
const day = document.getElementById('day');

// let date = new Date();
// console.log(date.toLocaleTimeString());

//setInterval method 
setInterval(function(){
    let date = new Date();
    // console.log(date);
    // console.log(date.toLocaleTimeString());
    day.innerHTML = date.toDateString();
    clock.innerHTML = date.toLocaleTimeString()
},1000) //1000 ms = 1s
