---
layout    : post
title     : Animasi Sozi - Bagian Dua
date      : 2020-09-28 09:17:35
slug      : sozi-animasi-02
tags      : [inkscape, sozi]
keywords  : [animation, shape, presentation, title, decoration]

toc       : "toc/inkscape-keseharian.njk"
opengraphimage: "assets/posts/design/2020/09-sozi/12-candyline-title-preview.png"
excerpt   : 
  Membikin animasi yang mempesona dengan Sozi,
  sebagai awalan tampilan video presentasi.
---

<a name="prakata"></a>

## Prakata

> Membikin animasi yang mempesona dengan Sozi,
> sebagai awalan tampilan video presentasi.

Satu salindia frame dari Sozi,
dapat dipergunakan untuk beberapa animasi sekaligus.

### Artikel Berseri

Artikel berseri ini terdiri dari tiga bagian.

* Bagian Satu: Garis Pinggir

* Bagian Dua: Judul

* Bagian Tiga: Hiasan Kubus

### Pratilik

  <video width="512" height="384" controls>
    <source src="{% postimage %}/desain/2020/09-sozi/candyline-title.mp4" type="video/mp4">
    Cak, browser-mu ijik orak mendukung video.
  </video>

### Daftar Isi

* [Prakata](#prakata): Daftar Isi

* [Inkscape: Judul](#inkscape-judul)

* [Sozi: Judul](#sozi-judul)

* [Inkscape: Hiasan Sederhana](#inkscape-hiasan)

* [Sozi: Hiasan Sederhana](#sozi-hiasan)

* [Selanjutnya?](#selanjutnya)

### Bahasa Inggris

Artikel ini juga disajikan di blog penulis yang lain,
dalam bahasa Inggris:

* [Sozi Animation - Part Two][english-version]

### Bahasa Indonesia

Berikut padanan kata yang saya pakai di artikel ini.

* `frame` (dalam sozi): `salindia`.

* `frame` (dalam inkscape): `bingkai`.

* `position`: `letak`.

* `positioning`: `peletakan`.

* `movement`: `pergerakan`.

-- -- --

<a name="inkscape-judul"></a>

## Inkscape: Judul

### Bahan SVG Terpadu

> Langsung saja yacc

Sumber gambar inkscape dapat sohib unduh di sini:

* [github.com/.../candyline-title.svg][source-title]

### Lapisan Layers

Tambahkan empat lapisan layer lagi:

* Judul Utama, Sub Judul, Tanggal, Hiasan.

Ingat kalau kita sudah memiliki lapisan layer sebagai berikut:

* Gambar Latar (Background),

* Kiri Bawah, Kiri Tengah, Kiri Atas,

* Kanan Bawah, Kanan Tengah, Kanan Atas.

![Title: Four More Layers][title-layers]

Urutan dari lapisan layer juga penting di Sozi.
Lapisan layer di paling atas di Inkscape,
juga akan muncul di paling atas di Sozi,
dan juga tercermin dalam hasil presentasinya.

### Bingkai Frame: Tulisan Masuk

Secara singkat bingkai frame untuk utlisan masuk ada di gambar di bawah:

![Inkscape: Title: Entrance Frame Objects][entrance-frames]

1. Judul Utama: `mt-frame-01-01`, `Y = -300px`

2. Sub Judul: `st-frame-01-01`, `X = 400px`

3. Tanggal: `dt-frame-01-01`, Diputar 45 derajat.

### Bingkai Frame: Pergerakan Tulisan

Lalu pengaturan pergerakannya,
dapat diatur mengunakan bingkai frame sebagai berikut:

![Inkscape: Title: Additional Frame Objects][additional-frames]

1. `mt-frame-x30`, `X = -30px`

2. `mt-frame-x70`, `X = -70px`

3. `mt-frame-x100`, `X = -100px`

-- -- --

<a name="sozi-judul"></a>

## Sozi: Judul

### Salindia (Frame)

Semua salindia frame dapat dilihat di sini:

![Sozi: Title: All Frames and Layers][title-frames]

Semua frame dapat dituliskan sebagai berikut:

* Mulai, Pinggir Satu, Pinggir Dua,

* Judul Masuk (entrance),

* Judul Bergerak (Move), Judul Akhir (Max), Judul Kembali, Judul Berhenti (Stop)

* Diam (Still): Supaya pemirsa dapat melihat posisi akhir untuk sementara waktu.

### Salindia (Frame): Tulisan Masuk

Atur peletakan bingkai frame di `Pinggir Dua` sebagaimana berikut:

* Judul Utama: `mt-frame-01-01`

* Sub Judul: `st-frame-01-01`

* Tanggal: `dt-frame-01-01`

Dan atur juga atur peletakan bingkai frame di `Judul Masuk` sebagaimana berikut:

* Judul Utama: `bg-frame-01-01`

* Sub Judul: `bg-frame-01-01`

* Tanggal: `bg-frame-01-01`

Lalu lihat hasilnya:

![Candyline: Title Entrance Preview][title-entrance]

### Salindia (Frame): Pergerakan Tulisan

Masih ada empat salindia lagi yang harus dikerjakan:

* Title Move (berpindah ke kanan, ke 30px atau 70px)

* Title Max  (berpindah ke kanan maksimum yaitu 100px)

* Title Back (berpindah ke kiri, ke 30px, atau 70px, atau 0px)

* Title Stop (kembali ke peletakan semula 0px)

Atur peletakan bingkai frame,
di salindia `Title Move` sebagaimana berikut:

* Judul Utama: `mt-frame-x30`

* Sub Judul: `mt-frame-x70`

* Tanggal: `mt-frame-x30`

Lalu sesuaikan peletakan bingkai frame,
di salindia `Title Max` sebagaimana berikut:

* Judul Utama: `mt-frame-x100`

* Sub Judul: `mt-frame-x100`

* Tanggal: `mt-frame-x100`

Sekali lagi, atur peletakan bingkai frame,
di salindia `Title Back` seperti layaknya di bawah:

* Judul Utama: `bg-frame-01-01`

* Sub Judul: `mt-frame-x30`

* Tanggal: `mt-frame-x30`

Dan akhirnya, atur peletakan bingkai frame,
untuk salindia `Title Stop` seperti di bawah:

* Judul Utama: `bg-frame-01-01`

* Sub Judul: `bg-frame-01-01`

* Tanggal: `bg-frame-01-01`

Sekarang saatnya menikmati tampilan hasilnya

![Candyline: Title Movement Preview][title-movement]

-- -- --

<a name="inkscape-hiasan"></a>

## Inkscape: Hiasan Sederhana

Artikel ini hanya menampilkan hiasan sederhana.
Kita akan meningkatkan kelayakan hiasan ini di artikel berikutnya.

Sohib dapat menggunakan gambar apa saja untuk menghias tampilan ini.

### Hiasan: Salindia (Frame)

Kita hanya memerlukan dua salindia frame:

* Untuk yang tersembunyi (kecil): `dec-frame-04-04`,
  sebagai awal peletakan.

* Untuk yang ditampilkan (kecil): `dec-frame-04-04-ce`,
  yaitu masuknya hiasan ke tengah halaman.

![Inkscape: Decoration: Frame Objects][deco-frames]

-- -- --

<a name="sozi-hiasan"></a>

## Sozi: Hiasan Sederhana

Kita dapat menggunakan, salindia frame yang sudah ada.
Tidak perlu membuat baru.

### Hiasan: Salindia (Frame)

Kita sudah membikin tiga salindia frame yang dapat dimanfaatkan.

* Title Move (masih tersembunyi)

* Title Max  (hiasan masuk, masih kecil)

* Title Back (diatur ke ukuran normal)

Atur peletakan bingkai frame,
di salindia `Title Move` sebagaimana berikut:

* Decoration: `dec-frame-04-04`

Lalu peletakan bingkai frame,
di salindia `Title Max` sebagaimana berikut:

* Decoration: `dec-frame-04-04-ce`

Sekali lagi, atur peletakan bingkai frame,
di salindia `Title Back` seperti di bawah:

* Decoration: `bg-frame-01-01`

Sekarang kita lihat hasilnya yang kira-kira tampak seperti di bawah:

![Candyline: Decoration Movement Preview][deco-movement]

-- -- --

<a name="selanjutnya"></a>

## Selanjutnya?

Lanjutkan baca ke
[ [Animasi Sozi - Bagian Tiga][local-whats-next] ].

Terimakasih sudah berkunjung dan membaca.

[//]: <> ( -- -- -- links below -- -- -- )

[local-whats-next]:     /inkscape/2020/09/28/sozi-animasi-03.html
[english-version]:      https://epsi-rns.gitlab.io/design/2020/09/28/sozi-animation-02/

[source-title]:     https://github.com/epsi-rns/berkas2/blob/master/sozi-candyline/step-02-titles/candyline-title.svg

[title-layers]:     {% postimage %}/desain/2020/09-sozi/12-inkscape-title-layers.png
[additional-frames]:{% postimage %}/desain/2020/09-sozi/12-inkscape-title-additional-frames.png
[entrance-frames]:  {% postimage %}/desain/2020/09-sozi/12-inkscape-title-entrance-frames.png

[title-entrance]:   {% postimage %}/desain/2020/09-sozi/12-candyline-title-entrance-small.gif
[title-movement]:   {% postimage %}/desain/2020/09-sozi/12-candyline-title-movement-small.gif
[deco-movement]:    {% postimage %}/desain/2020/09-sozi/12-candyline-title-decoration-small.gif

[title-frames]:     {% postimage %}/desain/2020/09-sozi/12-sozi-title-frames.png
[deco-frames]:      {% postimage %}/desain/2020/09-sozi/12-inkscape-decorations-frames.png

