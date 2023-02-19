---
layout    : post
title     : Lembar Kerja - Tata Angka
date      : 2018-06-03 09:17:35
slug      : lembar-kerja-number-01
tags      : [calc]
keywords  : [spreadsheet]

toc       : "toc/lembarkerja.njk"
opengraphimage: "assets/posts/tatausaha/2018/06/02ss-dialog-number.png"

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

* [Penutup](#penutup)

### Unduh Berkas

Lembar kerja spreadsheet tersedia,
supaya teman-teman bisa copy-paste.

* [Berkas Excel: 01-number.xlsx][source-number-xlsx]

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
+----------+---------+----------+
| Format   | Value   | Result   |
+----------+---------+----------+
| #.##0    | 1234    | 1.234    |
+----------+---------+----------+
{% endhighlight %}

Lanjut yuk yang masih mudah.
Bagaimana kita menuliskan `1` sebagai `01` atau `001`?
Terkadang kita perlu awalan nol supaya panjang teks seragam.

Cari saja `trailing null` di google.
Atau langsung saja pakai format berikut:

{% highlight "latex" %}
+----------+---------+----------+
| Format   | Value   | Result   |
+----------+---------+----------+
| 00       | 1       | 01       |
+----------+---------+----------+
{% endhighlight %}

Lanjut yukk, yang umum dipakai.
Kalau kita menulis butir2 pikiran,
selalu pakai angka yang diikuti titik khan?
Misalnya `1.` lalu `2.` sampai `100.`.
Nah menulisnya dengan memakai tanda pagar seperti ini:

{% highlight "latex" %}
+----------+---------+----------+
| Format   | Value   | Result   |
+----------+---------+----------+
| ##\.     | 1       | 1.       |
| ##\.     | 42      | 42.      |
+----------+---------+----------+
{% endhighlight %}

Berhubung tanda baca bisa saja punya arti khusus.
Maka kita harus menandainya dengan backslash,
yaitu tanda garis miring `\.` supaya dapat dipakai.

Sekarang bagaimana kalau memakai null trailing?
Misalnya supaya tampilannya menjadi `01.`.
Ya diubah saja tanda pagarnya dengan angka nol.

{% highlight "latex" %}
+----------+---------+----------+
| Format   | Value   | Result   |
+----------+---------+----------+
| 00\.     | 1       | 01.      |
+----------+---------+----------+
{% endhighlight %}

Ini sangat terpakai ketika,
saya memberikan referensi bulan di akuntansi.
atau angka revisi pajak mana yang saya pakai.
Misalnya bulan `02:`. Jadinya seperti ini:

{% highlight "latex" %}
+----------+---------+----------+
| Format   | Value   | Result   |
+----------+---------+----------+
| ##\:     | 42      | 42:      |
| 00\:     | 2       | 02:      |
| \:00\:   | 2       | :02:     |
+----------+---------+----------+
{% endhighlight %}

Ringkasannya dapat saya tampilkan seperti ini:

![Lembar Kerja: Number: Tata Angka][02ss-number-angka]

-- -- --

<a name="persen"></a>

## Persen

Seperseratus ini juga sering saya pakai,
saat membuat ringkasan invoice.
Misalnya terkait PPn,
standar baku untuk menulis `10%` adalah:

{% highlight "latex" %}
+----------+---------+----------+
| Format   | Value   | Result   |
+----------+---------+----------+
| 0%       | 10%     | 10%      |
+----------+---------+----------+
{% endhighlight %}

Lalu bagaimana kalau nilainya pakai koma?
Ubah saja tata penulisannya:

{% highlight "latex" %}
+----------+---------+----------+
| Format   | Value   | Result   |
+----------+---------+----------+
| 0,00%    | 0,5%    | 0,50%    |
+----------+---------+----------+
{% endhighlight %}

Misalnya di PP 23, ada nilai `0,5%`.
Berarti kita tidak perlu menampilkan
sisa nol di belakang dunk?
Ya ubah saja lagi.

{% highlight "latex" %}
+----------+---------+----------+
| Format   | Value   | Result   |
+----------+---------+----------+
| 0,##%    | 0,5%    | 0,5%     |
+----------+---------+----------+
{% endhighlight %}

-- -- --

<a name="tanggal"></a>

## Tanggal

Baiklah, sekarang berlanjut ke
tata penulisan yang lebih rumit, yaitu tanggal.

Tanggal ini seru juga loh.
Kita mulai dari yang sederhana ya.

{% highlight "latex" %}
+--------------+------------+------------------+
| Format       | Value      | Result           |
+--------------+------------+------------------+
| DD MMMM YYYY | 23/11/2022 | 23 November 2022 |
| DD-MMM-YY    | 23/11/2022 | 23-Nov-22        |
+--------------+------------+------------------+
{% endhighlight %}

Nah, lalu bagaimana kalau, tanggal yang dimasukkan salah,
tidak valid? Bagaimana hasilnya?

Untuk mengatasi hal ini,
maka tata namanya perlu dibuat kolom baru,
yaitu untuk masukan `text` yang bukan tanggal.
Masukan teks dalam tata penulisan menggunakan simbol `@`.

Antar kolom ini ditulis dipisahkan,
dengan tanda titik koma `DD-MMM-YY;@`.

_Hmmm... bingung?_

Kita lihat saja contoh berikut:

{% highlight "latex" %}
+-----------+-----------+--------+------------------+
| Format    | Text      | Value  | Result           |
+-----------+-----------+--------+------------------+
| DD-MMM-YY | :* @?     | Test   | :          Test? |
| DD-MMM-YY | \[@ *.?\] | Test   | :Test..........? |
+-----------+-----------+--------+------------------+
{% endhighlight %}

Semoga cukup menjelaskan.
Sekarang kita kembali ke urusan tata nama penulisan tanggal.

Bagaimana dengan locale?
Ini masalah ketika kita menerima dokumen dari pihak lain,
yang mungkin saja locale-nya berbeda dengan yang diatur,
di notebook kita.
Ini dapat diatur dengan per cell,
sebagaimana di dialog berikut:

![Lembar Kerja: Format Dialog: Language][02ss-dialog-number-lg]

Mari kita lihat contohnya dalam `language` berbeda.
Misalnya begini, saya menulis `23/11/2022`,
namun rekan saya menulis dengan cara berbeda,
yaitu seperti ini: `11/23/2022`.

{% highlight "latex" %}
+-----------+-----------+------------+-----------+-------------+
| Format    | Text      | Value      | Language  | Result      |
+-----------+-----------+------------+-----------+-------------+
| DD-MMM-YY | :* @?     | 23/11/2022 | Indonesia | 23-Nov-22   |
| DD-MMM-YY | :* @?     | 11/23/2022 | English   | 23-Nov-22   |
+-----------+-----------+------------+-----------+-------------+
{% endhighlight %}

Walaupun hasil akhirnya tampak sama,
namun cara mendapatkannya dapat saja sama sekali berbeda.

Terakhir, saya tampilkan format kesukaan saya.
Sederhana namun lengkap.
Kenapa? Karena saya sering menggunakan,
dalam berbagai berkas saya.

Dengan adanya hari, saya tahu kapan transaksi dibikin.
Adanya ingatan mengenai hari ini cukup penting bagi saya,
untuk mem-verifikasi, apakah masukan data saya,
sudah tepat atau belum.

{% highlight "latex" %}
+--------------------+------------+----------------+
| Format             | Value      |  Result        |
+--------------------+------------+----------------+
| DD MMM YYYY", "DDD | 23/11/2022 | 23-Nov-22, Rab |
+--------------------+------------+----------------+
{% endhighlight %}

Akhirnya, saya berikan tampilan gambar sebagai ringkasan bagian ini.

![Lembar Kerja: Number: Tanggal][02ss-number-tanggal]

-- -- --

<a name="pajak"></a>

## Pajak

> Kursus yukk.

Ini hal yang jarang diungkap, di tutorial pajak.
Mungkin berbeda kalau pernah kursus brevet.
Yang jelas, saya sering pakai ini untuk urusan kantor.

Pertama faktur ya.
Misalnya `004-21.31234567`.
Sementara berkas asli dari CVS pajaknya,
berisi angka:

{% highlight "latex" %}
+---------------------+-------------+-----------------+
| Format Faktur Pajak | Value       |  Result         |
+---------------------+-------------+-----------------+
| 000"-"00"."00000000 | 42131234567 | 004-21.31234567 |
+---------------------+-------------+-----------------+
{% endhighlight %}

Demikian pula tata cara penulisan `NPWP` dari `CSV` keluaran `ETaxInvoice`.

{% highlight "latex" %}
+--------------------------------+----------------+----------------------+
| Nomor Pokok Wajib Pajak        | Value          |  Result              |
+--------------------------------+----------------+----------------------+
| 00"."000"."000"."0"-"000"."000 | 81443518011000 | 08.144.351.8-011.000 |
+--------------------------------+----------------+----------------------+
{% endhighlight %}

Sepele, namun sering saya pakai.

![Lembar Kerja: Number: Pajak][02ss-number-pajak]

Segitu aja sih.

-- -- --

<a name="selanjutnya"></a>

## Apa Selanjutnya?

Urusan tata angka ini masih panjang,
kita bahas cara penulisan rupiah yuk.

[[Lembar Kerja - Penulisan Rupiah][local-whats-next]].

[//]: <> ( -- -- -- links below -- -- -- )

[local-whats-next]:     /tatausaha/2018/06/05/lembar-kerja-number-02.html

[02ss-dialog-number]:   {% postimage %}/tatausaha/2018/06/02ss-dialog-number.png
[02ss-dialog-number-lg]:{% postimage %}/tatausaha/2018/06/02ss-dialog-number-lang.png

[02ex-number-angka]:    {% postimage %}/tatausaha/2018/06/02ex-number-angka.png
[02ex-number-pajak]:    {% postimage %}/tatausaha/2018/06/02ex-number-pajak.png
[02ex-number-tanggal]:  {% postimage %}/tatausaha/2018/06/02ex-number-tanggal.png
[02ss-number-angka]:    {% postimage %}/tatausaha/2018/06/02ss-number-angka.png
[02ss-number-pajak]:    {% postimage %}/tatausaha/2018/06/02ss-number-pajak.png
[02ss-number-tanggal]:  {% postimage %}/tatausaha/2018/06/02ss-number-tanggal.png

[source-number-xlsx]:   {% postimage %}/tatausaha/2018/06/01-number.xlsx