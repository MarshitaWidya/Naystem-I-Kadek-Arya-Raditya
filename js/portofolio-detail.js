// ------------------------------------------------------------------------------------------- Modal Proyek ----------------------------------------------------------
const showModal = document.querySelectorAll(".lihat-karya-button");
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

// ------------------------------------------------------------------------------------- Tutup Modal Pake Silang -------------------------------------
closeModal.addEventListener("click", function () {
  modal.classList.remove("active");
  setTimeout(() => {
    modal.style.display = "none";
  }, 300);
  document.documentElement.style.overflow = "auto";
  document.body.style.overflow = "auto";
});

// --------------------------------------------------------------------------------- Tutup Modal Pake Klik Sembarang --------------------------------------
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

// ------------------------------------------------------------------------------------------ Bikin halaman detail ---------------------------------------

const portfolioData = {
  1: {
    image: "assets/porto-1.jpg",

    type: "Website",

    tech1: "html",
    tech2: "css",
    tech3: "javascript",

    title: "Sistem Informasi Lingkungan Sekolah",

    description: `
    Website ini dirancang sebagai sarana digital yang membantu warga sekolah
    memahami pentingnya menjaga, merawat, dan melestarikan lingkungan sekolah
    secara lebih mudah dan terarah. Di dalamnya tersedia berbagai informasi
    edukatif mengenai lingkungan, kebiasaan menjaga kebersihan, serta kegiatan
    yang dapat dilakukan bersama untuk menciptakan lingkungan sekolah yang
    nyaman dan berkelanjutan. Website ini juga mendukung pencatatan kegiatan
    lingkungan secara digital sehingga informasi mengenai aktivitas yang telah
    dilakukan dapat tersusun dengan lebih rapi. Dengan memanfaatkan teknologi
    web, penyampaian informasi lingkungan menjadi lebih menarik, interaktif,
    dan mudah diakses oleh warga sekolah.
  `,

    authorImage: "assets/user1.jpg",
    author: "Raka Pratama",
    date: "14 Januari 2026",
    opened: "87 kali dibuka",

    link: "",

    about: ` Sistem Informasi Lingkungan Sekolah merupakan sebuah platform digital yang
    dibuat untuk menjadi pusat informasi mengenai kepedulian dan pengelolaan
    lingkungan di lingkungan sekolah. Website ini menggabungkan unsur
    informasi, edukasi, dan pencatatan kegiatan dalam satu tampilan yang mudah
    digunakan. Pengguna dapat memperoleh pengetahuan mengenai pentingnya
    menjaga kebersihan, mengurangi sampah, serta membangun kebiasaan yang lebih
    peduli terhadap lingkungan sekitar. Selain memberikan informasi, website
    ini juga menjadi media untuk mendokumentasikan berbagai kegiatan
    lingkungan yang dilakukan oleh warga sekolah. Kehadiran platform ini
    diharapkan dapat membuat edukasi lingkungan terasa lebih dekat dengan
    kehidupan sehari-hari dan mendorong keterlibatan warga sekolah secara
    berkelanjutan.
  `,

    purpose: `
    Proyek ini bertujuan untuk meningkatkan kesadaran dan kepedulian warga
    sekolah terhadap kondisi lingkungan melalui pemanfaatan teknologi
    digital. Website dibuat agar informasi mengenai lingkungan dapat
    disampaikan dengan cara yang lebih menarik, terstruktur, dan mudah
    dipahami oleh berbagai pengguna. Selain itu, proyek ini bertujuan untuk
    mendorong terbentuknya kebiasaan positif seperti menjaga kebersihan,
    mengurangi penggunaan barang yang tidak diperlukan, serta ikut berperan
    dalam berbagai kegiatan lingkungan di sekolah. Fitur pencatatan kegiatan
    juga diharapkan dapat membantu sekolah mendokumentasikan aktivitas yang
    berkaitan dengan lingkungan secara lebih terorganisir. Dengan demikian,
    teknologi tidak hanya digunakan sebagai media informasi, tetapi juga
    sebagai sarana untuk membangun budaya sekolah yang lebih peduli,
    bertanggung jawab, dan berkelanjutan.
  `,
  },

  2: {
    image: "assets/porto-2.jpg",

    type: "Aplikasi",

    tech1: "javascript",
    tech2: "localstorage",
    tech3: "chart.js",

    title: "Aplikasi Pencatatan Sampah Harian",

    description: `
    Aplikasi Pencatatan Sampah Harian merupakan aplikasi sederhana yang
    dirancang untuk membantu pengguna mencatat jumlah dan jenis sampah yang
    dihasilkan setiap hari. Pengguna dapat memasukkan data berdasarkan
    kategori sampah sehingga kebiasaan dalam menghasilkan sampah dapat
    dipantau dengan lebih teratur. Data yang telah dicatat dapat disimpan
    dan digunakan untuk melihat perkembangan jumlah sampah dari waktu ke
    waktu. Aplikasi ini juga membantu pengguna memahami pola produksi sampah
    melalui informasi yang disajikan secara lebih terstruktur dan mudah
    dipahami. Dengan adanya pencatatan tersebut, pengguna dapat melakukan
    evaluasi terhadap kebiasaan sehari-hari serta mulai menentukan langkah
    sederhana untuk mengurangi jumlah sampah yang dihasilkan.
  `,

    authorImage: "assets/user3.jpg",
    author: "Shekei Laid",
    date: "28 Februari 2026",
    opened: "126 kali dibuka",

    link: "",

    about: `
    Aplikasi Pencatatan Sampah Harian adalah sebuah aplikasi digital yang
    berfokus pada proses pencatatan, penyimpanan, dan pemantauan data sampah
    yang dihasilkan pengguna setiap hari. Aplikasi ini memungkinkan pengguna
    mencatat jenis serta jumlah sampah yang dihasilkan sehingga informasi
    tersebut dapat digunakan untuk mengetahui kebiasaan pengelolaan sampah.
    Data pencatatan dapat disimpan secara lokal menggunakan LocalStorage,
    sehingga informasi tetap dapat digunakan kembali ketika pengguna membuka
    aplikasi. Selain itu, data dapat diolah menjadi informasi visual berupa
    statistik atau grafik agar pengguna lebih mudah melihat perkembangan
    jumlah sampah yang dihasilkan. Perpaduan antara pencatatan dan
    visualisasi membuat proses pemantauan menjadi lebih informatif dan
    membantu pengguna melakukan evaluasi secara berkala.
  `,

    purpose: `
    Proyek ini bertujuan untuk meningkatkan kesadaran pengguna terhadap
    kebiasaan menghasilkan sampah melalui proses pencatatan yang sederhana
    dan mudah dilakukan. Dengan mencatat jumlah serta jenis sampah setiap
    hari, pengguna dapat memperoleh gambaran yang lebih jelas mengenai pola
    produksi sampah dalam kehidupan sehari-hari. Informasi tersebut kemudian
    dapat digunakan sebagai bahan evaluasi untuk menentukan kebiasaan mana
    yang perlu dikurangi atau diperbaiki. Penggunaan teknologi penyimpanan
    lokal dan visualisasi data juga bertujuan membuat proses pemantauan terasa
    lebih praktis dan menarik. Pada akhirnya, aplikasi ini diharapkan dapat
    mendorong pengguna untuk lebih bertanggung jawab terhadap sampah yang
    mereka hasilkan serta mulai menerapkan kebiasaan yang lebih ramah
    lingkungan secara konsisten.
  `,
  },

  3: {
    image: "assets/porto-3.jpg",

    type: "Infografis",

    tech1: "figma",
    tech2: "adobe illustrator",
    tech3: "canva",

    title: "Mengenal Jenis Sampah Rumah Tangga",

    description: `
    Infografis Mengenal Jenis Sampah Rumah Tangga merupakan media edukasi
    visual yang dibuat untuk membantu masyarakat memahami berbagai jenis
    sampah yang sering ditemukan dalam aktivitas sehari-hari. Infografis ini
    menyajikan informasi mengenai perbedaan karakteristik sampah serta cara
    sederhana untuk mengenalinya sebelum dibuang. Penyampaian informasi
    menggunakan kombinasi ilustrasi, ikon, warna, dan teks singkat agar
    materi dapat dipahami dengan lebih cepat dan menarik. Selain mengenalkan
    jenis sampah, infografis ini juga memberikan gambaran mengenai pentingnya
    memilah sampah berdasarkan kategorinya. Dengan informasi yang sederhana
    dan visual yang mudah dipahami, media ini diharapkan dapat membantu
    meningkatkan pengetahuan serta membangun kebiasaan memilah sampah sejak
    dari rumah.
  `,

    authorImage: "assets/user2.jpg",
    author: "Made Aditya",
    date: "7 Maret 2025",
    opened: "74 kali dibuka",

    link: "",

    about: `
    Infografis Mengenal Jenis Sampah Rumah Tangga merupakan sebuah media
    komunikasi visual yang berfokus pada edukasi mengenai sampah yang
    dihasilkan dari kegiatan rumah tangga. Materi di dalamnya disusun untuk
    mengenalkan beberapa kategori sampah dengan cara yang lebih sederhana
    dibandingkan penjelasan dalam bentuk teks panjang. Setiap informasi
    dipadukan dengan elemen visual seperti ilustrasi, ikon, dan tata letak
    yang terstruktur sehingga pembaca dapat mengenali perbedaan setiap jenis
    sampah dengan lebih mudah. Infografis ini juga memberikan pemahaman awal
    mengenai pentingnya memilah sampah sebelum dibuang agar sampah dapat
    dikelola sesuai dengan karakteristiknya. Penggunaan media visual
    diharapkan membuat informasi lingkungan lebih menarik, mudah diingat,
    dan dapat diterapkan dalam kehidupan sehari-hari.
  `,

    purpose: `
    Proyek ini bertujuan untuk meningkatkan pemahaman masyarakat mengenai
    jenis-jenis sampah rumah tangga dan pentingnya melakukan pemilahan sejak
    dari sumbernya. Banyak orang masih mencampurkan berbagai jenis sampah
    karena belum mengetahui perbedaan karakteristik maupun cara
    pengelolaannya. Melalui infografis ini, informasi tersebut disampaikan
    secara ringkas, visual, dan mudah dipahami sehingga dapat menjangkau
    pembaca dari berbagai kalangan. Selain memberikan pengetahuan, proyek
    ini juga bertujuan mendorong terbentuknya kebiasaan sederhana seperti
    mengenali, memisahkan, dan mengelola sampah sesuai kategorinya. Dengan
    meningkatnya pemahaman mengenai jenis sampah, diharapkan masyarakat dapat
    mengambil keputusan yang lebih tepat sebelum membuang sampah serta ikut
    berkontribusi dalam menciptakan lingkungan yang lebih bersih dan
    terkelola dengan baik.
  `,
  },
  4: {
    image: "assets/porto-4.jpg",

    type: "Video Edukasi",

    tech1: "adobe premiere pro",
    tech2: "after effects",
    tech3: "capcut",

    title: "Langkah Mudah Mengurangi Sampah",

    description: `
    Video edukasi Langkah Mudah Mengurangi Sampah dibuat sebagai media
    pembelajaran yang mengajak masyarakat memahami bahwa mengurangi sampah
    dapat dimulai dari kebiasaan sederhana dalam kehidupan sehari-hari.
    Video ini membahas berbagai tindakan yang dapat dilakukan mulai dari
    lingkungan rumah hingga sekolah, seperti menggunakan barang yang dapat
    digunakan kembali, mengurangi penggunaan produk sekali pakai, membawa
    perlengkapan pribadi, serta lebih bijak dalam memilih dan menggunakan
    barang. Materi disampaikan melalui perpaduan visual, teks, ilustrasi, dan
    penjelasan yang mudah dipahami agar pesan lingkungan dapat diterima
    dengan baik. Dengan pendekatan yang sederhana dan dekat dengan aktivitas
    sehari-hari, video ini diharapkan mampu mendorong penonton untuk mulai
    melakukan perubahan kecil secara konsisten.
  `,

    authorImage: "assets/user4.jpg",
    author: "Komang Dimas",
    date: "21 April 2025",
    opened: "213 kali dibuka",

    link: "",

    about: `
    Video Langkah Mudah Mengurangi Sampah merupakan media edukasi audiovisual
    yang membahas cara-cara sederhana untuk mengurangi produksi sampah dalam
    kehidupan sehari-hari. Video ini mengambil contoh kegiatan yang dekat
    dengan masyarakat sehingga informasi yang disampaikan tidak hanya
    bersifat teoritis, tetapi dapat dipahami melalui situasi yang mudah
    ditemukan di rumah maupun lingkungan sekolah. Materi dikemas dengan
    perpaduan antara visual, teks pendukung, ilustrasi, dan penyuntingan yang
    membuat alur informasi lebih menarik untuk diikuti. Pembahasan
    difokuskan pada perubahan kebiasaan yang dapat dilakukan tanpa langkah
    yang rumit. Melalui penyampaian audiovisual tersebut, pesan mengenai
    pengurangan sampah diharapkan dapat diterima dengan lebih mudah dan
    memberikan inspirasi bagi penonton untuk menerapkannya.
  `,

    purpose: `
    Proyek ini bertujuan untuk memberikan edukasi mengenai pentingnya
    mengurangi sampah melalui kebiasaan sederhana yang dapat diterapkan
    dalam kehidupan sehari-hari. Video dibuat untuk menunjukkan bahwa upaya
    menjaga lingkungan tidak selalu membutuhkan tindakan yang besar, tetapi
    dapat dimulai dari keputusan kecil seperti mengurangi barang sekali
    pakai, menggunakan kembali barang yang masih layak, dan membawa
    perlengkapan pribadi. Selain memberikan informasi, proyek ini juga
    bertujuan membangun kesadaran bahwa jumlah sampah yang dihasilkan sangat
    berkaitan dengan kebiasaan manusia dalam menggunakan berbagai produk.
    Dengan penyampaian yang ringan dan mudah dipahami, video ini diharapkan
    dapat mendorong siswa, keluarga, dan masyarakat untuk mulai menerapkan
    kebiasaan mengurangi sampah secara konsisten serta menjadi bagian dari
    upaya menciptakan lingkungan yang lebih bersih dan berkelanjutan.
  `,
  },
  5: {
    image: "assets/porto-5.jpg",

    type: "Website",

    tech1: "javascript",
    tech2: "chart.js",
    tech3: "localstorage",

    title: "Dashboard Statistik Pengelolaan Sampah",

    description: `
    Dashboard Statistik Pengelolaan Sampah merupakan sebuah platform
    interaktif yang dirancang untuk membantu pengguna memahami data
    pengelolaan sampah melalui penyajian informasi dalam bentuk statistik dan
    visualisasi yang mudah dipahami. Dashboard ini menampilkan perubahan
    jumlah sampah berdasarkan jenis serta periode waktu tertentu sehingga
    pengguna dapat melihat perkembangan data dengan lebih jelas. Informasi
    yang sebelumnya sulit dipahami jika hanya berupa angka dapat ditampilkan
    melalui grafik dan ringkasan statistik yang lebih informatif. Dengan
    adanya dashboard ini, pengguna dapat melakukan pemantauan, membandingkan
    data, serta mengenali pola perubahan jumlah sampah dari waktu ke waktu.
    Tampilan yang interaktif juga membuat proses memahami data lingkungan
    menjadi lebih menarik dan praktis.
  `,

    authorImage: "assets/user1.jpg",
    author: "Alvin Mahendra",
    date: "16 Juni 2026",
    opened: "98 kali dibuka",

    link: "",

    about: `
    Dashboard Statistik Pengelolaan Sampah adalah website yang berfungsi
    sebagai media untuk mengolah dan menyajikan data pengelolaan sampah
    secara visual. Dashboard ini dirancang agar pengguna tidak hanya melihat
    angka jumlah sampah, tetapi juga dapat memahami perubahan data
    berdasarkan kategori dan waktu tertentu. Data yang tersedia dapat
    ditampilkan dalam bentuk grafik, statistik, maupun informasi ringkas
    sehingga hubungan antara jumlah sampah dan periode pencatatan dapat
    terlihat dengan lebih jelas. Interaksi pada dashboard memberikan
    pengalaman yang lebih dinamis ketika pengguna ingin memahami informasi
    yang tersedia. Dengan menggabungkan pengolahan data dan visualisasi,
    website ini dapat menjadi alat bantu untuk melakukan pemantauan serta
    evaluasi terhadap kondisi pengelolaan sampah berdasarkan data yang telah
    dicatat.
  `,

    purpose: `
    Proyek ini bertujuan untuk mempermudah pengguna dalam memahami dan
    memantau perkembangan data pengelolaan sampah melalui visualisasi yang
    informatif. Data jumlah sampah yang disajikan dalam bentuk statistik dan
    grafik dapat membantu pengguna melihat perubahan berdasarkan jenis dan
    waktu tanpa harus membaca kumpulan angka secara keseluruhan. Dashboard
    ini juga bertujuan mendukung proses evaluasi dengan memberikan gambaran
    mengenai pola peningkatan atau penurunan jumlah sampah yang tercatat.
    Informasi tersebut dapat digunakan sebagai bahan pertimbangan untuk
    menentukan langkah pengelolaan yang lebih baik. Selain itu, proyek ini
    menunjukkan bagaimana teknologi digital dapat dimanfaatkan untuk
    mengubah data lingkungan menjadi informasi yang lebih mudah dipahami,
    sehingga pengguna dapat meningkatkan kesadaran dan mengambil keputusan
    berdasarkan data yang tersedia.
  `,
  },

  6: {
    image: "assets/porto-6.jpg",

    type: "Poster Digital",

    tech1: "adobe photoshop",
    tech2: "adobe illustrator",
    tech3: "canva",

    title: "Satu Langkah Untuk Bumi",

    description: `
    Poster digital Satu Langkah Untuk Bumi merupakan karya visual bertema
    lingkungan yang dibuat untuk mengajak masyarakat lebih peduli terhadap
    kebersihan dan kondisi lingkungan di sekitarnya. Pesan utama dalam poster
    menekankan bahwa menjaga lingkungan tidak selalu harus dimulai dari
    tindakan besar, tetapi dapat dilakukan melalui kebiasaan sederhana yang
    diterapkan secara konsisten. Poster mengangkat pentingnya mengurangi
    sampah, menjaga kebersihan, dan lebih bertanggung jawab terhadap barang
    yang digunakan dalam kehidupan sehari-hari. Dengan memanfaatkan elemen
    visual, tipografi, ilustrasi, dan komposisi yang menarik, informasi dapat
    disampaikan secara singkat namun tetap memiliki pesan yang kuat. Media
    ini diharapkan mampu menarik perhatian sekaligus mendorong masyarakat
    untuk mulai melakukan satu langkah positif bagi lingkungan.
  `,

    authorImage: "assets/user3.jpg",
    author: "Putri Maharani",
    date: "3 September 2025",
    opened: "65 kali dibuka",

    link: "",

    about: `
    Satu Langkah Untuk Bumi merupakan sebuah poster digital yang dirancang
    sebagai media kampanye sederhana mengenai kepedulian terhadap
    lingkungan. Poster ini menggunakan pendekatan komunikasi visual untuk
    menyampaikan pesan bahwa setiap orang memiliki kesempatan untuk
    berkontribusi dalam menjaga kebersihan dan mengurangi permasalahan
    sampah. Isi poster dibuat dengan bahasa yang mudah dipahami dan
    dipadukan dengan elemen desain yang mendukung pesan utama sehingga
    informasi dapat diterima dengan cepat oleh pembaca. Fokus utama karya
    ini adalah mengajak masyarakat memperhatikan kebiasaan sehari-hari yang
    dapat berdampak terhadap lingkungan, mulai dari mengurangi sampah hingga
    menjaga kebersihan tempat tinggal dan ruang publik. Sebagai media visual,
    poster ini diharapkan dapat menjadi pengingat yang sederhana namun
    bermakna untuk membangun kepedulian lingkungan.
  `,

    purpose: `
    Proyek ini bertujuan untuk meningkatkan kesadaran masyarakat bahwa
    menjaga lingkungan dapat dimulai melalui tindakan kecil yang dilakukan
    secara konsisten. Poster dibuat untuk menyampaikan ajakan mengenai
    pengurangan sampah dan pentingnya menjaga kebersihan dengan cara yang
    singkat, menarik, serta mudah diingat. Pesan yang disampaikan diharapkan
    dapat mendorong pembaca untuk mulai memperhatikan kebiasaan sehari-hari,
    seperti mengurangi penggunaan barang sekali pakai, membuang sampah pada
    tempatnya, dan menjaga lingkungan di sekitar mereka. Selain menjadi media
    penyampaian informasi, poster ini juga bertujuan membangun rasa tanggung
    jawab bahwa kondisi lingkungan merupakan hasil dari tindakan bersama.
    Melalui pesan Satu Langkah Untuk Bumi, proyek ini mengajak masyarakat
    memahami bahwa perubahan positif dapat dimulai dari satu tindakan kecil
    yang kemudian dilakukan secara berkelanjutan.
  `,
  },

  7: {
    image: "assets/porto-7.jpg",

    type: "Komik Edukasi",

    tech1: "clip studio paint",
    tech2: "adobe illustrator",
    tech3: "canva",

    title: "Petualangan Kecil Menjaga Lingkungan",

    description: `
    Petualangan Kecil Menjaga Lingkungan merupakan komik edukasi yang
    menggunakan cerita ringan, karakter menarik, dan situasi yang dekat
    dengan kehidupan sehari-hari untuk menyampaikan pesan mengenai
    kepedulian terhadap lingkungan. Cerita di dalam komik mengajak pembaca
    mengenal kebiasaan sederhana seperti memilah sampah berdasarkan jenisnya,
    membuang sampah pada tempat yang sesuai, serta menjaga kebersihan di
    lingkungan sekitar. Pesan edukasi disampaikan melalui alur cerita dan
    interaksi antar karakter sehingga informasi tidak terasa seperti materi
    pembelajaran yang terlalu formal. Penggunaan ilustrasi dan dialog juga
    membantu pembaca memahami pesan dengan lebih mudah. Komik ini diharapkan
    dapat menjadi media edukasi yang menyenangkan sekaligus mendorong
    pembaca untuk menerapkan kebiasaan menjaga lingkungan dalam kehidupan
    sehari-hari.
  `,

    authorImage: "assets/user4.jpg",
    author: "Bagus Wiratama",
    date: "12 November 2025",
    opened: "157 kali dibuka",

    link: "",

    about: `
    Petualangan Kecil Menjaga Lingkungan adalah sebuah karya komik edukasi
    yang menggabungkan cerita, ilustrasi, dan pesan lingkungan dalam satu
    media yang menarik. Komik ini dirancang untuk memperkenalkan kebiasaan
    memilah sampah dan menjaga kebersihan melalui pengalaman para karakter
    dalam cerita. Setiap adegan dibuat untuk menggambarkan situasi yang
    mungkin ditemui dalam kehidupan sehari-hari sehingga pembaca dapat
    menghubungkan pesan yang disampaikan dengan lingkungan mereka sendiri.
    Karakter dan dialog digunakan sebagai bagian penting dalam menyampaikan
    informasi tanpa membuat pembaca merasa sedang membaca materi yang terlalu
    formal. Melalui pendekatan storytelling, pembaca diajak mengikuti
    perjalanan karakter sekaligus memahami mengapa kebiasaan sederhana dalam
    mengelola sampah memiliki peran penting dalam menjaga lingkungan tetap
    bersih dan nyaman.
  `,

    purpose: `
    Proyek ini bertujuan untuk menyampaikan edukasi mengenai pemilahan sampah
    dan kebersihan lingkungan melalui media yang lebih ringan, kreatif, dan
    mudah diterima oleh pembaca. Penggunaan cerita dan karakter diharapkan
    dapat membuat informasi mengenai lingkungan terasa lebih dekat dengan
    kehidupan sehari-hari, terutama bagi pembaca yang lebih tertarik pada
    penyampaian pesan melalui visual dan alur cerita. Komik ini juga
    bertujuan menanamkan pemahaman bahwa menjaga lingkungan dapat dimulai
    dari kebiasaan sederhana, seperti mengenali jenis sampah, memilahnya
    dengan benar, dan menjaga kebersihan di tempat beraktivitas. Selain
    memberikan informasi, proyek ini diharapkan dapat membangun kesadaran
    bahwa tindakan kecil yang dilakukan secara rutin dapat memberikan
    dampak positif bagi lingkungan serta menginspirasi pembaca untuk ikut
    menerapkannya dalam kehidupan sehari-hari.
  `,
  },

  8: {
    image: "assets/porto-8.jpg",

    type: "Proyek IoT",

    tech1: "esp32",
    tech2: "arduino ide",
    tech3: "sensor ultrasonik",

    title: "Tempat Sampah Pintar Berbasis IoT",

    description: `
    Tempat Sampah Pintar Berbasis IoT merupakan proyek teknologi yang
    memanfaatkan mikrokontroler dan sensor untuk membantu memantau kondisi
    tempat sampah secara otomatis. Sistem ini dirancang agar pengguna dapat
    mengetahui kondisi tempat sampah tanpa harus melakukan pemeriksaan secara
    manual. Sensor digunakan untuk mendeteksi kondisi atau tingkat kepenuhan
    tempat sampah, kemudian data tersebut diproses oleh mikrokontroler untuk
    menghasilkan informasi yang dapat digunakan sebagai pemberitahuan.
    Konsep ini memanfaatkan teknologi Internet of Things untuk menghubungkan
    perangkat fisik dengan sistem pemantauan yang lebih praktis. Dengan
    adanya otomatisasi tersebut, pengelolaan tempat sampah dapat dilakukan
    dengan lebih teratur dan responsif. Proyek ini menjadi contoh penerapan
    teknologi sederhana untuk membantu menyelesaikan permasalahan kebersihan
    dalam kehidupan sehari-hari.
  `,

    authorImage: "assets/user2.jpg",
    author: "Yoga Saputra",
    date: "25 Juli 2026",
    opened: "184 kali dibuka",

    link: "",

    about: `
    Tempat Sampah Pintar Berbasis IoT adalah sebuah proyek yang
    menggabungkan mikrokontroler, sensor, dan konsep Internet of Things untuk
    menciptakan sistem pemantauan tempat sampah secara otomatis. Perangkat
    dirancang untuk mendeteksi kondisi tempat sampah menggunakan sensor yang
    sesuai, kemudian mikrokontroler memproses data yang diperoleh dari sensor
    tersebut. Informasi mengenai kondisi tempat sampah dapat digunakan untuk
    membantu pengguna mengetahui kapan tempat sampah membutuhkan perhatian
    atau pengosongan. Sistem ini dibuat sebagai solusi teknologi yang dapat
    mengurangi ketergantungan pada pemeriksaan secara manual. Selain menjadi
    penerapan konsep IoT, proyek ini juga menunjukkan bagaimana perangkat
    elektronik sederhana dapat dikembangkan menjadi sistem yang lebih
    fungsional untuk mendukung pengelolaan kebersihan dan sampah secara
    efisien.
  `,

    purpose: `
    Proyek ini bertujuan untuk membantu meningkatkan efisiensi dalam
    pemantauan kondisi tempat sampah dengan memanfaatkan sensor dan
    mikrokontroler. Sistem otomatis diharapkan dapat memberikan informasi
    mengenai kondisi tempat sampah sehingga pengguna dapat mengetahui kapan
    diperlukan tindakan tanpa harus memeriksanya secara langsung setiap saat.
    Dengan pemantauan yang lebih teratur, risiko tempat sampah dibiarkan
    terlalu penuh dapat dikurangi dan proses pengelolaan sampah menjadi lebih
    responsif. Proyek ini juga bertujuan memperkenalkan penerapan Internet of
    Things dalam bidang lingkungan, khususnya dalam membantu menyelesaikan
    permasalahan yang berkaitan dengan kebersihan. Melalui pemanfaatan
    teknologi yang sederhana namun fungsional, proyek ini menunjukkan bahwa
    IoT dapat digunakan untuk menciptakan solusi yang mendukung lingkungan
    yang lebih bersih, tertata, dan mudah dipantau.
  `,
  },
};

