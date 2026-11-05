const showPorto = document.getElementById("showPorto");
const modalPorto = document.getElementById("modalPorto");
const closeModalPorto = document.getElementById("close-modal-add-porto");
const modalWarning = document.getElementById("modal-warning");
const modalSuccess = document.getElementById("modal-success");
const closeModalWarning = document.getElementById("close-modal-warning");
const closeModalSuccess = document.getElementById("close-modal-success");

// -------------------------------------------------------------------------------------------- Tampilin porto add porto --------------------------

showPorto.addEventListener("click", function (e) {
  e.preventDefault();

  modalPorto.style.display = "flex";
  setTimeout(() => modalPorto.classList.add("active"), 10);

  document.documentElement.style.overflow = "hidden";
});

// ------------------------------------------------------------------------------------------------------ Tutup Modal -----------------------------
window.addEventListener("click", function (e) {
  if (e.target === modalPorto) {
    modalPorto.classList.remove("active");

    setTimeout(() => {
      modalPorto.style.display = "none";
    }, 300);

    document.documentElement.style.overflow = "auto";
  }
});

closeModalPorto.addEventListener("click", function () {
  modalPorto.classList.remove("active");
  setTimeout(() => {
    modalPorto.style.display = "none";
  }, 300);
  document.documentElement.style.overflow = "auto";
});

window.addEventListener("click", function (e) {
  if (e.target === modalSuccess) {
    modalSuccess.classList.remove("active");

    setTimeout(() => {
      modalSuccess.style.display = "none";
    }, 300);

    document.documentElement.style.overflow = "auto";
  }
});

closeModalSuccess.addEventListener("click", function () {
  modalSuccess.classList.remove("active");
  setTimeout(() => {
    modalSuccess.style.display = "none";
  }, 300);
});

closeModalWarning.addEventListener("click", function () {
  modalWarning.classList.remove("active");
  setTimeout(() => {
    modalWarning.style.display = "none";
  }, 300);
});

window.addEventListener("click", function (e) {
  if (e.target === modalWarning) {
    modalWarning.classList.remove("active");

    setTimeout(() => {
      modalWarning.style.display = "none";
    }, 300);

    document.documentElement.style.overflow = "auto";
  }
});

// -------------------------------------------------------------------------------------------------- Add porto -------------------------------

const addPorto = document.getElementById("addPorto");

const namaPorto = document.getElementById("nama-porto");
const jenisPorto = document.getElementById("jenis-porto");
const judulPorto = document.getElementById("judul-porto");
const gambarPorto = document.getElementById("gambar-porto");
const linkPorto = document.getElementById("link-porto");
const deskripsiPorto = document.getElementById("deskripsi-porto");

const portofolioContainer = document.getElementById("portofolioContainer");

// Menyimpan data hanya selama halaman aktif
let dataPortofolio = [];

addPorto.addEventListener("click", function () {
  const nama = namaPorto.value.trim();
  const jenis = jenisPorto.value.trim();
  const judul = judulPorto.value.trim();
  const link = linkPorto.value.trim();
  const deskripsi = deskripsiPorto.value.trim();
  const fileGambar = gambarPorto.files[0];

  if (!nama || !jenis || !judul || !link || !deskripsi || !fileGambar) {
    modalWarning.style.display = "flex";
    setTimeout(() => modalWarning.classList.add("active"), 10);
    document.documentElement.style.overflow = "hidden";
    return;
  }

  if (!fileGambar.type.startsWith("image/")) {
    modalWarning.style.display = "flex";
    setTimeout(() => modalWarning.classList.add("active"), 10);
    document.documentElement.style.overflow = "hidden";
    return;
  }

  // -------------------------------------------------------------------------------------------------- Baca gambar ------------------

  // FileReader untuk baca file user,
  const reader = new FileReader();

  // nentuin next step setelah baca file,  "onload" jalan pas reader dah lese
  reader.onload = function (e) {
    const tanggalSekarang = new Date();

    // toLocaleDateString() digunakan untuk menampilkan tanggal sesuai format tertentu.
    const tanggal = tanggalSekarang.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long", // Long = tipe data
      year: "numeric",
    });

    const portoBaru = {
      nama: nama,
      jenis: jenis,
      judul: judul,
      gambar: e.target.result,
      deskripsi: deskripsi,
      dibuka: 0,
      tanggal: tanggal,
    };

    // Simpan sementara di memory
    dataPortofolio.push(portoBaru);

    // -------------------------------------------------------------------------------------------- Buat card porto ------------------------

    const card = document.createElement("div");

    card.classList.add("card-portofolio");

    card.innerHTML = `
      <div class="card-portofolio-top">
        <img src="${portoBaru.gambar}" alt="${portoBaru.judul}" />
        <h1>${portoBaru.jenis}</h1>
      </div>

      <div class="card-portofolio-mid">

        <div class="card-portofolio-mid-top">
          <i class="bx bx-stopwatch"></i>
          <p>0 kali dibuka</p>
        </div>

        <a 
          href="" 
        >
          <h1 class="card-portofolio-mid-h1">
            ${portoBaru.judul}
          </h1>
        </a>

        <p class="card-portofolio-mid-p">
          ${portoBaru.deskripsi}
        </p>

      </div>

      <div class="card-portofolio-bottom">

        <div class="card-portofolio-bottom-left">
          <img src="${portoBaru.gambar}" alt="${portoBaru.nama}" />
        </div>

        <div class="card-portofolio-bottom-right">
          <h1>${portoBaru.nama}</h1>
          <p>${portoBaru.tanggal}</p>
        </div>

      </div>
    `;

    // Card baru muncul paling atas
    portofolioContainer.prepend(card);

    namaPorto.value = "";
    jenisPorto.value = "";
    judulPorto.value = "";
    gambarPorto.value = "";
    linkPorto.value = "";
    deskripsiPorto.value = "";

    // tutup modal

    setTimeout(() => {
      modalPorto.style.display = "none";
    }, 300);
    modalPorto.classList.remove("active");

    // modal sukses

    modalSuccess.style.display = "flex";
    setTimeout(() => modalSuccess.classList.add("active"), 10);
    document.documentElement.style.overflow = "hidden";
  };

  // cek gambar dan ubah jadi Data URL.
  reader.readAsDataURL(fileGambar);
});

