/* ==========================
   STICKY HEADER
========================== */

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 100) {

        header.style.background = "#0f172a";
        header.style.padding = "0px";

    } else {

        header.style.background = "rgba(0,0,0,.6)";

    }

});


/* ==========================
   SMOOTH SCROLL
========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* ==========================
   SCROLL ANIMATION
========================== */

const observer = new IntersectionObserver(

(entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

},
{
    threshold: 0.2
}

);


const hiddenElements = document.querySelectorAll(
".room-card,.facility,.review,.gallery-grid img,.about-content,.about-image"
);

hiddenElements.forEach((el) => {

    el.classList.add("hidden");

    observer.observe(el);

});


/* ==========================
   GALLERY HOVER ZOOM
========================== */

const galleryImages =
document.querySelectorAll(".gallery-grid img");

galleryImages.forEach((img) => {

    img.addEventListener("mouseenter", () => {

        img.style.transform = "scale(1.08)";

    });

    img.addEventListener("mouseleave", () => {

        img.style.transform = "scale(1)";

    });

});


/* ==========================
   COUNTER ANIMATION
========================== */

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target =
        +counter.getAttribute("data-target");

        const current =
        +counter.innerText;

        const increment =
        target / 100;

        if (current < target) {

            counter.innerText =
            `${Math.ceil(current + increment)}`;

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target;

        }

    };

    updateCounter();

});


/* ==========================
   BACK TO TOP BUTTON
========================== */

const topBtn =
document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.classList.add("top-btn");

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});


/* ==========================
   MOBILE MENU
========================== */

const menuBtn =
document.createElement("div");

menuBtn.innerHTML =
'<i class="fa-solid fa-bars"></i>';

menuBtn.classList.add("menu-btn");

document.querySelector(".logo")
.after(menuBtn);

const nav =
document.querySelector("nav ul");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

});


/* ==========================
   PRELOADER
========================== */

window.addEventListener("load", () => {

    const loader =
    document.createElement("div");

    loader.className = "loader";

    document.body.appendChild(loader);

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.remove();

        }, 500);

    }, 800);

});


/* ==========================
   ROOM CARD EFFECT
========================== */

const cards =
document.querySelectorAll(".room-card");

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const x =
        e.offsetX;

        const y =
        e.offsetY;

        card.style.transform =
        `rotateY(${x/25-6}deg)
         rotateX(${y/25-6}deg)
         translateY(-10px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
        "rotateY(0deg) rotateX(0deg)";

    });

});


/* ==========================
   ACTIVE MENU ON SCROLL
========================== */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop - 150;

        const sectionHeight =
        section.clientHeight;

        if (
            pageYOffset >= sectionTop
            &&
            pageYOffset <
            sectionTop + sectionHeight
        ) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active-link");

        if (
            link.getAttribute("href")
            === "#" + current
        ) {

            link.classList.add("active-link");

        }

    });

});


/* ==========================
   FADE IN HERO
========================== */

window.addEventListener("load", () => {

    const hero =
    document.querySelector(".hero-content");

    hero.style.opacity = "0";

    hero.style.transform =
    "translateY(40px)";

    setTimeout(() => {

        hero.style.transition =
        "all 1s ease";

        hero.style.opacity = "1";

        hero.style.transform =
        "translateY(0)";

    }, 300);

});


console.log(
"Luxury Hotel Website Loaded Successfully"
);
/* ==========================
   check availibility(whatsapp)
========================== */

function sendWhatsApp() {

    let checkin = document.getElementById("checkin").value;
    let checkout = document.getElementById("checkout").value;
    let guests = document.getElementById("guests").value;

    let message =
`Namaste Flora Residency,

I would like to book a room.

Check-In Date: ${checkin}
Check-Out Date: ${checkout}
Number of Guests: ${guests}

Please let me know room availability and price.

Thank you.`;

    let phone = "9779846880753"; // आफ्नो WhatsApp नम्बर राख

    let url =
`https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
}