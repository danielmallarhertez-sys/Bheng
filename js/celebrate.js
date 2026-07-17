/* =====================================
   BIRTHDAY CELEBRATION SCRIPT
===================================== */


/* ==========================
   VARIABLES
========================== */

let giftOpened = false;

let musicPlaying = false;

const music = document.getElementById("birthdayMusic");



/* ==========================
   OPEN GIFT
========================== */


function openGift(){

    if(giftOpened) return;


    giftOpened=true;


    const gift =
    document.getElementById("giftBox");


    gift.classList.add("open");


    createConfetti();


    setTimeout(()=>{


        document.getElementById("gift-area")
        .style.display="none";


        document.getElementById("surpriseContent")
        .style.display="block";


        startMusic();

        createBalloons();

        createSparkles();

        createHearts();

        typeLetter();

        startSlideshow();


    },1200);


}





/* ==========================
   MUSIC
========================== */


function startMusic(){

music.play()
.then(()=>{

musicPlaying=true;

})
.catch(()=>{

console.log(
"Click required for music"
);

});

}



function toggleMusic(){


if(musicPlaying){

music.pause();

musicPlaying=false;

}

else{

music.play();

musicPlaying=true;

}


}





/* ==========================
   CONFETTI
========================== */


function createConfetti(){


const box =
document.getElementById(
"confetti-container"
);



for(let i=0;i<200;i++){


let c=document.createElement("div");


c.className="confetti";


c.style.left=
Math.random()*100+"%";


c.style.top="-20px";


c.style.background=
randomColor();


c.style.animationDuration=
(3+Math.random()*5)+"s";


c.style.animationDelay=
Math.random()*3+"s";


box.appendChild(c);


}


}



function randomColor(){

const colors=[

"#e91e63",
"#ff4081",
"#ffd54f",
"#4fc3f7",
"#81c784",
"#ba68c8"

];


return colors[
Math.floor(
Math.random()*colors.length
)
];

}





/* ==========================
   BALLOONS
========================== */


function createBalloons(){


const container =
document.getElementById(
"balloons"
);



for(let i=0;i<20;i++){


let b=document.createElement("div");


b.className="balloon";


b.style.left=
Math.random()*100+"%";


b.style.background=
randomColor();


b.style.animationDelay=
Math.random()*8+"s";


container.appendChild(b);


}


}





/* ==========================
   SPARKLES
========================== */


function createSparkles(){


const container =
document.getElementById(
"sparkles"
);



for(let i=0;i<50;i++){


let s=document.createElement("div");


s.className="sparkle";


s.innerHTML="✨";


s.style.left=
Math.random()*100+"%";


s.style.top=
Math.random()*100+"%";


container.appendChild(s);


}


}





/* ==========================
   HEARTS
========================== */


function createHearts(){


const container =
document.getElementById(
"hearts"
);



setInterval(()=>{


let h=document.createElement("div");


h.className="heart";


h.innerHTML="❤️";


h.style.left=
Math.random()*100+"%";


h.style.fontSize=
(15+Math.random()*30)+"px";


container.appendChild(h);



setTimeout(()=>{

h.remove();

},10000);



},400);


}





/* ==========================
   TYPING LETTER
========================== */


const message = `

Happy Birthday! 🎂 Bheng💕


Today is your special day.


May your life always be filled with:

❤️ Love

😊 Happiness

🌟 Success

🎉 Beautiful memories


Keep smiling and never stop dreaming.


Happy Birthday! 🎂💕

`;



let letterPosition=0;



function typeLetter(){


const output =
document.getElementById(
"typedLetter"
);



function write(){


if(letterPosition < message.length){


output.innerHTML +=
message.charAt(letterPosition);


letterPosition++;


setTimeout(write,45);


}


}


write();


}





/* ==========================
   ENVELOPE
========================== */


function openLetter(){


const envelope =
document.querySelector(
".envelope"
);


envelope.classList.toggle(
"open"
);


}





