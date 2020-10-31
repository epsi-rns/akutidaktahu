---
layout    : post
title     : Inkscape - Impress Slides - Bagian Lima
date      : 2020-09-25 09:17:35
slug      : inkscape-impress-slides-05
tags      : [inkscape, LibreOffice]
keywords  : [desain, impress, master slides, template, karya asli]

toc       : "toc/inkscape-keseharian.njk"
opengraphimage: "assets/posts/desain/2020/09-impress/04-reference-ex-03.png"
excerpt   : 
  Membikin ilustrasi diagram sendiri dengan menggunakan Inkscape.
---

<a name="prakata"></a>

## Prakata

> Membikin ilustrasi diagram sendiri dengan menggunakan Inkscape.

Bagaimana tepatnya proses di Inkscape untuk membuat ilustrasi?
Tidakkah sohib ingin membikin ulang proses,
supaya didapatkan bentuk sesuai keinginan sendiri?

Saya percaya kalau teman-teman memiliki pengetahuan desain yang cukup.
Bilamana perlu membuat dari coretan awal,
artikel ini memberikan satu contoh,
supaya sohib2 dapat membuat-ulang ilustrasi,
mengubah-pakai sesuai dengan untuk kebutuhan masing-masing.

### Artikel Berseri

Artikel berseri ini terdiri dari enam bagian.

* Bagian Satu: Template sederhana `auto`.

* Bagian Dua: Template klasik modern `candyclone`.

* Bagian Tiga: Menambahkan dekorasi `bullet`,
  untuk butir-butir pokok pikiran.

* Bagian Empat: Menambahkan ilustrasi diagram,
  sebagai isi kandungan dari salindia.

* Bagian Lima: Membikin ilustrasi diagram sendiri.

* Bagian Enam: Menambahkan karya seni bikinan sendiri.

![Thumbs 6 Preview][thumbs-6-preview]

### Daftar Isi

