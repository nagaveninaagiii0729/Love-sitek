/* =========================================================
   KUSUU × NAAGII
   VINTAGE LOVE MAGAZINE
========================================================= */


// =========================================================
// LOADER
// =========================================================

window.addEventListener("load", () => {

    setTimeout(() => {

        document
            .getElementById("loader")
            .classList.add("hide");

    }, 1600);

});


// =========================================================
// PAGE NAVIGATION
// =========================================================

function goToPage(index) {

    const pages = document.querySelectorAll(".page");

    if (!pages[index]) return;

    pages[index].scrollIntoView({

        behavior: "smooth"

    });

}


// =========================================================
// MUSIC
// =========================================================

const music = document.getElementById("music");

function toggleMusic() {

    const page = document.querySelector(".music-page");

    if (music.paused) {

        music.play()
            .then(() => {

                page.classList.add("playing");

            })
            .catch(() => {

                alert(
                    "Add your music file inside the music folder first."
                );

            });

    } else {

        music.pause();

        page.classList.remove("playing");

    }

}


// =========================================================
// LOVE LETTER
// =========================================================

function openLetter() {

    const envelope =
        document.getElementById("envelope");

    envelope.classList.toggle("open");

}


// =========================================================
// RANDOM STAR PARTICLES
// =========================================================

function createStars() {

    const page =
        document.querySelector(".cover-page");

    if (!page) return;

    for (let i = 0; i < 35; i++) {

        const star =
            document.createElement("span");

        star.innerHTML =
            Math.random() > .5 ? "✦" : "·";

        star.style.position = "absolute";

        star.style.left =
            Math.random() * 100 + "%";

        star.style.top =
            Math.random() * 100 + "%";

        star.style.color =
            "rgba(205,180,130,.55)";

        star.style.fontSize =
            (Math.random() * 8 + 4) + "px";

        star.style.animation =
            `starFloat ${
                Math.random() * 4 + 3
            }s infinite ease-in-out`;

        star.style.animationDelay =
            Math.random() * 4 + "s";

        page.appendChild(star);

    }

}

createStars();


// =========================================================
document.addEventListener("mousemove", (event) => {

    if (window.innerWidth < 700) return;

    const sparkle =
        document.createElement("span");

    sparkle.innerHTML = "✦";

    sparkle.style.position = "fixed";

    sparkle.style.left =
        event.clientX + "px";

    sparkle.style.top =
        event.clientY + "px";

    sparkle.style.pointerEvents = "none";

    sparkle.style.zIndex = "999";

    sparkle.style.color =

// =========================================================
// EXTRA ANIMATIONS
// =========================================================

const extraStyles =
document.createElement("style");

extraStyles.innerHTML = `

@keyframes cursorSparkle {

    0% {

        opacity: 1;

        transform:
            translate(-50%,-50%)
            scale(1)
            rotate(0deg);

    }

    100% {

        opacity: 0;

        transform:
            translate(
                ${Math.random() * 30 - 15}px,
                ${Math.random() * 30 - 15}px
            )
            scale(0)
            rotate(180deg);

    }

}

@keyframes starFloat {

    0%,100% {

        opacity: .2;

        transform: scale(.7);

    }

    50% {

        opacity: 1;

        transform: scale(1.4);

    }

}

`;

document.head.appendChild(extraStyles);


// =========================================================
// SCROLL OBSERVER
// =========================================================

const observer =
new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add(
                    "visible"
                );

            }

        });

    },

    {
        threshold: .15
    }

);


document
    .querySelectorAll(".timeline-card, .thing-card, .scrap-photo")
    .forEach(element => {

        observer.observe(element);

    });


// =========================================================
// IMAGE FALLBACK
// =========================================================

document
    .querySelectorAll("img")
    .forEach(img => {

        img.addEventListener("error", () => {

            img.style.background =
                "linear-gradient(135deg,#cbb99a,#80604c)";

            img.alt =
                "Add your photograph here";

        });

    });


// =========================================================
// PREVENT EMPTY MUSIC BUTTON ERRORS
// =========================================================

music.addEventListener("error", () => {

    console.log(
        "Music file not found. Add your MP3 to /music."
    );

});
/* =========================================================
   CINEMATIC MAGAZINE OPENING
========================================================= */

