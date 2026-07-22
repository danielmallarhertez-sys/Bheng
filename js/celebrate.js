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

function openGift() {

    if (giftOpened) return;

    giftOpened = true;

    document.getElementById("giftBox").classList.add("open");

    createConfetti();

    setTimeout(() => {

        document.getElementById("gift-area").style.display = "none";

        document.getElementById("surpriseContent").style.display = "block";

        startMusic();

        createBalloons();

        createSparkles();

        createHearts();

        typeLetter();

        startSlideshow();

    }, 1200);

}

/* ==========================
   MUSIC
========================== */

function startMusic() {

    music.currentTime = 0;

    music.play()
        .then(() => {

            musicPlaying = true;

        })
        .catch(() => {

            console.log("Music autoplay blocked.");

        });

}

function toggleMusic() {

    if (musicPlaying) {

        music.pause();

        musicPlaying = false;

    } else {

        music.play();

        musicPlaying = true;

    }

}

/* ==========================
   RANDOM COLOR
========================== */

function randomColor() {

    const colors = [

        "#e91e63",
        "#ff4081",
        "#ffd54f",
        "#4fc3f7",
        "#81c784",
        "#ba68c8"

    ];

    return colors[Math.floor(Math.random() * colors.length)];

}

/* ==========================
   CONFETTI
========================== */

function createConfetti() {

    const box = document.getElementById("confetti-container");

    for (let i = 0; i < 200; i++) {

        const c = document.createElement("div");

        c.className = "confetti";

        c.style.left = Math.random() * 100 + "%";

        c.style.top = "-20px";

        c.style.background = randomColor();

        c.style.animationDuration = (3 + Math.random() * 5) + "s";

        c.style.animationDelay = Math.random() * 3 + "s";

        box.appendChild(c);

    }

}

/* ==========================
   BALLOONS
========================== */

function createBalloons() {

    const container = document.getElementById("balloons");

    for (let i = 0; i < 20; i++) {

        const balloon = document.createElement("div");

        balloon.className = "balloon";

        balloon.style.left = Math.random() * 100 + "%";

        balloon.style.background = randomColor();

        balloon.style.animationDelay = Math.random() * 8 + "s";

        container.appendChild(balloon);

    }

}

/* ==========================
   SPARKLES
========================== */

function createSparkles() {

    const container = document.getElementById("sparkles");

    for (let i = 0; i < 50; i++) {

        const sparkle = document.createElement("div");

        sparkle.className = "sparkle";

        sparkle.innerHTML = "✨";

        sparkle.style.left = Math.random() * 100 + "%";

        sparkle.style.top = Math.random() * 100 + "%";

        container.appendChild(sparkle);

    }

}

/* ==========================
   HEARTS
========================== */

function createHearts() {

    const container = document.getElementById("hearts");

    setInterval(() => {

        const heart = document.createElement("div");

        heart.className = "heart";

        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * 100 + "%";

        heart.style.fontSize = (15 + Math.random() * 25) + "px";

        container.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 10000);

    }, 400);

}

/* ==========================
   LETTER
========================== */

const message = `
Happy 40th Birthday! 🎂💕 Bheng ❤️

Today we celebrate not only your birthday, but 40 wonderful years of your beautiful life journey.

From your family and friends, we want you to know how much you are loved and appreciated. Thank you for your kindness, your care, and for always being there for the people around you.

A special thank you for always supporting our parents, caring for them, and giving them love and strength. Your thoughtfulness means so much to our family, and we truly appreciate everything you do.

May your 40th year be filled with:

❤️ Endless love  
😊 Happiness every day  
🌟 Success in all your dreams  
✨ Good health and blessings  
🎉 Beautiful memories with the people who love you  

May you continue to smile, stay strong, and enjoy every precious moment of this new chapter.

Happy 40th Birthday, Bheng! 🎂💕
`;

let letterPosition = 0;

function typeLetter() {

    const output = document.getElementById("typedLetter");

    output.innerHTML = "";

    letterPosition = 0;

    function write() {

        if (letterPosition < message.length) {

            output.innerHTML += message.charAt(letterPosition);

            letterPosition++;

            setTimeout(write, 45);

        }

    }

    write();

}

/* ==========================
   ENVELOPE
========================== */

