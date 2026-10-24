import readline from "readline";

// import semua function yang dibutuhkan
import {
  tampilSemuaBuku,
  tambahBuku,
  cariBuku,
  pinjamBuku,
  kembalikanBuku,
  hapusBuku,
  filterStatus,
  muatFile
} from "./functions.js";

// memuat data dari buku.json saat program dijalankan
muatFile();

// membuat input dan output terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// menampilkan menu utama
const menu = () => {
  console.log(`
===== SISTEM PERPUSTAKAAN =====

1. Tampilkan Semua Buku
2. Tambah Buku
3. Cari Buku
4. Pinjam Buku
5. Kembalikan Buku
6. Hapus Buku
7. Filter Status
0. Keluar
`);
};

// membaca pilihan menu dari pengguna
const pilihMenu = () => {

  rl.question("Pilih menu : ", (pilihan) => {

    // menentukan fitur yang dijalankan
    switch (pilihan) {

      // READ - tampil semua buku
      case "1":
        console.log("Menu 1 - Tampilkan semua buku");
        tampilSemuaBuku();
        pilihMenu();
        break;

      // CREATE - tambah buku
      case "2":
        console.log("Menu 2 - Tambah Buku");

        rl.question("Judul buku : ", (judul) => {
          tambahBuku({ judul });
          pilihMenu();
        });

        break;

      // READ - cari buku berdasarkan kode
      case "3":
        console.log("Menu 3 - Cari Buku");

        rl.question("Kode buku : ", (kode) => {
          cariBuku(kode);
          pilihMenu();
        });

        break;

      // UPDATE - pinjam buku
      case "4":
        console.log("Menu 4 - Pinjam Buku");

        rl.question("Kode buku : ", (kode) => {

          rl.question("Nama peminjam : ", (nama) => {

            rl.question(
              "Batas Tanggal Kembali (YYYY-MM-DD) : ",
              (tgl) => {

                pinjamBuku(kode, nama, tgl);

                pilihMenu();
              }
            );
          });
        });

        break;

      // UPDATE - kembalikan buku
      case "5":
        console.log("Menu 5 - Kembalikan Buku");

        rl.question("Kode buku : ", (kode) => {

          rl.question(
            "Tanggal Dikembalikan (YYYY-MM-DD) : ",
            (tgl) => {

              kembalikanBuku(kode, tgl);

              pilihMenu();
            }
          );
        });

        break;

      // DELETE - hapus buku
      case "6":
        console.log("Menu 6 - Hapus Buku");

        rl.question("Kode buku : ", (kode) => {

          hapusBuku(kode);

          pilihMenu();
        });

        break;

      // menampilkan buku berdasarkan status
      case "7":
        console.log("Menu 7 - Filter Status");

        rl.question("Status (Dipinjam/Tersedia): ", (status) => {

          filterStatus(status);

          pilihMenu();
        });

        break;

      // keluar dari program
      case "0":
        console.log("Menu 0 - Keluar");
        console.log("Program selesai");
        rl.close();
        break;

      default:
        console.log("Menu tidak tersedia");
        pilihMenu();
        break;
    }
  });
};

// menjalankan program
menu();
pilihMenu();