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

Today we celebrate not only your birthday,
but 40 wonderful years of your beautiful life journey.

From your family and friends,
we want you to know how much you are loved and appreciated.

Thank you for your kindness,
your care,
and for always being there for everyone around you.

A special thank you for always supporting our parents,
caring for them,
and giving them love and strength.

Your thoughtfulness means so much to our family,
and we truly appreciate everything you do.

May your 40th year be filled with:

❤️ Endless Love

😊 Happiness Every Day

🌟 Success in All Your Dreams

✨ Good Health & Blessings

🎉 Beautiful Memories

May you continue to smile,
stay strong,
and enjoy every precious moment
of this new chapter.

Happy 40th Birthday! 🎂💕
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

/* ==========================
   VIDEO PLAYLIST
========================== */

const videoPlaylist = [
    "videos/video1.mp4",
    "videos/video2.mp4",
    "videos/video3.mp4",
    "videos/video4.mp4",
    "videos/video5.mp4",
    "videos/video6.mp4"
    // Add more if you have them:
    // "videos/video7.mp4",
    // "videos/video8.mp4",
    // "videos/video9.mp4",
    // "videos/video10.mp4"
];

let currentVideoIndex = 0;
let videosFinished = false;

/* ==========================
   START SLIDESHOW
========================== */

function startSlideshow() {

    clearInterval(slideshowTimer);

    currentPhoto = 0;

    const image = document.getElementById("slideImage");

    image.src = photos[currentPhoto];
    image.style.opacity = 1;

    slideshowTimer = setInterval(() => {

        currentPhoto++;

        if (currentPhoto >= photos.length) {

            // After all videos have already played once,
            // keep looping only the slideshow.
            if (videosFinished) {

                currentPhoto = 0;

                image.style.opacity = 0;

                setTimeout(() => {

                    image.src = photos[currentPhoto];
                    image.style.opacity = 1;

                }, 500);

                return;
            }

            finishSlideshow();
            return;
        }

        changePhoto();

    }, 4000);

}

/* ==========================
   CHANGE PHOTO
========================== */

function changePhoto() {

    const image = document.getElementById("slideImage");

    image.style.opacity = 0;

    setTimeout(() => {

        image.src = photos[currentPhoto];

        image.style.opacity = 1;

    }, 500);

}

/* ==========================
   PREVIOUS PHOTO
========================== */

function previousPhoto() {

    currentPhoto--;

    if (currentPhoto < 0) {

        currentPhoto = photos.length - 1;

    }

    changePhoto();

}

/* ==========================
   NEXT PHOTO
========================== */

function nextPhoto() {

    currentPhoto++;

    if (currentPhoto >= photos.length) {

        currentPhoto = 0;

    }

    changePhoto();

}
/* ==========================
   FINISH SLIDESHOW
========================== */

function finishSlideshow() {

    clearInterval(slideshowTimer);

    // Stop birthday music
    music.pause();
    music.currentTime = 0;
    musicPlaying = false;

    // Hide slideshow
    document.querySelector(".photo-section").style.display = "none";

    // Show video section
    document.getElementById("videoGallery").style.display = "block";

    // Start from first video
    currentVideoIndex = 0;

    playCurrentVideo();

}

/* ==========================
   PLAY CURRENT VIDEO
========================== */

function playCurrentVideo() {

    const video = document.getElementById("birthdayVideo");
    const source = document.getElementById("videoSource");

    // All videos finished
    if (currentVideoIndex >= videoPlaylist.length) {

        videosFinished = true;

        video.pause();
        video.currentTime = 0;

        document.getElementById("videoGallery").style.display = "none";
        document.querySelector(".photo-section").style.display = "block";

        // Restart birthday music
        music.currentTime = 0;

        music.play()
            .then(() => {

                musicPlaying = true;

            })
            .catch(err => {

                console.log(err);

            });

        // Restart slideshow
        startSlideshow();

        return;

    }

    source.src = videoPlaylist[currentVideoIndex];

    video.load();

    video.currentTime = 0;
    video.volume = 1;
    video.muted = false;

    video.classList.add("show");

    document.getElementById("videoNumber").innerHTML =
        "🎥 Video " +
        (currentVideoIndex + 1) +
        " / " +
        videoPlaylist.length;

    video.play()
        .then(() => {

            console.log("Playing Video " + (currentVideoIndex + 1));

        })
        .catch(err => {

            console.log(err);

        });

}

/* ==========================
   VIDEO EVENTS
========================== */

document.addEventListener("DOMContentLoaded", () => {

    const video = document.getElementById("birthdayVideo");

    // Hide video section when page loads
    document.getElementById("videoGallery").style.display = "none";

    video.addEventListener("ended", () => {

        currentVideoIndex++;

        playCurrentVideo();

    });

});
