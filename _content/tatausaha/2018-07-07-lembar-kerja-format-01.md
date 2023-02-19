---
layout    : post
title     : Lembar Kerja - Ukuran Unit
date      : 2018-07-07 09:17:35
slug      : lembar-kerja-format-01
tags      : [calc]
keywords  : [spreadsheet]

toc       : "toc/lembarkerja.njk"
opengraphimage: "assets/posts/tatausaha/2018/06/02ex-number-rupiah.png"

excerpt   : Menata tampilan, ukuran unit, group, indentasi, font, warna, border.
---

<a name="prakata"></a>

## Prakata

> Menata tampilan, ukuran unit, group, indentasi, font, warna, border.

_Kesederhanaan laporan itu perlu._
_Bukan berarti tampilan sheet tidak perlu dihias._

Untuk membantu teman-teman untuk kreatif secara mandiri,
saya berikan contoh unik yang dapat dipakai dalam keseharian.
Ada beberapa hal yang dapat dijelajahi di Excel ataupun Calc.
Namun saya batasi, saya hanya membahas yang sering saya pakai saja.

Kita mulai dari unit, tips pemformatan, warna baru terakhir border.

### Daftar Isi

* [Prakata](#prakata): Daftar Isi

* [Unit Ukuran](#unit)

* [Contoh Ukuran 1](#contoh)

* [Contoh Ukuran 2](#contoh)

* [Penutup](#penutup)

### Unduh Berkas

> Gratis nih bro!

Lembar kerja spreadsheet tersedia,
supaya teman-teman bisa copy-paste.

* [Berkas Excel: 02-format.xlsx][source-format-xlsx]

-- -- --

<a name="ukuran"></a>

## Unit Ukuran

> Unit

Kenapa kita perlu tahu ukuran,
karena di dunia kerja kita membutuhkan form baku standar.
Yang bentuknya mesti jkonsisten dari waktu ke waktu.

Mulailah dengan memeriksa ukuran yang dipakai.
Supaya mudah, saya ambil keputusan saja memakai ukuran centimeter.
Karena Indonesia memakai sistem metrik.

_Maaf ya, mungkin saya salah, namun kira-kira begitu._

### Pengaturan Ukuran

Kita dapat menggunakan dialog di bawah ini:

![Lembar Kerja: Format Ukuran: Setting][21-unit-dialog-set]

Di dalam dialog ini kita dapat memilih,
unit baku yang akan kita pakai.
* cm: centimeter
* mm: milimiter
* pt: point
* in: inci

### Praktek

Conoth ukuran dapat kita dalam lembar kerja berikut:

![Lembar Kerja: Format Ukuran: Unit Plain][21-unit-plain]

Ukuran kolom dapat diatur seperti contoh berikut:

![Lembar Kerja: Format Ukuran: Unit][21-unit-col-width]

Demikian pula, 
ukuran baris dapat diatur seperti contoh berikut:

![Lembar Kerja: Format Ukuran: Unit Row][21-unit-row-height]

Lalu bagaimana dengan ukuran buka baku?
Ya ditulis saja dengan tulisan `1 in`,
nanti akan berubah sendiri

![Lembar Kerja: Format Ukuran: Unit Inch][21-unit-inch]

-- -- --

<a name="contoh1"></a>

## Contoh Ukuran 1

Tantangan dalam kerja keseharian adalah membikin laporan bulanan,
melalui media secara online yang muat dalam ukuran pdf yang umum,
yang berarti dapat pula dicetak di ukuran A4 kapan saja.

### Laporan Faktur Pajak

Ini contoh tabel baku yang pernah saya bikin.
Dalam satu halaman bisa ada lima tabel.
Cukup menghemat kertas, dan PDF juga jadi tidak terlalu panjang.
Kalau breani kreatif memotong2 field yang tidak perlu,
maka laporan ke atasan akan lebih mudah dibaca.

![Lembar Kerja: Contoh Ukuran: ][22-ukuran-01-export]

Ini sebetulnya juga saya atur betul ukurannya,
dengan angka yang mudah diingat.
Supaya kalau berubah, dapat dengan mudah untuk,
saya kembalikan seperti semula.

![Lembar Kerja: Contoh Ukuran: ][22-ukuran-01-ss]

Penggunaan selengkapnya ada di link di bawah.
Ada dua pilihan, memakai OpenPyXL atau LibreOffice Macro.

* [OpenPyXL Copy Range][openpyxl-copy]
* [Libreoffice Copy Range][libreoffice-copy]

Link di atas berisi otomasi,
untuk mengurangi banyak pekerjaan manual,
silahkan dibaca sendiri.

### Pengaturan Lebar Halaman

Pernah ndak sih sebel, kalau tabel yang kamu bikin, 
selalu tidak cukup di ukuran A4 saat dicetak?

Untuk itu, kita atur dulu ukuran halaman A4-nya.
Misalnya 75%. Sebisanya jangan lebih kecil dari itu,
karena hasil cetaknya akan sulit dibaca.

![Lembar Kerja: Contoh Ukuran: ][22-ukuran-01-page]

Kalau kurang dari 75%, baru muat di A4.
Berarti bentuk tabelnya perlu dirancang ulang.

Saya banyak contoh sebetulnya,
namun sebaiknya saya berikan contohnya di artikel lain.
Untuk sementara kita habiskan saja terlebih dahulu,
dasar penggunaan Excel/Calc.

-- -- --

<a name="contoh2"></a>

## Contoh Ukuran 2

> Tidak perlu banyak, yang penting berisik.

_Rasanya saya belum terlalu tua untuk menjadi akunting yang baceprot._

Kalau sudah biasa membuat form,
maka merapikan form menjadi candu.

Kita dapat membuat form dengan cepat,
karena tinggal copy-paste.
Kita juga tahu mana yang membosankan,
mana yang sudah cukup baik,
dan mana yang dapat di-improve.

Di waktu senggang, kita jadi bebas berkreasi,
ketika melihat form excel lain di internet.
Karena dasar pekerjaan kita sudah rampung.

### Laporan Invoice

Berikutnya tabel invoice laporan invoice yang saya bikin.
Karena saya selalu butuh tahu, komponen biaya di invoice itu,
digunakan untuk pos apa saja.

![Lembar Kerja: Contoh Ukuran: ][22-ukuran-02-export]

Sama seperti sebelumnya, saya atur dahulu ukurannya.
Ukuran dapat berubah dari tahun ke tahun.
Namun setidakmnya saya punya stndar baku,
untuk kantor tempat di mana saya bekerja.

![Lembar Kerja: Contoh Ukuran: ][22-ukuran-02-ss]

Seperti terlihat di gambar di atas,
baik ukuran kolom maupun ukuran baris, diatur semua.

### Pengaturan Lebar Halaman

Di sini saya berhasil untuk membuat tulisan form tidak terlalu kecil.
Yaitu 85% resizing di page style.
Karera kesulitan untuk membuat form juga tidak terlalu tinggi.

![Lembar Kerja: Contoh Ukuran: ][22-ukuran-02-page]

-- -- --

<a name="selanjutnya"></a>

## Apa Selanjutnya?

Sedikit tips, supaya pekerjaan kita lebih mudah.
Supaya laporan ke atasan lebih menarik.

Lanjut baca yuk. 
[[Lembar Kerja - Tips Format][local-whats-next]].

[//]: <> ( -- -- -- links below -- -- -- )

[local-whats-next]:     /tatausaha/2018/07/09/lembar-kerja-format-02.html

[source-format-xlsx]:   {% postimage %}/tatausaha/2018/07/02-format.xlsx

[openpyxl-copy]:        https://epsi.bitbucket.io/automation/2022/09/11/python-excel-copy-range/
[libreoffice-copy]:     https://epsi.bitbucket.io/automation/2022/09/21/python-libreoffice-copy-range/

[21-unit-col-width]:    {% postimage %}/tatausaha/2018/07/21-format-unit-col-width.png
[21-unit-dialog-set]:   {% postimage %}/tatausaha/2018/07/21-format-unit-dialog-settings.png
[21-unit-inch]:         {% postimage %}/tatausaha/2018/07/21-format-unit-inch.png
[21-unit-plain]:        {% postimage %}/tatausaha/2018/07/21-format-unit-plain.png
[21-unit-row-height]:   {% postimage %}/tatausaha/2018/07/21-format-unit-row-height.png

[22-ukuran-01-export]:  {% postimage %}/tatausaha/2018/07/22-format-ukuran-01-export.png
[22-ukuran-01-page]:    {% postimage %}/tatausaha/2018/07/22-format-ukuran-01-page.png
[22-ukuran-01-ss]:      {% postimage %}/tatausaha/2018/07/22-format-ukuran-01-screenshot.png
[22-ukuran-02-bigger]:  {% postimage %}/tatausaha/2018/07/22-format-ukuran-02-bigger.png
[22-ukuran-02-export]:  {% postimage %}/tatausaha/2018/07/22-format-ukuran-02-export.png
[22-ukuran-02-page]:    {% postimage %}/tatausaha/2018/07/22-format-ukuran-02-page.png
[22-ukuran-02-ss]:      {% postimage %}/tatausaha/2018/07/22-format-ukuran-02-screenshot.png
