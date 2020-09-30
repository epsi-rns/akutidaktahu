---
layout    : post
title     : Inkscape - Impress Slides - Bagian Dua
date      : 2020-09-22 09:17:35
slug      : inkscape-impress-slides-02
tags      : [inkscape, LibreOffice]
keywords  : [desain, impress, master slides, template, Hervy QA, klasik modern]

toc       : "toc/inkscape-keseharian.njk"
opengraphimage: "assets/posts/desain/2020/09/02-candyclone-cover.png"
excerpt   : 
  Membikin master slide untuk presentasi sungguhan
  untuk LibreOffice impress
  dengan menggunakan inkscape
---

<a name="prakata"></a>

## Prakata

> Membikin master slide untuk presentasi sungguhan
> untuk LibreOffice impress
> dengan menggunakan inkscape

Saya beri nama template ini `candyclone`.

#### Artikel Berseri

Artikel berseri ini terdiri dari empat bagian.

* Bagian Satu: Template sederhana `auto`

* Bagian Dua: Template klasik modern `candyclone`

* Bagian Tiga: Menambah dekorasi `bullet`,
  untuk butir-butir pokok pikiran

* Bagian Empat: Menambahkan karya seni bikinan sendiri

### Daftar Isi

* [Prakata](#prakata): Daftar Isi

* [Sumber Inspirasi](#sumber-inspirasi)

* [Inkscape: Default Layers](#default-layers)

* [Impress: Default Master Slides](#default-master)

* [Inkscape: Layer Lain-Lain](#layer-lain-lain)

* [Impress: Ketiga Master Slides Yang Lain](#master-slide-lain)

* [Tampak Normal](#tampak-normal)

* [Pengaturan Warna Tiap Bab](#pengaturan-warna)

* [Apa Selanjutnya?](#selanjutnya)

### Bahasa Inggris

Artikel ini juga disajikan di blog penulis yang lain,
dalam bahasa Inggris:

* [Inkscape: Impress Slides - Part One][english-version]

-- -- --

<a name="sumber-inspirasi"></a>

### Sumber Inspirasi

> Beruntung bertemu abang ini

Mungkin sohib sudah paham kalau,
penulis kode program atau yang bisa kita sebut `coder`,
punya kecenderungan buruk untuk pamer.
Saya sendiri suka untuk mengirim hasil karya terkini langsung ke forum,
dan seseorang yang langsung menanggapi adalah,
seorang desainer bernama [Hervy QA][hervy-qa].
Dia bilang presentasiku bagus,
dan kemudian beliau memberikan tautan terkait pekerjaan presentasinya,
yang dikerjakan tahun lalu.

* <https://hervyqa.com/gnome-bluez-LibreOffice-impress-free-template/>

Dan ternyata, wow! UwU. Karyanya luar biasa.
Silahkan dilihat videonya di sini:

* <http://www.youtube.com/watch?v=O3urHT5AHG8#action=share>

#### Garis Pinggir

Saya melihat dekorasi garis pinggir (kiri dan kanan),
dari master slide karya bang Hervy,
dan baru sadar kalau konsepnya sangat mirip,
dengan tampilan blog yang saya bikin.
Perbedaannya adalah saya menggunakan banyak warna,
yang saya sambil dari `google material pallete`.
Saya berniat untuk meng-clone tampilan dari desain-nya,
namun menggunakan warna dari google.

Saya menemukan bahwa garis pinggir yang dibuat oleh bang Hervy,
adalah asli `native` menggunakan LibreOffice,
yang sebetulnya berupa kotak,
dengan ketebalan yang dibikin tipis seperti garis.
Maka saya putuskan untuk menggunakan inkscape untu meniru tampilannya,
karena lebih mudah untuk membuat aneka ragam bentuk yang saya butuhkan,
dengan menggunakan Inkscape.

#### Template Tiruan

Karena temnplate tiruan (`clone`) yang saya bikin,
menggunakan warna yang semarak `eye candy`, dari `google pallete`,
maka saya namakan template ini `candyclone`.

![Candyclone Template: Preview][clone-cover]

Saya berusaha meningkatkan diri dari sekedar membikin
`crappy third grade presentation`, menjadi `second grade`.
Sebetulnya saya juga paham kalau belum mampu membikin dengan kualitas premium.
Namun setidaknya saya berbagi,
barangkali ada sohib pembaca yang membutuhkan.

Template ini memakai gaya klasik modern dalam artian,
tampilan (dan bentuk)-nya sebetulnya bergaya model lama.
Namun bentuk tersebut memakai warna dari `google material color`,
sehingga terkesan modern.

-- -- --

<a name="default-layers"></a>

### Inkscape: Default Layers

### Halaman

Ubah properti berkas supaya sesuai .
Saya menggunakan ukuran `1600px * 900px`.
Lalu menggunakan `checkerboard background`,
untuk membedakan warna latar yang saya bikin berwarana putih.

#### Lapisan Layer Sebelum Dipotong

Saya membuat `source layer` terlebih dahulu.
Seperti biasanya, saya memulai dengan warna favorit say,
yaitu `blue500` dari `material color`.

![Candyclone Template: Inkscape: Default Slide: Source][clone-source]

Sohib dapat menggunakan pengaturan ketebalan,
untuk garis pinggir secara bebas, misalnya:

* Pinggir Kiri: `40px`,

* Pinggir Kanan: `30px`.

#### Lapisan Layer Potong

Kemudian saya potong garis pinggir.

![Candyclone Template: Inkscape: Default Slide: Cut][clone-cut]

Sya menggunakan warna dari `google material`,
secara berurut sebagai berikut:

* Kiri Bawah: `blue900`,

* Kiri Tengah: `blue700`,

* Kiri Atas: `blue500`,

* Kanan Bawah: `blue500`,

* Kanan Tengah: `blue300`,

* Kanan Atas: `blue100`.

#### Group

Kemudian gabungkan menjadi satu dengan melakukan `group` semua `shape`.
Sekarang sohib sudah memiliki `group object`,
dengan ukuran `1600px * 900px`.

#### Layers

Salin `group object` di atas ke dalam lapisan layer masing-masing,
yaitu untuk tiap-tiap 19 warna dari google material pallete.

![Candyclone Template: Inkscape: Default Slide: Layers][clone-layers]

-- -- --

<a name="default-master"></a>

### Impress: Default Master Slides

Sebagaimana telah disebut di artikel sebelumnya,
lakukanlah lagi langkah-langkah yang telah dijelaskan.
Untuk tiap-tiap 19 warna, salin dari Inkscape, lalu tempel ke Impress.
Artinya sohib akan memiliki 19 `master slides`.

![Candyclone Template: Impress: Default Slide: Master][clone-master-default]

Jangan lupa untuk mengganti nama tiap-tiap master slide,
untuk mencerminkan warna masing-masing.

-- -- --

<a name="layer-lain-lain"></a>

### Inkscape: Layer Lain-Lain

Ulangi langkah-langkah di atas untuk ketiga slide yang lain.

#### Grouping Layers

Gabungkan lapisan layer untuk slide yang sama,
namun hanya berbeda warna, misalnya:

* Default: Memiliki 19 lapisan layers, ditambah `cut` and `source`.

* Alternate: Memiliki 19 lapisan layers.

* Single: Memiliki 19 lapisan layers, ditambah `cut` and `source`.

* Image: Memiliki 19 lapisan layers, ditambah `cut` and `source`.
  Dan jugsa saya tetap simpan `alternate source` yang tidak jadi saya pakai.

#### Alternate Slide/Layer

Sama dengan `default`, namun dengan warna berbeda.

![Candyclone Template: Inkscape: Alternate Slide: Cut][clone-alternate]

Dengan sedikit perbedaan warna `material`:

* Kiri Bawah: `blue900`,

* Kiri Tengah: `blue700`,

* Kiri Atas: `blue400`,

* Kanan Bawah: `blue600`,

* Kanan Tengah: `blue300`,

* Kanan Atas: `blue100`.

#### Single Slide/Layer

Sama dengan langkah untuk slide dari judul bab,
atau pemisah antar bagian.

![Candyclone Template: Inkscape: Single Slide: Source][clone-single-src]

Berikut contoh potongan akhir untuk `single-blue`.

![Candyclone Template: Inkscape: Single Slide: Cut][clone-single-cut]

Sahib dapat memiliki warna apa saja yang disukai.
Kebetulan saja, saya memilih warna `blue900` untuk bentuk yang ditengah.

#### Image Slide/Layer

Langkah yang sama untuk menampilkan gambar tunggal.

![Candyclone Template: Inkscape: Image Slide: Source][clone-image-src]

Berikut contoh potongan akhir untuk `image-blue`.

![Candyclone Template: Inkscape: Image Slide: Cut][clone-image-cut]

Say amenggunakan pengaturan tata warna,
yang sama dengan `default slide/layer`.

-- -- --

<a name="master-slide-lain"></a>

### Impress: Ketiga Master Slides Yang Lain

Untuk ketiga slide lain yang akan kita bikin,
salin dari Inkscape, dankemudian tempel ke Impress.
Lakukan semua untuk tiap-tiap 19 warna yang ada.
Hasil akhirnya akan berjumlah 4x19 slide, yaitu 76 slides.

![Candyclone Template: Impress: Image Slide: Master][clone-master-image]

Lalu, jangan lupa untuk mengubah tiap-tiap master slide,
untuk mencerminkan warna masing-masing.

#### Penyesuaian

> Untuk tiap-tiap slide yang berjumlah 76 lembar!

Lakukan penyesuaian terhadap posisi teks, ukuran, warna dan fonta.
Saya paham ini pekerjaan berulang yang membosankan.
LAkukan saja dengan senang hati,
dan ini akan selesai dengan sendirinya sebelum sohib merasa lelah.

-- -- --

<a name="tampak-normal"></a>

### Tampak Normal

Ubah tampilan ke `normal slide` untuk menguji tiap-tiap master slide.

#### Default Slide

![Candyclone Template: Impress: Default Slide: Normal][normal-default]

#### Alternate Slide Dengan Warna Latar

![Candyclone Template: Impress: Alternate Slide: Normal][normal-alternate]

#### Single Slide Untuk Judul Bab

![Candyclone Template: Impress: Single Slide: Normal][normal-single]

#### Image Slide

![Candyclone Template: Impress: Image Slide: Normal][normal-image]

> Mudah bukan?

-- -- --

<a name="pengaturan-warna"></a>

### Pengaturan Warna Tiap Bab

Dengan menggunakan pilihan warna yang berbeda,
penulis dapat memisahkan antara tiap-tiap bab di presentasi.
Bab yang sama memiliki warna sama.
Dan bab yang berbeda memiliki warna berbeda pula.

![Candyclone Template: Impress: Slide Sorter][chapter-color]

-- -- --

<a name="selanjutnya"></a>

### Apa Selanjutnya?

Lanjutkan baca ke
[ [Inkscape: Impress Slides - Bagian Tiga][local-whats-next] ].

Terimakasih sudah berkunjung dan membaca.

[//]: <> ( -- -- -- links below -- -- -- )

[local-whats-next]:     /inkscape/2020/09/23/inkscape-impress-slides-03.html
[english-version]:      https://epsi-rns.gitlab.io/design/2020/09/22/inkscape-impress-slides-02/

[hervy-qa]:     https://hervyqa.com/

[clone-cover]:  {% postimage %}/desain/2020/09/02-candyclone-cover.png
[clone-cut]:    {% postimage %}/desain/2020/09/02-clone-inkscape-cut.png
[clone-source]: {% postimage %}/desain/2020/09/02-clone-inkscape-source.png
[clone-layers]: {% postimage %}/desain/2020/09/02-clone-inkscape-layers.png

[clone-master-default]: {% postimage %}/desain/2020/09/02-clone-impress-master-default.png
[clone-master-image]:   {% postimage %}/desain/2020/09/02-clone-impress-master-image.png

[clone-alternate]:  {% postimage %}/desain/2020/09/02-clone-inkscape-alternate-cut.png
[clone-image-cut]:  {% postimage %}/desain/2020/09/02-clone-inkscape-image-cut.png
[clone-image-src]:  {% postimage %}/desain/2020/09/02-clone-inkscape-image-source.png
[clone-single-cut]: {% postimage %}/desain/2020/09/02-clone-inkscape-single-cut.png
[clone-single-src]: {% postimage %}/desain/2020/09/02-clone-inkscape-single-source.png

[normal-default]:   {% postimage %}/desain/2020/09/02-clone-impress-normal-default.png
[normal-alternate]: {% postimage %}/desain/2020/09/02-clone-impress-normal-alternate.png
[normal-single]:    {% postimage %}/desain/2020/09/02-clone-impress-normal-single.png
[normal-image]:     {% postimage %}/desain/2020/09/02-clone-impress-normal-image.png

[chapter-color]:    {% postimage %}/desain/2020/09/02-clone-impress-slide-sorter.png