/* ==========================
   PHOTO SLIDESHOW (20 PHOTOS)
========================== */


const photos = [

"images/photo1.jpg",
"images/photo2.jpg",
"images/photo3.jpg",
"images/photo4.jpg",
"images/photo5.jpg",
"images/photo6.jpg",
"images/photo7.jpg",
"images/photo8.jpg",
"images/photo9.jpg",
"images/photo10.jpg",
"images/photo11.jpg",
"images/photo12.jpg",
"images/photo13.jpg",
"images/photo14.jpg",
"images/photo15.jpg",
"images/photo16.jpg",
"images/photo17.jpg",
"images/photo18.jpg",
"images/photo19.jpg",
"images/photo20.jpg",
"images/photo21.jpg",
"images/photo22.jpg",   
"images/photo23.jpg",
"images/photo24.jpg",
"images/photo25.jpg",   
"images/photo26.jpg"

];


let currentPhoto = 0;

let slideshowTimer = null;



function startSlideshow(){


currentPhoto = 0;


// show first picture

document.getElementById("slideImage").src =
photos[currentPhoto];



slideshowTimer = setInterval(()=>{


currentPhoto++;



// AFTER PHOTO 20 FINISHES

if(currentPhoto >= photos.length){


finishSlideshow();


return;


}



changePhoto();



},4000);


}





function changePhoto(){


const image =
document.getElementById("slideImage");



image.style.opacity = 0;



setTimeout(()=>{


image.src = photos[currentPhoto];


image.style.opacity = 1;


},500);


}





function previousPhoto(){


currentPhoto--;


if(currentPhoto < 0){

currentPhoto = photos.length - 1;

}


changePhoto();

}




function nextPhoto(){


currentPhoto++;


if(currentPhoto >= photos.length){

currentPhoto = photos.length - 1;

}


changePhoto();

}





function finishSlideshow(){

    clearInterval(slideshowTimer);

    slideshowTimer = null;


    // Stop birthday music

    const music =
    document.getElementById("birthdayMusic");


    music.pause();

    music.currentTime = 0;

    musicPlaying = false;



    // Hide photos

    document.querySelector(".photo-section")
    .style.display="none";



    // Show video

    const gallery =
    document.getElementById("videoGallery");


    const video =
    document.getElementById("birthdayVideo");


    const source =
    document.getElementById("videoSource");



    gallery.style.display="block";



    source.src="videos/video1.mp4";


    video.load();



    // Enable video sound

    video.muted = false;

    video.volume = 1;



    video.play()

    .then(()=>{

        console.log("Video playing with sound");

    })

    .catch(error=>{

        console.log("Video sound blocked:",error);

    });


}



/* ==========================
   VIDEO PLAYLIST (10 VIDEOS)
========================== */

let currentVideo = 1;
const totalVideos = 10;


function playBirthdayVideo(){

    const video =
    document.getElementById("birthdayVideo");


    const source =
    document.getElementById("videoSource");


    source.src="videos/video1.mp4";


    video.load();


    video.muted=true;


    video.classList.add("show");


    video.play()
    .then(()=>{

        console.log("Video started");

    })
    .catch(error=>{

        console.log("Autoplay blocked:",error);

    });


}




// next video when finished

document.addEventListener("DOMContentLoaded",()=>{


    const video = document.getElementById("birthdayVideo");


    video.addEventListener("ended",()=>{


        currentVideo++;


        if(currentVideo <= totalVideos){


            const source =
            document.getElementById("videoSource");


            source.src =
            "videos/video" + currentVideo + ".mp4";


            video.load();


            video.muted = true;


            video.play();


            updateVideoText();


        }


    });


});





function updateVideoText(){


    const text =
    document.getElementById("videoNumber");


    if(text){

        text.innerHTML =
        "🎥 Video "
        + currentVideo
        + " / "
        + totalVideos;

    }

}
