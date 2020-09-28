---
layout    : post
title     : Inkscape - Impress Slides - Part One
date      : 2020-09-21 09:17:35
slug      : inkscape-impress-slides-01
tags      : [inkscape, LibreOffice]
keywords  : [desain, impress, master slides, template, Rania Amina, sederhana]

toc       : "toc/inkscape-keseharian.njk"
opengraphimage: "assets/posts/desain/2020/09/01-auto-linux-diversity-cover.png"
excerpt   : 
  Membikin master slide sederhana
  untuk LibreOffice impress
  dengan menggunakan inkscape
---

<a name="prakata"></a>

## Prakata

> Membikin master slide sederhana
> untuk LibreOffice impress
> dengan menggunakan inkscape

Saya beri nama template ini `auto`.
Karena template ini mengikuti rancangan desain dan tata warna,
dari bengkel mobil yang saya kelola.

#### Artikel Berseri

Artikel berseri ini terdiri dari empat bagian.

* Bagian Satu: Template sederhana `auto`

* Bagian Dua: Template klasik modern `candyclone`

* Bagian Tiga: Menambah dekorasi `bullet`,
  untuk butir-butir pokok pikiran

* Bagian Empat: Menambahkan karya seni bikinan sendiri

-- -- --

### SKS: Saya Kerjakan Sendiri

Setelah mengalami masa-masa suram di perusahaan,
banyak pekerjaan yang saya ambil alih untuk saya kerjakan sendiri,
mulai dari akunting sampai desain.
Di wilayah desain, saya membikin logo, kartu nama, spanduk, cap,
kop surat A4, template standar invoice, tanda terima, situs resmi, 
dan semua yang lebih penting semua saya lakukan dengan senang hati.

Yang semenjak tahun 2017 tidak sempat saya bikin adalah
template presentasi, dan company profile,
karena saya sok sibuk, maka diputuskan untuk dikerjakan outsource saja.

#### Mimpi yang Terwujud

Seminggu lalu, temanku si [Rania Amina][raniaamina],
membuat lomba template `impress`,
untuk ulang tahun LibreOffice yang ke sepuluh.
Sebetulnya saya juga tidak punya niat ikut lomba,
saya tidak merasa punya cukup rasa seni untuk menjadi desainer.

Yang saya mau, hanyalah membikin template untuk kantor.
Namun karena temanku ini meminta teman-teman sekalian untuk berkontribusi,
maka sekalianlah saya serahkan salah satu karya untuk dilombakan.

#### Template Resmi

Yang pertama kali kulakukan, tentunya adalah riset dahuluuuu.

* <https://dohliam.github.io/LibreOffice-impress-templates/>

Setelah saya unduh semua template direpository tersebut,
saya baru sadar kalau kebanyakan isinya,
hanyalah merubah gambar latar belakang saja.
Kebanyakan gambar latar tersebut sudah kuno,
dan mungkin berasal dari template-template tua.
Beberapa adalah sisa OpenOffice juga.

Duh... Impress adalah porgram yang keren.
Dan layak template yang lebih baik dari sekedar naskah-naskah kuno.

-- -- --

### Impress

#### Pratilik

Di masa lalu, say apernah membikin beberapa wallpaper,
dengan menggunakan inkscape.
Karena di Impress, hanyalah mengganti background saja.
Maka saya piki, saya dapat membikin background dengan inkscape.
Bisa dengan material wallpaper yang saya bikin,
atau dengan membikin ulang sama sekali dari awal.

Template pertama saya hanyalah dengan meniru deain kartu nama,
dan kemudian menjadikannya master slide.
Hasilnya salah tampilan sederhana,
yang sebetulnya belum bagus, namun juga tidak buruk.
Masih layak pakai-laaah.

![Auto Template: Preview][auto-cover]

### Berkas Sumber SVG

Monggo (kang)mas. Mangga a(kang). Silahkan tu(kang).
Langsung saja unduh di sini.

* [github.com/.../impress-template-auto][repo-auto]

#### Master Slides

Template ini terdiri dari tiga `master slides`.
Semua dapat dilihat di Impress.

![Auto Template: Impress: Master Slide][auto-master]

Dari atas ke bawah, saya namakan tiap halaman dengan bahas inggris.

From top to bottom,

* Default

* Single: Untuk judul bab, untuk penghubung antar bagian

