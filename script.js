document.addEventListener("DOMContentLoaded", () => {

    const hero = document.querySelector(".hero");
    const button = document.getElementById("openButton");
    const content = document.getElementById("content");

    //==============================
    // DESCHIDERE INVITAȚIE
    //==============================

    if (button && hero && content) {

        button.addEventListener("click", () => {

            const plane = document.getElementById("plane");

            if (plane) {

                const rect = button.getBoundingClientRect();

                plane.style.left = rect.left + rect.width / 2 + "px";
                plane.style.top = rect.top + 15 + "px";
                plane.style.opacity = "1";

                plane.animate(
                    [
                        {
                            transform: "translate(0,0) rotate(0deg)"
                        },
                        {
                            transform: "translate(250px,-180px) rotate(-25deg)"
                        },
                        {
                            transform: "translate(550px,120px) rotate(18deg)"
                        },
                        {
                            transform: "translate(900px,-300px) rotate(35deg)"
                        }
                    ],
                    {
                        duration: 1800,
                        easing: "ease-in-out",
                        fill: "forwards"
                    }
                );
            }

            button.style.opacity = "0";

            setTimeout(() => {

                button.style.display = "none";

               hero.classList.add("open-book");
              setTimeout(() => {

    content.style.display = "block";

window.scrollTo({
    top: 0,
    behavior: "instant"
});

    requestAnimationFrame(() => {

        content.classList.add("show");

    });

},900); 

            }, 300);

        });

    }

    //==============================
    // MUZICĂ
    //==============================

    const musicBtn = document.getElementById("musicBtn");
    const music = document.getElementById("music");

    if (musicBtn && music) {

        let playing = false;

        musicBtn.addEventListener("click", () => {

            if (playing) {

                music.pause();

                musicBtn.innerHTML =
                    '<i class="fa-solid fa-music"></i>';

            } else {

                music.play();

                musicBtn.innerHTML =
                    '<i class="fa-solid fa-pause"></i>';

            }

            playing = !playing;

        });

    }

    //==============================
    // RSVP WHATSAPP
    //==============================

    const confirmBtn = document.getElementById("confirmBtn");
    const declineBtn = document.getElementById("declineBtn");

    const whatsappNumber = "40762648552";

    function sendWhatsApp(status) {

        const nume =
            document.getElementById("nume")?.value || "-";

        const adulti =
            document.getElementById("adulti")?.value || "0";

        const copii =
            document.getElementById("copii")?.value || "0";

        const meniu =
            document.getElementById("meniu")?.value || "-";

        const alergii =
            document.getElementById("alergii")?.value || "Nu";

        const mesaj =
            document.getElementById("mesaj")?.value || "-";

        const text =

`Bună, Bogdan și Ramona ❤️

Confirmare invitație:

Nume: ${nume}

Răspuns:
${status}

Adulți: ${adulti}

Copii: ${copii}

Meniu:
${meniu}

Alergii:
${alergii}

Mesaj:
${mesaj}

Vă mulțumim! 🤍`;

        const url =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(text);

        window.open(url, "_blank");

    }

    if (confirmBtn) {

        confirmBtn.addEventListener("click", () => {

            sendWhatsApp("♡ Vom fi alături de voi");

        });

    }

    if (declineBtn) {

        declineBtn.addEventListener("click", () => {

            sendWhatsApp("♡ Ne pare rău, nu putem ajunge");

        });

    }

});
const planes = document.querySelectorAll(".divider-plane");

planes.forEach((plane) => {

    plane.animate(
        [
            { transform: "translateY(0px)" },
            { transform: "translateY(-6px)" },
            { transform: "translateY(0px)" }
        ],
        {
            duration: 3500,
            iterations: Infinity,
            easing: "ease-in-out"
        }
    );

});
const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.3
});

document.querySelectorAll(".photo-frame").forEach(el=>{

    observer.observe(el);

});
const cards = document.querySelectorAll(".family-card, .event-card");

const cardObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.2
});

cards.forEach((card,index)=>{

    card.style.transitionDelay=`${index*0.15}s`;

    cardObserver.observe(card);

});