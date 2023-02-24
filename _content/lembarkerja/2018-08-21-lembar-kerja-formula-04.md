---
layout    : post
title     : Lembar Kerja - Rumus Acuan
date      : 2018-08-21 09:17:35
slug      : lembar-kerja-formula-04
tags      : [calc]
keywords  : [spreadsheet]

toc       : "toc/lembarkerja.njk"
opengraphimage: "assets/posts/lembarkerja/2018/08/31ss-formula-angka.png"

excerpt   : Menetapkan rumus, angka, case, teks, tangal, terbilang, jumlah. acuan
---

<a name="prakata"></a>

## Prakata

> Menetapkan rumus, angka, case, teks, tangal, terbilang, jumlah. acuan

Dalam pemakaian lembar kerja sehari-hari,
kita sering harus mengacu pada cell tertentu,
yang tergantung pada nilai perncarian tertentu,
atau posisi peletakan cell.

Supaya mudah memahami, kita praktek saja yuuks.

### Daftar Isi

* [Prakata](#prakata): Daftar Isi

* [Acuan](#acuan)

* [Rujukan](#rujukan)

* [Penutup](#penutup)

### Unduh Berkas

> Gratis nih bro!

Lembar kerja spreadsheet tersedia,
supaya teman-teman bisa copy-paste.

* [Berkas Excel: 03-formula.xlsx][source-format-xlsx]

-- -- --

<a name="acuan"></a>

## Acuan

### Lookup Table

Misalnya contoh lookup table di bawah ini,
kita dapat mendapatkan hasil yang sama dengan dua cara yaitu:
`vlookup` dan `switch`.

![Lembar Kerja: Rumus Acuan: Export Acuan][38ex-formula-acuan]

### Tabel Acuan

Kita lihat satu-satu, mulai dari source datanya,
yaitu tabel acuannya (_lookup table_):

![Lembar Kerja: Rumus Acuan: Lookup Table Source][38ss-acuan-source]

#### VLOOKUP

Kemudian kita lihat cara menyelesaikan PTKP Bambang dengan `VLOOKUP`.

{% highlight "xlsx" %}
=VLOOKUP(C15;$C$5:$E$9;3)
{% endhighlight %}

Lalu kita lacak asal angkanya dengan melihat kotaknya.

![Lembar Kerja: Rumus Acuan: dengan VLOOKUP][38ss-acuan-vlookup]

### SWITCH

Lalu kita selesaikan PTKP Bambang dengan cara lain,
misalnya dengan `SWITCH`.

{% highlight "xlsx" %}
=SWITCH(C23;"TK";$E$5;"K/0";$E$6;"K/1";$E$7;"K/2";$E$8;"K/3";$E$9)
{% endhighlight %}

Yang ini memang agak panjang.,
karena referensi PTKP saya taruh di rumus formula.

![Lembar Kerja: Rumus Acuan: dengan SWITCH][38ss-acuan-switch]

### Ringkasan

Saya ambilkan juga screenshot,
supaya kelihatan alamat cell-nya,
dan kemudian rumus formulanya,
di samping hasilnya.

![Lembar Kerja: Rumus Acuan: Ringkasan Acuan][38ss-formula-acuan]

Sepertinya `VLOOKUP` lebih menarik dari `SWITCH`,
namun sebetulnya dari keseharian saya tidak memakai keduanya.

Lalu memakai apa?
Kita lihat contoh yang selanjutnya yuccs.

-- -- --

<a name="rujukan"></a>

## Rujukan

Sebetulnya ini acuan juga,
saya pilih judul yang lain,
supaya keren. Hehehe.

![Lembar Kerja: Rumus Acuan: Export Rujukan][39ex-formula-rujukan]

![Lembar Kerja: Rumus Acuan: Screenshot Lengkap][39ss-formula-lengkap]

![Lembar Kerja: Rumus Acuan: Screenshot Potong][39ss-formula-potong]

-- -- --

<a name="selanjutnya"></a>

## Apa Selanjutnya?


[//]: <> ( -- -- -- links below -- -- -- )

[source-format-xlsx]:   {% postimage %}/lembarkerja/2018/08/03-formula.xlsx

[38ex-formula-acuan]:   {% postimage %}/lembarkerja/2018/08/38ex-formula-acuan.png
[38ss-formula-acuan]:   {% postimage %}/lembarkerja/2018/08/38ss-formula-acuan.png

[38ss-acuan-source]:    {% postimage %}/lembarkerja/2018/08/38ss-acuan-source.png
[38ss-acuan-switch]:    {% postimage %}/lembarkerja/2018/08/38ss-acuan-switch.png
[38ss-acuan-vlookup]:   {% postimage %}/lembarkerja/2018/08/38ss-acuan-vlookup.png

[39ex-formula-rujukan]: {% postimage %}/lembarkerja/2018/08/39ex-formula-rujukan.png
[39ss-formula-lengkap]: {% postimage %}/lembarkerja/2018/08/39ss-formula-rujukan-lengkap.png
[39ss-formula-potong]:  {% postimage %}/lembarkerja/2018/08/39ss-formula-rujukan-potong.png