function openMagazine() {

    const opening = document.getElementById("opening");
    const envelope = document.querySelector(".envelope");
    const seal = document.getElementById("waxSeal");

    if (!opening || !envelope) return;

    /* break wax */
    if (seal) {
        seal.style.transform =
            "translateX(-50%) scale(1.25) rotate(-12deg)";

        seal.style.opacity = "0";

        seal.style.transition =
            "all .45s ease";
    }

    /* open envelope */
    setTimeout(() => {

        envelope.classList.add("open");

    }, 350);


    /* dramatic pause */
    setTimeout(() => {

        opening.classList.add("opening-hidden");

        document.body.classList.add("magazine-unlocked");

        window.scrollTo({
            top: 0,
            behavior: "instant"
        });

    }, 1700);

}
/* =========================================================
   KUSUU × NAAGII
   THE LOVE EDITION — JAVASCRIPT
   ========================================================= */


/* ================= LOADER ================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader = document.getElementById("loader");

        if (loader) {
            loader.style.opacity = "0";
            loader.style.pointerEvents = "none";

            setTimeout(() => {
                loader.remove();
            }, 1000);
        }

    }, 1200);

});


/* ================= MAGAZINE OPENING ================= */

function openMagazine(){

    const opening = document.getElementById("opening");
    const nav = document.getElementById("nav");

    if(!opening) return;

    opening.classList.add("opening-animation");

    setTimeout(() => {

        opening.classList.add("hide");

        if(nav){
            nav.classList.add("visible");
        }

        document.body.classList.add("magazine-open");

    }, 1400);

}


/* ================= PAGE NAVIGATION ================= */

const pages = Array.from(document.querySelectorAll(".page"));

let currentPage = 0;
let isTurning = false;

function goTo(index){

    if(index < 0 || index >= pages.length) return;
    if(index === currentPage) return;
    if(isTurning) return;

    const oldPage = pages[currentPage];
    const newPage = pages[index];

    const direction =
        index > currentPage ? "next" : "prev";

    isTurning = true;

    oldPage.classList.remove("active");

    newPage.classList.add("active");

    newPage.style.animation =
        direction === "next"
        ? "pageEnterNext .75s ease forwards"
        : "pageEnterPrev .75s ease forwards";

    currentPage = index;

    setTimeout(() => {

        newPage.style.animation = "";

        isTurning = false;

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    }, 760);

}


/* ================= KEYBOARD CONTROL ================= */

document.addEventListener("keydown", (event) => {

    if(event.key === "ArrowRight"){
        goTo(currentPage + 1);
    }

    if(event.key === "ArrowLeft"){
        goTo(currentPage - 1);
    }

});


/* ================= PAGE TURN ANIMATIONS ================= */

const pageAnimationStyle = document.createElement("style");

pageAnimationStyle.innerHTML = `

@keyframes pageEnterNext{

    0%{
        opacity:0;
        transform:translateX(80px) rotateY(-10deg);
    }

    100%{
        opacity:1;
        transform:translateX(0) rotateY(0);
    }

}

@keyframes pageEnterPrev{

    0%{
        opacity:0;
        transform:translateX(-80px) rotateY(10deg);
    }

    100%{
        opacity:1;
        transform:translateX(0) rotateY(0);
    }

}

`;

document.head.appendChild(pageAnimationStyle);


/* ================= TOUCH SWIPE ================= */

let touchStartX = 0;
let touchEndX = 0;

document.addEventListener("touchstart", (event) => {

    touchStartX = event.changedTouches[0].screenX;

}, {passive:true});


document.addEventListener("touchend", (event) => {

    touchEndX = event.changedTouches[0].screenX;

    const difference =
        touchStartX - touchEndX;

    if(Math.abs(difference) < 60) return;

    if(difference > 0){
        goTo(currentPage + 1);
    }
    else{
        goTo(currentPage - 1);
    }

}, {passive:true});


/* ================= MUSIC ================= */

const music = document.getElementById("music");

let musicPlaying = false;

function toggleMusic(){

    if(!music) return;

    if(musicPlaying){

        music.pause();

        musicPlaying = false;

        updateMusicButton(false);

    }
    else{

        music.play()
            .then(() => {

                musicPlaying = true;

                updateMusicButton(true);

            })
            .catch(() => {

                alert(
                    "Add your song as:\n\nmusic/our-song.mp3"
                );

            });

    }

}


