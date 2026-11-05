// ------------------------------------------------------------------------------------------------ Statistik Menu -------------------------------------------------------------
function changeMenuTo(id, el) {
  // sembunyikan konten
  document
    .querySelectorAll(".statistik-main-container-preview")
    .forEach((c) => (c.style.display = "none"));

  // tampilkan konten target
  const active = document.getElementById(id);
  if (active) {
    active.style.display = "block";
  }

  // hapus active dari semua tombol
  const buttons = document.querySelectorAll(".statistik-main-menu button");
  buttons.forEach((btn) => btn.classList.remove("active"));

  // kasih active ke tombol yang diklik
  el.classList.add("active");
  AOS.refresh();
}

// --------------------------------------------------------------------------------------------------- DOM -----------------------------------------------
const historiContainer = document.getElementById("isi-tabel");
const openModalSampah = document.getElementById("tambahSampah");
const submitSampahBtn = document.getElementById("addSampah");
const modalSampah = document.getElementById("addSampahModal");
const modalWarning = document.getElementById("modal-warning");
const modalSuccess = document.getElementById("modal-success");
const resetBtn = document.getElementById("resetData");
const closeModalWarning = document.getElementById("close-modal-warning");
const closeModalAddSampah = document.getElementById("close-modal-add-sampah");
const closeModalSuccess = document.getElementById("close-modal-success");
const modalWarningReset = document.getElementById("modal-warning-reset");
const confirmReset = document.getElementById("confirmReset");
const batalReset = document.getElementById("batalReset");

// -------------------------------------------------------------------------------------------------- Modal ---------------------------------------------------------------------
openModalSampah.addEventListener("click", function (e) {
  e.preventDefault();

  modalSampah.style.display = "flex";
  setTimeout(() => modalSampah.classList.add("active"), 10);

  document.documentElement.style.overflow = "hidden";
});

// ------------------------------------------------------------------------------------------------ Tutup Modal -----------------------------------------------------------------------
window.addEventListener("click", function (e) {
  if (e.target === modalSampah) {
    modalSampah.classList.remove("active");

    setTimeout(() => {
      modalSampah.style.display = "none";
    }, 300);

    document.documentElement.style.overflow = "auto";
  }
});

