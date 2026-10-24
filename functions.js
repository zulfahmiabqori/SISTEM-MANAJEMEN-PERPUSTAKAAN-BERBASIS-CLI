import fs from "fs";
import { databuku } from "./data.js";

// simpan data ke json
export const simpanFile = () => {
  fs.writeFileSync(
    "buku.json",
    JSON.stringify(databuku, null, 2)
  );
  console.log("Data berhasil disimpan");
};

// muat data dari json
export const muatFile = () => {
  if (fs.existsSync("buku.json")) {
    const data = fs.readFileSync("buku.json");
    const hasil = JSON.parse(data);

    databuku.splice(0, databuku.length, ...hasil);

    console.log("Data berhasil dimuat");
  } else {
    console.log("Menggunakan data awal");
  }
};

// generate kode buku
const generateKode = () => {
  return "BK-" + Math.floor(Math.random() * 1000);
};

// format tanggal yyyy-mm-dd
const tanggalHariIni = () => {
  return new Date().toISOString().split("T")[0];
};

// tampil semua buku
export const tampilSemuaBuku = () => {
  console.log("\nDaftar Semua Buku");

  console.table(
    databuku.map(buku => ({
      kodebuku: buku.kodebuku,
      judul: buku.judul,
      peminjam: buku.peminjam,
      tanggalpinjam: buku.tanggalpinjam,
      batastanggalkembali: buku.batastanggalkembali,
      status: buku.status
    }))
  );
};

// tambah buku
export const tambahBuku = (bukuBaru) => {

  if (!bukuBaru.judul) {
    console.log("Judul buku wajib diisi!");
    return;
  }

  const buku = {
    kodebuku: generateKode(),
    judul: bukuBaru.judul,
    peminjam: "-",
    tanggalpinjam: "-",
    batastanggalkembali: "-",
    status: "tersedia"
  };

  databuku.push(buku);

  simpanFile();

  console.log(
    `Buku '${buku.judul}' berhasil ditambahkan dengan kode ${buku.kodebuku}.`
  );
};

// cari buku
export const cariBuku = (kode) => {

  const buku = databuku.find(
    b => b.kodebuku.toLowerCase() === kode.toLowerCase()
  );

  if (!buku) {
    console.log(`Buku dengan kode ${kode} tidak ditemukan.`);
    return;
  }

  console.table([buku]);

  return buku;
};

// pinjam buku
export const pinjamBuku = (kode, peminjam, tanggal) => {

  const buku = databuku.find(
    b => b.kodebuku.toLowerCase() === kode.toLowerCase()
  );

  if (!buku) {
    console.log(`Buku dengan kode ${kode} tidak ditemukan.`);
    return;
  }

  if (buku.status === "dipinjam") {
    console.log(`Buku sedang dipinjam oleh ${buku.peminjam}.`);
    return;
  }

  buku.status = "dipinjam";
  buku.peminjam = peminjam;
  buku.tanggalpinjam = tanggalHariIni();
  buku.batastanggalkembali = tanggal;

  simpanFile();

  console.log(
    `Buku ${kode} berhasil dipinjam oleh ${peminjam}.`
  );
};

// kembalikan buku
export const kembalikanBuku = (kode, tanggalKembali) => {

  const buku = databuku.find(
    b => b.kodebuku.toLowerCase() === kode.toLowerCase()
  );

  if (!buku) {
    console.log(`Buku dengan kode ${kode} tidak ditemukan.`);
    return;
  }

  const batas = new Date(buku.batastanggalkembali);
  const kembali = new Date(tanggalKembali);

  const selisihHari = Math.ceil(
    (kembali - batas) / (1000 * 60 * 60 * 24)
  );

  if (selisihHari > 0) {
    console.log(
      `Terlambat ${selisihHari} hari. Denda Rp${selisihHari * 2000}`
    );
  } else {
    console.log("Tidak ada denda");
  }

  buku.status = "tersedia";
  buku.peminjam = "-";
  buku.tanggalpinjam = "-";
  buku.batastanggalkembali = "-";

  simpanFile();

  console.log(`Buku ${kode} berhasil dikembalikan.`);
};

// hapus buku
export const hapusBuku = (kode) => {

  const index = databuku.findIndex(
    b => b.kodebuku.toLowerCase() === kode.toLowerCase()
  );

  if (index === -1) {
    console.log(`Buku dengan kode ${kode} tidak ditemukan.`);
    return;
  }

  databuku.splice(index, 1);

  simpanFile();

  console.log(`Buku dengan kode ${kode} berhasil dihapus.`);
};

// filter status
export const filterStatus = (status) => {

  const hasil = databuku.filter(
    b => b.status.toLowerCase() === status.toLowerCase()
  );

  console.table(hasil);

  return hasil;
};