function updateMusicButton(playing){

    const button =
        document.querySelector(".music-button");

    if(!button) return;

    button.innerHTML =
        playing ? "Ⅱ" : "♫";

    button.classList.toggle(
        "playing",
        playing
    );

}


/* ================= AUTO UPDATE MUSIC BUTTON ================= */

if(music){

    music.addEventListener("play", () => {

        musicPlaying = true;

        updateMusicButton(true);

    });

    music.addEventListener("pause", () => {

        musicPlaying = false;

        updateMusicButton(false);

    });

}


/* ================= SECRET K ================= */

function openSecret(){

    const overlay =
        document.getElementById("secretOverlay");

    if(overlay){
        overlay.classList.add("open");
    }

}


function closeSecret(){

    const overlay =
        document.getElementById("secretOverlay");

    if(overlay){
        overlay.classList.remove("open");
    }

}


/* ================= CLOSE SECRET WITH ESC ================= */

document.addEventListener("keydown", (event) => {

    if(event.key === "Escape"){
        closeSecret();
    }

});


/* ================= CLOSE SECRET OUTSIDE PAPER ================= */

const secretOverlay =
    document.getElementById("secretOverlay");

if(secretOverlay){

    secretOverlay.addEventListener("click", (event) => {

        if(event.target === secretOverlay){
            closeSecret();
        }

    });

}


/* ================= IMAGE FALLBACK ================= */

document.querySelectorAll("img").forEach((image) => {

    image.addEventListener("error", () => {

        image.style.opacity = "0";

        image.style.background =
            "#cdbb9d";

    });

});


/* ================= COVER IMAGE EFFECT ================= */

const coverImage =
    document.querySelector(".cover-photo img");

if(coverImage){

    coverImage.addEventListener("mousemove", (event) => {

        const rect =
            coverImage.getBoundingClientRect();

        const x =
            ((event.clientX - rect.left) / rect.width - .5) * 8;

        const y =
            ((event.clientY - rect.top) / rect.height - .5) * 8;

        coverImage.style.transform =
            `scale(1.04) translate(${x}px,${y}px)`;

    });

    coverImage.addEventListener("mouseleave", () => {

        coverImage.style.transform =
            "scale(1)";

    });

}


/* ================= PHOTO HOVER ================= */

document.querySelectorAll(".photo-grid img")
.forEach((photo) => {

    photo.addEventListener("mouseenter", () => {

        photo.style.zIndex = "20";

    });

    photo.addEventListener("mouseleave", () => {

        photo.style.zIndex = "1";

    });

});


/* ================= RANDOM STAR TWINKLE ================= */

const starElements =
    document.querySelectorAll(
        ".stars i, .universe-stars"
    );

starElements.forEach((star, index) => {

    star.style.animation =
        `twinkle ${2 + index % 4}s ease-in-out infinite`;

});


const starAnimation =
    document.createElement("style");

starAnimation.innerHTML = `

@keyframes twinkle{

    0%,100%{
        opacity:.25;
        transform:scale(.8);
    }

    50%{
        opacity:1;
        transform:scale(1.3);
    }

}

`;

document.head.appendChild(starAnimation);


/* ================= VINYL PAUSE WHEN LEAVING PAGE ================= */

const vinyl =
    document.querySelector(".vinyl");

function updateVinyl(){

    if(!vinyl) return;

    if(currentPage === 8){
        vinyl.style.animationPlayState = "running";
    }
    else{
        vinyl.style.animationPlayState = "paused";
    }

}

const originalGoTo = goTo;


/* ================= FINAL PAGE EFFECT ================= */

const finalPage =
    document.querySelector(".final-page");

if(finalPage){

    const observer =
        new MutationObserver(() => {

            if(finalPage.classList.contains("active")){

                document.body.classList.add(
                    "final-chapter"
                );

            }
            else{

                document.body.classList.remove(
                    "final-chapter"
                );

            }

        });

    observer.observe(finalPage,{
        attributes:true,
        attributeFilter:["class"]
    });

}


/* ================= CONSOLE EASTER EGG ================= */

console.log(`
╔══════════════════════════════════╗
       KUSUU × NAAGII
       THE LOVE EDITION
       
       12 · 11 · 2022 → ∞
╚══════════════════════════════════╝
`);


/* ================= START ================= */

if(pages.length){

    pages.forEach((page,index) => {

        page.classList.remove("active");

        if(index === 0){
            page.classList.add("active");
        }

    });

}