* [Prakata](#prakata): Daftar Isi

* [Contoh Bagus](#contoh-bagus)

* [Halaman Muka (Cover Slide)](#cover-slide)

* [Tautan Rujukan dan Penjelasan Sederhana](#tautan-rujukan)

* [Slide Yang Umum](#slide-umum)

* [Berbagi dan Menerbitkan Template](#berbagi)

* [Penutup](#penutup)

### Bahasa Inggris

Artikel ini juga disajikan di blog penulis yang lain,
dalam bahasa Inggris:

* [Inkscape: Impress Slides - Part Five][english-version]

### Bahasa Indonesia

Berikut padanan kata yang saya pakai di artikel ini.

* `slide`: `salindia`.

* `master slide`: `salindia utama`.

* `default master slide`: `salindia utama baku`.

-- -- --

### Bentuk Drop Pinned

Bentuk yang akan kita bikin ada sebagaimana di bawah.
Mohon maafkan cita rasa seni saya.
Saya bukanlah desainer.

![Drop Pinned: Shape][pinned-shape]

Hampir selalu, saya menggabungkan semua objek di-group menjadi satu.

-- -- --

### Pewarnaan

Saya menggunakan palet dari `material design` sebagai contoh,
supaya sohib dapat mengubah ke warna apa saja dalam palet tersebut, kapan saja.
Berikut adalah contoh tata pewarnaan.

![Drop Pinned: Coloring][pinned-color]

Warna bening transparan bersifat pilihan yang tidak harus dipakai.
Terkadang sohib membutuhkan jarak, dalam kotak dengan ukuran presisi,
maka sohib membutuhkan kotak dengan warna bening transparan.
Hampir selalu, saya tidak memakai warna bening transparan ini.

-- -- --

### Perencanaan Ukuran

> Saya berlatar belakang teknik,
> maka saya suka melakukan apa-apanya secara presisi.

Suatu kebiasaan baik untuk merencanakan ukuran,
untuk bentuk shape yang akan dipakai ulang.
Maksud saya adalah, kalau sohib berencana memakai,
bentuk shape ini berulangkali, maka sohib membutuhkan ukuran yang tepat.
Supaya sohib dapat melakukan peletakan, mengubah ukuran,
atau men-transform, dengan presisi yang tepat.

Saya memulai dengan ukuran sederhana
misalnya 100px, 200px, dan seterusnya.
Bentuk shape ini memiliki ukuran lebar 200px x tinggi 300px.
Lingkaran di dalamnya dimulai dengan ukuran diameter sebesar 100px.

![Drop Pinned: Size Plan][pinned-measure]

Saya paham kalau desainer suka untuk menggambar secara bebas.
Di sini saya memang memberikan sudut pandang berbeda untuk melakukan
sesuatu.

-- -- --

#### Memberi Jarak

Kombinasi lain yang biasa saya lakukan adalah,
memberi jarak dengan ukuran tertentu,misalnya 100px.
Sohib dapat melakukan ini dengan `transform tools`.

Misalnya, pilihlah lingkaran dengan diameter 100px.
Terlebih dahulu gandakan bentuk shape dengan perintah `duplicate`.
Lalu pilih dock `transform`, pilih tab `scale`,
dan ubanh unit ke `px`.

Sekarang pilihlah dengan ukuran 110px (offset 10px),
dan centang skala proporsional.

Klik `apply`, maka sohib akan mendapatkan,
lingkaran dengan diameter 110px. Dengan titik `center` yang sama.

Click `apply`, the you get circle with 110px diameter.
With the same center.

![Drop Pinned: Offset 10px][pinned-offset-10]

-- -- --

### Membengkokkan Simpul Node

Bagaimana tepatnya bentuk ini dibikin?
Enam langkah di ganmbar berikut di bawah seharusnya dapat menjelaskan.

![Drop Pinned: Nodes Bending][pinned-nodes]

#### 1: Membikin Bentuk Lingkaran

Sohib dapat melihat di gambar pertama,
bahwa ada tiga simpul node di dalam lingkaran.
Maka sohib harus melakukan `rotate` terlebih dahulu sebelum menggunakan.
Karena kita perlu membengkokkan ke bawah alih-alih ke samping kiri.

#### 2: Mengubah Simpul Node

Kita akan mengubah simpul dari lingkaran dengan diameter 180px.
Tambahkan simpul untuk kedua sisi, sehingga kita mendapatkan lima simpul node.
Lalu pindahkan, geser simpul node paling bawah sejauh 50px ke bawah.

Sohib dapat menggunakan ukuran selain 50px.

#### 3: Merapikan Bentuk Shape

Sekali lagi, ubah simpul node,
sehingga sekarang kita memiliki tujuh simpul node.
Lalu geser simpul node ketiga dan kelima,
sehingga memiliki jarak 20px dari tengah.

#### 4: Memberi Jarak Objek

Sekali lagi, sohib dapat memberi jarak ke bentuk shape,
menggunakan _tab_ `scale` dari _dock_ `transform`.
Misalnya dari 180px ke 190px.

Perlu diingat karena bentuk shape dari objek bukanlah lingkaran,
maka sohib harus menyesuaikan ulang peletakan,
ke 5px dari bentuk shape awal.
Yaitu untuk memastian bahwa bentuk shape 190px,
memiliki titik `center` yang sama dengan 180px.

#### 5: Menyesuaikan Bentuk Shape

Pindahkan simpul paling bawah sejauh kira-kira 25px ke bawah.
Sohib bebas menggunakan ukuran jarak berapa saja.

#### 6: Bentuk Shape Akhir

Ulangi membuat ukuran untuk lingkaran 200px.
Pindahkan simpul paling bawah supaya kita akhirnya
mendapatkan bentuk shape dengan ukuran 300px.

-- -- --

### Pemutaran Secara Seragam

#### Pengaturan Titik Tengah Midpoint

Ada beberapa cara untuk memutar (rotate) objek di Inkscape.
Saya suka menggunakan fitur `snap`,
dan memindahkan `midpoint` ke lingkaran lain.

![Drop Pinned: Setting Midpoint][pinned-midpoint]

#### Peralatan Transform

Sekarang kita dapat memutar objek menggunakan tab `rotate` di dock `transform`.

![Drop Pinned: Rotate with Transform Tools][pinned-rotate-72]

Misalnya, dengan bentuk shape sejumlah lima,
kita harus mengatur sudut dari perpindahan sebesar 72 derajat.

#### Hasil Putaran

Dan inilah hasilnya sebagaimana tampak di gambar di bawah ini.

![Drop Pinned: Circular][pinned-circular]

Saya tidak bilang ini hasil akhir.
Karena masih banyak cara untuk memperbaiki bentuk ini,
misalnya menambah ikon di dalam bentuk shape,
atau memutar 15 derajat untuk semua kesatuan objek.

Bagaimanapun, sekarang bentuk shape ini sudah jadi siap pakai.
Sekarang waktu yang tepat untuk kembali ke Impress.

-- -- --

<a name="selanjutnya"></a>

## Apa Selanjutnya?

Lanjutkan baca ke
[ [Inkscape: Impress Slides - Bagian Enam][local-whats-next] ].

Terimakasih sudah berkunjung dan membaca.

[//]: <> ( -- -- -- links below -- -- -- )

[local-whats-next]: /inkscape/2020/09/26/inkscape-impress-slides-06.html
[english-version]:  https://epsi-rns.gitlab.io/design/2020/09/25/inkscape-impress-slides-05/
[thumbs-6-preview]: {% postimage %}/desain/2020/09-impress/thumbs-6.png

[pinned-shape]:     {% postimage %}/desain/2020/09-inkscape/drops-shape.png
[pinned-color]:     {% postimage %}/desain/2020/09-inkscape/drops-color-annotation.png
[pinned-circular]:  {% postimage %}/desain/2020/09-inkscape/drop-pinned-circular-final.png
[pinned-measure]:   {% postimage %}/desain/2020/09-inkscape/drops-measure-boxed.png
[pinned-nodes]:     {% postimage %}/desain/2020/09-inkscape/drops-path-nodes-screenshot.png

[pinned-midpoint]:  {% postimage %}/desain/2020/09-inkscape/drop-pinned-circularsnap-midpoint.png
[pinned-rotate-72]: {% postimage %}/desain/2020/09-inkscape/drop-pinned-circularsnap-transform-72.png
[pinned-offset-10]: {% postimage %}/desain/2020/09-inkscape/drop-pinned-offsetting-transform-10.png
