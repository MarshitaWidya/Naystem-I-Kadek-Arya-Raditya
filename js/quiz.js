const openQuiz = document.getElementById("kuis-btn");
const modalQuiz = document.getElementById("modal-quiz");

openQuiz.addEventListener("click", function (e) {
  e.preventDefault();

  modalQuiz.style.display = "flex";
  setTimeout(() => modalQuiz.classList.add("active"), 10);
  startQuiz();

  document.documentElement.style.overflow = "hidden";
});

const question = [
  {
    question: "Apa dampak sampah plastik bagi lingkungan?",
    answers: [
      { text: "Mencemari tanah", correct: true },
      { text: "Menyegarkan udara", correct: false },
      { text: "Menjernihkan air", correct: false },
      { text: "Menyuburkan sungai", correct: false },
    ],
  },
  {
    question: "Apa manfaat membuang sampah pada tempatnya?",
    answers: [
      { text: "Lingkungan menjadi bersih", correct: true },
      { text: "Menimbulkan banjir", correct: false },
      { text: "Menyebabkan polusi", correct: false },
      { text: "Membuat udara kotor", correct: false },
    ],
  },
  {
    question: "Sampah yang sulit terurai adalah",
    answers: [
      { text: "Daun kering", correct: false },
      { text: "Sisa makanan", correct: false },
      { text: "Plastik", correct: true },
      { text: "Kulit buah", correct: false },
    ],
  },
  {
    question: "Cara yang tepat untuk mengurangi sampah adalah",
    answers: [
      { text: "Membuang sampah ke sungai", correct: false },
      { text: "Melakukan daur ulang", correct: true },
      { text: "Membakar sampah sembarangan", correct: false },
      { text: "Meninggalkan sampah di jalan", correct: false },
    ],
  },
  {
    question: "Apa akibat lingkungan yang kotor?",
    answers: [
      { text: "Udara menjadi segar", correct: false },
      { text: "Lingkungan lebih nyaman", correct: false },
      { text: "Menimbulkan berbagai penyakit", correct: true },
      { text: "Air menjadi lebih bersih", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Soal Berikutnya";
  showQuestion();
}

function showQuestion() {
  resetState();

  // Mengambil pertanyaan berdasarkan nomor index yang sedang aktif.
  let currentQuestion = question[currentQuestionIndex];
  // index ubah jadi nomor
  let questionNo = currentQuestionIndex + 1;

  // nampilin soal
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    // Membuat elemen button baru untuk setiap pilihan jawaban.
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");

    // Memasukkan button jawaban ke dalam container pilihan jawaban.
    answerButton.appendChild(button);

    // Mengecek apakah jawaban tersebut merupakan jawaban yang benar.
    if (answer.correct) {
      // Menyimpan informasi bahwa jawaban tersebut benar ke dalam data button.
      button.dataset.correct = answer.correct;
    }

    // Menjalankan fungsi selectAnswer ketika button jawaban diklik.
    button.addEventListener("click", selectAnswer);
  });
}

// ------------- Memproses jawaban yang dipilih pengguna -------------
function selectAnswer(e) {
  // button yg di klik
  const selectedBtn = e.target;
  // cek true ga button dari jawban yang di klik
  const isCorrect = selectedBtn.dataset.correct == "true";

  // Mengecek apakah jawaban yang dipilih benar.
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }

  // ------------- Menampilkan jawaban yang benar dan menonaktifkan semua pilihan -------------
  // Mengubah kumpulan button menjadi array agar dapat dilakukan perulangan.
  Array.from(answerButton.children).forEach((button) => {
    // Mengecek apakah button merupakan jawaban yang benar.
    if (button.dataset.correct === "true") {
      button.classList.add("correct"); //biar tetep ijo
    }

    button.disabled = true;
  });

  nextButton.style.display = "block";
}

// ------------- Menampilkan hasil atau nilai quiz -------------
function showScore() {
  // Menghapus tampilan pertanyaan dan jawaban sebelumnya.
  resetState();

  // Menghitung nilai berdasarkan score dan menampilkannya ke halaman.
  questionElement.innerHTML = `Nilai yang kamu dapatkan <span style="color: #bbcb2e; font-weight: 800; font-size: 2.2rem; padding-left: 0.6rem">${score * 20} / 100 </span>`;

  // Mengubah tulisan tombol menjadi "Kembali".
  nextButton.innerHTML = "Kembali";
  nextButton.style.display = "block";
}

// ------------- Mengatur perpindahan ke pertanyaan berikutnya -------------
function handleNextButton() {
  // nambah index ke pertanyaan selanjutnya
  currentQuestionIndex++;

  if (currentQuestionIndex < question.length) {
    showQuestion();
  } else {
    showScore();
  }
}

// ------------- Mereset tampilan quiz -------------
function resetState() {
  nextButton.style.display = "none";

  // Mengecek apakah masih ada elemen jawaban di dalam container.
  while (answerButton.firstChild) {
    // Menghapus jawaban yang sebelumnya ada di dalam container.
    answerButton.removeChild(answerButton.firstChild);
  }
}

// ------------- Menjalankan fungsi ketika tombol Next atau Kembali diklik -------------
nextButton.addEventListener("click", () => {
  // Mengecek apakah tombol saat ini memiliki tulisan "Kembali".
  if (nextButton.innerHTML === "Kembali") {
    modalQuiz.classList.remove("active");

    setTimeout(() => {
      modalQuiz.style.display = "none";
    }, 300);
    document.documentElement.style.overflow = "auto";
  } else {
    handleNextButton();
  }
});

startQuiz();