* Image: Master Slide, untuk menampilkan suatu gambar.

-- -- --

### Inkscape

Gambar latar dari slide di atas dibikin dengan menggunakan Inkscape.
Tiap-tiap master slide, memakai lapisan `layer` sendiri di inskcape.

![Auto Template: Inkscape: Layers][auto-layers]

Pratilik Inkscape dapat dilihat di sini:

![Auto Template: Inkscape: Single Slide: Cut][auto-cut]

Di mana source dari gambar sebelum proses potong `cut` ada di sini.

![Auto Template: Inkscape: Single Slide: Source][auto-source]

Saya selalu menaruh source di layer terpisah,
supaya saya dapat mengubah gambar sewaktu-waktu secara mudah.
Namun saya mengatur lapisan `layer` ini tetap tersembunyi,
dan hanya menampilkan hasil akhirnya saja.

#### Ukuran

Slide Impress menggunkan rasio perbandingan,
yaitu untuk memntukan besar halaman, misalnya `16:9`.
Inkscape yang sayta gunakan juga harus mencerminkan rasio ini.
Misalnya berkas inkscape, menggunakan ukuran `1600px * 900px`..

### Berkas Sumber SVG

Saya juga menaruh source SVG di repositor,
supaya dapat dipakai sohib-sohib sekalian.

* [github.com/.../source-auto.svg][source-inkscape]

-- -- --

### Membuat Master Slide

Sohib dapat memulai dari master slides yang kosong.

![Auto Template: Impress: Empty Master Slide][auto-impress-empty]

Sohib dapat langsung melakukan salin-tempel `copy-paste`,
dari Inkscape ke Impress.
Hanya perlu diawasi posisi saat melakukan penempelan.

* Misalnya posisi X` dari gambar yang penuh secara horisontal,
  harus dimulai dari nol.

* Dan juga posisi `Y` dari gambar yang penuh secara vertikal,
  juga harus dimulai dari nol.

![Auto Template: Impress: Copy Paste][auto-impress-paste]

#### Peneyesuaian Teks

Sekarang bikinlah penyesuaian,
misalnya memindahkan pengaturan gambar ke bagian belakang dari teks.
Lalu mengubah ukuran dan memindahkan pisisi teks.
Dan juga mengubah warna dari teks supaya cocok,
dengan warna latar belakang.

![Auto Template: Impress: Adjustment][auto-impress-adjust]

#### Fonta

Saya suka menggunakan dua fonta dari `google fonts` yang bersifat `free`.

* Source Sans Pro

* Source Sans Pro Semibold

Sesuaiak judul, sesuai kebutuhan sohib yaacc...

#### Slide

Coba lihat slide, dalam tampilan normal,
untuk melihat apakah slide-nya sudah siap.

![Auto Template: Impress: Normal Slide][auto-impress-normal]

-- -- --

### Apa Berikutnya ?

Lanjutkan baca ke
[ [Inkscape: Impress Slides - Part Two][local-whats-next] ].

Terimakasih sudah berkunjung dan membaca.

[//]: <> ( -- -- -- links below -- -- -- )

[local-whats-next]:     {% postimage %}/desain/2020/09/22/inkscape-impress-slides-02/

[raniaamina]:   https://raniaamina.id/
[repo-auto]:    https://github.com/epsi-rns/berkas2/tree/master/impress-template-auto
[source-inkscape]:      https://github.com/epsi-rns/berkas2/blob/master/impress-template-auto/source-auto.svg

[auto-cover]:   {% postimage %}/desain/2020/09/01-auto-linux-diversity-cover.png
[auto-master]:  {% postimage %}/desain/2020/09/01-auto-impress-master-slides.png
[auto-layers]:  {% postimage %}/desain/2020/09/01-auto-inkscape-layers.png
[auto-cut]:     {% postimage %}/desain/2020/09/01-auto-inkscape-cut.png
[auto-source]:  {% postimage %}/desain/2020/09/01-auto-inkscape-source.png

[auto-impress-empty]:   {% postimage %}/desain/2020/09/01-auto-impress-empty.png
[auto-impress-paste]:   {% postimage %}/desain/2020/09/01-auto-impress-paste.png
[auto-impress-adjust]:  {% postimage %}/desain/2020/09/01-auto-impress-adjustment.png
[auto-impress-normal]:  {% postimage %}/desain/2020/09/01-auto-impress-normal.png


