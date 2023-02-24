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

Awalnya saya hanya ingin membahas `HLOOKUP`,' lalu bedanya dengan `INDEX`.
Namum kemudian berkembang ke hal yang lebih luas.
Karena dalam prakteknya saya memakai kombinasi yang lebih rumit,
maka saya harus memaksakan diri menjelaskan di sini.
Supayaketika menemukan lembar kerja yang nyata,
saya tidak perlu menjelaskan lagi semuanya dari awal.

Sebetulnya ini acuan juga, saya pilih judul yang lain, supaya keren.
Kalau acuan lebih ke lookup, rujukan ini lebih ke referensi.
Saya harap tidak membuat saya tampak lebih bodoh. Hehehe.

### Contoh Kasus

Misalnya contoh kasus berikut:
kita dapat mendapatkan hasil yang sama dengan tiga cara yaitu:
`hlookup`, `index`, dan `xlookup`.

![Lembar Kerja: Rumus Rujukan: Contoh Kasus][39ex-formula-rujukan]

Yang paling membedakan anatar solusi adalah kotaknya.
Dari situ kita dapat membedakan asal referensi formulanya.

### Sumber Rujukan

Saya biasa memakai pola data bulanan,
untuk membuat buku besar akuntansi.
Dari kolom ke kolom bersebelahan berurut,
dari januari sampai desember,
sebagai rujukan bagi perhitungan neraca dan rugi laba.

Untuk contoh sekarang kita pakai,
yang sederhana saja dahulu yaitu belanja.

![Lembar Kerja: Rumus Rujukan: Sumber Source Data][39ss-belanja-source]

Isinya dari januari sampai desember,
dari kolom `D` sampai `O`.
namun untuk keperluan screenshot,
tampilannya saya sembunyikan sebagian.

### HLOOKUP

Hayuks kita lihat hasilnya, dahulu, baru nanti kita lihat cara kerjanya.

![Lembar Kerja: Rumus Rujukan: Export HLOOKUP][39ex-belanja-hlookup]

Nilai Kopi bulan delapan dapat dicari dari:

{% highlight "xlsx" %}
=HLOOKUP($D$11;$D$3:$O$8;4)
{% endhighlight %}

Sekarang kita lihat kotaknya lagi,
cara kerjanya adalah dengan mencari nilai `8`,
kemudian dicari baris keempat.

![Lembar Kerja: Rumus Rujukan: Screenshot HLOOKUP][39ss-belanja-hlookup]

### INDEX

Saya biasanya memakai `INDEX` karena lebih sederhana.
kita lihat hasilnya dahulu supaya,
ada bayangan atas apa yang ingin saya capai.

![Lembar Kerja: Rumus Rujukan: Export INDEX][39ex-belanja-index]

Berikutnyan nilai Kopi bulan tujuh dapat dicari dari:

{% highlight "xlsx" %}
 =INDEX($D6:$O6;1;$D$20)
{% endhighlight %}

![Lembar Kerja: Rumus Rujukan: Screenshot INDEX][39ss-belanja-index]

Saya akan memberikan contoh
yang saya pakai pakai dalam keseharian
di artikel lain.

### XLOOKUP

Rumus `XLOOKUP` adalah hal baru dei Office365, di Excel yang lama belum ada.
Di Libreoffice kita mesti memasang ekstensi terlebih dahulu.

* [github.com/goosepirate/lox365](https://github.com/goosepirate/lox365)

Penggunaannya dapat dilihat sebagaimana berikut:

![Lembar Kerja: Rumus Rujukan: Export XLOOKUP][39ex-belanja-xlookup]

Kali ini dapat langsung kita masukkan nama bulannya.
Nilai Kopi bulan `JUN` dapat dicari dari:

{% highlight "xlsx" %}
 =XLOOKUP($D$29;$D$4:$O$4;$D6:$O6)
{% endhighlight %}

Mari kita lacak asal angka yang dihasilkan,
dengan menjelajahi kotak referensinya.

![Lembar Kerja: Rumus Rujukan: Screenshot XLOOKUP][39ss-belanja-xlookup]

Seperti terlihat di atas, yang dilihat hanyalah bagian nama bulan saja,
lalu langsung masuk ke baris yang terkait kopi saja.

Cukup efisien, namun saya masih harus memikirkan kompatibilitas,
keitka saya harus mengirimkan sheet kepada teman2 yang lain.
Sangat menarik! Kita lihat saja penggunaaannya dalam keseharian,
dalam beberapa tahun setelah ini.

### Ringkasan

Sebagai ringkasan saya berikan rumus selengkapnya,
dan juga alamat cell-nya,
dengan versi lengkap, yang tidak dipotong.

![Lembar Kerja: Rumus Acuan: Screenshot Lengkap][39ss-formula-lengkap]

Karena saya rasa hurufnya masih terlalu kecil2 untuk dibaca,
sebaiknya tetap saya berikan versi yang dipotong.

![Lembar Kerja: Rumus Acuan: Screenshot Potong][39ss-formula-potong]

Sekian untuk formula.
Setelah format dan formula, kita akan bahas form.

-- -- --

<a name="selanjutnya"></a>

## Apa Selanjutnya?

Mari kita tunggu artikelnya.

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

[39ex-belanja-source]:  {% postimage %}/lembarkerja/2018/08/39ex-belanja-source.png
[39ss-belanja-source]:  {% postimage %}/lembarkerja/2018/08/39ss-belanja-source.png

[39ex-belanja-hlookup]: {% postimage %}/lembarkerja/2018/08/39ex-belanja-hlookup.png
[39ss-belanja-hlookup]: {% postimage %}/lembarkerja/2018/08/39ss-belanja-hlookup.png

[39ex-belanja-index]:   {% postimage %}/lembarkerja/2018/08/39ex-belanja-index.png
[39ss-belanja-index]:   {% postimage %}/lembarkerja/2018/08/39ss-belanja-index.png

[39ex-belanja-xlookup]: {% postimage %}/lembarkerja/2018/08/39ex-belanja-xlookup.png
[39ss-belanja-xlookup]: {% postimage %}/lembarkerja/2018/08/39ss-belanja-xlookup.png