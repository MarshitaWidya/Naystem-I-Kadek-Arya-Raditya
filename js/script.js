AOS.init({
  once: true,
});

// ------------------------------------------------------------------------------------- Transition Per Page ------------------------
const links = document.querySelectorAll(".link");
const transitionPage = document.querySelector(".transition");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    transitionPage.classList.add("slide"); // animasi keluar
    setTimeout(() => {
      window.location.href = link.href;
    }, 1100); // durasi animasi keluar
  });
});

// ----------------------- -----------------------------------------------------------------ENTRY ANIMATION -----------------------------
window.addEventListener("DOMContentLoaded", () => {
  const overlay = document.querySelector(".page-green-overlay");
  overlay.style.opacity = "1";

  transitionPage.classList.add("slide-out");

  setTimeout(() => {
    overlay.style.opacity = "0";
  }, 500);
  setTimeout(() => {
    transitionPage.classList.remove("slide-out");
  }, 1300);
});

// -----------------------------------------------------------------------------------   Navbar scroll effect ---------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  });
});

// ------------------------------------------------------------------------------------------- Hamburger Menu -------------------------
const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik selain hamburger untuk hilangin side bar
const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// ---------------------- --------------------------------------------------------------------------Particle --------------------------
const container = document.querySelector(".particle");
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = container.offsetWidth;
  canvas.height = container.offsetHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const particles = [];
const particleCount = 100;

for (let i = 0; i < particleCount; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 5,
    speedX: (Math.random() - 0.5) * 1,
    speedY: (Math.random() - 0.5) * 1,
  });
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((particle) => {
    particle.x += particle.speedX;
    particle.y += particle.speedY;

    if (particle.x <= 0 || particle.x >= canvas.width) {
      particle.speedX *= -1;
    }

    if (particle.y <= 0 || particle.y >= canvas.height) {
      particle.speedY *= -1;
    }

    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(108, 196, 0)";
    ctx.fill();
  });

  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 120) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(108, 196, 0, ${1 - distance / 120})`;
        ctx.lineWidth = 0.5;
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }

  requestAnimationFrame(drawParticles);
}

drawParticles();

// ----------------------------------------------------------------------------------------------- Card Fitur -----------------------
const cards = document.querySelectorAll(".cardFitur");
let index = 0;

function animateCards() {
  cards.forEach((card) => card.classList.remove("active"));
  cards[index].classList.add("active");
  index++;

  if (index >= cards.length) index = 0;
}
setInterval(animateCards, 3000);
animateCards();
