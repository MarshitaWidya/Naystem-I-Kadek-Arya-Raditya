// --------------------------------------------------------------------------------------------------- Pembelajaran ---------------------
const containerBtn = document.querySelector(".materi-pembelajaran-top");
const btnLeft = document.querySelector(".scroll-btn.left");
const btnRight = document.querySelector(".scroll-btn.right");
const btnLeft1 = document.querySelector(".scroll-btn.left1");
const btnRight1 = document.querySelector(".scroll-btn.right1");

btnLeft.addEventListener("click", () => {
  containerBtn.scrollBy({ left: -300, behavior: "smooth" });
});

btnRight.addEventListener("click", () => {
  containerBtn.scrollBy({ left: 300, behavior: "smooth" });
});

btnLeft1.addEventListener("click", () => {
  containerBtn.scrollBy({ left: -300, behavior: "smooth" });
});

btnRight1.addEventListener("click", () => {
  containerBtn.scrollBy({ left: 300, behavior: "smooth" });
});

// "id" untuk konten mana yang mau ditampilin
// "el" tu tombol yang di klik
function changeTo(id, el) {
  // ------------- Menyembunyikan semua konten materi -------------
  document
    .querySelectorAll(".materi-pembelajaran-preview")
    // Melakukan perulangan pada setiap elemen materi dan di nonein semua.
    .forEach((c) => (c.style.display = "none"));

  // ------------- Mencari konten yang ingin ditampilkan -------------
  const active = document.getElementById(id);

  // ------------- Mengecek apakah konten target ditemukan -------------
  // Jika elemen dengan ID tersebut ditemukan
  if (active) {
    active.style.display = "block";
  }

  // ------------- Menghapus status active dari semua tombol -------------
  const buttons = document.querySelectorAll(".button-flex button");

  buttons.forEach((btn) => btn.classList.remove("active"));

  // ------------- Memberikan status active pada tombol yang diklik -------------
  el.classList.add("active");
}
