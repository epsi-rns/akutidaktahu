---
layout    : post
title     : Berkas Pajak - Pengisian e-Bupot Unifikasi
date      : 2022-06-13 09:17:35
slug      : berkas-pajak-unifikasi
tags      : [pajak]
keywords  : [arsip, ebupot, pph 23, pph 4(2), unifikasi]

toc       : "toc/berkaspajak.njk"
opengraphimage: "assets/posts/pajak/2022/06/68-kode-billing.png"

excerpt   : Pengisian e-Bupot Unifikasi

---

<a name="prakata"></a>

## Prakata

> Pengisian e-Bupot Unifikasi

Artikel ini adalah kelanjutan dari,
artikel e-Bupot Unifikasi yang kemarin.

Karena langkahnya cukup panjang,
maka perlu dijelaskan.

> _Just another bunch of screenshots_.

Secara sederhana prosesnya adalah begini:

1. Membuat Daftar Bukti Potong, lalu Posting Bukti Potong.

2. Membuat Kode Billing, lalu Membayar Tagihan.

3. Mendaftarkan Bukti Setor (NTPN), sampai lunas.

4. Melaporkan SPT Masa.

### Daftar Isi

* [Prakata](#prakata): Daftar Isi

* [1: Rekam Bukti Pemotongan](#rekam)

* [2: Posting](#posting)

* [3: Perekaman Bukti Penyetoran: Sebelum Pembayaran](#buktisetor1)

* [4: Perekaman Bukti Penyetoran: Setelah Pembayaran](#buktisetor2)

* [5: SPT Masa](#sptmasa)

* [Apa Selanjutnya?](#selanjutnya)

### Contoh Kasus

Sebelum memulai mari kita lihat,
contoh kasusnya terlebih dahulu,
sama seperti artikel yang lalu
yaitu PPh 4(2) sewa gedung.

![PPh Unifikasi: Persiapan: Contoh Kasus][01-pranala-sse]

Di sini kita akan memasukkan data PPh terlebih dahulu,
per transaksi. Baru kemudian kita masukkan data setor-nya, digabung.

-- -- --

<a name="rekam"></a>

## 1: Rekam Bukti Pemotongan

### Menu Akses Perekaman

Mengenai menu akses di situs sudah kita bahas di artikel sebelumnya.

![PPh Unifikasi: Menu Rekam][40-menu-rekam]

Maka kita langsung saja mengisi.
Pertama masukkan periode masa pajaknya.

### Identitas Lawan Transaksi

> Yang Dipotong

Berikut, identitas NPWP atau NIK yang akan dipotong.

![PPh Unifikasi: Identitas Lawan Transaksi][41-unifi-rekam-01]

### Rincian

> Kode Objek Pajak Dan Tarif

Rincian ini berisi banyak field yang taidak harus diisi semua.
Bagaimanapun kode pajak harus diisi,
supaya jelas apa yang akan dibayarkan.

![PPh Unifikasi: Rekam: Kode Pajak][41-unifi-rekam-02]

Dalam contoh ini kita memakai kode `403-02`,
yaitu untuk persewaan tanah/bangunan.

![PPh Unifikasi: Rekam: Kode Pajak 403][41-unifi-rekam-04-r]

Namun pilihan lainnya sebetulnya banyak,
misalnya ajasa konstruksi di bawah.
Sesuaikan saja dengan transaksi yang akan dipotong pajaknya.

![PPh Unifikasi: Rekam: Kode Pajak 409][41-unifi-rekam-04-k]

Dari kode objek pajak di atas,
didapat persentase tarif.
Misalnya 10%.

![PPh Unifikasi: Rekam: Tarif][41-unifi-rekam-03]

### Dasar Pemotongan

> Dokumen apa?

Masuk ke menu dasar pemotongan,
lalu klik tombol tambah.
Dasar pemotongan harus diisi dokumen terkait,
supaya dapat di baca di QR oleh lawan transaksi.
Supaya bukti potong yang sudah dibayarkan menjadi valid.

![PPh Unifikasi: Rekam Dasar Dokumen][41-unifi-rekam-04]

Setelah ditambahkan maka di tabel akan,
keluar daftar dokumen seperti di bawah.

![PPh Unifikasi: Daftar Dokumen][41-unifi-rekam-05]

Isian dasar pemotongan ini tergantung jenis pajaknya.

### Identitas Pemotong

> Yang Memotong

Setelah itu masukkan siapa yang memotong.
Lalus kilk tombol simpan.

![PPh Unifikasi: Identitas Pemotong][41-unifi-rekam-06]

Klik simpan.

### Lihat Bukti Potong pada e-SPT

> Daftar Bukti Potong

Kembali ke dalam dashboard.
Lihat  tabel yang di bawah,
yaitu daftar bukti potong.

Karena panjang saya bagi dua screenshot.
Ini yang kiri.

![PPh Unifikasi: Daftar Bukti Potong][48-unifi-daftar-01-ki]

Dan ini setelah di-scroll ke kanan.

![PPh Unifikasi: Daftar Bukti Potong][48-unifi-daftar-02-ka]

Kita lihat ada tulisan `belum posting`.

### Posting atau Lapor?

Tulisan ini akan berganti menjadi `sudah posting`,
setelah PPh di-posting ke laporan SPT.
Walaupun SPT-masa-nya sendiri belum dilaporkan.

Istilah terminologi-nya memang ambigu (rancu),
makanya perlu kita jelaskan di sini.
Kita ikuti saja alur yang diberikan DJP.

-- -- --

<a name="posting"></a>

## 2: Posting

Langkah berikutnya adalah posting.

### Posting Masa

Sangat mudah, cukup masukkan periode.

![PPh Unifikasi: Posting: Cek][51-posting-cek]

Lalu tekan tombol `cek`.

![PPh Unifikasi: Posting: Normal][51-posting-modal]

Dan akan diikuti oleh notifikasi sukses.

![PPh Unifikasi: Posting: Sukses][52-posting-sukses]

Di sini kita sudah dapat mengirim e-mail kepada lawan transaksi,
walaupun bukti potong belum valid karena belum lunas dibayar.

### Posting Ulang

> Pembetulan atau Revisi?

Bilamana belum dilakukan lapor masa,
maka kita masih dapat melakukan posting ulang.

![PPh Unifikasi: Posting: Posting Ulang/Pembaruan][53-posting-perbarui]

Berbeda dengan kondisi apabila sudah dilaporkan,
maka kita harus melakukan *pembetulan* SPT.
Hal ini karena bukti potong sudah dilaporkan di SPT masa.

![PPh Unifikasi: Posting: Pembetulan][54-posting-pembetulan]

Dalam contoh tangkapan layar di atas,
kita dapat melihat terminologi baru yaitu:
**pembetulan ke-1 revisi ke-0**.

> Kalau bingung, praktek saja!

-- -- --

<a name="buktisetor1"></a>

## 3: Perekaman Bukti Penyetoran

> Sebelum Pembayaran

### Akses Menu Setor

Cukup jelas di mana mencarinya.
Pertama ke Menu SPT Masa terlebih dahulu.

![PPh Unifikasi: Bukti Setor][60-menu-setor]

Di bawahnya ada menu accordion (gulung),
yang berisi tahapan proses.

1. Jumlah Tagihan Per Masa Pajak
2. Rekam Bukti Penyetoran
3. Ringkasan Pembayaran

![PPh Unifikasi: Bukti Setor: Menu Gulung][61-accord]

Paling atas berisi saringan berdasarkan masa pajaknya.

![PPh Unifikasi: Bukti Setor: Saring Masa][61-saring]

### Jumlah Tagihan Per Masa Pajak

Menu ini berisi tagihan.
Artinya kalau sudah dibayarkan,
maka isi tabelnya menjadi kosong.

Berikut contoh kondisi saat kita belum membayar tagihan.

![PPh Unifikasi: Bukti Setor: Daftar Tagihan][62-daftar-tagihan]

Dan berikut kondisi setelah mendaftarkan bukti setor.

![PPh Unifikasi: Bukti Setor: Daftar Tagihan][67-daftar-tagihan]

### Membikin Kode Billing

Perhatikan bahwa ada dua tombol.

![PPh Unifikasi: Kode Billing: Dua Tombol][63-tombol]

Kita dapat langsung membikin kode billingnya,
tanpa memasukkan data apapun.
Ini karena data bukti potong yang dibutuhkan kode billing,
sudah kita masukkan selengkapnya saat merekam bukti potong.

Mari kita tekan tombol `Buat Kode Billing`.
Maka akan muncul notifikasi berhasil membuat kode billing.

![PPh Unifikasi: Kode Billing: Notifikasi Sukses][66-kode-billling-sks]

Setelah kode billing berhasil dibikin,
maka tombol kedua akan aktif dan dapat ditekan.
Isinya seperti di bawah ini:

![PPh Unifikasi: Kode Billing: Lihat PDF][68-kode-billing]

Berkas ini adalah berkas PDF yang dapat diunduh.

![PPh Unifikasi: Kode Billing: Unduh PDF][69-menu-unduh]

Silahkan bayar untuk mendapatkan NTPN.

### Rekam Bukti Penyetoran

Berikutnya adalah merekam bukti penyetoran.

![PPh Unifikasi: Bukti Setor: Rekam Bukti][64-daftar-bukti-setor]

Kita akan membahas ini nanti.

### Ringkasan Pembayaran

Dalam kondisi belum terbayar,
maka di tabel berikutnya akan ada selisih pembayaran.

![PPh Unifikasi: Bukti Setor: Ringkasan Pembayaran][65-daftar-ringkasan]

-- -- --

<a name="buktisetor2"></a>

## 4: Perekaman Bukti Penyetoran

> Setelah Pembayaran

Setelah dilakukan pembayaran tabel di atas,
akan berubah.

### Rekam Bukti Penyetoran

Berikutnya adalah merekam bukti penyetoran.
Ini dapat kita lakukan dengan menekan tombol `tambah`.

![PPh Unifikasi: Bukti Setor: Daftar Bukti Setor][64-daftar-bukti-setor]

Bagian paling atas adalah isian NTPN.

![PPh Unifikasi: Bukti Setor: Rekam][71-rekam-setor]

Masukkan NTPN di kolom isian.
Klik tombol `Cek Surat Setoran Pajak`.
Maka akan ada notifikasi:

![PPh Unifikasi: Bukti Setor: Notifikasi][72-data-ditemukan]

Apabila data ditemukan,
maka kolom isian NTPN tidak dapat di-edit lagi.

![PPh Unifikasi: Bukti Setor: NTPN][73-ntpn]

Lalu kemudian ditampilkan pula rincian di bawahnya,
yaitu masa pajak, kode pajak, dan nominal.

![PPh Unifikasi: Bukti Setor: Simpan][74-simpan]

Klik simpan untuk menutup jendela.
Maka di tabel akan ada satu baris baru,
sesuai dengan isian yang baru saja kita masukkan.

![PPh Unifikasi: Bukti Setor: Daftar][75-tambah-daftar]

### Ringkasan Pembayaran

> Logikanya sih begitu.

Dalam kondisi sudah terbayar,
maka di tabel berikutnya tidak ada lagi selisih pembayaran.

Namun dalam kenyataannya, ini tampilan yang saya dapatkan.

![PPh Unifikasi: Bukti Setor: Selisih][76-selisih-a]

Ternyata kita harus menyimpan SPT,
terlebih dahulu supaya hasil selisihnya tepat.
Berikut hasil setelah SPT disimpan.

![PPh Unifikasi: Bukti Setor: Selisih][76-selisih-b]

Selanjutnya kita dapat melihat ke menu SPT.

-- -- --

<a name="sptmasa"></a>

## 5: SPT Masa

> Pengisian SPT Masa

### Daftar SPT

Di menu ini akan ditampilkan, mana yang sudah dilaporkan,
dan mana yang masih draft (pranala).

![PPh Unifikasi: Bukti Setor][77-status-draft]

Di sini ada dua tombol.

1. Lengkapi SPT
2. Kirim SPT

### Melengkapi SPT

Ada tiga menu gulung (accordion).
Dalam kasus kita, tidak perlu mengisi DOSS maupun DOPP

![PPh Unifikasi: Bukti Setor][78-lengkapi-isian]

Namun kita perlu memastikan,
apakah bukti setor kita sudah tercatat atau belum.

![PPh Unifikasi: Bukti Setor][78-lengkapi-bukti-str]

Simpanlah sesuai dengan nama,
penandatangan bukti potong di perusahaan masing-masing.

![PPh Unifikasi: Bukti Setor][78-lengkapi-simpan]

Bila berhasil akan ada notifikasi sukses

![PPh Unifikasi: Bukti Setor][78-lengkapi-sukses]

Namun kadangkala kita mesti bersabar karena ada waktu jeda dari DJP.

![PPh Unifikasi: Bukti Setor: Status Tunggu][67-status-tunggu]

### Mengirim SPT

Walaupun sudah disimpan, kita belum selesai,
karena SPT belum dikirim.

Untuk mengirim, kita perlu meng-upload sertifikat elektronik,
sebagai bagian dari verifikasi.

![PPh Unifikasi: Bukti Setor][79-upload-sertel]

Bila berhasil akan ada notifikasi sukses.

![PPh Unifikasi: Bukti Setor][79-upload-sukses]

Silahkan kembali dashboard,
untuk melihat daftar SPT yang telah dilaporkan.
Kemudian mengajukan bukti potong.

-- -- --

<a name="buktipotong"></a>

## 6: Bukti Potong

### Mengunduh Bukti Potong

Bila kita perhatikan di Dashboard,
maka terdapat icon berbeda.
Hal ini karena untuk mendapatkan bukti potong dari SPT yang baru ,
kita harus mengajukan pengajuan terlebih dahulu.
Untuk melakukan pengajuan, cukup dengan meng-klik tombol pengajuan.

![PPh Unifikasi: Unduh Bukti Potong][81-unduh-bakti-potong]

Bila tombol sudah ditekan akan muncul notifikasi,
dan kemudian ikon tombol berubah bentuk.
Setelah itu kita akan dapat mengunduh berkas,
dan muncul notifikasi berikutnya.

![PPh Unifikasi: Unduh Setor][82-unduh-sukses]

### Verifikasi

Berikutnya adalah verifikasi QR dari bukti potong.
Selalu lakukan verifikasi,
untuk memastikan bukti potong valid,
sebelum diberikan kepada lawan transaksi.

-- -- --

<a name="selanjutnya"></a>

### Penutup

Sebagai pengenalan cukup ini dahulu artikel berserinya.
Kita akan berlanjut ke artikel berseri yang lain.

[//]: <> ( -- -- -- links below -- -- -- )

[01-pranala-sse]:       {% postimage %}/pajak/2022/06/01-pranala-sse-unifikasi.png

[40-menu-rekam]:        {% postimage %}/pajak/2022/06/40-menu-rekam.png

[41-unifi-rekam-01]:    {% postimage %}/pajak/2022/06/41-unifi-rekam-01.png
[41-unifi-rekam-02]:    {% postimage %}/pajak/2022/06/42-unifi-rekam-02.png
[41-unifi-rekam-03]:    {% postimage %}/pajak/2022/06/43-unifi-rekam-03.png
[41-unifi-rekam-04]:    {% postimage %}/pajak/2022/06/44-unifi-rekam-04.png
[41-unifi-rekam-04-k]:  {% postimage %}/pajak/2022/06/44-unifi-rekam-04-k.png
[41-unifi-rekam-04-r]:  {% postimage %}/pajak/2022/06/44-unifi-rekam-04-r.png
[41-unifi-rekam-05]:    {% postimage %}/pajak/2022/06/44-unifi-rekam-05.png
[41-unifi-rekam-06]:    {% postimage %}/pajak/2022/06/45-unifi-rekam-06.png

[48-unifi-daftar-01-ki]:{% postimage %}/pajak/2022/06/48-unifi-daftar-01-ki.png
[48-unifi-daftar-02-ka]:{% postimage %}/pajak/2022/06/49-unifi-daftar-02-ka.png

[51-posting-cek]:       {% postimage %}/pajak/2022/06/51-posting-cek.png
[51-posting-modal]:     {% postimage %}/pajak/2022/06/51-posting-modal.png
[52-posting-sukses]:    {% postimage %}/pajak/2022/06/52-posting-sukses.png
[53-posting-perbarui]:  {% postimage %}/pajak/2022/06/53-posting-perbarui.png
[54-posting-pembetulan]:{% postimage %}/pajak/2022/06/54-posting-pembetulan.png

[60-menu-setor]:        {% postimage %}/pajak/2022/06/60-menu-setor.png
[61-accord]:            {% postimage %}/pajak/2022/06/61-accord.png
[61-saring]:            {% postimage %}/pajak/2022/06/61-saring.png
[62-daftar-tagihan]:    {% postimage %}/pajak/2022/06/62-daftar-tagihan.png
[63-tombol]:            {% postimage %}/pajak/2022/06/63-tombol.png
[64-daftar-bukti-setor]:{% postimage %}/pajak/2022/06/64-daftar-bukti-setor.png
[65-daftar-ringkasan]:  {% postimage %}/pajak/2022/06/65-daftar-ringkasan.png
[66-kode-billling-sks]: {% postimage %}/pajak/2022/06/66-kode-billling-sukses.png
[67-daftar-tagihan]:    {% postimage %}/pajak/2022/06/67-daftar-tagihan.png
[67-status-tunggu]:     {% postimage %}/pajak/2022/06/67-status-tunggu.png
[68-kode-billing]:      {% postimage %}/pajak/2022/06/68-kode-billing.png
[69-menu-unduh]:        {% postimage %}/pajak/2022/06/69-menu-unduh.png

[71-rekam-setor]:       {% postimage %}/pajak/2022/06/71-rekam-setor.png
[72-data-ditemukan]:    {% postimage %}/pajak/2022/06/72-data-ditemukan.png
[73-ntpn]:              {% postimage %}/pajak/2022/06/73-ntpn.png
[74-simpan]:            {% postimage %}/pajak/2022/06/74-simpan.png
[75-tambah-daftar]:     {% postimage %}/pajak/2022/06/75-tambah-daftar.png
[76-selisih-a]:         {% postimage %}/pajak/2022/06/76-selisih-a.png
[76-selisih-b]:         {% postimage %}/pajak/2022/06/76-selisih-b.png
[77-status-draft]:      {% postimage %}/pajak/2022/06/77-status-draft.png

[78-lengkapi-bukti-str]:{% postimage %}/pajak/2022/06/78-lengkapi-bukti-setor.png
[78-lengkapi-isian]:    {% postimage %}/pajak/2022/06/78-lengkapi-isian.png
[78-lengkapi-simpan]:   {% postimage %}/pajak/2022/06/78-lengkapi-simpan.png
[78-lengkapi-sukses]:   {% postimage %}/pajak/2022/06/78-lengkapi-sukses.png
[79-upload-sertel]:     {% postimage %}/pajak/2022/06/79-upload-sertel.png
[79-upload-sukses]:     {% postimage %}/pajak/2022/06/79-upload-sukses.png

[81-unduh-bakti-potong]:{% postimage %}/pajak/2022/06/81-unduh-bakti-potong.png
[82-unduh-sukses]:      {% postimage %}/pajak/2022/06/82-unduh-sukses.png