function openLetter() {

    document.querySelector(".envelope").classList.toggle("open");

}
/* ==========================
   PHOTO SLIDESHOW
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
    "images/photo26.jpg",
    "images/photo27.jpg",
    "images/photo28.jpg",
    "images/photo29.jpg",
    "images/photo30.jpg",
    "images/photo31.jpg",
    "images/photo32.jpg",
    "images/photo33.jpg",
    "images/photo34.jpg",
    "images/photo35.jpg",
    "images/photo36.jpg",
    "images/photo37.jpg",
    "images/photo38.jpg",
    "images/photo39.jpg",
    "images/photo40.jpg"
];

let currentPhoto = 0;
let slideshowTimer = null;

function startSlideshow() {

    clearInterval(slideshowTimer);

    currentPhoto = 0;

    const image = document.getElementById("slideImage");

    image.src = photos[currentPhoto];
    image.style.opacity = 1;

    slideshowTimer = setInterval(() => {

        currentPhoto++;

        if (currentPhoto >= photos.length) {

            finishSlideshow();
            return;

        }

        changePhoto();

    }, 4000);

}

function changePhoto() {

    const image = document.getElementById("slideImage");

    image.style.opacity = 0;

    setTimeout(() => {

        image.src = photos[currentPhoto];

        image.style.opacity = 1;

    }, 500);

}

function previousPhoto() {

    currentPhoto--;

    if (currentPhoto < 0) {

        currentPhoto = photos.length - 1;

    }

    changePhoto();

}

function nextPhoto() {

    currentPhoto++;

    if (currentPhoto >= photos.length) {

        currentPhoto = 0;

    }

    changePhoto();

}

// Array to hold the list of video paths from video1 to video10
const videoPlaylist = [];
for (let i = 1; i <= 10; i++) {
    videoPlaylist.push(`videos/video${i}.mp4`);
}

let currentVideoIndex = 0;

function finishSlideshow() {
    clearInterval(slideshowTimer);

    // If video sequence already played, keep only photos + music looping
    if (videoPlayed) {
        startSlideshow();
        return;
    }

    // Stop birthday music
    music.pause();
    music.currentTime = 0;
    musicPlaying = false;

    // Hide slideshow
    document.querySelector(".photo-section").style.display = "none";

    // Show video gallery
    document.getElementById("videoGallery").style.display = "block";

    // Reset index and start playing the first video
    currentVideoIndex = 0;
    playCurrentVideo();
}

function playCurrentVideo() {
    const video = document.getElementById("birthdayVideo");
    const source = document.getElementById("videoSource");

    if (currentVideoIndex < videoPlaylist.length) {
        source.src = videoPlaylist[currentVideoIndex];
        video.load();
        
        video.currentTime = 0;
        video.volume = 1;
        video.muted = false;
        video.classList.add("show");

        video.play()
            .then(() => {
                console.log(`Playing: ${videoPlaylist[currentVideoIndex]}`);
            })
            .catch(error => {
                console.log("Video autoplay blocked:", error);
            });
    } else {
        // Once video10 finishes, mark as played and restart slideshow
        console.log("All videos finished.");
        videoPlayed = true;
        
        // Hide video gallery and restart slideshow
        document.getElementById("videoGallery").style.display = "none";
        document.querySelector(".photo-section").style.display = "block";
        startSlideshow();
    }
}

// Automatically play the next video in sequence when the current one ends
document.getElementById("birthdayVideo").onended = function() {
    currentVideoIndex++;
    playCurrentVideo();
};
/* ==========================
   VIDEO CONTROL
========================== */

let videoPlayed = false;


document.addEventListener("DOMContentLoaded", () => {

    const video = document.getElementById("birthdayVideo");

    // Hide video when page loads
    document.getElementById("videoGallery").style.display = "none";


    video.addEventListener("ended", () => {


        // Remember video has finished
        videoPlayed = true;


        // Hide video
        document.getElementById("videoGallery").style.display = "none";


        // Reset video
        video.pause();
        video.currentTime = 0;


        // Show slideshow again
        document.querySelector(".photo-section").style.display = "block";


        // Start music again
        music.currentTime = 0;


        music.play()
        .then(()=>{

            musicPlaying = true;

        })
        .catch(err=>{

            console.log("Music blocked:",err);

        });


        // Restart photos
        startSlideshow();


    });


});
