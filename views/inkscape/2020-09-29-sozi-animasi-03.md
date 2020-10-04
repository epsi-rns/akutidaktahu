---
layout    : post
title     : Animasi Sozi - Bagian Tiga
date      : 2020-09-29 09:17:35
slug      : sozi-animasi-03
tags      : [inkscape, sozi]
keywords  : [animation, shape, presentation, title, cubes decoration]

toc       : "toc/inkscape-keseharian.njk"
opengraphimage: "assets/posts/design/2020/09-sozi/13-sozi-entrance-frames.png"
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
Kita akan sama-sama menjelajahi lebih jauh.

### Artikel Berseri

Artikel berseri ini terdiri dari tiga bagian.

* Bagian Satu: Garis Pinggir

* Bagian Dua: Judul

* Bagian Tiga: Hiasan Kubus

### Pratilik

  <video width="512" height="384" controls>
    <source src="{% postimage %}/desain/2020/09-sozi/candyline-with-audio-small.mp4" type="video/mp4">
    Cak, browser-mu ijik orak mendukung video.
  </video>

### Daftar Isi

* [Prakata](#prakata): Daftar Isi

* [Kesimpulan](#kesimpulan)

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

### Inkscape: Animasi Kubus

Kita akan membikin versi yang lebih baik,
dari animasi kubus di artikel sebelumnya.

Gagasan pergerakannya sangat terilhami dari,
hasil karya yang mengagumkan dari `Rania Amina`,
yang dibikin untuk terbitnya LibreOffice 7.0.

* [LibreOffice-7.0-Final.mp4][libreoffice-final]

### Bahan SVG Terpadu

> Langsung saja yacc

Sumber gambar inkscape dapat sohib unduh di sini:

* [github.com/.../cdanyline-cubes.svg][source-cubes]

#### Lapisan Layers

> Hal-hal menarik datang dari hal-hal yang kecil

Rincian pergerakan yang kecil tampak lebih menarik.
Gerakan ini sebetulnya hanyalah pergerakan yang pendek-pendek,
tegak lurus, dari atas ke bawah atau sebaliknya.
Saya mengatur tiap-tiap kubus dalam tujuh lapisan layer,
sesuai jumlah kubusnya.

* Kubus-01, Kubus-02, Kubus-03, Kubus-04, Kubus-05, Kubus-06, Kubus-07, Dummy.

Ingat kalau kita sudah membiki lapisan-lapisan layer sebagaimana berikut:

Remember that we already have these layers below:

* Gambar Latar (Background),

* Kiri Bawah, Kiri Tengah, Kiri Atas,

* Kanan Bawah, Kanan Tengah, Kanan Atas,

* Judul Utama, Sub Judul, Tanggal.

![Kubus: Seven More Layers][cubes-layers]

Dengan asumsi bahwa kubus dihitung dari kiri ke kanan,
maka urutan lapisan layer akan menjadi

* Kubus-04 (paling atas)

* Kubus-05 dan Kubus-03,

* Kubus-06 dan Kubus-02,

* Kubus-07 dan Kubus-01.

Lalu sebetulnya apa manfaat lapisan layer `dummy`?
Saya berkeputusan untuk tidak membikin lapisan sublayer frames,
untuk tiap-tiap kubus.
Oleh karena itu, maka saya menaruh semua bingkai frame yang dibutuhkan,
ke dalam lapisan layer `dummy` supaya rapih.
Sebetulnya, sohib juga dapat menaruh bingkai frame di lapisan layer apa saja.

#### Kubus Masuk

Kita masih menggunakan pengaturan sebelumnya,
yang hanya berisikan dua bingkai frame.

* Untuk yang tersembunyi (kecil): `dec-frame-04-04`,
  sebagai awal peletakan.

* Untuk yang ditampilkan (kecil): `dec-frame-04-04-ce`,
  yaitu masuknya hiasan kubus ke tengah halaman.

#### Pergoyangan Kubus

> Tanyakan pada kubus yang bergoyang

Hanya ada dua pergerakan yang diperlukan:

1. `cubes-up-1`, `Y = 10px`

2. `cubes-down-1`, `Y = -10px`

![Kubus: Bingkai Frame Naik Dan Turun][cubes-frames]

Naik dan turun. Itu saja. Sesederhana itu.

-- -- --

### Sozi: Animasi Kubus

#### Kubus Masuk

Atur peletakan bingkai frmae di salindia `Mulai` sebagaimana berikut:

* Semua Kubus [01..07]: `dec-frame-04-04`

![Sozi: Kubus: Entrance Frame Objects][entrance-frames]

Berikutnya, atur dalam salindia `Kubus One` sebagaimana berikut

* Kubus-01: `bg-frame-01-01`

Lalu lanjutkan, atur dalam salindia `Kubus Three` sebagaimana berikut:

* Kubus-05 dan Kubus-03: `bg-frame-01-01`

Sekali lagi, atur dalam salindia `Kubus Five` sebagaimana berikut:

* Kubus-06 dan Kubus-02: `bg-frame-01-01`

Akhirnya, atur dalam salindia `Kubus Stop` seperti di bawah:

* Kubus-07 dan Kubus-01: `bg-frame-01-01`

Tambahkan pula salindia `Diam` (still),
dan atur waktunya menjadi dua detik.

Sekarang, kita dapat melihat hasilnya:

![Cdanyline: Kubus Entrance Preview][cubes-entrance]

#### Pergoyangan Kubus

Kita akan menggunakan salindia terakhir kita, yaitu `Kubus Stop`.
Atur peletakan bingkai frame di `Kubus Stop` sebagaimana berikut:

* Semua Kubus [01..07]: `bg-frame-01-01`

![Sozi: Kubus: Shake Frame Objects][shake-frames]

Berikutnya, atur dalam salindia `Shake Up` pertama,
sebagaimana berikut:

* Kubus-04: `cubes-down-1`

* Kubus-06 dan Kubus-02: `cubes-up-1`

Perhatikan kalau sohib bebas untuk mengatur,
kubus mana yang mesti naik, dan kubus mana yang mesti turun,
untuk mendapatkan tampilan animasi yang dimaui.

Selanjutnya, atur dalam salindia `Shake Down` pertama,
sebagaimana berikut:

* Kubus-04: `bg-frame-01-01`

* Kubus-05 dan Kubus-03: `cubes-down-1`

* Kubus-06 dan Kubus-02: `bg-frame-01-01`

* Kubus-07 dan Kubus-01: `cubes-up-1`

Sekali lagi, atur dalam salindia `Shake Up` kedua,
sebagaimana di bawah:

* Kubus-04: `cubes-down-1`

* Kubus-05 dan Kubus-03: `cubes-up-1`

* Kubus-06 dan Kubus-02: `cubes-down-1`

* Kubus-07 dan Kubus-01: `bg-frame-01-01`

Dan di putaran akhir, atur dalam salindia `Shake Down` kedua,
sebagaimana di bawah:

* Kubus-04: `cubes-up-1`

* Kubus-05 dan Kubus-03: `cubes-down-1`

* Kubus-06 dan Kubus-02: `bg-frame-01-01`

* Kubus-07 dan Kubus-01: `cubes-up-1`

Sampai akhirnya, atur dalam salindia `Shake Stop`,
seperti di bawah ini:

* Semua Kubus [01..07]: `bg-frame-01-01`

Sekarang, lihat hasil akhirnya dalam bentuk animasi.

![Cdanyline: Kubus Shakes Preview][cubes-shakes]

Semua tergantung dari kreatifitas.
Lagipula, kemampuan ini memang sangat tergantun,
dari daya khayal masing-masing.

-- -- --

### Merangkai Semuanya

Akhirnya tibalah saatnya kita melihat tangkapan layar,
dari semua salindia frame dan lapisan layer,
lengkap dalam satu kesatuan.

![Sozi: All Frame Objects][all-frames]

-- -- --

### Kdenlive

#### Menambahkan Audio

Sohib dapat mengunduh aneka ragam jenis bunyi-bunyi-an
secara gratis dari internet,
dan kemudian menggabungkan dengan hasil keluaran dari `Sozi`,
ke dalam `Kdenlive`.

![Kdenlive: Adding audio to Sozi Animation][kdenlive]

#### Hasil Akhir

Coba lihat lagi hasil akhirnya.

  <video width="512" height="384" controls>
    <source src="{% postimage %}/desain/2020/09-sozi/candyline-with-audio-small.mp4" type="video/mp4">
    Cak, browser-mu ijik orak mendukung video.
  </video>

-- -- --

<a name="kesimpulan"></a>

## Kesimpulan

Sozi adalah perangkat yang bagus,
tepat untuk animasi sederhana.

Sepertinya itu saja yacc sohib.
Sementara saya bisanya hanya itu.
Terimakasih sudah berkunjung.

[//]: <> ( -- -- -- links below -- -- -- )

[english-version]:      https://epsi-rns.gitlab.io/design/2020/09/29/sozi-animation-03/

[source-cubes]:     https://github.com/epsi-rns/berkas2/blob/master/sozi-candyline/step-03-cubes/candyline-cubes.svg
[libreoffice-final]:https://github.com/libreofficeid/LibreOffice-7-Video-Release/raw/master/LibreOffice-7.0-Final.mp4

[cubes-layers]:     {% postimage %}/desain/2020/09-sozi/13-inkscape-cubes-layers.png
[cubes-frames]:     {% postimage %}/desain/2020/09-sozi/13-inkscape-cubes-frames.png
[entrance-frames]:  {% postimage %}/desain/2020/09-sozi/13-sozi-entrance-frames.png
[shake-frames]:     {% postimage %}/desain/2020/09-sozi/13-sozi-shake-frames.png
[all-frames]:       {% postimage %}/desain/2020/09-sozi/13-sozi-all-frames.png
[kdenlive]:         {% postimage %}/desain/2020/09-sozi/14-kdenlive-add-audio.png

[cubes-entrance]:   {% postimage %}/desain/2020/09-sozi/13-candyline-cubes-entrance-small.gif
[cubes-shakes]:     {% postimage %}/desain/2020/09-sozi/13-candyline-cubes-shake-small.gif
