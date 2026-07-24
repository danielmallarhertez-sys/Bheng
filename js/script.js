// Floating Hearts

const hearts = document.getElementById("hearts");

function createHeart(){

    const h = document.createElement("div");

    h.className = "heart";

    h.innerHTML = "❤️";

    h.style.left = Math.random()*100 + "%";

    h.style.animationDuration = (6 + Math.random()*5) + "s";

    h.style.fontSize = (18 + Math.random()*25) + "px";

    hearts.appendChild(h);


    setTimeout(()=>{
        h.remove();
    },12000);

}


setInterval(createHeart,400);



// Countdown

const target = new Date("2026-07-24T12:30:00").getTime();

console.log("Target:", new Date(target));


function updateCountdown(){

    const now = new Date().getTime();

    const distance = target - now;


    console.log(distance);


    if(distance <= 0){

        window.location.href="celebrate.html";

        return;

    }


    document.getElementById("days").innerHTML =
    Math.floor(distance/(1000*60*60*24));


    document.getElementById("hours").innerHTML =
    Math.floor((distance%(1000*60*60*24))/(1000*60*60));


    document.getElementById("minutes").innerHTML =
    Math.floor((distance%(1000*60*60))/(1000*60));


    document.getElementById("seconds").innerHTML =
    Math.floor((distance%(1000*60))/1000);

}


updateCountdown();

setInterval(updateCountdown,1000);
