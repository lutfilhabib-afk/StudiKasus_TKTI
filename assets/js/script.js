const tujuan = [
    {
        judul: "Data Lebih Terintegrasi",
        text: "Data dari berbagai layanan akademik dapat terhubung dalam satu sistem sehingga informasi tidak lagi tersebar di berbagai aplikasi/ website."
    },

    {
        judul: "Akses Lebih Mudah",
        text: "Pengguna dapat mengakses berbagai layanan akademik melalui satu platform tanpa harus berpindah dari satu aplikasi ke aplikasi lainnya."
    },

    {
        judul: "Proses Lebih Cepat",
        text: "Integrasi sistem membantu mempercepat proses layanan akademik karena informasi dapat diakses melalui sistem yang saling terhubung."
    },

    {
        judul: "Mengurangi Duplikasi Data",
        text: "Penggunaan sistem yang terintegrasi dapat mengurangi pencatatan data secara berulang dan meminimalkan kemungkinan terjadinya data ganda."
    },

    {
        judul: "Pengelolaan Lebih Efisien",
        text: "Pengelolaan layanan akademik menjadi lebih teratur dan efisien karena berbagai proses dapat dilakukan melalui satu sistem yang terintegrasi."
    }
];

let indexTujuan = 0;

const tujuanJudul = document.getElementById("tujuanjudul");
const tujuanText = document.getElementById("tujuanText");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");


function tampilkanTujuan() {

    tujuanJudul.textContent = tujuan[indexTujuan].judul;
    tujuanText.textContent = tujuan[indexTujuan].text;


    // Tombol Previous
    if (indexTujuan === 0) {
        prevBtn.style.visibility = "hidden";
    } else {
        prevBtn.style.visibility = "visible";
    }


    // Tombol Next
    if (indexTujuan === tujuan.length - 1) {
        nextBtn.style.visibility = "hidden";
    } else {
        nextBtn.style.visibility = "visible";
    }
}


// Tombol Next
nextBtn.addEventListener("click", function () {

    if (indexTujuan < tujuan.length - 1) {
        indexTujuan++;
        tampilkanTujuan();
    }

});


// Tombol Previous
prevBtn.addEventListener("click", function () {

    if (indexTujuan > 0) {
        indexTujuan--;
        tampilkanTujuan();
    }

});


// Menampilkan manfaat pertama saat halaman dibuka
tampilkanTujuan();



/* =========================
   MANFAAT
========================= */

const dataSebelum = [
    {
        judul: "Data tersebar",
        text: "Data akademik tersimpan di berbagai aplikasi yang berbeda."
    },

    {
        judul: "Proses lambat",
        text: "Pengguna harus berpindah aplikasi untuk menyelesaikan layanan akademik."
    },

    {
        judul: "Input berulang",
        text: "Data yang sama harus dimasukkan kembali pada layanan yang berbeda."
    },

    {
        judul: "Akses tersebar",
        text: "Pengguna harus membuka banyak platform untuk mengakses layanan akademik."
    }
];


const dataSesudah = [
    {
        judul: "Data terintegrasi",
        text: "Data akademik terhubung dalam satu sistem yang saling terintegrasi."
    },

    {
        judul: "Proses lebih cepat",
        text: "Layanan akademik dapat dilakukan melalui sistem yang saling terhubung."
    },

    {
        judul: "Input lebih efisien",
        text: "Data cukup dimasukkan satu kali dan dapat digunakan oleh layanan terkait."
    },

    {
        judul: "Akses lebih mudah",
        text: "Pengguna dapat mengakses berbagai layanan akademik melalui satu platform."
    }
];


const sebelumBtn = document.getElementById("sebelumBtn");
const sesudahBtn = document.getElementById("sesudahBtn");
const perubahanList = document.getElementById("perubahanList");


