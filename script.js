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
