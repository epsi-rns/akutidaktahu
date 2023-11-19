---
layout    : post
title     : Lembar Kerja - Contoh Kasus
date      : 2018-08-23 09:17:35
slug      : lembar-kerja-formula-05
tags      : [calc]
keywords  : [spreadsheet]

toc       : "toc/lembarkerja.njk"
opengraphimage: "assets/posts/lembarkerja/2018/08/39ex-belanja-xlookup.png"

excerpt   : Menetapkan rumus, angka, case, teks, tangal, terbilang, jumlah, acuan.
---

<a name="prakata"></a>

## Prakata

> Menetapkan rumus: angka, case, teks, tangal, terbilang, jumlah, dan acuan.

Penggunaan dalam keseharian lebih menantang dari sekedar rumus dasar.
Supaya mudah memahami, kita praktek lagi yuuks.

Salah satu hal yang terkadang kita hadapi adalah mencari nilai awal dan nilai akhir.
Lalu mencari selisih antara nilai awal dan nilai akhir itu.

### Daftar Isi

* [Prakata](#prakata): Daftar Isi

* [Awal dan Akhir](#marker)

* [vlookup](#vlookup)

* [match](#match)

* [selisih](#selisih)

* [Penutup](#penutup)

### Unduh Berkas

> Gratis nih bro!

Lembar kerja spreadsheet tersedia,
supaya teman-teman bisa copy-paste.

* [Berkas Excel: 03-formula.xlsx][source-format-xlsx]

-- -- --

<a name="marker"></a>

## Awal dan Akhir

Yang pertama dapat kita lakukan adalah mempersiapkan penanda.
* `Awal`
* `Akhir`
* `'-` (tidak ada penanda)

{% highlight "xlsx" %}
Akhir
{% endhighlight %}

![Lembar Kerja: Contoh Kasus: Marker][41ss-marker]

Untuk membedakan awal dan akhir kita dapat menggunakan `COUNTIF`.
Terlihat di screenshot, tiap pasangan `Awal` sd `Akhir` menjadi satu kesatuan.

{% highlight "xlsx" %}
=COUNTIF(B$3:B7;"Awal") 
{% endhighlight %}

![Lembar Kerja: Contoh Kasus: CountIf][42ss-countif]

Lalu `row()` berikut ini adalah penanda lokasi barisnya.

{% highlight "xlsx" %}
=ROW()
{% endhighlight %}

![Lembar Kerja: Contoh Kasus: Row][43ss-row]

Yang perlu kita berhati-hati dalam penggunaan `row()` ini,
kalau barisnya kita geser ke bawah maka nilainya juga garus dikurangi.

-- -- --

<a name="vlookup"></a>

## Vlookup

Cara paling mudah adalah dengan menggunakan `vlookup()`

{% highlight "xlsx" %}
=VLOOKUP(C7;C$3:D7;2;0)
{% endhighlight %}

![Lembar Kerja: Contoh Kasus: VLookup][44ss-vlookup]

Dari hasilnya dapat kita lanjutkan,
hanya ditampilkan kalau kolom penandanya adalah `Akhir`.

{% highlight "xlsx" %}
=IF(B7="Akhir";ROW()-E7+1;"")
{% endhighlight %}

![Lembar Kerja: Contoh Kasus: VLookup Result][45ss-result]

Kendalanya, `vlookup()` ini tidak dapat dibikin *oneliner*,
yaitu menjadi _satu baris perintah saja dalam satu cell_.
Sehingga akan merepotkan kalau lembar kerja-nya sudah rumit,
karena jadi menambah banyak kolom yang tidak diperlukan.

-- -- --

<a name="match"></a>

## Match

Cara lain yang adalah dengan menggunakan `match()`.

{% highlight "xlsx" %}
=MATCH(C7;C$3:C7;0)
{% endhighlight %}

![Lembar Kerja: Contoh Kasus: Match][46ss-match]

Perhatikan, rumusnya berbeda dengan sebelumnya.

{% highlight "xlsx" %}
=IF(B7="Akhir";ROW()-1-D7;"")
{% endhighlight %}

![Lembar Kerja: Contoh Kasus: Match Result][47ss-result]

Hasilnya dapat dibandingkan, sama dengan `vlookup()` yang sebelumnya.

{% highlight "xlsx" %}
=IF(B7="Akhir";ROW()-1-MATCH(C7;C$3:C7;0);"")
{% endhighlight %}

![Lembar Kerja: Contoh Kasus: Oneliner][48ss-oneliner]

Dengan `match()` dapat dijadikan *oneliner*.

-- -- --

<a name="selisih"></a>

## Selisih

Yuccs, kita lanjutkan dengan contoh yang lebih nyata.
Misalnya ada penjualan rutin, yang kita ingin jumlahkan dengan
mencari selisih nilai akhir dan nilai sebelum awal.

Kita bikin saja masukan angka secara acak.

{% highlight "xlsx" %}
3500
{% endhighlight %}

Lalu siapkan nilai kumulatifnya untuk menjumlah.
Karena ada kumultaif, maka baris pertama setelah header kita kosongkan.

{% highlight "xlsx" %}
=D7+C8
{% endhighlight %}

![Lembar Kerja: Contoh Kasus: Cumulative][51ss-cumulative]

Lalu kita ikuti langkah sebelumnya,
yaitu dimulai dengan `countif()`.

{% highlight "xlsx" %}
=COUNTIF(B$4:B8;"Awal")
{% endhighlight %}

Lalu diikuti dengan *oneliner* formula menggunakan `index()`.

{% highlight "xlsx" %}
=IF(B8="Akhir";D8-INDEX(D$3:D8;F8);"")
{% endhighlight %}

![Lembar Kerja: Contoh Kasus: Diff Result][52ss-result]

Contoh hasil selengkapnya terlihat di sini.
Contoh ini Dapat diterapkan ke berbagai hal lain.
Dalam dunia nyata mungkin contoh datanya bukan hanya 50 baris,
namun ribuan baris, dengan jumlah kolom yang jauh lebih banyak.

![Lembar Kerja: Contoh Kasus: Diff Result: Zoom Out][53ss-result]

Yang perlu diingat, banyak sekali contoh kasus yang aneh-aneh,
yang sama sekali berbeda dengan contoh di atas,
yang tidak kutulis di sini.
Karena itu perlu memperbanyak jam terbang,
dengan berinisiatif memecahkan berbagai permasalahan di kantor/kampus masing-masing.
Semakin lama bekerja semakin banyak contoh kasus yang mesti kita hadapi.
SEmakin kreatif pula hasil akhirnya.

Sudah itu saja yaaaaa...

-- -- --

<a name="selanjutnya"></a>

## Apa Selanjutnya?

Sebelum melaju ke yang lebih lanjut.
Mari menggabungkan ilmu-ilmu yang kemarin lalu,

Praktek di dunia nyata yuuks.

[[Lembar Kerja - Rancang Kolom][local-whats-next]].

[//]: <> ( -- -- -- links below -- -- -- )

[local-whats-next]:     /lembarkerja/2018/09/03/lembar-kerja-tabel-01.html

[source-format-xlsx]:   {% postimage %}/lembarkerja/2018/08/03-formula.xlsx

[38ss-formula-acuan]:   {% postimage %}/lembarkerja/2018/08/38ss-formula-acuan.png

[41ss-marker]:          {% postimage %}/lembarkerja/2018/08/41ss-marker.png
[42ss-countif]:         {% postimage %}/lembarkerja/2018/08/42ss-countif.png
[43ss-row]:             {% postimage %}/lembarkerja/2018/08/43ss-row.png
[44ss-vlookup]:         {% postimage %}/lembarkerja/2018/08/44ss-vlookup.png
[45ss-result]:          {% postimage %}/lembarkerja/2018/08/45ss-result.png
[46ss-match]:           {% postimage %}/lembarkerja/2018/08/46ss-match.png
[47ss-result]:          {% postimage %}/lembarkerja/2018/08/47ss-result.png
[48ss-oneliner]:        {% postimage %}/lembarkerja/2018/08/48ss-oneliner.png
[51ss-cumulative]:      {% postimage %}/lembarkerja/2018/08/51ss-cumulative.png
[52ss-result]:          {% postimage %}/lembarkerja/2018/08/52ss-result.png
[53ss-result]:          {% postimage %}/lembarkerja/2018/08/53ss-result.png