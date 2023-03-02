---
layout    : post
title     : Lembar Kerja - Rancang Kolom
date      : 2018-09-03 09:17:35
slug      : lembar-kerja-tabel-01
tags      : [calc]
keywords  : [spreadsheet]

toc       : "toc/lembarkerja.njk"
opengraphimage: "assets/posts/lembarkerja/2018/09/42-tabel-bmex02.png"

excerpt   : Praktek merancang kolom tabel dengan merge cell
---

<a name="prakata"></a>

## Prakata

> Praktek merancang kolom tabel dengan merge cell. 

_Hari ini. Nyaris tanpa warna._

### Contoh Kasus: Pencatatan Keuangan

Praktek di dunia nyata yuuks.
Bayangkan suatu kantor di tempat teman-teman admin bekerja.
Ada beberapa akun, mulai dari kas kecil, bank, sampai giro.
Masing-masing harus ada pembukuan, pengeluaran dan pemasukan.

Mulai dari kehidupan sehari-hari.
Membukukan berkas keuangan,
misalnya bukti keluar kas kecil,
dan bukti masuk bank.

Mari menggabungkan ilmu-ilmu yang kemarin lalu,
sebelum melaju ke yang lebih lanjut.
Ini pekerjaan rutin yang tidak membutuhkan talenta.
kalau rajin pakai, akan mampu dengan sendirinya.
Lama-lama otak kita terbiasa.
Dan kita akan melakukan pekerjaan
dengan mudahnya begitu saja.

### Daftar Isi

