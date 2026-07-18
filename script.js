const navbar = document.querySelector(".navbar");

if (navbar) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.style.background = "rgba(0,0,0,.55)";
      navbar.style.backdropFilter = "blur(25px)";
      navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.3)";
    } else {
      navbar.style.background = "rgba(255,255,255,.05)";
      navbar.style.boxShadow = "none";
    }
  });
}
// =========================
// REVEAL ANIMATION
// =========================

const reveals = document.querySelectorAll(
  ".showreel-card,.statement-box,.video-card,.long-card,.stat,.social"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  {
    threshold: 0.15,
  }
);

reveals.forEach((item) => {
  item.style.opacity = "0";
  item.style.transform = "translateY(80px)";
  item.style.transition = "all .8s ease";
  observer.observe(item);
});

const showreelTitle = document.querySelector(".showreel-title");

window.addEventListener("scroll", () => {

    const scroll = window.scrollY;

    const opacity = Math.max(0.15, 1 - scroll / 500);
    const blur = Math.min(15, scroll / 40);

    showreelTitle.style.opacity = opacity;
    showreelTitle.style.filter = `blur(${blur}px)`;

});

if(window.innerWidth > 768){

    const showreelCard = document.querySelector(".showreel-card");
    const showreelSection = document.querySelector(".showreel-section");

    window.addEventListener("scroll", () => {

        const sectionTop = showreelSection.offsetTop;
        const sectionHeight = showreelSection.offsetHeight;

        let progress = (window.scrollY - sectionTop + 300) / sectionHeight;

        progress = Math.max(0, Math.min(progress, 1));

        const width = 50 + (progress * 20);

        showreelCard.style.width = width + "%";

    });

}
// =========================
// COUNTER ANIMATION
// =========================

const counters = document.querySelectorAll(".stat h1");

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const counter = entry.target;

      const text = counter.innerText;

      const finalNumber = parseInt(text);

      let current = 0;

      const increment = finalNumber / 60;

      const updateCounter = () => {
        current += increment;

        if (current < finalNumber) {
          counter.innerText = Math.floor(current) + "+";
          requestAnimationFrame(updateCounter);
        } else {
          counter.innerText = finalNumber + "+";
        }
      };

      updateCounter();

      counterObserver.unobserve(counter);
    });
  },
  {
    threshold: 0.5,
  }
);

counters.forEach((counter) => {
  counterObserver.observe(counter);
});

// =========================
// HERO PARALLAX
// =========================

const hero = document.querySelector(".hero video");

window.addEventListener("scroll", () => {
  let scroll = window.scrollY;

  if (hero) {
    hero.style.transform = `translateY(${scroll * 0.3}px) scale(1.1)`;
  }
});

// =========================
// VIDEO AUTOPLAY IN VIEW
// =========================

const videos = document.querySelectorAll("video");

const videoObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const video = entry.target;

      if (entry.isIntersecting) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  },
  {
    threshold: 0.5,
  }
);

videos.forEach((video) => {
  videoObserver.observe(video);
});

// =========================
// MAGNETIC BUTTON EFFECT
// =========================

const button = document.querySelector(".contact-btn");

if (button) {
  button.addEventListener("mousemove", (e) => {
    const rect = button.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    button.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "translate(0,0)";
  });
}

// =========================
// PARALLAX FOR CARDS
// =========================
const cards = document.querySelectorAll(
  ".video-card,.long-card,.showreel-card"
);

if (window.innerWidth > 768) {

  cards.forEach((card) => {

    card.addEventListener("mousemove", (e) => {

      const rect = card.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateY = (x / rect.width - 0.5) * 10;
      const rotateX = -(y / rect.height - 0.5) * 10;

      card.style.transform = `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.03)
      `;
    });

    card.addEventListener("mouseleave", () => {

      card.style.transform = `
        perspective(1000px)
        rotateX(0deg)
        rotateY(0deg)
        scale(1)
      `;
    });

  });

}
  // card.addEventListener("mouseleave", () => {
  //   card.style.transform = `
  //     perspective(1000px)
  //     rotateX(0deg)
  //     rotateY(0deg)
  //     scale(1)
  //   `;
  // });

// =========================
// FLOATING HERO TEXT
// =========================

const heroText = document.querySelector(".hero h1");

if (window.innerWidth > 768) {

  window.addEventListener("mousemove", (e) => {

    if (!heroText) return;

    const x = (e.clientX / window.innerWidth - 0.5) * 30;
    const y = (e.clientY / window.innerHeight - 0.5) * 30;

    heroText.style.transform = `translate(${x}px, ${y}px)`;

  });

}
// =========================
// SECTION TITLE REVEAL
// =========================

const titles = document.querySelectorAll(
  ".section-title,.big-text,.left h2"
);

const titleObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.letterSpacing = "0px";
      }
    });
  },
  {
    threshold: 0.2,
  }
);

titles.forEach((title) => {
  title.style.opacity = "0";
  title.style.letterSpacing = "10px";
  title.style.transition = "1s ease";

  titleObserver.observe(title);
});

// =========================
// LOADING SCREEN
// =========================

// window.addEventListener("load", () => {

//     const loader = document.createElement("div");

//     loader.innerHTML = `
//         <div class="loader-logo">
//             Aqdas Portfolio
//         </div>
//     `;

//     Object.assign(loader.style, {
//         position: "fixed",
//         inset: "0",
//         background: "#050505",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         zIndex: "999999",
//         transition: "opacity .5s ease",
//         opacity: "1",
//         padding: "20px"
//     });

//     document.body.appendChild(loader);