// ------------- Mengambil parameter ID dari URL -------------
const params = new URLSearchParams(window.location.search);

// ------------- Mengambil nilai ID portofolio -------------
const id = params.get("id");

// ------------- Mengambil data sesuai ID portofolio -------------
const data = portfolioData[id];

// ------------- Mengecek apakah data portofolio tersedia -------------
if (data) {
  // Gambar
  document.getElementById("detail-image").src = data.image;

  // Jenis karya
  document.getElementById("detail-type").textContent = data.type;

  // Teknologi
  document.getElementById("tech1").textContent = data.tech1;
  document.getElementById("tech2").textContent = data.tech2;
  document.getElementById("tech3").textContent = data.tech3;

  // Judul
  document.getElementById("detail-title").textContent = data.title;

  // Deskripsi
  document.getElementById("detail-description").textContent = data.description;

  // Pembuat
  document.getElementById("detail-author-image").src = data.authorImage;

  document.getElementById("detail-author").textContent = data.author;

  // Tanggal
  document.getElementById("detail-date").textContent = data.date;

  // Dibuka
  document.getElementById("detail-opened").textContent = data.opened;

  // Tentang
  document.getElementById("detail-about").textContent = data.about;

  // Tujuan
  document.getElementById("detail-purpose").textContent = data.purpose;
}
