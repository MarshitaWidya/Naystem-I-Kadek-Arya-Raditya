// -------------------------- AI ---------------------------
const btn = document.getElementById("showAI");
const btnSec = document.getElementById("showAIButtonSec");
const containerAI = document.getElementById("ai-container");

if (btn) {
  btn.addEventListener("click", () => {
    containerAI.classList.toggle("active");
  });
}

if (btnSec) {
  btnSec.addEventListener("click", () => {
    containerAI.classList.toggle("active");
  });
}

window.addEventListener("click", (e) => {
  if (e.target === containerAI) {
    containerAI.classList.remove("active");
  }
});

// ------------- Menyimpan riwayat percakapan -------------
let messages = [];

// ------------- Fungsi untuk mengirim pertanyaan pengguna -------------
async function sendQuestion() {
  const inputEl = document.getElementById("userInput");
  const chat = document.getElementById("chat");
  const input = inputEl.value.trim();

  if (!input) return;

  // ------------- Membuat bubble pesan dari pengguna -------------
  // user bubble
  const userBubble = document.createElement("div");
  userBubble.className = "chat-bubble user-message";
  userBubble.innerText = input;
  chat.appendChild(userBubble);

  // kosongin input kalau dah kirim
  inputEl.value = "";

  // simpan pesan ke chat
  messages.push({ role: "user", content: input });

  // ------------- Membuat bubble loading untuk menunjukkan AI sedang menjawab -------------
  const loadingBubble = document.createElement("div");
  loadingBubble.className = "chat-bubble ai-message";
  loadingBubble.innerText = "Mengetik . . .";
  chat.appendChild(loadingBubble);

  // ------------- Menjalankan proses komunikasi dengan API -------------
  try {
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        // ------------- Menentukan metode request ke API -------------
        method: "POST",

        // ------------- Mengirim informasi autentikasi dan konfigurasi API -------------
        headers: {
          Authorization:
            "Bearer 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",
          "HTTP-Referer": window.location.origin,
          "X-Title": "Naystem",
          "Content-Type": "application/json",
        },

        // ------------- Mengirim model dan riwayat percakapan ke API -------------
        body: JSON.stringify({
          model: "deepseek/deepseek-chat", // model
          messages: [
            // ------------- Memberikan peran dan karakter AI -------------
            {
              role: "system",
              content:
                "Kamu adalah asisten AI dalam web Naystem yang membantu pengguna memahami dampak dari sampah yang mereka hasilkan. Berikan penjelasan yang sederhana, ramah, dan mudah dipahami tentang jenis sampah, dampaknya terhadap lingkungan, serta solusi yang bisa dilakukan sehari-hari. Jika pengguna menyebutkan jumlah sampah, bantu jelaskan dampaknya secara relevan dan berikan saran yang realistis untuk mengurangi sampah tersebut. Hindari bahasa yang menghakimi, dan gunakan gaya bahasa yang positif dan edukatif.",
            },

            // ------------- Memasukkan seluruh riwayat pesan pengguna -------------
            ...messages,
          ],
        }),
      },
    );

    // ------------- Mengubah response API menjadi data JSON -------------
    const data = await response.json();
    console.log(data); //  buat debug

    // ------------- Ngecek API mengembalikan error -------------
    if (data.error) {
      throw new Error(data.error.message);
    }

    // ------------- Mengambil isi balasan dari AI -------------
    let reply = data.choices[0].message.content;

    // ------------- Menyimpan balasan AI ke chat -------------
    messages.push({ role: "assistant", content: reply });

    // tampilkan
    reply = reply
      // heading
      .replace(/^### (.*$)/gim, "<h3>$1</h3>")
      .replace(/^## (.*$)/gim, "<h2>$1</h2>")
      .replace(/^# (.*$)/gim, "<h1>$1</h1>")

      // bold + italic
      .replace(/\*\*\*(.*?)\*\*\*/g, "<b><i>$1</i></b>")
      .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>")
      .replace(/\*(.*?)\*/g, "<i>$1</i>")

      // underline
      .replace(/__(.*?)__/g, "<u>$1</u>")

      // strikethrough
      .replace(/~~(.*?)~~/g, "<s>$1</s>")

      // inline code
      .replace(/`([^`]+)`/g, "<code>$1</code>")

      // blockquote
      .replace(/^> (.*$)/gim, "<blockquote>$1</blockquote>")

      // unordered list
      .replace(/^- (.*$)/gim, "<li>$1</li>")

      // ordered list
      .replace(/^\d+\. (.*$)/gim, "<li>$1</li>")

      // horizontal line
      .replace(/^---$/gim, "<hr>")

      // link markdown
      .replace(
        /\[([^\]]+)\]\(([^)]+)\)/g,
        '<a href="$2" target="_blank">$1</a>',
      )

      // image markdown
      .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1">')

      // line break
      .replace(/\n/g, "<br>");

    // ------------- Menampilkan balasan AI pada bubble chat -------------
    loadingBubble.innerHTML = reply;
  } catch (error) {
    loadingBubble.innerText = "Error: " + error.message;
  }

  // ------------- geser ke chat paling baru -------------
  chat.scrollTo({
    top: chat.scrollHeight,
    behavior: "smooth",
  });
}

// enter = kirim
document.getElementById("userInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") sendQuestion();
});