window.addEventListener("click", function (e) {
  if (e.target === modalWarning) {
    modalWarning.classList.remove("active");

    setTimeout(() => {
      modalWarning.style.display = "none";
    }, 300);
  }
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

closeModalWarning.addEventListener("click", function () {
  modalWarning.classList.remove("active");
  setTimeout(() => {
    modalWarning.style.display = "none";
  }, 300);
});

closeModalAddSampah.addEventListener("click", function () {
  modalSampah.classList.remove("active");
  setTimeout(() => {
    modalSampah.style.display = "none";
  }, 300);
  document.documentElement.style.overflow = "auto";
});

closeModalSuccess.addEventListener("click", function () {
  modalSuccess.classList.remove("active");
  setTimeout(() => {
    modalSuccess.style.display = "none";
  }, 300);
  document.documentElement.style.overflow = "auto";
});

// ---------------------------------------------------------------------------------- Buat chart -----------------------------------------------------------------
// Fungsi untuk membuat atau memperbarui grafik batang.
function renderBarChart() {
  // Mengambil elemen HTML yang akan menjadi tempat grafik batang.
  const container = document.getElementById("customBarChart");

  // Mengosongkan isi grafik sebelumnya agar tidak terjadi penumpukan bar.
  container.innerHTML = "";

  // Array yang berisi nama-nama hari untuk label pada grafik.
  const hariLabel = [
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu",
    "Minggu",
  ];

  // Mencari nilai sampah terbesar dari dataPerHari.
  // Math.max() mencari angka terbesar.
  // ...dataPerHari memasukkan semua isi array sebagai nilai terpisah.
  // Angka 1 digunakan agar nilai maksimum tidak menjadi 0 ketika semua data masih 0.
  const max = Math.max(...dataPerHari, 1);

  // Melakukan perulangan untuk setiap data sampah berdasarkan hari (value = jumlah sampah dihari itu, index = posisi hari di array).
  dataPerHari.forEach((value, index) => {
    // Membuat elemen <div> baru yang nantinya menjadi batang grafik.
    const bar = document.createElement("div");
    bar.classList.add("bar");

    // Menghitung tinggi batang dalam bentuk persentase.
    // Jumlah sampah dibandingkan dengan jumlah sampah terbesar,
    // kemudian dikalikan 100 untuk mendapatkan persentase.
    const heightPercent = (value / max) * 100;

    // Memberikan tinggi hasil perhitungan kepada batang grafik.
    bar.style.height = heightPercent + "%";

    // Memasukkan jumlah sampah dan nama hari ke dalam batang grafik.
    bar.innerHTML = `
      <div class="bar-value">${value} Kg</div>
      <span>${hariLabel[index]}</span>
    `;

    // Memasukkan batang grafik yang sudah dibuat ke dalam container grafik.
    container.appendChild(bar);
  });
}

// ----------------------------------------------------------------------------------------- Membuat grafik donut ---------------------------------
function renderDonutChart() {
  // Mengambil jumlah sampah organik, an, b3 dari dataPerJenis.
  const organik = dataPerJenis["Organik"];
  const anorganik = dataPerJenis["Anorganik"];
  const b3 = dataPerJenis["B3"];

  // Menghitung total seluruh sampah dari tiga jenis sampah.
  const total = organik + anorganik + b3;

  const donut = document.querySelector(".donut-chart");
  const centerText = document.getElementById("donutTotal");

  // Mengecek apakah belum ada sampah yang tercatat.
  if (total === 0) {
    donut.style.background = `conic-gradient(#ccc 0deg 360deg)`;
    centerText.textContent = "0";
    return;
  }

  // Menghitung besar bagian organik dalam satuan derajat.
  // 360 derajat merupakan satu lingkaran penuh.
  const oDeg = (organik / total) * 360;
  const aDeg = (anorganik / total) * 360;
  const bDeg = (b3 / total) * 360;

  // Membuat tampilan grafik donut menggunakan conic-gradient.
  // Setiap jenis sampah mendapatkan bagian lingkaran sesuai jumlahnya.
  donut.style.background = `
    conic-gradient(
      #25671E 0deg ${oDeg}deg,
      #7ed957 ${oDeg}deg ${oDeg + aDeg}deg,
      #f2b50b ${oDeg + aDeg}deg 360deg
    )
  `;

  // Menampilkan total seluruh sampah di bagian tengah grafik.
  centerText.textContent = total + " Kg";
}

// ---------------------------------------------------------------------------------------------- Data awal ---------------------------
let dataSampah = [];

let dataPerJenis = {
  Organik: 0,
  Anorganik: 0,
  B3: 0,
};

let dataPerHari = [0, 0, 0, 0, 0, 0, 0];

// -------------------------- Hero section statistik -----------------------------
function updateHero() {
  document.getElementById("total-organik").textContent =
    dataPerJenis["Organik"];
  document.getElementById("total-anorganik").textContent =
    dataPerJenis["Anorganik"];
  document.getElementById("total-b3").textContent = dataPerJenis["B3"];
  document.getElementById("total-sampah-hero").textContent =
    dataPerJenis["B3"] + dataPerJenis["Anorganik"] + dataPerJenis["Organik"];

  // ------------------------- Organik ------------------------------
  const textOrganik = document.getElementById("text-organik");
  const sampahNoneText = document.getElementById("sampah-none-text");
  const cardInfoOrganik = document.getElementById("card-info-organik");
  const cardInfob3 = document.getElementById("card-info-b3");
  const cardInfoAnorganik = document.getElementById("card-info-anorganik");

  const textOrganikDampak = document.getElementById("text-organik-dampak");
  const textOrganikSolusi = document.getElementById("text-organik-solusi");
  const textOrganikDampakSolusi = document.getElementById(
    "text-organik-dampak-solusi",
  );

  if (
    dataPerJenis["Organik"] == 0 &&
    dataPerJenis["Anorganik"] == 0 &&
    dataPerJenis["B3"] == 0
  ) {
    sampahNoneText.style.display = "block";
  } else {
    sampahNoneText.style.display = "none";
  }

  if (dataPerJenis["Organik"] == 0) {
    cardInfoOrganik.style.display = "none";
  }
  if (dataPerJenis["Anorganik"] == 0) {
    cardInfoAnorganik.style.display = "none";
  }

  if (dataPerJenis["B3"] == 0) {
    cardInfob3.style.display = "none";
  }

  if (dataPerJenis["Organik"] > 0 && dataPerJenis["Organik"] <= 5) {
    cardInfoOrganik.style.display = "block";
    textOrganik.innerHTML = `
      Sampah organik yang Anda buang sebesar <span style="font-weight: 800; font-size: 1.3rem; color: black">${dataPerJenis["Organik"]} kg</span> masih tergolong rendah. 
      Namun, jika tidak dikelola dengan baik, sampah ini tetap dapat menimbulkan bau tidak sedap dan menghasilkan gas metana dari proses pembusukan. 
      Dalam jangka panjang, gas tersebut dapat berkontribusi terhadap pemanasan global. 
      Sebaiknya mulai membiasakan pengelolaan sederhana seperti komposting agar dampaknya bisa diminimalkan.
    `;
    textOrganikDampakSolusi.style.display = "flex";
    textOrganikDampak.innerHTML = `
    <li>
      menghasilkan gas metana dari pembusukan.
    </li>
    <li>
      menimbulkan bau tidak sedap lingkungan.
    </li>
    <li>
      menarik hama seperti lalat tikus.
    </li>`;

    textOrganikSolusi.innerHTML = `
    <li>
      olah menjadi kompos rumah tangga.
    </li>
    <li>
      pisahkan dari sampah anorganik sejak.
    </li>
    <li>
      gunakan wadah tertutup untuk penyimpanan.
    </li>`;
  } else if (dataPerJenis["Organik"] > 5 && dataPerJenis["Organik"] <= 10) {
    cardInfoOrganik.style.display = "block";
    textOrganik.innerHTML = `
      Sampah organik yang Anda buang sebesar <span style="font-weight: 800; font-size: 1.3rem; color: black">${dataPerJenis["Organik"]} kg</span> sudah mulai memberikan dampak yang cukup signifikan. Dalam jumlah ini, proses pembusukan menghasilkan lebih banyak gas metana yang berkontribusi terhadap perubahan iklim. Selain itu, cairan hasil pembusukan dapat mencemari tanah di sekitarnya. Pengelolaan yang lebih teratur seperti komposting sangat dianjurkan untuk mengurangi dampaknya.
    `;
    textOrganikDampakSolusi.style.display = "flex";
    textOrganikDampak.innerHTML = `
    <li>
      meningkatkan emisi metana penyebab pemanasan.
    </li>
    <li>
      mencemari tanah melalui cairan lindi.
    </li>
    <li>
      mempercepat pertumbuhan bakteri pembusuk berbahaya.
    </li>`;

    textOrganikSolusi.innerHTML = `
    <li>
      lakukan komposting secara rutin di rumah.
    </li>
    <li>
      kurangi sisa makanan yang terbuang.
    </li>
    <li>
      manfaatkan sampah untuk pupuk tanaman.
    </li>`;
  } else if (dataPerJenis["Organik"] > 10) {
    cardInfoOrganik.style.display = "block";
    textOrganik.innerHTML = `
      Sampah organik yang Anda buang sebesar <span style="font-weight: 800; font-size: 1.3rem; color: black">${dataPerJenis["Organik"]} kg</span> dapat memberikan dampak serius bagi lingkungan. Volume yang besar mempercepat proses pembusukan dan menghasilkan gas metana dalam jumlah tinggi. Selain itu, cairan dari sampah yang membusuk dapat mencemari tanah dan air di sekitarnya. Untuk itu, diperlukan pengelolaan yang lebih baik seperti komposting dalam skala lebih besar dan pengurangan limbah makanan.
    `;
    textOrganikDampakSolusi.style.display = "flex";
    textOrganikDampak.innerHTML = `
    <li>
      mempercepat perubahan iklim akibat metana.
    </li>
    <li>
      mencemari air tanah melalui lindi.
    </li>
    <li>
      meningkatkan populasi hama dan bakteri.
    </li>`;

    textOrganikSolusi.innerHTML = `
    <li>
      terapkan sistem kompos skala rumah.
    </li>
    <li>
      kurangi pembelian makanan berlebihan rumah.
    </li>
    <li>
     edukasi keluarga tentang pengelolaan sampah.
    </li>`;
  }

  // ------------------------- Anorganik ------------------------------
  const textAnorganik = document.getElementById("text-anorganik");
  const textAnorganikDampak = document.getElementById("text-anorganik-dampak");
  const textAnorganikSolusi = document.getElementById("text-anorganik-solusi");
  const textAnorganikDampakSolusi = document.getElementById(
    "text-anorganik-dampak-solusi",
  );

  if (dataPerJenis["Anorganik"] > 0 && dataPerJenis["Anorganik"] <= 5) {
    cardInfoAnorganik.style.display = "block";
    textAnorganik.innerHTML = `
      Sampah anorganik yang Anda buang sebesar <span style="font-weight: 800; font-size: 1.3rem; color: black">${dataPerJenis["Anorganik"]} kg</span> masih tergolong rendah, namun tetap berpotensi mencemari lingkungan. Jenis sampah ini umumnya sulit terurai secara alami dan dapat bertahan dalam waktu yang sangat lama. Jika tidak dikelola dengan baik, sampah dapat mencemari tanah dan air. Oleh karena itu, penting untuk mulai membiasakan pengurangan dan pemilahan sampah sejak dini.
    `;
    textAnorganikDampakSolusi.style.display = "flex";
    textAnorganikDampak.innerHTML = `
    <li>
      sulit terurai dalam waktu sangat lama.
    </li>
    <li>
      mencemari tanah dan lingkungan sekitar.
    </li>
    <li>
     berpotensi masuk ke rantai makanan.
    </li>`;

    textAnorganikSolusi.innerHTML = `
    <li>
      kurangi penggunaan barang sekali pakai.
    </li>
    <li>
      gunakan kembali barang yang masih layak.
    </li>
    <li>
      pilah sampah untuk proses daur ulang.
    </li>`;
  } else if (dataPerJenis["Anorganik"] > 5 && dataPerJenis["Anorganik"] <= 10) {
    cardInfoAnorganik.style.display = "block";
    textAnorganik.innerHTML = `
      Sampah anorganik sebesar <span style="font-weight: 800; font-size: 1.3rem; color: black">${dataPerJenis["Anorganik"]} kg</span> menunjukkan tingkat konsumsi yang cukup tinggi terhadap produk sekali pakai. Dalam jumlah ini, risiko pencemaran lingkungan menjadi lebih besar, terutama jika tidak dilakukan pemilahan. Sampah plastik dapat terbawa ke sungai dan laut, sehingga membahayakan ekosistem. Pengurangan penggunaan dan daur ulang menjadi langkah yang sangat penting.`;
    textAnorganikDampakSolusi.style.display = "flex";
    textAnorganikDampak.innerHTML = `
    <li>
      meningkatkan pencemaran laut oleh plastik.
    </li>
    <li>
      membahayakan hewan yang tertelan sampah.
    </li>
    <li>
      merusak estetika lingkungan sekitar tempat.
    </li>`;

    textAnorganikSolusi.innerHTML = `
    <li>
      bawa tas belanja reusable saat belanja.
    </li>
    <li>
      hindari produk dengan kemasan berlebihan.
    </li>
    <li>
      kirim sampah ke tempat daur ulang.
    </li>`;
  } else if (dataPerJenis["Anorganik"] > 10) {
    cardInfoAnorganik.style.display = "block";
    textAnorganik.innerHTML = `
      Sampah anorganik yang Anda buang sebesar <span style="font-weight: 800; font-size: 1.3rem; color: black">${dataPerJenis["Anorganik"]} kg</span> menunjukkan tingkat konsumsi yang tinggi terhadap barang yang sulit terurai. Jika tidak dikelola dengan baik, sampah ini dapat menumpuk di tempat pembuangan akhir atau mencemari lingkungan, terutama laut. Selain itu, sampah plastik dapat terurai menjadi mikroplastik yang berbahaya bagi makhluk hidup. Diperlukan perubahan gaya hidup untuk mengurangi dampaknya.
    `;
    textAnorganikDampakSolusi.style.display = "flex";
    textAnorganikDampak.innerHTML = `
    <li>
      memperparah krisis sampah global saat ini.
    </li>
    <li>
      mencemari laut dan membunuh biota.
    </li>
    <li>
      menghasilkan mikroplastik berbahaya bagi manusia.
    </li>`;

    textAnorganikSolusi.innerHTML = `
    <li>
      terapkan gaya hidup minim sampah sehari.
    </li>
    <li>
      gunakan produk ramah lingkungan berulang.
    </li>
    <li>
     dukung sistem daur ulang dan bank sampah.
    </li>`;
  }

  // ------------------------- B3 ------------------------------
  const textB3 = document.getElementById("text-b3");
  const textB3Dampak = document.getElementById("text-b3-dampak");
  const textB3Solusi = document.getElementById("text-b3-solusi");
  const textB3DampakSolusi = document.getElementById("text-b3-dampak-solusi");

  if (dataPerJenis["B3"] > 0 && dataPerJenis["B3"] <= 5) {
    cardInfob3.style.display = "block";
    textB3.innerHTML = `
      Sampah B3 yang Anda buang sebesar <span style="font-weight: 800; font-size: 1.3rem; color: black">${dataPerJenis["B3"]} kg</span> tetap berbahaya meskipun jumlahnya kecil. Sampah ini mengandung zat beracun yang dapat mencemari lingkungan jika tidak ditangani dengan benar. Zat tersebut dapat meresap ke dalam tanah dan air, sehingga membahayakan kesehatan manusia. Oleh karena itu, diperlukan penanganan khusus untuk jenis sampah ini.
    `;
    textB3DampakSolusi.style.display = "flex";
    textB3Dampak.innerHTML = `
    <li>
      mengandung zat beracun berbahaya lingkungan.
    </li>
    <li>
      mencemari tanah dan air sekitar.
    </li>
    <li>
     berisiko menyebabkan gangguan kesehatan manusia.
    </li>`;

    textB3Solusi.innerHTML = `
    <li>
      simpan limbah b3 di tempat khusus.
    </li>
    <li>
      jangan campur dengan sampah rumah tangga.
    </li>
    <li>
      serahkan ke fasilitas pengelolaan resmi.
    </li>`;
  } else if (dataPerJenis["B3"] > 5 && dataPerJenis["B3"] <= 10) {
    cardInfob3.style.display = "block";
    textB3.innerHTML = `
      Sampah B3 sebesar <span style="font-weight: 800; font-size: 1.3rem; color: black">${dataPerJenis["B3"]} kg</span> memiliki potensi bahaya yang lebih besar terhadap lingkungan dan kesehatan. Zat kimia yang terkandung dapat mencemari tanah, air, dan udara jika tidak dikelola dengan benar. Paparan terhadap zat ini dapat menyebabkan berbagai gangguan kesehatan. Oleh karena itu, pengelolaan khusus sangat diperlukan.`;
    textB3DampakSolusi.style.display = "flex";
    textB3Dampak.innerHTML = `
    <li>
      mencemari lingkungan dengan bahan kimia berbahaya.
    </li>
    <li>
      merusak ekosistem dan organisme hidup sekitar.
    </li>
    <li>
      meningkatkan risiko penyakit serius pada manusia.
    </li>`;

    textB3Solusi.innerHTML = `
    <li>
      gunakan produk ramah lingkungan non beracun.
    </li>
    <li>
      kurangi penggunaan bahan kimia rumah tangga.
    </li>
    <li>
      buang limbah ke tempat pengolahan khusus.
    </li>`;
  } else if (dataPerJenis["B3"] > 10) {
    cardInfob3.style.display = "block";
    textB3.innerHTML = `
      Sampah B3 yang Anda buang sebesar <span style="font-weight: 800; font-size: 1.3rem; color: black">${dataPerJenis["B3"]} kg</span> sangat berbahaya dan dapat menimbulkan dampak serius bagi lingkungan dan manusia. Limbah ini dapat mencemari sumber air, merusak tanah, serta menyebabkan gangguan kesehatan dalam jangka panjang. Jika tidak ditangani dengan benar, dampaknya bisa semakin luas dan sulit dikendalikan. Oleh karena itu, pengelolaan harus dilakukan sesuai prosedur khusus.
    `;
    textB3DampakSolusi.style.display = "flex";
    textB3Dampak.innerHTML = `
    <li>
      mencemari air tanah dengan zat beracun.
    </li>
    <li>
      menyebabkan kerusakan lingkungan jangka panjang.
    </li>
    <li>
      meningkatkan risiko keracunan pada manusia.
    </li>`;

    textB3Solusi.innerHTML = `
    <li>
      gunakan layanan pengolahan limbah resmi terpercaya.
    </li>
    <li>
      hindari penggunaan bahan kimia berbahaya berlebih.
    </li>
    <li>
     edukasi masyarakat tentang bahaya limbah b3.
    </li>`;
  }
}

// Melakukan perulangan pada setiap data yang ada di dalam dataSampah.
dataSampah.forEach((item) => {
  // cek jenis sampah ada ga di dataPerJenis.
  if (dataPerJenis[item.jenis] !== undefined) {
    // Menambahkan jumlah sampah ke total berdasarkan jenisnya.
    dataPerJenis[item.jenis] += item.jumlah;
  }

  // Mengambil hari dari tanggal pencatatan.
  const hari = new Date(item.tanggal).getDay();

  // Mengubah nomor hari agar sesuai dengan urutan array dataPerHari.
  const index = hari === 0 ? 6 : hari - 1;

  // Menambahkan jumlah sampah ke data berdasarkan hari.
  dataPerHari[index] += item.jumlah;
});

updateHero();
renderBarChart();
renderDonutChart();

// --------------------------------------------------------------------------------- Helper -----------------------------------------------
function getHariIndex() {
  const hari = new Date().getDay();
  return hari === 0 ? 6 : hari - 1;
}

// -------------------------------------------------------------------------------- Render Tabel -------------------------------------------------------------
function renderHistori() {
  historiContainer.innerHTML = "";

  dataSampah.forEach((item, index) => {
    const tr = document.createElement("tr");
    tr.classList.add("tabel");

    const tanggal = new Date(item.tanggal);
    const formattedTanggal = tanggal.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    tr.innerHTML = `
      <td>${index + 1}</td>
      <td>${item.jenis}</td>
      <td>${item.jumlah} Kg</td>
      <td>${item.deskripsi || "-"}</td>
      <td>${formattedTanggal}</td>
    `;

    historiContainer.appendChild(tr);
  });
}
renderHistori();

// --------------------------------------------------------------------------------- Submit -----------------------------------------------------------
submitSampahBtn.addEventListener("click", function () {
  const jenisSampah = document.getElementById("jenis-sampah").value.trim();
  const jumlahSampah = parseFloat(
    document.getElementById("jumlah-sampah").value.trim(),
  );
  const deskripsiSampah = document
    .getElementById("deskripsi-sampah")
    .value.trim();

  if (
    !jenisSampah ||
    !jumlahSampah ||
    isNaN(jumlahSampah) ||
    jumlahSampah <= 0
  ) {
    modalWarning.style.display = "flex";
    setTimeout(() => modalWarning.classList.add("active"), 10);
    document.documentElement.style.overflow = "hidden";
    return;
  }

  const newData = {
    jenis: jenisSampah,
    jumlah: jumlahSampah,
    deskripsi: deskripsiSampah,
    tanggal: new Date(),
  };

  dataSampah.push(newData);

  // cek jenis sampah yang dipilih tersedia di dataPerJenis.
  if (dataPerJenis[jenisSampah] !== undefined) {
    dataPerJenis[jenisSampah] += jumlahSampah;
  }
  renderDonutChart();

  // Mengambil index/posisi hari saat ini.
  const hariIndex = getHariIndex();
  // tambah jumlah sampah yang baru ke total sampah dihari itu
  dataPerHari[hariIndex] += jumlahSampah;
  renderBarChart();

  // update tabel
  renderHistori();

  modalSampah.classList.remove("active");
  setTimeout(() => {
    modalSampah.style.display = "none";
  }, 300);

  modalSuccess.style.display = "flex";
  setTimeout(() => modalSuccess.classList.add("active"), 10);

  document.documentElement.style.overflow = "hidden";

  // reset input
  document.getElementById("jumlah-sampah").value = "";
  document.getElementById("deskripsi-sampah").value = "";

  updateHero();
});

// -------------------------------------------------------------------------------------- Reset ------------------------------------------------------------
resetBtn.addEventListener("click", function () {
  modalWarningReset.style.display = "flex";
  setTimeout(() => modalWarningReset.classList.add("active"), 10);

  document.documentElement.style.overflow = "hidden";

  batalReset.addEventListener("click", function () {
    modalWarningReset.classList.remove("active");
    setTimeout(() => {
      modalWarningReset.style.display = "none";
    }, 300);
    document.documentElement.style.overflow = "auto";
  });

  confirmReset.addEventListener("click", function () {
    dataSampah = [];
    dataPerJenis = { Organik: 0, Anorganik: 0, B3: 0 };
    dataPerHari = [0, 0, 0, 0, 0, 0, 0];

    renderDonutChart();
    renderBarChart();

    renderHistori();
    updateHero();

    modalWarningReset.classList.remove("active");
    setTimeout(() => {
      modalWarningReset.style.display = "none";
    }, 300);

    modalSuccess.style.display = "flex";
    setTimeout(() => modalSuccess.classList.add("active"), 10);
    document.documentElement.style.overflow = "hidden";
  });
});
