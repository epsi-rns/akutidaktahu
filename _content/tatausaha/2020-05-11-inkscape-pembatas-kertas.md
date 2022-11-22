---
layout    : post
title     : Inkscape - Pembatas Kertas
date      : 2022-05-11 09:17:35
slug      : inkscape-pembatas-kertas
tags      : [tatausaha]
keywords  : [pph21, espt]

toc       : "toc/tatausaha.njk"
opengraphimage: "assets/posts/tatausaha/2022/05/17-pratilik-pdf.png"

excerpt   : Membikin pembatas kertas sederhana dengan Inkscape.
---

<a name="prakata"></a>

## Prakata

> Membikin pembatas kertas sederhana dengan Inkscape.

Sebagai **kang arsip** sejati,
aku hobi membikin pembatas kertas dengan kertas warna,
untuk berbagai aneka ragam keperluan.
Untuk keperluan sendiri saya bikin dengan font yang aneh-aneh,
pokoke eksperimen dan eksplorasi diri deh.
Tapi untuk keperluan kantor aku bikin yang agak resmi formal.

### Daftar Isi

* [Prakata](#prakata): Daftar Isi

* [Contoh Kasus](#contohkasus)

* [Tahapan Pengerjaan](#pengerjaan)

* [Penutup](#penutup)

-- -- --

<a name="contohkasus"></a>

## Contoh Kasus

Kita ambil contoh kasus bukti kas masuk dan bukti kas keluar saja.
Biasanya ini untuk ditaruh di ordner ukuran kuitansi.

### Variasi Lapisan Layer

> Cukup Satu File SVG!

Kebetulan aku menangani beberapa perusahaan,
untuk urusan akunting dan pajak sebagai usaha sampingan.
Tiap perusahaan ada kas, dan bank.

![Pembatas Kertas: Lapisan Layer: Akun dan Judul][layer-akun]

Bank-nya-pun berbeda-beda, BNI, Mandiri dan BCA.
Masing-masing dibedakan menjadi bukti kas keluar dan bukti kas masuk.
Semua kuberi warna border berbeda.

![Pembatas Kertas: Lapisan Layer: Bulan][layer-bulan]

Untuk tiap jenis, mesti dibikin dua belas lembar,
karena ada dua belas bulan.

### Source

Berkas dapat diunduh di sini:

* [pembatas-kertas.svg][pembatas-kertas-svg]

### Kas Kecil

![Pembatas Kertas: Kas Kecil][02-feb-kas]

### Mandiri

![Pembatas Kertas: Bank Mandiri][01-jan-mandiri]

-- -- --

<a name="pengerjaan"></a>

## Tahapan Pengerjaan

> Cara pembikinan

### Pengaturan Berkas

Biasanya kuatur dahulu ukuran berkasnya.
Misalnya 1600px x 1000px.

Unit semua dalam pixel.
Walaupun silahkan saja pakai unit lain, dan ukuran lain.

Saat memakai pixel.
Biasanya aku memakai skala 1.
Namun yang ini sudah terlanjur lupa kuatur.

![Pembatas Kertas: Pengaturan Berkas][11-atur-dok]

### Memulai

Dari yang sederhana. Membikin border pinggir.

![Pembatas Kertas: Pengaturan Berkas][12-one-layer]

Kemudian dapat dibayangkan sendiri.

### Lapisan Layer Aktif

> Satu satu blo, sabar...

Lapisan yang diaktifkan, hanya satu.
Yang lain disenyumbinyakn saja dahulu tampilannya.

![Pembatas Kertas: Active Layer][13-all-layer]

Kalau semua lapisan layer diaktifkan, hasilnya menjadi begini:

![Pembatas Kertas: Active Layer][14-all-active]

### Export

Saat meng-export, cetaklah satu-per-satu, sesuai nama kebutuhan.

![Pembatas Kertas: Export ke PNG][15-export]

Beri nama yang sesuai.

Pakai format PNG, supaya kualitas gambar tidak berkurang (luntur).

### Mencetak

Aku biasanya memakai libreoffice writer, ataupun microsoft word,
yaitu untuk mempersiapkan gambar cetakan.

![Pembatas Kertas: Mencetak dengan Bantuan Writer][16-writer]

Berkas dapat diunduh di sini:

* [pembatas-bkm-kas.odt][pembatas-bkm-kas-odt]

### Preview Draft (Pratilik Pranala)

> Jangan lupa pamer 😅!

Apabila perlu review dari atasan,
dapat dengan mudah kita bikin berkas pdf,
dari libreoffice writer, ataupun microsoft word.

![Pembatas Kertas: Preview Draft (Pratilik Pranala) PDF][17-pratilik-pdf]

Dua belas halaman dalam satu berkas PDF,
dikirim lewat whatsapp ke atasan.
Atau cukup bulan yang diperlukan saja,
kalau niatnya hanya preview (pratilik) atau draft (pranala).

### Cemungudh

> Sekian. Itu saja.

Tidak perlu repot membikin dari awal,
karena source sudah tersedia.
Kalau mau membikin dari awal-pun,
ini cukup sederhana sebetulnya.

Jangan lupa kopinya diminum.
Sempatkan bocing (bobo ciang) sepuluh menit,
kalau memang sudah ngantuk banget.
Asal jangan ketauan si bos.

Hayuuuks. Semangat bekerja. Siap jadi **kang arsip**.

-- -- --

<a name="selanjutnya"></a>

## Apa Selanjutnya?

Aku gak tau mesti ngomong apa...

Kalau nyanyi aku bisa,
kalau disuruh ngobrol aku suka bingung.

[//]: <> ( -- -- -- links below -- -- -- )

[01-jan-mandiri]:       {% postimage %}/tatausaha/2022/05/01-jan-mandiri.png
[02-feb-kas]:           {% postimage %}/tatausaha/2022/05/02-feb-kas.png

[pembatas-kertas-svg]:  {% postimage %}/tatausaha/2022/05/pembatas-kertas.svg
[pembatas-bkm-kas-odt]: {% postimage %}/tatausaha/2022/05/pembatas-kertas-bkm-kas.odt

[layer-akun]:           {% postimage %}/tatausaha/2022/05/layer-akun.png
[layer-bulan]:          {% postimage %}/tatausaha/2022/05/layer-bulan.png

[11-atur-dok]:          {% postimage %}/tatausaha/2022/05/11-atur-dok.png
[12-one-layer]:         {% postimage %}/tatausaha/2022/05/12-one-layer.png
[13-all-layer]:         {% postimage %}/tatausaha/2022/05/13-all-layer.png
[14-all-active]:        {% postimage %}/tatausaha/2022/05/14-all-active.png
[15-export]:            {% postimage %}/tatausaha/2022/05/15-export.png
[16-writer]:            {% postimage %}/tatausaha/2022/05/16-writer.png
[17-pratilik-pdf]:      {% postimage %}/tatausaha/2022/05/17-pratilik-pdf.png