function tampilkanPerubahan(data) {

    perubahanList.innerHTML = "";

    data.forEach(function(item, index) {

        const perubahanItem = document.createElement("div");

        perubahanItem.classList.add("perubahan-item");

        perubahanItem.innerHTML = `
            <div class="perubahan-nomor">
                
            </div>

            <div class="perubahan-isi">
                <h3>${item.judul}</h3>
                <p>${item.text}</p>
            </div>
        `;

        perubahanList.appendChild(perubahanItem);
    });
}


/* TAMPILAN AWAL */
tampilkanPerubahan(dataSebelum);


/* TOMBOL SEBELUM */
sebelumBtn.addEventListener("click", function() {

    tampilkanPerubahan(dataSebelum);

    sebelumBtn.classList.add("active");
    sesudahBtn.classList.remove("active");

});


/* TOMBOL SESUDAH */
sesudahBtn.addEventListener("click", function() {

    tampilkanPerubahan(dataSesudah);

    sesudahBtn.classList.add("active");
    sebelumBtn.classList.remove("active");

});


// ================================
// DATA RISIKO
// ================================

const riskData = {
  migrasi: {
    title: "Migrasi data",
    text: "Data dari berbagai sistem lama kemungkinan memiliki format, struktur, dan kualitas yang berbeda. Saat seluruh data digabungkan ke sistem baru, data dapat mengalami kesalahan, duplikasi, kehilangan, atau ketidaksesuaian sehingga informasi akademik yang digunakan menjadi tidak akurat.",
    mitigation: "Backup data · cleansing · uji migrasi · validasi · rencana pemulihan"
  },

  pengguna: {
    title: "Resistensi pengguna",
    text: "Mahasiswa, dosen, dan admin sudah terbiasa menggunakan sistem yang berbeda-beda. Ketika sistem digabungkan, pengguna perlu mempelajari alur dan fitur baru sehingga dapat muncul penolakan, kebingungan, atau kesulitan dalam menggunakan sistem,  Sehingga membutuhkan waktu untuk beradaptasi dengan alur kerja yang baru.",
    mitigation: "Sosialisasi · pelatihan · keterlibatan pengguna · pendampingan"
  },

  biaya: {
    title: "Pembengkakan biaya",
    text: "Pengembangan sistem terintegrasi membutuhkan biaya untuk pengembangan aplikasi, infrastruktur, migrasi data, keamanan, pelatihan, dan pemeliharaan. Perubahan kebutuhan atau munculnya kendala teknis selama proyek dapat menyebabkan biaya melebihi anggaran yang telah ditetapkan.",
    mitigation: "Scope yang jelas · kontrol perubahan · evaluasi anggaran · prioritas fitur"
  },

  keamanan: {
    title: "Keamanan data",
    text: "Sistem terintegrasi akan menyimpan dan menghubungkan banyak data akademik dalam satu platform. Jika pengamanan tidak dilakukan dengan baik, data dapat diakses oleh pihak yang tidak berwenang, mengalami kebocoran, atau bahkan hilang akibat serangan maupun kesalahan sistem.",
    mitigation: "Hak akses · enkripsi · audit log · backup · pengujian keamanan"
  }
};

// ================================
// DETAIL RISIKO
// ================================

const riskDetail = document.getElementById("riskDetail");
const riskButtons = document.querySelectorAll(".risk-item");

riskButtons.forEach(function (button) {

  button.addEventListener("click", function () {

    // Hapus class active dari semua tombol
    riskButtons.forEach(function (item) {
      item.classList.remove("active");
    });

    // Tambahkan active ke tombol yang dipilih
    button.classList.add("active");

    // Ambil jenis risiko
    const selectedRisk = button.dataset.risk;

    // Ambil data berdasarkan risiko
    const data = riskData[selectedRisk];

    // Tampilkan detail risiko
    if (riskDetail && data) {

      riskDetail.innerHTML = `
        <p class="label">RISIKO TERPILIH</p>

        <h3>${data.title}</h3>

        <p>${data.text}</p>

        <div class="mitigation">
          <strong>Mitigasi</strong>
          <span>${data.mitigation}</span>
        </div>
      `;
    }
  });

});