//     const logo = loader.querySelector(".loader-logo");

//     Object.assign(logo.style, {
//         fontFamily: "'Poppins', sans-serif",
//         fontWeight: "700",
//         fontSize: "clamp(1.8rem, 6vw, 4.5rem)",
//         letterSpacing: "clamp(-1px, -0.15vw, -3px)",
//         color: "#fff",
//         textAlign: "center",
//         lineHeight: "1.1",
//         whiteSpace: "normal",
//         maxWidth: "90vw",
//         wordBreak: "break-word",
//         userSelect: "none"
//     });

//     // Hide after 1 second
//     setTimeout(() => {

//         loader.style.opacity = "0";

//         setTimeout(() => {
//             loader.remove();
//         }, 500);

//     }, 500);

// });

// =========================
// SMOOTH ANCHOR LINKS
// =========================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// =========================
// CUSTOM CURSOR
// =========================

if (window.innerWidth > 768) {

  const cursor = document.createElement("div");

  cursor.style.width = "20px";
  cursor.style.height = "20px";
  cursor.style.borderRadius = "50%";
  cursor.style.background = "#ff6b2d";
  cursor.style.position = "fixed";
  cursor.style.pointerEvents = "none";
  cursor.style.zIndex = "999999";
  cursor.style.mixBlendMode = "difference";

  document.body.appendChild(cursor);

  window.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX - 10 + "px";
    cursor.style.top = e.clientY - 10 + "px";
  });

}


const preview = document.querySelector(".skill-preview");
const previewImg = document.querySelector(".skill-preview img");

const skills = document.querySelectorAll(".skill-track span[data-img]");

skills.forEach(skill => {

    skill.addEventListener("mouseenter", () => {

        previewImg.src = skill.dataset.img;

        preview.style.opacity = "1";
        preview.style.transform =
        "translate(-50%,-50%) scale(1) rotate(-8deg)";
    });

    skill.addEventListener("mouseleave", () => {

        preview.style.opacity = "0";

        preview.style.transform =
        "translate(-50%,-50%) scale(.6)";
    });

});

document.addEventListener("mousemove",(e)=>{

    preview.style.left = e.clientX + "px";
    preview.style.top = e.clientY + "px";

});

const ytCards = document.querySelectorAll(".video-card, .long-video-card");

const ytModal = document.querySelector(".video-modal");

const ytPlayer = document.getElementById("ytplayer");

const ytCloseBtn = document.querySelector(".close-video");

ytCards.forEach(card => {

    card.onclick = () => {

        const id = card.dataset.video;

        ytPlayer.src =
        `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;

        ytModal.classList.add("active");

    };

});

ytCloseBtn.onclick = () => {

    ytModal.classList.remove("active");

    ytPlayer.src = "";

};

ytModal.onclick = (e) => {

    if (e.target === ytModal) {

        ytModal.classList.remove("active");

        ytPlayer.src = "";

    }

};

document.querySelectorAll(".partner-card").forEach((card,index)=>{

    card.animate(

        [
            {
                transform:"translateY(0px)"
            },
            {
                transform:"translateY(-12px)"
            },
            {
                transform:"translateY(0px)"
            }

        ],

        {
            duration:3500 + index*400,
            iterations:Infinity,
            easing:"ease-in-out"
        }

    );

});

const menuBtn=document.querySelector(".menu-btn");
const navLinks=document.querySelector(".nav-links");

menuBtn.addEventListener("click",()=>{

    navLinks.classList.toggle("active");

});



const servicesSlider = document.querySelector(".services-slider");

servicesSlider.addEventListener("touchstart",()=>{

    servicesSlider.style.animationPlayState="paused";

});

servicesSlider.addEventListener("touchend",()=>{

    setTimeout(()=>{

        servicesSlider.style.animationPlayState="running";

    },1500);

});

/*=========================================
        LONG FORM INFINITE SLIDER
=========================================*/

/* ===========================
   LONG FORM SLIDER
=========================== */

const slider = document.querySelector(".long-slider");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

if(slider){

    const gap = 30;

    function getCardWidth(){

        const card = slider.querySelector(".long-video-card");

        return card.offsetWidth + gap;

    }

    function updateButtons(){

        prevBtn.style.opacity =
            slider.scrollLeft <= 10 ? ".35" : "1";

        nextBtn.style.opacity =
            slider.scrollLeft >= slider.scrollWidth - slider.clientWidth - 10
            ? ".35"
            : "1";

    }

    nextBtn.addEventListener("click",()=>{

        slider.scrollBy({

            left:getCardWidth(),

            behavior:"smooth"

        });

    });

    prevBtn.addEventListener("click",()=>{

        slider.scrollBy({

            left:-getCardWidth(),

            behavior:"smooth"

        });

    });

    slider.addEventListener("scroll",updateButtons);

    window.addEventListener("resize",updateButtons);

    updateButtons();

}

/*=========================
    SHORT FORM SLIDER
==========================*/

const shortSlider = document.querySelector(".video-slider");

const shortPrev = document.querySelector(".short-prev");

const shortNext = document.querySelector(".short-next");

if(shortSlider){

    function shortCardWidth(){

        const card = shortSlider.querySelector(".video-card");

        return card.offsetWidth + 32;

    }

    shortNext.onclick = ()=>{

        shortSlider.scrollBy({

            left:shortCardWidth(),

            behavior:"smooth"

        });

    }

    shortPrev.onclick = ()=>{

        shortSlider.scrollBy({

            left:-shortCardWidth(),

            behavior:"smooth"

        });

    }

}
