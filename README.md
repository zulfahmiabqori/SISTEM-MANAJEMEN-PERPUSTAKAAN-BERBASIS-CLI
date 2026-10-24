# SISTEM MANAJEMEN PERPUSTAKAAN BERBASIS
Program ini memungkinkan pengguna untuk mengelola data buku perpustakaan secara interaktif melalui terminal (CLI) dengan fitur CRUD (Create, Read, Update, Delete) serta beberapa fitur tambahan seperti validasi input, penyimpanan data ke file JSON, filter status buku, dan perhitungan denda keterlambatan. 

## Fitur
-  Menampilkan seluruh data buku dalam bentuk tabel.
- Menambahkan buku baru dengan kode otomatis.
- Mencari buku berdasarkan kode buku.
- Meminjam buku.
- Mengembalikan buku dan menghitung denda keterlambatan.
- Menghapus data buku berdasarkan kode.
- Menampilkan daftar buku berdasarkan status.
- Menyimpan data buku ke file buku.json.
- Memuat data buku dari buku.json saat program dijalankan.

## Cara Menjalankan
- Pastikan Node.js sudah terinstal.
- Buka terminal dan arahkan ke folder proyek.
- Pastikan file package.json sudah tersedia.
- Jalankan program dengan : npm start atau node main.js

## Format Data Buku
Setiap data buku disimpan dalam bentuk object di dalam array.
{
  kodebuku: "BK-001",
  judul: "Laskar Pelangi",
  peminjam: "-",
  tanggalpinjam: "-",
  batastanggalkembali: "-",
  status: "tersedia"
}

## Struktur Project 
- data.js → Berisi array data buku awal.
- functions.js → Berisi function CRUD dan fitur tambahan.
- main.js → Program utama berbasis CLI.
- package.json → Konfigurasi project Node.js.
- buku.json → File penyimpanan data buku.
- README.md → Dokumentasi project.

## Penggunaan
1. Pilih menu 0-7 sesuai operasi yang diinginkan
2. Ikuti instruksi yang muncul di layar
3. Pilih menu 0 untuk keluar dari program

## Requirements
- Node.js v22.15.0
- Terminal/Command Prompt

## Author
- Nama: Zulfahmi Abqori
- Tema Proyek: Sistem Manajemen Perpustakaan Berbasis CLI
- Kelas: Trial Study Club Backend Basic KSM VeteranTech
- Mentor: Nadia Jasmine Aulia