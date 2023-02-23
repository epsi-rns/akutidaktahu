---
layout    : post
title     : Lembar Kerja - Rumus Dasar
date      : 2018-08-15 09:17:35
slug      : lembar-kerja-formula-01
tags      : [calc]
keywords  : [spreadsheet]

toc       : "toc/lembarkerja.njk"
opengraphimage: "assets/posts/lembarkerja/2018/08/31ss-formula-angka.png"

excerpt   : Menetapkan rumus, angka, case, teks, tangal, terbilang, jumlah. acuan
---

<a name="prakata"></a>

## Prakata

> Menetapkan rumus, angka, case, teks, tangal, terbilang, jumlah. acuan

Sebetulnya ini sudah sangat banyak dibahas,
dan dapat dipelajari sendiri.
Namun saya ulang di sini,
barangkali saja ada yang belum paham.

### Daftar Isi

* [Prakata](#prakata): Daftar Isi

* [Angka](#angka)

* [Case](#case)

* [Teks](#teks)

* [Penutup](#penutup)

### Unduh Berkas

> Pake aja bro!

Lembar kerja spreadsheet tersedia,
supaya teman-teman bisa copy-paste.

* [Berkas Excel: 03-formula.xlsx][source-format-xlsx]

-- -- --

<a name="angka"></a>

## Angka

Kita mulai dari `sum`, `count`, `max`, `min` dan `average`.
Yang ini **wajib** tahu.

![Lembar Kerja: Rumus Dasar: Export: Angka][31ex-formula-angka]

{% highlight "excel-formula" %}
=SUM(C5:C14)
=COUNT(C5:C14)
{% endhighlight %}

Dan juga

{% highlight "xlsx" %}
=MAX(C5:C14)
=MIN(C5:C14)
=AVERAGE(C5:C14)
{% endhighlight %}

Akan lebih mudah untuk melihat hasilnya dengan alamat cell masing-masing.

![Lembar Kerja: Rumus Dasar: Screenshot: Angka][31ss-formula-angka]

-- -- --

<a name="case"></a>

## Case

Rumus `proper()` sering saya pakai.

![Lembar Kerja: Rumus Dasar: Export: Case][32ex-formula-case]

{% highlight "xlsx" %}
=UPPER(C5)
=LOWER(C6)
=PROPER(C7)
{% endhighlight %}

Kita rumusnya di dalam screenshot,
yang dilengkapi dengan alamat cell-nya.

![Lembar Kerja: Rumus Dasar: Screenshot: Case][32ss-formula-case]

-- -- --

<a name="teks"></a>

## Teks

Walaupun mungkin teman-teman jarang memakai,
cukup tahu saja kemampuan pengolahan teks di Excel ataupun Calc.

Misalnya urusan potong-memotong ini.

![Lembar Kerja: Rumus Dasar: Export: Text][33ex-formula-teks]

{% highlight "xlsx" %}
=LEFT(C5;4)
=RIGHT(C6;4)
=MID(C7;3;2)
{% endhighlight %}

![Lembar Kerja: Rumus Dasar: Formula: Text][33ss-formula-teks]

Dari dasar ini kita akan berlanjut ke hal-hal lain,
di mana kita akan lebih bebas berkreatifitas.

-- -- --

<a name="selanjutnya"></a>

## Apa Selanjutnya?

Lanjut baca yuk.
[[Lembar Kerja - Tips Rumus][local-whats-next]].

[//]: <> ( -- -- -- links below -- -- -- )

[local-whats-next]:     /lembarkerja/2018/08/17/lembar-kerja-formula-02.html

[source-format-xlsx]:   {% postimage %}/lembarkerja/2018/08/03-formula.xlsx

[31ex-formula-angka]:   {% postimage %}/lembarkerja/2018/08/31ex-formula-angka.png
[31ss-formula-angka]:   {% postimage %}/lembarkerja/2018/08/31ss-formula-angka.png

[32ex-formula-case]:    {% postimage %}/lembarkerja/2018/08/32ex-formula-case.png
[32ss-formula-case]:    {% postimage %}/lembarkerja/2018/08/32ss-formula-case.png

[33ex-formula-teks]:    {% postimage %}/lembarkerja/2018/08/33ex-formula-teks.png
[33ss-formula-teks]:    {% postimage %}/lembarkerja/2018/08/33ss-formula-teks.png
