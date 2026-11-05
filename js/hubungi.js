AOS.init({
  once: true,
});

// -------------------------------------------------------------------------------------Navbar scroll effect-------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  });
});

// ----------------------------------------------------------------------------------------- Hamburger Menu -------------------------
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

//  ---------------------------------------------------------------------------------------- Kirim pesan ------------------------
const modalWarning = document.getElementById("modal-warning");
const closeModalWarning = document.getElementById("close-modal-warning");

// ---------------------------------------------------------------------------------- Tutup modal pake silang -------------------------------------------
closeModalWarning.addEventListener("click", function () {
  modalWarning.classList.remove("active");
  setTimeout(() => {
    modalWarning.style.display = "none";
  }, 300);
  document.documentElement.style.overflow = "auto";
  document.body.style.overflow = "auto";
});

// ---------------------------------------------------------------------------- Tutup Modal Pake Sembarang Klik ---------------------------------
window.addEventListener("click", function (e) {
  if (e.target === modalWarning) {
    modalWarning.classList.remove("active");
    setTimeout(() => {
      modalWarning.style.display = "none";
    }, 300);
    document.documentElement.style.overflow = "auto";
    document.body.style.overflow = "auto";
  }
});

// ------------------------------------------------------------------------------- Button Kirim Pesan Di Klik -------------------------------------
document
  .querySelector(".button-kirim-pesan button")
  .addEventListener("click", function () {
    const nama = document.getElementById("input-nama").value;
    const email = document.getElementById("input-email").value;
    const pesan = document.getElementById("input-pesan").value;

    if (!nama || !email || !pesan) {
      modalWarning.style.display = "flex";
      setTimeout(() => {
        modalWarning.classList.add("active");
      }, 10);
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      return;
    }

    const nomorTujuan = "6281353080118";
    const teks = `Halo, Saya ${nama}%0AEmail : ${email}%0APesan : ${pesan}`;

    window.open(`https://wa.me/${nomorTujuan}?text=${teks}`, "_blank");
  });

// -------------------------------------------------------------------------------- Transition Per Page ------------------------
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

// ----------------------------------------------------------------------------------- ENTRY ANIMATION ----------------------------------------------------
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

// -------------------------------------------------------------------------------------- Particle -----------------------------------------

// Mengambil elemen HTML yang memiliki class "particle" dan menyimpannya ke variabel container.
const container = document.querySelector(".particle");
// Mengambil elemen canvas dengan ID "particles" dari HTML.
const canvas = document.getElementById("particles");
// Mengambil context 2D dari canvas agar JavaScript dapat menggambar di dalamnya.
const ctx = canvas.getContext("2d");

// Membuat fungsi untuk mengatur ukuran canvas.
function resizeCanvas() {
  // Mengatur lebar canvas agar sama dengan lebar container.
  canvas.width = container.offsetWidth;
  // Mengatur tinggi canvas agar sama dengan tinggi container.
  canvas.height = container.offsetHeight;
}

// Menjalankan fungsi resizeCanvas pertama kali saat halaman dimuat.
resizeCanvas();

// Menjalankan resizeCanvas kembali setiap kali ukuran browser berubah.
window.addEventListener("resize", resizeCanvas);

// Membuat array kosong untuk menyimpan semua data particle.
const particles = [];
// Menentukan jumlah particle yang akan dibuat, yaitu 38 particle.
const particleCount = 38;

// Melakukan perulangan sebanyak jumlah particle yang sudah ditentukan.
for (let i = 0; i < particleCount; i++) {
  // Menambahkan satu particle baru ke dalam array particles.
  particles.push({
    // Menentukan posisi awal particle secara acak pada sumbu X.
    x: Math.random() * canvas.width,
    // Menentukan posisi awal particle secara acak pada sumbu Y.
    y: Math.random() * canvas.height,
    // Menentukan ukuran radius particle secara acak dari 0 sampai 5.
    radius: Math.random() * 5,
    // Menentukan kecepatan gerak particle pada sumbu X secara acak.
    speedX: (Math.random() - 0.5) * 1,
    // Menentukan kecepatan gerak particle pada sumbu Y secara acak.
    speedY: (Math.random() - 0.5) * 1,
  });
}

// Membuat fungsi untuk menggambar dan menggerakkan semua particle.
function drawParticles() {
  // Menghapus seluruh gambar yang ada pada canvas sebelum menggambar frame baru.
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Melakukan perulangan terhadap setiap particle yang ada di dalam array.
  particles.forEach((particle) => {
    // Mengubah posisi particle berdasarkan kecepatan geraknya pada sumbu X.
    particle.x += particle.speedX;
    // Mengubah posisi particle berdasarkan kecepatan geraknya pada sumbu Y.
    particle.y += particle.speedY;

    // Mengecek apakah particle sudah menyentuh batas kiri atau kanan canvas.
    if (particle.x <= 0 || particle.x >= canvas.width) {
      // Membalik arah gerakan particle pada sumbu X.
      particle.speedX *= -1;
    }

    // Mengecek apakah particle sudah menyentuh batas atas atau bawah canvas.
    if (particle.y <= 0 || particle.y >= canvas.height) {
      // Membalik arah gerakan particle pada sumbu Y.
      particle.speedY *= -1;
    }

    // Memulai sebuah jalur gambar baru pada canvas.
    ctx.beginPath();

    // Membuat bentuk lingkaran berdasarkan posisi dan ukuran particle.
    ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);

    // Menentukan warna particle menjadi hijau.
    ctx.fillStyle = "rgba(108, 196, 0)";

    // Mengisi lingkaran dengan warna yang sudah ditentukan.
    ctx.fill();
  });

  // Melakukan perulangan untuk mengambil setiap particle pertama.
  for (let i = 0; i < particles.length; i++) {
    // Melakukan perulangan untuk membandingkan particle pertama dengan particle lainnya.
    for (let j = i + 1; j < particles.length; j++) {
      // Menghitung selisih posisi X antara dua particle.
      const dx = particles[i].x - particles[j].x;
      // Menghitung selisih posisi Y antara dua particle.
      const dy = particles[i].y - particles[j].y;
      // Menghitung jarak antara dua particle menggunakan rumus Pythagoras.
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Mengecek apakah jarak kedua particle kurang dari 120 pixel.
      if (distance < 120) {
        // Memulai jalur gambar baru untuk membuat garis.
        ctx.beginPath();
        // Menentukan warna garis berdasarkan jarak antar particle.
        // Semakin dekat particle, garis akan semakin terlihat.
        ctx.strokeStyle = `rgba(108, 196, 0, ${1 - distance / 120})`;

        // Menentukan ketebalan garis sebesar 0.5 pixel.
        ctx.lineWidth = 0.5;

        // Menentukan titik awal garis dari particle pertama.
        ctx.moveTo(particles[i].x, particles[i].y);

        // Menentukan titik akhir garis menuju particle kedua.
        ctx.lineTo(particles[j].x, particles[j].y);

        // Menggambar garis yang sudah dibuat.
        ctx.stroke();
      }
    }
  }

  // Menjalankan kembali fungsi drawParticles pada frame animasi berikutnya.
  requestAnimationFrame(drawParticles);
}

// Memulai animasi particle dengan menjalankan fungsi drawParticles.
drawParticles();
