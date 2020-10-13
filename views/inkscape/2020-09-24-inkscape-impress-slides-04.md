---
layout    : post
title     : Inkscape - Impress Slides - Bagian Empat
date      : 2020-09-24 09:17:35
slug      : inkscape-impress-slides-04
tags      : [inkscape, LibreOffice]
keywords  : [desain, impress, master slides, template, karya asli]

toc       : "toc/inkscape-keseharian.njk"
opengraphimage: "assets/posts/desain/2020/09-impress/04-reference-ex-03.png"
excerpt   : 
  Menambahkan ilustrasi diagram,
  sebagai kandungan salindia di Impress menggunakan Inkscape.
---

<a name="prakata"></a>

## Prakata

> Menambahkan ilustrasi diagram,
> sebagai kandungan salindia di Impress menggunakan Inkscape.

Bagian terberat dari membuat presentasi setelah master slide jadi,
adalah membikin aneka ilustrasi sebagai isi kandungan salindianya.
Berikut adalah usaha membuat ilustrasi yang dapat sohib-sohib gunakan,
untuk presentasi sehari-hari.
Sohib-sohib juga dapat berbagi ilustrasi,
untuk digunakan teman-teman lainya yang mungkin membutuhkan.

Tujuan saya cukup jelas.
Template ini mesti cukup dapat digunakan oleh pengguna `Impress`.
Walaupun sayangnya untuk melakukan perubahan ilustrasi,
diperlukan pengetahuan `Inkscape` yang cukup.
Ini sebabnya kita membutuhkan ilustrasi berupa diagram yang menarik, 
dengan gaya infografis.

Namun, tampilan cantique tidak akan mebantu,
bilamana sohib tidak memiliki materi presentasi yang cukup baik.

### Artikel Berseri

Artikel berseri ini terdiri dari lima bagian.

* Bagian Satu: Template sederhana `auto`

* Bagian Dua: Template klasik modern `candyclone`

* Bagian Tiga: Menambahkan dekorasi `bullet`,
  untuk butir-butir pokok pikiran

* Bagian Empat: Menambahkan ilustrasi diagram,
  sebagai isi kandungan dari salindia

* Bagian Lima: Menambahkan karya seni bikinan sendiri

![Thumbs 3 Preview][thumbs-3-preview]

### Daftar Isi

