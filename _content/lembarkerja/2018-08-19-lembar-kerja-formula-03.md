---
layout    : post
title     : Lembar Kerja - Rumus Jumlah
date      : 2018-08-19 09:17:35
slug      : lembar-kerja-formula-03
tags      : [calc]
keywords  : [spreadsheet]

toc       : "toc/lembarkerja.njk"
opengraphimage: "assets/posts/lembarkerja/2018/08/31ss-formula-angka.png"

excerpt   : Menetapkan rumus, angka, case, teks, tangal, terbilang, jumlah. acuan
---

<a name="prakata"></a>

## Prakata

> Menetapkan rumus, angka, case, teks, tangal, terbilang, jumlah. acuan

Rumus `SUM` dan keluarganya adalah,
formula yang saya pakai juga di keseharian,
misalnya di perhitungan penyusutan.
Dari satu contoh data yang sama,
Kita bisa mendapatkan penjumlahan tertentu
dengan cara yang berbeda.
Seperti di gambar berikut:

![Lembar Kerja: Rumus Penjumlahan: Export][36ex-formula-jumlah]

### Daftar Isi

* [Prakata](#prakata): Daftar Isi

* [Penjumlahan SUM](#sum)

* [Penjumlahan SUMIF](#sumif)

* [Penjumlahan SUMPRODUCT](#sumproduct)

* [Penjumlahan SUMIFS](#sumifs)

* [Penjumlahan Berdasaran Kriteria](#kriteria)

* [Ringkasan Penjumlahan](#ringkasan)

* [Penutup](#penutup)

### Unduh Berkas

> Gratis nih bro!

Lembar kerja spreadsheet tersedia,
supaya teman-teman bisa copy-paste.

* [Berkas Excel: 03-formula.xlsx][source-format-xlsx]

-- -- --

<a name="SUM"></a>

## Penjumlahan SUM

Kita dapat memulai dari rumus `SUM` yang sederhana,
misalnya hasil penjumlahan berikut:

![Lembar Kerja: Rumus Jumlah: Export: Hasil SUM][36ex-sum]

Kita dapat melacak dari mana datangnya angka tersebut,
dengan melihat kotak di atasnya, dan formula rumus di bawahnya:

{% highlight "xlsx" %}
=SUM(H5:H16)
{% endhighlight %}

![Lembar Kerja: Rumus Jumlah: Screenshot: SUM][36ss-sum]

Yang ini semestinya cukup jelas.

-- -- --

<a name="SUM"></a>

## Penjumlahan SUMIF

Sekarang, misalnya kita mau menjumlahkan untuk nilai tertentu saja,
misalnya pembelian pepaya, atau pembelian oleh Fulan,
atau pembelian di hari Rabu.

![Lembar Kerja: Rumus Jumlah: Export: Hasil SUMIF][36ex-sumif]

Maka kita dapat menggunakan rumus `SUMIF`:

{% highlight "xlsx" %}
=SUMIF(C5:C16;"Pepaya";H5:H16)
=SUMIF(D5:D16;"Fulan";H5:H16)
=SUMIF(E5:E16;"Rabu";H5:H16)
{% endhighlight %}

Kita ambil satu contoh saja,
supaya kita paham dari mana datangnya angka tersebut:

![Lembar Kerja: Rumus Jumlah: Screenshot: SUMIF][36ss-sumif]

Sayangnya `SUMIF` ini masih membutuhkan kolom `jumlah`,
sebagai kolom bantuan.
Dalam perhitungan panjang,
seringkali kita harus menghindari kolom bantuan,
yaitu semacam  kolom jumlah tadi.

-- -- --

<a name="SUMPRODUCT"></a>

## Penjumlahan SUMPRODUCT

Dengan rumus `SUMPRODUCT`,
maka kita dapat lebih hemat kolom.
Walaupun hasil akhirnya sama
untuk kasus yang kurang lebih sama.

Sebagaimana berikut,
misalnya pembelian pepaya, atau pembelian oleh Fulan,
atau pembelian di hari Rabu.

![Lembar Kerja: Rumus Jumlah: Export: Hasil SUMPRODUCT][36ex-sumproduct]

Mari kita tinjau asal usul rumusnya.
Kotaknya langsung ke harga dan pembelian.
Dan sam sekali mengabaikan kolom jumlah.

{% highlight "xlsx" %}
=SUMPRODUCT(F5:F16;IF(C5:C16="Pepaya";G5:G16;0))
=SUMPRODUCT(F5:F16;IF(D5:D16="Fulan";G5:G16;0))
=SUMPRODUCT(F5:F16;IF(E5:E16="Rabu";G5:G16;0))
{% endhighlight %}

![Lembar Kerja: Rumus Jumlah: Screenshot: SUMPRODUCT][36ss-sumproduct]

Lebih panjang di rumus,
namun lebih hemat di kolom.

-- -- --

<a name="SUMIFS"></a>

## Penjumlahan SUMIFS

Masih ada cara lain, yaitu dengan meletakkan beberapa IFS sekaligus.
Ini dapat kita gunakan untuk mencari kriteria.
Misalnya hasil berikut menggunakan rumus `SUMIFS`:

![Lembar Kerja: Rumus Jumlah: Export: Hasil SUMIFS][36ex-sumifs]

Mulai dari satu kriteria, dua kriteria, dan seterusnya:

{% highlight "xlsx" %}
=SUMIFS(H5:H16;C5:C16;"=Pepaya")
=SUMIFS(H5:H16;C5:C16;"=Pepaya";D5:D16;"=Fulan")
=SUMIFS(H5:H16;C5:C16;"=Pepaya";D5:D16;"=Fulan";E5:E16;"=Rabu")
{% endhighlight %}

Lalu seperti biasa kita lacak dari mana angka tersebut berasal,
misalnya untuk dua kriteria, yaitu Pepaya dan Fulan.

![Lembar Kerja: Rumus Jumlah: Screenshot: SUMIFS][36ss-sumifs]

-- -- --

<a name="kriteria"></a>

## Penjumlahan Berdasaran Kriteria

Sekarang kita lihat prakteknya untuk mencari nilai kriteria tertentu
dengan cara berbeda:

![Lembar Kerja: Rumus Jumlah: Export: Praktek Kriteria][36ex-crit]

Yang tiga pertama menggunakan `SUMPRODUCT` dipadukan dengan `IF`.
Kita bekerja dengan array.

{% highlight "xlsx" %}
=SUMPRODUCT(F5:F16;IF(C5:C16=C19;G5:G16;0))
=SUMPRODUCT(F5:F16;IF(D5:D16=D19;G5:G16;0))
=SUMPRODUCT(F5:F16;IF(E5:E16=E19;G5:G16;0))
{% endhighlight %}

Dan yang terakhir adalah dengan `SUMIFS`.

{% highlight "xlsx" %}
=SUMIFS(H5:H16;C5:C16;"="&C19;D5:D16;"="&D19;E5:E16;"="&E19)
{% endhighlight %}

Mari kita bandingkan keduanya:

![Lembar Kerja: Rumus Jumlah: Screenshot: Praktek Kriteria][36ss-crit]

`SUMIFS` ini tetap memakai kolom bantuan.
Sayangnya saya belum berhasil menemukan cara,
untuk menggabungkan `SUMPRODUCT` dan `IFS`,
sehingga didapatkan hasil dari beberapa kriteria sekaligus.

Tergantung kebutuhan teman-teman,
kalau dalam keseharian, saya memakai `SUMPRODUCT`,
dan juga `SUMIF`, namun tidak menggunakan gabungan keduanya.

-- -- --

<a name="ringkasan"></a>

## Ringkasan Penjumlahan

Sebagai penutup bagian ini maka saya berikan ringkasan.

Bagian atas adalah masukkannya,'
saya berikan alamat `cell`-nya.

![Lembar Kerja: Rumus Penjumlahan: Screenshot Atas][37ss-formula-atas]

Lalu bagian bawah adalah keluarannya,
saya berikan rumusnya untuk memudahkan kawan-kawan.

![Lembar Kerja: Rumus Penjumlahan: Screenshot Bawah][37ss-formula-bawah]

Tampilannya memang ramai dan berisik.
Semoga bermanfaat.

-- -- --

<a name="selanjutnya"></a>

## Apa Selanjutnya?

Ada yang lebih seru, yaitu `xlookup`, `switch`, `index` dan kawan-kawan.

Lanjut baca yuk.
[[Lembar Kerja - Rumus Acuan][local-whats-next]].

[//]: <> ( -- -- -- links below -- -- -- )

[local-whats-next]:     /lembarkerja/2018/08/21/lembar-kerja-formula-04.html

[source-format-xlsx]:   {% postimage %}/lembarkerja/2018/08/03-formula.xlsx


[36ex-formula-jumlah]:  {% postimage %}/lembarkerja/2018/08/36ex-formula-jumlah.png

[37ss-formula-atas]:    {% postimage %}/lembarkerja/2018/08/37ss-formula-jumlah-atas.png
[37ss-formula-bawah]:   {% postimage %}/lembarkerja/2018/08/37ss-formula-jumlah-bawah.png

[//]: <> ( -- -- -- links below -- -- -- )

[36ex-crit]:            {% postimage %}/lembarkerja/2018/08/36ex-crit.png
[36ex-sum]:             {% postimage %}/lembarkerja/2018/08/36ex-sum.png
[36ex-sumif]:           {% postimage %}/lembarkerja/2018/08/36ex-sumif.png
[36ex-sumifs]:          {% postimage %}/lembarkerja/2018/08/36ex-sumifs.png
[36ex-sumproduct]:      {% postimage %}/lembarkerja/2018/08/36ex-sumproduct.png
[36ss-crit]:            {% postimage %}/lembarkerja/2018/08/36ss-crit.png
[36ss-sum]:             {% postimage %}/lembarkerja/2018/08/36ss-sum.png
[36ss-sumif]:           {% postimage %}/lembarkerja/2018/08/36ss-sumif.png
[36ss-sumifs]:          {% postimage %}/lembarkerja/2018/08/36ss-sumifs.png
[36ss-sumproduct]:      {% postimage %}/lembarkerja/2018/08/36ss-sumproduct.png