// -------------------------------------------------------------------------------------------- Sorting porto ----------------------------------

const sortPorto = document.getElementById("sortPorto");
const sortDropdown = document.getElementById("sortDropdown");

const sortMost = document.getElementById("sortMost");
const sortLeast = document.getElementById("sortLeast");

// buka/tutup

sortPorto.addEventListener("click", function (e) {
  // cegah biar ga nyebar ke elemen lain
  e.stopPropagation();

  sortDropdown.classList.toggle("active");
});

// ------------ dari banyak ke sedikit ------------------

sortMost.addEventListener("click", function () {
  // ambil semua card porto dari portofolioContainer
  const cards = Array.from(
    portofolioContainer.querySelectorAll(".card-portofolio"),
  );

  // ------------- Mengurutkan card berdasarkan jumlah dibuka -------------
  cards.sort(function (a, b) {
    // ------------- Mengambil jumlah dibuka dari card pertama -------------
    // Mencari elemen <p> yang berisi jumlah dibuka pada card.
    // parseInt() mengubah teks angka menjadi angka JavaScript.
    // Jika hasilnya tidak valid, digunakan angka 0.
    const jumlahA =
      parseInt(a.querySelector(".card-portofolio-mid-top p").textContent) || 0;

    // ------------- Mengambil jumlah dibuka dari card kedua -------------
    const jumlahB =
      parseInt(b.querySelector(".card-portofolio-mid-top p").textContent) || 0;

    // ------------- Menentukan urutan card -------------
    // dibuka terbesar = paling atas
    return jumlahB - jumlahA;
  });

  // ------------- Memasukkan kembali card sesuai urutan baru -------------
  // Melakukan perulangan pada setiap card yang sudah diurutkan.
  cards.forEach(function (card) {
    portofolioContainer.appendChild(card);
  });

  // ------------- Menutup dropdown sort -------------
  sortDropdown.classList.remove("active");
});

// ------------ dari sedikit ke banyak ------------------

sortLeast.addEventListener("click", function () {
  const cards = Array.from(
    portofolioContainer.querySelectorAll(".card-portofolio"),
  );

  cards.sort(function (a, b) {
    // ------------- Mengambil jumlah dibuka dari card pertama -------------
    // Mencari elemen <p> yang berisi jumlah dibuka pada card.
    // parseInt() mengubah teks angka menjadi angka JavaScript.
    // Jika hasilnya tidak valid, digunakan angka 0.
    const jumlahA =
      parseInt(a.querySelector(".card-portofolio-mid-top p").textContent) || 0;

    const jumlahB =
      parseInt(b.querySelector(".card-portofolio-mid-top p").textContent) || 0;

    // dibuka paling dikit paling atas
    return jumlahA - jumlahB;
  });

  cards.forEach(function (card) {
    portofolioContainer.appendChild(card);
  });

  sortDropdown.classList.remove("active");
});

document.addEventListener("click", function (e) {
  // klik diluar sort-wrapper
  if (!e.target.closest(".sort-wrapper")) {
    sortDropdown.classList.remove("active");
  }
});

// ---------------------------------------------------------------------------------------------- Cari portofolio --------------------------
const searchPorto = document.getElementById("search-porto");
const portoContainer = document.getElementById("portofolioContainer");
const portoNotFound = document.getElementById("porto-none-text");

searchPorto.addEventListener("input", function () {
  const keyword = searchPorto.value.toLowerCase().trim();

  // Ambil semua card TERBARU setiap kali search
  const portoCards = portoContainer.querySelectorAll(".card-portofolio");

  let jumlahCocok = 0;

  portoCards.forEach(function (card) {
    const judul = card
      .querySelector(".card-portofolio-mid-h1")
      .textContent.toLowerCase();

    const jenis = card
      .querySelector(".card-portofolio-top h1")
      .textContent.toLowerCase();

    const deskripsi = card
      .querySelector(".card-portofolio-mid-p")
      .textContent.toLowerCase();

    const nama = card
      .querySelector(".card-portofolio-bottom-right h1")
      .textContent.toLowerCase();

    const cocok =
      judul.includes(keyword) ||
      jenis.includes(keyword) ||
      deskripsi.includes(keyword) ||
      nama.includes(keyword);

    if (cocok) {
      card.style.display = "";
      jumlahCocok++;
    } else {
      card.style.display = "none";
    }
  });

  if (jumlahCocok === 0) {
    portoNotFound.style.display = "block";
  } else {
    portoNotFound.style.display = "none";
  }
});
