---
layout    : post
title     : Lembar Kerja - Rupiah
date      : 2018-06-05 09:17:35
slug      : lembar-kerja-number-02
tags      : [calc]
keywords  : [spreadsheet]

toc       : "toc/lembarkerja.njk"
opengraphimage: "assets/posts/tatausaha/2018/06/02ex-number-rupiah.png"

excerpt   : Menata tampilan angka, tanggal, dan mata uang.
---

<a name="prakata"></a>

## Prakata

> Menata tampilan angka, tanggal, dan mata uang.

Lanjut mata uang ya.. _rupiah_.
Eh, gak panjang koq...
Soalnya panjang tuh nyebelin,
bagi yang gak sabaran.

### Daftar Isi

* [Prakata](#prakata): Daftar Isi

* [Rupiah](#rupiah)

* [Penutup](#penutup)

### Unduh Berkas

> Pake aja bro!

Lembar kerja spreadsheet tersedia,
supaya teman-teman bisa copy-paste.

* [Berkas Excel: 01-number.xlsx][source-number-xlsx]

-- -- --

<a name="rupiah"></a>

## Rupiah

> Mata Uang

### Komponen Penataan

Singkatnya sih, format rupiah itu kek begini blo:

{% highlight "latex" %}
" Rp"* #.##0,00 ;"-Rp"* #.##0,00 ;" Rp"* -# ;@
{% endhighlight %}

_Waduuuuu.. koq rumit amat yak?_

Sebetulnya gak rumit sih.
ini dibagi jadi empat bagian:
* Tata Angka Positif: `" Rp"* #.##0,00 ;`
* Tata Angka Negatif: `"-Rp"* #.##0,00 `
* Tata Angka Nol: `" Rp"* -# `
* Tata Penulisan Teks: `@`

_hmmm... masih rumit kaaaaak 😭_
(pakai emoticon nangis).
Seakan dunia mau runtuh.

_Ya udah_ (sambil ngedumel).
_kita praktek aja yucc_.
Dari yang mudah.

### Contoh Dasar

Kita ambil saja angka acak misalnya `8005002`.
Yang paling mudah kita beri tanda koma.

Untuk menjelaskan, 
saya memakai rata kanan di kolom hasil ya kak.

{% highlight "latex" %}
+--------------+------------+------------------+
| Format       | Value      | Result           |
+--------------+------------+------------------+
| 0,00         |  8005002   |       8005002,00 |
| 0,00         | -8005002   |      -8005002,00 |
+--------------+------------+------------------+
{% endhighlight %}

Sebetulnya beda tanda koma dan tanda titik ini tergantung locale-nya. Sekarang bagaimana hasilnya kalau memakai tanda titik. Namun dengan masukan angka yang sama.

{% highlight "latex" %}
+--------------+------------+------------------+
| Format       | Value      | Result           |
+--------------+------------+------------------+
| 0.000        |  8005002   |        8.005.002 |
| 0.000        | -8005002   |       -8.005.002 |
+--------------+------------+------------------+
{% endhighlight %}

Kelau sudah paham, sekarang kita gabungkan keduanya,
pakai koma, sekaligus pakai titik.

{% highlight "latex" %}
+--------------+------------+------------------+
| Format       | Value      | Result           |
+--------------+------------+------------------+
| #.##0,00     |  8005002   |     8.005.002,00 |
| #.##0,00     | -8005002   |    -8.005.002,00 |
+--------------+------------+------------------+
{% endhighlight %}

Sekarang, bagaimana caranya supaya rapi?
Tanda minus ini bisa kita taruh di rata kiri dengan `* `.
Saya beri satu contoh dengan garis bawah _underscore_ juga,
supaya paham cara kerja `* `.

{% highlight "latex" %}
+--------------+------------+------------------+
| Format       | Value      | Result           |
+--------------+------------+------------------+
| * #.##0,00   |  8005002   |     8.005.002,00 |
| * #.##0,00   | -8005002   | -   8.005.002,00 |
| *_#.##0,00   | -8005002   | -___8.005.002,00 |
+--------------+------------+------------------+
{% endhighlight %}

Ringkasannya saya tampilkan di sini:

![Lembar Kerja: Number: Dasar][12ss-number-rupiah-d]

### Menuliskan Rupiah

Sekarang kita terapkan rata kiri tadi untuk menuliskan rupiah.

{% highlight "latex" %}
+----------------+------------+---------------------+
| Format         | Value      | Result              |
+----------------+------------+---------------------+
| Rp. * #.##0,00 |  8005002   | Rp.    8.005.002,00 |
| Rp. * #.##0,00 | -8005002   | -Rp.   8.005.002,00 |
+----------------+------------+---------------------+
{% endhighlight %}

Masih kurang rapi sih, tapi lumayan khan.
Kalau tidak mau repot,
pisahkan penulisan rupiah ini di kolom lain.

{% highlight "latex" %}
+--------------+------------+-------+-----------------+
| Format       | Value      | Kolom | Result          |
+--------------+------------+-------+-----------------+
| #.##0,00     |  8005002   |  Rp.  |    8.005.002,00 |
| #.##0,00     | -8005002   |  Rp.  |   -8.005.002,00 |
+--------------+------------+-------+-----------------+
{% endhighlight %}

Saya sering memakai cara ini.

### Positif dan Negatif

Kita dapat secara kreatif membedakan antara nilai positif dan negatif. Untuk ini kita perlu format yang agak berbeda sebagaimana contoh berikut:

{% highlight "latex" %}
[BLUE]* #.##0,00 ;[RED]* \(#.##0,00\)
{% endhighlight %}

Saya beri spasi sebelum titik koma di bagian positif,
supaya lurus rapi dengan tanda kurung di bagian negatif.

Hayuuks kita lihat hasilnya dalam tabel berikut:

{% highlight "latex" %}
+------------------+---------------------+----------+-----------------+
| Positive         | Negative            | Value    | Result          |
+------------------+---------------------+----------+-----------------+
| [BLUE]* #.##0,00 | [RED]* \(#.##0,00\) |  8005002 |   8.005.002,00  |
| [BLUE]* #.##0,00 | [RED]* \(#.##0,00\) | -8005002 | -(8.005.002,00) |
| [BLUE]* #.##0,00 | [RED]* \(#.##0,00\) |        0 |           0,00  |
+------------------+---------------------+----------+-----------------+
{% endhighlight %}

Berhubung warnanya tidak kelihatan di sini, saya berikan screenshot saja ya.

![Lembar Kerja: Number: Warna][12ss-number-rupiah-w]

Dari sini terlihat jelas kita masih punya hal untuk diulik,
yaitu ketika nilai angkanya nol.

### Nol dan Teks

Bagaimana cara menangani nol?

Langsung kita lihat contohnya di tabel saja ya.

{% highlight "latex" %}
+--------------+-----------------+--------+------+----------+-------------------+
| Positive     | Negative        | Nol    | Teks | Value    | Result            |
+--------------+-----------------+--------+------+------------------------------+
| * #.##0,00 ; | * \(#.##0,00\); | * -# ; | @    |  8005002 |     8.005.002,00  |
| * #.##0,00 ; | * \(#.##0,00\); | * -# ; | @    | -8005002 |   -(8.005.002,00) |
| * #.##0,00 ; | * \(#.##0,00\); | * -# ; | @    |        0 |                -  |
+--------------+-----------------+--------+------+----------+-------------------+
{% endhighlight %}

Bagaimana kalau masukkanya bukan angka?
Misalnya saya masukkan teks `apa`.
Ya kita coba saja dhek, ganti teksnya.

{% highlight "latex" %}
+----------------+----------+-------------------+
| Teks           | Value    | Result            |
+----------------+------------------------------+
| ;[RED]Nilai @? | apa      | Nilai apa?     -  |
+----------------+----------+-------------------+
{% endhighlight %}

Supaya lebih yakin, mari kita tengok tangkapan layar skrinsutnya:

![Lembar Kerja: Number: Rupiah Teks][12ss-number-rupiah-a]

### Menggabungkan semuanya

Ilmu kita sudah lengkap, namun belum sempurna sebelum dapat kita terapkan untuk kebutuhan sehari-hari.

{% highlight "latex" %}
+--------------+-------------------+
| Kolom        | Format            |
+--------------+-------------------+
| Positive     | " Rp"* #.##0,00 ; |
| Negative     | "-Rp"* #.##0,00 ; |
| Nol          | " Rp"* -# ;       |
| Teks         | @                 |
+--------------+-------------------+
{% endhighlight %}

Cont di atas yang memakai spasi adalah opsional.
Tidak memakai spasi juga tidak apa-apa.

Sekarang mari kita lihat hasilnya:

{% highlight "latex" %}
+----------+---------------------+
| Value    | Result              |
+--------------------------------+
|  8005002 |  Rp   8.005.002,00  |
| -8005002 | -Rp   8.005.002,00  |
|        0 |  Rp              -  |
+----------+---------------------+
{% endhighlight %}

Hasil akhirnya begini:

![Lembar Kerja: Number: Lengkap][12ss-number-rupiah-l]

Kalau diperhatikan, masih kurang rata ya tampilannya.
Ini dapat diatasi dengan menggunakan fixed font,
misalnya favorit saya adalah `inconsolota`.

### Ringkasan

Sebagai penghujung pertemuan hari ini,
saya tampilkan ringkasannya.

![Lembar Kerja: Number: Rupiah][12ss-number-rupiah]

-- -- --

<a name="selanjutnya"></a>

## Apa Selanjutnya?

Pelajaran mewarnai tentunya akan lebih menarik.
Bukan hanya mewarnai, namun border, group, indent, dan tips lain.

[[Lembar Kerja - Ukuran Unit][local-whats-next]].

[//]: <> ( -- -- -- links below -- -- -- )

[local-whats-next]:     /tatausaha/2018/07/07/lembar-kerja-format-01.html

[12ex-number-rupiah]:   {% postimage %}/tatausaha/2018/06/12ex-number-rupiah.png
[12ss-number-rupiah-a]: {% postimage %}/tatausaha/2018/06/12ss-number-rupiah-apa.png
[12ss-number-rupiah-d]: {% postimage %}/tatausaha/2018/06/12ss-number-rupiah-dasar.png
[12ss-number-rupiah-w]: {% postimage %}/tatausaha/2018/06/12ss-number-rupiah-warna.png
[12ss-number-rupiah-l]: {% postimage %}/tatausaha/2018/06/12ss-number-rupiah-lengkap.png
[12ss-number-rupiah]:   {% postimage %}/tatausaha/2018/06/12ss-number-rupiah.png

[source-number-xlsx]:   {% postimage %}/tatausaha/2018/06/01-number.xlsx