* [Prakata](#prakata): Daftar Isi

* [Semua Ilustrasi Diagram](#ilustrasi-diagram)

* [Persiapan Awal](#persiapan-awal)

* [Proses Pembikinan](#proses-pembikinan)

* [Ikon Bikinan Sendiri](#ikon-bikinan-sendiri)

* [Apa Selanjutnya?](#selanjutnya)

### Bahasa Inggris

Artikel ini juga disajikan di blog penulis yang lain,
dalam bahasa Inggris:

* [Inkscape: Impress Slides - Part Four][english-version]

### Bahasa Indonesia

Berikut padanan kata yang saya pakai di artikel ini.

* `slide`: `salindia`.

* `master slide`: `salindia utama`.

* `default master slide`: `salindia utama baku`.

-- -- --

<a name="persiapan-awal"></a>

### Persiapan Awal

#### Persyaratan

Sejenak di suatu waktu, saya pernah mengikuti,
sayembara templat salindia untuk `Impress` di Indonesia,
dan berhasil masuk peringkat kelima di nominasi enam templat terbaik.
Salah satu persyaratan-nya adalah kandungan isi `content`.
Maka setelah salindia utama, dan dekorasi butir pemikiran,
kandungan isi inilah yang harus dikerjakan.

Sayembara ini sendiri adalah kerjasama,
antara LibreOffice Indonesia dengan Gimpscape.
Gimpscape adalah komunitas lokal di Indonesia terkait desain,
dengan perangkat lunak yang terbuka `libre graphics`,
tidak terbatas hanya `Inkscape` maupun `The Gimp`.
Ini adalah kesempatan saya untuk menggunakan Inkscape,
dan saya memilih untuk membikin ilustrasi dalam bentuk mirip diagram,
sebagai kandungan isi dari salindia di `Impress`.

### Berkas Sumber SVG

Monggo (kang)mas. Mangga a(kang). Silahkan tu(kang).
Langsung saja unduh di sini.

* [github.com/.../template-candyclone-content.svg.zip][source-inkscape]

#### Lapisan Layer

Setelah mencoba selama beberapa saat,
ternyata mudah untuk mengerjakannya dengan Inkscape.
Bahkan rasanya saya tidak ingin berhenti membikin ilustrasi.
Sampai akhirnya saya berhasil membikin limabelas ilustrasi,
dengan tambahan ilustrasi yang tidak jadi saya masukkan,
karena rasanya kurang pas dipandang.

Sohib dapat melihat semua lapisan layers di sini:

![Ilustasi Kandungan: Inkscape: All Layers][content-layers]

#### Lapisan Layer Dasar

Untuk menggambarkan seolah-olah ada salindia utama,
maka kita perlu mempersiapkan lapisan layer berisi gambar latar.
Di isni saya menggunakan tiga warna saja yaitu: merah, hijau, dan biru.
Dan juga judul seadanya juga diperlukan untuk menata peletekan.

![Ilustasi Kandungan: Inkscape: Base Layer][content-layer-base]

Tampilan pratiliknya dapat dilihat sebagaimana gambar di bawah:

![Ilustasi Kandungan: Inkscape: Master Slide][inkscape-master-slide]

-- -- --

<a name="proses-pembikinan"></a>

### Proses Pembikinan

Saya akan menjelaskan langkah demi langkah menggunakan satu contoh kasus.
Berikutnya, proses yang sama dapat dilaksanakan, untuk semua kasus yang lain.

#### Inkscape: Berkas Utama

Biasanya saya menggunakan lapisan layer awal bernama `source`,
sebelum memotongnya menjadi bentuk akhir yang bermanfaat.
Di lapisan layer awal ini, saya menggunakan warna apa saja yang tidak perlu bagus,
untuk kemudian mengatur estetika warnanya belakangan.

![Ilustasi Kandungan: Inkscape: Source Layer][inkscape-03-source]

Lalu saya memotong gambarnya di lapisan layer terpisah.
Dan juga mengatur warna berdasarkan palet dari `material design`.
Perhatikan bahwa saya menggunakan peletakan icon lebih dari yang dibutuhkan.

![Ilustasi Kandungan: Inkscape: Cut Layer][inkscape-03-cut]

Membutuhkan beberapa kali iterasi sebelum menemukan warna yang tepat.
Memang harus mencoba-coba, terutama bayangan di bawah,
sampai akhirnya saya baru paham bahwa saya cukup menggelapkan warnanya saja.
Contohnya, kalau saya menggunakan warna `blue300`,
maka saya dapat menggunakan warna bayangan dengan `blue400` atau `blue500`.

#### Inkscape: Menyiapkan Berkas Impor

Supaya berkas `Inkscape` dapat disisipkan dengan menu di `Impress`,
kita perlu menghapus semua lapisan layer yang tidak diperlukan.
Maka simpanlah berkas inkscape tersebut ke dalam berkas SVG dengan nama berbeda.

![Ilustasi Kandungan: Inkscape: Import Source][inkscape-03-import]

Perhatikan bahwa di berkas ini hanya ada satu lapisan layer saja,
walaupun sebetulnya tidak masalah untuk menggunakan beberapa lapisan layer.
Alasan saya menggunakan satu lapisan layer adalah penyederhanaan.

#### Impress: Menyisipkan Gambar

Setelah menyipakan template saya yang bernama `candy clone`,
lengkap dengan segala salindia-utama-nya,
maka saya dapat membikin salindia baru, dan menyisipkan gambar SVG.

![Ilustasi Kandungan: Impress: Insert Image][impress-insert-image]

Pastikan peletakan dimulai dari nol.

![Ilustasi Kandungan: Impress: Position and Size][impress-position-size]

#### Impress: Memecah Gambar dan Menyesuaikan

Pecahlah gambar dengan perintah `break`,
dan hapus ikon yang tidak diperlukan.
Sekarang kita mendapatkan pratilikk sebagaimana berikut:

![Ilustasi Kandungan: Impress: Fresh Image][impress-03-fresh]

Perhatikan bahwa kita tidak selalu harus memecah gambar dengan perintah `break`.
Alih-alih kita dapat mempersiapkan semua di Inkscape.

Tanpa memecah gambar,
kita tidak dapat menyesuaikan posisi objek di `Impress`.
Namun sebetulnya tidak perlu menyesuaikan peletakan di `Impress`,
karena lebih mudah untuk melakukannya di Inkscape.

#### Impress: Menambahkan Teks

Dengan cara di atas,
yang kita perlukan berikutnya hanyalah menambahkan teks.

![Ilustasi Kandungan: Impress: Final Image][impress-03-final]

#### Mengulang Proses

Sekarang kita dapat melakukan proses yang sama,
untuk semua ilustrasi diagram yang lain.
Hanya perlu diingat bahwa proses kreatif di dalam `Inkscape`,
mungkin berbeda antara satu ilustrasi dengan ilustrasi yang lain.
YAng satu mungkin lebih sederhana, 
sedangkan yang lain mungkin lebih rumit,
sebagaimana tampak dalam contoh berikut di bawah:

![Ilustasi Kandungan: Inkscape: Example Complex Layers][impress-08-layers]

Dengan warna dari palet `material design`,
maka mudah untuk mengubah warna, untuk disesuaikan dengan kebutuhan.
Garis panduan di gambar di atas menggunakan warna biru dari `material design`,
karena rancangan warna  aslinya adalah berwarna biru,
sampai di kemudian hari saya berubah pikiran,
dan mengubahnya menjadi merah dengan tepat menggunakan warna dari `material design`,

-- -- --

<a name="ikon-bikinan-sendiri"></a>

### Ikon Bikinan Sendiri

> Saya bukanlah pengacara yang paham hukum.
> Maka saya menghindari untuk mencampur lisensi.

Tentu saja saya dapat menggunakan ikon-ikon gratisan,
misalnya dari `FontAwesome`, atau ikon dari `Google`.
Namun untuk alasan tertentu saya memilih untuk membuat ikon bikinan sendiri.
Ikon ini sudah saya bikin sejak tahun 2017.

![Ilustasi Kandungan: Inkscape: Custom Nano Icons][custom-nano-icons]

Ikon ini saya beri nama `nano icon`.
Tujuan awalnya adalah membuat gambar semacam ikatan atom,
dan ternyata saya gagal total.
Sampai akhirnya saya menemukan kegunaan lainnya,
untuk membuat diagram di tahun 2020.

-- -- --

<a name="ilustrasi-diagram"></a>

### Semua Ilustrasi Diagram

Berikut saya persembahkan semua ilustrasi diagram.

#### 01: Timeline

![Ilustasi Kandungan: Impress: Preview 01][preview-content-01]

#### 02: Simple Flow

![Ilustasi Kandungan: Impress: Preview 02][preview-content-02]

#### 03: Two Sided Cutter

![Ilustasi Kandungan: Impress: Preview 03][preview-content-03]

#### 04: Middle Sprocket Chain

![Ilustasi Kandungan: Impress: Preview 04][preview-content-04]

#### 05: Synergy

![Ilustasi Kandungan: Impress: Preview 05][preview-content-05]

#### 06: Arrow Verse

![Ilustasi Kandungan: Impress: Preview 06][preview-content-06]

#### 07: Wave Columns

![Ilustasi Kandungan: Impress: Preview 07][preview-content-07]

#### 08: 3D Divider

![Ilustasi Kandungan: Impress: Preview 08][preview-content-08]

#### 09: 3D Step by Step

![Ilustasi Kandungan: Impress: Preview 09][preview-content-09]

#### 10: Bolt Fingers: Middle Center

![Ilustasi Kandungan: Impress: Preview 10][preview-content-10]

#### 11: Bolt Fingers: Left

![Ilustasi Kandungan: Impress: Preview 11][preview-content-11]

#### 12: Brake Pads

![Ilustasi Kandungan: Impress: Preview 12][preview-content-12]

#### 13: Reservoir

![Ilustasi Kandungan: Impress: Preview 13][preview-content-13]

#### 14: Grinder Disc

![Ilustasi Kandungan: Impress: Preview 14][preview-content-14]

#### 15: Partial Disc

![Ilustasi Kandungan: Impress: Preview 15][preview-content-15]

-- -- --

<a name="selanjutnya"></a>

## Apa Selanjutnya?

Lanjutkan baca ke
[ [Inkscape: Impress Slides - Bagian Lima][local-whats-next] ].

Terimakasih sudah berkunjung dan membaca.

[//]: <> ( -- -- -- links below -- -- -- )

[local-whats-next]:     /inkscape/2020/09/25/inkscape-impress-slides-05.html
[english-version]:      https://epsi-rns.gitlab.io/design/2020/09/24/inkscape-impress-slides-04/
[thumbs-3-preview]:     {% postimage %}/desain/2020/09-impress/thumbs-3.png

[source-inkscape]:      {% postimage %}/desain/2020/09-impress/template-candyclone-content.svg.zip
[content-layers]:       {% postimage %}/desain/2020/09-impress/04-content-inkscape-all-layers.png
[content-layer-base]:   {% postimage %}/desain/2020/09-impress/04-content-inkscape-layer-base.png
[inkscape-master-slide]:{% postimage %}/desain/2020/09-impress/04-content-inkscape-master-slide-source.png
[impress-insert-image]: {% postimage %}/desain/2020/09-impress/04-impress-insert-image.png
[impress-position-size]:{% postimage %}/desain/2020/09-impress/04-impress-position-size.png
[custom-nano-icons]:    {% postimage %}/desain/2020/09-impress/04-content-inkscape-custom-nano-icons.png

[inkscape-03-cut]:      {% postimage %}/desain/2020/09-impress/04-content-inkscape-03-cut.png
[inkscape-03-source]:   {% postimage %}/desain/2020/09-impress/04-content-inkscape-03-source.png
[inkscape-03-import]:   {% postimage %}/desain/2020/09-impress/04-content-inkscape-03-import-source.png
[impress-03-fresh]:     {% postimage %}/desain/2020/09-impress/04-content-impress-03-fresh-image.png
[impress-03-final]:     {% postimage %}/desain/2020/09-impress/04-content-impress-03-final-image.png
[impress-08-layers]:    {% postimage %}/desain/2020/09-impress/04-content-inkscape-08-layers.png

[preview-content-01]:   {% postimage %}/desain/2020/09-impress/04-01-candyclone-content-timeline.png
[preview-content-02]:   {% postimage %}/desain/2020/09-impress/04-02-candyclone-content-simple-flow.png
[preview-content-03]:   {% postimage %}/desain/2020/09-impress/04-03-candyclone-content-two-sided.png
[preview-content-04]:   {% postimage %}/desain/2020/09-impress/04-04-candyclone-content-synergy.png
[preview-content-05]:   {% postimage %}/desain/2020/09-impress/04-05-candyclone-content-sprocket.png
[preview-content-06]:   {% postimage %}/desain/2020/09-impress/04-06-candyclone-content-arrow-verse.png
[preview-content-07]:   {% postimage %}/desain/2020/09-impress/04-07-candyclone-content-wave-columns.png
[preview-content-08]:   {% postimage %}/desain/2020/09-impress/04-08-candyclone-content-3d-divider.png
[preview-content-09]:   {% postimage %}/desain/2020/09-impress/04-09-candyclone-content-3d-step-by-step.png
[preview-content-10]:   {% postimage %}/desain/2020/09-impress/04-10-candyclone-content-bolt-finger-middle-center.png
[preview-content-11]:   {% postimage %}/desain/2020/09-impress/04-11-candyclone-content-bolt-finger-left-mounting.png
[preview-content-12]:   {% postimage %}/desain/2020/09-impress/04-12-candyclone-content-brake-pads.png
[preview-content-13]:   {% postimage %}/desain/2020/09-impress/04-13-candyclone-content-reservoir.png
[preview-content-14]:   {% postimage %}/desain/2020/09-impress/04-14-candyclone-content-grinder-disc.png
[preview-content-15]:   {% postimage %}/desain/2020/09-impress/04-15-candyclone-content-partial-disc.png