* [Prakata](#prakata): Daftar Isi

* [Pengeluaran](#pengeluaran)

* [Pemasukan](#pemasukan)

* [Penutup](#penutup)

### Unduh Berkas

> Dipersiapkan, untuk memudahkan.

Lembar kerja spreadsheet tersedia,
supaya teman-teman bisa copy-paste.

* [Berkas Excel: 04-tabel.xlsx][source-format-xlsx]

### Khusus Tukang Lembur

> Coder baca ini yaaaa

Bagi teman-teman yang merancang aplikasi,
yang bekerja dengan excel atau calc,
jangan abaikan merancang tabel dan formulir yang tepat.
Pemahaman akan masukan dan keluaran dari aplikasi kita,
juga memperlihatkan kesungguhan kita membikin aplikasi.

Kita akan memulai dari tabel sederhana
sampai form cantique yang rumit.
Sebetulnya form warna-warni ini juga,
karena saya terilhami dari keluaran aplikasi,
yang begitu menarique untuk dibaca.

-- -- --

<a name="pengeluaran"></a>

## Pengeluaran

Bagian ini mengenai mengelola kolom.
Yang berat adalah, menyesuaikan kebutuhan isian data entry,
dengan isian tanda tangan.

![Lembar Kerja: Tabel Pengeluaran: Tanda Tangan][41-tabel-ttd]

### Sumber

Tabel di bawah ini adalah tabel yang umum,
keterangan lebih jelas dapat dilihat di sini:

* [Sumber Referensi][sumber-tabel]

[sumber-tabel]: https://www.akuntansilengkap.com/keuangan/bukti-kas-masuk/

### Contoh Hasil

Tujuannya adalah dari satu sheet lembar kerja,
kita dapat menulis berbagai macam pengeluaran.

Misalnya di bawah ini,
di tiap keterangan saya berikan tanggal dan pengguna kas.
Supaya hasilnya rata kiri, maka saya bikin kolom baru sebetulnya.

![Lembar Kerja: Tabel Pengeluaran: Contoh Satu][41-tabel-bk01]

Lalu lanjut dengan pola yang sama,
dapat kita lanjutkan pengeluaran dari hari ke hari.

![Lembar Kerja: Tabel Pengeluaran:  Contoh Dua][41-tabel-bk02]

Namun di sheet yang sama,
kita juga dapat menyelipkan pola yang sama sekali berbeda,
misalnya alat bantu perhitungan di bawah ini:

![Lembar Kerja: Tabel Pengeluaran: Contoh Tiga][41-tabel-bk03]

Yang terakhir ini lebih mudah karena tidak membutuhkan tanda-tangan.

### Unit

Kalau mau dilihat, dari kolom ke kolom,
sudah saya bikinkan ukuran baku.

Perhatikan merge cell,
pada angka terbilang.

![Lembar Kerja: Tabel Pengeluaran: ][41-tabel-bk04]

Sehingga dapat dicetak dalam ukura A4.
Atau biasanya A4 yang saya potong
dengan cutter menjadi dua lembar.
Semuanya saya pertahankan tanpa scaling.

![Lembar Kerja: Tabel Pengeluaran: ][41-tabel-scaling]

Ah koq hanya begini saja ya...
Mari kita lihat contoh berikutnya yang lebih beragam.

-- -- --

<a name="pemasukan"></a>

## Pemasukan

> Persiapkan Kolom dari Awal!

Contoh ini mirip dengan yang sebelumnya,
namun karena saya jarang memakai referensi acuan,
maka saya sederhanakan.

### Contoh Sederhana

Kalau mau lebih jelas lagi dapat melihat lembar kerja pemasukan,
dengan contoh-contoh kasus yang lebih beragam.
Yang ini masih sama saja seperti di atas.

![Lembar Kerja: Tabel Pemasukan: Contoh Sederhana][42-tabel-bm01]

### Kolom Tanda Tangan

Sekali lagi jangan lupa kolom tanda tangan:

![Lembar Kerja: Tabel Pemasukan: Tanda Tangan][42-tabel-ttd]

### Merge Cell

Perhatikan juga Merge Cell,
misalnya terbilang.

![Lembar Kerja: Tabel Pemasukan: Merge Cell][42-tabel-bmex01a]

Dan juga kolom tanda tangan.

![Lembar Kerja: Tabel Pemasukan: Merge Cell][42-tabel-bmex01b]

### Unit

Untuk ukuran kolom dan baris,
saya berikan contoh yang lebih singkat.

![Lembar Kerja: Tabel Pemasukan: Contoh Singkat][42-tabel-bm02]

Mari kita lihat ukurannya.

![Lembar Kerja: Tabel Pemasukan: Ukuran][42-tabel-bmex02]

Jangan bakukan dahulu ukuran formulirnya,
sebelum diuji dengan contoh data yang cukup.

antara satu kantor dengan kantor yang lain dapat saja berbeda.
Pada prakteknya membutuhkan beberapa bulan,
sebelum ketahuan pola yang dipakai di kantor masing-masing.
Kalau ternyata tidak muat ukuran A4,
Silahkan saja diubah scaling-nya.

### Praktek Rincian

Sekarang saatnya praktek untuk pembukuan perhitungan
yang disertai rincian.

![Lembar Kerja: Tabel Pemasukan: Praktek Rincian][42-tabel-bm03]

Kunci dari kerapian, ada di pembagian kolom,
yang sudah dipersiapkan sebelumnya.

![Lembar Kerja: Tabel Pemasukan: Pembagian Kolom][42-tabel-bmex03]

Kalau perlu tes, dengan masukan input yang lebih banyak.

![Lembar Kerja: Tabel Pemasukan: Uji Input][42-tabel-bm04]

Kalau sudah teruji. Baru dibakukan ukuran unitnya.

_Ini baru namanya excel engineer_.
Salah satu _job desc_ keahlian yang seringkali tidak ada di UMKM.


-- -- --

<a name="selanjutnya"></a>

## Apa Selanjutnya?

Kita masih harus berpraktek.
Setelah pembukuan bukti kas keluar dan masuk dari bank.
Kita lanjut ke pencatatan mutasi keuangan bulanan
untuk tiap-tiap akun.

[[Lembar Kerja - Tabel Isian][local-whats-next]].

[//]: <> ( -- -- -- links below -- -- -- )

[local-whats-next]:     /lembarkerja/2018/09/05/lembar-kerja-tabel-02.html

[source-format-xlsx]:   {% postimage %}/lembarkerja/2018/09/04-table.xlsx

[41-tabel-ttd]:         {% postimage %}/lembarkerja/2018/09/41-tabel-ttd.png
[41-tabel-bk01]:        {% postimage %}/lembarkerja/2018/09/41-tabel-bk01.png
[41-tabel-bk02]:        {% postimage %}/lembarkerja/2018/09/41-tabel-bk02.png
[41-tabel-bk03]:        {% postimage %}/lembarkerja/2018/09/41-tabel-bk03.png
[41-tabel-bk04]:        {% postimage %}/lembarkerja/2018/09/41-tabel-bk04.png
[41-tabel-scaling]:     {% postimage %}/lembarkerja/2018/09/41-tabel-scaling.png

[42-tabel-ttd]:         {% postimage %}/lembarkerja/2018/09/42-tabel-ttd.png
[42-tabel-bm01]:        {% postimage %}/lembarkerja/2018/09/42-tabel-bm01.png
[42-tabel-bm02]:        {% postimage %}/lembarkerja/2018/09/42-tabel-bm02.png
[42-tabel-bm03]:        {% postimage %}/lembarkerja/2018/09/42-tabel-bm03.png
[42-tabel-bm04]:        {% postimage %}/lembarkerja/2018/09/42-tabel-bm04.png
[42-tabel-bmex01a]:     {% postimage %}/lembarkerja/2018/09/42-tabel-bmex01a.png
[42-tabel-bmex01b]:     {% postimage %}/lembarkerja/2018/09/42-tabel-bmex01b.png
[42-tabel-bmex02]:      {% postimage %}/lembarkerja/2018/09/42-tabel-bmex02.png
[42-tabel-bmex03]:      {% postimage %}/lembarkerja/2018/09/42-tabel-bmex03.png
