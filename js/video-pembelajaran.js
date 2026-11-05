// --------------------------------------------------------------------------------- Video Pembelajaran ---------------------------
function changeSubbab(id) {
  // Ambil semua div video (id-nya: video-1, video-2, dst)
  const subbab = document.querySelectorAll(".materi-main-left > div");

  subbab.forEach((video) => {
    video.style.display = "none";
  });

  const subbbabActive = document.getElementById(id);
  if (subbbabActive) {
    subbbabActive.style.display = "block";
  }
}

// -------------------------------------------------------------------------------------------- Like -------------------------------
const like = document.querySelector(".like");
const nominalLike = document.querySelector(".ex");

like.addEventListener("click", () => {
  like.classList.toggle("liked");
  nominalLike.classList.toggle("likedNominal");
});

// ------------------------------------------------------------------------------------------ Forum --------------------------
const modalWarning = document.getElementById("modal-warning");
const modalSuccess = document.getElementById("modal-success");
const closeModalWarning = document.getElementById("close-modal-warning");
const closeModalSuccess = document.getElementById("close-modal-success");

// -------------------------------------------------------------------------------------- Tutup Modal ---------------------
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
  document.documentElement.style.overflow = "auto";
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

closeModalWarning.addEventListener("click", function () {
  modalWarning.classList.remove("active");
  setTimeout(() => {
    modalWarning.style.display = "none";
  }, 300);
  document.documentElement.style.overflow = "auto";
});

// --------------------------------------------------------------------------------- Like komentar --------------------------------------------------

const likeButtons = document.querySelectorAll(".like-btn");

likeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const likeCount = button.querySelector(".like-count");
    // ubah dari teks jadi angka
    let count = Number(likeCount.textContent);

    // Mengecek apakah tombol saat ini sudah memiliki class "liked".
    if (button.classList.contains("liked")) {
      count--;
    } else {
      count++;
    }

    // perbarui
    likeCount.textContent = count;
    button.classList.toggle("liked");
  });
});

// ---------------------------------------------------------------------------------------- reply button ------------------------------------------------

const replyButtons = document.querySelectorAll(".reply-btn");

replyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Cari komentar utama yang membungkus tombol ini
    const comment = button.closest(".comment");

    // Cari input balasan di dalam komentar tersebut
    const replyBox = comment.querySelector(".reply-box");

    // Buka / tutup input balasan
    replyBox.classList.toggle("show");

    // Kalau dibuka, langsung fokus ke input (input langsung aktif dan siap diketik.)
    if (replyBox.classList.contains("show")) {
      replyBox.querySelector("input").focus();
    }
  });
});

// ---------------------------------------------------------------------------------------- Lihat/sembunyiin balasan -------------------------------------

const balasanButtons = document.querySelectorAll(".balasan-btn");

balasanButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Cari komentar utama
    const comment = button.closest(".comment");

    // Cari container balasan milik komentar tersebut
    const balasanContainer = comment.querySelector(".balasan-container");

    // Buka / tutup balasan
    balasanContainer.classList.toggle("show");

    // Ubah tulisan tombol
    if (balasanContainer.classList.contains("show")) {
      button.innerHTML = '<i class="bx bx-chevron-up"></i> Sembunyikan balasan';
    } else {
      const jumlah = balasanContainer.querySelectorAll(".balasan").length;

      button.innerHTML = `<i class="bx bx-chevron-down"></i> Lihat ${jumlah} balasan`;
    }
  });
});

// --------------------------------------------------------------------------------------------- Kirim balasan ------------------------------------------------------

const sendReplyButtons = document.querySelectorAll(".send-reply");

sendReplyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Cari komentar utama
    const comment = button.closest(".comment");

    // Cari input balasan
    const input = comment.querySelector(".reply-box input");

    // Cari tempat balasan
    const balasanContainer = comment.querySelector(".balasan-container");

    // Ambil teks
    const text = input.value.trim();

    // Jangan kirim kalau kosong
    if (text === "") {
      modalWarning.style.display = "flex";
      setTimeout(() => {
        modalWarning.classList.add("active");
      }, 10);
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      return;
    }

    // Buat elemen balasan baru
    const balasan = document.createElement("div");

    balasan.classList.add("balasan");

    balasan.innerHTML = `
      <div class="comment-top">
        <div class="comment-top-left ant">
          <img src="assets/user.png" alt="" />
        </div>

        <div class="comment-top-right ant">
          <h1>Naystem User</h1>
          <p>Baru saja</p>
        </div>
      </div>

      <div class="comment-mid">
        <p>${text}</p>
      </div>
    `;

    // Masukkan balasan ke container
    balasanContainer.prepend(balasan);

    // Kosongkan input
    input.value = "";

    // Tutup input balasan (carri replybox yang ada di comment)
    const replyBox = comment.querySelector(".reply-box");

    replyBox.classList.remove("show");

    // Otomatis buka daftar balasan
    balasanContainer.classList.add("show");

    // Update jumlah balasan
    const jumlah = balasanContainer.querySelectorAll(".balasan").length;
    const balasanButton = comment.querySelector(".balasan-btn");

    balasanButton.innerHTML =
      '<i class="bx bx-chevron-up"></i> Sembunyikan balasan';

    modalSuccess.style.display = "flex";
    setTimeout(() => {
      modalSuccess.classList.add("active");
    }, 10);
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
  });
});

// --------------------------------------------------------------------------------------- Tambah Komen Utama -----------------------------------------------------

const addCommentInput = document.querySelector(
  ".add-comment .input-komentar input",
);

const sendCommentButton = document.querySelector(".add-comment .kirim-komen");
const commentContainer = document.querySelector(".comment-parent");

sendCommentButton.addEventListener("click", () => {
  const text = addCommentInput.value.trim();

  // Jangan kirim kalau kosong
  if (text === "") {
    modalWarning.style.display = "flex";
    setTimeout(() => {
      modalWarning.classList.add("active");
    }, 10);
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    return;
  }

  // Buat komentar baru
  const comment = document.createElement("div");

  comment.classList.add("comment");

  comment.innerHTML = `
    <div class="comment-top">

      <div class="comment-top-left">
        <img src="assets/user.png" alt="">
      </div>

      <div class="comment-top-right">
        <h1>Naystem User</h1>
        <p>Baru saja</p>
      </div>

    </div>

    <div class="comment-mid">
      <p>${text}</p>
    </div>

    <div class="comment-bottom">

      <button class="like-btn">
        <i class="bx bxs-like"></i>
        <span class="like-count">0</span>
      </button>

      <button class="reply-btn">
        <i class="bx bx-reply-all"></i>
        Balas
      </button>

      <button class="balasan-btn">
        <i class="bx bx-chevron-down"></i>
        Lihat 0 balasan
      </button>

    </div>

    <div class="input-komentar-balasan reply-box">

      <input
        type="text"
        placeholder="Tulis Balasan . . ."
      >

      <button class="send-reply kirim-komen-balasan">
        <i class="bx bx-send"></i>
      </button>

    </div>
  `;

  // Masukkan komentar BARU ke paling atas
  commentContainer.prepend(comment);

  // Kosongkan input
  addCommentInput.value = "";

  modalSuccess.style.display = "flex";
  setTimeout(() => {
    modalSuccess.classList.add("active");
  }, 10);
  document.documentElement.style.overflow = "hidden";
  document.body.style.overflow = "hidden";
});
