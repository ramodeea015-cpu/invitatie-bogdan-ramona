document.addEventListener("DOMContentLoaded", () => {

    const hero = document.querySelector(".hero");
    const button = document.getElementById("openButton");
    const content = document.getElementById("content");

    //=====================================
    // DESCHIDERE INVITAȚIE
    //=====================================

    if (button && hero && content) {

        button.addEventListener("click", () => {

            const plane = document.getElementById("plane");

            if (plane) {

                const rect = button.getBoundingClientRect();

                plane.style.left = rect.left + rect.width / 2 + "px";
                plane.style.top = rect.top + "px";
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

                hero.classList.add("open-book");

            },300);

            setTimeout(() => {

                hero.style.display = "none";

                content.style.display = "block";

                requestAnimationFrame(()=>{

                    content.classList.add("show");

                });

                window.scrollTo({

                    top:0,
                    behavior:"instant"

                });

            },900);

        });

    }

    //=====================================
    // MUZICĂ
    //=====================================

    const musicBtn = document.getElementById("musicBtn");
    const music = document.getElementById("music");

    if(musicBtn && music){

        let playing = false;

        musicBtn.addEventListener("click",()=>{

            if(playing){

                music.pause();

                musicBtn.innerHTML='<i class="fa-solid fa-music"></i>';

            }else{

                music.play();

                musicBtn.innerHTML='<i class="fa-solid fa-pause"></i>';

            }

            playing=!playing;

        });

    }
   //=====================================
    // COUNTDOWN
    //=====================================

    const days = document.getElementById("days");
    const hours = document.getElementById("hours");
    const minutes = document.getElementById("minutes");
    const seconds = document.getElementById("seconds");

    if(days && hours && minutes && seconds){

        const weddingDate = new Date("June 6, 2026 16:00:00").getTime();

        function updateCountdown(){

            const now = new Date().getTime();

            const distance = weddingDate - now;

            if(distance <= 0){

                days.textContent = "0";
                hours.textContent = "0";
                minutes.textContent = "0";
                seconds.textContent = "0";

                return;

            }

            days.textContent = Math.floor(distance / (1000 * 60 * 60 * 24));

            hours.textContent = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

            minutes.textContent = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

            seconds.textContent = Math.floor((distance % (1000 * 60)) / 1000);

        }

        updateCountdown();

        setInterval(updateCountdown,1000);

    }

    //=====================================
    // ANIMAȚII LA SCROLL
    //=====================================

    const sections = document.querySelectorAll(".chapter");

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{
        threshold:0.15
    });

    sections.forEach(section=>{

        observer.observe(section);

    });

    //=====================================
    // RSVP
    //=====================================

    const confirmBtn = document.getElementById("confirmBtn");
    const declineBtn = document.getElementById("declineBtn");

    if(confirmBtn){

        confirmBtn.addEventListener("click",()=>{

            alert("Mulțumim! În versiunea finală, confirmarea va fi trimisă automat.");

        });

    }

    if(declineBtn){

        declineBtn.addEventListener("click",()=>{

            alert("Îți mulțumim că ne-ai anunțat!");

        });

    }

});