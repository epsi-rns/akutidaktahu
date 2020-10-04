---
layout    : post
title     : Animasi Sozi - Bagian Satu
date      : 2020-09-27 09:17:35
slug      : sozi-animasi-01
tags      : [inkscape, sozi]
keywords  : [animation, shape, presentation, border line]

toc       : "toc/inkscape-keseharian.njk"
opengraphimage: "assets/posts/design/2020/09-sozi/11-sozi-08-lt-frames.png"
excerpt   : 
  Membikin animasi yang mempesona dengan Sozi,
  sebagai awalan tampilan video presentasi.
---

<a name="prakata"></a>

## Prakata

> Membikin animasi yang mempesona dengan Sozi,
> sebagai awalan tampilan video presentasi.

Animasi ini saya beri nama `candyline`,
karena tampilannya dibikin berdasarkan template Impress saya,
yang bernama `candyclone`.

#### Artikel Berseri

Artikel berseri ini terdiri dari tiga bagian.

* Bagian Satu: Garis Pinggir

* Bagian Dua: Judul

* Bagian Tiga: Dekorasi Kubus

![Candyline: Lines Preview][Lines-preview]

### Daftar Isi

* [Prakata](#prakata): Daftar Isi

* [Mengenai Sozi](#tentang-sozi)

* [Inkscape: Persiapan Bentuk Dasar](#bentuk-dasar)

* [Inkscape: Garis Saja](#inkscape-garis)

* [Sozi: Garis Saja](#sozi-garis)

* [Sozi Export](#sozi-export)

* [Selanjutnya?](#selanjutnya)

### Bahasa Inggris

Artikel ini juga disajikan di blog penulis yang lain,
dalam bahasa Inggris:

* [Sozi Animation - Part One][english-version]

### Bahasa Indonesia

Berikut padanan kata yang saya pakai di artikel ini.

* `frame` (dalam sozi): `salindia`.

* `frame` (dalam inkscape): `bingkai`.

* `position`: `letak`.

* `positioning`: `peletakan`.

* `movement`: `pergerakan`.

-- -- --

<a name="tentang-sozi"></a>

## Mengenai Sozi

> Mengubah peletakan dari objek, dari satu frame ke frame lainnya.

Sozi adalah perangkat lunak yang menggunakan objek dari inkscape,
menggerakkan tiap peletakan tiap objek, dari satu frame ke frame lainnya.
Yang membuat `Sozi` menjadi perangkat idaman,
adalah karena `Sozi` menggunakan `Inkscape`.
Dengan demikian maka kita cukup menggunakan `Inkscape` saja,
untuk menangani segala sesuatunya.
Sementara itu, `Sozi` cukup menangani animasi tiap objek.

### Situs Resmi

* [sozi.baierouge.fr](https://sozi.baierouge.fr/)

Cukup dengan mengunduh rilis resmi Sozi dari github,
dan akan lancar jaya.

### Sozi Export

Untuk mengubah dari satu bentuk berkas ke berkas yang lainnya,
dapat dengan menggunakan perangkat lain, misalnya `sozi-export`.

`sozi-export` ini berjalan dengan baik di openSUSE yang saya pakai,
namun saya menemukan kesulitan untuk menjalankan di Gentoo,
karena`sozi-export` menggunakan pustaka lawas,
yaitu  `libav` yang sudah diabaikan.

### Metode

Setidaknya ada tiga cara untuk mengatur peletakan di `Sozi`.

1. Langsung pindahkan peletakan dengan tetikus atau papan tuts

2. Gunakan salindia

3. Sunting lasngung berkas JSON (tidak disarankan)

Saya sebetulnya lebih suka hal-hal teknis, 
dan bukanlah desainer dengan cita rasa seni.
Maka saya lebih suka menggunakan salindia,
sebagai dasar peletakan shape di Sozi.

Tentu saja sohib boleh menggunakan cara pertama.
Tidak perlu diragukan soal ini.

Sementara dengan cara ketiga, yaitu menggunakan JSON,
memang terkadang saya memaksakan diri untuk melihat kode-sumber-nya,
supaya paham cara kerjanya.
Bisa saja dengan cara ini, namun akan lebih mudah menggunakan salindia.

### Contoh Kasus

Saya menaruh semua contoh di artikel ini ke dalam repository berikut:

* [github.com/epsi-rns/berkas2][repository]

Gratis koq. Silahkan unduh sepuasnya. 

-- -- --

<a name="bentuk-dasar"></a>

## Inkscape: Persiapan Bentuk Dasar

### Pengaturan Berkas

Sebagaimana Impress yang telah dibahas di artikel sebelumnya,
Sozi ini menggunakan rasio perbandingan untuk presentasinya,
misalnya `4:3` atau lainnya.
Saya memakai `4:#` karena ini lebih umum di video.
Tentunya kita juga dapat menggunakan `16:9`,
namun pratilik dari rasio `16:9` akan tampak gepeng di beberapa media sosial.

Besarnya ukuran halaman tidak menjadi masalah bagi Sozi.
Namun untuk memudahkan pekerjaan kita sendiri akan lebih mudah,
bilamana kita melakukan pengaturan di awal.
Saya menggunakan ukuran lebar `400px` * dan tinggi `300px`.

Sohib dapat menggunakan berapapun ukuran sesuai suasana hati,
selama perbandingan lebar dan tingginya,
mencerminkan presentasi yang akan dibikin di Sozi.

### Lapisan Layers

Sebagaimana karya yang lain,
saya memulai dengan bentuk dasarnya terlebih dahulu.
Maka `layer`-nya say siapkan tiga lapisan.

* Background: latar belakang presentasi, berwarna putih.

* Source: gambar dasar, sebelum dipotong.

* Cut: gambar dasar, setelah jadi.

![Base: Three Layers][base-layers]

### Source: Sebelum Dipotong

Bentuk dasarnya hanyalah dekorasi garis pinggir.
Baik kiri maupun kanan sebetulnya hanyalah,
kotak yang dibikin tipis, yaitu dengan ketebalan sebesar `10px`.

![Base: Source Before Cut][base-source]

Saya menggunakan warna biru dari`google material pallete`.
Sohib dapat menggunakan warna lain dari pallete yang sama.
Atau dapat juga menggunakan `open color` bikinan mbak `heeyeun`.

### Gambar Jadi: Setelah Dipotong

Potong gambar di atas,
makan akan dihasilkan gambar sebagaimana tampak di bawah:

![Base: Final Image After Cut][base-cut]

Pengaturan warna diatur secara berurut sebagai berikut:

* Kiri Bawah: `blue100`,

* Kiri Tengah: `blue300`,

* Kiri Atas: `blue500`,

* Kanan Bawah: `blue500`,

* Kanan Tengah: `blue700`,

* Kanan Atas: `blue900`.

#### Sumber Gambar SVG

Saya taruh juga yacc,
sumber mentah dari gambar dasar ini di repositori:

* [github.com/.../candyline-base-shape.svg][source-base]

-- -- --

<a name="inkscape-garis"></a>

## Inkscape: Garis Saja

> Persiapan panjang, harap sabar!

Sekaran bikinlah berkas inkscape yang baru,
berdasarkan gambar dasar di atas.
Kita memang menggunakan berkas inkscape yang berbeda,
supaya tidak rancu antara animasi dengan rancangan awalnya.

#### Sumber Gambar SVG

Saya taruh juga yacc,
sumber mentah dari gambar animasi ini di repositori:

* [github.com/.../candyline-only.svg][source-inkscape]

Artikel ini hanya membahas bagian `line` saja,
dari nantinya `intro` yang lengkap.
Makanya saya memakai nama berkas yang aneh seperti di atas.

### Lapisan Layers

Karena Sozi bekerja berdasarkan lapisan layer di inkscape,
maka kita harus memisahkan tiap-tiap bentuk shape,
di masing-masing lapisan-lapisan layer tersendiri.
Karena ini termasuk latar background-nya.
maka sekarang berkas SVG jadi terdiri dari tujuh lapisan layers.

* Background,

* Kiri Bawah, Kiri Tengah, Kiri Atas,

* Kanan Bawah, Kanan Tengah, and Kanan Atas.

![Lines Only: Seven Layers][lines-layers]

### Frames Sublayers

Sozi juga bekerja berdasarkan bingkai frames.
Tiap-tiap bingkai frames dapat diletakkan di mana saja,
namun akan lebih rapih kalau diletakkan di lapisan layer terkait.
Supaya bingkai frames (salindia) ini dapat disembunyikan dengan mudah,
dengan meng-klik tombol `hidden` di lapisan layer di inkscape.

Sebagai pemula, akan lebih mudah untuk mengikuti contoh,
dari situs resmi Sozi, yaitu untuk menaruh frames di dalam lapisan sublayer.
Sekarang kita memiliki tujuh frames sebagai lapisan sublayer,
sebagaimana tampak di bawah:

* Background: Frames,

* Kiri Bawah: Frames, Kiri Tengah: Frames, Kiri Atas: Frames,

* Kanan Bawah: Frames, Kanan Tengah: Frames, and Kanan Atas: Frames.

![Lines Only: Frames SubLayers][frames-sublayers]

### Object ID: Background

Sozi mencocokan peletakan dengan menggunakan bingkai frames.
Bagimana tepatnya Sozi melakukan ini?
Peletakan ini diatur dengan menggunakan `ID` dari objek.
Misalnya contoh dengan bingkai kotak merah sebagaimana berikut:

![Lines Only: Object ID: Background 01:01][object-id-bg-1-1]

Sohib dapat memberi nama objek dengan apapun yang dimau.
Saya menamakan objek ini dengan `bg-frame-01-01`,
untuk menunjukkan skala perbandingan,
relatif terhadap ukuran halaman presentasi.

### Object ID: Garis Pinggir

Sohib dapat membuat bingkai frame sebanyak apapun yang dibutuhkan.
Persiapan ini dibutuhkan supaya sohib bebas dan mudah di Sozi,
untuk memilih bingkai yang sudah dipersiapkan di inskcape.
Misalnya untuk bentuk garis di kiri bawah ini,
mungkin memerlukan efek pembesaran zoom dengan ukuran tertentu,
misalnya dimulai dengan ukuran `1/6`.
Maka saya membuat bingkai frame,
dengan ukuran enam kali lebih besar dari halaman aslinya.

![Lines Only: Object ID: Kiri Bawah 06:01][object-id-lb-6-1]

Saya membikin beberapa bingkai frame untuk bentuk `kiri bawah` ini,
misalnya dengan:

* LB Frame 02:01: `lb-frame-02-01`

* LB Frame 04:01: `lb-frame-04-01`

* LB Frame 06:01: `lb-frame-06-01`

* LB Frame 08:01: `lb-frame-08-01`

* LB Frame 10:01: `lb-frame-10-01`

* LB Frame 12:01: `lb-frame-12-01`

`LB` adalah singkatan dari `Left Button`.

Sohib hanya perlu untuk membuat aneka bingkai frameset ini sekali saja.
Jadi sebetulnya tidak perlu membuat aneka bingkai frameset,
untuk tiap-tiap shape.
Artinya gambar object `kanan bawah`,
dapat menggunakan bingkai frame yang sama dengan `kiri bawah`.
Semua lancar jaya, aman selama sohib tahu `ID` dari objek tersebut,
karena `ID` ini yang akan kita pakai di Sozi.

Sekarang kita sudah selesai dengan pembikinan berkas di `Inkscape`.
Kini saatnya berlanjut ke berkas `Sozi`.

-- -- --

<a name="sozi-garis"></a>

## Sozi: Garis Saja

### Pratilik Tanpa Bingkai Frame

Sebelum kita mulai, coba lihat pratilik berikut.

  <video width="512" height="384" controls>
    <source src="{% postimage %}/desain/2020/09-sozi/candyline-only-without-frame-small.mp4" type="video/mp4">
    Cak, browser-mu ijik orak mendukung video.
  </video>

### Baris Perintah

Sohib dapat membuka berkas SVG dari Inkscape ke dalam Sozi,
langsung dari cangkang terminal.

{% highlight "bash" %}
❯ cd /media/Works/bin/Sozi-20.05.09-1589035558-linux-x64

❯ ./Sozi ~/Documents/step-01-lines/candyline-only.svg &!

{% endhighlight %}

![Sozi: Opening Inksape Files][running-sozi]

Akan lebih mudah dengan cara seperti ini

### Berkas Kosong

Tentunya, kita memulai dengan berkas kosong.

![Sozi: Empty Document][sozi-01-empty]

Tanpa salindia frame.
Tanpa lapisan layer.

### Peletakan: Warna Latar

Tiga langkah untuk ini

1. Bikin salindia frame baru, dan beri judul `Start`.

2. Tambahkan lapisan layer `Background`.

3. Atur peletakan bingkai frame:
   `Outline element ID` harus diatur terpasang ke `bg-frame-01-01`.

![Sozi: Positioning: Background][sozi-02-bg]

Sekarang kita memikili ukuran prsentasi yang tepat,
cocok dengan ukuran halaman yang sudah diatur di inkscape.

### Peletakan: Satu Garis

Tambahkan satu persatu lapisan layer,
dimulai dari lapisan layer `Kiri Bawah`.
Lalu atur peletakan di `Outline element ID`,
misalnya atur ke `lb-frame-10-01`,
supaya gambar terskala ke ukuran `1/10`.

![Sozi: Positioning: Kiri Bawah][sozi-03-lb]

### Peletakan: Semua Garis

Lakukan untuk semua lapisan layer.

![Sozi: Positioning: All Lines][sozi-04-all]

Karena tiap-tiap lapisan layer mewakili satu bentuk garis.
Maka kita mendapatkan sejumlah enam bentuk garis,
yang semuanya menggunakan ukuran perbandingan sebesar `1/10`.

### Pergerakan: Mempersiapan Semua Salindia

Persiapkan untuk membikin tiap-tiap pergerakan untuk semua garis,
yaitu dengan membikin enam salindia frame.

* Kiri Bawah, Kiri Tengah, Kiri Atas,

* Kanan Bawah, Kanan Tengah, Kanan Atas.

![Sozi: Pergerakan: Prepare All Frames][sozi-05-frames]

Sohib dapat menggunakan judul apa untuk salindia frame tersebut.

### Pergerakan: Salindia: Kiri Bawah

Atur peletakan untuk salindia `Kiri Bawah`,
supaya sesuai dengan ukuran `1:1` dari halaman presentasi.

* Kiri Bawah: `bg-frame-01-01`

![Sozi: Pergerakan: Kiri Bawah Position][sozi-06-lb-f]

Sohib juga dapat mengatur peletakan,
dari semua lapisan layer yang tersisa.

* Kiri Tengah: `lm-frame-06-01`

* Kiri Atas: `lt-frame-12-01`

* Kanan Bawah: `rb-frame-10-01`

* Kanan Tengah: `rm-frame-08-01`

* Kanan Atas: `rt-frame-08-01`

![Sozi: Pergerakan: The Rest of Layer Position][sozi-06-canvas]

Sebagai catatan, sohib dapat menggunakan,
bingkai frame apa saja untuk mengatur peletakannnya.
Silahkan dicoba untuk mendapatkan efek pergerakan yang lain.
Jadilah kreatif, coba bingkai frame yang lain,
termasuk dengan peletakan yang diputar beberapa derajat.

### Pergerakan: Kiri Tengah

Atur peletakan baru unttuktiap-tiap salindia frame.

* Kiri Tengah: `bg-frame-01-01`

Dan juga lapisan layer yang tersisa.

* Kiri Atas: `lt-frame-08-01`

* Kanan Bawah: `rb-frame-06-01`

* Kanan Tengah: `rm-frame-12-01`

* Kanan Atas: `rt-frame-06-01`

![Sozi: Pergerakan: Kiri Tengah Position][sozi-07-lm-f]

### Pergerakan: Kiri Atas

Berikutnya atur juga ini.

* Kiri Atas: `bg-frame-01-01`

Dan juga lapisan layer sisanya.

* Kanan Bawah: `rb-frame-04-01`

* Kanan Tengah: `rm-frame-06-01`

* Kanan Atas: `rt-frame-02-01`

Sohib dapat melihat cara kerjanya dengan menampilkan,
yaitu `unhide` semua bingkai frame di inkscape.

![Sozi: Pergerakan: Kiri Atas Position with Frames][sozi-08-lt-f]

### Pergerakan: Kanan Bawah

Untuk tiap perkembangan, semakin sedikit yang harus kita atur.

* Kanan Bawah: `bg-frame-01-01`

Berikut lapisan layer sisanya.

* Kanan Tengah: `rm-frame-08-01`

* Kanan Atas: `rt-frame-08-01`

### Pergerakan: Kanan Tengah

Sampai tersisa dua ini.

* Kanan Tengah: `bg-frame-01-01`

Yaitu lapisan layer yang tersisa tinggal satu ini.

* Kanan Atas: `rt-frame-04-01`

### Pergerakan: Kanan Atas

Akhirnya selesai semua pengaturan yang diperlukan.

* Kanan Atas: `bg-frame-01-01`

### Pratilik dengan Bingkai Frame

Karena kita telah selesai, ada baiknya kita lihat ulang hasil videonya.
Namun kali ini dengan bingkai frame ditampilkan, supaya jelas cara kerjanya.

  <video width="512" height="384" controls>
    <source src="{% postimage %}/desain/2020/09-sozi/candyline-only-with-frame-small.mp4" type="video/mp4">
    Cak, browser-mu ijik orak mendukung video.
  </video>

Sohib dapat mengatur `visibility` daeri lapisan layer `frames`,
di dalam Inkscape.

-- -- --

<a name="sozi-export"></a>

## Sozi Export

### OGV Format

Sohib dapat memindahkan hasil ke bentuk video, dengan bantuan `sozi-export`.

{% highlight "bash" %}
$ sozi-to-video candyline-only.sozi.html
{% endhighlight %}

Perintah tersebut akan menghasilkan video dengan nama `candyline-only.sozi.ogv`.

![Sozi Export][sozi-to-video]

### MP4 Format

Bilamana sohib ingin berbagi ke media sosial,
maka perlu pula format yang tepat.
Sohib dapat menggunakan `ffmpeg`.

{% highlight "bash" %}
ffmpeg -i candyline-only.sozi.ogv \
  -vf "scale=iw/2:ih/2" \
  -c:v libx264 \
  -profile:v baseline \
  -level 3.0 \
  -pix_fmt yuv420p \
  candyline-only-small.mp4
{% endhighlight %}

### GIF Format

`Github Pages` tidak mendukung video di dalam `markdown`.
Alih-alih menggunakan `video`,
hal ini dapat diatasi dengan menggunakan `gif`.

{% highlight "bash" %}
ffmpeg -i candyline-cubes.sozi.ogv \
       -vf "fps=10,scale=400:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse"\
       -loop 0 \
       candyline-only-small.gif
{% endhighlight %}

-- -- --

<a name="selanjutnya"></a>

## Selanjutnya?

Lanjutkan baca ke
[ [Animasi Sozi - Bagian Dua][local-whats-next] ].

Terimakasih sudah berkunjung dan membaca.

[//]: <> ( -- -- -- links below -- -- -- )

[local-whats-next]:     /inkscape/2020/09/28/sozi-animasi-02.html

[english-version]:      https://epsi-rns.gitlab.io/design/2020/09/27/sozi-animation-01/

[repository]:       https://github.com/epsi-rns/berkas2/
[source-base]:      https://github.com/epsi-rns/berkas2/blob/master/sozi-candyline/step-01-lines/candyline-base-shape.svg
[source-inkscape]:  https://github.com/epsi-rns/berkas2/blob/master/sozi-candyline/step-01-lines/candyline-only.svg

[base-layers]:  {% postimage %}/desain/2020/09-sozi/10-base-layers.png
[base-source]:  {% postimage %}/desain/2020/09-sozi/10-base-source.png
[base-cut]:     {% postimage %}/desain/2020/09-sozi/10-base-cut.png

[lines-preview]:    {% postimage %}/desain/2020/09-sozi/11-candyline-only-small.gif
[lines-layers]:     {% postimage %}/desain/2020/09-sozi/11-lines-only-layers.png
[frames-sublayers]: {% postimage %}/desain/2020/09-sozi/11-frames-sublayers.png
[object-id-bg-1-1]: {% postimage %}/desain/2020/09-sozi/11-object-id-bg-frame.png
[object-id-lb-6-1]: {% postimage %}/desain/2020/09-sozi/11-object-id-lb-frame.png

[running-sozi]:     {% postimage %}/desain/2020/09-sozi/11-running-sozi.png
[sozi-01-empty]:    {% postimage %}/desain/2020/09-sozi/11-sozi-01-empty.png
[sozi-02-bg]:       {% postimage %}/desain/2020/09-sozi/11-sozi-02-background.png
[sozi-03-lb]:       {% postimage %}/desain/2020/09-sozi/11-sozi-03-left-bottom.png
[sozi-04-all]:      {% postimage %}/desain/2020/09-sozi/11-sozi-04-all-lines.png
[sozi-05-frames]:   {% postimage %}/desain/2020/09-sozi/11-sozi-05-all-frames.png
[sozi-06-lb-f]:     {% postimage %}/desain/2020/09-sozi/11-sozi-06-lb-frames.png
[sozi-06-canvas]:   {% postimage %}/desain/2020/09-sozi/11-sozi-06-lb-frames-canvas.png
[sozi-07-lm-f]:     {% postimage %}/desain/2020/09-sozi/11-sozi-07-lm-frames.png
[sozi-08-lt-f]:     {% postimage %}/desain/2020/09-sozi/11-sozi-08-lt-frames.png
[sozi-to-video]:    {% postimage %}/desain/2020/09-sozi/11-sozi-to-video.png
