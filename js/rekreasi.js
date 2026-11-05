// -------------------------------------------------------------------------------------------------------- Modal Proyek ----------------------------------------------------------
const showModal = document.querySelectorAll(".mainkan-button-update");
const modal = document.getElementById("modal-rekreasi-alert");
const closeModal = document.getElementById("closeModal");

showModal.forEach((button) => {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    modal.style.display = "flex";
    setTimeout(() => {
      modal.classList.add("active");
    }, 10);
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
  });
});

// -------------------------------------------------------------------------------------------------- Tutup Modal Pake Silang -------------------------------------
closeModal.addEventListener("click", function () {
  modal.classList.remove("active");
  setTimeout(() => {
    modal.style.display = "none";
  }, 300);
  document.documentElement.style.overflow = "auto";
  document.body.style.overflow = "auto";
});

// ------------------------------------------------------------------------------------------------- Tutup Modal Pake Klik Sembarang --------------------------------------
window.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.classList.remove("active");
    setTimeout(() => {
      modal.style.display = "none";
    }, 300);
    document.documentElement.style.overflow = "auto";
    document.body.style.overflow = "auto";
  }
});
