---
layout    : post
title     : Lembar Kerja - Tata Angka
date      : 2018-06-03 09:17:35
slug      : lembar-kerja-pengantar
tags      : [calc]
keywords  : [spreadsheet]

toc       : "toc/lembarkerja.njk"
opengraphimage: "assets/posts/tatausaha/2018/06/02ex-number-rupiah.png"

excerpt   : Menata tampilan angka, tanggal, dan mata uang.
---

<a name="prakata"></a>

## Prakata

> Menata tampilan angka, tanggal, dan mata uang.

Hari ini kita membahas _numbering format_.
Sebetulnya ini bukan hanya tata penampilan angka saja,
namun juga termasuk tanggal, mata uang seperti rupiah,
dan bahkan _custom format_ seperti: NPWP dan Faktur Pajak.

### Daftar Isi

* [Prakata](#prakata): Daftar Isi

* [Aturan Penataan](#aturan)

* [Tata Angka](#tataangka)

* [Persen](#persen)

* [Tanggal](#tanggal)

* [Pajak](#pajak)

* [Rupiah](#rupiah)

* [Penutup](#penutup)

-- -- --

<a name="aturan"></a>

## Aturan Penataan

### Aplikasi

Contoh yang saya pakai LibreOffice,
kalau ada yang berbeda misalnya tentang dialog box,
mohon cari sendiri padanannya di Microsoft Office.

### Referensi Excel

* [Referensi Excel][ref: excel]

[ref: excel]: https://support.microsoft.com/en-us/office/number-format-codes-5026bbd6-04bc-48cd-bf33-80f18b4eae68

#### Referensi Calc

* [Referensi Calc][ref: calc]

[ref: calc]: https://www.libreofficehelp.com/format-cells-libreoffice-calc/

### Dialog

Satu-satu-nya cara mengubah numbering format,
adalah dengan menggunakan format dialog.
Mulai akses-nya dari ini.

![Lembar Kerja: Format Dialog: Numbering][02ss-dialog-number]

Ini yang saya tahu loh.
Bisa saja ada cara lain.

#### Locale

> Antara Koma dan Titik
> Terpisah oleh Bayangan

Lupakan puisi di atas.
Harap perhatikan locale.

Di beberapa sistem,
bisa saja pemisah antara nominal dan pecahan,
menggunakan koma.
Sementara di sistem lain menggunakan titik.
Ini dapat diatur di locale.

-- -- --

<a name="tataangka"></a>

## Tata Angka

Saya beri contoh saja.
Misalnya angka `1234`,
bagaimana kita menuliskannya sebagai `1.234`?

Jawabannya mudah saja,
yaitu menggunakan format berikut:

{% highlight "latex" %}
#.##0
{% endhighlight %}

Lanjut yuk yang masih mudah.
Bagaimana kita menuliskan `1` sebagai `01` atau `001`?
Terkadang kita perlu awalan nol supaya panjang teks seragam.

Cari saja `trailing null` di google.
Atau langsung saja pakai format berikut:

{% highlight "latex" %}
00
{% endhighlight %}

Lanjut yukk, yang umum dipakai.
Kalau kita menulis butir2 pikiran,
selalu pakai angka yang diikuti titik khan?
Misalnya `1.` lalu `2.` sampai `100.`.
Nah menulisnya dengan memakai tanda pagar seperti ini:

{% highlight "latex" %}
##\.
{% endhighlight %}

Berhubung tanda baca bisa saja punya arti khusus.
Maka kita harus menandainya dengan backslash,
yaitu tanda garis miring `\.` supaya dapat dipakai.

Sekarang bagaimana kalau memakai null trailing?
Misalnya supaya tampilannya menjadi `01.`.
Ya diubah saja tanda pagarnya dengan angka nol.

{% highlight "latex" %}
00\.
{% endhighlight %}

Ini sangat terpakai ketika,
saya memberikan referensi bulan di akuntansi.
atau angka revisi pajak mana yang saya pakai.
Misalnya bulan `02:`. Jadinya seperti ini:

{% highlight "latex" %}
00\:
{% endhighlight %}

Ringkasannya  dapat saya tampilkan seperti ini:

![Lembar Kerja: Number: Tata Angka][02ss-number-angka]

-- -- --

<a name="persen"></a>

## Persen

Seperseratus ini juga sering saya pakai,
saat membuat ringkasan invoice.
Misalnya terkait PPn,
standar baku untuk menulis `10%` adalah:

{% highlight "latex" %}
0%
{% endhighlight %}

Lalu bagaimana kalau nilainya pakai koma?
Ubah saja tata penulisannya:

{% highlight "latex" %}
0,00%
{% endhighlight %}

Misalnya di PP 23, ada nilai 0,5%.
Berarti kita tidak perlu menampilkan
sisa nol di belakang dunk?
Ya ubah saja lagi.

{% highlight "latex" %}
0,##%
{% endhighlight %}

-- -- --

<a name="tanggal"></a>

## Tanggal

Baiklah, sekarang bagaimana yang lebih rumit.

![Lembar Kerja: Number: Tanggal][02ss-number-tanggal]

-- -- --

<a name="pajak"></a>

## Pajak

![Lembar Kerja: Number: Pajak][02ss-number-pajak]

-- -- --

<a name="rupiah"></a>

## Rupiah

> Mata Uang

![Lembar Kerja: Number: Rupiah Teks][02ss-number-rupiah-a]


Selengkapnya:

![Lembar Kerja: Number: Rupiah][02ss-number-rupiah]

-- -- --

<a name="selanjutnya"></a>

## Apa Selanjutnya?

[[Inkscape - Mengenal Inkscape][local-whats-next]].

[//]: <> ( -- -- -- links below -- -- -- )

[local-whats-next]:     /tatausaha/2022/05/09/mengenal-inkscape.html

[02ss-dialog-number]:   {% postimage %}/tatausaha/2018/06/02ss-dialog-number.png

[02ex-number-angka]:    {% postimage %}/tatausaha/2018/06/02ex-number-angka.png
[02ex-number-pajak]:    {% postimage %}/tatausaha/2018/06/02ex-number-pajak.png
[02ex-number-rupiah]:   {% postimage %}/tatausaha/2018/06/02ex-number-rupiah.png
[02ex-number-tanggal]:  {% postimage %}/tatausaha/2018/06/02ex-number-tanggal.png
[02ss-number-angka]:    {% postimage %}/tatausaha/2018/06/02ss-number-angka.png
[02ss-number-pajak]:    {% postimage %}/tatausaha/2018/06/02ss-number-pajak.png
[02ss-number-rupiah-a]: {% postimage %}/tatausaha/2018/06/02ex-number-rupiah-apa.png
[02ss-number-rupiah]:   {% postimage %}/tatausaha/2018/06/02ss-number-rupiah.png
[02ss-number-tanggal]:  {% postimage %}/tatausaha/2018/06/02ss-number-tanggal.png